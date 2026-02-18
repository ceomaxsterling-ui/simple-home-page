import React, { useState } from 'react';
import { Palette, BarChart3, MessageSquare, CheckCircle, ArrowRight, Play } from 'lucide-react';
import { WHATSAPP_URL } from '@/config/links';

const services = [
  {
    id: 0,
    icon: <Palette className="w-6 h-6" />,
    title: 'Estratégia e Branding',
    subtitle: 'Para Todos os Negócios',
    description:
      'Construímos a fundação da sua marca. Uma identidade forte não é estética — é estratégia. É o que faz empresas serem lembradas quando a concorrência é esquecida.',
    features: [
      'Identidade Visual Completa',
      'Design de Marca Exclusivo',
      'Planejamento Estratégico',
      'Posicionamento de Mercado',
    ],
    metrics: [
      { label: 'Design', value: 95 },
      { label: 'Estratégia', value: 98 },
      { label: 'Branding', value: 92 },
    ],
    stats: [
      { label: 'Marcas Criadas', value: '200+' },
      { label: 'Satisfação', value: '98%' },
    ],
  },
  {
    id: 1,
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Performance e Aquisição',
    subtitle: 'Resultados Mensuráveis',
    description:
      'Cada real investido em mídia precisa trabalhar. Gerenciamos suas campanhas com precisão cirúrgica — para atrair as pessoas certas, no momento certo, com a mensagem certa.',
    features: [
      'Gestão de Tráfego Pago',
      'Criação de Criativos',
      'Otimização de Conversão (CRO)',
      'Análise de Performance',
    ],
    metrics: [
      { label: 'ROI', value: 85 },
      { label: 'Conversão', value: 90 },
      { label: 'Performance', value: 95 },
    ],
    stats: [
      { label: 'ROI Médio', value: '280%' },
      { label: 'Campanhas', value: '500+' },
    ],
  },
  {
    id: 2,
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'Presença e Relacionamento',
    subtitle: 'Onde Seus Clientes Estão',
    description:
      'Sua marca presente onde seus clientes estão. Criamos conteúdo, gerenciamos canais e automatizamos processos para que nenhuma oportunidade passe em branco.',
    features: [
      'Design de Social Media',
      'Google Meu Negócio',
      'Automação de Atendimento',
      'Gestão de Relacionamento',
    ],
    metrics: [
      { label: 'Engajamento', value: 88 },
      { label: 'Automação', value: 90 },
      { label: 'Visibilidade', value: 95 },
    ],
    stats: [
      { label: 'Alcance', value: '+400%' },
      { label: 'Automação', value: '24/7' },
    ],
  },
];

const ArsenalSection: React.FC = () => {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  const handleSelect = (index: number) => {
    if (index === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(index);
      setFading(false);
    }, 180);
  };

  const service = services[active];

  return (
    <section className="bg-black py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-[#5F91FF] mb-4">
            <div className="w-2 h-2 bg-[#5F91FF] rounded-full animate-pulse" />
            <span className="text-sm font-medium">O Arsenal da Orion</span>
            <div className="w-2 h-2 bg-[#5F91FF] rounded-full animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Tudo Que Sua Empresa Precisa Para Ir Mais Longe{' '}
            <span className="text-[#5F91FF]">— Em Um Só Lugar.</span>
          </h2>
          <p className="text-gray-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
            Da identidade ao crescimento. Da estratégia à execução. Operamos como uma{' '}
            <span className="text-[#5F91FF] font-semibold">extensão da sua empresa</span> — com foco total em levar sua marca a outro patamar.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-3 mb-10">
          {services.map((s, i) => (
            <button
              key={s.id}
              onClick={() => handleSelect(i)}
              className={`group relative p-4 md:p-5 rounded-2xl border transition-all duration-400 text-left ${
                active === i
                  ? 'border-[#5F91FF]/50 bg-[#5F91FF]/5'
                  : 'border-gray-800/50 bg-gray-900/30 hover:border-gray-700/50'
              }`}
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className={`p-2 md:p-3 rounded-xl transition-all duration-300 ${
                  active === i ? 'bg-[#5F91FF]/20 text-[#5F91FF]' : 'bg-gray-800/50 text-gray-400 group-hover:text-white'
                }`}>
                  {s.icon}
                </div>
                <div>
                  <h3 className={`font-bold text-sm md:text-base transition-colors ${
                    active === i ? 'text-white' : 'text-gray-300 group-hover:text-white'
                  }`}>
                    {s.title}
                  </h3>
                  <p className={`text-xs transition-colors ${active === i ? 'text-[#5F91FF]' : 'text-gray-500'}`}>
                    {s.subtitle}
                  </p>
                </div>
              </div>
              {active === i && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#5F91FF]/10 to-transparent opacity-50 pointer-events-none animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div
          style={{
            opacity: fading ? 0 : 1,
            transform: fading ? 'translateY(6px)' : 'translateY(0)',
            transition: 'opacity 0.22s ease, transform 0.22s ease',
          }}
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-gradient-to-br from-gray-900/60 to-gray-800/30 border border-gray-800/50 rounded-3xl p-6 md:p-10">

            {/* Left: Text */}
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="p-3 md:p-4 rounded-2xl bg-[#5F91FF]/20 text-[#5F91FF]">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h3>
                  <p className="text-[#5F91FF] font-semibold text-sm">{service.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed">{service.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-3 rounded-xl bg-gray-900/40 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300"
                  >
                    <CheckCircle className="w-4 h-4 text-[#5F91FF] flex-shrink-0" />
                    <span className="text-white font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => window.open(WHATSAPP_URL, '_blank')}
                className="inline-flex items-center gap-2 bg-transparent border-2 border-[#5F91FF] text-white hover:bg-[#5F91FF]/10 font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 text-sm"
              >
                Explorar Solução
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right: Dashboard */}
            <div className="relative p-5 md:p-7 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-5">
                <span className="text-gray-400 font-medium text-sm">Performance</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#5F91FF] animate-pulse" />
                  <span className="text-[#5F91FF] font-bold text-sm">Ativo</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {service.metrics.map((metric, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{metric.label}</span>
                      <span className="text-[#5F91FF] font-bold">{metric.value}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#5F91FF] to-[#5F91FF]/70 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${metric.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700/50">
                {service.stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-xl md:text-2xl font-bold text-[#5F91FF]">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="absolute -top-3 -right-3">
                <div className="w-7 h-7 bg-[#5F91FF]/20 rounded-full flex items-center justify-center animate-bounce">
                  <Play className="w-3 h-3 text-[#5F91FF]" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ArsenalSection;
