import { Shield, Clock, TrendingUp, Wrench, CheckCircle2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Benefits = () => {
  const whatsappNumber = "5511999999999";
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
      title: "Valorização do Imóvel",
      description: "Automatização aumenta o valor de mercado da sua residência em até 15%."
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
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por Que Automatizar Seu Portão?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforme sua rotina com mais conforto, segurança e praticidade para toda a família
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-[0_4px_20px_-2px_hsl(0_0%_0%/0.08)] hover:shadow-[0_8px_30px_-4px_hsl(0_0%_0%/0.12)] transition-all hover:-translate-y-1"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-montserrat text-xl font-bold text-card-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold text-lg px-12 py-6 rounded-xl shadow-[0_20px_50px_-10px_hsl(142_76%_36%/0.4)] transition-all hover:scale-105"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            Automatizar Meu Portão
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
