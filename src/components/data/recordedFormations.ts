// data/recordedFormations.ts
import { Brain, Target, Sparkles, Film } from "lucide-react";

// Tipo Formation (mesmo do formations.ts)
export type Formation = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  features: string[];
  duration: string;
  mode: string;
  schedule: string;
  day: string;
  audience: string;
  price: string;
  registration: string;
  homeTraining: string;
  fullDescription: string;
  isRecorded?: boolean;
  isAvailable?: boolean; // Nova propriedade para indicar disponibilidade
};

export const recordedFormations: Formation[] = [
  {
    id: 1,
    slug: "trafego-pago-Do Basico ao Avancado",
    title: "Formação Completa de Tráfego Pago (Para Gestor de Trafego)",
    description:
      "Aprenda a criar, otimizar e gerir campanhas publicitárias do zero ao avançado e torne-se um Gestor de Anúncios profissional, capaz de gerir contas de clientes e gerar resultados reais.",
    image: "",
    icon: Target,
    features: [
      "Instagram Ads",
      "Facebook Ads",
      "Meta Business Suite",
      "Gestor de Anúncios",  
      "WhatsApp", 
      "Assista onde quiser"
    ],
    duration: "6 meses",
    mode: "Online",
    schedule: "Disponível 24/7",
    day: "Acesso imediato",
    audience:
      "Empreendedores, jovens que querem renda extra, comerciantes, criadores de conteúdos, pessoas com pouca experiência em gestão de anuncios e equipas de vendas",
    price: "70.000 Kz",
    registration: "",
    homeTraining: "",
    fullDescription:
      "Aprenda a criar e gerir campanhas no Meta Ads para aumentar vendas e escalar o seu negócio com estratégias práticas e aplicáveis. Acesso online imediato para estudar ao seu ritmo.",
    isRecorded: true,
    isAvailable: true, // Disponível
  },
  {
    id: 5,
    slug: "edicao-video-Online",
    title: "Edição de Vídeo",
    description:
      "Aprenda a editar vídeos profissionais para redes sociais, YouTube e marketing digital. Versão gravada com acesso vitalício.",
    image: "",
    icon: Film,
    features: [
      "Edição de Vídeo",
      "CapCut",
      "Adobe Premiere",
      "Efeitos e Transições",
      "Assista onde quiser"
    ],
    duration: "6 meses",
    mode: "Online ",
    schedule: "Disponível 24/7",
    day: "Acesso imediato",
    audience:
      "Criadores de conteúdo, YouTubers, Instagrammers, empreendedores digitais, profissionais de marketing, designers, iniciantes em edição de vídeo e qualquer pessoa que queira produzir vídeos profissionais.",
    price: "30.000 Kz",
    registration: "",
    homeTraining: "Acesso imediato com certificado",
    fullDescription:
      `Aprenda a editar vídeos profissionais com as principais ferramentas do mercado.

📚 O QUE VOCÊ VAI APRENDER:

• Introdução à edição de vídeo
• CapCut: edição rápida para redes sociais
• Adobe Premiere: edição profissional
• Efeitos especiais e transições
• Correção de cor e áudio
• Legendas e animações
• Exportação para diferentes plataformas
• Dicas para YouTube, Instagram e TikTok

💎 O QUE ESTÁ INCLUÍDO:

✅ Curso online com acesso imediato
✅ Material de apoio
✅ Projetos práticos
✅ Certificado de conclusão
✅ Suporte via WhatsApp
✅ Atualizações gratuitas

🎯 PARA QUEM É ESTE CURSO:
Criadores de conteúdo, YouTubers, Instagrammers, empreendedores digitais, profissionais de marketing, designers, iniciantes em edição de vídeo e qualquer pessoa que queira produzir vídeos profissionais.`,
    isRecorded: true,
    isAvailable: true, // Disponível
  },
  {
    id: 2,
    slug: "inteligencia-artificial-Online",
    title: "Inteligência Artificial",
    description:
      "Aprenda Inteligência Artificial para o teu negócio. Versão gravada com acesso vitalício.",
    image: "",
    icon: Target,
    features: [
      "IA", 
      "Loja Online", 
      "WhatsApp Vendedor",
      "Assista onde quiser"
    ],
    duration: "Carga horária total: 6 horas",
    mode: "Online - Gravado",
    schedule: "Disponível 24/7",
    day: "Acesso imediato",
    audience:
      "Empreendedores, proprietários de lojas físicas, comerciantes, jovens que querem renda extra, profissionais de marketing e vendas, iniciantes no digital, freelancers e prestadores de serviços",
    price: "12.500 Kz",
    registration: "",
    homeTraining: "",
    fullDescription:
      "Aprenda a utilizar Inteligência Artificial para automatizar processos, criar conteúdo, aumentar a produtividade e impulsionar o seu negócio. Versão gravada com acesso vitalício.",
    isRecorded: true,
    isAvailable: false, // Indisponível
  },
  {
    id: 3,
    slug: "websites-gravado",
    title: "Criação de Websites com IA",
    description:
      "Aprenda a criar websites e aplicações modernas usando Inteligência Artificial. Versão online com acesso vitalício.",
    image: "",
    icon: Brain,
    features: [
      "Websites", 
      "Automação", 
      "Deploy",
      "Assista onde quiser"
    ],
    duration: "Carga horária total: 6 horas",
    mode: "Online - Gravado",
    schedule: "Disponível 24/7",
    day: "Acesso imediato",
    audience:
      "Iniciantes em tecnologias, empreendedores, freelancers, criadores digitais, estudantes e profissionais",
    price: "15.000 Kz",
    registration: "",
    homeTraining: "",
    fullDescription:
      "Aprenda a criar websites profissionais e aplicações modernas utilizando Inteligência Artificial. Versão gravada com acesso vitalício.",
    isRecorded: true,
    isAvailable: false, // Indisponível
  },
  {
    id: 4,
    slug: "formacao-completa-Online",
    title: "🎓 Formação Completa (Premium - Online)",
    description:
      "O pacote completo que inclui todos os nossos cursos em versão online: Tráfego Pago + Importação, Inteligência Artificial e Criação de Websites com IA.",
    image: "",
    icon: Sparkles,
    features: [
      "✅ Tráfego Pago + Importação (Online)",
      "✅ Inteligência Artificial (Online)",
      "✅ Criação de Websites com IA (Online)",
      "✅ Acesso  aos cursos",
      "✅ Suporte via WhatsApp"
    ],
    duration: "Carga horária total: 18+ horas",
    mode: "Online ",
    schedule: "Disponível 24/7",
    day: "Acesso imediato",
    audience:
      "Empreendedores que querem dominar todas as áreas do marketing digital, profissionais que buscam formação completa, empresas que desejam capacitar as suas equipas e qualquer pessoa que queira aprender marketing digital.",
    price: "30.000 Kz",
    registration: "",
    homeTraining: "Acesso vitalício com suporte exclusivo",
    fullDescription:
      `A Formação Completa é o pacote premium que reúne os 3 cursos mais requisitados do mercado digital em versão gravada.

• Tráfego Pago + Importação: Aprenda Meta Ads, importação e IA aplicada às vendas.

• Inteligência Artificial: Domine as principais ferramentas para automatizar o seu negócio.

• Criação de Websites com IA: Desenvolva websites profissionais e aplicações modernas utilizando IA.

💎 Benefícios Exclusivos da Versão Gravada:
✅ Acesso vitalício a todos os cursos
✅ Assista quando e onde quiser
✅ Material de apoio digital
✅ Certificado de conclusão
✅ Suporte via WhatsApp
✅ Atualizações gratuitas do conteúdo`,
    isRecorded: true,
    isAvailable: false, // Indisponível
  },
  
];