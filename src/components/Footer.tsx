import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useWhatsAppDialog } from "@/hooks/use-whatsapp-dialog";

const Footer = () => {
  const { openDialog } = useWhatsAppDialog();

  return (
    <footer className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Pronto Para Automatizar Seu Portão?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-background/80 mb-6 md:mb-8">
              Fale com nossos especialistas agora e receba um orçamento personalizado
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-12 py-5 md:py-6 rounded-xl shadow-[0_20px_50px_-10px_hsl(142_76%_36%/0.4)] transition-all hover:scale-105"
              onClick={openDialog}
            >
              <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              <span className="hidden sm:inline">Solicitar Orçamento Personalizado</span>
              <span className="sm:hidden">Solicitar Orçamento</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact */}
          <div>
            <h3 className="font-montserrat text-xl font-bold mb-4 text-primary">
              Contato
            </h3>
            <div className="space-y-3">
              <button 
                onClick={openDialog}
                className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors cursor-pointer"
              >
                <Phone className="h-5 w-5" />
                <span>(11) 92134-9917</span>
              </button>
              <a 
                href="mailto:comercial.grupohd@gmail.com"
                className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>comercial.grupohd@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-montserrat text-xl font-bold mb-4 text-primary">
              Horário de Atendimento
            </h3>
            <div className="flex items-start gap-3 text-background/80">
              <Clock className="h-5 w-5 mt-1 flex-shrink-0" />
              <div>
                <p>Segunda a Sexta: 9h às 17h</p>
              </div>
            </div>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="font-montserrat text-xl font-bold mb-4 text-primary">
              Área de Atendimento
            </h3>
            <div className="flex items-start gap-3 text-background/80">
              <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
              <div>
                <p>São Paulo Capital</p>
                <p>Grande São Paulo</p>
                <p>ABC Paulista</p>
                <p>Guarulhos e Região</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat text-xl font-bold mb-4 text-primary">
              Serviços
            </h3>
            <ul className="space-y-2 text-background/80">
              <li>Automatização de Portões</li>
              <li>Travas Antiarrombamento</li>
              <li>Manutenção Preventiva</li>
              <li>Instalação Profissional</li>
              <li>Suporte Técnico</li>
              <li>Eliminação de batida</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-background/60 text-sm">
            <p>© {new Date().getFullYear()} HD VIVENDO DE PORTÕES LTDA. Todos os direitos reservados.</p>
            <p className="mt-2">CNPJ: 37.985.203/0001-94 | Instalações certificadas e garantidas</p>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
