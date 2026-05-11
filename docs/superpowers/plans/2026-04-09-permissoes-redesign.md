# Redesign Tela de Permissões — Plano de Implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Criar protótipo HTML visual da tela de permissões redesenhada — tela única com split view, permissões organizadas por menu, abas para permissões/usuários.

**Architecture:** Arquivo HTML único (`projetos/permissoes/permissoes.html`) copiado do `_template-shell.html`. Todo o CSS customizado fica em `<style>` no `<head>`. Todo o JavaScript fica em `<script>` antes do `</body>`. Dados mockados em objetos JS inline.

**Tech Stack:** HTML5, Tailwind CSS (CDN, prefix `tw-`), Google Material Symbols Rounded, Ubuntu (Google Fonts), JavaScript vanilla.

**Spec:** `docs/superpowers/specs/2026-04-09-permissoes-redesign.md`

---

### Task 1: Criar arquivo base com shell e layout split view

**Files:**
- Create: `projetos/permissoes/permissoes.html` (copiado de `_template-shell.html`)

- [ ] **Step 1: Copiar template shell**

Copiar `_template-shell.html` para `projetos/permissoes/permissoes.html`.

- [ ] **Step 2: Ajustar metadados e caminhos**

No arquivo copiado, alterar:

```html
<title>Grupos de Permissões | Pagah</title>
```

Ajustar o caminho do SVG do logo no header:
```html
<img src="../../assets/icon/svg/icon-pagah-yellow-rounded.svg" alt="Pagah" class="pb-header__logo_img">
```

- [ ] **Step 3: Marcar item ativo na sidebar**

Remover `active` do link do Dashboard e adicionar no item Configurações:

```html
<!-- Dashboard: remover active -->
<a href="/home" class="pb-side_menu__link" title="Dashboard">

<!-- Configurações: adicionar active -->
<a class="pb-side_menu__link active" title="Configurações">
```

- [ ] **Step 4: Adicionar CSS customizado do layout split view**

Dentro do segundo bloco `<style>` (estilos específicos da página), adicionar:

```css
/* ============================================
   LAYOUT SPLIT VIEW — Permissões
   ============================================ */
.perm-container {
    display: flex;
    gap: 24px;
    height: calc(100vh - var(--header-height) - 48px);
}

.perm-left {
    width: 300px;
    min-width: 300px;
    background: var(--pagah-white);
    border-radius: 16px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
    border: 1px solid #F0F0F0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.perm-left__header {
    padding: 20px 20px 16px;
    border-bottom: 1px solid #F0F0F0;
}

.perm-left__title {
    font-size: 18px;
    font-weight: 700;
    color: var(--pagah-dark);
    margin-bottom: 12px;
}

.perm-left__list {
    flex: 1;
    overflow-y: auto;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.perm-right {
    flex: 1;
    background: var(--pagah-white);
    border-radius: 16px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
    border: 1px solid #F0F0F0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
```

- [ ] **Step 5: Substituir conteúdo do main**

Remover o placeholder do `<main class="pb-main">` e substituir por:

```html
<div class="perm-container">
    <!-- Painel Esquerdo -->
    <div class="perm-left">
        <div class="perm-left__header">
            <h2 class="perm-left__title">Grupos de Permissões</h2>
            <button class="tw-bg-[#F1E52F] tw-text-[#1C1C1C] tw-font-semibold tw-px-4 tw-py-2 tw-rounded-lg tw-text-sm tw-w-full hover:tw-brightness-95 tw-transition tw-flex tw-items-center tw-justify-center tw-gap-2">
                <span class="material-symbols-rounded" style="font-size:18px;">add</span>
                Novo Grupo
            </button>
        </div>
        <div class="perm-left__list" id="groupList">
            <!-- Preenchido via JS -->
        </div>
    </div>

    <!-- Painel Direito -->
    <div class="perm-right" id="rightPanel">
        <!-- Preenchido nas próximas tasks -->
    </div>
</div>
```

- [ ] **Step 6: Verificar no navegador**

Abrir `projetos/permissoes/permissoes.html` no browser. Verificar:
- Header amarelo fixo no topo
- Sidebar branca com 11 itens, Configurações ativo
- Dois painéis brancos lado a lado sobre fundo `#F2F2F2`
- Toggle sidebar compacta/expandida funciona
- Logo do foguete aparece no header

- [ ] **Step 7: Commit**

```bash
git add projetos/permissoes/permissoes.html
git commit -m "feat: cria base do protótipo de permissões com layout split view"
```

---

### Task 2: Painel esquerdo — Cards de grupos com badges de nível

**Files:**
- Modify: `projetos/permissoes/permissoes.html`

- [ ] **Step 1: Adicionar CSS dos cards de grupo**

No bloco `<style>` customizado, adicionar:

