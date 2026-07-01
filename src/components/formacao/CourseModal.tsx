import React from "react";

const paymentLink = "https://paygooo.goootrafego.com/checkout/8b7954a6-0f67-4977-bdaf-74fe343568c6";

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
}

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
}

const CourseModal = ({ course, onClose }: CourseModalProps) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="h-full overflow-y-auto">
        <div className="min-h-full flex items-center justify-center p-4 md:p-8">

          <div className="relative bg-white rounded-[32px] overflow-hidden w-full max-w-4xl shadow-2xl">

            {/* FECHAR */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-20 h-11 w-11 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition"
            >
              ✕
            </button>

            {/* CONTEÚDO */}
            <div className="p-6 md:p-8 lg:p-10">

              {/* TÍTULO */}
              <h3 className="text-2xl md:text-4xl font-bold mb-4 text-[#0B0B0B]">
                {course.title}
              </h3>

              {/* DESCRIÇÃO */}
              <p className="text-gray-600 leading-relaxed mb-8 whitespace-pre-line">
                {course.fullDescription}
              </p>

              {/* INFO PRINCIPAL */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gray-50">
                  <p className="text-xs text-gray-500">Duração</p>
                  <p className="font-semibold">{course.duration}</p>
                </div>

                <div className="p-3 rounded-xl bg-gray-50">
                  <p className="text-xs text-gray-500">Horário</p>
                  <p className="font-semibold">{course.schedule}</p>
                </div>
                
                <div className="p-3 rounded-xl bg-gray-50">
                  <p className="text-xs text-gray-500">Dia</p>
                  <p className="font-semibold">{course.day}</p>
                </div>

                <div className="p-3 rounded-xl bg-gray-50">
                  <p className="text-xs text-gray-500">Modalidade</p>
                  <p className="font-semibold">{course.mode}</p>
                </div>
              </div>

              {/* PÚBLICO-ALVO */}
              {course.audience && (
                <div className="mb-6">
                  <p className="text-xs text-gray-500 mb-1">Público-alvo</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {course.audience}
                  </p>
                </div>
              )}

              {/* FEATURES */}
              <div className="flex flex-wrap gap-2 mb-8">
                {course.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 rounded-full bg-gray-100 border text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* PREÇO */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                {course.registration && course.registration !== "" && (
                  <div className="flex justify-between mb-3">
                    <span className="text-gray-500">Inscrição</span>
                    <span className="font-bold text-[#E10600]">
                      {course.registration}
                    </span>
                  </div>
                )}

                <div className={`flex justify-between ${!course.registration || course.registration === "" ? "" : ""}`}>
                  <span className="text-gray-500">Investimento Total</span>
                  <span className="text-3xl font-black text-[#E10600]">
                    {course.price}
                  </span>
                </div>
              </div>

              {/* BENEFÍCIOS */}
              <div className="space-y-2 mb-8 text-sm text-gray-700">
                <div>✔ Certificado incluído</div>
                <div>✔ Grupo privado dos alunos</div>
                <div>✔ Material de apoio</div>
                <div>✔ Suporte durante a formação</div>
              </div>

              {/* BOTÕES */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={paymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#E10600] text-white py-4 rounded-xl text-center font-semibold hover:bg-red-700 transition"
                >
                  Inscrever-se Agora
                </a>

                <button
                  onClick={onClose}
                  className="flex-1 border py-4 rounded-xl font-medium hover:bg-gray-100 transition"
                >
                  Fechar
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;