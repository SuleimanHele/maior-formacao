// data/consultingData.ts
import { Target, TrendingUp, Award, Clock, MessageSquare, BarChart, Users, Rocket } from "lucide-react";

export type ConsultingService = {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  price: string;
  duration: string;
  availability: string;
  audience: string;
  fullDescription: string;
  isPremium?: boolean;
  badge?: string;
};

export const consultingServices: ConsultingService[] = [
  {
    id: 1,
    title: "Consultoria e Acompanhamento de Marketing e Gestão de Tráfego",
    description: "Acompanhamento estratégico para empresas e empreendedores que querem crescer no digital.",
    icon: Target,
    features: [
      "Análise completa do negócio",
      "Estratégia de marketing personalizada",
      "Acompanhamento da gestão de tráfego pago",
      "Otimização de campanhas",
      "Orientação para geração de clientes e vendas",
      "Suporte e acompanhamento contínuo"
    ],
    price: "Apartir de 100.000 Kz",
    duration: "1 mês",
    availability: "Online",
    audience: "Empresas, empreendedores, gestores de marketing e qualquer pessoa que queira crescer de forma estratégica no digital.",
    fullDescription: `
📊 CONSULTORIA E ACOMPANHAMENTO DE MARKETING E GESTÃO DE TRÁFEGO

A nossa consultoria foi criada para empresas e empreendedores que pretendem crescer de forma estratégica, aumentar as vendas e obter melhores resultados no digital.

Durante um mês, acompanhamos o seu negócio de perto, analisamos as campanhas, definimos estratégias, corrigimos falhas e orientamos todas as ações de marketing para maximizar o retorno do seu investimento.

🎯 O QUE ESTÁ INCLUÍDO:

• Análise completa do negócio
• Estratégia de marketing personalizada
• Acompanhamento da gestão de tráfego pago
• Otimização de campanhas
• Orientação para geração de mais clientes e vendas
• Suporte e acompanhamento contínuo durante 30 dias

💎 BENEFÍCIOS DO ACOMPANHAMENTO:

✅ Crescimento estratégico do seu negócio
✅ Aumento das vendas e resultados
✅ Maximização do retorno do investimento
✅ Correção de falhas e otimização contínua
✅ Decisões baseadas em dados e análise

🎯 PARA QUEM É ESTE SERVIÇO:

Empresas que querem crescer de forma estratégica, empreendedores que buscam orientação especializada, gestores de marketing que precisam de suporte e qualquer pessoa que queira maximizar seus resultados no digital.

📞 AGENDAMENTO:

Agende a sua consultoria e comece a tomar decisões estratégicas para fazer a sua empresa crescer.

📌 Investimento:
• Marcação da consultoria: 10.000 Kz
• Consultoria e acompanhamento durante 1 mês: 100.000 Kz
    `
  }
];