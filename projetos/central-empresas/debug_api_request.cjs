const fs = require('fs');

async function debugRequest() {
  const url = 'https://chatwoot.levezaativa.site/api/v1/accounts/1/inbox_members';
  const token = 'qwFEz9XEHzf3wEFAqR7Qdg4q';
  
  const payload = {
    inbox_id: "1926",
    user_ids: [16, 1] // 16 is "Atendente - 102", 1 is "800K"
  };

  console.log('--- REQUEST ---');
  console.log('URL:', url);
  console.log('Headers:', { 'api_access_token': '***' });
  console.log('Body:', JSON.stringify(payload, null, 2));

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api_access_token': token
      },
      body: JSON.stringify(payload)
    });

    const data = await response.text();
    console.log('\n--- RESPONSE ---');
    console.log('Status:', response.status);
    console.log('Data:', data);

    try {
      const jsonData = JSON.parse(data);
      console.log('Parsed JSON:', JSON.stringify(jsonData, null, 2));
    } catch (e) {
      console.log('Response is not valid JSON');
    }

  } catch (error) {
    console.error('Fetch error:', error);
  }
}

debugRequest();
