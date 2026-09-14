import { MapPin, Phone, Mail } from "lucide-react";
import logoMagaf from "@/assets/logo-magaf.jpg";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#05070F] py-20">
      {/* GLOW EFFECTS */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-[#E11D48]/10 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#E11D48]/10 blur-[180px]" />

      {/* TOP BORDER */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto max-w-[1280px] px-6 relative z-10">
        {/* CONTEÚDO */}
        <div className="max-w-md">
          {/* LOGO */}
          <div className="flex items-center gap-3 mb-5">
            <img
              src={logoMagaf}
              alt="MAGAF"
              className="h-10 object-contain"
            />
            <div className="leading-tight">
              <div className="font-bold text-white text-base">MAGAF</div>
              <div className="text-[9px] uppercase tracking-wider text-white/50">
                Centro de Formação Digital
              </div>
            </div>
          </div>

          {/* CONTACTOS */}
          <h4 className="text-white text-[16px] font-semibold mb-5">
            Contactos
          </h4>
          <div className="space-y-4 text-sm text-white/60">
            <a
              href="tel:+244936351564"
              className="flex items-center gap-3 hover:text-[#E11D48] transition"
            >
              <Phone className="h-4 w-4" />
              +244 936 351 564
            </a>

            <a
              href="mailto:geral@magaf.org"
              className="flex items-center gap-3 hover:text-[#E11D48] transition"
            >
              <Mail className="h-4 w-4" />
              geral@magaf.org
            </a>

            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4" />
              Viana Executive Center, 3.º andar — Luanda, Angola
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} MAGAF. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}