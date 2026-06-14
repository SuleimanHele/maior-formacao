import { CheckCircle, MessageCircle, ArrowRight } from "lucide-react";
import logoMagaf from "@/assets/logo-magaf.jpg";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
      
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl p-8 text-center border border-gray-100">

        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <img
            src={logoMagaf}
            alt="MAGAF"
            className="h-14 w-14 object-contain rounded-lg shadow-sm"
          />
        </div>

        {/* ICON */}
        <div className="flex justify-center">
          <div className="p-4 rounded-full bg-green-50">
            <CheckCircle className="text-green-500" size={56} />
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-2xl md:text-3xl font-bold mt-6 text-gray-900">
          Inscrição confirmada com sucesso
        </h1>

        <p className="text-gray-600 mt-3 leading-relaxed">
          Obrigado por escolher a MAGAF. A tua vaga foi reservada e já estamos a preparar tudo para a tua entrada na formação.
        </p>

        {/* INFO BOX */}
        <div className="mt-6 text-left bg-gray-50 border border-gray-100 p-5 rounded-2xl text-sm space-y-3">
          <p className="flex items-center gap-2">
            <span className="text-green-500">✓</span> Inscrição registada
          </p>
          <p className="flex items-center gap-2">
            <span className="text-green-500">✓</span> Acesso enviado via WhatsApp
          </p>
          <p className="flex items-center gap-2">
            <span className="text-green-500">✓</span> Suporte ativo antes da formação
          </p>
        </div>

        {/* CTA PRIMARY */}
        <a
          href="https://wa.me/244936351564"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition"
        >
          <MessageCircle className="h-5 w-5" />
          Falar com a equipa no WhatsApp
        </a>

        {/* SECONDARY CTA */}
        <a
          href="/"
          className="mt-4 inline-flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900 text-sm transition"
        >
          <ArrowRight className="h-4 w-4" />
          Voltar ao site
        </a>

        {/* FOOTNOTE */}
        <p className="text-xs text-gray-400 mt-6">
          Caso não recebas a mensagem no WhatsApp em poucos minutos, verifica se o número está correto.
        </p>

      </div>
    </div>
  );
}