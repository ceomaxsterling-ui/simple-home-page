import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Clock, Users, TrendingUp, MessageCircle, CheckCircle2, Sparkles, ArrowRight, Phone, ChevronDown, Store, ShoppingCart } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { WHATSAPP_URL } from '@/config/links';

const ConsultancySection = () => {
  const [openCards, setOpenCards] = useState<Record<string, boolean>>({});
  const sectionRef = useRef<HTMLElement>(null);

  const handleWhatsAppRedirect = () => {
    window.open(WHATSAPP_URL, '_blank');
  };

  const toggleCard = (cardId: string) => {
    setOpenCards((prev) => ({ ...prev, [cardId]: !prev[cardId] }));
  };

  const benefits = [
  {
    id: 'analise',
    icon: TrendingUp,
    title: "Diagnóstico Real da Sua Empresa",
    expandedContent: "Vamos entender onde sua empresa está, o que está travando o crescimento e quais são os pontos mais críticos para endereçar agora. Uma análise honesta, sem rodeios."
  },
  {
    id: 'oportunidades',
    icon: Users,
    title: "O Que Você Ainda Não Está Aproveitando",
    expandedContent: "Mapeamos os pontos de alavancagem que têm maior impacto no seu faturamento — e que você pode começar a explorar imediatamente."
  },
  {
    id: 'plano',
    icon: Sparkles,
    title: "Sua Rota de Crescimento",
    expandedContent: "Você sai da conversa com clareza: o que fazer primeiro, por onde começar e qual o caminho mais inteligente para sua empresa crescer."
  },
  {
    id: 'compromisso',
    icon: CheckCircle2,
    title: "100% Focado em Você",
    expandedContent: "Sem script de vendas. Sem pressão. Uma conversa honesta, focada no que é melhor para a sua empresa — e nada mais."
  }];


  const processSteps = [
  {
    step: 1,
    title: "Agendamento rápido e flexível",
    description: "Entre em contato e escolha o melhor horário para conversar"
  },
  {
    step: 2,
    title: "Análise profunda do seu negócio",
    description: "Revisamos seu negócio, mercado e estratégias atuais"
  },
  {
    step: 3,
    title: "Identificação de oportunidades",
    description: "Mapeamos as melhores oportunidades e otimizações prioritárias"
  },
  {
    step: 4,
    title: "Plano de ação personalizado",
    description: "Criamos um roadmap específico para escalar seus resultados"
  }];


  const targetAudience = [
  {
    icon: "universal",
    title: "Qualquer Empresa com Ambição",
    description: "A consultoria é para qualquer empresa que acredita que pode crescer mais. Se você tem uma empresa, tem ambição e tem a sensação de que está deixando oportunidades na mesa — essa conversa é para você."
  }];


  return (
    <section
      id="consultoria"
      ref={sectionRef}
      className="relative py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">

      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="consultancy-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
              <radialGradient id="grid-gradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1E90FF" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#1E90FF" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#consultancy-grid)" className="text-elevix-blue" />
            <rect width="100%" height="100%" fill="url(#grid-gradient)" />
          </svg>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-500/15 to-blue-500/10 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-gradient-to-tl from-blue-500/10 to-blue-500/15 rounded-full blur-3xl opacity-40" />

        {/* Particle Effect */}
        <div className="absolute inset-0 bg-black">
          {[...Array(15)].map((_, i) =>
          <div
            key={i}
            className="absolute w-2 h-2 bg-elevix-blue/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }} />

          )}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto">
          {/* Header with Badge - Mobile Optimized */}
          <div className="text-center mb-12 md:mb-16 px-3 sm:px-0">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
              
              <span className="text-elevix-blue font-semibold text-sm sm:text-base">Sua Primeira Missão Começa Aqui </span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-elevix-blue" />
            </div>
            
            {/* Mobile optimized headline - Mais espaçamento vertical e largura */}
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 sm:mb-6 leading-[1.15] sm:leading-tight px-1 sm:px-4">
                Uma Conversa Que Pode Mudar a{' '}
                <span className="bg-clip-text bg-gradient-to-r from-elevix-blue via-blue-400 to-blue-400 text-primary">
                  Trajetória da Sua Empresa.
                </span>
              </h2>
            </div>
            
            {/* Mobile optimized subheadline - Fonte menor e mais largura */}
            <div className="max-w-5xl mx-auto">
              <p className="text-base sm:text-xl md:text-2xl text-gray-300 leading-relaxed px-2 sm:px-6">
                Sem compromisso, sem custo, sem enrolação. Nossos especialistas analisam sua empresa e entregam um diagnóstico honesto — com as{' '}
                <span className="text-elevix-blue font-bold">oportunidades que você ainda não está aproveitando</span>.
              </p>
            </div>
          </div>

          {/* Main Layout - Responsive */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Side - Content - Mobile Centralized */}
            <div className="space-y-6 sm:space-y-8">
              {/* What You'll Get - Collapsible Cards - Mobile Centered */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-elevix-blue" />
                  O Que Você Receberá
                </h3>
                
                {/* Mobile Centered Cards Container */}
                <div className="space-y-3 sm:space-y-4 max-w-md sm:max-w-none mx-auto sm:mx-0">
                  {benefits.map((benefit, index) =>
                  <Collapsible
                    key={benefit.id}
                    open={openCards[benefit.id]}
                    onOpenChange={() => toggleCard(benefit.id)}>

                      <CollapsibleTrigger
                      className="w-full"
                      style={{ animationDelay: `${index * 100}ms` }}>

                        <div className="relative flex items-center justify-between p-4 sm:p-4 rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(30,144,255,0.15)]" style={{
                          background: 'linear-gradient(135deg, rgba(30,144,255,0.08) 0%, rgba(15,20,25,0.9) 100%)',
                          border: '1px solid rgba(30,144,255,0.2)',
                          boxShadow: '0 0 15px rgba(30,144,255,0.08)',
                          backdropFilter: 'blur(10px)',
                        }}>
                          <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none" style={{ background: 'radial-gradient(circle at 100% 0%, rgba(37,168,245,0.06) 0%, transparent 70%)' }} />
                          <div className="relative z-10 flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                            <div className="p-1.5 sm:p-2 rounded-xl flex-shrink-0" style={{ background: 'rgba(30,144,255,0.1)', border: '1px solid rgba(30,144,255,0.25)' }}>
                              <benefit.icon className="w-4 h-4 sm:w-6 sm:h-6 text-[#1E90FF]" style={{ filter: 'drop-shadow(0 0 8px rgba(30,144,255,0.6))' }} />
                            </div>
                            <span className="text-sm sm:text-lg font-medium text-left leading-tight" style={{ color: '#FFFFFF' }}>{benefit.title}</span>
                          </div>
                          <ChevronDown
                          className={`relative z-10 w-4 h-4 sm:w-5 sm:h-5 text-[#1E90FF] transition-transform duration-300 flex-shrink-0 ml-2 ${
                          openCards[benefit.id] ? 'rotate-180' : ''}`
                          } />

                        </div>
                      </CollapsibleTrigger>
                      
                      <CollapsibleContent className="overflow-hidden">
                        <div className="p-3 sm:p-4 mt-2 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(30,144,255,0.06) 0%, rgba(15,20,25,0.85) 100%)', border: '1px solid rgba(30,144,255,0.12)', backdropFilter: 'blur(10px)' }}>
                          <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>{benefit.expandedContent}</p>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  )}
                </div>
              </div>

              {/* Target Audience - Para Quem é a Consultoria - ACORDEÃO */}
              <div className="max-w-md sm:max-w-none mx-auto sm:mx-0">
                <Collapsible
                  open={openCards['target-audience']}
                  onOpenChange={() => toggleCard('target-audience')}>

                  <CollapsibleTrigger className="w-full">
                    <div className="relative rounded-2xl p-6 sm:p-8 cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(37,168,245,0.25)]" style={{
                      background: 'linear-gradient(135deg, rgba(30,144,255,0.12) 0%, rgba(15,20,25,0.95) 50%, rgba(37,168,245,0.08) 100%)',
                      border: '1px solid rgba(30,144,255,0.2)',
                      boxShadow: '0 0 30px rgba(30,144,255,0.15)',
                      backdropFilter: 'blur(10px)',
                    }}>
                      <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none" style={{ background: 'radial-gradient(circle at 100% 0%, rgba(37,168,245,0.08) 0%, transparent 70%)' }} />
                      <div className="relative z-10 flex items-center justify-between">
                        <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2 sm:gap-3" style={{ color: '#FFFFFF' }}>
                          <Users className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#1E90FF', filter: 'drop-shadow(0 0 8px rgba(30,144,255,0.6))' }} />
                          Para Quem é a Consultoria?
                        </h3>
                        <ChevronDown
                          className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 flex-shrink-0 ${
                          openCards['target-audience'] ? 'rotate-180' : ''}`}
                          style={{ color: '#1E90FF' }}
                          />
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent className="overflow-hidden">
                    <div className="mt-4 rounded-2xl p-4 sm:p-6" style={{ background: 'linear-gradient(135deg, rgba(30,144,255,0.06) 0%, rgba(15,20,25,0.85) 100%)', border: '1px solid rgba(30,144,255,0.12)', backdropFilter: 'blur(10px)' }}>
                      <div className="grid gap-4">
                        {targetAudience.map((audience, index) =>
                        <div
                          key={index}
                          className="relative flex items-start space-x-4 p-4 sm:p-5 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(30,144,255,0.15)]"
                          style={{ background: 'linear-gradient(135deg, rgba(30,144,255,0.08) 0%, rgba(15,20,25,0.9) 100%)', border: '1px solid rgba(30,144,255,0.15)' }}>
                            <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none" style={{ background: 'radial-gradient(circle at 100% 0%, rgba(37,168,245,0.06) 0%, transparent 70%)' }} />
                            <div className="relative z-10 p-2 sm:p-2.5 rounded-xl flex-shrink-0" style={{ background: 'rgba(30,144,255,0.1)', border: '1px solid rgba(30,144,255,0.25)' }}>
                              <Users className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#1E90FF', filter: 'drop-shadow(0 0 8px rgba(30,144,255,0.6))' }} />
                            </div>
                            <div className="relative z-10 flex-1 text-left">
                              <h5 className="font-semibold text-base sm:text-lg mb-1" style={{ color: '#FFFFFF' }}>{audience.title}</h5>
                              <p className="text-sm sm:text-base" style={{ color: 'rgba(255,255,255,0.85)' }}>{audience.description}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>

              {/* Process Steps - Collapsible - Mobile Centered */}
              <div className="max-w-md sm:max-w-none mx-auto sm:mx-0">
                <Collapsible
                  open={openCards['process']}
                  onOpenChange={() => toggleCard('process')}>

                  <CollapsibleTrigger className="w-full">
                    <div className="relative rounded-2xl p-6 sm:p-8 cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(37,168,245,0.25)]" style={{
                      background: 'linear-gradient(135deg, rgba(30,144,255,0.12) 0%, rgba(15,20,25,0.95) 50%, rgba(37,168,245,0.08) 100%)',
                      border: '1px solid rgba(30,144,255,0.2)',
                      boxShadow: '0 0 30px rgba(30,144,255,0.15)',
                      backdropFilter: 'blur(10px)',
                    }}>
                      <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none" style={{ background: 'radial-gradient(circle at 100% 0%, rgba(37,168,245,0.08) 0%, transparent 70%)' }} />
                      <div className="relative z-10 flex items-center justify-between">
                        <h4 className="text-lg sm:text-xl font-bold flex items-center gap-2 sm:gap-3" style={{ color: '#FFFFFF' }}>
                          <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#1E90FF', filter: 'drop-shadow(0 0 8px rgba(30,144,255,0.6))' }} />
                          Como Funciona
                        </h4>
                        <ChevronDown
                          className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 flex-shrink-0 ${
                          openCards['process'] ? 'rotate-180' : ''}`}
                          style={{ color: '#1E90FF' }}
                          />
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent className="overflow-hidden">
                    <div className="mt-4 rounded-2xl p-4 sm:p-6" style={{ background: 'linear-gradient(135deg, rgba(30,144,255,0.06) 0%, rgba(15,20,25,0.85) 100%)', border: '1px solid rgba(30,144,255,0.12)', backdropFilter: 'blur(10px)' }}>
                      <div className="space-y-3 sm:space-y-4">
                        {processSteps.map((step, index) =>
                        <div key={index} className="relative flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(30,144,255,0.06) 0%, rgba(15,20,25,0.8) 100%)', border: '1px solid rgba(30,144,255,0.12)' }}>
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0" style={{ background: 'rgba(30,144,255,0.1)', border: '1px solid rgba(30,144,255,0.25)', color: '#1E90FF' }}>
                              {step.step}
                            </div>
                            <div className="text-left">
                              <h5 className="font-medium text-sm sm:text-base" style={{ color: '#FFFFFF' }}>{step.title}</h5>
                              <p className="text-xs sm:text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{step.description}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>

            {/* Right Side - CTA Card - Mobile Perfectly Centered */}
            <div className="relative max-w-md sm:max-w-none mx-auto sm:mx-0">
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center animate-pulse" style={{ background: 'rgba(30,144,255,0.08)', border: '1px solid rgba(30,144,255,0.2)' }}>
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: '#1E90FF', filter: 'drop-shadow(0 0 8px rgba(30,144,255,0.6))' }} />
              </div>
              
              <div className="relative rounded-3xl p-6 sm:p-10 overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(30,144,255,0.12) 0%, rgba(15,20,25,0.95) 50%, rgba(37,168,245,0.08) 100%)', border: '1px solid rgba(30,144,255,0.25)', boxShadow: '0 0 30px rgba(30,144,255,0.15)', backdropFilter: 'blur(10px)' }}>
                {/* Inner Glow Effect */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(37,168,245,0.06) 0%, transparent 60%)' }}></div>
                
                <div className="relative z-10 text-center space-y-6 sm:space-y-8">
                  <div>
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-blue-500/20 rounded-full border border-blue-500/30 mb-4 sm:mb-6">
                      <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-elevix-blue" />
                    </div>
                    
                    {/* Mobile optimized headlines */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                      Reserve Sua Consultoria
                    </h3>
                    
                    <p className="text-sm sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed px-2">
                      Limitado a <span className="text-elevix-blue font-bold">10 consultorias por mês</span> para garantir qualidade máxima
                    </p>
                  </div>

                  {/* Urgency Indicator */}
                  <div className="rounded-2xl p-4 sm:p-6" style={{ background: 'linear-gradient(135deg, rgba(30,144,255,0.06) 0%, rgba(15,20,25,0.8) 100%)', border: '1px solid rgba(30,144,255,0.15)' }}>
                    <div className="flex items-center justify-center space-x-2 text-yellow-400 mb-2">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="font-semibold text-yellow-500 text-sm sm:text-base">Vagas Limitadas</span>
                    </div>
                    {/* Mobile optimized checklist */}
                    <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4 space-y-1 sm:space-y-0 text-xs sm:text-sm text-gray-400">
                      <span>✓ Sem compromisso</span>
                      <span>✓ 100% gratuito</span>
                      <span>✓ Resultados imediatos</span>
                    </div>
                  </div>

                  {/* WhatsApp CTA - Mobile optimized */}
                  <div className="space-y-3 sm:space-y-4">
                    <Button
                      className="w-full bg-elevix-blue hover:bg-blue-hover text-white font-bold py-4 sm:py-6 px-6 sm:px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-elevix-blue/30 group text-base sm:text-lg"
                      onClick={handleWhatsAppRedirect}>

                      <Phone className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
                      <span className="hidden sm:inline">Quero Minha Consultoria Gratuita →</span>
                      <span className="sm:hidden">Quero Minha Consultoria</span>
                    </Button>
                    
                    <p className="text-xs sm:text-sm text-gray-400">
                      Resposta em até 5 minutos • Sem compromisso • 100% gratuito
                    </p>
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl opacity-50 animate-pulse pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, rgba(30,144,255,0.15), transparent)' }}></div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Indicators - Mobile Perfectly Centered */}
          <div className="mt-16 sm:mt-20 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-8 rounded-2xl px-6 sm:px-8 py-4 max-w-md sm:max-w-none mx-auto" style={{ background: 'linear-gradient(135deg, rgba(30,144,255,0.08) 0%, rgba(15,20,25,0.9) 100%)', border: '1px solid rgba(30,144,255,0.15)', boxShadow: '0 0 20px rgba(30,144,255,0.08)' }}>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-white font-medium text-sm sm:text-base">+500 Empresas Impulsionadas</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-700"></div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-elevix-blue" />
                <span className="text-white font-medium text-sm sm:text-base">97% de Satisfação</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-700"></div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <span className="text-white font-medium text-sm sm:text-base">ROI Médio 340%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ConsultancySection;