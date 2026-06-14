import {
  MessageCircle,
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

import logoMagaf from "@/assets/logo-magaf.jpg";

const WHATSAPP_LINK =
  "https://wa.me/244936351564?text=Olá! Quero saber mais sobre a formação da MAGAF.";

const FooterSection = () => {
  return (
    <footer className="relative overflow-hidden bg-[#05070F] py-20">

      {/* GLOW */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-[#E11D48]/10 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#E11D48]/10 blur-[180px]" />

      {/* TOP BORDER */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto max-w-[1280px] px-6 relative z-10">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">

          {/* COLUNA 1 - BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logoMagaf}
                alt="MAGAF"
                className="h-10 object-contain"
              />

              <div className="leading-tight">
                <div className="font-bold text-white text-base">
                  MAGAF
                </div>

                <div className="text-[9px] uppercase tracking-wider text-white/50">
                  Centro de Formação Digital
                </div>
              </div>
            </div>

            <p className="text-white/60 text-[14px] leading-relaxed">
              Centro de Formação Digital focado em transformar conhecimento em resultados reais no mercado digital moderno.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 text-[#E11D48] text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Formação prática e orientada a resultados
            </div>
          </div>

          {/* COLUNA 2 - CONTACTOS */}
          <div>
            <h4 className="text-white text-[16px] font-semibold mb-5">
              Contactos
            </h4>

            <div className="space-y-4 text-sm text-white/60">

              <a
                href={WHATSAPP_LINK}
                className="flex items-center gap-3 hover:text-[#E11D48] transition"
              >
                <Phone className="h-4 w-4" />
                +244 936 351 564
              </a>

              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                Luanda – Angola
              </div>

            </div>
          </div>

          {/* COLUNA 3 - REDES */}
          <div>
            <h4 className="text-white text-[16px] font-semibold mb-5">
              Redes sociais
            </h4>

            <div className="flex flex-col gap-3 text-sm">

              <a
                href="https://www.instagram.com/magaf_formacao_digital?igsh=MXRuZ3E5ZDRuZTEycA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-[#E11D48] transition"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>

              <a
                href="https://www.facebook.com/share/1BCTMWJ5Rt/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-[#E11D48] transition"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-[#E11D48] hover:opacity-80 transition"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>

            </div>
          </div>

        </div>

        {/* CTA STRIP (mantido leve) */}
        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} MAGAF. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;