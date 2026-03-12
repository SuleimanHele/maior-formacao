import trafego1 from "@/assets/trafego-1.jpeg";
import trafego2 from "@/assets/trafego-2.jpeg";
import trafego3 from "@/assets/trafego-3.jpeg";
import trafego4 from "@/assets/trafego-4.jfif";
import trafego5 from "@/assets/trafego-5.jfif";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const photos = [trafego1, trafego2, trafego3, trafego4, trafego5];

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

        <div className="max-w-3xl mx-auto mb-12">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {photos.map((src, i) => (
                <CarouselItem key={i}>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={src}
                      alt={`Formação MAGAF ${i + 1}`}
                      className="w-full h-80 md:h-[28rem] object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:-left-12" />
            <CarouselNext className="right-2 md:-right-12" />
          </Carousel>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { icon: "📌", text: "Fotos das formações" },
            { icon: "📌", text: "Alunos em aula prática" },
            { icon: "📌", text: "Testemunhos de sucesso" },
            { icon: "📌", text: "Resultados de campanhas" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-3 rounded-xl bg-muted p-4">
              <span className="text-xl">{item.icon}</span>
              <span className="text-foreground font-medium text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
