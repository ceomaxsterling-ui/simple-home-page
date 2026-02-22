import React, { useRef } from 'react';
import { Rocket, TrendingUp, Handshake } from 'lucide-react';

const ArsenalSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      icon: <Rocket strokeWidth={1.5} className="w-8 h-8 icon-neon-glow" style={{ color: '#00D1FF' }} />,
      title: 'Nossa Missão',
      text: 'Colocar empresas em uma nova órbita de crescimento',
    },
    {
      icon: <TrendingUp strokeWidth={1.5} className="w-8 h-8 icon-neon-glow" style={{ color: '#00D1FF' }} />,
      title: 'Resultados',
      text: 'ROI médio de +300% e 98% de satisfação',
    },
    {
      icon: <Handshake strokeWidth={1.5} className="w-8 h-8 icon-neon-glow" style={{ color: '#00D1FF' }} />,
      title: 'Compromisso',
      text: 'Transparência total e foco no seu crescimento',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #050505 0%, #040a14 45%, #050505 100%)',
      }}
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,209,255,0.4), transparent)' }}
      />
      {/* Light ellipse top */}
      <div className="light-ellipse" style={{ top: '-80px', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '350px' }} />
      {/* Right deep orb */}
      <div className="light-ellipse" style={{ right: '-100px', bottom: '-50px', width: '500px', height: '500px', opacity: 0.4 }} />
      {/* Cosmic particles */}
      {[
        { left: '5%',  top: '40%', size: 1.5, delay: '0s',   duration: '10s' },
        { left: '95%', top: '20%', size: 2,   delay: '3s',   duration: '8s'  },
        { left: '60%', top: '70%', size: 1,   delay: '1.5s', duration: '12s' },
        { left: '15%', top: '70%', size: 1.5, delay: '5s',   duration: '9s'  },
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
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00D1FF]/30 bg-[#00D1FF]/5 text-[#00D1FF] text-xs sm:text-sm font-medium tracking-wide backdrop-blur-sm">
            Sobre Nós
          </span>
        </div>

        {/* Title */}
        <div className="text-center mb-3 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            Nascemos da Inconformidade com o{' '}
            <span className="title-neon">Marketing Genérico</span>
          </h2>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-8 md:mb-12 px-2">
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Enquanto o mercado se contentava com promessas vazias, nós criamos algo que realmente funciona.
          </p>
        </div>

        {/* 2-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-stretch">

          {/* Left: Logo card */}
          <div className="flex items-center justify-center">
            <div className="relative w-full" style={{ minHeight: '340px' }}>
              <div className="light-ellipse" style={{ inset: '0', width: '100%', height: '100%' }} />

              <div
                className="relative w-full h-full flex items-center justify-center rounded-2xl glass-card-strong"
                style={{
                  minHeight: '340px',
                  animation: 'floatOrion 5s ease-in-out infinite',
                }}
              >
                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-5 h-5 border-t border-l" style={{ borderColor: 'rgba(0,209,255,0.6)' }} />
                <div className="absolute top-3 right-3 w-5 h-5 border-t border-r" style={{ borderColor: 'rgba(0,209,255,0.6)' }} />
                <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l" style={{ borderColor: 'rgba(0,209,255,0.6)' }} />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r" style={{ borderColor: 'rgba(0,209,255,0.6)' }} />

                {/* Scan lines */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden opacity-20"
                  style={{
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,209,255,0.08) 3px, rgba(0,209,255,0.08) 4px)',
                  }}
                />

                {/* Pulsing rings */}
                <div className="absolute rounded-full" style={{ width: '200px', height: '200px', border: '1px solid rgba(0,209,255,0.3)', animation: 'pulseRing 3s ease-in-out infinite' }} />
                <div className="absolute rounded-full" style={{ width: '250px', height: '250px', border: '1px solid rgba(0,209,255,0.12)', animation: 'pulseRing 3s ease-in-out infinite 0.7s' }} />

                {/* Logo */}
                <img
                  src="https://i.postimg.cc/4N8Dk04j/Design-sem-nome.png"
                  alt="Orion Logo"
                  draggable={false}
                  style={{
                    width: '180px',
                    height: '180px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 0 24px rgba(0,209,255,1)) drop-shadow(0 0 60px rgba(0,209,255,0.6))',
                    userSelect: 'none',
                    position: 'relative',
                    zIndex: 1,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right: Cards — glassmorphism */}
          <div className="flex flex-col gap-5">
            {cards.map((card, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl cursor-default glass-card relative overflow-hidden"
              >
                {/* Inner top glow */}
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,209,255,0.3), transparent)' }} />
                <div className="flex items-center gap-4">
                  <div
                    className="flex-shrink-0 p-2.5 rounded-xl"
                    style={{
                      background: 'rgba(0,209,255,0.08)',
                      border: '1px solid rgba(0,209,255,0.2)',
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
