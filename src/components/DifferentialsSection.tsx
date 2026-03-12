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
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Na MAGAF o foco é <span className="text-primary">resultado real.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-10 mb-10">
            {differentials.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2.5 text-primary-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-secondary-foreground">{item}</span>
              </div>
            ))}
          </div>
          <p className="font-heading text-2xl font-bold text-primary">
            Quem aprende e aplica, vende.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