```css
/* ============================================
   CARDS DE GRUPO
   ============================================ */
.group-card {
    padding: 12px 14px;
    border-radius: 10px;
    background: #F8F8F8;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 12px;
}

.group-card:hover {
    background: #F0F0F0;
}

.group-card.active {
    background: var(--pagah-yellow);
}

.group-card__info {
    flex: 1;
    min-width: 0;
}

.group-card__name {
    font-size: 14px;
    font-weight: 600;
    color: var(--pagah-dark);
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.group-card__meta {
    font-size: 11px;
    color: var(--pagah-gray);
    display: flex;
    align-items: center;
    gap: 4px;
}

.group-card.active .group-card__meta {
    color: rgba(28, 28, 28, 0.7);
}

.group-card__edit {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
    color: var(--pagah-gray);
    flex-shrink: 0;
}

.group-card__edit:hover {
    background: rgba(0, 0, 0, 0.08);
}

.group-card.active .group-card__edit {
    color: var(--pagah-dark);
}

.group-card.active .group-card__edit:hover {
    background: rgba(0, 0, 0, 0.1);
}

/* Badges de nível */
.badge-level {
    font-size: 10px;
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 20px;
    white-space: nowrap;
}

.badge-level--total {
    background: #DCFCE7;
    color: #166534;
}

.badge-level--quase-total {
    background: #D1FAE5;
    color: #065F46;
}

.badge-level--parcial {
    background: #FEF9C3;
    color: #854D0E;
}

.badge-level--restrito {
    background: #FEE2E2;
    color: #991B1B;
}
```

- [ ] **Step 2: Adicionar dados mockados de grupos no JavaScript**

Antes do `</body>`, dentro de um novo bloco `<script>`, adicionar os dados:

```javascript
// ============================================
// DADOS MOCKADOS
// ============================================
const TOTAL_PERMISSIONS = 90;

const groups = [
    { id: 1, name: 'ADMIN', users: 5, activePerms: 87 },
    { id: 2, name: 'Comercial', users: 8, activePerms: 62 },
    { id: 3, name: 'Gabriel DEV', users: 1, activePerms: 85 },
    { id: 4, name: 'Jeferson', users: 1, activePerms: 45 },
    { id: 5, name: 'Julio', users: 1, activePerms: 22 },
    { id: 6, name: 'Luis', users: 1, activePerms: 38 },
    { id: 7, name: 'Suporte', users: 12, activePerms: 15 },
];

function getLevelBadge(activePerms) {
    const pct = (activePerms / TOTAL_PERMISSIONS) * 100;
    if (pct >= 90) return { label: 'Total', css: 'badge-level--total' };
    if (pct >= 70) return { label: 'Quase total', css: 'badge-level--quase-total' };
    if (pct >= 30) return { label: 'Parcial', css: 'badge-level--parcial' };
    return { label: 'Restrito', css: 'badge-level--restrito' };
}
```

- [ ] **Step 3: Adicionar função de renderizar grupos**

Continuar no mesmo `<script>`:

```javascript
let selectedGroupId = 1;

function renderGroups() {
    const list = document.getElementById('groupList');
    list.innerHTML = groups.map(g => {
        const badge = getLevelBadge(g.activePerms);
        const isActive = g.id === selectedGroupId;
        return `
            <div class="group-card ${isActive ? 'active' : ''}" onclick="selectGroup(${g.id})">
                <div class="group-card__info">
                    <div class="group-card__name">
                        ${g.name}
                        <span class="badge-level ${badge.css}">${badge.label}</span>
                    </div>
                    <div class="group-card__meta">
                        <span class="material-symbols-rounded" style="font-size:14px;">group</span>
                        ${g.users} usuário${g.users !== 1 ? 's' : ''}
                    </div>
                </div>
                <button class="group-card__edit" onclick="event.stopPropagation();" title="Editar nome">
                    <span class="material-symbols-rounded" style="font-size:18px;">edit</span>
                </button>
            </div>
        `;
    }).join('');
}

function selectGroup(id) {
    selectedGroupId = id;
    renderGroups();
    renderRightPanel();
}
```

- [ ] **Step 4: Chamar renderGroups na inicialização**

Adicionar no final do `<script>`:

```javascript
// Inicialização
renderGroups();
```

- [ ] **Step 5: Verificar no navegador**

Abrir no browser. Verificar:
- 7 cards de grupo aparecem no painel esquerdo
- ADMIN selecionado (fundo amarelo) com badge "Total" verde
- Comercial com badge "Parcial" amarelo
- Suporte com badge "Restrito" vermelho
- Quantidade de usuários visível em cada card
- Ícone de editar (lápis) presente em cada card
- Clicar em outro grupo muda a seleção

- [ ] **Step 6: Commit**

```bash
git add projetos/permissoes/permissoes.html
git commit -m "feat: adiciona painel esquerdo com cards de grupos e badges de nível"
```

---

### Task 3: Painel direito — Sistema de abas e header

**Files:**
- Modify: `projetos/permissoes/permissoes.html`

- [ ] **Step 1: Adicionar CSS das abas**

No bloco `<style>` customizado, adicionar:

```css
/* ============================================
   SISTEMA DE ABAS
   ============================================ */
.perm-tabs {
    display: flex;
    border-bottom: 2px solid #EBEBEB;
    padding: 0 24px;
}

.perm-tab {
    padding: 14px 20px;
    font-size: 14px;
    color: #999;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    margin-bottom: -2px;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 8px;
    background: none;
    border-top: none;
    border-left: none;
    border-right: none;
    font-family: 'Ubuntu', sans-serif;
}

.perm-tab:hover {
    color: var(--pagah-dark);
}

.perm-tab.active {
    color: var(--pagah-dark);
    font-weight: 600;
    border-bottom-color: var(--pagah-yellow);
}

.perm-tab__count {
    font-size: 11px;
    background: #EBEBEB;
    color: var(--pagah-gray);
    padding: 2px 8px;
    border-radius: 10px;
}

.perm-tab.active .perm-tab__count {
    background: var(--pagah-yellow);
    color: var(--pagah-dark);
}

.perm-tab-content {
    flex: 1;
    overflow-y: auto;
    padding: 20px 24px;
}

.perm-right__header {
    padding: 20px 24px 0;
}

.perm-right__title {
    font-size: 18px;
    font-weight: 700;
    color: var(--pagah-dark);
    margin-bottom: 4px;
}
```

