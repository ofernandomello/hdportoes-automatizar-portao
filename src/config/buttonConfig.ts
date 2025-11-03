import { getUTMParams } from "@/lib/utm-tracker";

// Obter params uma vez e decidir a tag de anúncio no escopo externo
const utm = (getUTMParams() || {}) as Record<string, any>;
let tagAnuncio = "[Orgânico] ";
if (utm.gclid) {
  tagAnuncio = "[Google Ads] ";
} else if (utm.fbclid) {
  tagAnuncio = "[Meta Ads] ";
}

const whatsappNumber = "5511921349917";
const whatsappMessage = "Oi, gostaria de mais informações para automatizar meu portão";
// Codificar a mensagem inteira (tag + texto) para o parâmetro `text`
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(tagAnuncio + whatsappMessage)}`;

export const buttonActions = {
  contatoWhatsApp: {
    label: "Fale no WhatsApp",
    type: "link",
    url: whatsappLink,
  },
  contatoForm: {
    label: "Preencha o Formulário",
    type: "dialog",
    dialogId: "ContactForm",
  },
  outroBotao: {
    label: "Botão Especial",
    type: "custom",
    callback: () => console.log("Callback custom"),
  },
};
