const fs = require('fs');

async function enrichWithAgents() {
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

    const token = env.CHATWOOT_API_TOKEN;
    const accountId = 1; // Based on the provided URL

    // 2. Read current exact data (should have inboxId)
    const empresasData = JSON.parse(fs.readFileSync('exact_data.json', 'utf8'));

    // 3. Fetch Agents for each company
    console.log('Fetching Chatwoot agents for each inbox...');
    
    for (let i = 0; i < empresasData.length; i++) {
        const inboxId = empresasData[i].inboxId;
        if (!inboxId) {
            empresasData[i].agentes = [];
            continue;
        }
        
        const url = `https://chatwoot.levezaativa.site/api/v1/accounts/${accountId}/inbox_members/${inboxId}`;
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'api_access_token': token
                }
            });
            
            if (response.ok) {
                const result = await response.json();
                const members = result.payload || [];
                const agentNames = members.map(m => m.name || m.available_name);
                empresasData[i].agentes = agentNames;
                console.log(`[OK] Inbox ${inboxId} -> Agents: ${agentNames.join(', ')}`);
            } else {
                console.log(`[ERROR] Inbox ${inboxId} -> HTTP ${response.status}`);
                empresasData[i].agentes = [];
            }
        } catch (e) {
            console.error(`[FAIL] Inbox ${inboxId} -> Request failed: ${e.message}`);
            empresasData[i].agentes = [];
        }
    }

    // 4. Save to json for reference
    fs.writeFileSync('exact_data.json', JSON.stringify(empresasData, null, 2), 'utf8');

    // 5. Update App.jsx with new enriched data
    console.log('\nUpdating App.jsx with agent information...');
    const appPath = 'src/App.jsx';
    let appCode = fs.readFileSync(appPath, 'utf8');
    
    const enrichedDataString = JSON.stringify(empresasData, null, 2);
    // Replace the empresasData array in App.jsx
    appCode = appCode.replace(/const empresasData = \[[^]*?\];/, `const empresasData = ${enrichedDataString};`);
    
    fs.writeFileSync(appPath, appCode, 'utf8');
    console.log('App.jsx updated successfully!');
    
  } catch (error) {
    console.error('Core error:', error);
  }
}

enrichWithAgents();
