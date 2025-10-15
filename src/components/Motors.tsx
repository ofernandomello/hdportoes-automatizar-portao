import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";
import motorA from "@/assets/motor-a.jpeg";
import motorB from "@/assets/motor-b.jpeg";
import motorC from "@/assets/motor-c.jpeg";
import logoPPA from "@/assets/logo-ppa.png";
const Motors = () => {
  const whatsappNumber = "5511999999999";
  const motors = [{
    name: "Portão Leve (350kg)",
    subtitle: "Abertura em 4 Segundos",
    installments: "10x de 167",
    image: motorA
  }, {
    name: "Portão Intermediário (400kg)",
    subtitle: "Abertura em 4 Segundos",
    installments: "10x de 187",
    isHighlight: true,
    image: motorB
  }, {
    name: "Portão Pesado (450kg)",
    subtitle: "Abertura em 4 Segundos",
    installments: "10x de 207",
    image: motorC
  }];
  const handleWhatsApp = (motorName: string) => {
    const message = encodeURIComponent(`Olá! Tenho interesse no ${motorName}. Gostaria de mais informações.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };
  return <section id="motores" className="py-20 bg-gradient-to-br from-yellow-400/20 via-background to-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg mb-4 shadow-lg">
            <p className="font-montserrat font-black text-lg md:text-xl uppercase">💰 Preços Imbatíveis 💰</p>
          </div>
          <div className="flex items-center justify-center gap-3 mb-3 md:mb-4">
            <h2 className="font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground px-4">Motor PPA em 10x s/ juros com o kit instalado</h2>
            <img src={logoPPA} alt="PPA Logo" className="h-8 md:h-12 lg:h-16 object-contain" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto items-start">
          {/* Motors - sempre em linha */}
          <div className="flex-1 w-full overflow-x-auto">
            <div className="flex gap-2 sm:gap-3 md:gap-4 min-w-max lg:min-w-0 lg:grid lg:grid-cols-3 pb-4 lg:pb-0">
              {motors.map((motor, index) => <div key={index} className={`relative rounded-xl p-3 sm:p-4 md:p-6 transition-all border-2 min-w-[140px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-0 ${motor.isHighlight ? 'bg-gradient-to-br from-yellow-400 to-primary text-foreground shadow-lg border-foreground' : 'bg-background text-card-foreground shadow-md border-primary/50'}`}>
                  {motor.isHighlight && <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 text-foreground px-2 py-1 font-montserrat font-black text-[8px] sm:text-[10px] bg-yellow-400 border-2 border-foreground shadow-lg animate-pulse whitespace-nowrap">
                      <Star className="h-2 w-2 sm:h-3 sm:w-3 mr-0.5 inline fill-current" />
                      MAIS VENDIDO
                    </Badge>}

                  <div className="mb-3 md:mb-4">
                    <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                      <img 
                        src={motor.image} 
                        alt={motor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="text-center mb-3 md:mb-4">
                    <h3 className="font-montserrat text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1">
                      {motor.name}
                    </h3>
                    <p className={`text-[10px] sm:text-xs md:text-sm ${motor.isHighlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                      {motor.subtitle}
                    </p>
                  </div>

                  <div className="text-center">
                    <div className={`inline-block bg-gradient-to-r from-yellow-400 to-primary px-2 sm:px-3 md:px-4 py-2 rounded-lg border-2 border-foreground/20 shadow-lg`}>
                      <div className="font-montserrat text-sm sm:text-base md:text-lg lg:text-xl font-black text-foreground leading-tight">
                        {motor.installments}
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="w-full lg:w-64 lg:sticky lg:top-4">
            <div className="bg-background border-2 border-primary rounded-xl p-4 md:p-6 shadow-lg text-center">
              <p className="font-montserrat text-sm md:text-base lg:text-lg font-bold text-foreground mb-4">
                Quer ajuda para escolher a melhor opção?
              </p>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-black text-xs sm:text-sm md:text-base px-4 py-4 md:py-6 rounded-xl shadow-lg transition-all hover:scale-105 border-2 border-primary"
                onClick={() => {
                  const message = encodeURIComponent("Olá! Preciso de ajuda para escolher o melhor motor PPA para meu portão.");
                  window.open(`https://wa.me/5511921349917?text=${message}`, '_blank');
                }}
              >
                Quero ajuda para escolher
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Motors;