import { CheckCircle } from "lucide-react";

const differentials = [
  "Formação prática",
  "Estratégias usadas no mercado",
  "Conteúdo direto ao ponto",
  "Acompanhamento dos alunos",
  "Bónus exclusivos",
];

const DifferentialsSection = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden">

      {/* GLOW MAIS SUAVE E SISTÉMICO */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#E10600]/10 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#E10600]/10 blur-[180px] rounded-full" />

      <div className="container relative z-10">

        <div className="max-w-3xl mx-auto text-center">

          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 leading-tight">
            Na MAGAF o foco é{" "}
            <span className="text-[#E10600]">resultado real.</span>
          </h2>

          {/* SUBTITLE */}
          <p className="text-muted-foreground text-lg leading-relaxed">
            Tudo o que ensinamos é aplicado no mercado real, sem teoria desnecessária.
          </p>

          {/* CHIPS */}
          <div className="flex flex-wrap justify-center gap-3 mt-10 mb-10">

            {differentials.map((item) => (
              <div
                key={item}
                className="
                  flex items-center gap-2
                  rounded-full
                  border border-border
                  bg-muted/40
                  px-5 py-2.5
                  text-foreground/80
                  hover:border-[#E10600]/30
                  hover:bg-[#E10600]/5
                  transition
                "
              >
                <CheckCircle className="h-4 w-4 text-[#E10600]" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}

          </div>

          {/* PUNCHLINE */}
          <p className="text-2xl md:text-3xl font-black text-[#E10600]">
            Quem aprende e aplica, vende.
          </p>

        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;