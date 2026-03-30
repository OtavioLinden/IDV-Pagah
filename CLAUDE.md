# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Proposito deste Repositorio

Este repositorio contem **prototipos visuais** de paginas para a plataforma Pagah. As paginas criadas aqui sao **sugestoes de UI** para os desenvolvedores implementarem no sistema real. Nao ha backend, APIs, nem integracao — tudo e puramente visual/frontend.

## Design System

O arquivo `pagah-design-system.md` na raiz do projeto e a referencia completa e obrigatoria da identidade visual. Sempre consulta-lo antes de criar ou modificar qualquer pagina. Ele contem: paleta de cores, tipografia, componentes, layout, padroes por tela e exemplos.

### Resumo Visual Essencial

- **Background geral:** `#F2F2F2`
- **Cards:** brancos, border-radius 12-16px, sombra sutil, sem borda visivel
- **Header:** faixa amarela `#F1E52F` fina no topo (presente em todas as telas)
- **Sidebar:** branca, compactavel (icones only) / expandivel (icones + labels), presente em todas as telas
- **Cor primaria:** Amarelo Ouro `#F1E52F` — botoes, destaques, badges ativos
- **Cor base escura:** Cinza Chumbo `#1C1C1C` — cards de destaque, headers de tabela, textos
- **Neutras:** `#575756` (texto secundario), `#DADADA` (bordas), `#F2F2F2` (bg), `#FFFFFF` (cards)
- **Tipografia:** Ubuntu (Google Fonts) para textos. Scale VF (Adobe Fonts) para titulos/logo
- **Icones:** estilo outline/line (contorno fino ~1.5-2px), similar a Lucide ou Phosphor
- **Botao primario:** fundo amarelo `#F1E52F`, texto preto, border-radius ~8px
- **Tabelas:** header com fundo `#1C1C1C` e texto branco, linhas brancas
- **Badges de status:** pill-shaped — verde (aprovado), vermelho (cancelado), amarelo (pendente), azul (processando)

### Layout Obrigatorio

Toda pagina deve incluir:
1. Faixa amarela fina no topo (header)
2. Sidebar a esquerda (com os itens de menu padrao da Pagah)
3. Area de conteudo com background `#F2F2F2`

A sidebar tem dois estados (compacto com icones, expandido com labels) e deve ser funcional nos prototipos.

## Assets Disponiveis

```
assets/
  idv-pagah.pdf              # Manual de marca completo (9 paginas)
  icon/                      # Icone da Pagah (SVG, PNG, WebP, PDF)
  logo/                      # Logo completo (PNG, PDF, AI)
  pagcall/                   # Sub-marca PagCall (Logo + Redes Sociais)
  posts/                     # Posts de redes sociais (referencia de estilo)
  destaques/                 # Stories do Instagram
  materiais/                 # Materiais impressos (camisetas, adesivos)
  readme-repositorio-pagah.md # README do repositorio real da Pagah

referencias/                 # Screenshots reais da plataforma
  home.png
  dashboard-vendas.png
  dashboard-detalhada.png
  editar-produtos.png
  menu-suporte-chamados.png
  menu-lateral-compacto.png
  menu-lateral-expandido.png
  tela-usuarios.png
```

## Stack do Sistema Real (referencia)

O sistema Pagah real usa **Laravel 8.x + Vue.js 2.5 + Tailwind CSS 1.8 + Inertia.js + Laravel Mix**. Os prototipos aqui nao precisam replicar essa stack, mas devem:

- Usar **Tailwind CSS** (qualquer versao) para estilizacao — facilita a transicao para o sistema real
- Ser compativel com a estrutura de componentes que os devs possam adaptar
- Focar na fidelidade visual, nao na arquitetura de codigo

## Subprojetos

- `projetos/central-empresas/` — Projeto finalizado (nao mexer)
- `projetos/callcenter-pagcall/` — Projeto futuro do modulo de call center

## Regras ao Criar Paginas

1. **Sempre** consultar `pagah-design-system.md` e os screenshots em `referencias/` antes de criar qualquer nova pagina
2. **Nunca** inventar um layout diferente do padrao (sidebar + header amarelo + conteudo em cards brancos sobre fundo gelo)
3. **Nunca** usar cores fora da paleta da Pagah como cores de marca (verde e laranja sao apenas para status funcionais)
4. Manter consistencia com as telas existentes — a nova pagina deve parecer que ja faz parte da plataforma
5. Os prototipos sao apenas visuais — dados podem ser mockados com valores realistas em BRL
6. Icones devem ser outline/line style, nao solid/filled
7. O logo e **sempre** em minusculas: "pagah" (nunca "Pagah" ou "PAGAH" no logo)
