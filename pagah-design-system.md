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
| Alerta/Laranja  | `#F97316` (aprox.) | Avisos, status pendente                           |
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

### Header
- Faixa fina amarela (`#F1E52F`) no topo de todas as paginas
- Logo Pagah (icone pequeno) no canto superior esquerdo
- Icones de notificacao e perfil do usuario no canto superior direito
- Data atual exibida em alguns dashboards

### Sidebar (Menu Lateral)
- Background branco
- Presente em TODAS as telas
- Dois estados: **compacto** (apenas icones) e **expandido** (icones + labels)
- Toggle para alternar entre compacto/expandido

#### Itens do Menu (ordem):
1. Dashboard (icone: casa)
2. Cash on delivery (icone: carrinho com seta)
3. Relatorios (icone: grafico de barras) - com submenu
4. Produtos (icone: clipboard/lista) - com submenu
5. Afiliados (icone: rede/conexoes) - com submenu
6. Vendas (icone: cifrao em circulo)
7. Vendas Marketplace (icone: loja/vitrine)
8. Suporte (icone: headset/fone) - com submenu
9. Conversao (icone: alvo/diamante) - com submenu
10. Ferramentas (icone: engrenagens) - com submenu
11. Saques (icone: documento/nota)
12. Configuracoes (icone: engrenagem) - com submenu

- Na parte inferior: link "Baixe nosso App" com botao App Store
- Itens com submenu tem seta indicadora (chevron)
- Icones em estilo outline/line, cor cinza medio
- Item ativo/hover: destaque visual

### Icones da Plataforma
- Estilo: **outline/line** (contorno fino, nao preenchido)
- Peso visual: leve, tracos de ~1.5-2px
- Cor padrao: cinza medio/escuro
- Consistentes em tamanho (~20-24px)
- Parecidos com a familia Lucide, Phosphor ou Heroicons (outline)

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
- Usar **Tailwind CSS** para estilizacao (o sistema real usa)
- Componentes visuais podem ser em HTML/Tailwind puro ou Vue
- Nao precisa de integracao com backend (apenas visual)
- Respeitar a estrutura de layout: sidebar + header amarelo + conteudo

---

## 10. Resumo Rapido para Criar Novas Paginas

1. **Background geral:** `#F2F2F2` (gelo)
2. **Cards:** brancos, `border-radius: 12-16px`, sombra sutil
3. **Header:** faixa amarela `#F1E52F` no topo
4. **Sidebar:** branca, icones outline, compactavel
5. **Tipografia:** Ubuntu/sans-serif, titulos bold escuros
6. **Botao primario:** amarelo `#F1E52F`, texto preto
7. **Tabelas:** header escuro `#1C1C1C`, linhas brancas
8. **Cards de destaque:** fundo `#1C1C1C`, texto branco, acentos amarelos
9. **Badges:** pill-shaped, cores funcionais por status
10. **Icones:** outline/line style, ~20-24px, cinza
