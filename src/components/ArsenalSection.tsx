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
      icon: <Rocket strokeWidth={1.5} className="w-8 h-8" style={{ color: '#5F91FF' }} />,
      title: 'Nossa Missão',
      text: 'Colocar empresas em uma nova órbita de crescimento',
    },
    {
      icon: <TrendingUp strokeWidth={1.5} className="w-8 h-8" style={{ color: '#5F91FF' }} />,
      title: 'Resultados',
      text: 'ROI médio de +300% e 98% de satisfação',
    },
    {
      icon: <Handshake strokeWidth={1.5} className="w-8 h-8" style={{ color: '#5F91FF' }} />,
      title: 'Compromisso',
      text: 'Transparência total e foco no seu crescimento',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-14 md:py-24 overflow-hidden"
      style={{ background: '#050505' }}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

        {/* Badge */}
        <div
          className="flex justify-center mb-4"
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
          className="text-center mb-3 px-2"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(15px)',
            transition: 'opacity 0.4s ease 0.08s, transform 0.4s ease 0.08s',
          }}
        >
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            Nascemos da Inconformidade com o{' '}
            <span style={{ color: '#5F91FF' }}>Marketing Genérico</span>
          </h2>
        </div>

        {/* Subtitle */}
        <div
          className="text-center mb-8 md:mb-12 px-2"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(15px)',
            transition: 'opacity 0.4s ease 0.14s, transform 0.4s ease 0.14s',
          }}
        >
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Enquanto o mercado se contentava com promessas vazias, nós criamos algo que realmente funciona.
          </p>
        </div>

        {/* 2-column layout: stacks on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-stretch">

          {/* Left: Logo card */}
          <div
            className="flex items-center justify-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s',
            }}
          >
            <div className="relative w-full" style={{ minHeight: '340px' }}>

              {/* Outer ambient glow */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse at 50% 50%, rgba(95,145,255,0.2) 0%, transparent 70%)',
                  filter: 'blur(55px)',
                  pointerEvents: 'none',
                }}
              />

              {/* Card — full height to match right column */}
              <div
                className="relative w-full h-full flex items-center justify-center rounded-2xl"
                style={{
                  minHeight: '340px',
                  background: 'linear-gradient(160deg, rgba(95,145,255,0.09) 0%, rgba(8,12,24,0.97) 60%, rgba(5,5,5,1) 100%)',
                  border: '1px solid rgba(95,145,255,0.35)',
                  boxShadow: '0 0 50px rgba(95,145,255,0.2), 0 0 100px rgba(95,145,255,0.1), inset 0 0 30px rgba(95,145,255,0.04)',
                  animation: 'floatOrion 5s ease-in-out infinite',
                }}
              >
                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-5 h-5 border-t border-l" style={{ borderColor: 'rgba(95,145,255,0.6)' }} />
                <div className="absolute top-3 right-3 w-5 h-5 border-t border-r" style={{ borderColor: 'rgba(95,145,255,0.6)' }} />
                <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l" style={{ borderColor: 'rgba(95,145,255,0.6)' }} />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r" style={{ borderColor: 'rgba(95,145,255,0.6)' }} />

                {/* Scan lines */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden opacity-20"
                  style={{
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(95,145,255,0.08) 3px, rgba(95,145,255,0.08) 4px)',
                  }}
                />

                {/* Pulsing rings */}
                <div className="absolute rounded-full" style={{ width: '200px', height: '200px', border: '1px solid rgba(95,145,255,0.3)', animation: 'pulseRing 3s ease-in-out infinite' }} />
                <div className="absolute rounded-full" style={{ width: '250px', height: '250px', border: '1px solid rgba(95,145,255,0.12)', animation: 'pulseRing 3s ease-in-out infinite 0.7s' }} />

                {/* Logo */}
                <img
                  src="https://i.postimg.cc/4N8Dk04j/Design-sem-nome.png"
                  alt="Orion Logo"
                  draggable={false}
                  style={{
                    width: '180px',
                    height: '180px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 0 24px rgba(95,145,255,1)) drop-shadow(0 0 60px rgba(95,145,255,0.6))',
                    userSelect: 'none',
                    position: 'relative',
                    zIndex: 1,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right: Cards */}
          <div className="flex flex-col gap-5">
            {cards.map((card, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl cursor-default"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(95,145,255,0.25)',
                  boxShadow: '0 0 12px rgba(95,145,255,0.1)',
                  transition: 'box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(15px)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 24px rgba(95,145,255,0.45), 0 0 48px rgba(95,145,255,0.15)';
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(95,145,255,0.7)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 12px rgba(95,145,255,0.1)';
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(95,145,255,0.25)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex-shrink-0 p-2.5 rounded-xl"
                    style={{
                      background: 'rgba(95,145,255,0.08)',
                      border: '1px solid rgba(95,145,255,0.2)',
                    }}
                  >
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

      {/* Floating animation keyframe via style tag */}
      <style>{`
        @keyframes floatOrion {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes pulseRing {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.06); }
        }
      `}</style>
    </section>
  );
};

export default ArsenalSection;
