import { CheckCircle2 } from "lucide-react";
import gasparMentorImg from "@/assets/gaspar-mentor.jpg";

const tags = [
  "Centenas de alunos formados",
  "Especialista em Meta Ads",
  "Importação direta da China",
  "IA aplicada a vendas",
];

export default function Mentor() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-5 py-16">
      <div className="overflow-hidden rounded-3xl border border-primary/40 bg-card shadow-card">

        <div className="grid gap-0 lg:grid-cols-[1fr_1.3fr]">

          {/* IMAGE */}
          <div className="relative aspect-square lg:aspect-auto overflow-hidden">

            <img
              src={gasparMentorImg}
              alt="Gaspar Manuel"
              loading="lazy"
              className="h-full w-full object-cover scale-105"
            />

            {/* overlay mais escuro para dar presença */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/30 to-primary/20" />
          </div>

          {/* CONTENT */}
          <div className="p-8 sm:p-12">

            <p className="text-xs uppercase tracking-widest text-primary">
              Sobre o Mentor
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Gaspar Manuel CEO
            </h2>

            <p className="mt-2 text-lg font-semibold text-primary">
              Formador Digital e fundador da MAGAF – Centro de Formação Digital.
            </p>

            <p className="mt-5 text-muted-foreground">
              Atua na capacitação de particulares e empresas, ajudando mensalmente mais de 100 pessoas a iniciarem ou desenvolverem a sua presença no digital.
            </p>

            <p className="mt-3 text-muted-foreground">
              Com uma abordagem prática e orientada para resultados, combina experiência em execução, capacidade de ensino e visão estratégica de negócio.
            </p>

            <p className="mt-3 text-muted-foreground">
              Da publicidade paga à inteligência artificial aplicada aos negócios.
            </p>

            {/* TAGS */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {tags.map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-4 py-2.5 transition-all hover:border-primary/60 hover:bg-primary/10"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm font-medium">{t}</span>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}