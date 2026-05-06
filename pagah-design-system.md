# Pagah - Design System & Identidade Visual

Referencia completa da identidade visual da Pagah, extraida do Manual de Marca (`assets/idv-pagah.pdf`) e das telas reais da plataforma (`referencias/`). Este documento serve como fonte unica de verdade para criar paginas que se encaixem no padrao visual da Pagah.

---

## 1. Sobre a Pagah

A Pagah e uma plataforma de pagamento com checkout inteligente e ecossistema comercial robusto. Foco em impulsionar o ROI de infoprodutores e produtores de produtos fisicos no mercado digital. Oferece: dashboard, gateway de pagamento, logistica, gestao de vendas COD (Cash On Delivery), afiliados, suporte e mais.

**Sub-marca:** PagCall - modulo de call center / recuperacao de vendas (mesma identidade visual, mas com icone de telefone no lugar do cifrao no foguete).

---

## 2. Paleta de Cores

### Cores Primarias

| Nome            | HEX       | RGB            | Uso                                              |
|-----------------|-----------|----------------|--------------------------------------------------|
| Amarelo Ouro    | `#F1E52F` | 241, 229, 47   | Cor principal da marca. Botoes primarios, destaques, faixa do header, badges ativos |
| Cinza Chumbo    | `#1C1C1C` | 28, 28, 28     | Background de cards escuros, texto principal, areas de destaque com fundo escuro |

### Cores Secundarias / Neutras

| Nome            | HEX       | RGB            | Uso                                              |
|-----------------|-----------|----------------|--------------------------------------------------|
| Cinza Medio     | `#575756` | 87, 87, 86     | Textos secundarios, icones desativados            |
| Cinza Claro     | `#DADADA` | 218, 218, 218  | Bordas, separadores, backgrounds de campos        |
| Gelo            | `#F2F2F2` | 242, 242, 242  | Background geral da aplicacao, areas neutras      |
| Branco          | `#FFFFFF` | 255, 255, 255  | Background de cards, modais, areas de conteudo     |

### Cores Funcionais (observadas nas telas)

| Funcao          | HEX       | Uso                                              |
|-----------------|-----------|--------------------------------------------------|
| Sucesso/Verde   | `#22C55E` (aprox.) | Status aprovado, badges de sucesso, indicadores positivos |
| Erro/Vermelho   | `#EF4444` (aprox.) | Status cancelado/recusado, alertas negativos      |
| Alerta/Laranja  | `#F97316` (aprox.) | Avisos, alertas do sistema (NAO usar para badge "Pendente" — o badge "Pendente" usa amarelo) |
| Info/Azul       | `#3B82F6` (aprox.) | Links, botoes secundarios informativos            |
| Roxo            | `#8B5CF6` (aprox.) | Badges de afiliados, categorias especificas       |

### Regra Importante

A Pagah deliberadamente **evita verde e laranja como cores de marca** (esses tons dominam o mercado de pagamentos). Verde e laranja sao usados apenas para estados funcionais (sucesso/erro/alerta), nunca como identidade.

---

## 3. Tipografia

### Titulos e Logo
- **Scale VF** (Adobe Fonts)
- Moderna, minimalista, usada em letras minusculas
- Transmite acessibilidade e inovacao

### Textos e Corpo
- **Ubuntu** (Google Fonts)
- Sans-serif classica, boa legibilidade
- Complementa o estilo moderno do logo

### Na plataforma web (observado)
- Textos de interface usam fonte sans-serif do sistema (similar a Inter/Ubuntu)
- Titulos de pagina: bold, tamanho grande (~24px), cor escura
- Subtitulos de secao: semibold, tamanho medio (~16-18px)
- Corpo de texto: regular, ~14px
- Labels de formulario: regular, ~13-14px, cinza medio

---

## 4. Logo e Icone

### Simbolo
- Foguete geometrico com cantos arredondados (simboliza dinamismo e crescimento)
- Moeda com cifrao ($) central (essencia financeira e tecnologica)
- Fundo amarelo ouro com foguete em cinza chumbo e cifrao branco

### Variantes do Logo
- **Principal:** Icone (fundo amarelo) + "pagah" em amarelo (para fundo escuro)
- **Alternativo:** Icone (fundo amarelo) + "pagah" em cinza chumbo (para fundo claro)
- **Secundario:** Similar ao alternativo
- **Simples:** Apenas o texto "pagah" sem icone (amarelo, cinza, ou gelo)

