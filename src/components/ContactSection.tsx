import {
  MessageCircle,
  Instagram,
  Facebook,
  MapPin,
  Phone,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import logoMagaf from "@/assets/logo-magaf.jpg";

const WHATSAPP_LINK =
  "https://wa.me/244936351564?text=Olá! Quero saber mais sobre a formação da MAGAF.";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Formações", href: "#formacoes" },
  { label: "Formadores", href: "#formadores" },
  { label: "Turmas", href: "#turmas" },
  { label: "FAQ", href: "#faq" },
];

const FooterSection = () => {
  return (
    <footer className="relative overflow-hidden bg-[#05070F] py-20">

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#E11D48]/10 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E11D48]/10 blur-[180px] rounded-full" />

      {/* TOP BORDER GLOW */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container max-w-[1280px] mx-auto px-6 relative z-10">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">

          {/* COLUNA 1 */}
          <div>
            <img
              src={logoMagaf}
              alt="MAGAF"
              className="h-10 object-contain mb-5"
            />

            <p className="text-white/60 text-[14px] leading-relaxed">
              Centro de Formação Digital focado em transformar conhecimento em resultados reais no mercado digital moderno.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 text-[#E11D48] text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Formação prática e orientada a resultados
            </div>
          </div>

          {/* COLUNA 2 */}
          <div>
            <h4 className="text-white text-[16px] font-semibold mb-5">
              Links rápidos
            </h4>

            <ul className="space-y-3 text-sm">

              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="
                      text-white/60
                      hover:text-[#E11D48]
                      transition
                      duration-300
                    "
                  >
                    {item.label}
                  </a>
                </li>
              ))}

            </ul>
          </div>

          {/* COLUNA 3 */}
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

          {/* COLUNA 4 */}
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

        {/* CTA BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">

          <div>
            <h3 className="text-white text-[18px] font-semibold">
              Pronto para começar a sua formação?
            </h3>

            <p className="text-white/60 text-sm">
              Fale connosco e garanta a sua vaga hoje mesmo.
            </p>
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#E11D48] px-6 py-3 font-semibold text-white shadow-lg shadow-[#E11D48]/20 transition hover:translate-y-[-2px] hover:bg-[#c5163d]"
          >
            <MessageCircle className="h-5 w-5" />
            Falar no WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>

        </div>

        {/* BOTTOM */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} MAGAF. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;