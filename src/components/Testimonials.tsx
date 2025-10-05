import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent("Olá! Vi os depoimentos e quero automatizar meu portão com Motor PPA.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const testimonials = [
    {
      name: "Carlos Mendes",
      location: "São Paulo, SP",
      text: "Melhor investimento que fiz na minha casa! Não preciso mais me preocupar ao chegar tarde da noite. A instalação foi rápida e o pessoal muito profissional.",
      rating: 5
    },
    {
      name: "Ana Paula Silva",
      location: "Campinas, SP",
      text: "Estava com medo de investir, mas valeu muito a pena. O parcelamento em 10x facilitou demais. Agora meus filhos chegam em casa com segurança.",
      rating: 5
    },
    {
      name: "Roberto Oliveira",
      location: "Santo André, SP",
      text: "Automatizei o portão e coloquei a trava antiarrombamento. Durmo muito mais tranquilo sabendo que minha família está protegida. Recomendo!",
      rating: 5
    },
    {
      name: "Juliana Costa",
      location: "São Bernardo, SP",
      text: "Achei que seria muito caro, mas o preço estava dentro do orçamento. O melhor é que não preciso mais descer do carro na chuva!",
      rating: 5
    },
    {
      name: "Marcos Ferreira",
      location: "Guarulhos, SP",
      text: "Equipe pontual e serviço impecável. Explicaram tudo sobre a manutenção e deixaram tudo funcionando perfeitamente. Muito satisfeito!",
      rating: 5
    },
    {
      name: "Patricia Santos",
      location: "Osasco, SP",
      text: "A praticidade que trouxe para o dia a dia é incrível. Meus vizinhos viram e já pediram indicação. Valorizou muito minha casa!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Centenas de famílias já automatizaram seus portões com nosso Motor PPA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-[0_4px_20px_-2px_hsl(0_0%_0%/0.08)] hover:shadow-[0_8px_30px_-4px_hsl(0_0%_0%/0.12)] transition-all"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-card-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="font-montserrat font-semibold text-card-foreground">
                  {testimonial.name}
                </div>
                <div className="text-muted-foreground text-sm">
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-center">
          <div>
            <div className="font-montserrat text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Portões Automatizados</div>
          </div>
          <div className="h-12 w-px bg-border hidden md:block" />
          <div>
            <div className="font-montserrat text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Satisfação dos Clientes</div>
          </div>
          <div className="h-12 w-px bg-border hidden md:block" />
          <div>
            <div className="font-montserrat text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Anos de Experiência</div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold text-lg px-12 py-6 rounded-xl shadow-[0_20px_50px_-10px_hsl(142_76%_36%/0.4)] transition-all hover:scale-105"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            Quero Esse Resultado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
