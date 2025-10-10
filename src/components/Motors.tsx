import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";
const Motors = () => {
  const whatsappNumber = "5511999999999";
  const motors = [{
    name: "Motor Rápido Res.",
    subtitle: "Abertura em 9 Segundos (portões leves)",
    price: "Ou R$\u00A0999,00 à vista",
    installments: "10x a partir de R$\u00A099,90",
    features: ["Portões até 150kg", "Controles remotos inclusos", "Garantia de 12 meses", "Instalação profissional", "Sensor de segurança"],
    isHighlight: false,
    image: "/placeholder.svg"
  }, {
    name: "Motor Ultrarrápido",
    subtitle: "Abertura em 4 segundos (portões intermediários)",
    price: "Ou R$\u00A01.590 à vista",
    installments: "10x a partir de R$\u00A0159,00",
    features: ["Portões até 300kg", "3 controles remotos inclusos", "Garantia de 24 meses", "Instalação profissional", "Sensor de segurança duplo", "Abertura em 4 segundos", "Sistema anti-esmagamento"],
    isHighlight: true,
    image: "/placeholder.svg"
  }, {
    name: "Motor Industrial",
    subtitle: "Máxima performance",
    price: "Ou R$\u00A02.690 à vista",
    installments: "10x a partir de R$\u00A0269,00",
    features: ["Portões até 500kg", "4 controles remotos inclusos", "Garantia de 36 meses", "Instalação profissional", "Sistema completo de segurança", "Abertura em 3 segundos", "Motor silencioso", "Automação via smartphone"],
    isHighlight: false,
    image: "/placeholder.svg"
  }];
  const handleWhatsApp = (motorName: string) => {
    const message = encodeURIComponent(`Olá! Tenho interesse no ${motorName}. Gostaria de mais informações.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };
  return <section id="motores" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 px-4">Escolha o Motor PPA Ideal Para Você</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">Trabalhamos com o Motor PPA, a melhor marca do mercado. Parcelamento em até 10x sem juros.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {motors.map((motor, index) => <div key={index} className={`relative rounded-2xl p-6 md:p-8 transition-all ${motor.isHighlight ? 'bg-primary text-primary-foreground shadow-[0_20px_50px_-10px_hsl(24_100%_50%/0.4)] md:scale-105 lg:-my-4' : 'bg-card text-card-foreground shadow-[0_4px_20px_-2px_hsl(0_0%_0%/0.08)] hover:shadow-[0_8px_30px_-4px_hsl(0_0%_0%/0.12)]'}`}>
              {motor.isHighlight && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 text-background px-3 md:px-4 py-1 font-montserrat font-semibold text-xs md:text-sm bg-yellow-400">
                  <Star className="h-3 w-3 md:h-4 md:w-4 mr-1 inline" />
                  MAIS VENDIDO
                </Badge>}

              <div className="mb-4 md:mb-6">
                <div className="aspect-square bg-muted rounded-xl overflow-hidden">
                  <img 
                    src={motor.image} 
                    alt={motor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="text-center mb-6 md:mb-8">
                <h3 className="font-montserrat text-xl md:text-2xl font-bold mb-1">
                  {motor.name}
                </h3>
                <p className={`text-xs md:text-sm ${motor.isHighlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {motor.subtitle}
                </p>
              </div>

              <div className="text-center mb-8">
                <div className={`font-montserrat text-2xl sm:text-3xl md:text-4xl font-bold mb-2 whitespace-nowrap ${motor.isHighlight ? '' : 'text-foreground'}`}>
                  {motor.installments}
                </div>
                <div className={`text-xs sm:text-sm whitespace-nowrap ${motor.isHighlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {motor.price}
                </div>
              </div>

              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {motor.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start gap-2 md:gap-3">
                    <Check className={`h-4 w-4 md:h-5 md:w-5 flex-shrink-0 mt-0.5 ${motor.isHighlight ? 'text-primary-foreground' : 'text-primary'}`} />
                    <span className={`text-sm md:text-base ${motor.isHighlight ? "text-primary-foreground" : "text-card-foreground"}`}>
                      {feature}
                    </span>
                  </li>)}
              </ul>

              <Button className={`w-full font-montserrat font-semibold py-5 md:py-6 text-base md:text-lg rounded-xl transition-all ${motor.isHighlight ? 'bg-background text-foreground hover:bg-background/90 shadow-lg' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`} onClick={() => handleWhatsApp(motor.name)}>
                Solicitar Orçamento
              </Button>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Motors;