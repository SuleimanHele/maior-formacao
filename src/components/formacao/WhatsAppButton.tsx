import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/244936351564?text=Olá%20equipa%20MAGAF!%20Tenho%20interesse%20na%20formação%20e%20gostaria%20de%20obter%20mais%20informações.%20Podem%20ajudar-me%3F";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-lg animate-pulse-glow transition-transform hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-whatsapp-foreground" fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
