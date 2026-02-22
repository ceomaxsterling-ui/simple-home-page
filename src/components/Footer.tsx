import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Clock, ChevronRight, Shield, Award, Users, TrendingUp } from 'lucide-react';
import { useFacebookPixel } from '@/hooks/useFacebookPixel';
const Footer = () => {
  const {
    trackViewContent
  } = useFacebookPixel();
  const currentYear = new Date().getFullYear();
  const handleLinkClick = (linkName: string) => {
    trackViewContent(`Footer - ${linkName}`);
  };
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const handleFooterLinkClick = (linkName: string, sectionId: string) => {
    handleLinkClick(linkName);
    scrollToSection(sectionId);
  };
  const footerLinks = {
    services: [{
      label: 'Criação de Projetos',
      sectionId: 'solucoes'
    }, {
      label: 'Reestruturação',
      sectionId: 'solucoes'
    }, {
      label: 'Design Premium',
      sectionId: 'solucoes'
    }, {
      label: 'Consultoria Gratuita',
      sectionId: 'consultoria'
    }],
    company: [{
      label: 'Sobre Nós',
      sectionId: 'hero'
    }, {
      label: 'Cases de Sucesso',
      sectionId: 'provas'
    }, {
      label: 'Depoimentos',
      sectionId: 'provas'
    }, {
      label: 'Nosso Processo',
      sectionId: 'solucoes'
    }],
    support: [{
      label: 'Central de Ajuda',
      sectionId: 'faq'
    }, {
      label: 'FAQ',
      sectionId: 'faq'
    }, {
      label: 'Contato',
      sectionId: 'consultoria'
    }, {
      label: 'Consultoria Gratuita',
      sectionId: 'consultoria'
    }]
  };
  return <footer className="relative bg-black border-t border-[#00D1FF]/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="py-10 md:py-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-1 space-y-4 md:space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <img src="https://i.postimg.cc/4N8Dk04j/Design-sem-nome.png" alt="Orion Logo" className="h-9 sm:h-11 w-auto object-contain" style={{ imageRendering: 'crisp-edges' }} />
                <h3 className="text-2xl font-bold text-white">ORION</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Construímos estratégias que levam empresas a outro nível. Traçando rotas de crescimento para quem recusa o ordinário.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-[#00D1FF] flex-shrink-0" />
                <span className="text-sm">+55 85 8441-0835</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-[#00D1FF] flex-shrink-0" />
                <span className="text-xs sm:text-sm break-all">contatoorion@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-4 h-4 text-[#00D1FF] flex-shrink-0" />
                <span className="text-sm">Dom - Dom: 6h às 0h</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-white">Serviços</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => <li key={index}>
                  <button onClick={() => handleFooterLinkClick(link.label, link.sectionId)} className="flex items-center space-x-2 text-gray-400 hover:text-[#00D1FF] transition-colors duration-300 group text-left text-sm">
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                    <span>{link.label}</span>
                  </button>
                </li>)}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-white">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => <li key={index}>
                  <button onClick={() => handleFooterLinkClick(link.label, link.sectionId)} className="flex items-center space-x-2 text-gray-400 hover:text-[#00D1FF] transition-colors duration-300 group text-left text-sm">
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                    <span>{link.label}</span>
                  </button>
                </li>)}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-white">Suporte</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => <li key={index}>
                  <button onClick={() => handleFooterLinkClick(link.label, link.sectionId)} className="flex items-center space-x-2 text-gray-400 hover:text-[#00D1FF] transition-colors duration-300 group text-left text-sm">
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                    <span>{link.label}</span>
                  </button>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-5 md:py-8 border-t border-white/5">
          <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
            <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © {currentYear} Orion. Todos os direitos reservados.
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
              <a href="#" onClick={() => handleLinkClick('Termos de Uso')} className="text-gray-400 hover:text-[#00D1FF] transition-colors duration-300">
                Termos de Uso
              </a>
              <span className="text-gray-700">|</span>
              <a href="#" onClick={() => handleLinkClick('Política de Privacidade')} className="text-gray-400 hover:text-[#00D1FF] transition-colors duration-300">
                Privacidade
              </a>
              <span className="text-gray-700">|</span>
              <a href="#" onClick={() => handleLinkClick('Cookies')} className="text-gray-400 hover:text-[#00D1FF] transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(0,209,255,0.03)' }} />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl" style={{ background: 'rgba(0,209,255,0.03)' }} />
      </div>
    </footer>;
};
export default Footer;
