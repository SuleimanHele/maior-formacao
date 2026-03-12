import { CheckCircle, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/244936351564?text=Olá! Quero saber mais sobre a formação de tráfego pago.";

const courses = [
  "Criar anúncios no Facebook e Instagram",
  "Escolher o público-alvo correto",
  "Criar criativos que chamam atenção e vendem",
  "Estruturar campanhas lucrativas",
  "Estratégias para gerar vendas online",
  "WhatsApp Vendedor – como vender pelo WhatsApp",
  "Importação de produtos",
  "Abertura de conta Visa para pagamentos online",
  "Curso de portfólio profissional",
  "Curso de criação de website profissional",
  "Curso de gestão de empresas usando Inteligência Artificial",
];

const CoursesSection = () => {
  return (
    <section id="formacoes" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossas <span className="text-primary">Formações</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Aprenda a criar anúncios que trazem clientes todos os dias.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="bg-secondary px-8 py-6">
              <h3 className="font-heading text-2xl font-bold text-secondary-foreground">
                Formação de Tráfego Pago
              </h3>
              <p className="text-secondary-foreground/70 mt-1">O que vais aprender:</p>
            </div>
            <div className="p-8">
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {courses.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-card-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-whatsapp px-8 py-3.5 text-base font-semibold text-whatsapp-foreground hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="h-5 w-5" fill="currentColor" />
                Quero saber mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
