# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (localhost:5173)
npm run build     # Production build
npm run lint      # ESLint
npm run preview   # Preview production build
```

Validation scripts (from `.agent/scripts/`):
```bash
python .agent/scripts/checklist.py .                          # Core checks (dev/pre-commit)
python .agent/scripts/verify_all.py . --url http://localhost:3000  # Full suite (pre-deploy)
```

## Architecture

**Stack:** React 19 + Vite 7 + Tailwind CSS v4 + Framer Motion. No router — single-page app.

**Data sources (all direct REST calls, no SDK):**
- **Supabase** — `Empresas` table (companies). CRUD via REST API with hardcoded anon key in `App.jsx`.
- **Chatwoot** (`/api/chatwoot/...`) — fetches agents, manages inboxes and inbox members.
- **WAHA** (`/api/waha/...`) — WhatsApp session management (create, start, QR code, apps/integrations).

**Proxy:** Both `/api/chatwoot` and `/api/waha` are proxied in `vite.config.js` (dev) and `vercel.json` (prod) to avoid CORS.

**Component flow:**
- `main.jsx` → wraps `App` in `ToastProvider` (from `Toast.jsx`)
- `App.jsx` — root component: fetches all data on mount, holds all companies state, renders `CompanyCard` list + create/edit/delete modals via `createPortal`
- `CompanyCard.jsx` — per-company card with inline editors (agents, messages, schedule) and session management (create WAHA session, start, QR scan, create Chatwoot inbox with webhook)

**Key WAHA→Chatwoot integration flow** (in `CompanyCard.handleCreateInbox`):
1. Check/create Chatwoot Inbox via API
2. Create WAHA App linking session to Chatwoot (uses MD5 of session name as app ID)
3. Patch Chatwoot Inbox webhook URL to point to WAHA

## Design System

Defined in `src/index.css` using Tailwind v4 `@theme`:
- `brand-accent`: amber/gold (`#f59e0b`)
- `brand-success`: emerald (`#10b981`)
- `brand-error`: red (`#ef4444`)
- `glass-panel`: reusable dark card component (backdrop blur, subtle border)
- Fonts: Inter (UI) + JetBrains Mono (code/IDs)

Dark-only theme. No light mode. No blue anywhere by design.

## Company Data Model (Supabase `Empresas` table)

Key fields: `id`, `Nome`, `id_Empresa`, `tipo_msg`, `Atendente`, `Delay`, `pode_repetir`, `ativo`, `Sessão`, `horario` (object with weekday arrays of `{inicio, fim}` slots), `Mensagens`, `msg_fora_de_hora`, `Número_id`/`inboxId`.
