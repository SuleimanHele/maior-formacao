import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "A formação é presencial?", a: "Sim. A formação será presencial no Kilamba — Edifício G27 Apartamento 02." },
  { q: "Preciso ter experiência?", a: "Não. A formação foi criada tanto para iniciantes como para quem já trabalha na área." },
  { q: "Vou aprender tráfego pago na prática?", a: "Sim. Vais aprender campanhas reais no Instagram e Meta Ads com aplicação prática." },
  { q: "A formação inclui importação?", a: "Sim. Vais aprender importação com lucro real, fornecedores, agentes de envio e pagamentos." },
  { q: "A formação inclui Inteligência Artificial?", a: "Sim. Vais aprender IA aplicada a vendas, criação de conteúdo, prompts e automação." },
  { q: "Receberei certificado?", a: "Sim. Todos os participantes receberão certificado no final da formação." },
  { q: "Como faço a inscrição?", a: "Basta clicar no botão ‘Garantir Vaga’ ou entrar em contacto pelo WhatsApp." },
  { q: "As vagas são limitadas?", a: "Sim. As vagas são extremamente limitadas para garantir melhor acompanhamento." },
];

export default function Faq() {
  return (
    <section id="faq" className="relative z-10 mx-auto max-w-4xl px-5 py-16">
      <div className="mb-10 text-center">
        <p className="text-xs uppercase tracking-widest text-gold">FAQ</p>
        <h2 className="mt-2 text-3xl font-black sm:text-4xl">Perguntas Frequentes</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Tire as principais dúvidas sobre a formação.
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((item, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="overflow-hidden rounded-2xl border border-border bg-card px-5 transition-colors hover:border-gold/40"
          >
            <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
