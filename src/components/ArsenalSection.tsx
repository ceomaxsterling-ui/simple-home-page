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
      className="relative py-20 md:py-28 overflow-hidden"
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
          className="text-center mb-3"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(15px)',
            transition: 'opacity 0.4s ease 0.08s, transform 0.4s ease 0.08s',
          }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            Nascemos da Inconformidade com o{' '}
            <span style={{ color: '#5F91FF' }}>Marketing Genérico</span>
          </h2>
        </div>

        {/* Subtitle */}
        <div
          className="text-center mb-14"
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

        {/* 2-column layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left: Logo / 3D Visual */}
          <div
            className="flex items-center justify-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s',
            }}
          >
            <div className="relative flex items-center justify-center">
              {/* Outer diffuse glow */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(95,145,255,0.18) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                  transform: 'scale(1.5)',
                }}
              />

              {/* Floating card */}
              <div
                className="relative flex flex-col items-center justify-center rounded-2xl p-10 md:p-14"
                style={{
                  background: 'linear-gradient(135deg, rgba(95,145,255,0.08) 0%, rgba(10,14,26,0.95) 60%, rgba(5,5,5,1) 100%)',
                  border: '1px solid rgba(95,145,255,0.35)',
                  boxShadow: '0 0 40px rgba(95,145,255,0.25), 0 0 80px rgba(95,145,255,0.12), inset 0 0 40px rgba(95,145,255,0.05)',
                  animation: 'floatOrion 5s ease-in-out infinite',
                  minWidth: '260px',
                  minHeight: '260px',
                }}
              >
              {/* Logo image */}
                <div className="relative flex items-center justify-center">
                  {/* Pulsing ring around logo */}
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: '160px',
                      height: '160px',
                      border: '1px solid rgba(95,145,255,0.4)',
                      animation: 'pulseRing 3s ease-in-out infinite',
                    }}
                  />
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: '200px',
                      height: '200px',
                      border: '1px solid rgba(95,145,255,0.2)',
                      animation: 'pulseRing 3s ease-in-out infinite 0.5s',
                    }}
                  />
                  {/* Logo */}
                  <img
                    src="https://i.postimg.cc/4N8Dk04j/Design-sem-nome.png"
                    alt="Orion Logo"
                    draggable={false}
                    style={{
                      width: '120px',
                      height: '120px',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 0 18px rgba(95,145,255,0.9)) drop-shadow(0 0 40px rgba(95,145,255,0.5))',
                      userSelect: 'none',
                    }}
                  />
                </div>

                {/* Orbit ring SVG */}
                <svg
                  className="mt-6 opacity-60"
                  width="140"
                  height="40"
                  viewBox="0 0 140 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="70"
                    cy="20"
                    rx="68"
                    ry="16"
                    stroke="#5F91FF"
                    strokeWidth="1.2"
                    strokeDasharray="6 4"
                  />
                  <circle cx="70" cy="4" r="4" fill="#5F91FF" opacity="0.9" />
                  <circle cx="70" cy="4" r="8" stroke="#5F91FF" strokeWidth="0.8" opacity="0.3" />
                </svg>

                {/* Tagline */}
                <p
                  className="mt-4 text-xs font-medium tracking-widest uppercase"
                  style={{ color: 'rgba(95,145,255,0.7)', letterSpacing: '0.25em' }}
                >
                  Nova Órbita
                </p>

                {/* Corner accent lines */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l" style={{ borderColor: 'rgba(95,145,255,0.5)' }} />
                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r" style={{ borderColor: 'rgba(95,145,255,0.5)' }} />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l" style={{ borderColor: 'rgba(95,145,255,0.5)' }} />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r" style={{ borderColor: 'rgba(95,145,255,0.5)' }} />
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
