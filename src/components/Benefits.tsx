import { Shield, Clock, TrendingUp, Wrench, CheckCircle2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Benefits = () => {
  const whatsappNumber = "5511921349917";
  const whatsappMessage = encodeURIComponent("Olá! Quero automatizar meu portão em 4 segundos.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const benefits = [
    {
      icon: Shield,
      title: "Máxima Segurança",
      description: "Evite assaltos e invasões. Nunca mais desça do carro para abrir o portão manualmente."
    },
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Abertura em apenas 4 segundos. Chegue e saia de casa com praticidade total."
    },
    {
      icon: TrendingUp,
      title: "Preço Direto de Fábrica",
      description: "Compre diretamente da fábrica sem intermediários. Economia garantida e qualidade certificada."
    },
    {
      icon: Wrench,
      title: "Instalação Profissional",
      description: "Equipe técnica certificada com anos de experiência e garantia total do serviço."
    },
    {
      icon: CheckCircle2,
      title: "Garantia",
      description: "Garantia de fábrica + suporte técnico dedicado."
    },
    {
      icon: Lock,
      title: "Proteção Antiarrombamento",
      description: "Travas automáticas que impedem a abertura forçada do portão. *Solicitadas separadamente."
    }
  ];

  return (
    <section className="py-20 pb-0 bg-gradient-to-br from-yellow-400/20 via-background to-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg mb-4 shadow-lg">
            <p className="font-montserrat font-black text-lg md:text-xl uppercase">💎 BENEFÍCIOS EXCLUSIVOS 💎</p>
          </div>
          <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-3 md:mb-4 px-4">
            Por Que Automatizar Seu Portão?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground font-bold max-w-2xl mx-auto px-4 bg-yellow-400/30 py-3 rounded-lg border-2 border-primary/30">
            Transforme sua rotina com mais conforto, segurança e praticidade para toda a família
          </p>
        </div>

        <div className="grid grid-cols-[minmax(300px,400px)] justify-center md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-background rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_-4px_hsl(0_0%_0%/0.15)] hover:shadow-[0_12px_40px_-4px_hsl(24_100%_50%/0.3)] transition-all hover:-translate-y-1 border-4 border-primary/50 flex flex-col items-center text-center"
              >
                <div className="bg-gradient-to-br from-yellow-400 to-primary w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 md:mb-6 shadow-lg">
                  <Icon className="h-6 w-6 md:h-8 md:w-8 text-foreground" />
                </div>
                <h3 className="font-montserrat text-lg md:text-xl font-black text-card-foreground mb-2 md:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="whitespace-normal bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-black text-base md:text-xl px-8 md:px-12 py-6 md:py-7 rounded-xl shadow-lg hover:scale-105 transition-all border-2 border-primary"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            📞 AUTOMATIZAR MEU PORTÃO AGORA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
