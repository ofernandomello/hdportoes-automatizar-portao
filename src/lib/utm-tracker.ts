/**
 * Captura parâmetros UTM e de rastreamento da URL atual
 */
export const getUTMParams = () => {
  const urlParams = new URLSearchParams(window.location.search);
  
  return {
    utm_content: urlParams.get('utm_content') || '',
    utm_medium: urlParams.get('utm_medium') || '',
    utm_campaign: urlParams.get('utm_campaign') || '',
    utm_source: urlParams.get('utm_source') || '',
    utm_term: urlParams.get('utm_term') || '',
    utm_referrer: document.referrer || '',
    gclid: urlParams.get('gclid') || '',
    fbclid: urlParams.get('fbclid') || ''
  };
};

/**
 * Envia dados do formulário para o webhook do Make
 */
export const sendToWebhook = async (formData: Record<string, any>) => {
  const webhookUrl = 'https://hook.us1.make.com/081xj6h9mpbt48rhs8l1c4vtprq3l649';
  
  // Combina dados do formulário com UTMs
  const payload = {
    ...formData,
    ...getUTMParams(),
    timestamp: new Date().toISOString(),
    page_url: window.location.href
  };

  console.log('📤 Enviando dados para webhook:', payload);

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.text();
    console.log('✅ Resposta do webhook:', result);
    
    return { success: true, data: result };
  } catch (error) {
    console.error('❌ Erro ao enviar para webhook:', error);
    return { success: false, error };
  }
};
