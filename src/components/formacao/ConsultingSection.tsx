// components/ConsultingSection.tsx
import { useState } from "react";
import { Sparkles, Target, Clock, Users, Award, CheckCircle, TrendingUp, BarChart, MessageCircle, Calendar, Rocket } from "lucide-react";

import { consultingServices, type ConsultingService } from "../data/consultingData";
import ConsultingModal from "./ConsultingModal";

// Link de pagamento para a consultoria
const CONSULTING_PAYMENT_LINK = "https://paygooo.goootrafego.com/checkout/1c4576a6-9f95-4920-91c9-f3ab81d0bd20"; // Substituir pelo link correto

const ConsultingSection = () => {
  const [selectedService, setSelectedService] = useState<ConsultingService | null>(null);

  return (
    <section id="consultoria" className="relative overflow-hidden py-24 bg-[#05070F]">
      
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#E10600]/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E10600]/10 blur-[160px] rounded-full" />

      <div className="container max-w-[900px] mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E10600]/20 bg-[#E10600]/10 px-4 py-2 text-sm font-medium text-[#E10600] mb-5">
            <Sparkles className="h-4 w-4" />
            Consultoria Especializada
          </div>

          <h2 className="text-[34px] md:text-[52px] font-bold text-white mb-4">
            Consultoria e <span className="text-[#E10600]">Acompanhamento</span>
          </h2>

          <p className="text-[16px] md:text-[18px] text-white/70 max-w-2xl mx-auto">
            Para empresas e empreendedores que pretendem crescer de forma estratégica, 
            aumentar as vendas e obter melhores resultados no digital.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-6">
          {consultingServices.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="
                  group bg-white border border-[#E5E5E5]
                  rounded-2xl overflow-hidden
                  transition-all duration-300
                  hover:-translate-y-1 hover:border-red-300 hover:shadow-xl
                "
              >
                <div className="p-6 md:p-8">
                  
                  {/* HEADER */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E10600] text-white shadow-lg flex-shrink-0">
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-[#0B0B0B]">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#4B4B4B]">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* INVESTIMENTO */}
                  <div className="bg-gray-50 rounded-xl p-4 md:p-6 mb-6">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">💎 Investimento</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <Calendar className="h-3 w-3 text-[#E10600]" />
                          Marcação da consultoria
                        </p>
                        <p className="text-xl font-bold text-[#E10600]">10.000 Kz</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <TrendingUp className="h-3 w-3 text-[#E10600]" />
                          Consultoria e acompanhamento (1 mês)
                        </p>
                        <p className="text-2xl font-bold text-[#E10600]">{service.price}</p>
                      </div>
                    </div>
                  </div>

                  {/* FEATURES */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-[#0B0B0B] mb-3">🚀 O acompanhamento inclui:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-[#E10600] flex-shrink-0" />
                          <span className="text-sm text-[#4B4B4B]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#E5E5E5]">
                    <a
                      href={CONSULTING_PAYMENT_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#E10600] hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 text-sm flex items-center justify-center gap-2"
                    >
                      <Rocket className="h-4 w-4" />
                      Agendar Marcação
                    </a>

                    <button
                      onClick={() => setSelectedService(service)}
                      className="flex-1 border border-[#E10600] text-[#E10600] hover:bg-red-50 font-bold px-6 py-3 rounded-xl transition-all duration-300 text-sm"
                    >
                      Ver Detalhes
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      <ConsultingModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};

export default ConsultingSection;