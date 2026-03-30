const fs = require('fs');

async function syncAllData() {
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

    const wahaBaseUrl = env.WAHA_API_URL;
    const wahaApiKey = env.WAHA_API_KEY;
    const chatwootToken = env.CHATWOOT_API_TOKEN;
    const chatwootAccountId = 1;

    // 2. Read current exact data
    const dataPath = 'public/exact_data.json';
    const empresasData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

    console.log('--- STARTING UNIFIED SYNC ---');
    
    for (let i = 0; i < empresasData.length; i++) {
        const company = empresasData[i];
        const sessionName = company.Sessão;
        
        console.log(`\n[${i+1}/${empresasData.length}] Processing: ${company.Nome || 'Unknown'}`);

        // A. Fetch Inbox ID from WAHA
        if (sessionName) {
            const wahaUrl = `${wahaBaseUrl}?session=${encodeURIComponent(sessionName)}`;
            try {
                const wahaRes = await fetch(wahaUrl, {
                    method: 'GET',
                    headers: { 'accept': 'application/json', 'X-Api-Key': wahaApiKey }
                });
                
                if (wahaRes.ok) {
                    const wahaData = await wahaRes.json();
                    if (wahaData && wahaData.length > 0 && wahaData[0].config && wahaData[0].config.inboxId) {
                        empresasData[i].inboxId = wahaData[0].config.inboxId;
                        console.log(`   -> InboxId found: ${empresasData[i].inboxId}`);
                    } else {
                        console.log('   -> No InboxId found in WAHA.');
                        // Keep existing if any, or set null? Let's keep existing if we don't find a new one
                    }
                }
            } catch (e) {
                console.error(`   [WAHA ERROR]: ${e.message}`);
            }
        }

        // B. Fetch Agents from Chatwoot
        const currentInboxId = empresasData[i].inboxId;
        if (currentInboxId) {
            const cwUrl = `https://chatwoot.levezaativa.site/api/v1/accounts/${chatwootAccountId}/inbox_members/${currentInboxId}`;
            try {
                const cwRes = await fetch(cwUrl, {
                    method: 'GET',
                    headers: { 'api_access_token': chatwootToken }
                });
                
                if (cwRes.ok) {
                    const cwData = await cwRes.json();
                    const members = cwData.payload || [];
                    const names = members.map(m => m.name || m.available_name);
                    empresasData[i].agentes = names;
                    console.log(`   -> Agents found: ${names.join(', ')}`);
                } else {
                    console.log(`   [CHATWOOT ERROR] HTTP ${cwRes.status}`);
                    empresasData[i].agentes = empresasData[i].agentes || [];
                }
            } catch (e) {
                console.error(`   [CHATWOOT ERROR]: ${e.message}`);
                empresasData[i].agentes = empresasData[i].agentes || [];
            }
        } else {
            empresasData[i].agentes = [];
        }
    }

    // 3. Save back to exact_data.json
    fs.writeFileSync(dataPath, JSON.stringify(empresasData, null, 2), 'utf8');
    console.log('\n[SUCCESS] public/exact_data.json updated.');

    // 4. Update note
    console.log('[INFO] Dashboards will reflect changes on next refresh.');

  } catch (error) {
    console.error('FATAL SYNC ERROR:', error);
  }
}

syncAllData();
