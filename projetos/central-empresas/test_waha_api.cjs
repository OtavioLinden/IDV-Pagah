const fs = require('fs');

async function testApi() {
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

    // Read first session from exact_data.json
    const empresasData = JSON.parse(fs.readFileSync('exact_data.json', 'utf8'));
    const firstSession = empresasData[0].Sessão;
    console.log(`Using Session: ${firstSession}`);

    const baseUrl = env.WAHA_API_URL;
    const apiKey = env.WAHA_API_KEY;
    const url = `${baseUrl}?session=${encodeURIComponent(firstSession)}`;

    console.log(`Fetching from: ${url}`);
    
    // Make the request using native fetch
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'X-Api-Key': apiKey
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

testApi();
