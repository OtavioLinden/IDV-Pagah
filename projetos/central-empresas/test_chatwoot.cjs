const fs = require('fs');

async function testChatwootApi() {
  try {
    // Parse .env
    const envFile = fs.readFileSync('.env', 'utf8');
    const envLines = envFile.split('\n');
    const env = {};
    envLines.forEach(line => {
      const match = line.match(/^([^=]+)=(.*)$/);
      if (match) {
        env[match[1].trim()] = match[2].trim();
      }
    });

    const url = env.CHATWOOT_API_URL;
    const token = env.CHATWOOT_API_TOKEN;

    console.log(`Fetching from: ${url}`);
    
    // Make the request using native fetch
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'api_access_token': token
      }
    });

    const data = await response.text();
    console.log(`\n--- STATUS: ${response.status} ---`);
    console.log('\n--- RESPONSE DATA ---');
    console.log(data);

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

testChatwootApi();
