import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de automatizar meu portão.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6">
              Pronto Para Automatizar Seu Portão?
            </h2>
            <p className="text-xl text-background/80 mb-8">
              Fale com nossos especialistas agora e receba um orçamento personalizado
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold text-lg px-12 py-6 rounded-xl shadow-[0_20px_50px_-10px_hsl(142_76%_36%/0.4)] transition-all hover:scale-105"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Solicitar Orçamento Personalizado
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
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>(11) 99999-9999</span>
              </a>
              <a 
                href="mailto:contato@autoportao.com.br"
                className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>contato@autoportao.com.br</span>
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
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 14h</p>
                <p>Domingo: WhatsApp 24h</p>
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

      {/* WhatsApp Floating Button */}
      <button
        onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-[0_20px_50px_-10px_rgba(37,211,102,0.6)] transition-all hover:scale-110 z-50"
        aria-label="Preencher formulário no WhatsApp"
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