### Variantes do Icone
- Fundo amarelo com foguete cinza (padrao)
- Fundo cinza com foguete amarelo (invertido)
- Versoes: rounded (cantos arredondados) e square
- Formatos disponiveis: SVG, PNG, WebP, PDF, AI

### Regras de Uso do Logo
- NAO alterar a fonte
- NAO mudar a disposicao do logo
- NAO alterar as cores
- NAO mudar o simbolo
- NAO distorcer o logo
- NAO rotacionar o logo
- Respeitar espacamento minimo: x nos lados, 2x nas extremidades

### PagCall (sub-marca)
- Mesma estrutura visual, mesma tipografia
- Icone: foguete com **telefone** no lugar do cifrao
- Texto: "pagcall" em vez de "pagah"

---

## 5. Layout da Plataforma

### Estrutura Geral
```
+--+--------------------------------------------------+
|  |  Header (faixa amarela fina no topo)              |
|  +--------------------------------------------------+
|  |                                                    |
|S |  Conteudo Principal                                |
|I |  (background #F2F2F2 gelo)                        |
|D |                                                    |
|E |  Cards brancos com cantos arredondados             |
|B |  organizados em grid responsivo                    |
|A |                                                    |
|R |                                                    |
|  |                                                    |
+--+--------------------------------------------------+
```

### Header (Barra Amarela Superior)

Elemento **fixo** no topo de TODAS as paginas. Especificacoes exatas:

- **Posicao:** `position: fixed; top: 0; left: 0; right: 0; z-index: 1000`
- **Altura:** `56px`
- **Largura:** `100%` — cobre toda a tela, inclusive acima da sidebar
- **Background:** `#F1E52F` (Amarelo Ouro) — NUNCA outra cor
- **Borda inferior:** `1px solid rgba(0,0,0,0.06)` — sutil
- **Conteudo esquerdo:** icone do foguete Pagah (SVG `icon-pagah-yellow-rounded.svg`) + botao hamburger (3 linhas, toggle da sidebar)
- **Conteudo direito:** botao notificacoes (`notifications_active` com badge vermelho de contagem) + botao ajuda (`help`) + botao perfil (`person`)
- **Classe CSS no sistema real:** `pb-header`

**IMPORTANTE:** O header NAO e um card branco dentro do conteudo. E uma barra amarela fixa que cobre 100% da largura da janela.

### Sidebar (Menu Lateral)

Elemento **fixo** a esquerda, abaixo do header. Especificacoes exatas:

- **Posicao:** `position: fixed; top: 56px; left: 0; height: calc(100vh - 56px); z-index: 999`
- **Background:** `#FFFFFF` (branco) — **NUNCA** usar `#1C1C1C` ou qualquer cor escura na sidebar
- **Borda direita:** `1px solid #EBEBEB`
- **Largura expandida:** `240px`
- **Largura compacta:** `68px`
- **Estado padrao:** compacta (icones only). Ao passar o mouse, expande temporariamente mostrando labels
- **Toggle:** botao hamburger no header alterna entre compacto e expandido
- **Classe CSS no sistema real:** `pb-side_menu`, toggle via `pb-menu--closed` no `<body>`
- Presente em **TODAS** as telas, sem excecao

#### Itens do Menu (11 itens, nesta ordem exata):

| # | Label | Icone Material Symbols | Submenu |
|---|-------|----------------------|---------|
| 1 | Dashboard | `home` | — |
| 2 | Relatorios | `monitoring` | Vendas, Abandonos, Estoque, Relatorio Utms |
| 3 | Produtos | `box_add` | — |
| 4 | Afiliados | `handshake` | Gestao de Afiliados, Gestao de Produtos, Relatorios |
| 5 | Vendas | `paid` | — |
| 6 | Vendas Marketplace | `storefront` | — |
| 7 | Suporte | `support_agent` | — |
| 8 | Conversao | `control_camera` | Pixel, Listas, ENVIO$, Funil de Eventos |
| 9 | Ferramentas | `manufacturing` | Webhooks, Integracoes |
| 10 | Saques | `receipt_long` | — |
| 11 | Configuracoes | `settings` | Usuarios, Notas |

- Itens com submenu exibem chevron (`expand_more`) a direita
- Na parte inferior da sidebar: texto "Baixe nosso App" + botao App Store
- Icones em cor cinza medio (`#575756`), tamanho `22px`
- Item ativo: texto e icone escuros, `font-weight: 600`
- Hover: fundo `#F8F8F8`

### Icones da Plataforma

