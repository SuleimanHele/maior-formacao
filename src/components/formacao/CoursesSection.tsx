import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

import { formations, type Formation } from "../data/formations";
import CourseModal from "./CourseModal";

const paymentLink = "https://paygooo.goootrafego.com/";



const CoursesSection = () => {
  const [selectedCourse, setSelectedCourse] = useState<Formation | null>(null);
  const navigate = useNavigate();

  return (
    <section id="formacoes" className="relative overflow-hidden py-24 bg-white">
      
      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 blur-[160px] rounded-full" />

      <div className="container max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 mb-5">
            <Sparkles className="h-4 w-4" />
            Formações MAGAF
          </div>

          <h2 className="text-[34px] md:text-[52px] font-bold text-[#0B0B0B] mb-4">
            Nossas <span className="text-[#E10600]">Formações</span>
          </h2>

          <p className="text-[16px] md:text-[18px] text-[#4B4B4B]">
            Formação prática, moderna e focada em resultados reais no mercado digital.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {formations.map((formation) => {
            const Icon = formation.icon;

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

                {/* IMAGE */}
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={formation.image}
                    alt={formation.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30" />

                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#E10600] text-white shadow-lg">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <h3 className="text-[22px] font-semibold text-[#0B0B0B] mb-3">
                    {formation.title}
                  </h3>

                  <p className="text-[14px] text-[#4B4B4B] mb-5 leading-relaxed">
                    {formation.description}
                  </p>

                  {/* FEATURES */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {formation.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-3 py-1 rounded-full bg-[#F5F5F5] border border-[#E5E5E5]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* PRICE */}
                  <div className="mb-6">
                    <p className="text-xs text-gray-500">Investimento</p>
                    <p className="text-xl font-bold text-red-600">
                      {formation.price}
                    </p>
                    <p className="text-xs text-gray-400">
                      + {formation.registration} inscrição
                    </p>
                  </div>

                  {/* BUTTONS */}
                  <div className="flex flex-col gap-3">

                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelectedCourse(formation)}
                        className="flex-1 border border-[#E10600] text-[#E10600] py-3 rounded-xl font-medium hover:bg-red-50 transition"
                      >
                        Detalhes
                      </button>

                      <a
                        href={paymentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#E10600] text-white py-3 rounded-xl font-medium text-center hover:bg-red-700 transition"
                      >
                        Inscrever-se
                      </a>
                    </div>

                    <button
                      onClick={() => navigate(`/courses/${formation.slug}`)}
                      className="w-full border border-gray-300 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-100 transition"
                    >
                      Ver Formação Completa
                    </button>

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

export default CoursesSection;