import heroImg from "@/assets/hero-training.jpg";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/244936351564?text=Olá! Quero inscrever-me na próxima formação da MAGAF.";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#0B0B0B]"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Formação MAGAF"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent" />
      </div>

      {/* GLOW */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#E10600]/10 blur-[140px] rounded-full" />

      <div className="container max-w-[1280px] mx-auto px-6 relative z-10 py-20">

        <div className="max-w-2xl">

          {/* BADGE */}
          <span className="inline-block rounded-full border border-[#E10600]/20 bg-[#E10600]/10 px-4 py-1.5 text-sm font-medium text-[#E10600] mb-6">
            Centro de Formação Digital
          </span>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Aprende a vender na internet com estratégias que{" "}
            <span className="text-[#E10600]">funcionam de verdade.</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-white/60 text-lg mb-10 max-w-lg leading-relaxed">
            Formação prática em tráfego pago, marketing digital e vendas online.
            Aprende a criar campanhas, atrair clientes e gerar vendas reais no digital.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">

            {/* PRIMARY CTA */}
            <a
              href="#turmas"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E10600] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#E10600]/20 hover:bg-[#B80000] transition-all hover:scale-[1.02]"
            >
              Inscrever-se agora
              <ArrowRight className="h-4 w-4" />
            </a>

            {/* SECONDARY CTA */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition"
            >
              <MessageCircle className="h-5 w-5" fill="currentColor" />
              Falar no WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;