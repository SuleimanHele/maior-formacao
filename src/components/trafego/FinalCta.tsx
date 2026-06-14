import { Sparkles, Zap, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function FinalCta() {
  return (
    <section className="relative z-10 mx-auto max-w-5xl px-5 py-16">

      <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-primary p-10 text-center shadow-lg sm:p-16">

        {/* overlay leve para textura */}
        <div className="absolute inset-0 opacity-10 bg-black" />

        {/* glow suave (mantendo vermelho, sem gold) */}
        <div className="absolute -left-20 top-10 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

        <div className="relative">

          {/* BADGE */}
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Inscrições a fechar
          </div>

          {/* TITLE */}
          <h2 className="text-3xl font-black text-white sm:text-5xl">
            As vagas estão quase esgotadas
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Garanta agora a tua participação antes que as inscrições encerrem.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-primary transition-transform hover:scale-105"
            >
              <Zap className="h-5 w-5" />
              Garantir Minha Vaga
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 bg-transparent px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}