- **Biblioteca oficial:** Google Material Symbols Rounded (`material-symbols-rounded`)
- **CDN:** `https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200`
- **Estilo:** Rounded, variante outline (FILL: 0), peso visual leve
- **Tamanho padrao:** `22px` na sidebar, `24px` no header
- **Cor padrao:** cinza medio `#575756`
- **NUNCA** usar Font Awesome, Lucide, Phosphor ou icones solid/filled como substituto

### Template de Referencia

O arquivo `_template-shell.html` na raiz do repositorio contem a implementacao completa e funcional do header + sidebar + area de conteudo. **Toda nova pagina deve copiar o shell desse template.** Ele e a fonte de verdade em codigo para a estrutura de layout

---

## 6. Componentes Visuais

### Cards
- Background: **branco** (`#FFFFFF`)
- Border-radius: **12-16px** (cantos bem arredondados)
- Sombra: **sutil** (shadow-sm a shadow-md)
- Padding: **20-24px**
- Sem borda visivel (ou borda muito sutil cinza claro)

### Card Escuro de Destaque (Dashboard de Vendas)
- Background: **cinza chumbo** (`#1C1C1C`) a quase preto
- Texto principal (valor): branco, bold, grande (~32-40px)
- Grafico de linha integrado (branco/amarelo sobre fundo escuro)
- Badge "pagah" amarelo no canto
- Valores secundarios em cinza claro
- Mini-indicadores coloridos (bolinhas verde, azul, rosa)

### Tabelas
- Header da tabela: fundo **cinza chumbo** (`#1C1C1C`), texto branco
- Linhas: fundo branco alternando com gelo sutil
- Bordas horizontais sutis entre linhas
- Celulas com padding confortavel
- Paginacao na base

### Botoes
- **Primario:** background amarelo (`#F1E52F`), texto preto/cinza chumbo, border-radius ~8px
- **Secundario/Outline:** borda cinza, texto cinza, fundo transparente
- **Destaque escuro:** fundo cinza chumbo, texto branco
- Tamanho padrao: ~36-40px de altura, padding horizontal generoso
- Hover: leve escurecimento ou clareamento

### Badges/Status
- Border-radius: **pill** (totalmente arredondado)
- Cores por status: verde (aprovado), vermelho (cancelado/recusado), amarelo (pendente), azul (processando)
- Tamanho pequeno, padding compacto (~4px 12px)
- Texto em caps ou capitalizado

### Campos de Formulario
- Background: branco
- Borda: cinza claro (`#DADADA`)
- Border-radius: ~8px
- Altura: ~40-44px
- Label acima do campo
- Focus: borda mais escura ou amarela
- Selects/Dropdowns: mesmo estilo com chevron

### Cards de Metrica / KPI
- Titulo da metrica em texto pequeno cinza
- Valor principal grande e bold
- Variacao percentual (com seta para cima/baixo)
- Icone decorativo circular colorido
- Layout: empilhado (label em cima, valor embaixo)

### Secoes na Home
- Cada secao tem um titulo com icone decorativo
- Ex: "ACESSO RAPIDO", "RELATORIOS", "PENDENCIAS OPERACIONAIS"
- Icone ao lado do titulo (estrela, grafico, etc.)
- Conteudo em sub-cards dentro da secao

### Cards de Acesso Rapido
- Background com gradiente sutil ou imagem
- Titulo branco bold sobre fundo escuro/colorido
- Descricao curta em texto menor
- Clicavel (cursor pointer)

---

## 7. Padroes Especificos por Tela

### Home / Dashboard
- Card escuro principal com valor total de vendas e mini-grafico
- Grid de cards de metricas: pedidos do dia, retornos, CRM, taxa de conversao
- Secao "Acesso Rapido" com cards visuais
- Secao "Relatorios" com links rapidos
- Secao "Pendencias Operacionais" com contadores

### Dashboard Detalhada
- Card de vendas principal (mesmo padrao escuro)
- Grid mais denso de metricas: abandono de carrinho, taxa de recompra, checkout stats
- Metricas de checkout mobile vs desktop
- Seletor de periodo (date picker)

### Minhas Vendas
- Filtros no topo: busca por texto, selects, botoes de filtro
- Card de "Vendas Geral" com total
- Sidebar de "Status Pedidos" (CallCenter, Afiliados, Contestados, com valores)
- Tabela com colunas: #ID, Cliente, Produto, Afiliado, Info Pedido, Status, Acoes
- Cada linha com icones de acao (editar, visualizar, etc.)

### Editar Produto
- Sidebar de navegacao interna (steps/tabs verticais):
  1. Informacoes Basicas
  2. Suporte ao Cliente
  3. Mensagem de E-mail
  4. Checkout
