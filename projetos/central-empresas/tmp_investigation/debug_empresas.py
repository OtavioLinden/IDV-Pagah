import urllib.request
import json
import urllib.parse

def debug_query(table):
    # Tentando com select=* e solicitando o count exato no header
    url = f"https://owfiuwamsxdkzuoqtjso.supabase.co/rest/v1/{table}?select=*"
    headers = {
        "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Zml1d2Ftc3hka3p1b3F0anNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MDkzMzMsImV4cCI6MjA3NTA4NTMzM30.mwUMmfla2IgonDar4SGWmp84tyFGShcSxcZ1NHI7kiQ",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Zml1d2Ftc3hka3p1b3F0anNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MDkzMzMsImV4cCI6MjA3NTA4NTMzM30.mwUMmfla2IgonDar4SGWmp84tyFGShcSxcZ1NHI7kiQ",
        "Prefer": "count=exact"
    }
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            content = response.read().decode()
            data = json.loads(content) if content else []
            return {
                "table": table,
                "status": response.status,
                "content_range": response.headers.get("Content-Range"),
                "data": data,
                "headers": dict(response.headers)
            }
    except urllib.error.HTTPError as e:
        return {"table": table, "error_code": e.code, "error_body": e.read().decode()}
    except Exception as e:
        return {"table": table, "error": str(e)}

# Testando variações de nome só por desencargo, mas focando na solicitada
print("--- Investigação Detalhada: Empresas ---")
result = debug_query("Empresas")
print(json.dumps(result, indent=2))

if not result.get("data"):
    print("\n--- Tentando com esquema explícito via Header (se houver) ---")
    # Em alguns casos raros o esquema pode não ser o public
    # Mas o PostgREST do Supabase é configurado para public por padrão.
