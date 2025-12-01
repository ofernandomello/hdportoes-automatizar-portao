// Arquivo: src/ganchos/use-kommo-form.ts

// Primeiro, precisamos declarar para o TypeScript que essas variáveis do Kommo existem na window
declare global {
  interface Window {
    amo_forms_loaded?: (action: string) => void;
    amo_forms_load?: {
      f?: Array<[string]>;
    };
  }
}

// Este é o nosso hook customizado
export const useKommoForm = () => {
  const openForm = () => {
    console.log("Tentando abrir o formulário Kommo..."); // Adicionando um log para depuração

    if (window.amo_forms_loaded) {
      console.log("`amo_forms_loaded` encontrado. Chamando 'show'.");
      window.amo_forms_loaded("show");
    } else {
      console.log("`amo_forms_loaded` não encontrado. Usando o array `amo_forms_load`.");
      // Garante que a estrutura exista antes de adicionar o comando
      window.amo_forms_load = window.amo_forms_load || {};
      window.amo_forms_load.f = window.amo_forms_load.f || [];
      window.amo_forms_load.f.push(["show"]);
    }
  };

  // O hook retorna a função que podemos usar nos componentes
  return { openForm };
};