- Formulario com campos empilhados
- Campos: Nome, Garantia, Liberar Upsell, Exibir E-mail, Exigir CEP, Imagem
- Botoes de acao no rodape: "Editar Checkout" (amarelo), "Adicionar Checkout" (outline)

### Suporte e Operacoes (Chamados)
- Menu lateral de sub-secao (Home, Pedidos com Nota, Estornos, etc.)
- Cards de resumo no topo com contadores circulares coloridos
- Filtros inline (busca, selects)
- Tabela de chamados com colunas: Empresa, ID, Cliente, Motivo, Informacao, Status, Acoes
- Status em badges coloridos

### Tela de Usuarios
- Filtros: select de status + campo de busca
- Botoes de acao: "Permissoes" (outline), "Novo Usuario" (amarelo)
- Tabela com colunas: Nome, E-mail, Grupo, Ativo, Acoes
- Grupo em badges coloridos
- Toggle de ativo/inativo
- Icones de acao por linha

---

## 8. Padroes de Interacao Social (Posts e Marketing)

### Posts da Pagah
- Fundo predominantemente **escuro** (preto/cinza chumbo)
- Texto em **branco** e destaques em **amarelo**
- Logo Pagah (versao amarela) sempre presente no topo
- Ilustracoes 3D estilizadas (foguetes, moedas, personagens)
- CTAs em badges/botoes amarelos com texto preto
- Subtitulos em **uppercase** amarelo com fundo amarelo e texto preto
- URL "pagah.com" no rodape

### Posts da Pagah com fundo claro
- Fundo branco/gelo
- Texto em cinza chumbo/preto
- Destaques em amarelo
- Tags/categorias em botoes escuros com icones

---

## 9. Stack Tecnico do Sistema Real

Para referencia ao criar prototipos que possam ser implementados:

- **Backend:** Laravel 8.x (PHP 7.4+/8.0+)
- **Frontend:** Vue.js 2.5.17 + Inertia.js + Tailwind CSS 1.8.0
- **Build:** Laravel Mix
- **Views:** 1157 views Blade
- **Padroes:** MVC, Service Layer, Event-Driven

### Implicacoes para prototipos
- Usar **Tailwind CSS via CDN** com `prefix: 'tw-'` para estilizacao (o sistema real usa esse prefix)
- Usar **Google Material Symbols Rounded** para icones (o sistema real usa essa biblioteca)
- Componentes visuais podem ser em HTML/Tailwind puro ou Vue
- Nao precisa de integracao com backend (apenas visual)
- Respeitar a estrutura de layout: header amarelo fixo + sidebar branca + conteudo
- Copiar sempre o shell de `_template-shell.html`

---

## 10. Resumo Rapido para Criar Novas Paginas

1. **Template:** copiar o shell de `_template-shell.html` (header + sidebar + main)
2. **Background geral:** `#F2F2F2` (gelo) — nunca `#F5F7FA` ou outra variacao
3. **Header:** barra fixa amarela `#F1E52F`, 56px de altura, 100% largura, com icone Pagah + hamburger + notificacoes + perfil
4. **Sidebar:** branca `#FFFFFF`, 11 itens de menu com Material Symbols Rounded, compactavel
5. **Icones:** Google Material Symbols Rounded — nunca Font Awesome, Lucide ou Phosphor
6. **Cards:** brancos, `border-radius: 12-16px`, sombra sutil
7. **Tipografia:** Ubuntu (Google Fonts), titulos bold escuros
8. **Botao primario:** amarelo `#F1E52F`, texto preto `#1C1C1C`
9. **Tabelas:** header com fundo `#1C1C1C` e texto branco, linhas brancas
10. **Cards de destaque:** fundo `#1C1C1C`, texto branco, acentos amarelos
11. **Badges:** pill-shaped, cores funcionais (verde=aprovado, vermelho=cancelado, amarelo=pendente, azul=processando)
12. **Tailwind:** usar prefix `tw-` nas classes para evitar conflitos (mesmo padrao do sistema real)

---

## 11. ERROS PROIBIDOS

Erros que IAs ja cometeram e que NUNCA devem se repetir:

