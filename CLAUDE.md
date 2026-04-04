# CLAUDE.md — Pagah Prototipos

Este arquivo e a instrucao definitiva para qualquer IA criando paginas neste repositorio. Leia integralmente antes de criar ou modificar qualquer arquivo.

---

## O que e este repositorio

Prototipos visuais de paginas para a plataforma **Pagah**. Sao sugestoes de UI para desenvolvedores implementarem no sistema real. Nao ha backend, APIs, nem integracao — tudo e puramente visual/frontend.

---

## REGRA #1: Copiar o Shell do Template

Ao criar **qualquer pagina nova**, comece SEMPRE copiando o arquivo:

```
_template-shell.html  (raiz do repositorio)
```

Este template contem a estrutura obrigatoria ja implementada:
- Header amarelo fixo no topo
- Sidebar branca com os 11 itens de menu
- Area de conteudo com background correto
- Toggle compacto/expandido funcional
- Icones corretos (Material Symbols Rounded)
- Classes Tailwind com prefix `tw-`

**Fluxo de trabalho:**
1. Copie `_template-shell.html` para o destino
2. Renomeie o arquivo
3. Altere o `<title>`
4. Substitua o conteudo dentro de `<main class="pb-main">`
5. Ajuste o caminho relativo do SVG do logo no header se necessario
6. Marque o item ativo correto na sidebar (classe `active`)
7. **NAO altere** header, sidebar, CSS do shell, variaveis ou estrutura

---

## Design System

O arquivo `pagah-design-system.md` na raiz contem a referencia completa da identidade visual. Consulta-lo SEMPRE antes de criar ou modificar qualquer pagina.

### Resumo Visual Critico

| Elemento | Valor | Detalhes |
|----------|-------|---------|
| Background geral | `#F2F2F2` | Nunca `#F5F7FA` ou variacoes azuladas |
| Header | `#F1E52F`, fixo, 56px, 100% largura | Barra amarela no topo com icone Pagah, hamburger, notificacoes, perfil |
| Sidebar | `#FFFFFF`, 240px/68px | **BRANCA**. Nunca escura. 11 itens obrigatorios |
| Icones | Google Material Symbols Rounded | Nunca Font Awesome, Lucide ou Phosphor |
| Cards | Brancos, border-radius 12-16px | Sombra sutil, sem borda visivel |
| Cards destaque | `#1C1C1C`, texto branco | Cor escura e SOMENTE para cards de destaque e headers de tabela |
| Botao primario | `#F1E52F`, texto `#1C1C1C` | border-radius ~8px |
| Tabelas | Header `#1C1C1C`, texto branco | Linhas brancas, bordas sutis |
| Badges status | Pill-shaped | Verde=aprovado, vermelho=cancelado, amarelo=pendente, azul=processando |
| Tipografia | Ubuntu (Google Fonts) | Sans-serif, titulos bold escuros |
| Tailwind | Prefix `tw-` | `tailwind.config = { prefix: 'tw-' }` — mesmo padrao do sistema real |

---

## PROIBICOES ABSOLUTAS

Estas regras sao inviolaveis. Se qualquer uma for quebrada, a pagina esta errada:

1. **NUNCA** usar fundo escuro (`#1C1C1C`) na sidebar — a sidebar e SEMPRE `#FFFFFF`
2. **NUNCA** omitir o header amarelo — toda pagina tem a barra `#F1E52F` fixa no topo
3. **NUNCA** colocar o header como card branco dentro do conteudo — e uma barra fixa separada
4. **NUNCA** usar Font Awesome (`fas fa-*`, `far fa-*`) — a Pagah usa Material Symbols Rounded
5. **NUNCA** omitir itens do menu lateral — sao 11 itens obrigatorios em toda pagina
6. **NUNCA** alterar a ordem, nomes ou icones do menu — estao definidos no template e no design system
7. **NUNCA** usar background `#F5F7FA` ou similar — o correto e `#F2F2F2`
8. **NUNCA** usar icones solid/filled — apenas outline (Material Symbols com FILL: 0)
9. **NUNCA** inventar layout diferente do padrao (header amarelo + sidebar branca + conteudo em cards)
10. **NUNCA** usar verde ou laranja como cores de marca — sao apenas para status funcionais
11. **NUNCA** escrever o logo como "Pagah" ou "PAGAH" — e sempre minusculo: "pagah"
12. **NUNCA** "corrigir" labels do menu como `ENVIO$` — sao nomes oficiais da plataforma, nao typos

