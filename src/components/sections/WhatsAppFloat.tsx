import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL  } from "@/lib/constants";

export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
      {/* Efeito de onda/ripple */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
      <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-50" />
      
      {/* Botão principal */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center rounded-full bg-green-500 p-4 shadow-lg transition-all hover:scale-110 hover:bg-green-600 hover:shadow-xl animate-bounce"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-white md:h-7 md:w-7" />
        
        
      </a>
    </div>
  );
}