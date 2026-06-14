import { Users, Store, TrendingUp, GraduationCap, Briefcase, DollarSign } from "lucide-react";
import { InfoCard } from "@/components/sections/InfoCard";

const items = [
  { icon: Users, title: "Empreendedores", description: "Pessoas que desejam criar ou expandir os seus negócios utilizando Inteligência Artificial, Loja Online e WhatsApp Vendedor." },
  { icon: Store, title: "Proprietários de Pequenos Negócios", description: "Empresários que pretendem aumentar as vendas e modernizar os seus negócios." },
  { icon: TrendingUp, title: "Profissionais de Marketing e Vendas", description: "Quem procura aprender ferramentas modernas para captar clientes e aumentar resultados." },
  { icon: GraduationCap, title: "Iniciantes no Mundo Digital", description: "Não é necessário possuir experiência anterior." },
  { icon: Briefcase, title: "Freelancers e Prestadores de Serviços", description: "Profissionais que desejam adquirir novas competências e gerar mais rendimentos." },
  { icon: DollarSign, title: "Pessoas que Procuram uma Renda Extra", description: "Ideal para quem deseja criar novas oportunidades de rendimento através da internet." },
];

export function TargetAudienceSection() {
  return (
    <section id="sobre"  className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black">Para Quem é Esta Formação?</h2>
        <div className="mt-3 mx-auto h-1 w-16 bg-primary rounded-full" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <InfoCard key={it.title} {...it} />
        ))}
      </div>
    </section>
  );
}