| Erro | Por que esta errado | Correto |
|------|-------------------|---------|
| Sidebar com fundo `#1C1C1C` (escuro) | A sidebar real e BRANCA. `#1C1C1C` e para cards de destaque e headers de tabela, nunca para sidebar | Sidebar: `background: #FFFFFF`, borda direita `#EBEBEB` |
| Omitir o header amarelo | Toda pagina Pagah tem a barra amarela fixa no topo. E o elemento visual mais reconhecivel da plataforma | Header: `background: #F1E52F`, fixo, 56px, 100% largura |
| Colocar header como card branco dentro do conteudo | O header e uma barra amarela separada e fixa, nao faz parte da area de conteudo | `position: fixed; top: 0; width: 100%` |
| Usar Font Awesome (`fas fa-*`) | A Pagah usa Google Material Symbols Rounded, nunca Font Awesome | `<span class="material-symbols-rounded">icon_name</span>` |
| Sidebar com menos de 11 itens | O menu tem 11 itens obrigatorios com icones e submenus especificos | Copiar a lista completa do template ou da tabela na secao 5 |
| Background `#F5F7FA` ou similar | O background real e `#F2F2F2` (gelo). Variacoes azuladas estao erradas | `background: #F2F2F2` |
| Icones solid/filled | Os icones da Pagah sao outline (contorno), nunca preenchidos | Material Symbols com `FILL: 0` (padrao) |
| Sidebar sem funcao de toggle | A sidebar deve alternar entre compacta (68px, icones) e expandida (240px, icones + labels) | Implementar toggle via classe `pb-menu--closed` no body |
| Inventar cores de marca (verde, laranja) | Verde e laranja sao cores funcionais (status), nunca de marca | Cores de marca: amarelo `#F1E52F` e cinza chumbo `#1C1C1C` apenas |

---

## 12. Escala de Espacamento & Grid

A Pagah usa **grid de 8pt** — todo espacamento (padding, margin, gap) e multiplo de 8 (com 4 e 12 como excecoes pontuais para detalhes finos).

### Tokens de espacamento

| Token  | Valor  | Uso tipico                                           |
|--------|--------|------------------------------------------------------|
| `xs`   | `4px`  | Espaco entre icone e texto colado, separadores finos  |
| `sm`   | `8px`  | Padding interno de chips/badges, gap pequeno          |
| `md`   | `16px` | Padding default de campos de form, gap entre cards em grid denso |
| `lg`   | `24px` | Padding interno padrao de cards, gap entre cards normais |
| `xl`   | `32px` | Espaco entre secoes em uma mesma pagina               |
| `2xl`  | `48px` | Espaco entre blocos grandes (hero -> conteudo)        |
| `3xl`  | `64px` | Margem superior pos-header em paginas espacosas       |

### Regras de uso
- **Padding interno de card padrao:** `24px` (`lg`)
- **Gap entre cards em grid:** `16px` (`md`) em layouts densos como tabelas/listas; `24px` em grids de KPIs/dashboards
- **Espaco entre secoes:** `32px` (`xl`) por padrao
- **Container max-width:** `1280px` para o conteudo principal; gutter lateral de `24px`
- Nunca usar valores fora desses tokens (ex: `padding: 13px` ou `gap: 21px`). Isso quebra ritmo visual.

---

## 13. Escala Tipografica Formal

Complementa a secao 3. Padroniza tamanhos para evitar que cada pagina invente seu proprio escalonamento.

### Tamanhos (em px, com line-height sugerido)

| Token    | Tamanho | Line-height | Peso     | Uso                                        |
|----------|---------|-------------|----------|--------------------------------------------|
| `meta`   | `12px`  | `1.4`       | 400      | Captions, labels mono, badges, datas       |
| `small`  | `13px`  | `1.5`       | 400      | Texto auxiliar, helper text de form         |
| `body`   | `14px`  | `1.55`      | 400      | Corpo de texto padrao, celulas de tabela   |
| `lead`   | `16px`  | `1.5`       | 400      | Subtitulo de secao, paragrafo de destaque   |
| `h3`     | `18px`  | `1.35`      | 600      | Titulo de card, sub-secao                  |
| `h2`     | `22px`  | `1.3`       | 600/700  | Titulo de secao na pagina                  |
| `h1`     | `28px`  | `1.2`       | 700      | Titulo principal da pagina                 |
| `display`| `36px+` | `1.1`       | 700      | Numero KPI gigante em card escuro          |

### Regras
- **Numeros financeiros sempre tabulares:** `font-feature-settings: "tnum"` ou usar fonte mono (`Ubuntu Mono`, `JetBrains Mono`) para colunas de valores R$. Sem isso, "R$ 1.234,56" e "R$ 999,00" nao alinham por coluna.
- **Titulos sempre na cor escura** (`#1C1C1C`), nunca cinza medio.
- **Texto auxiliar** (helper, caption) na cor cinza medio (`#575756`).
- **Nunca** usar peso 500 — pular de 400 para 600 (regular -> semibold) mantem hierarquia clara.

---

