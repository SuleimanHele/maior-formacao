import trafegoPagoImg from "@/assets/cursotrafego.jpeg";
import paginaWebImg from "@/assets/cursoweb.jpeg";
import vendorImg from "@/assets/vendor.jpeg";

import { Brain, Target, Sparkles } from "lucide-react";

// Tipo Formation
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
  homeTraining: string; // Novo campo
  fullDescription: string;
};

export const formations: Formation[] = [
  {
    id: 1,
    slug: "trafego-pago",
    title: "Tráfego Pago + Importação",
    description:
      "Aprenda vendas online, Meta Ads, importação e IA aplicada aos negócios.",
    image: trafegoPagoImg,
    icon: Target,
    features: ["Meta Ads", "WhatsApp", "Importação"],
    duration: "1 dia",
    mode: "Presencial",
    schedule: "10H às 15H",
    day: "Sextas e Sábados",
    audience:
      "Empreendedores, jovens que querem renda extra, comerciantes e importadores, criadores de conteúdos, pessoas sem experiência e equipas de vendas",
    price: "20.000 Kz",
    registration: "2.000 Kz",
    homeTraining: "+10.000 Kz",
    fullDescription:
      "Aprenda a criar campanhas no Meta Ads, importar produtos e utilizar Inteligência Artificial para aumentar as vendas e escalar o seu negócio.",
  },
  {
    id: 2,
    slug: "inteligencia-artificial",
    title: "Inteligência Artificial",
    description:
      "Aprenda Inteligência Artificial para o teu negócio.",
    image: vendorImg,
    icon: Target,
    features: ["IA", "Loja Online", "WhatsApp Vendedor"],
    duration: "1 dia",
    mode: "Presencial",
    schedule: "10H às 15H",
    day: "Data a anunciar",
    audience:
      "Empreendedores, proprietários de lojas físicas, comerciantes, jovens que querem renda extra, profissionais de marketing e vendas, iniciantes no digital, freelancers e prestadores de serviços",
    price: "25.000 Kz",
    registration: "2.500 Kz",
    homeTraining: "+10.000 Kz",
    fullDescription:
      "Aprenda a utilizar Inteligência Artificial para automatizar processos, criar conteúdo, aumentar a produtividade e impulsionar o seu negócio.",
  },
  {
    id: 3,
    slug: "websites",
    title: "Criação de Websites com IA",
    description:
      "Aprenda a criar websites e aplicações modernas usando Inteligência Artificial.",
    image: paginaWebImg,
    icon: Brain,
    features: ["Websites", "Automação", "Deploy"],
    duration: "1 dia",
    mode: "Presencial",
    schedule: "10H às 15H",
    day: "Domingos",
    audience:
      "Iniciantes em tecnologias, empreendedores, freelancers, criadores digitais, estudantes e profissionais",
    price: "30.000 Kz",
    registration: "3.000 Kz",
    homeTraining: "+10.000 Kz",
    fullDescription:
      "Aprenda a criar websites profissionais e aplicações modernas utilizando Inteligência Artificial.",
  },
  {
    id: 4,
    slug: "formacao-completa",
    title: "🎓 Formação Completa (Premium)",
    description:
      "O pacote completo que inclui todos os nossos cursos: Tráfego Pago + Importação, Inteligência Artificial e Criação de Websites com IA.",
    image: trafegoPagoImg,
    icon: Sparkles,
    features: [
      "✅ Tráfego Pago + Importação",
      "✅ Inteligência Artificial",
      "✅ Criação de Websites com IA",
    ],
    duration: "3 dias",
    mode: "Presencial",
    schedule: "10H às 15H",
    day: "Sextas, Sábados e Domingos",
    audience:
      "Empreendedores que querem dominar todas as áreas do marketing digital, profissionais que buscam formação completa, empresas que desejam capacitar as suas equipas e qualquer pessoa que queira aprender marketing digital.",
    price: "60.000 Kz",
    registration: "",
    homeTraining: "+10.000 Kz",
    fullDescription:
      `A Formação Completa é o pacote premium que reúne os 3 cursos mais requisitados do mercado digital.

• Tráfego Pago + Importação: Aprenda Meta Ads, importação e IA aplicada às vendas.

• Inteligência Artificial: Domine as principais ferramentas para automatizar o seu negócio.

• Criação de Websites com IA: Desenvolva websites profissionais e aplicações modernas utilizando IA.

💎 Benefícios Exclusivos:
✅ Certificado
✅ Acesso aos conteúdos
✅ Acompanhamento pós-formação.`,
  },
];