// data/recordedFormations.ts
// REMOVA estas importações que não são usadas
// import trafegoPagoImg from "@/assets/cursotrafego.jpeg";
// import paginaWebImg from "@/assets/cursoweb.jpeg";
// import vendorImg from "@/assets/vendor.jpeg";
// import edicaoVideoImg from "@/assets/edicao-video.jpeg";

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
};

export const recordedFormations: Formation[] = [
  {
    id: 1,
    slug: "trafego-pago-gravado",
    title: "Tráfego Pago (Gravado)",
    description:
      "Aprenda Marketing Digital com aulas gravadas, conteúdos práticos e estratégias utilizadas no mercado actual.",
    image: "", // Deixar vazio
    icon: Target,
    features: [
      "Meta Ads", 
      "WhatsApp", 
      "Importação",
      "Acesso vitalício",
      "Assista quando quiser"
    ],
    duration: "Carga horária total: 6 horas",
    mode: "Online - Gravado",
    schedule: "Disponível 24/7",
    day: "Acesso imediato",
    audience:
      "Empreendedores, jovens que querem renda extra, comerciantes e importadores, criadores de conteúdos, pessoas sem experiência e equipas de vendas",
    price: "10.000 Kz",
    registration: "",
    homeTraining: "",
    fullDescription:
      "Aprenda a criar campanhas no Meta Ads, importar produtos e utilizar Inteligência Artificial para aumentar as vendas e escalar o seu negócio. Versão gravada com acesso vitalício, permitindo que você assista no seu próprio ritmo.",
    isRecorded: true,
  },
  {
    id: 2,
    slug: "inteligencia-artificial-gravado",
    title: "Inteligência Artificial (Gravado)",
    description:
      "Aprenda Inteligência Artificial para o teu negócio. Versão gravada com acesso vitalício.",
    image: "", // Deixar vazio
    icon: Target,
    features: [
      "IA", 
      "Loja Online", 
      "WhatsApp Vendedor",
      "Acesso vitalício",
      "Assista quando quiser"
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
  },
  {
    id: 3,
    slug: "websites-gravado",
    title: "Criação de Websites com IA (Gravado)",
    description:
      "Aprenda a criar websites e aplicações modernas usando Inteligência Artificial. Versão gravada com acesso vitalício.",
    image: "", // Deixar vazio
    icon: Brain,
    features: [
      "Websites", 
      "Automação", 
      "Deploy",
      "Acesso vitalício",
      "Assista quando quiser"
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
  },
  {
    id: 4,
    slug: "formacao-completa-gravado",
    title: "🎓 Formação Completa (Premium - Gravado)",
    description:
      "O pacote completo que inclui todos os nossos cursos em versão gravada: Tráfego Pago + Importação, Inteligência Artificial e Criação de Websites com IA.",
    image: "", // Deixar vazio
    icon: Sparkles,
    features: [
      "✅ Tráfego Pago + Importação (Gravado)",
      "✅ Inteligência Artificial (Gravado)",
      "✅ Criação de Websites com IA (Gravado)",
      "✅ Acesso vitalício a todos os cursos",
      "✅ Suporte via WhatsApp"
    ],
    duration: "Carga horária total: 18+ horas",
    mode: "Online - Gravado",
    schedule: "Disponível 24/7",
    day: "Acesso imediato",
    audience:
      "Empreendedores que querem dominar todas as áreas do marketing digital, profissionais que buscam formação completa, empresas que desejam capacitar as suas equipas e qualquer pessoa que queira aprender marketing digital.",
    price: "30.000 Kz",
    registration: "",
    homeTraining: "Acesso vitalício com suporte exclusivo",
    fullDescription:
      `A Formação Completa é o pacote premium que reúne os 3 cursos mais requisitados do mercado digital em versão gravada.

• Tráfego Pago + Importação (Gravado): Aprenda Meta Ads, importação e IA aplicada às vendas.

• Inteligência Artificial (Gravado): Domine as principais ferramentas para automatizar o seu negócio.

• Criação de Websites com IA (Gravado): Desenvolva websites profissionais e aplicações modernas utilizando IA.

💎 Benefícios Exclusivos da Versão Gravada:
✅ Acesso vitalício a todos os cursos
✅ Assista quando e onde quiser
✅ Material de apoio digital
✅ Certificado de conclusão
✅ Suporte via WhatsApp
✅ Atualizações gratuitas do conteúdo`,
    isRecorded: true,
  },
  // NOVA FORMAÇÃO: EDIÇÃO DE VÍDEO
  {
    id: 5,
    slug: "edicao-video-gravado",
    title: "Edição de Vídeo (Gravado)",
    description:
      "Aprenda a editar vídeos profissionais para redes sociais, YouTube e marketing digital. Versão gravada com acesso vitalício.",
    image: "", // Deixar vazio
    icon: Film,
    features: [
      "Edição de Vídeo",
      "CapCut",
      "Adobe Premiere",
      "Efeitos e Transições",
      "Acesso vitalício",
      "Assista quando quiser"
    ],
    duration: "Carga horária total: 8 horas",
    mode: "Online - Gravado",
    schedule: "Disponível 24/7",
    day: "Acesso imediato",
    audience:
      "Criadores de conteúdo, YouTubers, Instagrammers, empreendedores digitais, profissionais de marketing, designers, iniciantes em edição de vídeo e qualquer pessoa que queira produzir vídeos profissionais.",
    price: "10.000 Kz",
    registration: "",
    homeTraining: "Acesso vitalício com certificado",
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

✅ Curso gravado com acesso vitalício
✅ Material de apoio
✅ Projetos práticos
✅ Certificado de conclusão
✅ Suporte via WhatsApp
✅ Atualizações gratuitas

🎯 PARA QUEM É ESTE CURSO:
Criadores de conteúdo, YouTubers, Instagrammers, empreendedores digitais, profissionais de marketing, designers, iniciantes em edição de vídeo e qualquer pessoa que queira produzir vídeos profissionais.`,
    isRecorded: true,
  },
];