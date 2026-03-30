# Pagah

Sistema completo de e-commerce e processamento de pagamentos desenvolvido em Laravel, focado em gestão de pedidos, integrações com múltiplas plataformas, marketplaces e gateways de pagamento.

## 📋 Sobre o Projeto

O **Pagah** é uma plataforma enterprise-level que oferece:
- Gestão completa de e-commerce
- Processamento de pagamentos com múltiplos gateways
- Integração com marketplaces (Mercado Livre, Amazon, Americanas)
- Sistema de leads e funis de vendas
- Gestão de cursos online
- Sistema multi-tenant e multi-loja
- Webhooks e integrações com ERPs

## 🚀 Tecnologias Principais

### Backend
- **Laravel 8.x** - Framework PHP
- **Laravel Jetstream** - Autenticação e gestão de usuários
- **Laravel Fortify** - Backend de autenticação
- **Laravel Sanctum** - API Authentication
- **Laravel Livewire** - Componentes dinâmicos
- **PHP 7.4+** ou **PHP 8.0+**

### Frontend
- **Vue.js 2.5.17** - Framework JavaScript
- **Inertia.js** - SPA-like experience
- **Tailwind CSS 1.8.0** - Framework CSS utility-first
- **Laravel Mix** - Build de assets

### Banco de Dados
- **MySQL/MariaDB**

## 📦 Requisitos

- PHP >= 7.4 ou >= 8.0
- Composer
- Node.js e NPM
- MySQL/MariaDB
- Extensões PHP: BCMath, Ctype, Fileinfo, JSON, Mbstring, OpenSSL, PDO, Tokenizer, XML

## 🔧 Instalação

### 1. Clone o repositório
```bash
git clone <repository-url>
cd Pagah
```

### 2. Instale as dependências PHP
```bash
composer install
```

### 3. Instale as dependências Node.js
```bash
npm install
```

### 4. Configure o ambiente
```bash
cp .env.example .env
php artisan key:generate
```

### 5. Configure o banco de dados
Edite o arquivo `.env` e configure:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=Pagah
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
```

### 6. Execute as migrations
```bash
php artisan migrate
```

### 7. Execute os seeders (opcional)
```bash
php artisan db:seed
```

### 8. Compile os assets
```bash
# Desenvolvimento
npm run dev

# Produção
npm run production
```

### 9. Inicie o servidor
```bash
php artisan serve
```

O sistema estará disponível em `http://127.0.0.1:8000`

## ⚙️ Configuração

### Variáveis de Ambiente Importantes

Configure no arquivo `.env`:

```env
APP_NAME=Pagah
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost

# Banco de Dados
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_DATABASE=Pagah
DB_USERNAME=root
DB_PASSWORD=

# Cache e Sessão
CACHE_DRIVER=file
SESSION_DRIVER=file
QUEUE_CONNECTION=sync

# Mail
MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
```

### Gateways de Pagamento

Configure as credenciais dos gateways de pagamento no arquivo `.env`:
- Pagarme
- PagSeguro
- Cielo
- GetNet
- Iugu
- Sicoob
- Rede

### Integrações

Configure as integrações necessárias:
- ActiveCampaign
- Mercado Livre
- Bling ERP
- Tiny ERP
- E outros...

## 📁 Estrutura do Projeto

```
Pagah/
├── app/
│   ├── Actions/              # Actions do Fortify/Jetstream
│   ├── Console/Commands/      # Comandos Artisan (277 comandos)
│   ├── Domain/Contracts/      # Interfaces (ex: GatewayPagamentoInterface)
│   ├── Events/               # Eventos do sistema
│   ├── Http/
│   │   ├── Controllers/      # 506 controllers
│   │   ├── Middleware/       # Middlewares customizados
│   │   ├── Services/         # 45 services (lógica de negócio)
│   │   └── Webscrapers/      # Web scrapers
│   ├── Integrations/         # Integrações externas (ex: Appmax)
│   ├── Jobs/                 # Jobs assíncronos
│   ├── Listeners/            # Event listeners
│   ├── Models/               # 400 models Eloquent
│   ├── Providers/           # Service Providers
│   └── Services/            # Services organizados (Split, Payment, etc)
├── config/                   # Arquivos de configuração
├── database/
│   ├── migrations/           # 923 migrations
│   └── seeders/             # 44 seeders
├── public/                   # Assets públicos
├── resources/
│   ├── js/                   # JavaScript/Vue components
│   ├── views/                # 1157 views Blade
│   └── lang/                 # Traduções
├── routes/                   # Definição de rotas
├── storage/                   # Arquivos de armazenamento
├── tests/                     # Testes automatizados
└── vendor/                   # Dependências Composer
```

## 🎯 Funcionalidades Principais

### E-commerce
- Loja virtual multi-loja
- Gestão de produtos e variações
- Carrinho de compras
- Checkout completo
- Gestão de pedidos

### Pagamentos
- Múltiplos gateways de pagamento
- Boleto bancário
- PIX
- Cartão de crédito/débito
- Processamento assíncrono
- **Split de Pagamento** - Divisão automática de valores entre marketplace e recebedores (Appmax, Mercado Pago, etc)

### Marketplaces
- Integração com Mercado Livre
- Integração com Amazon
- Integração com Americanas
- Sincronização de produtos e pedidos

### Leads e Funis
- Captura de leads
- Funis de vendas automatizados
- Broadcast de mensagens
- Sequências de email/SMS

### Cursos Online
- Plataforma de cursos
- Área do aluno
- Certificados
- Gestão de módulos e aulas

