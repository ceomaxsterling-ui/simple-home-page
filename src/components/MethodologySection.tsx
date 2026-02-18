import React, { useState } from 'react';
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
    <section className="bg-[#050505] py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#5F91FF]/10 border border-[#5F91FF]/30 rounded-full px-5 py-2 mb-5">
            <span className="text-[#5F91FF] font-semibold text-sm">⚡ Nossa Rota ⚡</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Três Etapas. Uma Missão.{' '}
            <span className="text-[#5F91FF]">Levar sua empresa ao lugar que ela merece.</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Sem achismo. Sem improviso. Cada projeto segue uma rota precisa — para que você saiba exatamente onde está e para onde está indo.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-5 gap-6 md:gap-10 items-start">

          {/* Left: Step cards */}
          <div className="md:col-span-2 flex flex-col gap-3">
            {steps.map((s, i) => (
              <button
                key={s.id}
                onClick={() => handleSelect(i)}
                className={`group text-left p-4 md:p-5 rounded-2xl border transition-all duration-300 ${
                  activeStep === i
                    ? 'border-[#5F91FF]/50 bg-[#5F91FF]/8'
                    : 'border-gray-800/60 bg-gray-900/20 hover:border-gray-700/60 hover:bg-gray-900/40'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeStep === i ? 'bg-[#5F91FF]/20 text-[#5F91FF]' : 'bg-gray-800/60 text-gray-400 group-hover:text-white'
                  }`}>
                    {s.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-bold ${activeStep === i ? 'text-[#5F91FF]' : 'text-gray-600'}`}>
                        {s.number}
                      </span>
                    </div>
                    <h3 className={`font-bold text-sm md:text-base transition-colors leading-tight ${
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

          {/* Right: Detail panel */}
          <div
            className="md:col-span-3"
            style={{
              opacity: fading ? 0 : 1,
              transform: fading ? 'translateX(8px)' : 'translateX(0)',
              transition: 'opacity 0.22s ease, transform 0.22s ease',
            }}
          >
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/30 border border-gray-800/50 rounded-2xl p-6 md:p-8 h-full">

              {/* Badge + Title */}
              <div className="mb-6">
                <span className="inline-block bg-[#5F91FF]/15 border border-[#5F91FF]/30 text-[#5F91FF] text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                  {step.badge}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-base leading-relaxed">{step.description}</p>
              </div>

              {/* Checklist */}
              <div className="space-y-3 mb-6">
                {step.checklist.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#5F91FF] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div>
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>Progresso da Metodologia</span>
                  <span className="text-[#5F91FF] font-bold">{step.progress}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#5F91FF] to-[#5F91FF]/70 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${step.progress}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2">
                  {steps.map((s, i) => (
                    <div
                      key={i}
                      className={`text-[10px] font-medium transition-colors ${i <= activeStep ? 'text-[#5F91FF]' : 'text-gray-600'}`}
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
