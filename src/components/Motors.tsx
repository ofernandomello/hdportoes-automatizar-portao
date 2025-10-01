import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";
const Motors = () => {
  const whatsappNumber = "5511999999999";
  const motors = [{
    name: "Motor Básico",
    subtitle: "Ideal para portões leves",
    price: "R$ 1.290",
    installments: "ou 10x de R$ 129,00",
    features: ["Portões até 150kg", "Controles remotos inclusos", "Garantia de 12 meses", "Instalação profissional", "Sensor de segurança"],
    isHighlight: false
  }, {
    name: "Motor Premium",
    subtitle: "Mais vendido",
    price: "R$ 1.890",
    installments: "ou 10x de R$ 189,00",
    features: ["Portões até 300kg", "3 controles remotos inclusos", "Garantia de 24 meses", "Instalação profissional", "Sensor de segurança duplo", "Abertura em 4 segundos", "Sistema anti-esmagamento"],
    isHighlight: true
  }, {
    name: "Motor Industrial",
    subtitle: "Máxima performance",
    price: "R$ 2.690",
    installments: "ou 10x de R$ 269,00",
    features: ["Portões até 500kg", "4 controles remotos inclusos", "Garantia de 36 meses", "Instalação profissional", "Sistema completo de segurança", "Abertura em 3 segundos", "Motor silencioso", "Automação via smartphone"],
    isHighlight: false
  }];
  const handleWhatsApp = (motorName: string) => {
    const message = encodeURIComponent(`Olá! Tenho interesse no ${motorName}. Gostaria de mais informações.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };
  return <section id="motores" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-foreground mb-4">Escolha o Motor PPA Ideal Para Você</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Trabalhamos com o Motor PPA, a melhor marca do mercado. Parcelamento em até 10x sem juros.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {motors.map((motor, index) => <div key={index} className={`relative rounded-2xl p-8 transition-all ${motor.isHighlight ? 'bg-primary text-primary-foreground shadow-[0_20px_50px_-10px_hsl(142_76%_36%/0.4)] scale-105 lg:-my-4' : 'bg-card text-card-foreground shadow-[0_4px_20px_-2px_hsl(0_0%_0%/0.08)] hover:shadow-[0_8px_30px_-4px_hsl(0_0%_0%/0.12)]'}`}>
              {motor.isHighlight && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 text-background px-4 py-1 font-montserrat font-semibold bg-yellow-400">
                  <Star className="h-4 w-4 mr-1 inline" />
                  MAIS VENDIDO
                </Badge>}

              <div className="text-center mb-8">
                <h3 className="font-montserrat text-2xl font-bold mb-1">
                  {motor.name}
                </h3>
                <p className={motor.isHighlight ? "text-primary-foreground/80" : "text-muted-foreground"}>
                  {motor.subtitle}
                </p>
              </div>

              <div className="text-center mb-8">
                <div className="font-montserrat text-4xl font-bold mb-2">
                  {motor.price}
                </div>
                <div className={motor.isHighlight ? "text-primary-foreground/80" : "text-muted-foreground"}>
                  {motor.installments}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {motor.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${motor.isHighlight ? 'text-primary-foreground' : 'text-primary'}`} />
                    <span className={motor.isHighlight ? "text-primary-foreground" : "text-card-foreground"}>
                      {feature}
                    </span>
                  </li>)}
              </ul>

              <Button className={`w-full font-montserrat font-semibold py-6 text-lg rounded-xl transition-all ${motor.isHighlight ? 'bg-background text-foreground hover:bg-background/90 shadow-lg' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`} onClick={() => handleWhatsApp(motor.name)}>
                Solicitar Orçamento
              </Button>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Motors;