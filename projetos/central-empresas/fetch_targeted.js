async function getData() {
  const apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Zml1d2Ftc3hka3p1b3F0anNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MDkzMzMsImV4cCI6MjA3NTA4NTMzM30.mwUMmfla2IgonDar4SGWmp84tyFGShcSxcZ1NHI7kiQ';
  const baseUrl = 'https://owfiuwamsxdkzuoqtjso.supabase.co/rest/v1/Empresas';
  
  try {
    // 1. Get All IDs
    const respAll = await fetch(`${baseUrl}?select=id`, {
      method: 'GET',
      headers: { 'apikey': apikey, 'Authorization': `Bearer ${apikey}` }
    });
    const allIds = await respAll.json();
    console.log('--- ALL IDS IN TABLE ---');
    console.log(allIds.map(i => i.id).sort((a,b) => a-b));

    // 2. Check ID 2 specifically
    const resp2 = await fetch(`${baseUrl}?id=eq.2`, {
      method: 'GET',
      headers: { 'apikey': apikey, 'Authorization': `Bearer ${apikey}` }
    });
    const data2 = await resp2.json();
    console.log('\n--- DATA FOR ID 2 ---');
    console.log(JSON.stringify(data2, null, 2));

    // 3. Check ID 5 specifically
    const resp5 = await fetch(`${baseUrl}?id=eq.5`, {
      method: 'GET',
      headers: { 'apikey': apikey, 'Authorization': `Bearer ${apikey}` }
    });
    const data5 = await resp5.json();
    console.log('\n--- DATA FOR ID 5 ---');
    console.log(JSON.stringify(data5, null, 2));

  } catch (err) {
    console.error(err);
  }
}

getData();
