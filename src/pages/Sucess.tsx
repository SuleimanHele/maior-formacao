import { CheckCircle, MessageCircle, ArrowRight } from "lucide-react";
import { useParams } from "react-router-dom";
import logoMagaf from "@/assets/logo-magaf.jpg";
import { formacoesSucesso } from "@/components/data/formacoesSucesso";

export default function Sucesso() {
  const { curso } = useParams<{ curso: string }>();
  const data = curso ? formacoesSucesso[curso] : undefined;

  /* ---------- Formação não encontrada ---------- */
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-8 rounded-2xl shadow text-center max-w-md w-full">
          <h1 className="text-xl font-bold text-gray-900">
            Formação não encontrada
          </h1>
          <p className="text-gray-600 mt-2">
            Verifica se o endereço está correto.
          </p>
          <a
            href="/"
            className="inline-flex mt-5 text-[#E10600] font-semibold hover:underline"
          >
            Voltar ao site
          </a>
        </div>
      </div>
    );
  }

  /* ---------- Página de sucesso ---------- */
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4 py-12">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl p-8 text-center border border-gray-100">

        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <img
            src={logoMagaf}
            alt="MAGAF"
            className="h-28 w-28 object-contain rounded-2xl shadow-sm"
          />
        </div>

        {/* IMAGEM DA FORMAÇÃO */}
        {data.image && (
          <div className="mb-6">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-48 object-cover rounded-2xl"
            />
          </div>
        )}

        {/* ÍCONE DE SUCESSO */}
        <div className="flex justify-center">
          <div className="p-4 rounded-full bg-green-50">
            <CheckCircle className="text-green-500" size={56} />
          </div>
        </div>

        {/* TÍTULOS */}
        <h1 className="text-2xl md:text-3xl font-bold mt-6 text-gray-900">
          Pagamento recebido com sucesso
        </h1>

        <h2 className="text-xl font-semibold mt-3 text-gray-800">
          {data.title}
        </h2>

        <span className="inline-block mt-2 px-4 py-1 rounded-full bg-green-50 text-green-600 text-sm font-medium">
          {data.mode}
        </span>

        {/* MENSAGEM */}
        <p className="text-gray-600 mt-5 leading-relaxed">
          {data.message}
        </p>

        {/* PASSOS SEGUINTES */}
        <div className="mt-6 text-left bg-gray-50 border border-gray-100 p-5 rounded-2xl text-sm space-y-3">
          {data.steps.map((step, index) => (
            <p key={index} className="flex items-start gap-2 text-gray-700">
              <span className="text-green-500 font-bold">✓</span>
              {step}
            </p>
          ))}
        </div>

        {/* AVISO WHATSAPP */}
        <div className="mt-6 bg-green-50 border border-green-100 rounded-2xl p-4 text-left">
          <h3 className="font-semibold text-green-700">
            Último passo necessário
          </h3>
          <p className="text-sm text-gray-700 mt-2">
            Para validar o teu pagamento e concluir a inscrição, envia agora a
            confirmação através do WhatsApp.
          </p>
        </div>

        {/* BOTÃO WHATSAPP */}
        <a
          href={`${data.whatsapp}?text=${encodeURIComponent(data.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-6 inline-flex items-center justify-center gap-2
            w-full bg-green-500 hover:bg-green-600
            text-white py-3 rounded-xl font-semibold transition
          "
        >
          <MessageCircle className="h-5 w-5" />
          Confirmar pagamento pelo WhatsApp
        </a>

        {/* VOLTAR AO SITE */}
        <a
          href="/"
          className="
            mt-4 inline-flex items-center justify-center gap-2
            text-gray-600 hover:text-gray-900 text-sm transition
          "
        >
          <ArrowRight className="h-4 w-4" />
          Voltar ao site
        </a>

        {/* NOTA FINAL */}
        <p className="text-xs text-gray-400 mt-6">
          Após a confirmação pelo WhatsApp, a equipa MAGAF irá validar os dados
          e enviar as próximas instruções.
        </p>
      </div>
    </div>
  );
}