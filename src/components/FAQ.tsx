import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Quanto tempo demora a instalação?",
      answer: "A instalação completa é realizada em apenas 1 dia. Nossa equipe chega preparada com todas as ferramentas e peças necessárias. Em casos especiais que exigem adaptações, pode levar até 2 dias."
    },
    {
      question: "O motor funciona em qualquer tipo de portão?",
      answer: "Sim! Trabalhamos com portões de correr, basculantes e pivotantes. Nossa equipe avalia seu portão antes da instalação para garantir a escolha do motor ideal conforme o peso e tamanho."
    },
    {
      question: "E se der problema, vocês fazem manutenção?",
      answer: "Com certeza! Oferecemos garantia de fábrica e suporte técnico completo. Se houver qualquer problema durante a garantia, consertamos sem custo adicional. Após a garantia, fazemos manutenção com valores justos."
    },
    {
      question: "O motor aumenta muito o consumo de energia?",
      answer: "Não! Os motores modernos são super econômicos. O consumo médio mensal fica entre R$ 5 e R$ 10 na conta de luz, dependendo da frequência de uso."
    },
    {
      question: "Quantos controles remotos vêm inclusos?",
      answer: "Depende do modelo escolhido. O Motor Básico vem com 2 controles, o Premium com 3 e o Industrial com 4. Controles adicionais podem ser adquiridos posteriormente."
    },
    {
      question: "O portão abre se faltar energia?",
      answer: "Sim! Todos os nossos motores possuem sistema de desbloqueio manual. Em caso de falta de energia, você consegue abrir e fechar o portão manualmente com facilidade."
    },
    {
      question: "A trava antiarrombamento realmente funciona?",
      answer: "Com toda certeza! A trava eletromecânica impede que o portão seja forçado ou arrombado. Mesmo desligado ou sem energia, o portão permanece travado, garantindo máxima segurança."
    },
    {
      question: "Vocês atendem minha região?",
      answer: "Atendemos São Paulo e toda Grande São Paulo, incluindo: Santo André, São Bernardo do Campo, São Caetano do Sul, Diadema, Mauá, Guarulhos, Osasco, Barueri, Carapicuíba, Cotia, Taboão da Serra, Embu das Artes, Itapecerica da Serra, Ferraz de Vasconcelos, Poá, Suzano, Mogi das Cruzes, Arujá, Mairiporã, Caieiras, Franco da Rocha, Francisco Morato, Cajamar, Jandira, Itapevi, Santana de Parnaíba, Pirapora do Bom Jesus e região do ABC."
    },
    {
      question: "Como funciona o parcelamento?",
      answer: "Trabalhamos com parcelamento em até 10x sem juros no cartão de crédito. Também aceitamos PIX, transferência bancária e dinheiro com desconto especial."
    },
    {
      question: "Posso instalar sozinho se eu tiver conhecimento?",
      answer: "Não recomendamos. A instalação incorreta pode danificar o motor e anular a garantia. Nossa instalação profissional garante o funcionamento perfeito e a segurança do sistema."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-foreground mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre automatização de portões
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 shadow-[0_4px_20px_-2px_hsl(0_0%_0%/0.08)] border-0"
              >
                <AccordionTrigger className="text-left font-montserrat font-semibold text-lg hover:text-primary py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
