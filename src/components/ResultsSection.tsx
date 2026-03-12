import trainingImg from "@/assets/training-session.jpg";

const ResultsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Resultados dos <span className="text-primary">Alunos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pessoas que decidiram aprender e começar a vender online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={trainingImg} alt="Formação em curso" className="w-full h-80 object-cover" />
          </div>
          <div className="space-y-6">
            {[
              { icon: "📌", text: "Fotos das formações" },
              { icon: "📌", text: "Alunos em aula prática" },
              { icon: "📌", text: "Testemunhos de sucesso" },
              { icon: "📌", text: "Resultados de campanhas criadas pelos alunos" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-4 rounded-xl bg-muted p-5">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-foreground font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
