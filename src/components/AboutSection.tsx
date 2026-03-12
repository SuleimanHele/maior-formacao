import { Target, TrendingUp, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Sobre a <span className="text-primary">MAGAF</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A MAGAF – Centro de Formação e Serviços Digitais é especializada em ensinar pessoas e empresas a gerar clientes e aumentar vendas através da internet.
          </p>
          <p className="text-xl font-heading font-semibold text-foreground mt-6">
            Transformar conhecimento digital em resultados reais de negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: "Foco em Resultados", desc: "Estratégias práticas para gerar vendas reais na internet." },
            { icon: TrendingUp, title: "Crescimento Real", desc: "Aprenda a atrair clientes e escalar o seu negócio online." },
            { icon: Users, title: "Acompanhamento", desc: "Suporte contínuo para aplicar o que aprendeu na prática." },
          ].map((item) => (
            <div key={item.title} className="group rounded-2xl border border-border bg-card p-8 text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
