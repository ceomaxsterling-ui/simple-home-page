import React from 'react';
import { Button } from '@/components/ui/button';
import MobileNavigation from './MobileNavigation';
import { useFacebookPixel } from '@/hooks/useFacebookPixel';
import { WHATSAPP_URL } from '@/config/links';

const Header = () => {
  const { trackButtonClick, trackContact } = useFacebookPixel();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppRedirect = () => {
    trackButtonClick('Quero Escalar', 'Header');
    trackContact('WhatsApp');
    window.open(WHATSAPP_URL, '_blank');
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md border-b"
      style={{ background: 'rgba(16,48,81,0.85)', borderColor: 'rgba(97,164,248,0.12)' }}>
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="https://i.postimg.cc/4N8Dk04j/Design-sem-nome.png"
              alt="Orion Logo"
              style={{ imageRendering: 'crisp-edges', filter: 'drop-shadow(0 0 8px rgba(97,164,248,0.5))' }}
              className="h-[44px] w-auto object-contain"
            />
            <span className="text-xl sm:text-2xl font-bold text-white font-display tracking-tight"
              style={{ textShadow: '0 0 20px rgba(97,164,248,0.4)' }}>
              ORION
            </span>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Soluções', id: 'solucoes' },
              { label: 'Cases', id: 'provas' },
              { label: 'Consultoria', id: 'consultoria' },
              { label: 'FAQ', id: 'faq' },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-white/70 hover:text-white text-sm font-medium transition-all duration-300 relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#61A4F8] group-hover:w-full transition-all duration-300 rounded-full" />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center space-x-3">
            <Button
              onClick={handleWhatsAppRedirect}
              className="btn-glow btn-shimmer text-white font-semibold px-5 sm:px-7 py-2.5 text-sm sm:text-base transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #61A4F8, #3b82f6)',
                border: 'none',
                borderRadius: '999px',
              }}
            >
              <span className="hidden sm:inline">Iniciar Minha Jornada →</span>
              <span className="sm:hidden">Começar</span>
            </Button>
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
