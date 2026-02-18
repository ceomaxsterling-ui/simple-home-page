
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { HelpCircle, ChevronRight, MessageCircle, CheckCircle, Store, ShoppingCart, TrendingUp } from 'lucide-react';

const FAQSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('faq');
      if (element) {
        const rect = element.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <section id="faq" className="py-12 sm:py-20 bg-gradient-to-br from-black via-slate-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl" style={{
          transform: `translateY(${scrollProgress * 30}px)`,
          opacity: scrollProgress * 0.2
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16" style={{
          transform: `translateY(${Math.max(0, 30 - scrollProgress * 30)}px)`,
          opacity: Math.min(1, scrollProgress * 1.5)
        }}>
          <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 border border-blue-500/20">
            <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-elevix-blue" />
            <span className="text-blue-300 font-semibold text-sm sm:text-base">Suas Dúvidas, Respondidas.</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Tudo que você precisa saber antes de dar o próximo passo com a{' '}
            <span className="text-elevix-blue font-semibold">Orion Company</span>.
          </p>
        </div>

        {/* Main Content - Layout Modificado */}
        <div className="space-y-8 lg:space-y-12" style={{
          transform: `translateY(${Math.max(0, 20 - scrollProgress * 20)}px)`,
          opacity: Math.min(1, scrollProgress * 1.2)
        }}>
          
          {/* FAQ Section - Centralizado */}
          <div className="w-full max-w-5xl mx-auto">
            <Card className="bg-slate-900/60 border-slate-700/50 backdrop-blur-sm overflow-hidden w-full">
              <div className="p-4 sm:p-8">
                <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`} 
                      className="border border-slate-700/30 rounded-xl bg-slate-800/30 px-4 sm:px-6 py-2 hover:bg-slate-800/50 transition-all duration-300"
                    >
                      <AccordionTrigger className="text-left text-white hover:text-elevix-blue font-semibold py-4 sm:py-6 group hover:no-underline">
                        <h3 className="font-bold text-base sm:text-lg leading-tight group-hover:text-elevix-blue transition-colors pr-2 text-left">
                          {faq.question}
                        </h3>
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-300 leading-relaxed pb-4 sm:pb-6 pt-2">
                        <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                          {faq.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
