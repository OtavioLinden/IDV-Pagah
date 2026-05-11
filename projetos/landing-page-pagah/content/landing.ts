/**
 * Copy centralizada das 4 landings da Pagah.
 * Mesma copy renderizada em 4 visuais diferentes (v1-premium-dark, v2-editorial, v3-living-tech, v4-heritage).
 * Editar aqui = atualiza nas 4.
 */

export const meta = {
  brand: "pagah",
  position: "Checkout + Call Center + Juros do Parcelamento para Você.",
  description:
    "A Pagah cuida do que vem depois do botão Comprar: checkout que aprova, atendente que recupera, e juros do parcelamento que voltam para você.",
};

export const header = {
  menu: [
    { label: "Soluções", href: "#solucoes" },
    { label: "Call Center", href: "#call-center" },
    { label: "Juros do Parcelamento", href: "#juros" },
    { label: "Módulo X1", href: "#x1" },
    { label: "Integrações", href: "#integracoes" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ],
  primaryCta: "Quero migrar para a Pagah",
  secondaryCta: "Solicitar demonstração",
};

export const hero = {
  headline: "Pare de perder vendas, carrinhos e juros do parcelamento.",
  subheadline:
    "Checkout que aprova, call center que recupera, juros do parcelamento que voltam pra você. Operação pensada pra quem despacha caixa todo dia.",
  support:
    "Feita pra quem vende encapsulado, suplemento, gotas e cosmético em volume, onde 1 ponto a mais de aprovação já paga o ano.",
  bullets: [
    "Até 40% mais vendas com call center integrado",
    "Recuperação de carrinhos abandonados",
    "Upsell e cross-sell por telefone e WhatsApp",
    "Antifraude manual para maior aprovação",
    "Possibilidade de receber juros das vendas parceladas",
    "Migração gratuita e suporte especializado",
  ],
  primaryCta: "Quero aumentar meu faturamento",
  secondaryCta: "Ver como funciona",
  dashboardCards: [
    { label: "Potencial de faturamento", value: "+40%", tone: "yellow" as const },
    { label: "Upsell", value: "R$ 646 mil", tone: "neutral" as const },
    { label: "Pedidos recuperados", value: "188", tone: "neutral" as const },
    { label: "Upsell via cartão", value: "54,7%", tone: "neutral" as const },
    { label: "Pix recuperado", value: "R$ 92k", tone: "neutral" as const },
    { label: "Aprovação cartão", value: "87,3%", tone: "yellow" as const },
  ],
};

export const threePoints = {
  title: "Você pode estar perdendo dinheiro em 3 lugares.",
  cards: [
    {
      title: "Carrinhos abandonados",
      text:
        "Clientes que quase compraram, mas saíram antes de pagar. A Pagah entra com atendimento ativo para recuperar essas vendas.",
    },
    {
      title: "Upsell não realizado",
      text:
        "Cada pedido pode valer mais. Nosso time oferece kits, complementos e novas ofertas sem aumentar seu custo de tráfego.",
    },
    {
      title: "Juros ficando com a plataforma",
      text:
        "Em muitas plataformas, o cliente paga parcelado, mas os juros não voltam para você. Na Pagah, esse dinheiro pode virar mais margem para sua operação.",
    },
  ],
  cta: "Não é sobre vender mais tráfego. É sobre lucrar mais com o tráfego que você já paga.",
};

export const pillars = {
  title: "Não somos checkout. Somos o que acontece depois dele.",
  columns: [
    {
      title: "Checkout de alta conversão",
      text: "Pagamento rápido, seguro e otimizado para produtos físicos, com Pix, boleto e cartão.",
      bullets: [
        "Checkout transparente",
        "Order bump",
        "Upsell one-click",
        "Recuperação de pagamento",
        "Gestão de pedidos",
      ],
    },
    {
      title: "Call Center integrado",
      text:
        "Um time humano, treinado para recuperar pedidos, reverter cancelamentos, vender mais kits e aumentar o ticket médio.",
      bullets: [
        "Carrinho abandonado",
        "Upsell",
        "Cross-sell",
        "Reversão de estornos",
        "Atendimento humanizado",
      ],
    },
    {
      title: "Juros do parcelamento",
      text:
        "Pare de deixar 100% dos juros do cartão com a plataforma. A Pagah permite modelos em que você participa dos juros das vendas parceladas.",
      bullets: [
        "Mais margem por pedido",
        "Modelo híbrido",
        "Opção de usar adquirente próprio",
        "Possibilidade de ficar com juros do cartão",
        "Mais controle financeiro",
      ],
    },
  ],
};

export const differentiator = {
  title: "O atendimento não é suporte. É lucro.",
  subtitle:
    "Enquanto outras plataformas param no pagamento, a Pagah continua vendendo depois da venda.",
  text:
    "Nosso Call Center atua nos pontos onde a maioria das operações mais perde dinheiro: abandono, dúvida, boleto não pago, Pix esquecido, cartão recusado, estorno e oportunidade de upsell.",
  cards: [
    "Recupera pedidos abandonados",
    "Reverte cancelamentos",
    "Faz upsell com técnica",
    "Aumenta ticket médio",
    "Melhora aproveitamento do tráfego",
    "Ajuda a proteger margem e ROAS",
  ],
  quote: "Se o tráfego está caro, a saída é lucrar mais por cliente.",
};

export const interestComparison = {
  title: "Os juros do parcelamento não precisam ficar todos com a plataforma.",
  subtitle: "Na Pagah, sua operação pode ganhar também quando o cliente compra parcelado.",
  left: {
    label: "Plataformas comuns",
    bullets: [
      "Você vende",
      "O cliente parcela",
      "A plataforma fica com os juros",
      "Você recebe só a venda",
      "Menos margem para escalar",
    ],
  },
  right: {
    label: "Com a Pagah",
    bullets: [
      "Você vende",
      "O cliente parcela",
      "Você pode participar dos juros",
      "Seu lucro por pedido aumenta",
      "Sua operação ganha mais fôlego para escalar",
    ],
  },
  cta: "Quero entender como ganhar com os juros",
  note:
    "Condições variam conforme modelo de processamento, adquirente e operação.",
};

export const moduleX1 = {
  title: "Vende pelo WhatsApp? A Pagah também foi feita para o X1.",
  subtitle:
    "Você consulta o cliente, monta o kit no atendimento e manda um link só. O cliente paga sem cadastrar de novo.",
  cards: [
    {
      title: "Importe dados do cliente",
      text:
        "Consulte se o cliente já está na base e importe os dados sem precisar cadastrar tudo de novo.",
    },
    {
      title: "Monte kits personalizados",
      text:
        "Adicione vários produtos em um único carrinho e personalize a oferta conforme a conversa.",
    },
    {
      title: "Envie um único link",
      text:
        "O cliente recebe um link de pagamento completo, com todos os produtos no mesmo checkout.",
    },
    {
      title: "Mais velocidade no fechamento",
      text:
        "Menos fricção, menos cadastro manual e mais chance de concluir a venda.",
    },
  ],
  cta: "Quero vender melhor no X1",
};

export const fraud = {
  title: "Mais aprovação. Menos venda legítima desperdiçada.",
  text:
    "A gente olha pedido suspeito no olho. Antifraude automático recusa demais; análise manual recupera venda boa que outras plataformas jogam fora.",
  cards: [
    "Antifraude manual",
    "Análise de pedidos suspeitos",
    "Suporte em cartão recusado",
    "Prevenção de chargeback",
    "Ajuda para reduzir bloqueios",
    "Operação pensada para produtos físicos",
  ],
  quote:
    "Nem toda venda recusada é fraude. Às vezes, é dinheiro legítimo que outra plataforma jogou fora.",
};

export const specialization = {
  title: "Especialistas em quem vende produto físico.",
  subtitle:
    "Encapsulados, suplementos, gotas, cosméticos e operações com entrega precisam de uma plataforma que entenda logística, aprovação, recorrência, suporte e margem.",
  niches: [
    "Encapsulados",
    "Suplementos",
    "Cosméticos",
    "Gotas",
    "Produtos de recorrência",
    "Operações com tráfego pago",
    "Vendas por WhatsApp",
    "Afiliados",
  ],
  text:
    "Desde 2018 a gente roda com produtor que despacha de R$ 200 mil a R$ 10 milhões por mês.",
};

export const integrations = {
  title: "Integre suas ferramentas e migre sem dor de cabeça.",
  subtitle:
    "A Pagah se conecta com as principais ferramentas usadas por produtores, afiliados e operações de produtos físicos.",
  list: [
    "Notazz",
    "Utmify",
    "Voxuy",
    "Hand.chat",
    "ActiveCampaign",
    "SmartFunnel",
    "Bling",
    "AstronMembers",
    "RedTrack",
    "SellFlux",
    "Conexão Premium",
    "Hotzapp",
  ],
  text: "Nossa equipe ajuda na migração para você não perder vendas no processo.",
};

export const pricing = {
  title: "Uma taxa que se paga com lucro.",
  price: { percent: "4,99%", fixed: "R$ 1,99", suffix: "por transação" },
  description:
    "Com call center integrado, recuperação de carrinhos, upsell, cross-sell e possibilidade de ganho nos juros do parcelamento, a Pagah foi feita para aumentar o lucro real da operação.",
  table: [
    { method: "Boleto", deadline: "Disponível em 1 dia" },
    { method: "Pix", deadline: "Saque no mesmo dia" },
    { method: "Cartão", deadline: "Possibilidade de receber em 2 dias" },
  ],
  note: "Prazos e condições podem variar conforme análise e modelo operacional.",
};

export const social = {
  title:
    "Produtores grandes escolhem a Pagah porque lucro não vem só do checkout.",
  subtitle:
    "Quem opera grande não compra checkout. Compra resultado por pedido.",
  testimonials: [
    {
      name: "Rafael M.",
      segment: "Suplementos · 7 dígitos/mês",
      result: "+38% no faturamento mensal",
      quote:
        "Com a Pagah, conseguimos aproveitar melhor o tráfego que já pagávamos. O call center recupera pedidos e ainda aumenta o ticket com upsell.",
    },
    {
      name: "Camila B.",
      segment: "Cosméticos · operação nacional",
      result: "+27% no ticket médio",
      quote:
        "O time da Pagah não trata como suporte, trata como vendedor. Recuperaram pedidos que eu já dava como perdidos e ainda fizeram upsell na hora.",
    },
    {
      name: "Diego A.",
      segment: "Encapsulados · afiliados em escala",
      result: "+44% de aprovação em cartão",
      quote:
        "A análise antifraude manual da Pagah salvou vendas legítimas que outras plataformas recusavam. Isso é dinheiro que voltou pro caixa.",
    },
  ],
  metrics: [
    { value: "+R$ 200 mi", label: "em operações e estratégias" },
    { value: "+40%", label: "potencial de aumento nas vendas do site" },
    { value: "Operações", label: "encapsulados, gotas, cosméticos" },
    { value: "Humano", label: "atendimento focado em conversão" },
  ],
};

export const comparison = {
  title: "Pagah vs. plataforma comum",
  rows: [
    { feature: "Checkout de pagamento", common: "Sim", pagah: "Sim" },
    { feature: "Call center integrado", common: "Não", pagah: "Sim" },
    {
      feature: "Recuperação de carrinho",
      common: "Limitada",
      pagah: "Ativa por atendimento humano",
    },
    {
      feature: "Upsell e cross-sell",
      common: "Básico",
      pagah: "Com estratégia e operação humana",
    },
    {
      feature: "Juros do parcelamento",
      common: "Normalmente ficam com a plataforma",
      pagah: "Possibilidade de repasse/participação",
    },
    { feature: "Módulo X1 para WhatsApp", common: "Não", pagah: "Sim" },
    {
      feature: "Antifraude manual",
      common: "Automático e rígido",
      pagah: "Análise mais estratégica",
    },
    { feature: "Foco em produto físico", common: "Genérica", pagah: "Especializada" },
  ],
};

export const finalCta = {
  title: "Pronto para parar de deixar dinheiro na mesa?",
  subtitle:
    "Migre para a Pagah e transforme checkout, atendimento e parcelamento em mais lucro para sua operação.",
  primary: "Quero migrar para a Pagah",
  secondary: "Falar com um especialista",
  footnote: "Sem taxa de setup · Migração gratuita · Suporte prioritário",
};

export const footer = {
  tagline:
    "A Pagah potencializa suas vendas com tecnologia, atendimento e estratégias que aumentam seu lucro real todos os meses.",
  links: [
    { label: "Início", href: "#" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Call Center", href: "#call-center" },
    { label: "Juros do Parcelamento", href: "#juros" },
    { label: "Módulo X1", href: "#x1" },
    { label: "Integrações", href: "#integracoes" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Políticas de Privacidade", href: "#privacidade" },
    { label: "Termos de Uso", href: "#termos" },
  ],
  contact: {
    email: "contato@pagah.com",
    whatsapp: "+55 (51) 99192-7541",
    address: "Av. Carlos Gomes, 700, 5º andar, Boa Vista, Porto Alegre · RS",
  },
};

/** Frases-assinatura que devem aparecer em pelo menos uma seção das landings */
export const signaturePhrases = [
  "Checkout + Call Center + Juros do Parcelamento para Você",
  "Venda depois da venda",
  "O atendimento não é suporte. É lucro.",
  "Pare de deixar 100% dos juros com a plataforma.",
  "Se o tráfego está caro, a saída é lucrar mais por cliente.",
  "Aumente suas vendas sem aumentar o tráfego.",
  "A Pagah é feita para produtores de produtos físicos.",
  "Recupere carrinhos, aumente ticket e ganhe mais por pedido.",
  "Para quem vende no site, no checkout e no X1.",
];

export const versions = [
  {
    slug: "v1-premium-dark",
    name: "Premium Fintech Dark",
    letter: "A",
    mood: "Stripe-meets-Linear · dark profundo · halo amarelo · liquid glass",
  },
  {
    slug: "v2-editorial",
    name: "Editorial Bold",
    letter: "B",
    mood: "Tipografia gigante · asymmetric · mood revista · amarelo pontual",
  },
  {
    slug: "v3-living-tech",
    name: "Living Tech / Bento",
    letter: "C",
    mood: "Bento grid · perpetual motion · spring physics · dashboard respirando",
  },
  {
    slug: "v4-heritage",
    name: "Pagah Heritage Refined",
    letter: "D",
    mood: "Identidade Pagah elevada · faixa amarela · cards chumbo · gelo",
  },
] as const;

export type VersionSlug = (typeof versions)[number]["slug"];
