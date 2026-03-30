async function getData() {
  const url = 'https://owfiuwamsxdkzuoqtjso.supabase.co/rest/v1/Empresas?select=*';
  const apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Zml1d2Ftc3hka3p1b3F0anNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MDkzMzMsImV4cCI6MjA3NTA4NTMzM30.mwUMmfla2IgonDar4SGWmp84tyFGShcSxcZ1NHI7kiQ';
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'apikey': apikey,
        'Authorization': `Bearer ${apikey}`
      }
    });
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
  }
}

getData();
