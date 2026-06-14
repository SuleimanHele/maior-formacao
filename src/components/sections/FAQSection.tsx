import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Preciso ter conhecimentos prévios?", a: "Não. A formação foi desenvolvida para iniciantes." },
  { q: "A formação é presencial?", a: "Sim. A formação é realizada presencialmente." },
  { q: "Vou aprender Inteligência Artificial na prática?", a: "Sim. Aprenderás a utilizar ferramentas modernas para produtividade e negócios." },
  { q: "Vou aprender a criar uma loja online?", a: "Sim. Aprenderás a criar e estruturar uma loja online profissional." },
  { q: "O que é WhatsApp Vendedor?", a: "É a utilização estratégica do WhatsApp para atrair clientes, responder mensagens e aumentar as vendas." },
  { q: "Preciso saber programar?", a: "Não." },
  { q: "Receberei material de apoio?", a: "Sim." },
  { q: "Esta formação serve para quem já possui um negócio?", a: "Sim. Os conhecimentos podem ser aplicados tanto em novos negócios como em empresas já existentes." },
  { q: "O foco é apenas teoria?", a: "Não. A formação é altamente prática e orientada para resultados." },
];

export function FAQSection() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black">Perguntas Frequentes</h2>
        <div className="mt-3 mx-auto h-1 w-16 bg-primary rounded-full" />
      </div>
      <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-6 md:p-10">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`q${i + 1}`}>
              <AccordionTrigger className="text-left text-base font-semibold text-black">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#4B5563]">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
