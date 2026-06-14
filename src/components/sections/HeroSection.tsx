import { Sparkles, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Imagem de fundo */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      {/* Overlay escuro para melhor contraste do texto */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-secondary/95 via-secondary/90 to-primary/80" />
      <div className="absolute inset-0 z-0 bg-black/40" />

      {/* Elementos decorativos de fundo */}
      <div className="absolute top-10 left-10 h-48 w-48 rounded-full bg-primary/20 blur-3xl z-0" />
      <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-gold/20 blur-3xl z-0" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-12 lg:py-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-secondary/90 backdrop-blur-sm text-secondary-foreground px-3 py-1 text-[11px] font-semibold tracking-wider uppercase shadow-lg">
          <Sparkles className="h-3 w-3 text-primary" /> 
          Formação Presencial
        </div>

        {/* Título Principal */}
        <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
          <span className="block text-white text-base sm:text-lg mb-2 font-display tracking-wide drop-shadow-lg">
            FORMAÇÃO DE
          </span>
          <span className="block bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent drop-shadow-lg">
            INTELIGÊNCIA ARTIFICIAL,
          </span>
          <span className="block text-white mt-1 drop-shadow-lg">
            CRIAÇÃO DE LOJA ONLINE
          </span>
          <span className="block bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent mt-1 drop-shadow-lg">
            E
          </span>
        </h1>

        {/* Badge WhatsApp Vendedor */}
        <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-secondary/90 backdrop-blur-sm text-secondary-foreground px-4 py-2 shadow-lg">
          <span className="font-display tracking-wide text-base sm:text-lg text-white">
            WHATSAPP VENDEDOR
          </span>
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-green-500 shadow-lg">
            <MessageCircle className="h-3.5 w-3.5 text-white" />
          </span>
        </div>

        {/* Descrição */}
        <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base text-white/90 drop-shadow-md">
          Aprende <span className="text-gold font-semibold">Inteligência Artificial</span> para marketing digital, 
          vendas e documentos — e lança a tua própria loja online ligada ao WhatsApp.
        </p>

        {/* Botões CTA */}
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-gold to-yellow-500 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-secondary transition-all hover:scale-105 hover:shadow-xl shadow-lg"
          >
            Garantir Vaga
          </a>
          <a
            href="#detalhes"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 backdrop-blur-sm px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:scale-105 hover:bg-white/20 shadow-md"
          >
            Ver Detalhes
          </a>
        </div>

        {/* Indicador de vagas limitadas */}
        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-500/20 backdrop-blur-sm px-3 py-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] font-semibold text-white uppercase tracking-wider drop-shadow">
            ⚡ Últimas vagas disponíveis
          </span>
        </div>
      </div>
    </section>
  );
}