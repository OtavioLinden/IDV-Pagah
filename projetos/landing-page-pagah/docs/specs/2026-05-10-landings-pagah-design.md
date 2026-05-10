# Spec — 4 Landing Pages Pagah

**Data:** 2026-05-10
**Autor:** otavio (com Claude)
**Status:** Aprovado, pronto para planejamento de implementação

## Contexto

A Pagah quer um novo site (`pagah.com`) que substitua o atual. O chefe (CEO) testou no Lovable uma versão (https://pagah-profit-engine.lovable.app/) que serve como referência de copy e estrutura, mas tem cara de IA genérica e poderia ter design muito mais premium.

**Posicionamento principal:** "Checkout + Call Center + Juros do Parcelamento para Você."

**Público:** produtores de produtos físicos (encapsulados, suplementos, gotas, cosméticos) que vendem com tráfego pago e querem mais lucro por cliente.

## Objetivo

Construir **4 versões diferentes** da mesma landing page para o chefe escolher (ou combinar). As 4 compartilham a copy e a estrutura — mudam só o "mood" visual. Permite comparação real lado-a-lado.

## As 4 versões

| Sigla | Nome | Mood | Inspiração |
|---|---|---|---|
| **A** | Premium Fintech Dark | Tecnológico, sério, "máquina de lucro" | Stripe, Linear |
| **B** | Editorial Bold | Tipografia gigante, mood revista, asymmetric | Apple, Vercel, Cabinet Grotesk |
| **C** | Living Tech / Bento | Bento grid com perpetual motion, dashboard "respirando" | Apple Control Center, Linear |
| **D** | Pagah Heritage Refined | Fiel à identidade Pagah elevada | Sistema Pagah real |

## Stack técnica

- **Next.js 15** (App Router, RSC, Turbopack)
- **React 19**
- **Tailwind CSS v4** (CSS-first config, `@theme` inline)
- **Framer Motion** (animação)
- **shadcn/ui** customizado por versão
- **TypeScript** strict
- **next/font** (Geist, Cabinet Grotesk, Inter Tight, Satoshi, Ubuntu, JetBrains Mono)

## Decisões aprovadas

| Tópico | Decisão |
|---|---|
| Organização | 1 projeto Next.js, 4 rotas + home switcher |
| Escopo | Full em todas (13 seções × 4 versões = 52 implementações de seção) |
| Fontes | Premium diferentes em cada versão (ver tabela tokens abaixo) |
| Imagens | Geradas com nano-banana-pro (mocks dashboard, fotos call center, mockups) |
| Deploy | Local primeiro, com `vercel.json` configurado pra subir depois |

## Arquitetura de pastas

```
landing-page-pagah/
├── app/
│   ├── layout.tsx                    # Layout root (carrega fontes globais)
│   ├── page.tsx                      # Home/switcher (cards-preview das 4)
│   ├── globals.css                   # Tokens globais + Tailwind v4
│   ├── v1-premium-dark/
│   │   ├── layout.tsx                # Tokens + fontes específicas (CSS vars locais)
│   │   └── page.tsx                  # 13 seções no estilo A
│   ├── v2-editorial/{layout,page}.tsx
│   ├── v3-living-tech/{layout,page}.tsx
│   └── v4-heritage/{layout,page}.tsx
├── content/
│   └── landing.ts                    # COPY CENTRALIZADA (toda a copy do prompt)
├── components/
│   ├── shared/                       # Footer, integrações, ícones, ui base
│   ├── v1/                           # Componentes exclusivos de A
│   ├── v2/, v3/, v4/                 # Idem
├── public/images/{v1,v2,v3,v4}/      # Imagens nano-banana por versão
├── lib/utils.ts                      # cn() helper, etc.
├── docs/specs/                       # Specs e ADRs
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── package.json
├── .gitignore
└── vercel.json                       # configurado mas sem deploy automático
```

**Princípio-chave:** copy é a MESMA nas 4 versões. Editar uma palavra = editar 1 lugar (`content/landing.ts`).

## Tokens & fontes por versão

| Versão | Display font | Body font | Mono | Modo | Background | Acento |
|---|---|---|---|---|---|---|
| **A — Premium Dark** | Geist 700 | Geist | Geist Mono | dark | `#0A0A0A` | halo `#F1E52F` + liquid glass |
| **B — Editorial Bold** | Cabinet Grotesk 800 | Inter Tight | — | light | `#FAFAFA` | blocos pretos `#0A0A0A` + amarelo pontual |
| **C — Living Tech** | Satoshi 900 | Satoshi | JetBrains Mono | dark | `#0F0F10` | bento tiles `#1A1A1C` + amarelo gradient |
| **D — Heritage** | Ubuntu Bold | Ubuntu | Ubuntu Mono | light | `#F2F2F2` (gelo Pagah) | faixa amarela + cards chumbo `#1C1C1C` |

**Cor de marca constante nas 4:** `#F1E52F` (amarelo Pagah).

## As 13 seções da landing

A copy de cada seção vem do prompt original do chefe (arquivo `promt-pra-pagina-antiga` na raiz do projeto). Lista resumida:

1. Header fixo (logo + menu + CTAs)
2. Hero (headline + sub + bullets + dashboard mock)
3. Impacto "Você pode estar perdendo dinheiro em 3 lugares"
4. Pilares: Checkout + Call Center + Juros (3 colunas)
5. Diferencial #1: "O atendimento é lucro" (com foto call center)
6. Comparativo Juros do parcelamento (lado a lado)
7. Módulo X1 (mockup vendedor + 4 cards)
8. Antifraude e Aprovação
9. Especialização produtos físicos
10. Integrações (grid de logos)
11. Taxa & modelo (preço + tabela prazos)
12. Prova social (depoimentos + métricas)
13. Comparativo Pagah vs plataforma comum + CTA final + Footer

## Diretrizes anti-AI-slop (validadas pelas skills)

Aplicar em TODAS as versões (do `impeccable`, `taste-skill`, `frontend-design`):

- **Tipografia:** sem Inter/Roboto/Arial. Sem H1 gigante de 8rem em todas — controlar hierarquia com peso e cor.
- **Cor:** OKLCH, neutros com chroma 0.005-0.01 tintando para hue de marca (amarelo Pagah). Sem `#000` puro nem `#fff` puro.
- **Layout:** sem 3-column card row genérico. Usar zigzag, asymmetric, masonry, bento.
- **Motion:** spring physics (`stiffness: 100, damping: 20`) — sem linear easing. Animar só `transform` e `opacity`. Respeitar `prefers-reduced-motion`.
- **Hero:** sem texto centralizado sobre imagem escura — variar entre versões.
- **Componentes:** shadcn/ui customizado em cada versão (radii/cores/shadows próprios), nunca defaults.
- **Imagens:** sem Unsplash genérico. Usar nano-banana-pro pra geração customizada.

## Plano de execução (alto nível)

1. **Setup base** — Next.js + Tailwind v4 + Framer Motion + shadcn/ui init + fontes via `next/font`
2. **Content layer** — extrair copy do prompt do chefe pra `content/landing.ts` tipado
3. **Componentes shared** — Footer, dados de integrações, ícones de acento
4. **Home switcher** — `app/page.tsx` com 4 cards-preview lincando pras rotas
5. **Build de A (Premium Dark)** — landing completa, serve como referência
6. **Geração imagens nano-banana de A** (em paralelo)
7. **Build de B, C, D** — paralelizar via subagents quando A estiver de pé
8. **Auditoria** — `vercel-web-design-guidelines` (a11y/UX), `impeccable` (slop test), `design-motion-principles` (motion)
9. **Polish + deploy local** — rodar `npm run dev`, validar em Chrome DevTools, configurar `vercel.json`

## Riscos e mitigações

| Risco | Mitigação |
|---|---|
| 4 versões viram trabalho dobrado | Copy centralizada, componentes shared onde fizer sentido |
| Imagens nano-banana custam tokens/tempo | Fazer só após estrutura HTML estar pronta, batch por versão |
| Versões parecerem similares | Tokens diferentes por rota (CSS vars locais), fontes diferentes, layouts intencionalmente distintos |
| shadcn defaults vazarem | Customizar `components.json` e overrides de CSS por rota |
| Bundle size com 6 famílias de fonte | `next/font` com subset apenas dos pesos usados, lazy-loading por rota |

## Critérios de sucesso

- [ ] As 4 landings rodam em rotas separadas (`/v1-premium-dark`, etc.)
- [ ] Home `/` mostra preview-card de cada versão e linka pra elas
- [ ] Copy do prompt do chefe presente integralmente em todas as 4
- [ ] Cada versão tem identidade visual distinta o suficiente pro chefe distinguir num bate-olho
- [ ] Animações com spring physics, respeitando `prefers-reduced-motion`
- [ ] Auditoria `vercel-web-design-guidelines` aprovada (a11y básica + UX)
- [ ] AI slop test do `impeccable` passa nas 4
- [ ] `npm run build` sem erros, sem warnings de bundle gigante
- [ ] `vercel.json` configurado pra deploy 1-clique

## Próximos passos

1. ✅ Spec aprovado pelo usuário
2. ➡️ Invocar `writing-plans` skill pra gerar plano de implementação executável
3. ➡️ Executar plano fase a fase com checkpoints
