const fs = require('fs');

async function run() {
  const apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Zml1d2Ftc3hka3p1b3F0anNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MDkzMzMsImV4cCI6MjA3NTA4NTMzM30.mwUMmfla2IgonDar4SGWmp84tyFGShcSxcZ1NHI7kiQ';
  const url = 'https://owfiuwamsxdkzuoqtjso.supabase.co/rest/v1/Empresas?select=*&order=id.asc';
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'apikey': apikey,
        'Authorization': `Bearer ${apikey}`
      }
    });
    const data = await response.json();
    fs.writeFileSync('exact_data.json', JSON.stringify(data, null, 2), 'utf8');
    console.log('DONE');
  } catch (err) {
    console.error(err);
  }
}

run();
