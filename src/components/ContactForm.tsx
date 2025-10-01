import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    cidade: "",
    bairro: "",
    tipo: "automatizacao",
    velocidade: "4s"
  });

  const whatsappNumber = "5511999999999";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const velocidadeTexto = {
      "4s": "Em até 4s (10x a partir de R$ 269)",
      "9s": "Em até 9s (10x a partir de R$ 189)",
      "16s": "Em até 16s (10x a partir de R$ 129)"
    };

    const tipoTexto = formData.tipo === "automatizacao" 
      ? "Automatização" 
      : "Automatização + Trava Automática";

    const message = encodeURIComponent(
      `Olá! Gostaria de um orçamento:\n\n` +
      `📍 Cidade: ${formData.cidade}\n` +
      `📍 Bairro: ${formData.bairro}\n` +
      `🔧 Serviço: ${tipoTexto}\n` +
      `⚡ Velocidade: ${velocidadeTexto[formData.velocidade as keyof typeof velocidadeTexto]}`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="formulario" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-foreground mb-4">
              Solicite Seu Orçamento
            </h2>
            <p className="text-xl text-muted-foreground">
              Preencha o formulário e receba uma proposta personalizada
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-lg space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                className="space-y-3"
              >
                <div className="flex items-center space-x-3 bg-background/50 p-4 rounded-lg">
                  <RadioGroupItem value="automatizacao" id="automatizacao" />
                  <Label htmlFor="automatizacao" className="cursor-pointer flex-1 font-normal">
                    Automatização
                  </Label>
                </div>
                <div className="flex items-center space-x-3 bg-background/50 p-4 rounded-lg">
                  <RadioGroupItem value="automatizacao-trava" id="automatizacao-trava" />
                  <Label htmlFor="automatizacao-trava" className="cursor-pointer flex-1 font-normal">
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
                className="space-y-3"
              >
                <div className="flex items-center space-x-3 bg-background/50 p-4 rounded-lg">
                  <RadioGroupItem value="4s" id="4s" />
                  <Label htmlFor="4s" className="cursor-pointer flex-1 font-normal">
                    Em até 4s <span className="text-primary font-semibold">(10x a partir de R$ 269)</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 bg-background/50 p-4 rounded-lg">
                  <RadioGroupItem value="9s" id="9s" />
                  <Label htmlFor="9s" className="cursor-pointer flex-1 font-normal">
                    Em até 9s <span className="text-primary font-semibold">(10x a partir de R$ 189)</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 bg-background/50 p-4 rounded-lg">
                  <RadioGroupItem value="16s" id="16s" />
                  <Label htmlFor="16s" className="cursor-pointer flex-1 font-normal">
                    Em até 16s <span className="text-primary font-semibold">(10x a partir de R$ 129)</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <Button 
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold text-lg py-6 rounded-xl shadow-[0_20px_50px_-10px_hsl(142_76%_36%/0.4)] transition-all hover:scale-105"
            >
              Enviar via WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
