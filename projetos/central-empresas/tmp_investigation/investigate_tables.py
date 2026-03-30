import urllib.request
import json

def query_supabase(table, params=""):
    url = f"https://owfiuwamsxdkzuoqtjso.supabase.co/rest/v1/{table}?{params}"
    headers = {
        "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Zml1d2Ftc3hka3p1b3F0anNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MDkzMzMsImV4cCI6MjA3NTA4NTMzM30.mwUMmfla2IgonDar4SGWmp84tyFGShcSxcZ1NHI7kiQ",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Zml1d2Ftc3hka3p1b3F0anNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MDkzMzMsImV4cCI6MjA3NTA4NTMzM30.mwUMmfla2IgonDar4SGWmp84tyFGShcSxcZ1NHI7kiQ"
    }
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            return json.loads(response.read().decode())
    except Exception as e:
        return f"Error querying {table}: {e}"

print("--- Empresas (Exact) ---")
print(query_supabase("Empresas", "select=*&limit=1"))

print("\n--- empresas_lookup ---")
print(query_supabase("empresas_lookup", "select=*&limit=1"))

print("\n--- Relatório Chamada - Pagah ---")
print(query_supabase("Relatório Chamada - Pagah", "select=*&limit=1"))
