import trafegoPagoImg from "@/assets/trafegopago.png";
import paginaWebImg from "@/assets/paginaweb.png";

import {
  ArrowRight,
  Brain,
  Globe,
  MessageCircle,
  Sparkles,
  Target,
} from "lucide-react";

const trafficLink = "https://trafegopago.magaf.org/";
const aiLink = "https://cursoweb.magaf.org/";

const formations = [
  {
    id: 1,
    title: "Tráfego Pago + Importação + IA",

    description:
      "Aprenda vendas online, Meta Ads, importação e IA aplicada aos negócios.",

    image: trafegoPagoImg,

    icon: Target,

    features: [
      "Meta Ads",
      "WhatsApp Vendas",
      "Importação",
      "Estratégias de Conversão",
    ],

    link: trafficLink,

    button: "Ver Formação",
  },

  {
    id: 2,
    title: "Criação de Websites com IA",

    description:
      "Aprenda a criar websites e aplicações modernas usando Inteligência Artificial.",

    image: paginaWebImg,

    icon: Brain,

    features: [
      "Websites Modernos",
      "Automação",
      "Ferramentas IA",
      "Aplicações Inteligentes",
    ],

    link: aiLink,

    button: "Ver Formação",
  },
];

const CoursesSection = () => {
  return (
    <section
      id="formacoes"
      className="relative overflow-hidden py-24 bg-background"
    >

      {/* BACKGROUND GLOW */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 blur-[140px] rounded-full" />

      <div className="container relative z-10">

        {/* HEADER */}

        <div className="text-center max-w-3xl mx-auto mb-20">

          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
            <Sparkles className="h-4 w-4" />
            Formações Profissionais
          </div>

          <h2 className="font-heading text-4xl md:text-6xl font-black text-foreground mb-6">
            Nossas <span className="text-primary">Formações</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Formações práticas, modernas e focadas no mercado digital actual.
          </p>
        </div>

        {/* CARDS */}

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {formations.map((formation) => {
            const Icon = formation.icon;

            return (
              <a
                key={formation.id}
                href={formation.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-[28px] border border-border/50 bg-card/80 backdrop-blur-xl shadow-[0_15px_50px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_70px_rgba(255,0,0,0.12)] transition-all duration-500 hover:-translate-y-2"
              >

                {/* HOVER EFFECT */}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

                {/* IMAGE */}

                <div className="relative overflow-hidden rounded-t-[28px]">

                  {/* BADGE */}

                  <div className="absolute top-5 right-5 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md px-4 py-2 text-xs font-semibold text-white">
                    <Globe className="h-4 w-4" />
                    Formação Premium
                  </div>

                  {/* IMAGE */}

                  <img
                    src={formation.image}
                    alt={formation.title}
                    className="h-[220px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* OVERLAY */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* ICON */}

                  <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-2xl shadow-primary/30">

                    <Icon className="h-7 w-7" />
                  </div>
                </div>

                {/* CONTENT */}

                <div className="relative z-10 p-6 md:p-7">

                  <h3 className="font-heading text-2xl md:text-3xl font-black text-card-foreground leading-tight mb-4">
                    {formation.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-7">
                    {formation.description}
                  </p>

                  {/* FEATURES */}

                  <div className="flex flex-wrap gap-3 mb-8">

                    {formation.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}

                  <div className="flex items-center justify-between">

                    <button className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02]">

                      <MessageCircle
                        className="h-5 w-5"
                        fill="currentColor"
                      />

                      {formation.button}
                    </button>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background/80 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* PREMIUM BORDER */}

                <div className="absolute inset-[1px] rounded-[27px] border border-white/5 pointer-events-none" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;