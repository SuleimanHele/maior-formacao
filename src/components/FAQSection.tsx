import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  HelpCircle,
  Sparkles,
} from "lucide-react";

const faqs = [
  {
    q: "Preciso ter experiência em marketing digital?",
    a: "Não. A formação começa do zero e foi desenhada para qualquer pessoa, mesmo sem conhecimento prévio.",
  },
  {
    q: "A formação é prática?",
    a: "Sim. Vais aprender criando campanhas reais, anúncios e estratégias usadas no mercado atual.",
  },
  {
    q: "Vou ter acompanhamento?",
    a: "Sim. Os alunos recebem suporte contínuo durante a formação e acompanhamento no processo de implementação.",
  },
  {
    q: "As aulas são presenciais?",
    a: "Sim. As formações acontecem presencialmente no Kilamba — G27 Apartamento 02.",
  },
  {
    q: "Receberei certificado?",
    a: "Sim. Todos os participantes recebem certificado no final da formação.",
  },
  {
    q: "Posso começar sem computador?",
    a: "Sim. Mesmo sem computador é possível começar e nós mostramos alternativas práticas durante a formação.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="relative overflow-hidden py-24 bg-background">

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 blur-[140px] rounded-full" />

      <div className="container relative z-10 max-w-6xl">

        {/* HEADER */}
        <div className="text-center mb-14">

          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium text-primary mb-5">
            <Sparkles className="h-4 w-4" />
            Suporte e dúvidas
          </div>

          <h2 className="font-heading text-4xl md:text-5xl font-black text-foreground mb-4">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>

          <p className="text-muted-foreground">
            Tudo o que precisas de saber antes de começar a formação.
          </p>
        </div>

        {/* 2 COLUNAS */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT COLUMN */}
          <div className="space-y-4">

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(0, 3).map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`left-${i}`}
                  className="group rounded-2xl border border-border/40 bg-card/70 backdrop-blur-xl px-5 transition-all hover:border-primary/20 hover:shadow-md"
                >
                  <AccordionTrigger className="flex items-center gap-3 py-5 text-left font-semibold text-foreground hover:no-underline">

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                      <HelpCircle className="h-4 w-4" />
                    </div>

                    <span className="flex-1 text-base leading-relaxed">
                      {faq.q}
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="text-muted-foreground pl-12 pb-5 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(3).map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`right-${i}`}
                  className="group rounded-2xl border border-border/40 bg-card/70 backdrop-blur-xl px-5 transition-all hover:border-primary/20 hover:shadow-md"
                >
                  <AccordionTrigger className="flex items-center gap-3 py-5 text-left font-semibold text-foreground hover:no-underline">

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                      <HelpCircle className="h-4 w-4" />
                    </div>

                    <span className="flex-1 text-base leading-relaxed">
                      {faq.q}
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="text-muted-foreground pl-12 pb-5 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;