- [ ] **Step 2: Adicionar HTML das abas no painel direito**

Substituir o comentário `<!-- Preenchido nas próximas tasks -->` dentro de `#rightPanel` por:

```html
<div class="perm-right__header">
    <h2 class="perm-right__title" id="rightPanelTitle">Permissões — ADMIN</h2>
</div>
<div class="perm-tabs">
    <button class="perm-tab active" onclick="switchTab('permissions')" id="tabPermissions">
        <span class="material-symbols-rounded" style="font-size:18px;">shield</span>
        Permissões
    </button>
    <button class="perm-tab" onclick="switchTab('users')" id="tabUsers">
        <span class="material-symbols-rounded" style="font-size:18px;">group</span>
        Usuários
        <span class="perm-tab__count" id="tabUsersCount">5</span>
    </button>
</div>
<div class="perm-tab-content" id="tabContent">
    <!-- Preenchido via JS -->
</div>
```

- [ ] **Step 3: Adicionar lógica de troca de abas no JavaScript**

Adicionar no `<script>`:

```javascript
let activeTab = 'permissions';

function switchTab(tab) {
    activeTab = tab;
    document.getElementById('tabPermissions').classList.toggle('active', tab === 'permissions');
    document.getElementById('tabUsers').classList.toggle('active', tab === 'users');
    renderTabContent();
}

function renderRightPanel() {
    const group = groups.find(g => g.id === selectedGroupId);
    document.getElementById('rightPanelTitle').textContent = `Permissões — ${group.name}`;
    document.getElementById('tabUsersCount').textContent = group.users;
    renderTabContent();
}

function renderTabContent() {
    const content = document.getElementById('tabContent');
    if (activeTab === 'permissions') {
        renderPermissionsTab(content);
    } else {
        renderUsersTab(content);
    }
}

function renderPermissionsTab(container) {
    container.innerHTML = '<p style="color:#999;">Seções de permissões (próxima task)</p>';
}

function renderUsersTab(container) {
    container.innerHTML = '<p style="color:#999;">Lista de usuários (task futura)</p>';
}
```

- [ ] **Step 4: Chamar renderRightPanel na inicialização**

Atualizar o bloco de inicialização:

```javascript
// Inicialização
renderGroups();
renderRightPanel();
```

- [ ] **Step 5: Verificar no navegador**

Abrir no browser. Verificar:
- Título "Permissões — ADMIN" aparece no painel direito
- Duas abas: "Permissões" (ativa, com linha amarela embaixo) e "Usuários (5)"
- Clicar em "Usuários" troca a aba ativa (underline muda)
- Clicar em outro grupo à esquerda atualiza o título e o contador de usuários

- [ ] **Step 6: Commit**

```bash
git add projetos/permissoes/permissoes.html
git commit -m "feat: adiciona sistema de abas no painel direito"
```

---

### Task 4: Aba Permissões — Seções colapsáveis com toggles

**Files:**
- Modify: `projetos/permissoes/permissoes.html`

- [ ] **Step 1: Adicionar CSS das seções de permissão**

No bloco `<style>` customizado, adicionar:

```css
/* ============================================
   SEÇÕES DE PERMISSÃO
   ============================================ */
.perm-section {
    margin-bottom: 8px;
}

.perm-section__header {
    background: var(--pagah-dark);
    color: white;
    padding: 10px 14px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: border-radius 0.2s;
    user-select: none;
}

.perm-section.open .perm-section__header {
    border-radius: 8px 8px 0 0;
}

.perm-section__icon {
    font-size: 20px;
    display: flex;
    align-items: center;
}

.perm-section__name {
    font-size: 13px;
    font-weight: 600;
    flex: 1;
}

.perm-section__counter {
    background: var(--pagah-yellow);
    color: var(--pagah-dark);
    font-size: 10px;
    font-weight: 600;
    padding: 3px 10px;
    border-radius: 20px;
    white-space: nowrap;
}

.perm-section__chevron {
    font-size: 20px;
    transition: transform 0.3s;
    display: flex;
    align-items: center;
}

.perm-section.open .perm-section__chevron {
    transform: rotate(180deg);
}

/* Toggle switch */
.perm-toggle {
    position: relative;
    width: 36px;
    height: 20px;
    flex-shrink: 0;
}

.perm-toggle input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
}

.perm-toggle__slider {
    position: absolute;
    cursor: pointer;
    top: 0; left: 0; right: 0; bottom: 0;
    background: var(--pagah-light-gray);
    border-radius: 20px;
    transition: background 0.3s;
}

.perm-toggle__slider::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    left: 2px;
    bottom: 2px;
    background: white;
    border-radius: 50%;
    transition: transform 0.3s;
}

.perm-toggle input:checked + .perm-toggle__slider {
    background: var(--pagah-yellow);
}

.perm-toggle input:checked + .perm-toggle__slider::before {
    transform: translateX(16px);
}

/* Header toggle (branco no fundo escuro) */
.perm-section__header .perm-toggle__slider {
    background: rgba(255,255,255,0.3);
}

.perm-section__header .perm-toggle input:checked + .perm-toggle__slider {
    background: var(--pagah-yellow);
}

/* Lista de permissões */
.perm-section__body {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    background: #FAFAFA;
    border: 1px solid #EBEBEB;
    border-top: 0;
    border-radius: 0 0 8px 8px;
}

.perm-section.open .perm-section__body {
    max-height: 2000px;
}

.perm-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px;
    border-bottom: 1px solid #F0F0F0;
    font-size: 13px;
    color: var(--pagah-gray);
}

.perm-item:last-child {
    border-bottom: none;
}

.perm-item--child {
    padding-left: 32px;
}

.perm-item--grandchild {
    padding-left: 50px;
    font-size: 12px;
}

.perm-item__name {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 6px;
}

.perm-item__expand {
    cursor: pointer;
    display: flex;
    align-items: center;
    color: var(--pagah-gray);
    font-size: 18px;
    transition: transform 0.2s;
}

.perm-item__expand.open {
    transform: rotate(180deg);
}
```

