import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { MapPin, Phone, Mail, Clock, ChevronRight, Shield, Award, Users, TrendingUp } from 'lucide-react';
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
  const stats = [{
    icon: Users,
    value: '100+',
    label: 'Projetos Criados'
  }, {
    icon: TrendingUp,
    value: '95%',
    label: 'Taxa de Sucesso'
  }, {
    icon: Award,
    value: '7 dias',
    label: 'Prazo Médio'
  }, {
    icon: Shield,
    value: '24/7',
    label: 'Suporte'
  }];
  return <footer className="relative bg-black border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6">
        {/* Links and Contact Section */}
        <div className="py-10 md:py-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info — full width on mobile */}
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
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-[#5F91FF] flex-shrink-0" />
                <span className="text-sm">+55 85 8441-0835</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-[#5F91FF] flex-shrink-0" />
                <span className="text-xs sm:text-sm break-all">contatoorion@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-4 h-4 text-[#5F91FF] flex-shrink-0" />
                <span className="text-sm">Dom - Dom: 6h às 0h</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-white">Serviços</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => <li key={index}>
                  <button onClick={() => handleFooterLinkClick(link.label, link.sectionId)} className="flex items-center space-x-2 text-gray-400 hover:text-[#5F91FF] transition-colors duration-300 group text-left text-sm">
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
                  <button onClick={() => handleFooterLinkClick(link.label, link.sectionId)} className="flex items-center space-x-2 text-gray-400 hover:text-[#5F91FF] transition-colors duration-300 group text-left text-sm">
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
                  <button onClick={() => handleFooterLinkClick(link.label, link.sectionId)} className="flex items-center space-x-2 text-gray-400 hover:text-[#5F91FF] transition-colors duration-300 group text-left text-sm">
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                    <span>{link.label}</span>
                  </button>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-5 md:py-8 border-t border-gray-800">
          <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
            <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © {currentYear} Orion. Todos os direitos reservados.
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
              <a href="#" onClick={() => handleLinkClick('Termos de Uso')} className="text-gray-400 hover:text-[#5F91FF] transition-colors duration-300">
                Termos de Uso
              </a>
              <span className="text-gray-700">|</span>
              <a href="#" onClick={() => handleLinkClick('Política de Privacidade')} className="text-gray-400 hover:text-[#5F91FF] transition-colors duration-300">
                Privacidade
              </a>
              <span className="text-gray-700">|</span>
              <a href="#" onClick={() => handleLinkClick('Cookies')} className="text-gray-400 hover:text-[#5F91FF] transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5F91FF]/3 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/3 rounded-full blur-3xl"></div>
      </div>
    </footer>;
};
export default Footer;