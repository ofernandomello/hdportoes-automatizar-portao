import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { sendToWebhook } from "@/lib/utm-tracker";
import { formatPhoneBR } from "@/lib/phone-mask";
import { pushFormSubmitEvent } from "@/lib/gtm";

const WhatsAppButton = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    cidade: "",
    bairro: "",
    tipo: "automatizacao",
    velocidade: "4s",
    nome: "",
    telefone: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whatsappNumber = "5511921349917";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const velocidadeTexto = {
      "4s": "Em até 4s (10x a partir de R$ 269)",
      "9s": "Em até 9s (10x a partir de R$ 189)",
      "16s": "Em até 16s (10x a partir de R$ 129)"
    };

    const tipoTexto = formData.tipo === "automatizacao" 
      ? "Automatização" 
      : "Automatização + Trava Automática";

    // Envia dados para o webhook
    const webhookResult = await sendToWebhook({
      nome: formData.nome,
      telefone: formData.telefone,
      email: formData.email,
      cidade: formData.cidade,
      bairro: formData.bairro,
      tipo_servico: tipoTexto,
      velocidade: velocidadeTexto[formData.velocidade as keyof typeof velocidadeTexto],
      form_source: 'WhatsAppButton'
    });

    if (webhookResult.success) {
      // Dispara evento para GTM após envio bem-sucedido
      pushFormSubmitEvent('whatsapp_form', {
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        cidade: formData.cidade,
        bairro: formData.bairro,
        tipo_servico: tipoTexto,
        velocidade: velocidadeTexto[formData.velocidade as keyof typeof velocidadeTexto]
      });

      toast({
        title: "Dados enviados com sucesso!",
        description: "Você será redirecionado para o WhatsApp.",
      });

      const message = encodeURIComponent(
        `Olá! Gostaria de um orçamento:\n\n` +
        `👤 Nome: ${formData.nome}\n` +
        `📞 Telefone: ${formData.telefone}\n` +
        `📧 Email: ${formData.email}\n\n` +
        `📍 Cidade: ${formData.cidade}\n` +
        `📍 Bairro: ${formData.bairro}\n` +
        `🔧 Serviço: ${tipoTexto}\n` +
        `⚡ Velocidade: ${velocidadeTexto[formData.velocidade as keyof typeof velocidadeTexto]}`
      );

      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
      setOpen(false);
    } else {
      toast({
        title: "Erro ao enviar dados",
        description: "Houve um problema, mas você pode continuar pelo WhatsApp.",
        variant: "destructive"
      });

      // Mesmo com erro no webhook, permite envio pelo WhatsApp
      const message = encodeURIComponent(
        `Olá! Gostaria de um orçamento:\n\n` +
        `👤 Nome: ${formData.nome}\n` +
        `📞 Telefone: ${formData.telefone}\n` +
        `📧 Email: ${formData.email}\n\n` +
        `📍 Cidade: ${formData.cidade}\n` +
        `📍 Bairro: ${formData.bairro}\n` +
        `🔧 Serviço: ${tipoTexto}\n` +
        `⚡ Velocidade: ${velocidadeTexto[formData.velocidade as keyof typeof velocidadeTexto]}`
      );

      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
      setOpen(false);
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white p-5 rounded-full shadow-[0_20px_50px_-10px_rgba(37,211,102,0.6)] transition-all hover:scale-110 z-50"
        aria-label="Solicitar orçamento via WhatsApp"
      >
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-montserrat text-2xl sm:text-3xl">
              Solicite Seu Orçamento
            </DialogTitle>
            <DialogDescription className="text-base">
              Preencha o formulário e receba uma proposta personalizada
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cidade" className="text-base font-montserrat">
                  Cidade *
                </Label>
                <Input
                  id="cidade"
                  required
                  value={formData.cidade}
                  onChange={(e) => setFormData({...formData, cidade: e.target.value})}
                  placeholder="Ex: São Paulo"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bairro" className="text-base font-montserrat">
                  Bairro *
                </Label>
                <Input
                  id="bairro"
                  required
                  value={formData.bairro}
                  onChange={(e) => setFormData({...formData, bairro: e.target.value})}
                  placeholder="Ex: Jardim Paulista"
                  className="h-12"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-base font-montserrat">
                Quero orçamento para: *
              </Label>
              <RadioGroup
                value={formData.tipo}
                onValueChange={(value) => setFormData({...formData, tipo: value})}
                className="space-y-2"
              >
                <div className="flex items-center space-x-3 bg-background/50 p-3 rounded-lg">
                  <RadioGroupItem value="automatizacao" id="popup-automatizacao" />
                  <Label htmlFor="popup-automatizacao" className="cursor-pointer flex-1 font-normal">
                    Automatização
                  </Label>
                </div>
                <div className="flex items-center space-x-3 bg-background/50 p-3 rounded-lg">
                  <RadioGroupItem value="automatizacao-trava" id="popup-automatizacao-trava" />
                  <Label htmlFor="popup-automatizacao-trava" className="cursor-pointer flex-1 font-normal">
                    Automatização + Trava Automática
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-3">
              <Label className="text-base font-montserrat">
                Preferência de tempo de abertura do portão: *
              </Label>
              <RadioGroup
                value={formData.velocidade}
                onValueChange={(value) => setFormData({...formData, velocidade: value})}
                className="space-y-2"
              >
                <div className="flex items-center space-x-3 bg-background/50 p-3 rounded-lg">
                  <RadioGroupItem value="4s" id="popup-4s" />
                  <Label htmlFor="popup-4s" className="cursor-pointer flex-1 font-normal text-sm sm:text-base">
                    Em até 4s <span className="text-primary font-semibold">(10x a partir de R$ 269)</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 bg-background/50 p-3 rounded-lg">
                  <RadioGroupItem value="9s" id="popup-9s" />
                  <Label htmlFor="popup-9s" className="cursor-pointer flex-1 font-normal text-sm sm:text-base">
                    Em até 9s <span className="text-primary font-semibold">(10x a partir de R$ 189)</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 bg-background/50 p-3 rounded-lg">
                  <RadioGroupItem value="16s" id="popup-16s" />
                  <Label htmlFor="popup-16s" className="cursor-pointer flex-1 font-normal text-sm sm:text-base">
                    Em até 16s <span className="text-primary font-semibold">(10x a partir de R$ 129)</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-base font-montserrat">
                  Nome Completo *
                </Label>
                <Input
                  id="nome"
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  placeholder="Ex: João Silva"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefone" className="text-base font-montserrat">
                  Telefone/WhatsApp *
                </Label>
                <Input
                  id="telefone"
                  required
                  type="tel"
                  value={formData.telefone}
                  onChange={(e) => setFormData({...formData, telefone: formatPhoneBR(e.target.value)})}
                  placeholder="Ex: (11) 99999-9999"
                  className="h-12"
                  maxLength={15}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-montserrat">
                  E-mail *
                </Label>
                <Input
                  id="email"
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Ex: joao@email.com"
                  className="h-12"
                />
              </div>
            </div>

            <Button 
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold text-lg py-6 rounded-xl shadow-[0_20px_50px_-10px_hsl(142_76%_36%/0.4)] transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Enviar via WhatsApp"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WhatsAppButton;