### Integrações
- Webhooks configuráveis
- Integração com ERPs (Bling, Tiny)
- Integração com CRMs (ActiveCampaign)
- APIs RESTful

### Split de Pagamento
- Divisão automática de valores entre marketplace e recebedores
- Suporte a múltiplas integradoras (Appmax, Mercado Pago, Pagarme, etc)
- Cálculo de valor líquido baseado em taxas e comissões
- Tabela genérica para histórico de splits
- Arquitetura isolada e reutilizável

## 🔄 Módulo de Split de Pagamento

Módulo implementado seguindo **Clean Architecture** e **Service Layer Pattern**, totalmente isolado do código legado.

### Estrutura de Arquivos

#### **Domain/Contracts (Interfaces)**
- `GatewayPagamentoInterface.php` - Interface para gateways de pagamento (permite trocar de gateway facilmente)
- `CalculadorSplitInterface.php` - Interface para cálculo de divisão de valores

#### **Enums**
- `SplitStatus.php` - Enum para status do split (pendente, processado, erro, cancelado)
- `Integradora.php` - Enum para integradoras suportadas (appmax, mercado_pago, pagarme, etc)

#### **Integrations/Appmax**
- `GatewayAppmax.php` - Implementação da integração com Appmax (cria split na API)

#### **Services/Split**
- `ServicoCalculoValorLiquido.php` - Calcula valor líquido do pedido baseado em `AplicarTaxasPedidos.php` (taxas, comissões, juros)
- `ServicoCalculadorSplit.php` - Calcula divisão de valores entre marketplace e recebedores
- `DTOs/DadosCalculoSplit.php` - DTO (Data Transfer Object) para estruturar dados de cálculo

#### **Services/Payment**
- `ServicoSplitPagamento.php` - Orquestra todo o fluxo: busca pedido, calcula valor líquido, calcula split, cria no gateway, salva no banco

#### **Models**
- `SplitPagamento.php` - Model da tabela genérica `splits_pagamento` (suporta múltiplas integradoras)

#### **Config**
- `appmax.php` - Configurações da API Appmax (URLs, timeout, retry)

#### **Migrations**
- `create_splits_pagamento_table.php` - Cria tabela genérica para splits
- `remove_split_fields_from_pedidos_table.php` - Remove campos de split da tabela pedidos

### Como Usar

```php
use App\Services\Payment\ServicoSplitPagamento;

$servicoSplit = app(ServicoSplitPagamento::class);

$result = $servicoSplit->processarComSplit(
    $pedidoId,
    [
        'marketplace_percent' => 50,
        'recipients' => [
            ['recipient_hash' => 'hash', 'percent' => 30]
        ]
    ],
    'appmax' // integradora
);
```

**⚠️ IMPORTANTE:** Este módulo **NÃO possui rotas**. Pode ser usado em qualquer lugar (cron, controller, command, etc).

---

## 📚 Documentação Adicional

Documentação detalhada disponível em `docs/`:

## 🧪 Testes

Execute os testes com:

```bash
php artisan test
```

Ou com PHPUnit:

```bash
vendor/bin/phpunit
```

## 🔐 Segurança

- Autenticação via Laravel Jetstream
- Two-Factor Authentication (2FA)
- CSRF Protection
- CORS configurado
- Validação de dados
- Sanitização de inputs

## 🚀 Comandos Úteis

```bash
# Limpar cache
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear

# Otimizar aplicação
php artisan optimize

# Criar migration
php artisan make:migration nome_da_migration

# Criar controller
php artisan make:controller NomeController

# Criar model
php artisan make:model NomeModel

# Executar jobs em fila
php artisan queue:work

# Listar rotas
php artisan route:list
```

## 📊 Estatísticas do Projeto

- **506 Controllers** - Sistema extenso
- **400 Models** - Banco de dados complexo
- **1157 Views** - Interface completa
- **923 Migrations** - Evolução longa do banco
- **277 Comandos Artisan** - Automação extensa
- **45 Services** - Lógica de negócio bem separada

## 🔌 Integrações Suportadas

### Gateways de Pagamento
- Cielo
- Pagarme
- PagSeguro
- GetNet
- Rede
- Iugu
- Sicoob
- Notazz
- **Appmax** - Com suporte a split de pagamento

### Marketplaces
- Mercado Livre
- Amazon
- Americanas

### Marketing e Automação
- ActiveCampaign
- SmartFunnel
- Taboola
- UTMfy

### Comunicação
- SMS (AllcanceSMS, SMSBarato, SMSDev, ChatAPI)
- WhatsApp (WhatsScripts)
- Email

### ERP e Gestão
- Bling
- Tiny ERP
- N8n (automação)

### Logística
- Portal Postal
- Correios
- Log123

## 🛠️ Desenvolvimento

### Padrões Arquiteturais

- **MVC** - Model-View-Controller
- **Service Layer** - Separação de lógica de negócio
- **Event-Driven** - Events e Listeners
- **Repository Pattern** - Acesso a dados
- **Queue/Job Pattern** - Processamento assíncrono
- **Clean Architecture** - Módulo de split isolado e reutilizável
- **Dependency Injection** - Desacoplamento de dependências

### Convenções de Código

- PSR-4 Autoloading
- PSR-12 Coding Standard
- Nomenclatura em inglês
- Controllers "finos" (thin controllers)
- Lógica de negócio em Services

## 📝 Licença

Este projeto é proprietário. Todos os direitos reservados.

## 👥 Suporte

Para suporte, entre em contato com a equipe de desenvolvimento.

---

**Desenvolvido com ❤️ usando Laravel**
