import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, Video } from "lucide-react";

import { recordedFormations, type Formation } from "../data/recordedFormations";
import CourseModal from "./CourseModal";

// Links de pagamento para cada curso gravado
const paymentLinks: Record<number, string> = {
  1: "https://paygooo.goootrafego.com/checkout/8b7954a6-0f67-4977-bdaf-74fe343568c6",
  2: "https://paygooo.goootrafego.com/checkout/curso-gravado-ia",
  3: "https://paygooo.goootrafego.com/checkout/curso-gravado-websites",
  4: "https://paygooo.goootrafego.com/checkout/curso-gravado-premium",
  5: "https://paygooo.goootrafego.com/checkout/curso-gravado-edicao-video", // Link para edição de vídeo
};

const RecordedCoursesSection = () => {
  const [selectedCourse, setSelectedCourse] = useState<Formation | null>(null);
  const navigate = useNavigate();

  return (
    <section id="cursos-gravados" className="relative overflow-hidden py-24 bg-white">
      
      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 blur-[160px] rounded-full" />

      <div className="container max-w-[900px] mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 mb-5">
            <Video className="h-4 w-4" />
            Formações Online
          </div>

          <h2 className="text-[34px] md:text-[52px] font-bold text-[#0B0B0B] mb-4">
            Cursos <span className="text-[#E10600]">Gravados</span>
          </h2>

          <p className="text-[16px] md:text-[18px] text-[#4B4B4B]">
            Os mesmos cursos presenciais, agora em versão gravada para você assistir quando quiser.
          </p>
        </div>

        {/* CARDS - 2 POR LINHA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recordedFormations.map((formation) => {
            const Icon = formation.icon;
            const paymentLink = paymentLinks[formation.id] || "#";

            // CARD PREMIUM (id: 4)
            if (formation.id === 4) {
              return (
                <div
                  key={formation.id}
                  className="
                    relative bg-white border-2 border-red-300 rounded-2xl overflow-hidden
                    transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
                    shadow-lg
                  "
                >
                  {/* CABEÇALHO */}
                  <div className="bg-gradient-to-r from-red-600 to-red-800 p-4 text-center">
                    <div className="text-yellow-400 text-xs font-bold mb-1 uppercase tracking-wide">
                      MELHOR ESCOLHA
                    </div>
                    <h3 className="text-base font-bold text-white mb-1">
                      {formation.title}
                    </h3>
                    
                    {/* Badge de Curso Gravado */}
                    <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                      <Video className="h-3 w-3" />
                      VERSÃO GRAVADA
                    </div>

                    <div className="text-2xl font-bold text-white mb-2">
                      {formation.price}
                    </div>

                    {formation.homeTraining && (
                      <div className="mx-auto mb-3 max-w-xs rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-2">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-lg">🎥</span>

                          <div className="text-left">
                            <p className="text-[11px] font-semibold text-white">
                              Acesso Vitalício
                            </p>

                            <p className="text-[10px] text-red-100">
                              {formation.homeTraining}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="inline-flex items-center gap-1 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                      ⭐ RECOMENDADO
                    </div>
                  </div>

                  {/* LISTA DE FEATURES */}
                  <div className="p-3">
                    <div className="space-y-1 mb-3">
                      {formation.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-1">
                          <span className="text-red-600 font-bold text-sm">✓</span>
                          <span className="text-xs text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* BOTÕES */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedCourse(formation)}
                        className="flex-1 border border-[#E10600] text-[#E10600] py-2 rounded-xl font-medium hover:bg-red-50 transition text-xs"
                      >
                        Detalhes
                      </button>

                      <a
                        href={paymentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#E10600] text-white py-2 rounded-xl font-medium text-center hover:bg-red-700 transition text-xs"
                      >
                        Inscrever-se
                      </a>
                    </div>
                  </div>
                </div>
              );
            }

            // CARDS NORMAIS (id: 1, 2, 3, 5)
            return (
              <div
                key={formation.id}
                className="
                  group bg-white border border-[#E5E5E5]
                  rounded-2xl overflow-hidden
                  transition-all duration-300
                  hover:-translate-y-1 hover:border-red-300 hover:shadow-xl
                "
              >
                {/* HEADER COM NOME DA FORMAÇÃO */}
                <div className="relative h-[160px] overflow-hidden bg-gradient-to-br from-[#E10600] to-red-800">
                  <div className="absolute inset-0 bg-black/20" />
                  
                  <div className="relative h-full flex flex-col items-center justify-center text-center p-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm text-white mb-2">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1 text-center leading-tight">
                      {formation.title}
                    </h3>
                    
                    {/* Badge de Curso Gravado */}
                    <div className="mt-1 inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-[8px] font-bold">
                      <Video className="h-2.5 w-2.5" />
                      GRAVADO
                    </div>
                    
                    <div className="w-8 h-0.5 bg-white/50 mx-auto mt-1" />
                  </div>

                  <div className="absolute bottom-2 left-2 flex h-7 w-7 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm text-white shadow-lg">
                    <Icon className="h-3 w-3" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-3">
                  <p className="text-[11px] text-[#4B4B4B] mb-2 leading-relaxed line-clamp-2">
                    {formation.description}
                  </p>

                  {/* FEATURES */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {formation.features.slice(0, 4).map((feature) => (
                      <span
                        key={feature}
                        className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#F5F5F5] border border-[#E5E5E5]"
                      >
                        {feature}
                      </span>
                    ))}
                    {formation.features.length > 4 && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#F5F5F5] border border-[#E5E5E5] text-gray-500">
                        +{formation.features.length - 4}
                      </span>
                    )}
                  </div>

                  {/* PRICE */}
                  <div className="mb-3">
                    <p className="text-[9px] uppercase tracking-wide text-gray-500">
                      Investimento
                    </p>

                    <p className="text-lg font-bold text-red-600">
                      {formation.price}
                    </p>

                    <div className="mt-2 rounded-lg border border-red-200 bg-red-50 px-2 py-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">🎥</span>

                        <div>
                          <p className="text-[10px] font-semibold text-red-700">
                            Acesso Vitalício
                          </p>

                          <p className="text-[9px] text-gray-600">
                            Assista quando e onde quiser
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedCourse(formation)}
                      className="flex-1 border border-[#E10600] text-[#E10600] py-1.5 rounded-xl font-medium hover:bg-red-50 transition text-[10px]"
                    >
                      Detalhes
                    </button>

                    <a
                      href={paymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#E10600] text-white py-1.5 rounded-xl font-medium text-center hover:bg-red-700 transition text-[10px]"
                    >
                      Inscrever-se
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </section>
  );
};

export default RecordedCoursesSection;