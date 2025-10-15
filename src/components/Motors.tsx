import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";
import motorA from "@/assets/motor-a.jpeg";
import motorB from "@/assets/motor-b.jpeg";
import motorC from "@/assets/motor-c.jpeg";
import logoPPA from "@/assets/logo-ppa.webp";
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
        {/* Banner Principal */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="bg-gradient-to-r from-yellow-400 via-primary to-yellow-500 rounded-2xl shadow-2xl overflow-hidden border-4 border-foreground">
            <div className="flex items-center justify-between px-6 md:px-8 py-4 md:py-6">
              <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground">
                10x sem juros - Kit Instalado
              </h2>
              <img src={logoPPA} alt="PPA Logo" className="h-12 md:h-16 lg:h-20 object-contain bg-background rounded px-3 py-2" />
            </div>
            
            {/* Motors Grid */}
            <div className="bg-gradient-to-br from-yellow-400/80 to-primary/80 px-4 md:px-8 py-6 md:py-8">
              <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                {motors.map((motor, index) => <div key={index} className={`relative bg-background rounded-xl p-2 sm:p-3 md:p-4 lg:p-6 transition-all border-2 shadow-lg ${motor.isHighlight ? 'border-foreground ring-4 ring-yellow-400' : 'border-primary/50'}`}>
                    {motor.isHighlight && <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 text-foreground px-1.5 sm:px-2 py-0.5 sm:py-1 font-montserrat font-black text-[8px] sm:text-[10px] bg-yellow-400 border-2 border-foreground shadow-lg animate-pulse whitespace-nowrap">
                        <Star className="h-2 w-2 sm:h-3 sm:w-3 mr-0.5 inline fill-current" />
                        MAIS VENDIDO
                      </Badge>}

                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                        <img 
                          src={motor.image} 
                          alt={motor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="text-center mb-2 sm:mb-3">
                      <h3 className="font-montserrat text-[10px] sm:text-xs md:text-sm lg:text-base font-bold mb-0.5 sm:mb-1">
                        {motor.name}
                      </h3>
                      <p className="text-[8px] sm:text-[10px] md:text-xs text-muted-foreground">
                        {motor.subtitle}
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="bg-gradient-to-r from-yellow-400 to-primary px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg border-2 border-foreground/20 shadow-lg">
                        <div className="font-montserrat text-xs sm:text-sm md:text-base lg:text-xl font-black text-foreground leading-tight">
                          {motor.installments}
                        </div>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-background border-2 border-primary rounded-xl p-4 md:p-6 shadow-lg text-center">
            <p className="font-montserrat text-sm md:text-base lg:text-lg font-bold text-foreground mb-4">
              Quer ajuda para escolher a melhor opção?
            </p>
            <Button 
              className="w-full max-w-md mx-auto bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-black text-xs sm:text-sm md:text-base px-4 py-4 md:py-6 rounded-xl shadow-lg transition-all hover:scale-105 border-2 border-primary"
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
    </section>;
};
export default Motors;