---

## Verificacao Visual Obrigatoria

Antes de finalizar qualquer pagina, comparar visualmente com estas referencias:

```
referencias/
  home.png                  -- Layout geral: header amarelo, sidebar compacta, cards
  menu-lateral-expandido.png -- Sidebar expandida: 11 itens com labels e icones
  menu-lateral-compacto.png  -- Sidebar compacta: apenas icones
  dashboard-vendas.png       -- Tabelas com header escuro, filtros, cards de metrica
  dashboard-detalhada.png    -- Grid de KPIs, cards escuros de destaque
  editar-produtos.png        -- Formularios, sidebar de navegacao interna
  menu-suporte-chamados.png  -- Sub-navegacao lateral, tabelas de chamados
  tela-usuarios.png          -- Tabela com badges, toggles, botoes de acao
```

A pagina HTML do sistema real tambem esta disponivel como referencia:
```
referencias/HTML da Home.html  -- HTML completo extraido da plataforma real
```

Se a pagina criada nao parece visualmente identica ao padrao dessas screenshots, **corrija antes de entregar**.

---

## Assets Disponiveis

```
assets/
  icon/svg/
    icon-pagah-yellow-rounded.svg  <-- Usar no header (icone do foguete, fundo amarelo)
    icon-pagah-grey-rounded.svg    <-- Variante cinza
    icon-pagah-yellow-square.svg
    icon-pagah-grey-square.svg
  icon/png/                        <-- Mesmos icones em PNG
  icon/webp/                       <-- Mesmos icones em WebP
  logo/png/
    Icone.png
    Logo-principal.png
    Logo-alternativo.png
    Logo-secundario.png
    logo-simples-amarelo.png
    logo-simples-cinza.png
    logo-simples-gelo.png
  pagcall/                         <-- Sub-marca PagCall (foguete com telefone)
    logo/svg/                      <-- SVGs do PagCall
    logo/png/                      <-- PNGs do PagCall
```

Ao referenciar o icone no header, ajustar o caminho relativo conforme a localizacao do arquivo HTML. Exemplo:
- Arquivo na raiz: `src="assets/icon/svg/icon-pagah-yellow-rounded.svg"`
- Arquivo em `projetos/meu-projeto/`: `src="../../assets/icon/svg/icon-pagah-yellow-rounded.svg"`

---

## Stack e Estilizacao

O sistema Pagah real usa **Laravel 8.x + Vue.js 2.5 + Tailwind CSS + Bootstrap + Inertia.js**. Os prototipos nao replicam essa stack, mas devem:

- Usar **Tailwind CSS via CDN** com `prefix: 'tw-'` (evitar conflitos, mesmo padrao do real)
- Usar **Google Material Symbols Rounded** para icones (mesmo do sistema real)
- Usar **Ubuntu** (Google Fonts) para tipografia
- Manter HTML limpo e semantico que desenvolvedores possam adaptar
- Focar na **fidelidade visual**, nao na arquitetura de codigo

---

## Subprojetos

- `projetos/modulo-callcenter-appcall/` — Modulo de call center PagCall (em desenvolvimento)

> **Nota:** O diretorio `projetos/central-empresas/` existia anteriormente (projeto finalizado) mas foi removido do repositorio.

---

## Checklist ao Criar Paginas

Use esta checklist antes de considerar uma pagina pronta:

- [ ] Copiou o shell de `_template-shell.html`?
- [ ] Header amarelo `#F1E52F` fixo no topo, 100% largura?
- [ ] Sidebar branca `#FFFFFF` com TODOS os 11 itens de menu?
- [ ] Icones sao Material Symbols Rounded (nao Font Awesome)?
- [ ] Background da pagina e `#F2F2F2`?
- [ ] Cards brancos com border-radius 12-16px?
- [ ] Tailwind com prefix `tw-`?
- [ ] Toggle sidebar compacta/expandida funciona?
- [ ] Item ativo correto marcado na sidebar?
- [ ] Comparou visualmente com screenshots em `referencias/`?
- [ ] Logo escrito em minusculas ("pagah")?
- [ ] Dados mockados com valores realistas em BRL?
- [ ] Nenhuma cor de marca inventada (verde/laranja sao so status)?
