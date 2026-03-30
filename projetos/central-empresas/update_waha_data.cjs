const fs = require('fs');

async function fetchAllInboxIds() {
  try {
    // 1. Get ENV
    const envFile = fs.readFileSync('.env', 'utf8');
    const envLines = envFile.split('\n');
    const env = {};
    envLines.forEach(line => {
      const match = line.match(/^([^=]+)=(.*)$/);
      if (match) {
        env[match[1].trim()] = match[2].trim();
      }
    });

    const baseUrl = env.WAHA_API_URL;
    const apiKey = env.WAHA_API_KEY;

    // 2. Read current exact data
    const empresasData = JSON.parse(fs.readFileSync('exact_data.json', 'utf8'));

    // 3. Fetch WAHA data for each company
    console.log('Fetching WAHA API data for all sessions...');
    
    for (let i = 0; i < empresasData.length; i++) {
        const sessionName = empresasData[i].Sessão;
        if (!sessionName) continue;
        
        const url = `${baseUrl}?session=${encodeURIComponent(sessionName)}`;
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'X-Api-Key': apiKey
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                if (data && data.length > 0 && data[0].config && data[0].config.inboxId) {
                    empresasData[i].inboxId = data[0].config.inboxId;
                    console.log(`[OK] Session ${sessionName} -> InboxId: ${empresasData[i].inboxId}`);
                } else {
                    console.log(`[IGNORE] Session ${sessionName} -> No inboxId found.`);
                }
            } else {
                console.log(`[ERROR] Session ${sessionName} -> HTTP ${response.status}`);
            }
        } catch (e) {
            console.error(`[FAIL] Session ${sessionName} -> Request failed: ${e.message}`);
        }
    }

    // 4. Update App.jsx with new enriched data
    console.log('\nUpdating App.jsx with enriched data...');
    const appPath = 'src/App.jsx';
    let appCode = fs.readFileSync(appPath, 'utf8');
    
    const enrichedDataString = JSON.stringify(empresasData, null, 2);
    appCode = appCode.replace(/const empresasData = \[[^]*?\];/, `const empresasData = ${enrichedDataString};`);
    
    fs.writeFileSync(appPath, appCode, 'utf8');
    console.log('App.jsx updated successfully!');
    
  } catch (error) {
    console.error('Core error:', error);
  }
}

fetchAllInboxIds();
