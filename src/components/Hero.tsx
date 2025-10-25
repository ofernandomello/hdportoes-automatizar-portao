import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import heroGate from "@/assets/hero-gate.jpg";
const Hero = () => {
  const whatsappNumber = "5511921349917"; // Número do WhatsApp
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre a automatização de portões.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  return <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-yellow-400/10">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{
      backgroundImage: `url(${heroGate})`
    }} />
      
      {/* Diagonal stripes pattern for factory feel */}
      <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: 'repeating-linear-gradient(45deg, hsl(var(--primary)) 0px, hsl(var(--primary)) 2px, transparent 2px, transparent 10px)'
    }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Factory Direct Badge */}
          <div className="inline-block mb-4 md:mb-6 px-2">
            <div className="bg-yellow-400 text-foreground px-3 sm:px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-lg shadow-[0_4px_15px_hsl(24_100%_50%/0.4)] border-2 border-primary">
              <p className="font-montserrat font-black text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl uppercase tracking-wide">
                ⚡ PREÇO DIRETO DE FÁBRICA ⚡
              </p>
            </div>
          </div>
          
          <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-foreground mb-4 md:mb-6 leading-tight px-4 drop-shadow-lg">
            Motor Ultra Rápido PPA<br />
            Pagamento Após a Instalação
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground font-semibold mb-6 md:mb-8 leading-relaxed px-4 max-w-3xl mx-auto bg-background/90 py-3 md:py-4 rounded-lg">
            Cada segundo parado na rua é um risco. O PPA JetFlex Ultra Rápido abre rápido, protege sua família e traz a tranquilidade que você merece ao chegar em casa.
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-8 lg:mb-10 max-w-2xl mx-auto px-4">
            {["Abertura em apenas 4 segundos", "Controle anti-clonagem", "Instalador especializado PPA", "Pagamento no cartão após a instalação"].map((benefit, index) => <div key={index} className="flex items-center gap-2 md:gap-3 text-left bg-background border-2 border-primary p-2 sm:p-3 md:p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="bg-primary rounded-full p-1">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-primary-foreground flex-shrink-0" />
                </div>
                <span className="text-xs sm:text-sm md:text-base lg:text-lg text-foreground font-bold leading-tight">
                  {benefit}
                </span>
              </div>)}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
            <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-yellow-400 hover:from-primary/90 hover:to-yellow-400/90 text-foreground font-montserrat font-black text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-5 md:py-6 lg:py-7 rounded-xl shadow-[0_8px_30px_hsl(24_100%_50%/0.6)] hover:shadow-[0_12px_40px_hsl(24_100%_50%/0.8)] transition-all border-2 border-foreground/20 animate-pulse" onClick={() => {
            const message = encodeURIComponent("Olá! Quero automatizar meu portão. Gostaria de mais informações.");
            window.open(`https://wa.me/5511921349917?text=${message}`, '_blank');
          }}>
              🔥 AUTOMATIZAR MEU PORTÃO 🔥
            </Button>
            
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-background hover:bg-background/90 text-foreground border-2 border-primary font-montserrat font-bold text-sm sm:text-base md:text-lg px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 rounded-xl transition-all hover:scale-105" onClick={() => document.getElementById('motores')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Ver Modelos
            </Button>
          </div>
        </div>
      </div>
    </section>;
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
          <div className="aspect-video bg-muted rounded-2xl shadow-lg overflow-hidden">
            <video 
              controls 
              className="w-full h-full"
              poster="/thumb-video-secao-2.png"
            >
              <source src="/video-secao-2.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
export { VideoSection };