import { CheckCircle2 } from "lucide-react";
import mentorImg from "@/assets/gaspar-mentor.jpg";

export function MentorSection() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-5 py-16">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        {/* Coluna da esquerda - Foto */}
        <div className="relative">
          <div className="relative mx-auto max-w-sm">
            <img
              src={mentorImg}
              alt="Gaspar Manuel - Formador Digital"
              className="relative z-10 w-full rounded-2xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 w-[90%]">
              <div className="rounded-xl bg-secondary text-secondary-foreground px-6 py-4 text-center shadow-xl">
                <div className="inline-block bg-primary text-primary-foreground text-[11px] font-bold tracking-[0.3em] px-3 py-1 rounded">
                  FORMADOR
                </div>
                <div className="mt-2 font-display text-2xl tracking-wide">Gaspar Manuel</div>
                <div className="text-xs text-white/70 uppercase tracking-widest">formador digital</div>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna da direita - Informações */}
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
              SOBRE O MENTOR
            </h3>
            <h2 className="text-3xl font-black sm:text-4xl">
              Gaspar Manuel <span className="text-primary">CEO</span>
            </h2>
            <p className="mt-2 font-semibold text-muted-foreground">
              Formador Digital e fundador da MAGAF
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Atua na capacitação de particulares e empresas, ajudando mensalmente mais de 100 pessoas 
            a iniciarem ou desenvolverem a sua presença no digital.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Combina experiência prática, capacidade de ensino e visão estratégica, 
            tornando-se referência no ecossistema digital angolano.
          </p>

          {/* Lista de especialidades */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
              <span className="text-sm">Centenas de alunos formados</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
              <span className="text-sm">Especialista em Meta Ads</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
              <span className="text-sm">Importação direta da China</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
              <span className="text-sm">IA aplicada a vendas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}