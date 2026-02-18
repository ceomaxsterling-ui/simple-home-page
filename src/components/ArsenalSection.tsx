import React, { useEffect, useRef, useState } from 'react';
import { Rocket, Target, Handshake, TrendingUp, Eye, RefreshCw } from 'lucide-react';

const ArsenalSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      icon: <Rocket strokeWidth={1.5} className="w-9 h-9 text-[#5F91FF]" />,
      title: 'Missão',
      text: 'Colocar empresas em uma nova órbita de crescimento através de estratégias baseadas em dados e execução impecável.',
    },
    {
      icon: <Target strokeWidth={1.5} className="w-9 h-9 text-[#5F91FF]" />,
      title: 'Diferencial',
      text: 'Não vendemos promessas. Entregamos resultados comprovados com ROI médio de +300% e taxa de satisfação de 98%.',
    },
    {
      icon: <Handshake strokeWidth={1.5} className="w-9 h-9 text-[#5F91FF]" />,
      title: 'Compromisso',
      text: 'Transparência total, comunicação constante e foco obsessivo no crescimento do seu negócio.',
    },
  ];

  const values = [
    {
      icon: <TrendingUp strokeWidth={1.5} className="w-8 h-8 text-[#5F91FF]" />,
      title: 'Resultados Acima de Tudo',
      text: 'Cada decisão é tomada pensando no retorno real para seu negócio',
    },
    {
      icon: <Eye strokeWidth={1.5} className="w-8 h-8 text-[#5F91FF]" />,
      title: 'Transparência Radical',
      text: 'Você acompanha tudo em tempo real, sem letras miúdas',
    },
    {
      icon: <RefreshCw strokeWidth={1.5} className="w-8 h-8 text-[#5F91FF]" />,
      title: 'Melhoria Contínua',
      text: 'Otimizamos constantemente para maximizar seus resultados',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050505 0%, #080d18 60%, #050505 100%)' }}
    >
      {/* Subtle star dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: '10%', left: '5%' }, { top: '25%', left: '92%' },
          { top: '60%', left: '3%' }, { top: '80%', left: '88%' },
          { top: '45%', left: '50%' }, { top: '15%', left: '70%' },
        ].map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#5F91FF]/30"
            style={{ top: s.top, left: s.left, width: '2px', height: '2px' }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

        {/* Badge */}
        <div
          className="flex justify-center mb-6"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5F91FF]/30 bg-[#5F91FF]/5 text-[#5F91FF] text-sm font-medium tracking-wide">
            Sobre a Orion
          </span>
        </div>

        {/* Title */}
        <div
          className="text-center mb-6"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s',
          }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Nascemos da Inconformidade com o{' '}
            <span className="text-[#5F91FF]">Marketing Genérico</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Enquanto o mercado se contentava com promessas vazias e resultados medíocres, nós decidimos criar algo diferente. Algo que realmente funcionasse.
          </p>
        </div>

        {/* 2-column layout */}
        <div
          className="grid md:grid-cols-2 gap-12 md:gap-20 items-start mt-14 mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
          }}
        >
          {/* Left: Story */}
          <div className="space-y-7">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[#5F91FF] uppercase tracking-widest">O Problema</p>
              <p className="text-gray-300 text-base leading-[1.85]">
                Cansamos de ver empresas sendo enganadas por agências que focam em métricas de vaidade enquanto seus clientes reais sofriam sem resultados. Cansamos do "achismo", das estratégias prontas, da falta de compromisso com o que realmente importa: <span className="text-white font-medium">o crescimento do seu negócio.</span>
              </p>
            </div>
            <div className="w-10 h-px bg-[#5F91FF]/30" />
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[#5F91FF] uppercase tracking-widest">A Solução</p>
              <p className="text-gray-300 text-base leading-[1.85]">
                Assim nasceu a Orion. Não como mais uma agência, mas como uma missão: colocar sua empresa em uma nova órbita. Desenvolvemos a <span className="text-white font-medium">Metodologia Orion de Alavancagem Digital</span> — um sistema estruturado que transforma presença digital em resultado mensurável.
              </p>
            </div>
            <div className="w-10 h-px bg-[#5F91FF]/30" />
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[#5F91FF] uppercase tracking-widest">O Propósito</p>
              <p className="text-gray-300 text-base leading-[1.85]">
                Hoje, atuamos como extensão da sua empresa. Cada projeto é tratado como se fosse nosso. Cada real investido em marketing precisa voltar multiplicado. Isso não é marketing. É <span className="text-white font-medium">engenharia de crescimento.</span>
              </p>
            </div>
          </div>

          {/* Right: Cards */}
          <div className="space-y-4">
            {cards.map((card, i) => (
              <div
                key={i}
                className="group p-7 rounded-2xl border border-[#5F91FF]/20 bg-white/[0.02] hover:border-[#5F91FF] hover:-translate-y-1 transition-all duration-300"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${0.3 + i * 0.1}s, transform 0.5s ease ${0.3 + i * 0.1}s`,
                }}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 p-2 rounded-xl bg-[#5F91FF]/10">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">{card.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Constellation tag */}
            <div className="mt-6 p-4 rounded-xl border border-[#5F91FF]/10 bg-[#5F91FF]/5 text-center">
              <p className="text-[#5F91FF]/70 text-xs tracking-widest uppercase">✦ &nbsp; Mais que uma agência, seu parceiro de crescimento &nbsp; ✦</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div
          className="pt-12 border-t border-white/5"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s',
          }}
        >
          <p className="text-center text-[#5F91FF] text-xs font-semibold uppercase tracking-widest mb-8">O Que Nos Move</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="group flex flex-col items-center text-center p-8 rounded-2xl border border-[#5F91FF]/20 bg-white/[0.02] hover:border-[#5F91FF] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-4 p-3 rounded-xl bg-[#5F91FF]/10 group-hover:bg-[#5F91FF]/20 transition-colors duration-300">
                  {v.icon}
                </div>
                <h4 className="text-white font-semibold text-base mb-2">{v.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ArsenalSection;
