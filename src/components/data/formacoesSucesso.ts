export type FormacaoSucesso = {
  title: string;
  mode: "Presencial" | "Online";
  image?: string;
  message: string;
  steps: string[];
  whatsapp: string;
  whatsappMessage: string;
};

const whatsapp = "https://wa.me/244936351564";

export const formacoesSucesso: Record<string, FormacaoSucesso> = {
  "trafego-pago": {
    title: "Tráfego Pago + Importação + IA",
    mode: "Presencial",
    message:
      "O teu pagamento foi recebido com sucesso. Para concluir a inscrição na formação Tráfego Pago + Importação + IA, confirma agora através do WhatsApp.",
    steps: [
      "Início: 10 de Outubro",
      "Todos os sábados · 12h às 15h",
      "Local: Viana Executive Center — 3.º andar",
      "Pagamento recebido com sucesso",
      "Confirmação pelo WhatsApp para validar a vaga",
    ],
    whatsapp,
    whatsappMessage:
      "Olá MAGAF, acabei de realizar o pagamento da formação Tráfego Pago + Importação + IA. Envio esta mensagem para confirmar a minha inscrição e receber os próximos passos.",
  },
};