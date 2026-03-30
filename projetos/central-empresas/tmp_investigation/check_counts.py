import urllib.request
import json

def get_counts():
    tables = ["Empresas", "empresas_lookup", "chargebacks", "webhooks_pedidos", "Rastreios_Nicolas"]
    results = {}
    for t in tables:
        # Usando select=count para minimizar dados
        url = f"https://owfiuwamsxdkzuoqtjso.supabase.co/rest/v1/{t}"
        headers = {
            "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Zml1d2Ftc3hka3p1b3F0anNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MDkzMzMsImV4cCI6MjA3NTA4NTMzM30.mwUMmfla2IgonDar4SGWmp84tyFGShcSxcZ1NHI7kiQ",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Zml1d2Ftc3hka3p1b3F0anNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MDkzMzMsImV4cCI6MjA3NTA4NTMzM30.mwUMmfla2IgonDar4SGWmp84tyFGShcSxcZ1NHI7kiQ",
            "Prefer": "count=exact"
        }
        req = urllib.request.Request(url, headers=headers)
        try:
            with urllib.request.urlopen(req) as response:
                results[t] = response.headers.get("Content-Range")
        except Exception as e:
            results[t] = f"Error: {e}"
    return results

print(json.dumps(get_counts(), indent=2))
