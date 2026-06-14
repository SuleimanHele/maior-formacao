import trafegoPagoImg from "@/assets/cursotrafego.jpeg";
import paginaWebImg from "@/assets/cursoweb.jpeg";
import vendorImg from "@/assets/vendor.jpeg";

import { Brain, Target } from "lucide-react";

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
    day: "Sábados",
    audience:
      "Empreendedores, jovens que querem renda extra, comerciantes e importadores, criadores de conteúdos, pessoas sem experiência e equipas de vendas",
    price: "20.000 Kz",
    registration: "2.000 Kz",
    fullDescription:
      "Aprenda a criar campanhas no Meta Ads, importar produtos e utilizar Inteligência Artificial para aumentar as vendas e escalar o seu negócio.",
  },

  {
    id: 2,
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
    price: "50.000 Kz",
    registration: "5.000 Kz",
    fullDescription:
      "Aprenda a criar websites profissionais e aplicações modernas utilizando Inteligência Artificial.",
  },

  {
    id: 3,
    slug: "agenteia",
    title: "IA + Loja Online + WhatsApp Vendedor",
    description:
      "Aprenda Inteligência Artificial, crie a sua loja online e automatize as vendas pelo WhatsApp.",
    image: vendorImg,
    icon: Target,
    features: ["IA", "Loja Online", "WhatsApp Vendedor"],
    duration: "1 dia",
    mode: "Presencial",
    schedule: "10H às 15H",
    day: "Sextas-feiras",
    audience:
      "Empreendedores, proprietários de lojas físicas, comerciantes, jovens que querem renda extra, profissionais de marketing e vendas, iniciantes no digital, freelancers e prestadores de serviços",
    price: "30.000 Kz",
    registration: "2.000 Kz",
    fullDescription:
      "Aprenda a criar uma loja online profissional e automatizar vendas usando IA.",
  },
];