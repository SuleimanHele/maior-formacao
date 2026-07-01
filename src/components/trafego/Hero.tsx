import { Sparkles, Zap } from "lucide-react";
import heroBg from "@/assets/trafego.jpeg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="MAGAF Background"
          className="h-full w-full object-cover opacity-60 scale-105"
        />

        {/* OVERLAY MAIS ESCURO (FOCO EM CONVERSÃO) */}
        <div className="absolute inset-0 bg-black/70" />

        {/* GRADIENTE PARA PROFUNDIDADE */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/95" />
      </div>

      {/* GLOWS (mais discretos agora) */}
      <div className="absolute top-20 left-10 h-[400px] w-[400px] rounded-full bg-primary/20 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-primary/10 blur-[140px]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-28 lg:pt-32">

        <div className="mx-auto max-w-4xl text-center">

          {/* BADGE */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Últimas vagas · Inscrições a fechar
          </div>

          {/* TITLE */}
          <h1 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl text-white">
            Formação <span className="text-primary">Tráfego Pago</span>
            <br />+ <span className="text-primary">Importação</span>
            <br />+{" "}
            <span className="rounded-md bg-primary px-3 py-1 text-white">
              IA
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 mx-auto max-w-2xl text-lg text-white/75 sm:text-xl">
            Domina marketing digital, importação com lucro real e IA aplicada a vendas.
            Transforma conhecimento em renda concreta.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <a
              href="https://paygooo.goootrafego.com/checkout/8b7954a6-0f67-4977-bdaf-74fe343568c6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-[1.03]"
            >
              Quero Garantir Minha Vaga
              <Zap className="h-5 w-5" />
            </a>

            <a
              href="#detalhes"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Ver detalhes
            </a>

          </div>

          {/* STATS */}
          <div className="mt-10 grid max-w-lg mx-auto grid-cols-3 gap-4 border-t border-white/10 pt-6 text-white">

            <div>
              <p className="text-2xl font-black text-primary">+500</p>
              <p className="text-xs text-white/60">Alunos formados</p>
            </div>

            <div>
              <p className="text-2xl font-black text-primary">3</p>
              <p className="text-xs text-white/60">Módulos premium</p>
            </div>

            <div>
              <p className="text-2xl font-black text-primary">1 mês</p>
              <p className="text-xs text-white/60">Suporte</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}