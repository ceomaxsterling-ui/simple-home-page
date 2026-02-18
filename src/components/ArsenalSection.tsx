import React, { useEffect, useRef, useState } from 'react';
import { Rocket, TrendingUp, Handshake } from 'lucide-react';

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
      icon: <Rocket strokeWidth={1.5} className="w-8 h-8 text-[#5F91FF]" />,
      title: 'Nossa Missão',
      text: 'Colocar empresas em uma nova órbita de crescimento',
    },
    {
      icon: <TrendingUp strokeWidth={1.5} className="w-8 h-8 text-[#5F91FF]" />,
      title: 'Resultados',
      text: 'ROI médio de +300% e 98% de satisfação',
    },
    {
      icon: <Handshake strokeWidth={1.5} className="w-8 h-8 text-[#5F91FF]" />,
      title: 'Compromisso',
      text: 'Transparência total e foco no seu crescimento',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-24 overflow-hidden"
      style={{ background: '#050505' }}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

        {/* Badge */}
        <div
          className="flex justify-center mb-5"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(15px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5F91FF]/30 bg-[#5F91FF]/5 text-[#5F91FF] text-sm font-medium tracking-wide">
            Sobre Nós
          </span>
        </div>

        {/* Title */}
        <div
          className="text-center mb-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(15px)',
            transition: 'opacity 0.4s ease 0.08s, transform 0.4s ease 0.08s',
          }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
            Nascemos da Inconformidade com o{' '}
            <span className="text-[#5F91FF]">Marketing Genérico</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Enquanto o mercado se contentava com promessas vazias, nós criamos algo que realmente funciona.
          </p>
        </div>

        {/* 2-column layout */}
        <div
          className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mt-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(15px)',
            transition: 'opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s',
          }}
        >
          {/* Left: Text */}
          <div className="space-y-5">
            <p className="text-gray-300 text-base leading-[1.7]">
              Cansamos de ver empresas sendo enganadas por métricas de vaidade e estratégias prontas. Assim nasceu a Orion: não como mais uma agência, mas como uma missão de colocar sua empresa em uma nova órbita.
            </p>
            <p className="text-gray-300 text-base leading-[1.7]">
              Desenvolvemos a <span className="text-white font-medium">Metodologia Orion de Alavancagem Digital</span> — um sistema que transforma presença digital em resultado mensurável. Atuamos como extensão da sua empresa, com foco total no que realmente importa: <span className="text-white font-medium">seu crescimento.</span>
            </p>
          </div>

          {/* Right: Cards */}
          <div className="space-y-3">
            {cards.map((card, i) => (
              <div
                key={i}
                className="group p-6 rounded-xl border border-[#5F91FF]/20 hover:border-[#5F91FF] hover:-translate-y-1 transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(15px)',
                  transition: `opacity 0.4s ease ${0.2 + i * 0.08}s, transform 0.4s ease ${0.2 + i * 0.08}s`,
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-[#5F91FF]/10 group-hover:bg-[#5F91FF]/15 transition-colors duration-300">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-0.5">{card.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ArsenalSection;
