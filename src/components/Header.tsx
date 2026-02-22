import React from 'react';
import { Button } from '@/components/ui/button';
import MobileNavigation from './MobileNavigation';
import { useFacebookPixel } from '@/hooks/useFacebookPixel';
import { WHATSAPP_URL } from '@/config/links';
const Header = () => {
  const {
    trackButtonClick,
    trackContact
  } = useFacebookPixel();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const handleWhatsAppRedirect = () => {
    trackButtonClick('Quero Escalar', 'Header');
    trackContact('WhatsApp');
    window.open(WHATSAPP_URL, '_blank');
  };
  return <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-[#00D1FF]/10">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="https://i.postimg.cc/4N8Dk04j/Design-sem-nome.png" alt="Elevix Logo" style={{
            imageRendering: 'crisp-edges'
          }} className="h-[50px] sm:h-[50px] w-auto object-contain" />
            <div className="text-xl sm:text-2xl font-bold text-white">ORION</div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white hover:text-[#00D1FF] transition-colors duration-300 font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('solucoes')} className="text-white hover:text-[#00D1FF] transition-colors duration-300 font-medium">
              Soluções
            </button>
            <button onClick={() => scrollToSection('consultoria')} className="text-white hover:text-[#00D1FF] transition-colors duration-300 font-medium">
              Consultoria Gratuita
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-white hover:text-[#00D1FF] transition-colors duration-300 font-medium">
              FAQ
            </button>
          </nav>

          <div className="flex items-center space-x-3">
            <Button 
              className="font-semibold px-4 sm:px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base text-black"
              style={{
                background: '#00D1FF',
                boxShadow: '0 0 15px rgba(0,209,255,0.3)',
              }}
              onClick={handleWhatsAppRedirect}
            >
              <span className="hidden sm:inline">Iniciar Minha Jornada →</span>
              <span className="sm:hidden">Começar Agora</span>
            </Button>
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>;
};
export default Header;
