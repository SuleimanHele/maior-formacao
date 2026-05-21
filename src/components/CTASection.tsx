import {
  MessageCircle,
  ArrowRight,
  Zap,
  CheckCircle,
} from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/244936351564?text=Olá! Quero fazer a formação da MAGAF.";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-background">

      {/* GLOW AMBIENTAL */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#E10600]/10 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#E10600]/10 blur-[180px] rounded-full" />

      <div className="container max-w-[1280px] mx-auto px-6 relative z-10">

        <div className="max-w-3xl mx-auto text-center">

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E10600]/20 bg-[#E10600]/10 px-4 py-2 text-sm font-medium text-[#E10600] mb-6">
            <Zap className="h-4 w-4" />
            Vagas limitadas
          </div>

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-6">
            Se queres aprender a vender online,<br />
            <span className="text-[#E10600]">
              esta é a tua oportunidade real
            </span>
          </h2>

          {/* SUBTITLE */}
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Formação prática focada em resultados reais, clientes e crescimento no digital. Sem teoria desnecessária.
          </p>

          {/* TRUST POINTS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-sm text-muted-foreground">

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
              className="inline-flex items-center justify-center gap-3 rounded-full border border-border bg-background px-10 py-4 text-lg font-bold text-foreground transition-all duration-300 hover:bg-muted"
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </a>

          </div>

          {/* URGENCY */}
          <p className="mt-8 text-sm text-muted-foreground flex items-center justify-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E10600] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E10600]"></span>
            </span>

            <span className="text-[#E10600] font-medium">
              Vagas limitadas para garantir acompanhamento individual
            </span>
          </p>

        </div>
      </div>
    </section>
  );
};

export default CTASection;