import { Button } from "@/components/ui/button";
import { Shield, Lock, AlertTriangle, CheckCircle } from "lucide-react";
const AntiTheftLock = () => {
  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre a trava automática antiarrombamento.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  return <section className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
              <Shield className="h-5 w-5" />
              <span className="font-montserrat font-semibold">Segurança Máxima</span>
            </div>

            <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-6">
              Trava Automática Antiarrombamento
            </h2>

            <p className="text-xl text-background/80 mb-8 leading-relaxed">
              Além da automatização, oferecemos travas automáticas que garantem 
              proteção total contra invasões. Seu portão fica travado mesmo quando desligado.
            </p>

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
              text: "Compatível com todos os modelos de motor"
            }].map((item, index) => {
              const Icon = item.icon;
              return <div key={index} className="flex items-start gap-4">
                    <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-lg text-background/90">{item.text}</span>
                  </div>;
            })}
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold text-lg px-8 py-6 rounded-xl shadow-[0_20px_50px_-10px_hsl(142_76%_36%/0.4)] transition-all hover:scale-105" onClick={() => window.open(whatsappLink, '_blank')}>Adicionar Trava ao Orçamento</Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 border border-background/20">
              <div className="aspect-square bg-muted rounded-xl overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Trava Automática Antiarrombamento"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mt-6 text-center">
                <div className="font-montserrat text-3xl font-bold mb-2">
                  A partir de R$ 490
                </div>
                <div className="text-background/70">
                  ou 10x de R$ 49,00 sem juros
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-montserrat font-bold shadow-lg">
              +100 instalações
            </div>
            <div className="absolute -bottom-4 -left-4 bg-background text-foreground px-6 py-3 rounded-xl font-montserrat font-bold shadow-lg">
              Garantia 2 anos
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AntiTheftLock;