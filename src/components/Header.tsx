import React from 'react';
import MobileNavigation from './MobileNavigation';
import { useFacebookPixel } from '@/hooks/useFacebookPixel';
import { WHATSAPP_URL } from '@/config/links';

const Header = () => {
  const { trackButtonClick, trackContact } = useFacebookPixel();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppRedirect = () => {
    trackButtonClick('Quero Escalar', 'Header');
    trackContact('WhatsApp');
    window.open(WHATSAPP_URL, '_blank');
  };

  return (
    <header
      className="fixed top-0 w-full z-50"
      style={{
        backgroundColor: 'rgba(10, 10, 26, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(97, 164, 248, 0.12)',
      }}
    >
      <div className="container mx-auto px-4 sm:px-10 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="https://i.postimg.cc/4N8Dk04j/Design-sem-nome.png"
              alt="Orion Logo"
              className="h-[44px] w-auto object-contain"
              style={{
                imageRendering: 'crisp-edges',
                filter: 'drop-shadow(0 0 6px #61A4F8)',
              }}
            />
            <span
              className="text-2xl font-bold text-white tracking-widest"
              style={{ letterSpacing: '0.15em' }}
            >
              ORION
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            {[
              { label: 'Soluções', id: 'solucoes' },
              { label: 'Cases', id: 'provas' },
              { label: 'Consultoria', id: 'consultoria' },
              { label: 'FAQ', id: 'faq' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/80 font-normal text-sm transition-all duration-300 hover:text-[#61A4F8]"
                style={{ textDecoration: 'none' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.textShadow = '0 0 8px #61A4F8';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.textShadow = 'none';
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile Nav */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handleWhatsAppRedirect}
              className="btn-neon-pill hidden sm:block text-sm font-semibold"
            >
              <span className="hidden sm:inline">Iniciar Minha Jornada →</span>
            </button>
            <button
              onClick={handleWhatsAppRedirect}
              className="btn-neon-pill sm:hidden text-sm font-semibold"
            >
              Começar
            </button>
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
