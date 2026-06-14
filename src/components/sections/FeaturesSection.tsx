import {
  Brain,
  ShoppingCart,
  MessageCircle,
  Headphones,
} from "lucide-react";

const features = [
  { 
    icon: Brain, 
    title: "INTELIGÊNCIA ARTIFICIAL", 
    desc: "Aprende IA para marketing digital, vendas e documentos." 
  },
  { 
    icon: ShoppingCart, 
    title: "CRIE A SUA PRÓPRIA LOJA ONLINE", 
    desc: "E comece a vender na internet a partir do primeiro dia! Os clientes adicionam ao carrinho e finalizam a compra com facilidade." 
  },
  { 
    icon: MessageCircle, 
    title: "MENSAGENS DIRETAS VIA WHATSAPP", 
    desc: "Recebe pedidos e fala diretamente com os teus clientes." 
  },
  { 
    icon: Headphones, 
    title: "AGENTE VENDEDOR", 
    desc: "Atendimento automático para responder e ajudar os clientes 24h." 
  },
];

export function FeaturesSection() {
  return (
    <section id="modulos" className="relative z-10 mx-auto max-w-7xl px-5 py-16">
      <div className="mb-10 text-center">
        <p className="text-xs uppercase tracking-widest text-gold">
          O que vais dominar
        </p>
        <h2 className="mt-2 text-3xl font-black sm:text-4xl">
          TUDO QUE VAIS <span className="text-primary">APRENDER</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto">
          Uma formação intensiva e prática. Sais com a tua loja no ar e a IA a trabalhar para ti.
        </p>
      </div>

      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <article
            key={feature.title}
            className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold"
          >
            {/* Background blur effect */}
            <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20" />
            
            {/* Ícone */}
            <div className="relative inline-flex rounded-lg border border-gold/30 bg-gold/10 p-2">
              <feature.icon className="h-5 w-5 text-gold" />
            </div>
            
            {/* Título */}
            <h3 className="relative mt-3 text-base font-black leading-tight">
              {feature.title}
            </h3>
            
            {/* Descrição */}
            <p className="relative mt-2 text-xs text-muted-foreground">
              {feature.desc}
            </p>
            
            {/* Número decorativo */}
            <div className="absolute bottom-2 right-3 text-5xl font-black text-primary/5 group-hover:text-primary/10 transition-colors">
              {String(index + 1).padStart(2, '0')}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}