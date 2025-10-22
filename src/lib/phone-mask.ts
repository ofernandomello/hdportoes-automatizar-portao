/**
 * Utilitário para máscara de telefone brasileiro
 * Formato: (11) 99999-9999
 */

/**
 * Aplica máscara de telefone brasileiro
 */
export const formatPhoneBR = (value: string): string => {
  // Remove tudo que não é dígito
  const cleaned = value.replace(/\D/g, '');
  
  // Aplica a máscara conforme o usuário digita
  if (cleaned.length <= 2) {
    return cleaned;
  } else if (cleaned.length <= 7) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
  } else if (cleaned.length <= 11) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`;
  }
  
  // Limita a 11 dígitos
  return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`;
};

/**
 * Remove a máscara e retorna apenas os números
 */
export const unformatPhone = (value: string): string => {
  return value.replace(/\D/g, '');
};
