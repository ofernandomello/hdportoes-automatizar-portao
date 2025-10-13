import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import heroGate from "@/assets/hero-gate.jpg";
const Hero = () => {
  const whatsappNumber = "5511999999999"; // Número do WhatsApp
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre a automatização de portões.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-yellow-400/10">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url(${heroGate})`
        }}
      />
      
      {/* Diagonal stripes pattern for factory feel */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, hsl(var(--primary)) 0px, hsl(var(--primary)) 2px, transparent 2px, transparent 10px)'
      }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Factory Direct Badge */}
          <div className="inline-block mb-4 md:mb-6">
            <div className="bg-yellow-400 text-foreground px-6 py-2 md:px-8 md:py-3 rounded-lg shadow-[0_4px_15px_hsl(24_100%_50%/0.4)] border-2 border-primary">
              <p className="font-montserrat font-black text-xl md:text-2xl lg:text-3xl uppercase tracking-wide">
                ⚡ PREÇO DIRETO DE FÁBRICA ⚡
              </p>
            </div>
          </div>
          
          <h1 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground mb-4 md:mb-6 leading-tight px-4 drop-shadow-lg">
            Automatize Seu Portão com Motor PPA
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground font-semibold mb-6 md:mb-8 leading-relaxed px-4 max-w-3xl mx-auto bg-background/90 py-4 rounded-lg">
            Qual é o preço que você pode pagar por ficar parado em frente de casa, esperando o portão abrir por um tempo que na madrugada parece ser uma eternidade?
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10 max-w-2xl mx-auto px-4">
            {["Abertura em apenas 4 segundos", "Preço diretamente da fábrica", "Instalação profissional com garantia", "Pagamento no cartão após a instalação"].map((benefit, index) => <div key={index} className="flex items-center gap-2 md:gap-3 text-left bg-background border-2 border-primary p-3 md:p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="bg-primary rounded-full p-1">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground flex-shrink-0" />
                </div>
                <span className="text-sm md:text-base lg:text-lg text-foreground font-bold">
                  {benefit}
                </span>
              </div>)}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-yellow-400 hover:from-primary/90 hover:to-yellow-400/90 text-foreground font-montserrat font-black text-base md:text-xl px-8 md:px-12 py-6 md:py-8 rounded-xl shadow-[0_8px_30px_hsl(24_100%_50%/0.6)] hover:shadow-[0_12px_40px_hsl(24_100%_50%/0.8)] transition-all border-2 border-foreground/20 animate-pulse"
              onClick={() => {
                const message = encodeURIComponent("Olá! Quero automatizar meu portão. Gostaria de mais informações.");
                window.open(`https://wa.me/5511921349917?text=${message}`, '_blank');
              }}
            >
              🔥 AUTOMATIZAR MEU PORTÃO 🔥
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-background hover:bg-background/90 text-foreground border-2 border-primary font-montserrat font-bold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-xl transition-all hover:scale-105"
              onClick={() => document.getElementById('motores')?.scrollIntoView({
                behavior: 'smooth'
              })}
            >
              Ver Modelos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
const VideoSection = () => {
  return <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-foreground mb-4">
              Veja Como Funciona
            </h2>
            <p className="text-lg text-muted-foreground">
              Assista nosso motor em ação
            </p>
          </div>
          <div className="aspect-video bg-muted rounded-2xl shadow-lg flex items-center justify-center">
            <p className="text-muted-foreground">Espaço reservado para vídeo</p>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
export { VideoSection };