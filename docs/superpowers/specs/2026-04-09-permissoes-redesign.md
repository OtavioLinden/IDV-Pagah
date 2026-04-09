# Design: Redesign da Tela de Permissões

**Data:** 2026-04-09
**Projeto:** Pagah Prototipos
**Tipo:** Protótipo visual (sem backend)
**Local do arquivo final:** `projetos/permissoes/`

---

## Contexto

A tela atual de permissões da Pagah tem dois problemas principais:

1. **Fluxo fragmentado** — são duas telas separadas (lista de grupos + editar permissões), obrigando o usuário a navegar entre páginas
2. **Organização confusa** — mais de 90 permissões jogadas em 16 categorias sem relação com os menus da plataforma, com visual desatualizado (headers listrados amarelo/preto) e difícil de navegar

O objetivo é redesenhar para uma experiência em tela única, intuitiva, organizada por menus da sidebar, e visualmente alinhada com o design system da Pagah.

---

## Layout Geral

**Tela única com split view (lado a lado):**

```
+------------------------------------------------------------------+
| Header amarelo #F1E52F (fixo, 56px, 100% largura)               |
+------+-----------------------------------------------------------+
|      |  +----------------+  +----------------------------------+ |
| Side |  | PAINEL ESQUERDO|  | PAINEL DIREITO                   | |
| bar  |  |                |  |                                    | |
|      |  | Lista de       |  | [Permissões] [Usuários]  <- tabs  | |
| #FFF |  | Grupos         |  |                                    | |
|      |  |                |  | Conteúdo da aba ativa              | |
|      |  +----------------+  +----------------------------------+ |
+------+-----------------------------------------------------------+
```

- Background da página: `#F2F2F2`
- Ambos os painéis são cards brancos (`#FFFFFF`, border-radius 12-16px, sombra sutil)
- Sidebar padrão com 11 itens, item "Configurações" marcado como ativo

---

## Painel Esquerdo — Lista de Grupos

### Estrutura

- Título: "Grupos de Permissões" (h2, bold, escuro)
- Botão "+ Novo Grupo" (botão primário amarelo `#F1E52F`, texto `#1C1C1C`)
- Lista de cards empilhados, um por grupo

### Card de Grupo

Cada card mostra:

| Elemento | Detalhe |
|----------|---------|
| Nome do grupo | Texto bold, ex: "ADMIN", "Comercial" |
| Badge de nível | Pill-shaped, cor baseada na % de permissões ativas (ver tabela abaixo) |
| Quantidade de usuários | Texto pequeno, ex: "5 usuários" |
| Botão editar nome | Ícone `edit` (Material Symbols Rounded), aparece ao hover ou sempre visível |

### Faixas de Nível (badge de cor)

| Faixa | % de permissões ativas | Cor | Label |
|-------|----------------------|-----|-------|
| Total | 90% ou mais | Verde `#22C55E` | Total |
| Quase total | 70% a 89% | Verde claro (green-300) | Quase total |
| Parcial | 30% a 69% | Amarelo `#F1E52F` | Parcial |
| Restrito | Menos de 30% | Vermelho `#EF4444` | Restrito |

### Estados

- **Grupo selecionado:** fundo amarelo `#F1E52F` com texto `#1C1C1C`
- **Grupo não selecionado:** fundo `#F8F8F8` com texto `#575756`
- **Hover:** leve destaque de fundo

### Interação

- Ao clicar num grupo, o painel direito carrega as permissões/usuários daquele grupo
- O primeiro grupo da lista vem selecionado por padrão ao abrir a página

---

## Painel Direito — Sistema de Abas

### Abas (Tabs)

Duas abas no topo do painel direito:

1. **Permissões** — aba padrão, aberta ao selecionar um grupo
2. **Usuários (N)** — mostra quantidade de usuários vinculados no label da aba

Estilo das abas:
- Aba ativa: texto `#1C1C1C`, font-weight 600, borda inferior `#F1E52F` (2px)
- Aba inativa: texto `#999`, sem borda inferior
- Separador: linha `#EBEBEB` abaixo das abas

---

