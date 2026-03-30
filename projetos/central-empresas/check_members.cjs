const fs = require('fs');

async function checkCurrentMembers() {
  const inboxId = "1926";
  const url = `https://chatwoot.levezaativa.site/api/v1/accounts/1/inbox_members/${inboxId}`;
  const token = 'qwFEz9XEHzf3wEFAqR7Qdg4q';
  
  console.log(`Checking members for Inbox ${inboxId}...`);

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'api_access_token': token
      }
    });

    const data = await response.json();
    console.log('\n--- CURRENT MEMBERS ---');
    const members = data.payload || [];
    members.forEach(m => {
      console.log(`ID: ${m.id} | Name: ${m.name}`);
    });

  } catch (error) {
    console.error('Fetch error:', error);
  }
}

checkCurrentMembers();