- [ ] **Step 2: Adicionar dados mockados das permissões**

Adicionar no `<script>`, antes das funções de render:

```javascript
const permissionSections = [
    {
        id: 'dashboard', name: 'Dashboard', icon: 'home',
        permissions: [
            { key: 'dashboard_admin', name: 'Dashboard Admin' },
            { key: 'dashboard_terceiros', name: 'Dashboard Terceiros' },
            { key: 'dashboard_vendedor', name: 'Dashboard Vendedor' },
            { key: 'dashboard_cod', name: 'Dashboard Cash on Delivery' },
        ]
    },
    {
        id: 'relatorios', name: 'Relatórios', icon: 'monitoring',
        permissions: [
            { key: 'rel_callcenter', name: 'CallCenter' },
            { key: 'rel_comparativo', name: 'Comparativo Vendedores' },
            { key: 'rel_marketplace', name: 'Marketplace Relatórios' },
            { key: 'rel_atendimentos', name: 'Relatório Atendimentos Leads' },
            { key: 'rel_botconversa', name: 'Relatório mensagens BotConversa' },
            { key: 'rel_tipos_atend', name: 'Relatório Tipos de Atendimentos' },
        ]
    },
    {
        id: 'produtos', name: 'Produtos', icon: 'box_add',
        permissions: [
            { key: 'produtos_v', name: 'Produtos', children: [
                { key: 'produtos_u', name: 'Editar Produto' },
                { key: 'produtos_i', name: 'Incluir Produto' },
            ]},
            { key: 'kits_v', name: 'Kits', children: [
                { key: 'kits_u', name: 'Editar Kit' },
                { key: 'kits_i', name: 'Incluir Kit' },
            ]},
            { key: 'lojas_v', name: 'Lojas', children: [
                { key: 'lojas_u', name: 'Editar Loja' },
                { key: 'lojas_i', name: 'Incluir Loja' },
            ]},
            { key: 'cadastro', name: 'Cadastro' },
        ]
    },
    {
        id: 'afiliados', name: 'Afiliados', icon: 'handshake',
        permissions: [
            { key: 'afiliados_produtos', name: 'Afiliados Produtos' },
            { key: 'modulo_afiliados', name: 'Módulo Afiliados' },
            { key: 'btn_x1', name: 'Botão/Recurso X1' },
        ]
    },
    {
        id: 'vendas', name: 'Vendas', icon: 'paid',
        permissions: [
            { key: 'alterar_produtos_pedido', name: 'Alterar Produtos do Pedido' },
            { key: 'alterar_vendedor', name: 'Alterar Vendedor' },
            { key: 'aprovar_pedido', name: 'Aprovar Pedido' },
            { key: 'aprovar_estorno', name: 'Aprovar Solicitações de Estorno' },
            { key: 'exportar_ip', name: 'Exportar IP' },
            { key: 'exportar_telefone', name: 'Exportar Telefone' },
            { key: 'marcar_pix', name: 'Marcar Pix Pago' },
            { key: 'pedidos_origem', name: 'Pedidos Origem' },
            { key: 'pedidos_upsell', name: 'Pedidos Upsell' },
            { key: 'resumo_pedido', name: 'Resumo Pedido' },
            { key: 'solicitar_estorno', name: 'Solicitar Estorno' },
            { key: 'vincular_pedidos', name: 'Vincular Pedidos' },
            { key: 'visualizar_src', name: 'Visualizar SRC' },
        ]
    },
    {
        id: 'vendas_marketplace', name: 'Vendas Marketplace', icon: 'storefront',
        permissions: [
            { key: 'marketplace_vendas', name: 'Visualizar Vendas Marketplace' },
            { key: 'marketplace_gestao', name: 'Gestão de Marketplace' },
        ]
    },
    {
        id: 'suporte', name: 'Suporte', icon: 'support_agent',
        permissions: [
            { key: 'suporte_aprovar', name: 'Aprovar Pedidos' },
            { key: 'suporte_bloqueios', name: 'Bloqueios emissão de nota' },
            { key: 'suporte_boleto_config', name: 'Configurações Boleto Bancário' },
            { key: 'suporte_comprovante', name: 'Configurações Comprovante Compra' },
            { key: 'suporte_exp_abandonos', name: 'Exportação de Abandonos', children: [
                { key: 'suporte_exp_abandonos_30', name: 'Relatórios 30' },
                { key: 'suporte_exp_abandonos_90', name: 'Relatórios 90' },
                { key: 'suporte_exp_abandonos_90p', name: 'Relatórios 90+' },
            ]},
            { key: 'suporte_exp_pedidos', name: 'Exportação de Pedidos', children: [
                { key: 'suporte_exp_pedidos_30', name: 'Relatórios 30' },
                { key: 'suporte_exp_pedidos_90', name: 'Relatórios 90' },
                { key: 'suporte_exp_pedidos_90p', name: 'Relatórios 90+' },
            ]},
            { key: 'suporte_notas', name: 'Notas Visualizar', children: [
                { key: 'suporte_notas_atualizar', name: 'Atualizar Notas' },
                { key: 'suporte_notas_cancelar', name: 'Cancelar Notas' },
            ]},
            { key: 'suporte_estorno', name: 'Solicitações de estorno' },
            { key: 'suporte_produtos_extras', name: 'Solicitações de produtos extras' },
        ]
    },
    {
        id: 'conversao', name: 'Conversão', icon: 'control_camera',
        permissions: [
            { key: 'pixel_v', name: 'Pixel', children: [
                { key: 'pixel_u', name: 'Editar Pixel' },
                { key: 'pixel_i', name: 'Incluir Pixel' },
                { key: 'pixel_d', name: 'Deletar Pixel' },
            ]},
            { key: 'campanhas', name: 'Campanhas' },
            { key: 'campanhas_emails', name: 'Campanhas Emails' },
            { key: 'campanhas_quiz', name: 'Campanhas Quiz' },
            { key: 'listas_sms', name: 'Listas SMS', children: [
                { key: 'listas_sms_exportar', name: 'Exportar Lista' },
            ]},
            { key: 'listas_email', name: 'Listas Email', children: [
                { key: 'listas_email_exportar', name: 'Exportar Lista' },
            ]},
            { key: 'funil_agendamentos', name: 'Funil SMS de Agendamentos' },
            { key: 'funil_recuperacao', name: 'Funil SMS de Recuperação' },
            { key: 'funil_eventos', name: 'Funil SMS/Emails de Eventos' },
            { key: 'bloqueio_celulares', name: 'Bloqueio de Celulares' },
            { key: 'listas_sms_analise', name: 'Listas SMS - Análise' },
            { key: 'listas_sms_categorias', name: 'Listas SMS Categorias' },
            { key: 'operadoras_sms', name: 'Operadoras de SMS' },
            { key: 'planejamento_sms', name: 'Planejamento SMS' },
            { key: 'sms_clicks', name: 'SMS Clicks' },
        ]
    },
    {
        id: 'ferramentas', name: 'Ferramentas', icon: 'manufacturing',
        permissions: [
            { key: 'webhooks', name: 'Webhooks' },
            { key: 'integracoes', name: 'Integrações' },
        ]
    },
    {
        id: 'configuracoes', name: 'Configurações', icon: 'settings',
        permissions: [
            { key: 'usuarios_v', name: 'Usuários', children: [
                { key: 'usuarios_u', name: 'Editar Usuário' },
                { key: 'usuarios_i', name: 'Incluir Usuário' },
                { key: 'usuarios_d', name: 'Deletar Usuário' },
            ]},
            { key: 'usuarios_permissoes', name: 'Grupos de Permissões' },
            { key: 'chamada_gateway', name: 'Chamada Gateway' },
            { key: 'clientes_v', name: 'Clientes' },
            { key: 'visualizar_src_cliente', name: 'Visualizar SRC Cliente' },
        ]
    },
];

// Estado das permissões por grupo (mockado)
const groupPermissions = {};
groups.forEach(g => {
    const allKeys = [];
    permissionSections.forEach(s => {
        s.permissions.forEach(p => {
            allKeys.push(p.key);
            if (p.children) p.children.forEach(c => allKeys.push(c.key));
        });
    });
    // Ativa uma porcentagem aleatória baseada no activePerms do grupo
    const permsState = {};
    const shuffled = [...allKeys].sort(() => Math.random() - 0.5);
    const activeCount = Math.round((g.activePerms / TOTAL_PERMISSIONS) * allKeys.length);
    shuffled.forEach((key, i) => {
        permsState[key] = i < activeCount;
    });
    groupPermissions[g.id] = permsState;
});
```