## Aba "Permissões"

### Seções por Menu

10 seções, cada uma correspondendo a um menu da sidebar da Pagah:

| # | Seção | Ícone Material Symbols | Permissões incluídas |
|---|-------|----------------------|---------------------|
| 1 | Dashboard | `home` | Dashboard Admin, Dashboard Terceiros, Dashboard Vendedor, Dashboard Cash on Delivery |
| 2 | Relatórios | `monitoring` | CallCenter, Comparativo Vendedores, Marketplace Relatórios, Relatório Atendimentos Leads, Relatório mensagens BotConversa, Relatório Tipos de Atendimentos |
| 3 | Produtos | `box_add` | Produtos (visualizar/editar/incluir), Kits (visualizar/editar/incluir), Lojas (visualizar/editar/incluir), Cadastro |
| 4 | Afiliados | `handshake` | Afiliados Produtos, Módulo Afiliados, Botão/Recurso X1 |
| 5 | Vendas | `paid` | Alterar Produtos do Pedido, Alterar Vendedor, Aprovar Pedido, Aprovar Solicitações de Estorno, Exportar IP, Exportar Telefone, Marcar Pix Pago, Pedidos Origem, Pedidos Upsell, Resumo Pedido, Solicitar Estorno, Vincular Pedidos, Visualizar SRC |
| 6 | Vendas Marketplace | `storefront` | (permissões de marketplace, se houver além do relatório) |
| 7 | Suporte | `support_agent` | Aprovar Pedidos, Bloqueios emissão de nota, Configurações Boleto Bancário, Configurações Comprovante Compra, Exportação de Abandonos (30/90/90+), Exportação de Pedidos (30/90/90+), Notas Visualizar (Atualizar/Cancelar), Solicitações de estorno, Solicitações de produtos extras |
| 8 | Conversão | `control_camera` | Pixel (visualizar/editar/incluir/deletar), Leads (todos os sub-itens: Campanhas, Listas SMS/Email, Funis, Bloqueio de Celulares, etc.), Funis |
| 9 | Ferramentas | `manufacturing` | (Webhooks, Integrações — se houver permissões específicas) |
| 10 | Configurações | `settings` | Usuários (visualizar/editar/incluir/deletar), Grupos de Permissões, Chamada Gateway, Clientes (visualizar), Visualizar SRC Cliente |

**Nota:** Permissões que não se encaixam diretamente (ex: Home, WhatsApp legado) foram redistribuídas nas seções mais relevantes. CallCenter, WhatsApp e Cursos foram removidos por não serem usados por parceiros.

### Header de Seção (fechada)

```
+------------------------------------------------------------------+
| [ícone] Nome da Seção          [X de Y ativas]  [toggle tudo] [v] |
+------------------------------------------------------------------+
```

- Background: `#1C1C1C`
- Texto: branco
- Ícone: Material Symbols Rounded, branco, 20px
- Contador: badge pill amarelo `#F1E52F` com texto `#1C1C1C`, ex: "5 de 8"
- Toggle "Ativar/Desativar tudo": switch no header
- Chevron: indicador de expandir/colapsar (`expand_more`)
- Border-radius: 8px (quando fechada), 8px 8px 0 0 (quando aberta)

### Seção Expandida

Ao clicar no header, a seção expande mostrando as permissões individuais:

```
+------------------------------------------------------------------+
| [ícone] Dashboard              [3 de 3 ativas]  [ON/OFF] [^]     |
+------------------------------------------------------------------+
| Dashboard Admin                                  [toggle ON]      |
|------------------------------------------------------------------|
| Dashboard Terceiros                              [toggle ON]      |
|------------------------------------------------------------------|
| Dashboard Vendedor                               [toggle OFF]     |
+------------------------------------------------------------------+
```

- Background das permissões: `#FAFAFA`
- Borda: `1px solid #EBEBEB`
- Border-radius inferior: 0 0 8px 8px
- Cada permissão: texto `#575756`, toggle à direita
- Separador entre permissões: `1px solid #F0F0F0`
- Permissões com sub-itens: indentadas com chevron para expandir (mesma hierarquia que existe hoje)

