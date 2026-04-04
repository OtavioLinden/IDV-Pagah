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
