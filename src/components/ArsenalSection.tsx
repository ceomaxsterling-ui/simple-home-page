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

          {/* Left: Astronaut hand holding logo */}
          <div
            className="flex items-center justify-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s',
            }}
          >
            <div className="relative flex items-center justify-center" style={{ width: '320px', height: '390px' }}>

              {/* Outer ambient glow */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse at 50% 55%, rgba(95,145,255,0.22) 0%, transparent 70%)',
                  filter: 'blur(50px)',
                }}
              />

              {/* Floating visor panel / card */}
              <div
                className="absolute top-0 left-0 right-0"
                style={{
                  height: '250px',
                  background: 'linear-gradient(160deg, rgba(95,145,255,0.09) 0%, rgba(8,12,24,0.97) 60%, rgba(5,5,5,1) 100%)',
                  border: '1px solid rgba(95,145,255,0.35)',
                  borderRadius: '20px',
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
                  className="absolute inset-0 rounded-[20px] pointer-events-none overflow-hidden opacity-20"
                  style={{
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(95,145,255,0.08) 3px, rgba(95,145,255,0.08) 4px)',
                  }}
                />

                {/* Pulsing rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute rounded-full" style={{ width: '160px', height: '160px', border: '1px solid rgba(95,145,255,0.35)', animation: 'pulseRing 3s ease-in-out infinite' }} />
                  <div className="absolute rounded-full" style={{ width: '200px', height: '200px', border: '1px solid rgba(95,145,255,0.15)', animation: 'pulseRing 3s ease-in-out infinite 0.7s' }} />
                </div>

                {/* Logo — big */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="https://i.postimg.cc/4N8Dk04j/Design-sem-nome.png"
                    alt="Orion Logo"
                    draggable={false}
                    style={{
                      width: '155px',
                      height: '155px',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 0 22px rgba(95,145,255,1)) drop-shadow(0 0 55px rgba(95,145,255,0.6))',
                      userSelect: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Astronaut glove — holding the card from below */}
              <div
                className="absolute bottom-0 left-0 right-0 flex justify-center"
                style={{ animation: 'floatOrion 5s ease-in-out infinite' }}
              >
                <svg
                  width="260"
                  height="155"
                  viewBox="0 0 260 155"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Sleeve */}
                  <rect x="78" y="108" width="104" height="44" rx="10" fill="url(#sleeveGrad)" />
                  <rect x="78" y="108" width="104" height="44" rx="10" stroke="rgba(95,145,255,0.4)" strokeWidth="1" />
                  <line x1="78" y1="118" x2="182" y2="118" stroke="rgba(95,145,255,0.18)" strokeWidth="0.8" />
                  <line x1="78" y1="128" x2="182" y2="128" stroke="rgba(95,145,255,0.18)" strokeWidth="0.8" />
                  <line x1="78" y1="138" x2="182" y2="138" stroke="rgba(95,145,255,0.18)" strokeWidth="0.8" />
                  {/* Cuff ring */}
                  <rect x="73" y="105" width="114" height="8" rx="4" fill="rgba(95,145,255,0.12)" stroke="rgba(95,145,255,0.55)" strokeWidth="1" />

                  {/* Palm */}
                  <ellipse cx="130" cy="95" rx="54" ry="19" fill="url(#palmGrad)" />
                  <ellipse cx="130" cy="95" rx="54" ry="19" stroke="rgba(95,145,255,0.35)" strokeWidth="1" />

                  {/* Thumb */}
                  <path d="M79 95 C67 89,60 76,66 63 C70 55,80 58,84 69 L84 95 Z" fill="url(#fingerGrad)" stroke="rgba(95,145,255,0.4)" strokeWidth="0.8" />
                  <path d="M70 77 C72 71,77 68,82 70" stroke="rgba(95,145,255,0.22)" strokeWidth="0.6" fill="none" />

                  {/* Index */}
                  <path d="M97 79 C95 62,97 41,101 25 C104 14,113 12,116 23 C119 36,117 60,115 79 Z" fill="url(#fingerGrad)" stroke="rgba(95,145,255,0.4)" strokeWidth="0.8" />
                  <path d="M98 57 C99 48,104 42,108 44" stroke="rgba(95,145,255,0.2)" strokeWidth="0.6" fill="none" />

                  {/* Middle */}
                  <path d="M116 77 C114 56,116 34,120 17 C123 7,132 5,135 15 C138 29,137 55,135 77 Z" fill="url(#fingerGrad)" stroke="rgba(95,145,255,0.4)" strokeWidth="0.8" />
                  <path d="M117 52 C118 43,123 37,127 39" stroke="rgba(95,145,255,0.2)" strokeWidth="0.6" fill="none" />

                  {/* Ring */}
                  <path d="M136 77 C134 59,136 39,139 25 C142 15,150 13,153 23 C156 36,154 59,152 77 Z" fill="url(#fingerGrad)" stroke="rgba(95,145,255,0.4)" strokeWidth="0.8" />
                  <path d="M137 55 C138 47,143 41,147 43" stroke="rgba(95,145,255,0.2)" strokeWidth="0.6" fill="none" />

                  {/* Pinky */}
                  <path d="M153 79 C152 63,154 47,157 35 C160 25,168 24,170 33 C172 44,170 63,168 79 Z" fill="url(#fingerGrad)" stroke="rgba(95,145,255,0.4)" strokeWidth="0.8" />
                  <path d="M154 60 C155 53,160 48,164 50" stroke="rgba(95,145,255,0.2)" strokeWidth="0.6" fill="none" />

                  {/* Knuckle arc */}
                  <path d="M97 80 Q130 75 167 80" stroke="rgba(95,145,255,0.28)" strokeWidth="0.8" fill="none" />

                  {/* Suit glow shimmer */}
                  <ellipse cx="130" cy="96" rx="36" ry="7" fill="rgba(95,145,255,0.06)" />

                  <defs>
                    <linearGradient id="sleeveGrad" x1="78" y1="108" x2="182" y2="152" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#0d1628" />
                      <stop offset="100%" stopColor="#060a14" />
                    </linearGradient>
                    <linearGradient id="palmGrad" x1="76" y1="76" x2="184" y2="114" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#1a2540" />
                      <stop offset="100%" stopColor="#0a1020" />
                    </linearGradient>
                    <linearGradient id="fingerGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                      <stop offset="0%" stopColor="#1e2e4a" />
                      <stop offset="100%" stopColor="#0c1624" />
                    </linearGradient>
                  </defs>
                </svg>
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