- [ ] **Step 3: Implementar função renderPermissionsTab**

Substituir a função `renderPermissionsTab` placeholder:

```javascript
function renderPermissionsTab(container) {
    const perms = groupPermissions[selectedGroupId];

    container.innerHTML = permissionSections.map(section => {
        const flatKeys = [];
        section.permissions.forEach(p => {
            flatKeys.push(p.key);
            if (p.children) p.children.forEach(c => flatKeys.push(c.key));
        });
        const activeCount = flatKeys.filter(k => perms[k]).length;
        const totalCount = flatKeys.length;
        const allActive = activeCount === totalCount;

        return `
            <div class="perm-section" id="section-${section.id}">
                <div class="perm-section__header" onclick="toggleSection('${section.id}')">
                    <span class="perm-section__icon material-symbols-rounded">${section.icon}</span>
                    <span class="perm-section__name">${section.name}</span>
                    <span class="perm-section__counter">${activeCount} de ${totalCount}</span>
                    <label class="perm-toggle" onclick="event.stopPropagation();">
                        <input type="checkbox" ${allActive ? 'checked' : ''} onchange="toggleAllSection('${section.id}', this.checked)">
                        <span class="perm-toggle__slider"></span>
                    </label>
                    <span class="perm-section__chevron material-symbols-rounded">expand_more</span>
                </div>
                <div class="perm-section__body">
                    ${renderPermissionItems(section.permissions, perms)}
                </div>
            </div>
        `;
    }).join('');
}

function renderPermissionItems(permissions, perms) {
    return permissions.map(p => {
        const hasChildren = p.children && p.children.length > 0;
        let html = `
            <div class="perm-item">
                <div class="perm-item__name">
                    ${hasChildren ? `<span class="perm-item__expand material-symbols-rounded" onclick="toggleSubItems(this)">expand_more</span>` : ''}
                    ${p.name}
                </div>
                <label class="perm-toggle">
                    <input type="checkbox" ${perms[p.key] ? 'checked' : ''} onchange="togglePerm('${p.key}', this.checked)">
                    <span class="perm-toggle__slider"></span>
                </label>
            </div>
        `;
        if (hasChildren) {
            html += `<div class="perm-subitems" style="display:none;">`;
            html += p.children.map(c => `
                <div class="perm-item perm-item--child">
                    <div class="perm-item__name">${c.name}</div>
                    <label class="perm-toggle">
                        <input type="checkbox" ${perms[c.key] ? 'checked' : ''} onchange="togglePerm('${c.key}', this.checked)">
                        <span class="perm-toggle__slider"></span>
                    </label>
                </div>
            `).join('');
            html += `</div>`;
        }
        return html;
    }).join('');
}
```

