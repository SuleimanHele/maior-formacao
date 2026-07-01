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
            MAGAF
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
            Centro de Formação{" "}
            <span className="text-[#E10600]">
              Digital
            </span>
          </h1>

          {/* SUBTITLE */}
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Formação prática com{" "}
            <strong className="text-white">acompanhamento personalizado</strong>
          </p>

          {/* 4 COURSES HIGHLIGHT */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 mb-10 border border-white/10">
            <p className="text-[#E10600] font-semibold mb-4 text-sm uppercase tracking-wide">
              🎓 Escolha sua formação:
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-white/80 font-medium">
              <span className="flex items-center gap-2">
                Tráfego Pago + Importação
              </span>
              
              <span className="text-[#E10600]/30">•</span>
              <span className="flex items-center gap-2">
                Inteligência Artificial
              </span>
              <span className="text-[#E10600]/30">•</span>
              <span className="flex items-center gap-2">
                Websites com IA
              </span>
            </div>
            <p className="text-xs text-white/40 mt-4">
              ⚡ Escolha 1, 2, 3 ou todos os cursos — você monta seu pacote!
            </p>
          </div>

          {/* TRUST POINTS */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              "Cursos 100% práticos",
              "Projetos reais",
              "Suporte aos alunos",
              "Certificado incluso",
              "Do zero ao avançado",
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

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://paygooo.goootrafego.com/checkout/8b7954a6-0f67-4977-bdaf-74fe343568c6"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center gap-2
                bg-[#E10600] hover:bg-red-700
                text-white font-bold
                px-8 py-4 rounded-xl
                transition-all duration-300
                text-lg
                shadow-lg shadow-red-900/20
              "
            >
              <MessageCircle className="h-5 w-5" />
              Quero me Inscrever
            </a>

            <a
              href="#formacoes"
              className="
                inline-flex items-center justify-center gap-2
                border-2 border-white/20
                hover:border-[#E10600] hover:bg-[#E10600]/10
                text-white font-bold
                px-8 py-4 rounded-xl
                transition-all duration-300
                text-lg
              "
            >
              Ver Todos os Cursos
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* URGENCY */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E10600] opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#E10600]" />
            </span>
            <p className="text-sm font-medium text-[#E10600]">
              Vagas limitadas por turma — garantir acompanhamento individual
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;