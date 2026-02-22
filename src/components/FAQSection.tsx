
import React, { useRef } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const faqs = [{
    question: "O que é a Metodologia Orion de Alavancagem?",
    answer: "É o nosso sistema exclusivo de trabalho, que garante organização, delegação eficiente, prazos claros e um rigoroso controle de qualidade em todos os projetos. Ela foi desenvolvida para assegurar que cada solução entregue pela Orion gere resultados reais e mensuráveis para o seu negócio."
  }, {
    question: "A Orion atende qualquer tipo de empresa?",
    answer: "A Orion atende empresas de todos os segmentos. Nossa metodologia foi desenvolvida para funcionar independentemente do mercado — o que muda é a estratégia, não a qualidade da entrega."
  }, {
    question: "Quais tipos de serviços a Orion oferece?",
    answer: "Oferecemos um ecossistema completo de soluções digitais, incluindo Gestão de Tráfego Pago, Planejamento Estratégico, Identidade Visual, Criação de Conteúdo, Otimização de Conversão (CRO) e Automação de Atendimento — tudo integrado em uma operação única para a sua empresa."
  }, {
    question: "Como a Orion garante os resultados?",
    answer: "Nosso compromisso com resultados é fundamentado na nossa Metodologia Orion de Alavancagem, que inclui um diagnóstico aprofundado, estratégias personalizadas, execução de alta performance e otimização contínua baseada em dados. Além disso, nosso histórico de sucesso e os depoimentos de nossos clientes comprovam a eficácia da nossa abordagem."
  }, {
    question: "Como posso começar a trabalhar com a Orion?",
    answer: "O primeiro passo é agendar uma Consultoria Estratégica Gratuita com nossos especialistas. Nela, vamos entender suas necessidades e apresentar um plano de ação inicial para o seu negócio. Você pode agendar diretamente pelo nosso WhatsApp."
  }, {
    question: "Quanto tempo leva para meu projeto ficar pronto?",
    answer: "Nosso prazo médio é de até 7 dias corridos para projetos de criação de lojas e sites, mas pode variar conforme a complexidade do projeto. Para gestão de tráfego e outros serviços, o início é imediato. Garantimos agilidade sem comprometer a qualidade."
  }, {
    question: "Eu preciso ter conhecimento técnico para trabalhar com vocês?",
    answer: "Não. Nossa entrega inclui projetos funcionais e intuitivos, além de suporte completo. Cuidamos de toda a parte técnica para que você possa focar apenas no crescimento do seu negócio."
  }, {
    question: "Posso solicitar alterações após a entrega?",
    answer: "Sim. Incluímos um período de revisões para ajustes e melhorias, garantindo que seu projeto fique exatamente como você deseja e atenda todas as suas expectativas."
  }];

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 bg-black overflow-hidden"
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,209,255,0.45), transparent)' }}
      />
      {/* Light ellipse top */}
      <div className="light-ellipse" style={{ top: '-80px', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '300px' }} />
      {/* Side glow */}
      <div className="light-ellipse" style={{ top: '100px', right: '-80px', width: '400px', height: '400px', opacity: 0.3 }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#00D1FF]/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 border border-[#00D1FF]/20 backdrop-blur-sm">
            <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#00D1FF]" />
            <span className="text-[#00D1FF] font-semibold text-xs sm:text-sm">Suas Dúvidas, Respondidas.</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Dúvidas Que Podem Estar{' '}
            <span className="title-neon">Impedindo Seu Crescimento</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Respondemos as principais objeções antes mesmo que você as verbalize. Transparência total da{' '}
            <span className="text-[#00D1FF] font-semibold">Orion Company</span>.
          </p>
        </div>

        {/* Main Content — glassmorphism */}
        <div>
          <div className="rounded-2xl overflow-hidden glass-card-strong">
            {/* Top glow line on card */}
            <div
              className="h-px w-full"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(0,209,255,0.5), transparent)' }}
            />
            <div className="p-4 sm:p-6 md:p-8">
              <Accordion type="single" collapsible className="space-y-2 sm:space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="border border-white/8 rounded-xl bg-white/3 backdrop-blur-sm px-3 sm:px-6 py-1 hover:bg-white/5 hover:border-[#00D1FF]/20 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left text-white hover:text-[#00D1FF] font-semibold py-3 sm:py-5 group hover:no-underline">
                      <h3 className="font-bold text-sm sm:text-base leading-snug group-hover:text-[#00D1FF] transition-colors pr-2 text-left">
                        {faq.question}
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 leading-relaxed pb-3 sm:pb-5 pt-1">
                      <p className="text-slate-300 leading-relaxed text-sm">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
