import React from 'react';
import { BarChart2, Eye, Users2, ShieldCheck, TrendingUp } from 'lucide-react';
import { WHATSAPP_URL } from '@/config/links';

const differentials = [
  {
    icon: <BarChart2 strokeWidth={1.5} className="w-7 h-7 icon-neon-glow" style={{ color: '#5F91FF' }} />,
    title: 'Foco em ROI, não em Vaidade',
    description:
      'Não nos importamos com curtidas. Nos importamos com o seu faturamento. Cada campanha é medida pelo retorno real que gera ao seu negócio.',
    objection: 'Cansado de métricas bonitas sem resultado? Nós também.',
  },
  {
    icon: <Eye strokeWidth={1.5} className="w-7 h-7 icon-neon-glow" style={{ color: '#5F91FF' }} />,
    title: 'Transparência Radical',
    description:
      'Você tem acesso em tempo real aos dashboards e sabe exatamente para onde cada centavo do seu investimento está indo. Zero surpresas.',
    objection: 'Já investiu em marketing sem saber para onde o dinheiro foi?',
  },
  {
    icon: <Users2 strokeWidth={1.5} className="w-7 h-7 icon-neon-glow" style={{ color: '#5F91FF' }} />,
    title: 'Time Dedicado',
    description:
      'Seu projeto não será tocado por estagiários. Apenas especialistas cuidarão da sua estratégia — do diagnóstico à execução.',
    objection: 'Chega de agências que passam seu projeto para o júnior.',
  },
  {
    icon: <ShieldCheck strokeWidth={1.5} className="w-7 h-7 icon-neon-glow" style={{ color: '#5F91FF' }} />,
    title: 'Metodologia Baseada em Dados',
    description:
      'Nossa Metodologia Orion de Alavancagem elimina o "achismo" do marketing. Cada decisão é fundamentada em dados reais do seu mercado.',
    objection: 'Não tomamos decisões por instinto — tomamos por inteligência.',
  },
];

const WhyOrionSection: React.FC = () => {
  return (
    <section
      className="relative py-12 sm:py-16 md:py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #050505 0%, #06080f 45%, #050505 100%)',
      }}
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(95,145,255,0.4), transparent)' }}
      />
      {/* Ambient glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(95,145,255,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      {/* Bottom ambient glow */}
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 100% 100%, rgba(95,145,255,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Left ambient orb */}
      <div
        className="absolute left-0 top-1/3 w-[250px] h-[350px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 0% 50%, rgba(95,145,255,0.06) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
      {/* Cosmic particles */}
      {[
        { left: '8%',  top: '25%', size: 1.5, delay: '0s',   duration: '9s'  },
        { left: '92%', top: '45%', size: 2,   delay: '3s',   duration: '11s' },
        { left: '55%', top: '75%', size: 1.5, delay: '1.5s', duration: '8s'  },
        { left: '30%', top: '15%', size: 1,   delay: '5s',   duration: '10s' },
        { left: '70%', top: '60%', size: 1.5, delay: '2.5s', duration: '12s' },
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

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5F91FF]/30 bg-[#5F91FF]/5 text-[#5F91FF] text-xs sm:text-sm font-medium tracking-wide">
            Por que a Orion?
          </span>
        </div>

        {/* Title */}
        <div className="text-center mb-3 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
            A Escolha Certa Para{' '}
            <span style={{ color: '#5F91FF' }}>Escalar Seu Negócio</span>
          </h2>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-10 md:mb-14 px-2">
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Enquanto o mercado se contentava com promessas vazias, nós criamos uma metodologia baseada em dados — não em achismos — que transforma investimento em crescimento real.
          </p>
        </div>

        {/* Pain intro banner */}
        <div
          className="mb-10 md:mb-14 rounded-2xl p-5 sm:p-6 md:p-8 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(95,145,255,0.07) 0%, rgba(5,5,5,0.95) 100%)',
            border: '1px solid rgba(95,145,255,0.25)',
            boxShadow: '0 0 40px rgba(95,145,255,0.06)',
          }}
        >
          <TrendingUp strokeWidth={1.5} className="w-8 h-8 mx-auto mb-3" style={{ color: '#5F91FF' }} />
          <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-2 leading-tight">
            Cansado de marketing genérico que não traz resultado?
          </h3>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            A frustração do mercado com agências que entregam relatórios cheios de números mas sem faturamento real — essa dor gerou a Orion. Nossa metodologia nasceu para resolver exatamente isso.
          </p>
        </div>

        {/* Differentials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-14">
          {differentials.map((item, i) => (
            <div
              key={i}
              className="group p-5 sm:p-6 rounded-2xl cursor-default"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(95,145,255,0.2)',
                boxShadow: '0 0 10px rgba(95,145,255,0.06)',
                transition: 'box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = '0 0 30px rgba(95,145,255,0.35), 0 0 60px rgba(95,145,255,0.12)';
                el.style.borderColor = 'rgba(95,145,255,0.6)';
                el.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = '0 0 10px rgba(95,145,255,0.06)';
                el.style.borderColor = 'rgba(95,145,255,0.2)';
                el.style.transform = 'translateY(0)';
              }}
            >
              {/* Objection pill */}
              <p className="text-[10px] sm:text-xs text-[#5F91FF]/60 font-medium mb-3 italic">
                {item.objection}
              </p>
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 p-2.5 rounded-xl mt-0.5"
                  style={{
                    background: 'rgba(95,145,255,0.08)',
                    border: '1px solid rgba(95,145,255,0.18)',
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-1.5">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="text-center">
          <button
            onClick={() => window.open(WHATSAPP_URL, '_blank')}
            className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-2xl text-sm sm:text-base transition-all duration-300 hover:scale-105"
            style={{
              background: '#5F91FF',
              boxShadow: '0 0 0 rgba(95,145,255,0)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 28px rgba(95,145,255,0.5)';
              (e.currentTarget as HTMLButtonElement).style.background = '#4a7ee8';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 0 rgba(95,145,255,0)';
              (e.currentTarget as HTMLButtonElement).style.background = '#5F91FF';
            }}
          >
            Quero um diagnóstico gratuito →
          </button>
          <p className="text-gray-500 text-xs mt-3">
            Sem compromisso. Sem custo. 100% focado no seu negócio.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyOrionSection;
