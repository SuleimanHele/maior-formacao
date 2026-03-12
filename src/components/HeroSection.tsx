import heroImg from "@/assets/hero-training.jpg";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/244936351564?text=Olá! Quero inscrever-me na próxima formação da MAGAF.";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Formação MAGAF" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            Centro de Formação e Serviços Digitais
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6">
            Aprende a vender na internet com estratégias que{" "}
            <span className="text-primary">funcionam.</span>
          </h1>
          <p className="text-lg text-secondary-foreground/70 mb-10 max-w-lg">
            Formação prática em tráfego pago, marketing digital e vendas online.
            Na MAGAF vais aprender estratégias usadas no mercado para atrair clientes, criar anúncios e gerar vendas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#turmas"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Inscrever-se na próxima formação
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-8 py-3.5 text-base font-semibold text-whatsapp-foreground hover:opacity-90 transition-opacity"
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
