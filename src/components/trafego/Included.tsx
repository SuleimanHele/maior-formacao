import {
  TrendingUp,
  Award,
  CreditCard,
  Coffee,
} from "lucide-react";

const items = [
  {
    icon: TrendingUp,
    title: "1 Mês de Acompanhamento",
    desc: "Suporte contínuo e mentoria após o término da formação.",
  },
  {
    icon: Award,
    title: "Certificado",
    desc: "Comprove a tua formação com certificado reconhecido.",
  },
  {
    icon: CreditCard,
    title: "Abertura de Conta Visa Gratuita",
    desc: "Conta internacional gratuita para começares a importar e pagar online.",
  },
  {
    icon: Coffee,
    title: "Coffee Break",
    desc: "Networking de qualidade com outros empreendedores no intervalo.",
  },
];

export default function Included() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-5 py-16">
      <div className="mb-10 text-center">
        <p className="text-xs uppercase tracking-widest text-primary">
          O que está incluído
        </p>

        <h2 className="mt-2 text-3xl font-black sm:text-4xl">
          Tudo o que precisas para começar
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((d) => (
          <div
            key={d.title}
            className="
              group relative overflow-hidden rounded-2xl
              border border-primary/30
              bg-card
              p-6
              transition-all
              hover:-translate-y-1
              hover:border-primary
              hover:shadow-lg hover:shadow-primary/10
            "
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 transition-all group-hover:bg-primary/10" />

            <div
              className="
                relative mb-4 inline-flex rounded-xl
                bg-primary/10
                p-3
                transition-colors
                group-hover:bg-primary/20
              "
            >
              <d.icon
                className="
                  h-6 w-6 text-primary
                  transition-colors
                  group-hover:text-primary
                "
              />
            </div>

            <h3 className="text-lg font-bold">{d.title}</h3>

            <p className="mt-1 text-sm text-muted-foreground">
              {d.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}