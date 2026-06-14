import heroImg from "@/assets/hero-training.jpg";

import {
  MessageCircle,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/244936351564?text=Olá! Quero inscrever-me na próxima formação da MAGAF.";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="
        relative min-h-screen flex items-center
        pt-16 overflow-hidden bg-[#05070F]
      "
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Formação MAGAF"
          className="w-full h-full object-cover opacity-35"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#05070F] via-[#05070F]/90 to-[#05070F]/40" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* GLOWS */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#E10600]/15 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#E10600]/10 blur-[160px] rounded-full" />

      <div className="container max-w-[1280px] mx-auto px-6 relative z-10 py-20">
        
        {/* CONTAINER CENTRALIZADO */}
        <div className="max-w-4xl mx-auto text-center">

          {/* BADGE */}
          <div
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-[#E10600]/20
              bg-[#E10600]/10
              backdrop-blur-md
              px-5 py-2
              text-sm font-medium
              text-[#E10600]
              mb-6
            "
          >
            <Sparkles className="h-4 w-4" />
            Centro de Formação Digital
          </div>

          {/* TITLE */}
          <h1
            className="
              text-4xl md:text-6xl lg:text-7xl
              font-black
              text-white
              leading-[1.05]
              mb-6
              tracking-[-2px]
              max-w-4xl mx-auto
            "
          >
            Domine o digital com formações práticas e{" "}
            <span className="text-[#E10600]">
              Inteligência Artificial
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              text-white/70
              text-lg md:text-xl
              leading-relaxed
              max-w-2xl mx-auto
              mb-10
            "
          >
            Formação prática em Tráfego Pago, Marketing Digital, Importação,
            Inteligência Artificial e Criação de Websites com IA para quem quer
            gerar resultados reais no mercado digital.
          </p>

          {/* TRUST POINTS */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              "Formação prática",
              "Projectos reais",
              "Suporte aos alunos",
              "Mercado digital actual",
            ].map((item) => (
              <div
                key={item}
                className="
                  flex items-center gap-2
                  rounded-full
                  border border-white/10
                  bg-white/5
                  backdrop-blur-md
                  px-4 py-2
                  text-sm text-white/80
                "
              >
                <CheckCircle className="h-4 w-4 text-[#E10600]" />
                {item}
              </div>
            ))}
          </div>

          {/* CTA */}
          

          {/* URGENCY */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E10600] opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#E10600]" />
            </span>

            <p className="text-sm font-medium text-[#E10600]">
              Vagas limitadas para garantir acompanhamento individual
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;