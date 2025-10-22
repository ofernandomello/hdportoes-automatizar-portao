/**
 * Google Tag Manager (GTM) Integration
 * 
 * Este arquivo contém funções helpers para interagir com o GTM dataLayer.
 * 
 * Como testar no GTM:
 * 1. Acesse o painel do GTM (tagmanager.google.com)
 * 2. Vá em "Preview" (Visualizar)
 * 3. Insira a URL do seu site
 * 4. Envie um formulário
 * 5. No painel de debug, você verá o evento 'form_submit' com todos os dados
 */

// Declara o tipo do dataLayer para TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
}

/**
 * Inicializa o dataLayer se não existir
 */
export const initDataLayer = () => {
  window.dataLayer = window.dataLayer || [];
};

/**
 * Separa nome completo em first_name e last_name
 */
export const splitName = (fullName: string) => {
  const parts = fullName.trim().split(' ');
  const firstName = parts[0] || '';
  const lastName = parts.slice(1).join(' ') || '';
  
  return { firstName, lastName };
};

/**
 * Remove máscara do telefone e formata no padrão internacional brasileiro
 * Exemplo: (11) 99999-9999 -> 5511999999999
 */
export const cleanPhone = (phone: string): string => {
  // Remove todos os caracteres não numéricos
  const cleaned = phone.replace(/\D/g, '');
  
  // Adiciona o código do país (55) se não tiver
  if (cleaned.length === 11) {
    return `55${cleaned}`;
  }
  
  return cleaned;
};

/**
 * Dispara evento de envio de formulário para o GTM
 */
export const pushFormSubmitEvent = (formName: string, formData: {
  nome: string;
  email: string;
  telefone: string;
  [key: string]: any;
}) => {
  initDataLayer();
  
  const { firstName, lastName } = splitName(formData.nome);
  const cleanedPhone = cleanPhone(formData.telefone);
  
  const eventData = {
    event: 'form_submit',
    form_name: formName,
    form_data: {
      first_name: firstName,
      last_name: lastName,
      email: formData.email,
      phone: cleanedPhone,
      ...Object.keys(formData).reduce((acc, key) => {
        if (!['nome', 'email', 'telefone'].includes(key)) {
          acc[key] = formData[key];
        }
        return acc;
      }, {} as Record<string, any>)
    },
    success: true
  };
  
  window.dataLayer.push(eventData);
  console.log('🏷️ GTM Event Pushed:', eventData);
};