## 14. Tokens CSS Recomendados

Para alinhar com o padrao de Tailwind (prefix `tw-`) do sistema real, definir variaveis CSS no `:root` e nunca usar HEX cru espalhado pelo CSS.

```css
:root {
  /* Cores */
  --pb-bg:        #F2F2F2;   /* background geral da pagina */
  --pb-surface:   #FFFFFF;   /* cards, modais */
  --pb-fg:        #1C1C1C;   /* texto principal */
  --pb-muted:     #575756;   /* texto secundario, icones desativados */
  --pb-border:    #DADADA;   /* bordas, separadores */
  --pb-accent:    #F1E52F;   /* amarelo Pagah - usar no MAXIMO 2x por tela */
  --pb-dark:      #1C1C1C;   /* fundo de card escuro de destaque, header de tabela */

  /* Status (funcionais, NAO de marca) */
  --pb-success:   #22C55E;
  --pb-danger:    #EF4444;
  --pb-warning:   #F97316;
  --pb-info:      #3B82F6;
  --pb-purple:    #8B5CF6;

  /* Tipografia */
  --pb-font-body: 'Ubuntu', system-ui, sans-serif;
  --pb-font-num:  'Ubuntu Mono', ui-monospace, monospace;

  /* Espacamento (8pt grid) */
  --pb-gap-xs:  4px;
  --pb-gap-sm:  8px;
  --pb-gap-md:  16px;
  --pb-gap-lg:  24px;
  --pb-gap-xl:  32px;
  --pb-gap-2xl: 48px;

  /* Raio */
  --pb-radius-sm:   8px;   /* botoes, campos de form */
  --pb-radius-md:   12px;  /* cards padrao */
  --pb-radius-lg:   16px;  /* cards de destaque */
  --pb-radius-pill: 999px; /* badges */

  /* Sombra */
  --pb-shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
  --pb-shadow-md: 0 4px 12px rgba(0,0,0,0.06);
}
```

**Regra:** Nunca usar `#XXXXXX` cru fora desse bloco `:root`. Sempre `var(--pb-fg)`, `var(--pb-bg)`, etc.

---

## 15. Vocabulario de Secoes (Section Catalog)

Em vez de inventar layout do zero, toda nova pagina deve compor a partir destas secoes pre-definidas. Cada uma tem um nome e um proposito unico.

### 15.1 Cabecalho de Pagina (`page-header`)
Titulo da pagina + acoes principais (botao primario + filtros).
- Esquerda: titulo H1 + breadcrumb opcional
- Direita: botao primario amarelo + botoes secundarios outline (ex: "Exportar", "Permissoes")

### 15.2 Card de Metrica / KPI (`kpi-card`)
- Label pequena no topo (cinza)
- Valor grande bold (use fonte tabular)
- Variacao % com seta verde/vermelha
- Icone decorativo no canto direito
- Variantes: claro (fundo branco) ou destaque (fundo `#1C1C1C`)

### 15.3 Card de Destaque Escuro (`hero-dark-card`)
Fundo `#1C1C1C`, texto branco, badge "pagah" amarelo no canto. Reservado para o KPI **principal** da tela (ex: "Saldo Disponivel", "Vendas do Mes"). Usar **uma vez por pagina**, no maximo.

### 15.4 Filtros Inline (`filter-bar`)
Barra horizontal acima da tabela:
- Campo de busca (com icone `search` a esquerda)
- 1-3 selects (status, periodo, categoria)
- Botao "Filtrar" outline OU aplicar onChange
- Botao "Exportar" outline a direita

### 15.5 Tabela de Dados (`data-table`)
- Header: fundo `#1C1C1C`, texto branco
- Linhas: brancas, hover `#F8F8F8`
- Numericos em colunas direita-alinhadas + fonte tabular
- Acoes por linha: icones outline (editar, ver, mais) com hover
- Paginacao no rodape: 10/25/50/100 por pagina + setas

### 15.6 Sub-Navegacao Lateral (`sub-nav`)
Para telas com multi-step (Editar Produto, Suporte). Lista vertical de itens, ativo destacado com barra amarela a esquerda + texto bold.

### 15.7 Acordeao de Secao (`collapsible-section`)
Para listas longas tipo Permissoes ou Configuracoes: header com chevron + contador "(3 ativos)" + toggle global da secao.

### 15.8 Banda de CTA (`cta-strip`)
Final de pagina com uma acao decisiva centralizada. Usar so em fluxos que pedem acao (ex: "Solicitar Saque", "Adicionar Produto"). NAO em paginas de listagem.

