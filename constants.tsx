import React from 'react';
import { ServiceItem, DifferentialItem, FAQItem, TestimonialItem } from './types';

// ==========================================
// CONFIGURAÇÃO DE IMAGENS E LINKS
// ==========================================
// Configurado para ler as imagens da pasta /assets na raiz do projeto.

export const IMAGES = {
  // Logotipo Principal (Retangular)
  LOGO: "/assets/mjl-logotipo-advocacia-porto-alegre.png",
  
  // Avatar / Favicon
  AVATAR: "/assets/Avatar MJL Advocacia Causa Imobiliaria.webp",
  
  // Foto do advogado (Germano) para a seção Sobre (Card do Fundador)
  LAWYER_PHOTO: "/assets/germano.webp",
  
  // Foto secundária para a seção Sobre
  OFFICE_PHOTO: "/assets/mjladv.webp",
  
  // Fundo da seção Hero (Topo) - Imagem de prédios/arquitetura moderna
  HERO_BG: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
};

// IMPORTANTE: Links
export const WHATSAPP_LINK = "#"; // Agora aciona o Typebot via onClick
export const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/eFZnrr1D12WM2jCMA";

// URL do Iframe do Google Maps
export const MAP_IFRAME_SRC = "https://maps.google.com/maps?width=100%25&height=600&hl=pt-BR&q=Rua%20Professor%20Langendonck,%20n%C2%BA%2037,%20conjunto%20n%C2%BA%20503,%20bairro%20Petr%C3%B3polis,%20Porto%20Alegre/RS&t=&z=15&ie=UTF8&iwloc=B&output=embed";

export const CONTACT_INFO = {
  address: "", // Removido para focar no digital
  phone: "(51) 3062-7991",
  mobile: "(51) 98181-7991",
  email: "contato@mjl.adv.br",
  website: "www.mjl.adv.br"
};


// ==========================================
// ÍCONES PERSONALIZADOS PARA CAUSA IMOBILIÁRIA
// ==========================================

// Key Icon (Entregas, Chaves, Posse)
export const KeyIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m21 2-2 2m-7.6 7.6a6.5 6.5 0 1 1 5.3 5.3L3 21l-3-3 4-4 1.5-2.5L8 10Z"/>
  </svg>
);

// Hard Hat / Construction (Atraso, Vícios, Obra)
export const HardHatIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 20h20"/><path d="M10 16v4"/><path d="M14 16v4"/><path d="M6 20h12a10 10 0 0 0-12 0Z"/><path d="M12 3a7 7 0 0 1 7 7v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2a7 7 0 0 1 7-7Z"/>
  </svg>
);

// Contract / Document (Distrato, Contratos)
export const ContractIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>
  </svg>
);

// Percentage House (Juros, Financiamento)
export const PercentHomeIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 21V9"/><path d="M15 9v12"/><path d="M9 15l6-6"/><circle cx="9" cy="9" r="2"/><circle cx="15" cy="15" r="2"/>
  </svg>
);

// Alert Icon (Vícios, Problemas)
export const AlertHomeIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>
  </svg>
);

// Shield (Segurança)
export const ShieldCheckIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
);

// Money/Refund (Reembolso)
export const RefundIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

// Clock (Atraso)
export const ClockIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

export const MapPinIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

export const PhoneIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

export const MailIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

export const StarIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);

export const GoogleIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" {...props}><path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/></svg>
);

// ==========================================
// DATA - COPY FOCADA EM CAUSA IMOBILIÁRIA
// ==========================================

