
import React, { useRef } from 'react';
import { Card } from '@/components/ui/card';
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
        style={{ background: 'linear-gradient(90deg, transparent, rgba(95,145,255,0.45), transparent)' }}
      />
      {/* Ambient top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(95,145,255,0.09) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      {/* Side glow */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 border border-blue-500/20">
            <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-elevix-blue" />
            <span className="text-blue-300 font-semibold text-xs sm:text-sm">Suas Dúvidas, Respondidas.</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Dúvidas Que Podem Estar{' '}
            <span className="text-elevix-blue">Impedindo Seu Crescimento</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Respondemos as principais objeções antes mesmo que você as verbalize. Transparência total da{' '}
            <span className="text-elevix-blue font-semibold">Orion Company</span>.
          </p>
        </div>

        {/* Main Content */}
        <div>
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(30,144,255,0.08) 0%, rgba(15,20,25,0.95) 50%, rgba(37,168,245,0.05) 100%)',
              border: '1px solid rgba(30,144,255,0.2)',
              boxShadow: '0 0 30px rgba(30,144,255,0.1)',
              backdropFilter: 'blur(10px)',
            }}
          >
            {/* Top glow line on card */}
            <div
              className="h-px w-full"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(30,144,255,0.5), transparent)' }}
            />
            {/* Radial light source */}
            <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none" style={{ background: 'radial-gradient(circle at 100% 0%, rgba(37,168,245,0.06) 0%, transparent 70%)' }} />
            <div className="relative z-10 p-4 sm:p-6 md:p-8">
              <Accordion type="single" collapsible className="space-y-2 sm:space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="rounded-xl px-3 sm:px-6 py-1 transition-all duration-300 hover:shadow-[0_0_20px_rgba(30,144,255,0.1)]"
                    style={{
                      background: 'linear-gradient(135deg, rgba(30,144,255,0.04) 0%, rgba(15,20,25,0.8) 100%)',
                      border: '1px solid rgba(30,144,255,0.12)',
                    }}
                  >
                    <AccordionTrigger className="text-left text-white hover:text-[#1E90FF] font-semibold py-3 sm:py-5 group hover:no-underline">
                      <h3 className="font-bold text-sm sm:text-base leading-snug group-hover:text-[#1E90FF] transition-colors pr-2 text-left">
                        {faq.question}
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="leading-relaxed pb-3 sm:pb-5 pt-1">
                      <p style={{ color: 'rgba(255,255,255,0.85)' }} className="leading-relaxed text-sm">
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