### Toggle (switch)

- **Ativo:** background `#F1E52F`, bolinha branca à direita
- **Inativo:** background `#DADADA`, bolinha branca à esquerda
- Tamanho: ~36px x 20px
- Border-radius: pill (totalmente arredondado)
- Transição suave ao alternar

### Comportamento do "Toggle tudo"

- Se TODAS as permissões da seção estão ativas: toggle mostra ON. Ao clicar, desativa TODAS.
- Se ALGUMA está inativa: toggle mostra OFF (ou estado intermediário). Ao clicar, ativa TODAS.
- O contador atualiza em tempo real ao ligar/desligar permissões individuais.

---

## Aba "Usuários"

### Estrutura

```
+------------------------------------------------------------------+
| [ícone busca] Buscar usuário...                                   |
+------------------------------------------------------------------+
|                                                                    |
| --- Vinculados ---                                                |
| Otavio Linden                                    [toggle ON]      |
| Jeferson Silva                                   [toggle ON]      |
| Gabriel Dev                                      [toggle ON]      |
|                                                                    |
| --- Disponíveis ---                                               |
| Maria Santos                                     [toggle OFF]     |
| Carlos Oliveira                                  [toggle OFF]     |
+------------------------------------------------------------------+
```

- Campo de busca no topo: estilo padrão Pagah (borda `#DADADA`, border-radius 8px, ícone `search`)
- Filtro em tempo real conforme digita
- Separador visual entre "Vinculados" e "Disponíveis" (label pequeno uppercase cinza)
- Cada usuário: nome em texto `#575756`, toggle à direita (mesmo estilo dos toggles de permissão)
- Usuários vinculados (toggle ON) ficam no topo
- Usuários desvinculados (toggle OFF) ficam embaixo
- Ao ligar/desligar um toggle, o usuário move de seção suavemente
- A aba na tab atualiza o contador: "Usuários (N)"

---

## Responsividade

Como se trata de um protótipo para uso interno (backoffice), o foco é desktop (1280px+). Mas o layout deve funcionar em telas menores:

- Em telas < 1024px: painel esquerdo pode colapsar para uma lista dropdown no topo
- Em telas < 768px: layout empilha verticalmente (grupo no topo, permissões embaixo)

---

## Interações e Feedback

| Ação | Feedback visual |
|------|----------------|
| Selecionar grupo | Card fica amarelo, painel direito atualiza |
| Expandir seção | Animação suave de altura, chevron rotaciona 180° |
| Toggle individual | Transição suave, contador da seção atualiza |
| Toggle "ativar tudo" | Todos os toggles da seção animam simultaneamente |
| Buscar usuário | Filtro instantâneo enquanto digita |
| Vincular/desvincular usuário | Toggle anima, usuário move de seção |

---

## Conformidade com Design System Pagah

| Requisito | Status |
|-----------|--------|
| Header amarelo `#F1E52F` fixo 56px | Conforme (via template shell) |
| Sidebar branca `#FFFFFF` com 11 itens | Conforme (via template shell) |
| Background `#F2F2F2` | Conforme |
| Ícones Material Symbols Rounded (outline) | Conforme |
| Cards brancos border-radius 12-16px | Conforme |
| Headers escuros `#1C1C1C` texto branco | Conforme (headers de seção) |
| Tailwind com prefix `tw-` | Conforme |
| Tipografia Ubuntu | Conforme |
| Badges pill-shaped com cores funcionais | Conforme (badges de nível) |
| Botão primário amarelo | Conforme (+ Novo Grupo) |
| Sem Font Awesome | Conforme |
| Logo minúsculo "pagah" | Conforme |

---

## Arquivo Final

O protótipo será criado como arquivo HTML único em:
```
projetos/permissoes/permissoes.html
```

Copiado do `_template-shell.html`, com item "Configurações" marcado como ativo na sidebar. Caminho do ícone SVG ajustado para `../../assets/icon/svg/icon-pagah-yellow-rounded.svg`.

Dados mockados com nomes realistas de grupos e usuários brasileiros.