export const SERVICES: ServiceItem[] = [
  {
    title: "Atraso na Entrega de Obra",
    icon: HardHatIcon,
    items: [
      "Indenização por danos morais",
      "Multa por atraso a favor do comprador",
      "Congelamento do saldo devedor",
      "Reembolso de aluguéis pagos"
    ]
  },
  {
    title: "Distrato Imobiliário",
    icon: ContractIcon,
    items: [
      "Rescisão do contrato de compra e venda",
      "Devolução de até 100% dos valores",
      "Redução de multas abusivas",
      "Correção monetária dos valores pagos"
    ]
  },
  {
    title: "Vícios Construtivos",
    icon: AlertHomeIcon,
    items: [
      "Rachaduras, infiltrações e defeitos",
      "Obrigação de fazer (reparo)",
      "Indenização por danos materiais",
      "Responsabilização da construtora"
    ]
  },
  {
    title: "Juros de Obra (Taxa de Evolução)",
    icon: PercentHomeIcon,
    items: [
      "Suspensão da cobrança após o prazo",
      "Devolução em dobro do valor pago",
      "Revisão de cláusulas abusivas",
      "Regularização junto ao banco"
    ]
  },
  {
    title: "Compra e Venda Segura",
    icon: KeyIcon,
    items: [
      "Análise de risco documental (Due Diligence)",
      "Elaboração de contratos blindados",
      "Assessoria na escritura e registro",
      "Prevenção de fraudes"
    ]
  },
  {
    title: "Regularização de Imóveis",
    icon: ShieldCheckIcon,
    items: [
      "Usucapião (Judicial e Extrajudicial)",
      "Adjudicação Compulsória",
      "Retificação de área",
      "Inventários com bens imóveis"
    ]
  }
];

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    title: "Especialidade Exclusiva",
    description: "Não somos generalistas. Focamos 100% em Direito Imobiliário para garantir a melhor estratégia técnica.",
    icon: StarIcon
  },
  {
    title: "Recuperação Financeira",
    description: "Nosso foco é colocar dinheiro de volta no seu bolso, seja por indenização ou devolução de valores.",
    icon: RefundIcon
  },
  {
    title: "Análise Ágil",
    description: "Identificamos cláusulas abusivas no seu contrato em até 48h para agir rapidamente contra a construtora.",
    icon: ClockIcon
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Rafael Mendes",
    rating: 5,
    date: "há 1 mês",
    text: "A construtora atrasou meu apartamento em 2 anos. A MJL conseguiu não só o congelamento do saldo devedor, como uma indenização excelente. Recomendo!"
  },
  {
    name: "Camila Becker",
    rating: 5,
    date: "há 3 meses",
    text: "Fiz o distrato do meu imóvel e a construtora queria reter 50% do que paguei. Com a ajuda do Dr. Germano, recuperei quase tudo com correção. Profissionais incríveis."
  },
  {
    name: "João Pedro Costa",
    rating: 5,
    date: "há 6 meses",
    text: "Meu imóvel novo tem rachaduras e infiltrações. Eles notificaram a construtora que foi obrigada a arrumar tudo em 15 dias sob pena de multa. Resolveram meu pesadelo."
  },
  {
    name: "Fernanda Oliveira",
    rating: 5,
    date: "há 2 semanas",
    text: "Excelente atendimento! Estava desesperada com os juros abusivos da obra e o escritório conseguiu resolver tudo judicialmente. Muito grata!"
  },
  {
    name: "Roberto Almeida",
    rating: 5,
    date: "há 4 meses",
    text: "Profissionais extremamente competentes. Tive um problema sério de atraso na entrega das chaves e fui muito bem assessorado do início ao fim."
  },
  {
    name: "Luciana Martins",
    rating: 5,
    date: "há 1 ano",
    text: "Recomendo de olhos fechados. O Dr. Germano é especialista no assunto e me passou muita segurança na hora de assinar o distrato. Recuperei meu dinheiro."
  },
  {
    name: "Gustavo Henrique",
    rating: 5,
    date: "há 5 meses",
    text: "Contratei para analisar meu contrato de compra e venda. Me salvaram de várias cláusulas que seriam um problema no futuro. Investimento que valeu a pena."
  },
  {
    name: "Patrícia S.",
    rating: 5,
    date: "há 3 semanas",
    text: "Atendimento rápido e eficiente. Resolveram minha questão de vícios construtivos no apartamento novo sem eu precisar me estressar com a construtora."
  },
  {
    name: "Eduardo Viana",
    rating: 5,
    date: "há 8 meses",
    text: "Muito satisfeito com o resultado. A construtora não queria devolver os valores pagos e a MJL Advocacia conseguiu reverter a situação na justiça."
  },
  {
    name: "Ricardo Gomes",
    rating: 5,
    date: "há 2 meses",
    text: "Equipe séria e dedicada. Me explicaram todo o processo de forma clara e objetiva. Conseguimos a indenização esperada pelo atraso da obra."
  },
  {
    name: "Marina Costa",
    rating: 5,
    date: "há 1 mês",
    text: "Graças a eles consegui sair de um financiamento que virou uma bola de neve. O distrato foi feito de forma justa e recebi o que era meu de direito."
  },
  // Novos Depoimentos
  {
    name: "Carlos Alberto",
    rating: 5,
    date: "há 1 semana",
    text: "Fui muito bem atendido. Conseguiram reverter uma cobrança indevida de juros antes da entrega das chaves. Recomendo demais!"
  },
  {
    name: "Ana Paula Rocha",
    rating: 5,
    date: "há 2 semanas",
    text: "Achei que perderia todo meu investimento ao desistir da compra. A MJL conseguiu recuperar 90% do valor pago. Gratidão eterna!"
  },
  {
    name: "Felipe Nogueira",
    rating: 5,
    date: "há 3 meses",
    text: "Profissionais de alto nível. Entraram com ação por atraso de obra e ganhei danos morais e materiais. A justiça foi feita."
  },
  {
    name: "Juliana Santos",
    rating: 5,
    date: "há 1 mês",
    text: "Meu apartamento tinha problemas estruturais graves. O Dr. Germano agiu rápido e a construtora teve que fazer os reparos urgentes."
  },
  {
    name: "Marcos Vinícius",
    rating: 5,
    date: "há 5 dias",
    text: "Excelente assessoria jurídica. Clareza nas informações e agilidade no processo de distrato. Me senti seguro o tempo todo."
  },
  {
    name: "Renata Lima",
    rating: 5,
    date: "há 4 meses",
    text: "Contratei para verificar meu contrato e evitaram que eu entrasse numa fria. O olhar técnico deles fez toda diferença."
  },
  {
    name: "Bruno Silva",
    rating: 5,
    date: "há 2 meses",
    text: "Equipe atenciosa e prestativa. Resolveram meu problema com a taxa de evolução de obra que estava sendo cobrada errada."
  },
  {
    name: "Sônia Pereira",
    rating: 5,
    date: "há 6 meses",
    text: "Graças à MJL consegui a indenização pelo atraso na entrega do meu sonho. Recomendo para todos que estão passando por isso."
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "A obra atrasou. O que eu ganho com isso?",
    answer: "Se o atraso superar 180 dias, você pode ter direito a multa mensal (0,5% a 1% do valor do imóvel), danos morais e devolução da taxa de evolução de obra."
  },
  {
    question: "Quero desistir da compra (Distrato). Quanto recebo?",
    answer: "Depende da data da compra. Para contratos antigos, a devolução gira em torno de 90%. Para a Lei do Distrato (novos), a multa é de até 25% ou 50%, mas analisamos cláusulas abusivas para aumentar sua restituição."
  },
  {
    question: "A construtora pode cobrar Juros de Obra com atraso?",
    answer: "Não! Se a construtora está em atraso na entrega das chaves, é ilegal repassar a taxa de evolução de obra (Juros de Obra) para o comprador."
  },
  {
    question: "Vocês atendem online para todo Brasil?",
    answer: "Sim. O processo hoje é 100% digital. Atendemos clientes de qualquer estado com a mesma eficiência, sem necessidade de deslocamento."
  }
];