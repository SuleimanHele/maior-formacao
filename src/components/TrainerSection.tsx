import gasparsImg from "@/assets/gaspars-manuel.jpg";
import { Quote } from "lucide-react";

const TrainerSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <img src={gasparsImg} alt="Gaspars Manuel" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 md:right-4 w-48 h-48 rounded-2xl bg-primary/10 -z-10" />
          </div>

          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
              Gaspar Manuel
            </h2>
            <p className="text-primary font-medium mb-6">
              Especialista em Gestão, Marketing Digital e Tráfego Pago
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Participação na gestão de várias empresas",
                "Criação de anúncios no Facebook e Instagram",
                "Desenvolvimento de estratégias de vendas online",
                "Formação de empreendedores e negócios",
                "Acompanhamento na aplicação prática do marketing digital",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="rounded-2xl bg-secondary p-6 relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/30" />
              <p className="text-secondary-foreground italic text-lg leading-relaxed">
                "Não basta aprender marketing digital. É preciso saber aplicar para gerar vendas."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;
