import urllib.request
import json
import urllib.parse

def query_supabase(table, params=""):
    # Encode the table name for the URL
    encoded_table = urllib.parse.quote(table)
    url = f"https://owfiuwamsxdkzuoqtjso.supabase.co/rest/v1/{encoded_table}?{params}"
    headers = {
        "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Zml1d2Ftc3hka3p1b3F0anNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MDkzMzMsImV4cCI6MjA3NTA4NTMzM30.mwUMmfla2IgonDar4SGWmp84tyFGShcSxcZ1NHI7kiQ",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Zml1d2Ftc3hka3p1b3F0anNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MDkzMzMsImV4cCI6MjA3NTA4NTMzM30.mwUMmfla2IgonDar4SGWmp84tyFGShcSxcZ1NHI7kiQ"
    }
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            return json.loads(response.read().decode())
    except urllib.error.HTTPError as e:
        return f"HTTP Error {e.code}: {e.read().decode()}"
    except Exception as e:
        return f"Error: {e}"

print("--- Todas as Empresas em 'empresas_lookup' ---")
print(json.dumps(query_supabase("empresas_lookup", "select=*"), indent=2))

print("\n--- Estrutura de 'Empresas' (OpenAPI columns) ---")
# I'll just check if there's any data at all again, without limit
print(json.dumps(query_supabase("Empresas", "select=*"), indent=2))
