import {
  MapPin,
  Calendar,
  Clock,
  MessageCircle,
  Wallet,
  Award,
} from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export function InfoCardSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-2xl mx-auto">
        {/* Cards de Preços */}
        <div className="rounded-2xl bg-card ring-1 ring-border p-8 shadow-sm mb-6">
          <div className="grid grid-cols-2 divide-x divide-border">
            <div className="pr-6 text-center">
              <div className="text-xs font-bold tracking-[0.25em] text-muted-foreground">
                INSCRIÇÃO
              </div>
              <div className="mt-2 font-display text-4xl text-secondary">
                2.000 <span className="text-lg text-primary align-top">KZ</span>
              </div>
              <div className="text-[11px] text-muted-foreground mt-1">
                (reserva de vaga)
              </div>
            </div>
            <div className="pl-6 text-center">
              <div className="text-xs font-bold tracking-[0.25em] text-muted-foreground">
                FORMAÇÃO
              </div>
              <div className="mt-2 font-display text-4xl text-secondary">
                30.000 <span className="text-lg text-primary align-top">KZ</span>
              </div>
              <div className="text-[11px] text-muted-foreground mt-1">
                (pagas no dia)
              </div>
            </div>
          </div>
        </div>

        {/* Info Local, Data e Horário */}
        <div className="rounded-2xl bg-secondary text-secondary-foreground p-6 grid grid-cols-3 gap-4 mb-6">
          <div className="space-y-2 text-center">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary mx-auto">
              <MapPin className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className="text-[10px] font-bold tracking-[0.2em] text-primary">
              LOCAL
            </div>
            <div className="text-sm font-semibold leading-tight">
              Kilamba G27
              <br />
              <span className="text-white/70 font-normal text-xs">
                Apartamento 02
              </span>
            </div>
          </div>
          <div className="space-y-2 text-center">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary mx-auto">
              <Calendar className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className="text-[10px] font-bold tracking-[0.2em] text-primary">
              DIA
            </div>
            <div className="text-sm font-semibold leading-tight">
              19 Sexta-feira
              <br />
              <span className="text-white/70 font-normal text-xs">Junho</span>
            </div>
          </div>
          <div className="space-y-2 text-center">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary mx-auto">
              <Clock className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className="text-[10px] font-bold tracking-[0.2em] text-primary">
              HORÁRIO
            </div>
            <div className="text-sm font-semibold leading-tight">
              10h às 15h
            </div>
          </div>
        </div>

        {/* Benefícios Extras */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="flex items-center gap-2 rounded-lg bg-card ring-1 ring-border p-3">
            <Wallet className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium">
              Conta Visa Gratuita
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-card ring-1 ring-border p-3">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium">
              Certificado Incluso
            </span>
          </div>
        </div>

        {/* Botão CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary text-primary-foreground py-5 font-bold uppercase tracking-wider hover:opacity-90 transition shadow-lg hover:shadow-xl"
        >
          <MessageCircle className="h-5 w-5" /> 
          Inscrever Agora
        </a>
        
        <p className="text-center text-xs text-muted-foreground mt-4">
          ⚡ Vagas limitadas - Confirma já a tua participação
        </p>
      </div>
    </section>
  );
}