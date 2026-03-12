import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/244936351564?text=Olá! Quero saber mais sobre a formação da MAGAF.";

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
