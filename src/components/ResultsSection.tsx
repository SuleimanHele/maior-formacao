import trafego1 from "@/assets/trafego-1.jpeg";
import trafego2 from "@/assets/trafego-2.jpeg";
import trafego3 from "@/assets/trafego-3.jpeg";
import trafego4 from "@/assets/trafego-4.jpeg";
import trafego5 from "@/assets/trafego-5.jpeg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import { Sparkles, TrendingUp } from "lucide-react";

const photos = [
  {
    src: trafego2,
    title: "Aula prática de Tráfego Pago",
    desc: "Estratégias reais aplicadas no Meta Ads",
  },
  {
    src: trafego3,
    title: "Gestão de campanhas",
    desc: "Otimização e análise de anúncios",
  },
  {
    src: trafego4,
    title: "Execução prática",
    desc: "Aplicação direta em negócios reais",
  },
  {
    src: trafego5,
    title: "Sessão intensiva",
    desc: "Acompanhamento próximo aos alunos",
  },
  {
    src: trafego1,
    title: "Resultados reais",
    desc: "Transformação de conhecimento em vendas",
  },
];

const ResultsSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">

      {/* GLOW SUAVE (mantido no sistema claro) */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/10 blur-[140px] rounded-full" />

      <div className="container relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14">

          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium text-primary mb-5">
            <Sparkles className="h-4 w-4" />
            Resultados dos alunos
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Resultados dos <span className="text-primary">Alunos</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Momentos reais das formações MAGAF e evolução dos alunos no mercado digital.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="max-w-4xl mx-auto">

          <Carousel opts={{ loop: true }} className="w-full">

            <CarouselContent>

              {photos.map((item, i) => (
                <CarouselItem key={i}>

                  <div className="relative rounded-2xl overflow-hidden group border border-border shadow-lg">

                    {/* IMAGE */}
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-80 md:h-[28rem] object-cover transition duration-700 group-hover:scale-105"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* RED GLOW SOFT */}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition duration-500" />

                    {/* TEXT */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">

                      <h3 className="text-white text-lg md:text-xl font-bold mb-1">
                        {item.title}
                      </h3>

                      <p className="text-white/70 text-sm">
                        {item.desc}
                      </p>
                    </div>

                    {/* BADGE */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 text-xs text-white">
                      <TrendingUp className="h-3 w-3 text-primary" />
                      MAGAF
                    </div>

                  </div>

                </CarouselItem>
              ))}

            </CarouselContent>

            {/* NAVIGATION */}
            <CarouselPrevious className="left-2 md:-left-12" />
            <CarouselNext className="right-2 md:-right-12" />

          </Carousel>
        </div>

        {/* INFO GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12">

          {[
            "Aulas práticas reais",
            "Alunos em execução",
            "Resultados mensuráveis",
            "Campanhas reais",
          ].map((text) => (
            <div
              key={text}
              className="flex items-center justify-center rounded-xl bg-muted border border-border p-4 text-sm text-foreground font-medium"
            >
              {text}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ResultsSection;