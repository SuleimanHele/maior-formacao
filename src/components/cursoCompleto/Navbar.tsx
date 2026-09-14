import { ArrowRight } from "lucide-react";
import logoMagaf from "@/assets/logo-magaf.jpg";

// URL do Paygo para pagamento
const PAYGO_LINK =
  "https://paygooo.goootrafego.com/checkout/4722a3ac-c6e3-4905-bb53-7022d5c7683e";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 md:px-8 md:py-3">
        {/* LOGO — compacto em mobile */}
        <a href="#inicio" className="flex items-center gap-2 md:gap-3">
          <img
            src={logoMagaf}
            alt="MAGAF"
            className="h-8 w-auto object-contain md:h-10"
          />
          <div className="leading-tight">
            <div className="font-display text-sm font-bold text-secondary md:text-base">
              MAGAF
            </div>
            <div className="hidden sm:block text-[8px] font-medium text-muted-foreground tracking-wider uppercase md:text-[9px]">
              Centro de Formação Digital
            </div>
          </div>
        </a>

        {/* CTA */}
        <a
          href={PAYGO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105 md:px-5 md:py-2.5 md:text-sm"
        >
          <span className="hidden sm:inline">Garantir vaga</span>
          <span className="sm:hidden">Inscrever</span>
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}