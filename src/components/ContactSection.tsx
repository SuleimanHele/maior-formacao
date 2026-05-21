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

const FooterSection = () => {
  return (
    <footer className="relative overflow-hidden bg-surface-dark py-20">

      {/* GLOW BACKGROUND */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 blur-[160px] rounded-full" />

      <div className="container relative z-10">

        {/* TOP GRID - 4 COLUNAS */}
        <div className="grid md:grid-cols-4 gap-10 mb-14">

          {/* COLUNA 1 - SOBRE */}
          <div>
            <img
              src={logoMagaf}
              alt="MAGAF"
              className="h-10 object-contain mb-5 brightness-0 invert"
            />

            <p className="text-surface-dark-foreground/70 leading-relaxed text-sm">
              Centro de Formação Digital focado em transformar conhecimento em
              resultados reais no mercado digital moderno.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Formação prática e moderna
            </div>
          </div>

          {/* COLUNA 2 - LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-5">Links rápidos</h4>

            <ul className="space-y-3 text-sm text-surface-dark-foreground/70">
              <li className="hover:text-primary transition cursor-pointer">
                Início
              </li>
              <li className="hover:text-primary transition cursor-pointer">
                Formações
              </li>
              <li className="hover:text-primary transition cursor-pointer">
                Formadores
              </li>
              <li className="hover:text-primary transition cursor-pointer">
                FAQ
              </li>
            </ul>
          </div>

          {/* COLUNA 3 - CONTACTOS */}
          <div>
            <h4 className="text-white font-semibold mb-5">Contactos</h4>

            <div className="space-y-4 text-sm text-surface-dark-foreground/70">

              <a
                href={WHATSAPP_LINK}
                className="flex items-center gap-3 hover:text-primary transition"
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

          {/* COLUNA 4 - REDES SOCIAIS */}
          <div>
            <h4 className="text-white font-semibold mb-5">Redes sociais</h4>

            <div className="flex flex-col gap-3">

              <a
                href="https://instagram.com"
                target="_blank"
                className="flex items-center gap-3 text-surface-dark-foreground/70 hover:text-primary transition"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                className="flex items-center gap-3 text-surface-dark-foreground/70 hover:text-primary transition"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                className="flex items-center gap-3 text-green-400 hover:text-green-300 transition"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* CTA BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

          <div>
            <h3 className="text-white font-semibold text-lg">
              Pronto para começar a sua formação?
            </h3>

            <p className="text-sm text-surface-dark-foreground/60">
              Fale connosco e garanta a sua vaga hoje mesmo.
            </p>
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/20 hover:scale-[1.02] transition"
          >
            <MessageCircle className="h-5 w-5" />
            Falar no WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-surface-dark-foreground/40">
          © {new Date().getFullYear()} MAGAF. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;