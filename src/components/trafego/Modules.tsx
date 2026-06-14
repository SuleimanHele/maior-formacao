import { Target, Plane, Brain } from "lucide-react";

const modules = [
  {
    icon: Target,
    tag: "Módulo 01",
    title: "Tráfego Pago",
    desc: "Crie campanhas profissionais no Instagram e Meta Ads que realmente convertem.",
  },
  {
    icon: Plane,
    tag: "Módulo 02",
    title: "Importação",
    desc: "Importação com lucro real, contacto de fornecedores, agentes de envio e agentes de pagamento.",
  },
  {
    icon: Brain,
    tag: "Módulo 03",
    title: "Inteligência Artificial",
    desc: "Use IA para criar conteúdo, automatizar atendimento e gerar resultados para criativos e prompts.",
  },
];

export default function Modules() {
  return (
    <section id="modules" className="relative z-10 mx-auto max-w-7xl px-5 py-16">
      <div className="mb-10 text-center">
        <p className="text-xs uppercase tracking-widest text-primary">
          Conteúdo programático
        </p>
        <h2 className="mt-2 text-3xl font-black sm:text-4xl">
          O que vais aprender
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {modules.map((m) => (
          <article
            key={m.title}
            className="
              group relative overflow-hidden rounded-2xl
              border border-primary/20 bg-card
              p-7 shadow-sm transition-all
              hover:-translate-y-1
              hover:border-primary
              hover:shadow-lg
            "
          >
            {/* glow */}
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20" />

            <p className="relative text-xs font-bold uppercase tracking-widest text-primary">
              {m.tag}
            </p>

            {/* ICON */}
            <div className="relative mt-4 inline-flex rounded-xl border border-primary/30 bg-primary/5 p-3 transition-colors group-hover:border-primary">
              <m.icon className="h-7 w-7 text-foreground transition-colors group-hover:text-primary" />
            </div>

            <h3 className="relative mt-4 text-2xl font-black">
              {m.title}
            </h3>

            <p className="relative mt-3 text-muted-foreground">
              {m.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}