- [ ] **Step 4: Adicionar funções de interação**

Continuar no `<script>`:

```javascript
function toggleSection(sectionId) {
    document.getElementById('section-' + sectionId).classList.toggle('open');
}

function toggleAllSection(sectionId, checked) {
    const perms = groupPermissions[selectedGroupId];
    const section = permissionSections.find(s => s.id === sectionId);
    section.permissions.forEach(p => {
        perms[p.key] = checked;
        if (p.children) p.children.forEach(c => { perms[c.key] = checked; });
    });
    updateGroupActiveCount();
    renderPermissionsTab(document.getElementById('tabContent'));
    renderGroups();
}

function togglePerm(key, checked) {
    groupPermissions[selectedGroupId][key] = checked;
    updateGroupActiveCount();
    renderPermissionsTab(document.getElementById('tabContent'));
    renderGroups();
}

function toggleSubItems(chevron) {
    const subitems = chevron.closest('.perm-item').nextElementSibling;
    if (subitems && subitems.classList.contains('perm-subitems')) {
        const isVisible = subitems.style.display !== 'none';
        subitems.style.display = isVisible ? 'none' : 'block';
        chevron.classList.toggle('open', !isVisible);
    }
}

function updateGroupActiveCount() {
    const perms = groupPermissions[selectedGroupId];
    const allKeys = [];
    permissionSections.forEach(s => {
        s.permissions.forEach(p => {
            allKeys.push(p.key);
            if (p.children) p.children.forEach(c => allKeys.push(c.key));
        });
    });
    const activeCount = allKeys.filter(k => perms[k]).length;
    const group = groups.find(g => g.id === selectedGroupId);
    group.activePerms = Math.round((activeCount / allKeys.length) * TOTAL_PERMISSIONS);
}
```

- [ ] **Step 5: Verificar no navegador**

Abrir no browser. Verificar:
- 10 seções aparecem fechadas com headers escuros `#1C1C1C`
- Cada seção mostra ícone Material Symbols + nome + contador + toggle + chevron
- Clicar no header expande/colapsa a seção
- Toggle "ativar tudo" funciona
- Toggles individuais funcionam
- Permissões com filhos (ex: Produtos, Kits) têm chevron pra expandir sub-itens
- Contador atualiza ao ligar/desligar
- Badge do grupo à esquerda atualiza ao mudar permissões

- [ ] **Step 6: Commit**

```bash
git add projetos/permissoes/permissoes.html
git commit -m "feat: adiciona seções de permissão colapsáveis com toggles e contadores"
```

---

### Task 5: Aba Usuários — Lista com toggles e busca

**Files:**
- Modify: `projetos/permissoes/permissoes.html`

- [ ] **Step 1: Adicionar CSS da aba de usuários**

No bloco `<style>` customizado, adicionar:

