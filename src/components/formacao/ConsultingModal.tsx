// components/ConsultingModal.tsx
import React from "react";
import { Target, Clock, Users, Award, MessageCircle, Sparkles, CheckCircle, Calendar, TrendingUp, BarChart, Rocket } from "lucide-react";

interface ConsultingService {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  price: string;
  duration: string;
  availability: string;
  audience: string;
  fullDescription: string;
  isPremium?: boolean;
  badge?: string;
}

interface ConsultingModalProps {
  service: ConsultingService | null;
  onClose: () => void;
}

// Link de pagamento para a consultoria
const CONSULTING_PAYMENT_LINK = "https://paygooo.goootrafego.com/checkout/1c4576a6-9f95-4920-91c9-f3ab81d0bd20"; // Substituir pelo link correto

const ConsultingModal = ({ service, onClose }: ConsultingModalProps) => {
  if (!service) return null;

  const Icon = service.icon;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm">
      <div className="h-full overflow-y-auto">
        <div className="min-h-full flex items-center justify-center p-4">
          <div className="relative bg-white rounded-2xl overflow-hidden w-full max-w-2xl shadow-xl">

            {/* FECHAR */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-20 h-8 w-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition text-sm"
            >
              ✕
            </button>

            {/* CONTEÚDO */}
            <div className="p-6">

              {/* ÍCONE E TÍTULO */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E10600] text-white shadow-lg flex-shrink-0">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B0B0B]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#4B4B4B]">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* DESCRIÇÃO COMPLETA */}
              <div className="mb-6">
                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                  {service.fullDescription}
                </p>
              </div>

              {/* INVESTIMENTO DETALHADO */}
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">💎 Investimento</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-[#E10600]" />
                      Marcação da consultoria
                    </span>
                    <span className="text-lg font-bold text-[#E10600]">10.000 Kz</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-gray-200 pt-2">
                    <span className="text-sm text-gray-600 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-[#E10600]" />
                      Consultoria e acompanhamento (1 mês)
                    </span>
                    <span className="text-xl font-bold text-[#E10600]">{service.price}</span>
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
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* PÚBLICO-ALVO */}
              {service.audience && (
                <div className="mb-6">
                  <p className="text-xs text-gray-500 mb-1 flex items-center gap-2">
                    <Users className="h-3 w-3" />
                    Público-alvo
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {service.audience}
                  </p>
                </div>
              )}

              {/* BOTÕES */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={CONSULTING_PAYMENT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#E10600] text-white py-3 rounded-xl text-center font-semibold text-sm hover:bg-red-700 transition flex items-center justify-center gap-2"
                >
                  <Rocket className="h-4 w-4" />
                  Agendar Marcação
                </a>

                <button
                  onClick={onClose}
                  className="flex-1 border py-3 rounded-xl font-medium text-sm hover:bg-gray-100 transition"
                >
                  Fechar
                </button>
              </div>

              {/* BADGE DE SUPORTE */}
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
                  <MessageCircle className="h-3 w-3" />
                  Suporte via WhatsApp durante todo o acompanhamento
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultingModal;