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
    motor: "intermediario",
    nome: "",
    telefone: "",
    email: ""
  });

  const whatsappNumber = "5511999999999";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const motorTexto = {
      "leve": "Abertura em 4 Segundos - Portão Leve (350kg) - 10x R$ 167,00",
      "intermediario": "Abertura em 4 Segundos - Portão Intermediário (400kg) - 10x R$ 187,00",
      "pesado": "Abertura em 4 Segundos - Portão Pesado (450kg) - 10x R$ 207,00"
    };

    const tipoTexto = formData.tipo === "automatizacao" 
      ? "Automatização" 
      : "Automatização + Trava Automática";

    const message = encodeURIComponent(
      `Olá! Gostaria de um orçamento:\n\n` +
      `👤 Nome: ${formData.nome}\n` +
      `📞 Telefone: ${formData.telefone}\n` +
      `📧 Email: ${formData.email}\n\n` +
      `📍 Cidade: ${formData.cidade}\n` +
      `📍 Bairro: ${formData.bairro}\n` +
      `🔧 Serviço: ${tipoTexto}\n` +
      `🚗 Motor: ${motorTexto[formData.motor as keyof typeof motorTexto]}`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="formulario" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 md:mb-12 px-4">
            <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
              Solicite Seu Orçamento
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground">
              Preencha o formulário e receba uma proposta personalizada
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg space-y-4 md:space-y-6">
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
                Qual motor você deseja: *
              </Label>
              <RadioGroup
                value={formData.motor}
                onValueChange={(value) => setFormData({...formData, motor: value})}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3 bg-background/50 p-4 rounded-lg">
                  <RadioGroupItem value="leve" id="leve" />
                  <Label htmlFor="leve" className="cursor-pointer flex-1 font-normal">
                    Abertura em 4 Segundos - Portão Leve (350kg) - <span className="text-primary font-semibold">10x R$ 167,00</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 bg-background/50 p-4 rounded-lg">
                  <RadioGroupItem value="intermediario" id="intermediario" />
                  <Label htmlFor="intermediario" className="cursor-pointer flex-1 font-normal">
                    Abertura em 4 Segundos - Portão Intermediário (400kg) - <span className="text-primary font-semibold">10x R$ 187,00</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 bg-background/50 p-4 rounded-lg">
                  <RadioGroupItem value="pesado" id="pesado" />
                  <Label htmlFor="pesado" className="cursor-pointer flex-1 font-normal">
                    Abertura em 4 Segundos - Portão Pesado (450kg) - <span className="text-primary font-semibold">10x R$ 207,00</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="grid grid-cols-1 gap-6">
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
                  onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                  placeholder="Ex: (11) 99999-9999"
                  className="h-12"
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