```css
/* ============================================
   ABA DE USUÁRIOS
   ============================================ */
.users-search {
    position: relative;
    margin-bottom: 16px;
}

.users-search__icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: var(--pagah-gray);
}

.users-search__input {
    width: 100%;
    padding: 10px 12px 10px 40px;
    border: 1px solid var(--pagah-light-gray);
    border-radius: 8px;
    font-size: 14px;
    font-family: 'Ubuntu', sans-serif;
    color: var(--pagah-dark);
    outline: none;
    transition: border-color 0.2s;
}

.users-search__input:focus {
    border-color: var(--pagah-yellow);
}

.users-section-label {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: var(--pagah-gray);
    padding: 8px 0 4px;
    margin-top: 8px;
}

.users-section-label:first-of-type {
    margin-top: 0;
}

.user-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 0;
    border-bottom: 1px solid #F0F0F0;
}

.user-item:last-child {
    border-bottom: none;
}

.user-item__avatar {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    color: white;
    flex-shrink: 0;
}

.user-item__name {
    flex: 1;
    font-size: 14px;
    color: var(--pagah-dark);
}

.user-item__email {
    font-size: 12px;
    color: var(--pagah-gray);
}
```

- [ ] **Step 2: Adicionar dados mockados de usuários**

Adicionar no `<script>`:

```javascript
const allUsers = [
    { id: 1, name: 'Otavio Linden', email: 'otavio@pagah.com', color: '#F1E52F', textColor: '#1C1C1C' },
    { id: 2, name: 'Jeferson Silva', email: 'jeferson@pagah.com', color: '#1C1C1C', textColor: '#fff' },
    { id: 3, name: 'Gabriel Rodrigues', email: 'gabriel@pagah.com', color: '#575756', textColor: '#fff' },
    { id: 4, name: 'Luis Fernando', email: 'luis@pagah.com', color: '#3B82F6', textColor: '#fff' },
    { id: 5, name: 'Julio Cesar', email: 'julio@pagah.com', color: '#8B5CF6', textColor: '#fff' },
    { id: 6, name: 'Maria Santos', email: 'maria@pagah.com', color: '#22C55E', textColor: '#fff' },
    { id: 7, name: 'Carlos Oliveira', email: 'carlos@pagah.com', color: '#EF4444', textColor: '#fff' },
    { id: 8, name: 'Ana Paula Costa', email: 'ana@pagah.com', color: '#F97316', textColor: '#fff' },
    { id: 9, name: 'Ricardo Mendes', email: 'ricardo@pagah.com', color: '#1C1C1C', textColor: '#fff' },
    { id: 10, name: 'Fernanda Lima', email: 'fernanda@pagah.com', color: '#575756', textColor: '#fff' },
    { id: 11, name: 'Pedro Henrique', email: 'pedro@pagah.com', color: '#3B82F6', textColor: '#fff' },
    { id: 12, name: 'Camila Souza', email: 'camila@pagah.com', color: '#8B5CF6', textColor: '#fff' },
];

// Usuários vinculados a cada grupo (mockado)
const groupUsers = {
    1: [1, 2, 3, 4, 5],
    2: [2, 4, 5, 6, 7, 8, 9, 10],
    3: [3],
    4: [2],
    5: [5],
    6: [4],
    7: [2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 3],
};
```

- [ ] **Step 3: Implementar função renderUsersTab**

Substituir a função `renderUsersTab` placeholder:

```javascript
function renderUsersTab(container) {
    const linkedIds = groupUsers[selectedGroupId] || [];

    container.innerHTML = `
        <div class="users-search">
            <span class="users-search__icon material-symbols-rounded">search</span>
            <input type="text" class="users-search__input" placeholder="Buscar usuário..." oninput="filterUsers(this.value)">
        </div>
        <div id="usersList">
            ${renderUsersList(linkedIds, '')}
        </div>
    `;
}

function renderUsersList(linkedIds, filter) {
    const filterLower = filter.toLowerCase();
    const linked = allUsers.filter(u => linkedIds.includes(u.id) && u.name.toLowerCase().includes(filterLower));
    const available = allUsers.filter(u => !linkedIds.includes(u.id) && u.name.toLowerCase().includes(filterLower));

    let html = '';

    if (linked.length > 0) {
        html += `<div class="users-section-label">Vinculados (${linked.length})</div>`;
        html += linked.map(u => renderUserItem(u, true)).join('');
    }

    if (available.length > 0) {
        html += `<div class="users-section-label">Disponíveis (${available.length})</div>`;
        html += available.map(u => renderUserItem(u, false)).join('');
    }

    if (linked.length === 0 && available.length === 0) {
        html += '<p style="color:#999;text-align:center;padding:20px;">Nenhum usuário encontrado</p>';
    }

    return html;
}

function renderUserItem(user, isLinked) {
    const initials = user.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    return `
        <div class="user-item">
            <div class="user-item__avatar" style="background:${user.color};color:${user.textColor};">${initials}</div>
            <div style="flex:1;">
                <div class="user-item__name">${user.name}</div>
                <div class="user-item__email">${user.email}</div>
            </div>
            <label class="perm-toggle">
                <input type="checkbox" ${isLinked ? 'checked' : ''} onchange="toggleUser(${user.id}, this.checked)">
                <span class="perm-toggle__slider"></span>
            </label>
        </div>
    `;
}

function toggleUser(userId, linked) {
    const ids = groupUsers[selectedGroupId];
    if (linked && !ids.includes(userId)) {
        ids.push(userId);
    } else if (!linked) {
        const idx = ids.indexOf(userId);
        if (idx > -1) ids.splice(idx, 1);
    }
    // Atualiza contador do grupo e da aba
    const group = groups.find(g => g.id === selectedGroupId);
    group.users = ids.length;
    document.getElementById('tabUsersCount').textContent = ids.length;
    renderGroups();
    renderUsersTab(document.getElementById('tabContent'));
}

function filterUsers(query) {
    const linkedIds = groupUsers[selectedGroupId] || [];
    document.getElementById('usersList').innerHTML = renderUsersList(linkedIds, query);
}
```

