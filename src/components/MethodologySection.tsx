import React, { useState, useRef } from 'react';
import { Settings, Zap, TrendingUp, CheckCircle } from 'lucide-react';

const steps = [
  {
    id: 0,
    number: '01',
    icon: <Settings className="w-5 h-5" />,
    title: 'Diagnóstico Profundo',
    summary: 'Antes de agir, entendemos. Mapeamos seu mercado, seus concorrentes e seus objetivos reais.',
    badge: 'Etapa 1 de 3',
    description:
      'Antes de agir, entendemos. Mapeamos seu mercado, seus concorrentes e seus objetivos reais. Cada decisão nasce de dados — não de achismo.',
    checklist: [
      'Análise completa do mercado e concorrência',
      'Mapeamento dos objetivos e metas reais',
      'Identificação de gargalos e oportunidades',
      'Definição de KPIs e indicadores-chave',
    ],
    progress: 33,
  },
  {
    id: 1,
    number: '02',
    icon: <Zap className="w-5 h-5" />,
    title: 'Execução com Precisão',
    summary: 'Time dedicado, prazos reais, entrega de alto nível. Cada detalhe é cuidado com excelência.',
    badge: 'Etapa 2 de 3',
    description:
      'Time dedicado, prazos reais, entrega de alto nível. Cada detalhe é cuidado com excelência. Você acompanha cada etapa com transparência total.',
    checklist: [
      'Time especializado dedicado ao seu projeto',
      'Prazos definidos e respeitados',
      'Entregas com qualidade premium',
      'Comunicação clara e transparente',
    ],
    progress: 66,
  },
  {
    id: 2,
    number: '03',
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'Crescimento Contínuo',
    summary: 'Entregamos e continuamos. Monitoramos cada resultado, identificamos oportunidades e otimizamos.',
    badge: 'Etapa 3 de 3',
    description:
      'Entregamos e continuamos. Monitoramos cada resultado, identificamos o que pode ser melhorado e otimizamos a rota. Crescimento não é sorte — é método.',
    checklist: [
      'Monitoramento constante de resultados',
      'Relatórios periódicos de performance',
      'Otimizações baseadas em dados',
      'Ajustes estratégicos contínuos',
    ],
    progress: 100,
  },
];

const MethodologySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [fading, setFading] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleSelect = (index: number) => {
    if (index === activeStep) return;
    setFading(true);
    setTimeout(() => {
      setActiveStep(index);
      setFading(false);
    }, 180);
  };

  const step = steps[activeStep];

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #050505 0%, #030810 50%, #050505 100%)',
      }}
    >
      {/* Section ambient glow — top edge */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,209,255,0.5), transparent)' }}
      />
      {/* Light ellipse centre */}
      <div className="light-ellipse" style={{ top: '-50px', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '350px' }} />
      {/* Left ambient orb */}
      <div className="light-ellipse" style={{ left: '-100px', top: '40%', width: '400px', height: '600px', opacity: 0.4 }} />
      {/* Cosmic particles */}
      {[
        { left: '12%', top: '20%', size: 2, delay: '0s', duration: '8s' },
        { left: '78%', top: '60%', size: 1.5, delay: '2s', duration: '10s' },
        { left: '45%', top: '80%', size: 2, delay: '4s', duration: '9s' },
        { left: '90%', top: '30%', size: 1.5, delay: '1s', duration: '11s' },
        { left: '25%', top: '50%', size: 1, delay: '3s', duration: '7s' },
      ].map((p, i) => (
        <div
          key={i}
          className="cosmic-particle"
          style={{
            left: p.left, top: p.top,
            width: `${p.size}px`, height: `${p.size}px`,
            animationDelay: p.delay, animationDuration: p.duration,
          }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl relative z-10">

        {/* Header */}
        <div className="text-center mb-8 md:mb-16 px-2">
          <div className="inline-flex items-center gap-2 bg-[#00D1FF]/10 border border-[#00D1FF]/30 rounded-full px-4 py-2 mb-4 backdrop-blur-sm">
            <span className="text-[#00D1FF] font-semibold text-xs sm:text-sm">⚡ Nossa Rota ⚡</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
            Três Etapas. Uma Missão.{' '}
            <span className="title-neon">Levar sua empresa ao lugar que ela merece.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Sem achismo. Sem improviso. Cada projeto segue uma rota precisa — para que você saiba exatamente onde está e para onde está indo.
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col md:grid md:grid-cols-5 gap-4 md:gap-10 items-start">

          {/* Step cards */}
          <div className="md:col-span-2 flex flex-col gap-3">
            {steps.map((s, i) => (
              <button
                key={s.id}
                onClick={() => handleSelect(i)}
                className={`group text-left p-4 rounded-2xl border transition-all duration-300 w-full backdrop-blur-sm ${
                  activeStep === i
                    ? 'border-[#00D1FF]/60 bg-[#00D1FF]/8 shadow-[0_0_20px_rgba(0,209,255,0.2)]'
                    : 'border-white/8 bg-white/3 hover:border-[#00D1FF]/30 hover:bg-white/5'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeStep === i ? 'bg-[#00D1FF]/20 text-[#00D1FF]' : 'bg-white/5 text-gray-400 group-hover:text-white'
                  }`}>
                    {s.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`text-xs font-bold block mb-0.5 ${activeStep === i ? 'text-[#00D1FF]' : 'text-gray-600'}`}>
                      {s.number}
                    </span>
                    <h3 className={`font-bold text-sm transition-colors leading-tight ${
                      activeStep === i ? 'text-white' : 'text-gray-300 group-hover:text-white'
                    }`}>
                      {s.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 leading-snug line-clamp-2">{s.summary}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel — glassmorphism */}
          <div
            className="md:col-span-3"
            style={{
              opacity: fading ? 0 : 1,
              transform: fading ? 'translateX(8px)' : 'translateX(0)',
              transition: 'opacity 0.22s ease, transform 0.22s ease',
            }}
          >
            <div className="rounded-2xl p-5 md:p-8 relative overflow-hidden glass-card-strong">
              {/* Card top glow line */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,209,255,0.6), transparent)' }}
              />

              {/* Badge + Title */}
              <div className="mb-5 md:mb-6">
                <span className="inline-block bg-[#00D1FF]/15 border border-[#00D1FF]/30 text-[#00D1FF] text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                  {step.badge}
                </span>
                <h3 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">{step.description}</p>
              </div>

              {/* Checklist */}
              <div className="space-y-2 md:space-y-3 mb-5 md:mb-6">
                {step.checklist.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#00D1FF] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200 text-xs md:text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div>
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>Progresso da Metodologia</span>
                  <span className="text-[#00D1FF] font-bold">{step.progress}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${step.progress}%`, background: 'linear-gradient(90deg, #00D1FF, rgba(0,209,255,0.5))' }}
                  />
                </div>
                <div className="flex justify-between mt-2">
                  {steps.map((s, i) => (
                    <div
                      key={i}
                      className={`text-[9px] md:text-[10px] font-medium transition-colors ${i <= activeStep ? 'text-[#00D1FF]' : 'text-gray-600'}`}
                    >
                      {s.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MethodologySection;
