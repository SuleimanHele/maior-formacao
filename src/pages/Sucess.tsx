import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 text-center">

        <CheckCircle className="text-green-500 mx-auto" size={64} />

        <h1 className="text-2xl font-bold mt-4">
          Pagamento realizado com sucesso!
        </h1>

        <p className="text-gray-600 mt-3">
          Obrigado por confiar na MAGAF.
          Recebemos a tua inscrição e em breve a nossa equipa entrará em contacto contigo para fornecer todos os detalhes de acesso à formação.
        </p>

        <div className="mt-5 text-left bg-gray-100 p-4 rounded-xl text-sm space-y-2">
          <p>✓ Inscrição confirmada</p>
          <p>✓ Acesso enviado por WhatsApp e Email</p>
          <p>✓ Suporte disponível em caso de dúvidas</p>
        </div>

        <a
  href="https://wa.me/244936351564"
  target="_blank"
  rel="noopener noreferrer"
  className="block mt-5 bg-green-500 text-white py-3 rounded-xl"
>
  Entrar no WhatsApp
</a>

        <a
          href="/"
          className="block mt-3 text-gray-600"
        >
          Voltar ao Site
        </a>
      </div>
    </div>
  );
}