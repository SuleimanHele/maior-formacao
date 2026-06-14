import { CheckCircle2, Users } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export function InvestmentSection() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-5 py-16">
      <div className="mb-10 text-center">
        <p className="text-xs uppercase tracking-widest text-gold">
          Investimento
        </p>

        <h2 className="mt-2 text-3xl font-black sm:text-4xl">
          GARANTA A SUA <span className="text-primary">VAGA</span>
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Vagas extremamente limitadas. A inscrição confirma o teu lugar.
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
        {/* Card 1 - Inscrição */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:border-gold/30">
          <div className="absolute right-4 top-4 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold">
            Etapa 1
          </div>

          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Inscrição
          </p>

          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-5xl font-black">2.000</span>
            <span className="text-lg font-bold text-gold">KZ</span>
          </div>

          <p className="mt-2 text-sm text-muted-foreground">
            Para garantir a tua vaga.
          </p>

          <div className="my-6 h-px bg-border" />

          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />
              Reserva imediata do teu lugar
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />
              Acesso ao grupo dos inscritos
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />
              Suporte antes do evento
            </li>
          </ul>
        </div>

        {/* Card 2 - Premium */}
        <div className="relative overflow-hidden rounded-3xl border-2 border-gold bg-gradient-to-br from-card to-secondary p-8 shadow-2xl transition-all hover:-translate-y-1">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gold/20 blur-2xl" />

          <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-red-500 to-red-600 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
            Etapa 2 · Premium
          </div>

          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Formação
          </p>

          <div className="mt-4 flex items-baseline gap-2">
            <span 
              className="text-6xl font-black"
              style={{ textShadow: '0 0 15px rgba(212, 175, 55, 0.4)' }}
            >
              30.000
            </span>
            <span className="text-lg font-bold text-gold">KZ</span>
          </div>

          <p className="mt-2 text-sm text-muted-foreground">
            Pagas no dia da formação.
          </p>

          <div className="my-6 h-px bg-gold/30" />

          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />
              Formação intensiva e prática
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />
              1 mês de acompanhamento
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />
              Coffee Break incluído
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />
              Certificado de participação
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />
              Material de apoio exclusivo
            </li>
          </ul>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 py-4 text-base font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
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