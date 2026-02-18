import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { useFacebookPixel } from '@/hooks/useFacebookPixel';
import { WHATSAPP_URL } from '@/config/links';
const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    setIsOpen(false);
  };
  const handleWhatsAppRedirect = () => {
    trackButtonClick('Quero Escalar', 'Mobile Navigation');
    trackContact('WhatsApp');
    window.open(WHATSAPP_URL, '_blank');
    setIsOpen(false);
  };
  return <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-gray-800">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 bg-black border-none">
        <div className="flex flex-col space-y-6 mt-8">
          <div className="flex items-center space-x-3 mb-6">
            <img src="https://i.postimg.cc/4N8Dk04j/Design-sem-nome.png" alt="Elevix Logo" className="h-[30px] w-auto object-contain" style={{
            imageRendering: 'crisp-edges'
          }} />
            <div className="text-2xl font-bold text-elevix-white">ORION</div>
          </div>
          
          <nav className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('solucoes')} className="text-white hover:text-elevix-blue transition-colors duration-300 font-medium text-left py-3 border-b border-gray-800 focus:outline-none">
              Soluções
            </button>
            <button onClick={() => scrollToSection('consultoria')} className="text-white hover:text-elevix-blue transition-colors duration-300 font-medium text-left py-3 border-b border-gray-800 focus:outline-none">
              Consultoria Gratuita
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-white hover:text-elevix-blue transition-colors duration-300 font-medium text-left py-3 border-b border-gray-800 focus:outline-none">
              FAQ
            </button>
          </nav>

          <Button className="bg-elevix-blue text-white hover:bg-blue-hover font-semibold px-6 py-3 rounded-xl glow-effect transition-all duration-300 hover:scale-105 w-full mt-8 focus:outline-none" onClick={handleWhatsAppRedirect}>
            Quero Escalar
          </Button>
        </div>
      </SheetContent>
    </Sheet>;
};
export default MobileNavigation;