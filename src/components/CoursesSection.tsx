import trafegoPagoImg from "@/assets/trafegopago.png";
import paginaWebImg from "@/assets/paginaweb.png";

import {
  ArrowRight,
  Brain,
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
    features: ["Meta Ads", "WhatsApp", "Importação", "Conversão"],
    link: trafficLink,
  },
  {
    id: 2,
    title: "Criação de Websites com IA",
    description:
      "Aprenda a criar websites e aplicações modernas usando Inteligência Artificial.",
    image: paginaWebImg,
    icon: Brain,
    features: ["Websites", "Automação", "IA Tools", "Apps"],
    link: aiLink,
  },
];

const CoursesSection = () => {
  return (
    <section id="formacoes" className="relative overflow-hidden py-24 bg-white">

      {/* GLOW CONTROLADO */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 blur-[160px] rounded-full" />

      <div className="container max-w-[1280px] mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 mb-5">
            <Sparkles className="h-4 w-4" />
            Formações MAGAF
          </div>

          <h2 className="text-[34px] md:text-[52px] font-bold text-[#0B0B0B] mb-4">
            Nossas <span className="text-[#E10600]">Formações</span>
          </h2>

          <p className="text-[16px] md:text-[18px] text-[#4B4B4B]">
            Formação prática, moderna e focada em resultados reais no mercado digital.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {formations.map((formation) => {
            const Icon = formation.icon;

            return (
              <a
                key={formation.id}
                href={formation.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group relative overflow-hidden
                  bg-white
                  border border-[#E5E5E5]
                  rounded-2xl
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-red-300
                  hover:shadow-xl
                "
              >

                {/* IMAGE */}
                <div className="relative h-[200px] overflow-hidden">

                  <img
                    src={formation.image}
                    alt={formation.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/40" />

                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#E10600] text-white shadow-lg">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <h3 className="text-[20px] font-semibold text-[#0B0B0B] mb-2">
                    {formation.title}
                  </h3>

                  <p className="text-[14px] text-[#4B4B4B] mb-5 leading-relaxed">
                    {formation.description}
                  </p>

                  {/* FEATURES */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {formation.features.map((f) => (
                      <span
                        key={f}
                        className="text-xs px-3 py-1 rounded-full bg-[#F5F5F5] text-[#0B0B0B] border border-[#E5E5E5]"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">

                    <span className="text-[#E10600] font-medium text-sm">
                      Ver formação
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E10600] text-white group-hover:translate-x-1 transition">
                      <ArrowRight className="h-4 w-4" />
                    </div>

                  </div>

                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;