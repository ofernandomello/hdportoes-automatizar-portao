import { useEffect, useRef } from "react";

const KommoForm = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Executar o script inline PRIMEIRO para registrar callbacks e params no window
    // Isso é essencial - o Kommo espera que amo_forms_load e amo_forms_loaded estejam definidas
    const inline = document.createElement("script");
    inline.innerHTML = `!function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1634531",hash:"fc9e67c2d83d238681f8a57461fffe03",locale:"pt"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");`;
    document.head.appendChild(inline);

    // Delay pequeno para garantir que o inline foi executado
    const timer = setTimeout(() => {
      if (containerRef.current) {
        // Injetar o script externo DENTRO do container
        // Isso força o Kommo a renderizar o formulário no local certo
        const script = document.createElement("script");
        script.id = "amoforms_script_1634531";
        script.async = true;
        script.charset = "utf-8";
        script.src = "https://forms.kommo.com/forms/assets/js/amoforms.js?1764632958";
        containerRef.current.appendChild(script);

        return () => {
          // cleanup: remover script criado
          script.remove();
        };
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      // inline script não precisa remover (document.head vai gerenciar)
    };
  }, []);

  return (
    <section id="formulario" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 md:mb-12 px-4">
            <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
              Solicite Seu Orçamento
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground">
              Preencha o formulário abaixo para receber uma proposta personalizada
            </p>
          </div>

          {/* Container onde o Kommo vai renderizar o formulário */}
          <div className="flex justify-center" ref={containerRef} id="amoforms_widget_container_1634531" />
        </div>
      </div>
    </section>
  );
};

export default KommoForm;
