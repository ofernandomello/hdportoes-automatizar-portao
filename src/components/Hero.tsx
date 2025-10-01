import { Button } from "@/components/ui/button";
import { Phone, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-gate.jpg";
const Hero = () => {
  const whatsappNumber = "5511999999999"; // Número do WhatsApp
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre a automatização de portões.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  return <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Portão automatizado moderno" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="font-montserrat text-5xl md:text-6xl lg:text-7xl font-bold text-background mb-6 leading-tight">
            Automatize Seu Portão com 
            <span className="text-primary"> Segurança</span> e 
            <span className="text-primary"> Praticidade</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-background/90 mb-8 leading-relaxed">Chegue em casa sem precisar descer do carro. Abertura em 4 segundos, instalação profissional e parcelamento em até 10x sem juros.</p>

          {/* Benefits List */}
          <div className="space-y-3 mb-10">
            {["Abertura em apenas 4 segundos", "Parcelamento em 10x sem juros", "Instalação profissional com garantia", "Aumento da segurança da sua família"].map((benefit, index) => <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-background text-lg">{benefit}</span>
              </div>)}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold text-lg px-8 py-6 rounded-xl shadow-[0_20px_50px_-10px_hsl(142_76%_36%/0.4)] transition-all hover:scale-105" onClick={() => window.open(whatsappLink, '_blank')}>
              <Phone className="mr-2 h-5 w-5" />
              Falar com Especialista
            </Button>
            
            <Button size="lg" variant="outline" className="bg-background/10 backdrop-blur-sm hover:bg-background/20 text-background border-2 border-background/30 font-montserrat font-semibold text-lg px-8 py-6 rounded-xl transition-all" onClick={() => document.getElementById('motores')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Ver Modelos
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-background/50 rounded-full mt-2" />
        </div>
      </div>
    </section>;
};
export default Hero;