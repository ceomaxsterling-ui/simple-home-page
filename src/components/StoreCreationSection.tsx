import React, { useState, useEffect, useRef, memo } from 'react';
import { Settings, Zap, TrendingUp, CheckCircle, ArrowRight, Gauge, ShoppingCart, Shield } from 'lucide-react';
import { WHATSAPP_URL } from '@/config/links';

const StoreCreationSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const creationSteps = [
    {
      id: 0,
      icon: <Settings className="w-6 h-6" />,
      title: "Diagnóstico Profundo",
      description: "Antes de agir, entendemos. Mapeamos seu mercado, seus concorrentes e seus objetivos reais. O plano que nasce daqui não serve para nenhuma outra empresa — só para a sua.",
      features: ["Escuta Ativa", "Análise de Mercado", "Plano de Ação Detalhado", "KPIs Definidos"],
    },
    {
      id: 1,
      icon: <Zap className="w-6 h-6" />,
      title: "Execução com Precisão",
      description: "Time dedicado, prazos reais, entrega de alto nível. Cada detalhe é cuidado com o mesmo cuidado que teríamos se fosse nossa própria empresa.",
      features: ["Design e Conteúdo", "Identidade da Marca", "Implementação Técnica", "Plataformas Otimizadas"],
    },
    {
      id: 2,
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Crescimento Contínuo",
      description: "Entregamos e continuamos. Monitoramos cada resultado, identificamos o que pode ir mais longe e recalibramos a rota. Crescimento aqui não é um pico — é uma trajetória.",
      features: ["Monitoramento 24/7", "Análise de Performance", "Ajustes Estratégicos", "Crescimento Sustentável"],
    },
  ];

  const benefits = [
    { icon: <Gauge className="w-5 h-5" />, text: "Performance Superior", value: "98%" },
    { icon: <ShoppingCart className="w-5 h-5" />, text: "Otimização e Conversão", value: "12.5%" },
    { icon: <Shield className="w-5 h-5" />, text: "Segurança Total", value: "100%" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "ROI Médio", value: "280%" },
  ];

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
      if (!isPaused) setActiveStep(prev => (prev + 1) % creationSteps.length);
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

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#0A0A1A' }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-12"
          style={{ background: 'radial-gradient(circle, #61A4F8, transparent)' }}
        />
        <div
          className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, #FF00FF, transparent)' }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 md:mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 mb-6" style={{ color: '#61A4F8' }}>
            <Zap className="w-5 h-5" style={{ filter: 'drop-shadow(0 0 5px #61A4F8)' }} />
            <span className="text-sm font-medium uppercase tracking-widest">Nossa Rota</span>
            <Zap className="w-5 h-5" style={{ filter: 'drop-shadow(0 0 5px #61A4F8)' }} />
          </div>

          <h2
            className="font-bold leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', letterSpacing: '-0.02em' }}
          >
            <span className="text-white">Três Etapas. Uma Missão.</span>
            <br />
            <span className="section-title-gradient">Levar sua empresa ao lugar que ela merece.</span>
          </h2>

          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.70)' }}>
            Sem achismo. Sem improviso. Cada projeto segue uma{' '}
            <span className="font-semibold" style={{ color: '#61A4F8' }}>rota precisa</span> — para que você saiba exatamente onde está e{' '}
            <span className="font-semibold" style={{ color: '#61A4F8' }}>para onde está indo</span>.
          </p>
        </div>

        {/* Timeline path (desktop) */}
        <div className="hidden lg:flex items-center justify-center mb-12 px-20">
          <div className="relative flex items-center w-full max-w-3xl">
            <div className="timeline-path flex-1" />
            {creationSteps.map((step, i) => (
              <React.Fragment key={step.id}>
                {i > 0 && <div className="timeline-path flex-1" />}
                <button
                  onClick={() => setActiveStep(i)}
                  className="timeline-dot flex-shrink-0 transition-all duration-300"
                  style={{
                    width: activeStep === i ? '24px' : '16px',
                    height: activeStep === i ? '24px' : '16px',
                    boxShadow: activeStep === i
                      ? '0 0 16px #61A4F8, 0 0 32px rgba(255,0,255,0.6)'
                      : '0 0 8px rgba(97,164,248,0.4)',
                  }}
                  aria-label={step.title}
                />
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start mb-16">
          {/* Steps nav */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6" style={{ letterSpacing: '-0.01em' }}>
              Como Funciona <span className="section-title-gradient">Na Prática</span>
            </h3>
            <div className="space-y-3">
              {creationSteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className="w-full text-left p-5 rounded-2xl transition-all duration-400 group"
                  style={{
                    background: activeStep === index ? 'rgba(97,164,248,0.08)' : 'rgba(255,255,255,0.02)',
                    border: activeStep === index ? '1px solid rgba(97,164,248,0.35)' : '1px solid rgba(255,255,255,0.06)',
                    boxShadow: activeStep === index ? '0 0 20px rgba(97,164,248,0.12)' : 'none',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className="p-3 rounded-xl flex-shrink-0 transition-all duration-300"
                      style={{
                        background: activeStep === index ? 'rgba(97,164,248,0.15)' : 'rgba(255,255,255,0.04)',
                        color: activeStep === index ? '#61A4F8' : 'rgba(255,255,255,0.4)',
                        filter: activeStep === index ? 'drop-shadow(0 0 5px #61A4F8)' : 'none',
                      }}
                    >
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-base transition-colors duration-300" style={{ color: activeStep === index ? '#ffffff' : 'rgba(255,255,255,0.6)' }}>
                        {step.title}
                      </h4>
                      {activeStep === index && (
                        <p className="text-sm mt-1" style={{ color: '#61A4F8' }}>
                          Etapa {index + 1} de {creationSteps.length}
                        </p>
                      )}
                    </div>
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300"
                      style={{ background: activeStep === index ? 'linear-gradient(#61A4F8, #FF00FF)' : 'rgba(255,255,255,0.2)' }}
                    />
                  </div>
                  {activeStep === index && (
                    <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(97,164,248,0.15)' }}>
                      <div className="grid grid-cols-2 gap-2">
                        {step.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#61A4F8' }} />
                            <span className="text-sm text-white/70">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Active step detail */}
          <div>
            <div
              className="glass-card p-8 relative overflow-hidden"
              style={{ minHeight: '340px' }}
            >
              {/* Subtle animated dots */}
              <div className="absolute inset-0 overflow-hidden rounded-[20px] pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{
                      left: `${10 + i * 12}%`,
                      top: `${15 + (i % 3) * 25}%`,
                      background: '#61A4F8',
                      opacity: 0.2,
                      animationDelay: `${i * 0.4}s`,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className="p-4 rounded-2xl"
                    style={{ background: 'rgba(97,164,248,0.15)', color: '#61A4F8', filter: 'drop-shadow(0 0 6px #61A4F8)' }}
                  >
                    {creationSteps[activeStep].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white" style={{ letterSpacing: '-0.01em' }}>
                      {creationSteps[activeStep].title}
                    </h3>
                    <p className="text-sm font-medium" style={{ color: '#61A4F8' }}>
                      Etapa {activeStep + 1} de {creationSteps.length}
                    </p>
                  </div>
                </div>

                <p className="text-base mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.70)' }}>
                  {creationSteps[activeStep].description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {creationSteps[activeStep].features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 p-3 rounded-xl"
                      style={{
                        background: 'rgba(97,164,248,0.05)',
                        border: '1px solid rgba(97,164,248,0.12)',
                      }}
                    >
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#61A4F8' }} />
                      <span className="text-white text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div>
                  <div className="flex justify-between text-xs mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    <span>Progresso</span>
                    <span>{Math.round((activeStep + 1) / creationSteps.length * 100)}%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${(activeStep + 1) / creationSteps.length * 100}%`,
                        background: 'linear-gradient(to right, #61A4F8, #FF00FF)',
                        boxShadow: '0 0 8px #61A4F8',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-card p-5 text-center transition-all duration-300"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 20px rgba(97,164,248,0.2), 0 0 40px rgba(255,0,255,0.1)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              }}
            >
              <div
                className="flex justify-center mb-3"
                style={{ color: '#61A4F8', filter: 'drop-shadow(0 0 5px #61A4F8)' }}
              >
                {benefit.icon}
              </div>
              <p className="stat-number text-2xl mb-1">{benefit.value}</p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>{benefit.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => window.open(WHATSAPP_URL, '_blank')}
            className="btn-neon-pill inline-flex items-center gap-2 text-base"
          >
            Quero Ver Como Isso Funciona Para Minha Empresa →
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-xs mt-4" style={{ color: 'rgba(255,255,255,0.35)' }}>
            ✓ Sem compromisso • ✓ Plano exclusivo para sua empresa • ✓ Resultados comprovados
          </p>
        </div>
      </div>

      {/* Bottom beam */}
      <div className="absolute bottom-0 left-0 right-0 light-beam animate-beam-flow" />
    </section>
  );
};

export default memo(StoreCreationSection);
