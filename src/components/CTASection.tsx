import { MessageCircle, ArrowRight, Zap, CheckCircle } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/244936351564?text=Olá! Quero fazer a formação da MAGAF.";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-[#0B0B0B]">

      {/* GLOW CONTROLADO */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E10600]/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E10600]/10 blur-[160px] rounded-full" />

      <div className="container max-w-[1280px] mx-auto px-6 relative z-10">

        <div className="max-w-3xl mx-auto text-center">

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E10600]/10 border border-[#E10600]/20 px-4 py-2 text-sm font-medium text-[#E10600] mb-6">
            <Zap className="h-4 w-4" />
            Vagas limitadas
          </div>

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            Se queres aprender a vender online,<br />
            <span className="text-[#E10600]">
              esta é a tua oportunidade real
            </span>
          </h2>

          {/* SUBTITLE */}
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Formação prática focada em resultados reais, clientes e crescimento no digital. Sem teoria desnecessária.
          </p>

          {/* TRUST POINTS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-sm text-white/60">

            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-[#E10600]" />
              Aulas práticas
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-[#E10600]" />
              Suporte incluído
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-[#E10600]" />
              Certificado final
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            {/* PRIMARY CTA */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#E10600] px-10 py-4 text-lg font-bold text-white shadow-lg shadow-[#E10600]/20 transition-all duration-300 hover:scale-[1.03] hover:bg-[#B80000]"
            >
              Quero garantir a minha vaga
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            {/* SECONDARY CTA */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-10 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </a>
          </div>

          {/* URGENCY */}
          <p className="mt-8 text-sm text-white/40">
            ⚠️ Vagas limitadas para garantir acompanhamento individual
          </p>

        </div>
      </div>
    </section>
  );
};

export default CTASection;