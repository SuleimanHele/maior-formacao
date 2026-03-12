import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/244936351564?text=Olá! Quero fazer a formação da MAGAF.";

const CTASection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
          Se queres aprender a vender na internet,<br />
          <span className="text-primary">esta formação é para ti.</span>
        </h2>
        <p className="text-secondary-foreground/70 text-lg max-w-xl mx-auto mb-10">
          Aprende estratégias que podem ajudar a transformar o teu conhecimento digital em clientes e vendas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-10 py-4 text-lg font-bold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Quero fazer a formação
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-10 py-4 text-lg font-bold text-whatsapp-foreground hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="h-5 w-5" fill="currentColor" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
