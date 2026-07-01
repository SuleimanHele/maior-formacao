import { CheckCircle2, Users } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 mx-auto max-w-7xl px-5 py-16">
      <div className="mb-10 text-center">
        <p className="text-xs uppercase tracking-widest text-primary">
          Investimento
        </p>
        <h2 className="mt-2 text-3xl font-black sm:text-4xl">
          Garante a tua vaga agora
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Vagas extremamente limitadas. A inscrição confirma o teu lugar.
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">

        {/* CARD 1 - Inscrição */}
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:border-primary">
          <div className="absolute right-4 top-4 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
            Etapa 1
          </div>

          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Inscrição
          </p>

          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-5xl font-black">2.000</span>
            <span className="text-lg font-bold text-primary">KZ</span>
          </div>

          <p className="mt-2 text-sm text-muted-foreground">
            Para garantir a vaga
          </p>

          <div className="my-6 h-px bg-primary/20" />

          <ul className="space-y-3 text-sm">
            {[
              "Reserva imediata do teu lugar",
              "Acesso ao grupo dos inscritos no WhatsApp",
              "Acesso ao manual de acompanhamento",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CARD 2 - FORMAÇÃO (AGORA VERMELHO) */}
        <div className="relative overflow-hidden rounded-3xl border border-primary bg-primary p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">

          <div className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
            Etapa 2 · Premium
          </div>

          <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
            Formação
          </p>

          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-5xl font-black text-white">
              20.000
            </span>
            <span className="text-lg font-bold text-white/90">
              KZ
            </span>
          </div>

          <p className="mt-2 text-sm text-white/80">
            Pagas no dia da formação
          </p>

          <div className="my-6 h-px bg-white/20" />

          <ul className="space-y-3 text-sm text-white">
            {[
              "Formação intensiva",
              "1 mês de acompanhamento",
              "Coffee Break",
              "Certificado",
              "Abertura de conta Visa gratuita",
              "Manual de formação",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-white" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://paygooo.goootrafego.com/checkout/8b7954a6-0f67-4977-bdaf-74fe343568c6"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-base font-bold text-primary transition-all hover:scale-[1.02]"
          >
            Quero Garantir Minha Vaga
          </a>
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-4xl items-center justify-center gap-2 text-sm text-muted-foreground">
        <Users className="h-4 w-4 text-primary" />
        <span className="font-semibold text-foreground">Vagas limitadas</span>
        — confirma já antes que esgote.
      </div>
    </section>
  );
}