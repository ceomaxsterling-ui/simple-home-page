import React, { useState, useEffect, useRef, memo } from 'react';
import { Settings, Zap, TrendingUp, CheckCircle, ArrowRight, Gauge, ShoppingCart, Shield } from 'lucide-react';
import { WHATSAPP_URL } from '@/config/links';

const steps = [
  {
    id: 0,
    emoji: '⚙️',
    icon: <Settings className="w-6 h-6" />,
    title: 'Diagnóstico Profundo',
    shortDesc: 'Antes de agir, entendemos. Mapeamos seu mercado, seus concorrentes e seus objetivos reais.',
    fullDesc: 'O plano que nasce daqui não serve para nenhuma outra empresa — só para a sua.',
    items: [
      'Análise completa do seu mercado e concorrência',
      'Mapeamento de oportunidades únicas',
      'Definição clara de objetivos e KPIs',
      'Plano estratégico personalizado',
    ],
  },
  {
    id: 1,
    emoji: '⚡',
    icon: <Zap className="w-6 h-6" />,
    title: 'Execução com Precisão',
    shortDesc: 'Time dedicado, prazos reais, entrega de alto nível. Cada detalhe é cuidado com excelência.',
    fullDesc: 'Time dedicado, prazos reais, entrega de alto nível. Cada detalhe é cuidado com o mesmo cuidado que teríamos se fosse nossa própria empresa.',
    items: [
      'Equipe especializada dedicada ao seu projeto',
      'Cronograma claro e cumprido',
      'Qualidade superior em cada entrega',
      'Comunicação transparente e constante',
    ],
  },
  {
    id: 2,
    emoji: '📈',
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Crescimento Contínuo',
    shortDesc: 'Entregamos e continuamos. Monitoramos cada resultado, identificamos oportunidades e otimizamos.',
    fullDesc: 'Entregamos e continuamos. Monitoramos cada resultado, identificamos o que pode ser melhorado e otimizamos a rota. Crescimento não é sorte — é método.',
    items: [
      'Monitoramento constante de resultados',
      'Relatórios periódicos de performance',
      'Otimizações baseadas em dados',
      'Ajustes estratégicos contínuos',
    ],
  },
];

const benefits = [
  { icon: <Gauge className="w-5 h-5" />, text: 'Performance Superior', value: '98%' },
  { icon: <ShoppingCart className="w-5 h-5" />, text: 'Otimização e Conversão', value: '12.5%' },
  { icon: <Shield className="w-5 h-5" />, text: 'Segurança Total', value: '100%' },
  { icon: <TrendingUp className="w-5 h-5" />, text: 'ROI Médio', value: '280%' },
];

const StoreCreationSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let isPaused = false;
    const interval = setInterval(() => {
      if (!isPaused) setActiveStep(prev => (prev + 1) % steps.length);
    }, 6000);

    const el = sectionRef.current;
    const pause = () => { isPaused = true; };
    const resume = () => { isPaused = false; };
    el?.addEventListener('mouseenter', pause);
    el?.addEventListener('mouseleave', resume);

    return () => {
      clearInterval(interval);
      el?.removeEventListener('mouseenter', pause);
      el?.removeEventListener('mouseleave', resume);
    };
  }, []);

  const active = steps[activeStep];

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 bg-black pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-elevix-blue/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-elevix-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 md:mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 text-elevix-blue mb-6">
            <Zap className="w-6 h-6" />
            <span className="text-lg font-medium">Nossa Rota</span>
            <Zap className="w-6 h-6" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Três Etapas. Uma Missão.
            <br />
            <span className="bg-gradient-to-r from-elevix-blue to-blue-400 bg-clip-text text-transparent">
              Levar sua empresa ao lugar que ela merece.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Sem achismo. Sem improviso. Cada projeto segue uma{' '}
            <span className="text-elevix-blue font-semibold">rota precisa</span> — para que você saiba exatamente onde está e{' '}
            <span className="text-elevix-blue font-semibold">para onde está indo</span>.
          </p>
        </div>

        {/* Two-column interactive grid */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start mb-20">
          {/* Left — step cards */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`group relative p-6 rounded-2xl border cursor-pointer transition-all duration-500 ${
                  activeStep === index
                    ? 'border-elevix-blue/50 bg-elevix-blue/10'
                    : 'border-gray-800/50 bg-gray-900/30 hover:border-gray-700/50 hover:bg-gray-900/50'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`text-3xl flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 ${
                    activeStep === index ? 'bg-elevix-blue/20' : 'bg-gray-800/50 group-hover:bg-gray-800'
                  }`}>
                    {step.emoji}
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold text-lg mb-1 transition-colors duration-300 ${
                      activeStep === index ? 'text-white' : 'text-gray-300 group-hover:text-white'
                    }`}>
                      {step.title}
                    </h4>
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                      activeStep === index ? 'text-gray-300' : 'text-gray-500'
                    }`}>
                      {step.shortDesc}
                    </p>
                  </div>
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-2 transition-all duration-300 ${
                    activeStep === index ? 'bg-elevix-blue' : 'bg-gray-600'
                  }`} />
                </div>
              </div>
            ))}
          </div>

          {/* Right — detail panel */}
          <div
            key={activeStep}
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-elevix-blue/20 rounded-2xl p-8 md:p-10"
            style={{ animation: 'fadeInUp 0.4s ease forwards' }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-4xl w-14 h-14 flex items-center justify-center rounded-2xl bg-elevix-blue/20">
                {active.emoji}
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{active.title}</h3>
                <p className="text-elevix-blue font-medium text-sm">Etapa {activeStep + 1} de {steps.length}</p>
              </div>
            </div>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">{active.fullDesc}</p>

            <ul className="space-y-3 mb-8">
              {active.items.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-elevix-blue flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* Progress */}
            <div>
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Progresso</span>
                <span>{Math.round((activeStep + 1) / steps.length * 100)}%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-elevix-blue to-blue-400 rounded-full transition-all duration-1000"
                  style={{ width: `${(activeStep + 1) / steps.length * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {benefits.map((b, index) => (
            <div key={index} className="p-6 bg-gray-900/50 border border-gray-800/50 rounded-2xl text-center hover:border-elevix-blue/30 transition-all duration-300">
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-xl bg-elevix-blue/20 text-elevix-blue">{b.icon}</div>
              </div>
              <div className="text-2xl font-bold text-elevix-blue mb-1">{b.value}</div>
              <p className="text-gray-300 text-sm">{b.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => window.open(WHATSAPP_URL, '_blank')}
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-elevix-blue to-blue-500 hover:from-blue-500 hover:to-elevix-blue text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 text-base sm:text-lg"
          >
            <span>Quero Ver Como Isso Funciona Para Minha Empresa</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <p className="text-gray-400 text-sm mt-4">
            ✓ Sem compromisso • ✓ Plano exclusivo para sua empresa • ✓ Resultados comprovados
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default memo(StoreCreationSection);
