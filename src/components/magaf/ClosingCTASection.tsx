const ClosingCTASection = () => {
  const whatsappLink =
    "https://wa.me/244936351564?text=Olá!%20Quero%20garantir%20a%20minha%20vaga%20na%20formação%20MAGAF";

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-black">
      {/* Efeitos de fundo vermelhos */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-red-600/20 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-red-500/10 blur-[100px]" />
        <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-red-600/5 blur-[120px]" />
      </div>

      {/* Linha decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      <div className="section-container relative px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/15 px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>
            <span className="text-xs font-semibold text-red-400 tracking-wide uppercase">
              INSCRIÇÕES A FECHAR
            </span>
          </div>

          {/* Título */}
          <h2 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            As vagas estão{" "}
            <span className="text-red-500">quase esgotadas</span>
          </h2>

          {/* Subtítulo */}
          <p className="mt-5 text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl mx-auto">
            Garanta agora a tua participação antes que as inscrições encerrem.
            Esta pode ser a tua última oportunidade de entrar nesta edição.
          </p>

          {/* Botões */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            {/* Botão Principal */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                px-8
                py-3.5
                font-bold
                text-white
                bg-gradient-to-r
                from-red-600
                to-red-500
                hover:from-red-500
                hover:to-red-600
                shadow-[0_0_30px_rgba(239,68,68,0.3)]
                hover:shadow-[0_0_50px_rgba(239,68,68,0.5)]
                transition-all
                duration-300
                hover:scale-[1.03]
              "
            >
              Garantir Minha Vaga
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>

            {/* Botão Secundário */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                px-8
                py-3.5
                font-semibold
                border
                border-red-500/30
                bg-red-500/5
                text-gray-300
                hover:bg-red-500/15
                hover:text-white
                hover:border-red-500/50
                transition-all
                duration-300
                hover:scale-[1.02]
              "
            >
              Falar no WhatsApp
            </a>
          </div>

          {/* Micro urgência */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400">
            <span className="flex h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
            ⚡ Vagas limitadas por turma para garantir acompanhamento personalizado
          </div>
        </div>
      </div>

      {/* Linha decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
    </section>
  );
};

export default ClosingCTASection;