import {
  Briefcase,
  Rocket,
  ShoppingBag,
  Video,
  GraduationCap,
  Users,
} from "lucide-react";

const items = [
  {
    icon: Briefcase,
    title: "Empreendedores",
    desc: "Para quem deseja vender mais usando Instagram e Facebook Ads.",
  },
  {
    icon: Rocket,
    title: "Jovens que querem renda extra",
    desc: "Aprenda habilidades digitais lucrativas e trabalhe online.",
  },
  {
    icon: ShoppingBag,
    title: "Comerciantes e importadores",
    desc: "Aprenda importação com lucro real e fornecedores certos.",
  },
  {
    icon: Video,
    title: "Criadores de conteúdo",
    desc: "Use IA para criatividade, produtividade e criação de prompts.",
  },
  {
    icon: GraduationCap,
    title: "Pessoas sem experiência",
    desc: "Formação prática do zero até avançado.",
  },
  {
    icon: Users,
    title: "Equipas de vendas",
    desc: "Capacita o teu time com estratégias digitais modernas e escaláveis.",
  },
];

export default function Audience() {
  return (
    <section id="target-audience" className="relative z-10 mx-auto max-w-7xl px-5 py-16">
      <div className="mb-10 text-center">
        <p className="text-xs uppercase tracking-widest text-primary">
          Público-alvo
        </p>

        <h2 className="mt-2 text-3xl font-black sm:text-4xl">
          Para quem esta direcionada a formação
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Uma formação prática para quem deseja gerar renda, vender mais e dominar ferramentas digitais.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <div
            key={p.title}
            className="
              group relative overflow-hidden rounded-2xl
              border border-primary/40
              bg-card
              p-6
              transition-all
              hover:-translate-y-1
              hover:border-primary
              hover:shadow-lg hover:shadow-primary/10
            "
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/5 transition-all group-hover:bg-primary/10" />

            <div
              className="
                relative mb-4 inline-flex rounded-xl
                border border-primary/30
                bg-primary/10
                p-3
                transition-colors
                group-hover:bg-primary/20
              "
            >
              <p.icon
                className="
                  h-6 w-6 text-primary
                  transition-colors
                  group-hover:text-primary
                "
              />
            </div>

            <h3 className="relative text-lg font-bold">{p.title}</h3>

            <p className="relative mt-1 text-sm text-muted-foreground">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}