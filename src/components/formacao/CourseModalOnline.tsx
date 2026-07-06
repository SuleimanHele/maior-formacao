import React from "react";

interface Course {
  id: number;
  title: string;
  image: string;
  duration: string;
  mode: string;
  schedule: string;
  day: string;
  audience: string;
  price: string;
  registration: string;
  fullDescription: string;
  features: string[];
  isRecorded?: boolean;
  isAvailable?: boolean;
}

interface CourseModalOnlineProps {
  course: Course | null;
  onClose: () => void;
}

const CourseModalOnline = ({ course, onClose }: CourseModalOnlineProps) => {
  if (!course) return null;

  // Determina o link de pagamento com base no ID do curso
  const getPaymentLink = (id: number): string => {
    const paymentLinks: Record<number, string> = {
      1: "https://paygooo.goootrafego.com/checkout/151167be-51f0-4485-acef-45714e71d113",
      2: "https://paygooo.goootrafego.com/checkout/curso-gravado-ia",
      3: "https://paygooo.goootrafego.com/checkout/curso-gravado-websites",
      4: "https://paygooo.goootrafego.com/checkout/curso-gravado-premium",
      5: "https://paygooo.goootrafego.com/checkout/curso-gravado-edicao-video",
    };
    return paymentLinks[id] || "#";
  };

  const paymentLink = getPaymentLink(course.id);

  return (
    <div id="course-modal" className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm">
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
            <div className="p-5">

              {/* BADGE ONLINE */}
              <div className="inline-flex items-center gap-1 bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold mb-3">
                <span className="text-sm">🎥</span>
                ONLINE
              </div>

              {/* TÍTULO */}
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#0B0B0B] pr-6">
                {course.title}
              </h3>

              {/* DESCRIÇÃO */}
              <p className="text-sm text-gray-600 leading-relaxed mb-4 whitespace-pre-line">
                {course.fullDescription}
              </p>

              {/* INFO PRINCIPAL */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="p-2 rounded-lg bg-gray-50">
                  <p className="text-xs text-gray-500">Duração</p>
                  <p className="text-sm font-semibold">{course.duration}</p>
                </div>

                <div className="p-2 rounded-lg bg-gray-50">
                  <p className="text-xs text-gray-500">Horário</p>
                  <p className="text-sm font-semibold">{course.schedule}</p>
                </div>

                <div className="p-2 rounded-lg bg-gray-50">
                  <p className="text-xs text-gray-500">Modalidade</p>
                  <p className="text-sm font-semibold">{course.mode}</p>
                </div>

                <div className="p-2 rounded-lg bg-gray-50">
                  <p className="text-xs text-gray-500">Certificado</p>
                  <p className="text-sm font-semibold text-green-600">✅ Incluído</p>
                </div>
              </div>

              {/* ACESSO IMEDIATO - Destaque para cursos online */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg">⚡</span>
                  <div>
                    <p className="text-sm font-semibold text-green-700">Acesso Imediato</p>
                    <p className="text-xs text-green-600">Assista quando e onde quiser</p>
                  </div>
                </div>
              </div>

              {/* PÚBLICO-ALVO */}
              {course.audience && (
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-1">Público-alvo</p>
                  <p className="text-xs text-gray-700 leading-relaxed line-clamp-2">
                    {course.audience}
                  </p>
                </div>
              )}

              {/* FEATURES */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {course.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2 py-0.5 rounded-full bg-gray-100 border text-xs"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* PREÇO */}
              <div className="bg-gray-50 rounded-xl p-4 mb-4">
                {course.registration && course.registration !== "" && (
                  <div className="flex justify-between mb-2">
                    <span className="text-xs text-gray-500">Inscrição</span>
                    <span className="text-sm font-bold text-[#E10600]">
                      {course.registration}
                    </span>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Investimento Total</span>
                  <span className="text-xl font-black text-[#E10600]">
                    {course.price}
                  </span>
                </div>

                {course.isAvailable && (
                  <div className="mt-2 text-xs text-green-600 font-medium">
                    ✅ Disponível para compra imediata
                  </div>
                )}
              </div>

              {/* BENEFÍCIOS */}
              <div className="grid grid-cols-2 gap-1 mb-5 text-xs text-gray-600">
                <div>✔ Certificado incluído</div>
                <div>✔ Material de apoio</div>
                <div>✔ Suporte via WhatsApp</div>
                <div>✔ Acesso imediato</div>
                <div>✔ Atualizações gratuitas</div>
                <div>✔ 100% online</div>
              </div>

              {/* BOTÕES */}
              <div className="flex gap-3">
                {course.isAvailable ? (
                  <a
                    href={paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#E10600] text-white py-2.5 rounded-xl text-center font-semibold text-sm hover:bg-red-700 transition"
                  >
                    🎯 Inscrever-se Agora
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex-1 bg-gray-300 text-gray-500 py-2.5 rounded-xl text-center font-semibold text-sm cursor-not-allowed"
                  >
                    Indisponível
                  </button>
                )}

                <button
                  onClick={onClose}
                  className="flex-1 border py-2.5 rounded-xl font-medium text-sm hover:bg-gray-100 transition"
                >
                  Fechar
                </button>
              </div>

              {/* BADGE DE INDISPONÍVEL */}
              {!course.isAvailable && (
                <div className="mt-3 text-center">
                  <span className="text-xs bg-gray-200 text-gray-600 px-3 py-1 rounded-full">
                    ⏳ Em breve disponível
                  </span>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModalOnline;