import trafegoPagoImg from "@/assets/cursotrafego.jpeg";
import paginaWebImg from "@/assets/cursoweb.jpeg";
import vendorImg from "@/assets/vendor.jpeg";
import logoMagaf from "@/assets/logo-magaf.jpg";


export type FormacaoSucesso = {

  title: string;

  mode: "Presencial" | "Online";

  image?: string;

  message: string;

  steps: string[];

  whatsapp: string;

  whatsappMessage: string;

};



const whatsapp =
  "https://wa.me/244936351564";




export const formacoesSucesso: Record<string, FormacaoSucesso> = {


  // ==========================
  // FORMAÇÕES PRESENCIAIS
  // ==========================

/**
 * FORMAÇÃO DE TRÁFEGO PAGO + IMPORTAÇÃO
 */
  "trafego-pago": {

    title:
      "Tráfego Pago + Importação",

    mode:
      "Presencial",

    /*image:
      logoMagaf,
   */

    message:
      "O teu pagamento foi recebido com sucesso. Para concluir a inscrição na formação Tráfego Pago + Importação, confirma agora através do WhatsApp.",

    steps: [
      "Pagamento recebido",
      "Confirmação enviada pela WhatsApp",
      "Equipa MAGAF irá validar a inscrição"
    ],

    whatsapp,

    whatsappMessage:
      "Olá MAGAF, acabei de realizar o pagamento da formação Tráfego Pago + Importação. Envio esta mensagem para confirmar a minha inscrição e receber os próximos passos."

  },

/**
 * FORMAÇÃO DE INTELIGENCIA ARTIFICIAL
 */

  "inteligencia-artificial": {

    title:
      "Inteligência Artificial",

    mode:
      "Presencial",

   /*image:
      logoMagaf,
   */
    message:
      "O teu pagamento foi recebido. Confirma agora a tua inscrição através do WhatsApp para a equipa MAGAF validar a tua vaga.",

    steps:[
      "Pagamento recebido",
      "Confirmação pelo WhatsApp",
      "Informações da turma serão enviadas"
    ],

    whatsapp,

    whatsappMessage:
      "Olá MAGAF, acabei de realizar o pagamento da formação de Inteligência Artificial. Gostaria de confirmar a minha inscrição e receber as próximas informações."

  },

/**
 * FORMAÇÃO CRIAÇÃO DE WEBSITES COM IA
 */

  "websites": {

    title:
      "Criação de Websites com IA",

    mode:
      "Presencial",

   /* image:
      logoMagaf,
   */
    message:
      "O teu pagamento foi recebido com sucesso. Confirma agora a tua inscrição pelo WhatsApp para garantir a tua vaga.",

    steps:[
      "Pagamento recebido",
      "Confirmação enviada pelo WhatsApp",
      "Preparação da turma"
    ],

    whatsapp,

    whatsappMessage:
      "Olá MAGAF, acabei de realizar o pagamento da formação de Criação de Websites com IA. Gostaria de confirmar a minha vaga."

  },

/**
 * FORMAÇÃO COMPLETA
 */

  "formacao-completa": {

    title:
      "Formação Completa Premium",

    mode:
      "Presencial",

    /*image:
      logoMagaf,
    */
    message:
      "Parabéns! O teu pagamento foi confirmado. Envia agora a confirmação pelo WhatsApp para concluir a tua inscrição na Formação Completa Premium.",

    steps:[
      "Pagamento recebido",
      "Confirmação pelo WhatsApp",
      "Calendário e informações serão enviados"
    ],

    whatsapp,

    whatsappMessage:
      "Olá MAGAF, acabei de realizar o pagamento da Formação Completa Premium. Gostaria de confirmar a minha inscrição e receber os próximos passos."

  },
  /**
 * CONSULTORIA E ACOMPANHAMENTO
 */

"consultoria": {

  title:
    "Consultoria e Acompanhamento",

  mode:
    "Presencial",

 /*image:
    logoMagaf,
*/
  message:
    "Recebemos o teu pagamento com sucesso. Para concluir o processo de marcação da consultoria, confirma agora o pagamento através do WhatsApp. A nossa equipa irá entrar em contacto para agendar a primeira sessão.",

  steps: [
    "Pagamento recebido",
    "Confirmação pelo WhatsApp",
    "Agendamento da primeira sessão"
  ],

  whatsapp,

  whatsappMessage:
    "Olá MAGAF, acabei de realizar o pagamento do serviço de Consultoria e Acompanhamento. Gostaria de confirmar o pagamento e agendar os próximos passos."

},



  // ==========================
  // FORMAÇÕES ONLINE
  // ==========================
/**
 * FORMAÇÃO DE TRÁFEGO PAGO + IMPORTAÇÃO (ONLINE)
 */

  "trafego-pago-online": {

    title:
      "Formação Completa de Tráfego Pago",

    mode:
      "Online",

    /*image:
      logoMagaf,
   */

    message:
      "O teu pagamento foi confirmado. Após a confirmação pelo WhatsApp, a equipa MAGAF enviará as instruções de acesso.",

    steps:[
      "Pagamento recebido",
      "Confirmação pelo WhatsApp",
      "Acesso ao curso será enviado"
    ],

    whatsapp,

    whatsappMessage:
      "Olá MAGAF, acabei de realizar o pagamento da formação de Tráfego Pago Online. Gostaria de confirmar e receber o meu acesso."

  },

/**
 * FORMAÇÃO DE EDIÇÃO DE VÍDEO (ONLINE)
 */

  "edicao-video-online": {

    title:
      "Edição de Vídeo Online",

    mode:
      "Online",

    /*image:
      logoMagaf,
   */

    message:
      "O teu pagamento foi recebido. Confirma pelo WhatsApp para receber o acesso à formação.",

    steps:[
      "Pagamento recebido",
      "Confirmação pelo WhatsApp",
      "Acesso ao curso será disponibilizado"
    ],

    whatsapp,

    whatsappMessage:
      "Olá MAGAF, acabei de realizar o pagamento da formação de Edição de Vídeo Online. Gostaria de confirmar e receber o acesso."

  },

/**
 * FORMAÇÃO DE INTELIGENCIA ARTIFICIAL (ONLINE)
 */

  "inteligencia-artificial-online": {

    title:
      "Inteligência Artificial Online",

    mode:
      "Online",

    /*image:
      logoMagaf,
   */

    message:
      "O teu pagamento foi confirmado. Confirma pelo WhatsApp para receber as instruções de acesso.",

    steps:[
      "Pagamento recebido",
      "Confirmação enviada",
      "Acesso disponível após validação"
    ],

    whatsapp,

    whatsappMessage:
      "Olá MAGAF, acabei de realizar o pagamento da formação de Inteligência Artificial Online. Gostaria de confirmar e receber as instruções de acesso."

  },

/**
 * FORMAÇÃO DE CRIAÇÃO DE WEBSITES COM IA (ONLINE)
 */

  "websites-online": {

    title:
      "Criação de Websites com IA Online",

    mode:
      "Online",

    /*image:
      logoMagaf,
   */

    message:
      "O teu pagamento foi recebido. Confirma pelo WhatsApp para receber o acesso ao conteúdo.",

    steps:[
      "Pagamento recebido",
      "Confirmação pelo WhatsApp",
      "Acesso aos conteúdos será enviado"
    ],

    whatsapp,

    whatsappMessage:
      "Olá MAGAF, acabei de realizar o pagamento da formação de Websites com IA Online. Gostaria de confirmar e receber o acesso."

  },

/**
 * FORMAÇÃO COMPLETA PREMIUM ONLINE
 */

  "formacao-completa-online": {

    title:
      "Formação Completa Premium Online",

    mode:
      "Online",

    /*image:
      logoMagaf,
   */

    message:
      "O teu pagamento foi confirmado. Envia a confirmação pelo WhatsApp para receber acesso ao pacote completo.",

    steps:[
      "Pagamento recebido",
      "Confirmação pelo WhatsApp",
      "Acesso às formações será enviado"
    ],

    whatsapp,

    whatsappMessage:
      "Olá MAGAF, acabei de realizar o pagamento da Formação Completa Premium Online. Gostaria de confirmar e receber os meus acessos."

  }


};