import { Button } from "@/components/ui/button";
import { Shield, Lock, AlertTriangle, CheckCircle } from "lucide-react";
const AntiTheftLock = () => {
  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre a trava automática antiarrombamento.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  return <section className="py-20 bg-gradient-to-br from-background via-yellow-400/10 to-primary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg mb-4 shadow-lg">
            <p className="font-montserrat font-black text-lg md:text-xl uppercase">🔒 PROTEÇÃO MÁXIMA 🔒</p>
          </div>
          <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-3 md:mb-4 px-4">
            Trava Automática Antiarrombamento
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground font-bold max-w-2xl mx-auto px-4 bg-yellow-400/30 py-3 rounded-lg border-2 border-primary/30">
            Além da automatização, oferecemos travas automáticas que garantem proteção total contra invasões
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <div className="space-y-4 mb-8">
              {[{
              icon: Lock,
              text: "Trava de alta resistência"
            }, {
              icon: Shield,
              text: "Impede abertura manual forçada"
            }, {
              icon: AlertTriangle,
              text: "Proteção mesmo em queda de energia (acionamento manual)"
            }, {
              icon: CheckCircle,
              text: "Compatível com todos os modelos de motores"
            }].map((item, index) => {
              const Icon = item.icon;
              return <div key={index} className="flex items-start gap-4 bg-background p-4 rounded-xl border-2 border-primary/30 shadow-md">
                    <div className="bg-gradient-to-br from-yellow-400 to-primary p-3 rounded-lg flex-shrink-0 shadow-lg">
                      <Icon className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                    </div>
                    <span className="text-base md:text-lg text-foreground font-semibold">{item.text}</span>
                  </div>;
            })}
            </div>

            <Button size="lg" className="w-full lg:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-black text-base md:text-xl px-8 py-6 md:py-7 rounded-xl shadow-lg transition-all hover:scale-105 border-2 border-primary" onClick={() => window.open(whatsappLink, '_blank')}>📞 ADICIONAR TRAVA AO ORÇAMENTO</Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-background rounded-2xl p-6 md:p-8 border-4 border-primary/50 shadow-[0_12px_40px_-4px_hsl(24_100%_50%/0.3)]">
              <div className="aspect-square bg-muted rounded-xl overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Trava Automática Antiarrombamento"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mt-6 text-center">
                <div className="inline-block bg-gradient-to-r from-yellow-400 to-primary px-3 sm:px-4 md:px-6 py-3 md:py-4 rounded-lg border-2 border-foreground/20 shadow-lg">
                  <div className="font-montserrat text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-foreground leading-tight">
                    A partir de R$\u00A0490
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-foreground/80 font-bold leading-tight mt-0.5">
                    ou 10x de R$\u00A049,00 sem juros
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-3 sm:-top-4 -right-2 sm:-right-4 bg-gradient-to-br from-yellow-400 to-primary text-foreground px-2 sm:px-3 md:px-4 lg:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-montserrat font-black shadow-lg border-2 border-foreground text-[10px] sm:text-xs md:text-sm lg:text-base whitespace-nowrap">
              +100 instalações
            </div>
            <div className="absolute -bottom-3 sm:-bottom-4 -left-2 sm:-left-4 bg-primary text-primary-foreground px-2 sm:px-3 md:px-4 lg:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-montserrat font-black shadow-lg border-2 border-primary-foreground text-[10px] sm:text-xs md:text-sm lg:text-base whitespace-nowrap">
              Garantia 2 anos
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AntiTheftLock;