### 15.9 Estado Vazio (`empty-state`)
- Ilustracao simples ou icone grande cinza
- Titulo curto ("Nenhum saque ainda")
- Descricao 1-2 linhas explicando
- Botao primario para acao ("Solicitar primeiro saque")

### 15.10 Modal de Confirmacao Dupla (`confirm-modal`)
Para acoes irreversiveis (saque, exclusao, alteracao critica):
- Titulo claro ("Confirmar saque de R$ 12.345,67?")
- Resumo descritivo do que vai acontecer (chave PIX destino, valor liquido apos taxas)
- Dois botoes: "Cancelar" outline + "Confirmar" amarelo
- Fecha so com clique explicito (nao com clique fora)

### Ritmo de pagina (quando em duvida)
Para uma listagem (Vendas, Produtos, Saques):
1. `page-header`
2. `kpi-card` em grid de 3-4 (ou 1 `hero-dark-card` + 3 `kpi-card`)
3. `filter-bar`
4. `data-table`

Para um detalhe/edicao:
1. `page-header` (com breadcrumb)
2. `sub-nav` lateral + formulario empilhado
3. Botoes de acao no rodape

---

## 16. Estados Interativos & Movimento

Todo elemento clicavel deve ter os 5 estados explicitos. Sem isso a interface parece morta.

### Estados obrigatorios

| Estado          | Visual                                                 |
|-----------------|--------------------------------------------------------|
| `default`       | Cor base do componente                                 |
| `hover`         | Background +5% de cinza OU borda escurece sutilmente   |
| `focus-visible` | Borda amarela `#F1E52F` 2px + outline-offset 2px (acessibilidade) |
| `active`        | Background -5% (mais escuro), efeito de "pressionado"  |
| `disabled`      | Opacidade 40%, cursor `not-allowed`, sem hover          |
| `loading`       | Spinner pequeno + texto "Carregando..." OU skeleton    |

### Duracao de transicoes
- **Padrao:** `150ms ease-out` para hover, foco, mudanca de cor
- **Modal/drawer:** `200-250ms ease-in-out` para abrir/fechar
- **Pagina:** sem animacao de transicao entre rotas (instantaneo)

### Foco e acessibilidade
- **Sempre** mostrar outline em `:focus-visible` — usuarios de teclado dependem disso
- Nunca usar `outline: none` sem substituir por outro indicador visivel
- Botao primario amarelo no foco: borda escura `#1C1C1C` 2px (porque amarelo no amarelo nao aparece)

---

## 17. Reflow Mobile / Responsividade

A Pagah e majoritariamente desktop, mas usuarios mobile existem (gerentes em campo, parceiros). Toda pagina precisa funcionar em mobile, mesmo sem visual perfeito.

### Breakpoints

| Nome    | Largura      | Comportamento                                  |
|---------|--------------|------------------------------------------------|
| `mobile`| `< 768px`    | Sidebar vira drawer (off-canvas, abre via hamburger). Grids de 3-4 colunas viram 1. Tabelas viram cards empilhados. |
| `tablet`| `768-1023px` | Sidebar fica compacta (68px). Grids de 4 viram 2. Tabelas mantem layout com scroll horizontal se precisar. |
| `desktop`| `>= 1024px` | Layout completo (header + sidebar + conteudo). |

### Regras criticas

- **Sidebar mobile:** vira off-canvas (drawer). Hamburger no header abre. Backdrop escuro 40% atras. Fecha com swipe ou tap fora.
- **Header mobile:** mantem amarelo, mas reduz icones — esconde "ajuda" e "perfil" deixando so hamburger + notificacoes + avatar.
- **Tabelas em mobile:** opcao A = scroll horizontal (mais facil); opcao B = cada linha vira um card empilhado com label+valor (melhor UX). Preferir B em telas com poucas colunas (<=5).
- **Botoes em mobile:** tamanho minimo `44x44px` (alvo de toque).
- **Modais em mobile:** ocupam 100% da largura com margem 16px. Botoes de acao empilhados em coluna, nao lado a lado.
- **Filtros em mobile:** colapsar em um botao "Filtros" que abre drawer/modal com todos os campos.

---

## 18. Estados de Dados

Toda lista, tabela ou cartao com dado dinamico precisa ter os 4 estados.

| Estado     | O que mostrar                                                   |
|------------|----------------------------------------------------------------|
| `loading`  | Skeleton (placeholders cinza claro com shimmer) ou spinner central. Manter altura do container para nao "pular" o layout |
| `empty`    | Ilustracao + titulo curto + acao sugerida (secao 15.9)         |
| `error`    | Icone vermelho + mensagem clara ("Nao foi possivel carregar") + botao "Tentar novamente" |
| `success`  | Os dados (estado normal)                                       |