- [ ] **Step 4: Verificar no navegador**

Abrir no browser. Verificar:
- Clicar na aba "Usuários" mostra campo de busca e lista de usuários
- Usuários vinculados (toggle ON) aparecem no topo sob label "Vinculados"
- Usuários disponíveis (toggle OFF) aparecem embaixo sob label "Disponíveis"
- Avatares com iniciais coloridas
- Campo de busca filtra em tempo real
- Vincular/desvincular move o usuário entre seções
- Contador na aba e no card do grupo atualiza
- Trocar de grupo na esquerda mostra usuários diferentes

- [ ] **Step 5: Commit**

```bash
git add projetos/permissoes/permissoes.html
git commit -m "feat: adiciona aba de usuários com busca, toggles e avatares"
```

---

### Task 6: Preservar estado das seções abertas e polish final

**Files:**
- Modify: `projetos/permissoes/permissoes.html`

- [ ] **Step 1: Preservar estado de seções abertas ao re-renderizar**

As seções colapsam ao re-renderizar. Adicionar tracking de estado. No `<script>`, adicionar:

```javascript
const openSections = new Set();

// Atualizar toggleSection para trackear estado
function toggleSection(sectionId) {
    const el = document.getElementById('section-' + sectionId);
    el.classList.toggle('open');
    if (el.classList.contains('open')) {
        openSections.add(sectionId);
    } else {
        openSections.delete(sectionId);
    }
}
```

Atualizar `renderPermissionsTab` — após gerar o HTML, restaurar seções abertas:

Adicionar ao final de `renderPermissionsTab`, depois de `container.innerHTML = ...`:

```javascript
    // Restaurar seções abertas
    openSections.forEach(id => {
        const el = document.getElementById('section-' + id);
        if (el) el.classList.add('open');
    });
```

- [ ] **Step 2: Adicionar scrollbar sutil nos painéis**

No CSS customizado, adicionar:

```css
/* ============================================
   SCROLLBAR CUSTOMIZADA
   ============================================ */
.perm-left__list::-webkit-scrollbar,
.perm-tab-content::-webkit-scrollbar {
    width: 6px;
}

.perm-left__list::-webkit-scrollbar-track,
.perm-tab-content::-webkit-scrollbar-track {
    background: transparent;
}

.perm-left__list::-webkit-scrollbar-thumb,
.perm-tab-content::-webkit-scrollbar-thumb {
    background: var(--pagah-light-gray);
    border-radius: 3px;
}

.perm-left__list::-webkit-scrollbar-thumb:hover,
.perm-tab-content::-webkit-scrollbar-thumb:hover {
    background: var(--pagah-gray);
}
```

- [ ] **Step 3: Verificar tudo no navegador — checklist completa**

Abrir no browser e verificar todos os itens:

- [ ] Header amarelo `#F1E52F` fixo no topo, 100% largura
- [ ] Sidebar branca `#FFFFFF` com TODOS os 11 itens de menu
- [ ] Ícones são Material Symbols Rounded (não Font Awesome)
- [ ] Background da página é `#F2F2F2`
- [ ] Cards brancos com border-radius 12-16px
- [ ] Tailwind com prefix `tw-`
- [ ] Toggle sidebar compacta/expandida funciona
- [ ] Item ativo correto (Configurações) marcado na sidebar
- [ ] Logo do foguete SVG aparece no header
- [ ] Painel esquerdo: 7 grupos com badges coloridos e contagem de usuários
- [ ] Grupo selecionado fica amarelo
- [ ] Painel direito: abas "Permissões" e "Usuários" funcionam
- [ ] 10 seções de permissão fechadas com headers escuros
- [ ] Toggle "ativar tudo" por seção funciona
- [ ] Expandir seção mostra permissões individuais com toggles
- [ ] Sub-itens (filhos) expandem corretamente
- [ ] Contadores atualizam em tempo real
- [ ] Aba Usuários: busca filtra, toggles vinculam/desvinculam
- [ ] Trocar de grupo atualiza ambas as abas
- [ ] Seções abertas permanecem abertas ao interagir

- [ ] **Step 4: Commit final**

```bash
git add projetos/permissoes/permissoes.html
git commit -m "feat: adiciona preservação de estado e polish final da tela de permissões"
```

---

## Resumo das Tasks

| Task | Descrição | Commits |
|------|-----------|---------|
| 1 | Base: shell template + layout split view | 1 |
| 2 | Painel esquerdo: cards de grupos + badges de nível | 1 |
| 3 | Painel direito: sistema de abas | 1 |
| 4 | Aba Permissões: seções colapsáveis + toggles + dados | 1 |
| 5 | Aba Usuários: lista + busca + toggles | 1 |
| 6 | Preservar estado + polish + verificação final | 1 |

**Total: 6 tasks, 6 commits, 1 arquivo HTML**
