import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../data/content";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Fazer inscrição pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_30px_color-mix(in_oklab,var(--primary)_45%,transparent)] transition-transform hover:scale-105"
    >
      <MessageCircle size={28} fill="currentColor" />
    </a>
  );
}