### Regras
- **Nao deixar tela em branco** durante loading — sempre skeleton ou spinner
- **Mensagens de erro em portugues, sem jargao** ("Nao foi possivel carregar suas vendas. Tente novamente em alguns instantes.")
- **Empty state e oportunidade** — mostrar como dar o primeiro passo, nao so dizer "vazio"

---

## 19. Microcopy & Tom de Voz

Como a Pagah escreve textos de interface.

### Tom
- **Direto, objetivo, sem rebuscar.** "Sacar" beats "Realizar saque". "Adicionar produto" beats "Cadastrar novo produto".
- **Em portugues do Brasil**, sem anglicismos desnecessarios ("Painel" beats "Dashboard" no titulo da tela; mas "Checkout" pode ficar porque e termo do mercado).
- **Conversacional quando ajuda.** Empty state: "Voce ainda nao tem saques. Que tal solicitar o primeiro?" beats "Nenhum saque encontrado".

### Botoes — sempre dizer o que vai acontecer
- Bom: "Sacar R$ 12.345,67", "Cancelar pedido", "Adicionar produto"
- Ruim: "Confirmar", "OK", "Enviar"

### Mensagens de erro — explicar + sugerir saida
- Bom: "Saldo insuficiente para este saque. Saldo disponivel: R$ 1.234,56."
- Ruim: "Erro 422", "Operacao invalida"

### Mensagens de sucesso — confirmar e proximo passo
- Bom: "Saque solicitado! Voce recebera em ate 1 dia util na chave PIX cadastrada."
- Ruim: "Sucesso!"

### Numeros e valores
- Sempre `R$ X,XX` com simbolo + virgula decimal
- Datas: `DD/MM/AAAA` ou `5 mai 2026`
- Percentual: `12,3%` (virgula como decimal)

---

## 20. Checklist de Qualidade Visual (P0 / P1)

Rode antes de considerar uma pagina pronta. **P0 = obrigatorio. P1 = altamente recomendado.**

### P0 — obrigatorio (se quebrar, refazer)

- [ ] Header amarelo `#F1E52F` fixo no topo, 56px, 100% largura
- [ ] Sidebar **branca** `#FFFFFF` com TODOS os 11 itens
- [ ] Background da pagina e `#F2F2F2`
- [ ] Icones sao Material Symbols Rounded (nunca Font Awesome / Lucide)
- [ ] Logo escrito em minusculas: "pagah"
- [ ] Amarelo `#F1E52F` aparece no maximo **2x por tela** (botao primario + 1 destaque). Mais que isso polui.
- [ ] Nenhum `#XXXXXX` cru no CSS fora do bloco `:root` de tokens
- [ ] Toda info numerica financeira em fonte tabular alinhada a direita
- [ ] Todo botao tem estados `hover` + `focus-visible` visiveis
- [ ] Tela funciona em mobile (375px width minimo) sem scroll horizontal
- [ ] Toda lista/tabela tem estado `empty` definido (nao deixar tela em branco)
- [ ] Acoes irreversiveis (saque, exclusao) tem confirmacao dupla
- [ ] Texto em portugues, sem typos, sem "Lorem ipsum"

### P1 — recomendado

- [ ] Espacamento segue grid 8pt (multiplos de 8, com 4/12 como excecoes pontuais)
- [ ] Cards usam `--pb-radius-md` (12px) consistentemente
- [ ] Tipografia segue escala definida (12/13/14/16/18/22/28)
- [ ] Numero principal de KPI em fonte display tabular
- [ ] Cor escura `#1C1C1C` so em: header de tabela + 1 card de destaque por tela + texto principal
- [ ] Icones de acao em tabela tem tooltip ao hover
- [ ] Estados de loading usam skeleton (nao spinner generico)
- [ ] Botoes de acao primaria sempre dizem o que vai acontecer ("Sacar R$ X" beats "Confirmar")
- [ ] Mensagens de erro explicam causa + sugerem saida
- [ ] Modais de confirmacao mostram resumo do que vai acontecer (valor, destino, taxas)

### Anti-slop check (olhar a pagina por 2 segundos)

Se voce olhar e pensar:
- "Parece qualquer dashboard generico de SaaS"
- "Os cards de KPI sao todos iguais"
- "O amarelo esta em 5 lugares diferentes"
- "Nao da pra saber qual e a acao principal"

...volte e corrija. Pagah tem identidade — ela precisa transparecer.
