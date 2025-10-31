import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWhatsAppDialog } from "@/hooks/use-whatsapp-dialog";

const Testimonials = () => {
  const { openDialog } = useWhatsAppDialog();
  const whatsappNumber = "5511921349917";
  const whatsappMessage = encodeURIComponent("Olá! Vi os depoimentos e quero automatizar meu portão com Motor PPA.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const testimonials = [
    {
      name: "Cleide Santos",
      location: "Cliente Google",
      text: "Foi uma surpresa, fui atendida pelo profissional Adriano, excelente atendimento, atendente Jaqueline onde me proporcionou o melhor preço e qualidade, recomendo sem medo a melhor empresa do ramo, amei.",
      rating: 5
    },
    {
      name: "Arthur Barbosa",
      location: "Cliente Google",
      text: "Jaqueline foi incrivelmente prestativa, e já tenho o portão instalado e o motor está funcionando perfeitamente. Gostaria de destacar o técnico que veio instalar (Marcos). Ele fez um ótimo trabalho, explicou tudo claramente, não deixou bagunça e me deu todas as instruções de manutenção. Estou muito satisfeito!",
      rating: 5
    },
    {
      name: "Anderson Souza",
      location: "Cliente Google - Guia Local",
      text: "Excelente pré-atendimento via WhatsApp; nunca vi um atendimento tão rápido e eficiente. Gostei do serviço prestado pelo técnico que veio à minha casa; ele foi muito profissional e atencioso.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Centenas de famílias já automatizaram seus portões com nosso Motor PPA
          </p>
        </div>

        <div className="grid grid-cols-[minmax(300px,400px)] justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-4 sm:p-5 md:p-6 shadow-[0_4px_20px_-2px_hsl(0_0%_0%/0.08)] hover:shadow-[0_8px_30px_-4px_hsl(0_0%_0%/0.12)] transition-all"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-card-foreground mb-4 leading-relaxed italic text-sm">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-3">
                <div className="font-montserrat font-semibold text-card-foreground text-sm">
                  {testimonial.name}
                </div>
                <div className="text-muted-foreground text-xs">
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 md:mt-16 flex flex-wrap justify-center items-center gap-6 md:gap-8 text-center px-4">
          <div>
            <div className="font-montserrat text-3xl md:text-4xl font-bold text-primary mb-2">241</div>
            <div className="text-muted-foreground text-sm md:text-base">Avaliações no Google</div>
          </div>
          <div className="h-12 w-px bg-border hidden md:block" />
          <div>
            <div className="font-montserrat text-3xl md:text-4xl font-bold text-primary mb-2">5.0★</div>
            <div className="text-muted-foreground text-sm md:text-base">Nota no Google</div>
          </div>
          <div className="h-12 w-px bg-border hidden md:block" />
          <div>
            <div className="font-montserrat text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground text-sm md:text-base">Anos de Experiência</div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold text-lg px-12 py-6 rounded-xl shadow-[0_20px_50px_-10px_hsl(142_76%_36%/0.4)] transition-all hover:scale-105"
            actionKey="contatoWhatsApp"
          >
            Quero Esse Resultado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
