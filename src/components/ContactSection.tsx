import { MessageCircle, Instagram, Facebook, MapPin } from "lucide-react";
import logoMagaf from "@/assets/logo-magaf.jpg";

const WHATSAPP_LINK = "https://wa.me/244936351564?text=Olá! Quero saber mais sobre a formação da MAGAF.";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-surface-dark">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <img src={logoMagaf} alt="MAGAF" className="h-12 object-contain mb-6 brightness-0 invert" />
            <p className="text-surface-dark-foreground/70 mb-8 max-w-sm">
              Centro de Formação e Serviços Digitais. Transformando conhecimento em resultados.
            </p>
            <div className="space-y-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-surface-dark-foreground/80 hover:text-primary transition-colors">
                <MessageCircle className="h-5 w-5" />
                <span>936 351 564</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-surface-dark-foreground/80 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span>Gaspar Manuel</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-surface-dark-foreground/80 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span>MAGAF</span>
              </a>
              <div className="flex items-center gap-3 text-surface-dark-foreground/80">
                <MapPin className="h-5 w-5" />
                <span>Luanda – Angola</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end justify-between h-full">
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

        <div className="border-t border-surface-dark-foreground/10 mt-12 pt-8 text-center text-surface-dark-foreground/40 text-sm">
          © {new Date().getFullYear()} MAGAF. Todos os direitos reservados.
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
