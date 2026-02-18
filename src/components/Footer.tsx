import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import { useFacebookPixel } from '@/hooks/useFacebookPixel';

const Footer = () => {
  const { trackViewContent } = useFacebookPixel();
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (linkName: string) => {
    trackViewContent(`Footer - ${linkName}`);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFooterLinkClick = (linkName: string, sectionId: string) => {
    handleLinkClick(linkName);
    scrollToSection(sectionId);
  };

  const footerLinks = {
    services: [
      { label: 'Criação de Projetos', sectionId: 'solucoes' },
      { label: 'Reestruturação', sectionId: 'solucoes' },
      { label: 'Design Premium', sectionId: 'solucoes' },
      { label: 'Consultoria Gratuita', sectionId: 'consultoria' },
    ],
    company: [
      { label: 'Sobre Nós', sectionId: 'hero' },
      { label: 'Cases de Sucesso', sectionId: 'provas' },
      { label: 'Depoimentos', sectionId: 'provas' },
      { label: 'Nosso Processo', sectionId: 'solucoes' },
    ],
    support: [
      { label: 'Central de Ajuda', sectionId: 'faq' },
      { label: 'FAQ', sectionId: 'faq' },
      { label: 'Contato', sectionId: 'consultoria' },
      { label: 'Consultoria Gratuita', sectionId: 'consultoria' },
    ],
  };

  return (
    <footer
      className="relative"
      style={{ backgroundColor: '#0A0A1A' }}
    >
      {/* Top glow connector */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, #61A4F8, #FF00FF, transparent)',
          boxShadow: '0 0 10px #61A4F8, 0 0 20px rgba(255,0,255,0.3)',
        }}
      />
      {/* Gradient fade from last section */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(97, 164, 248, 0.06), transparent)',
        }}
      />

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute bottom-0 left-10 w-80 h-80 rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, #61A4F8, transparent)' }}
        />
        <div
          className="absolute top-10 right-10 w-64 h-64 rounded-full blur-3xl opacity-8"
          style={{ background: 'radial-gradient(circle, #FF00FF, transparent)' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Links Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://i.postimg.cc/4N8Dk04j/Design-sem-nome.png"
                  alt="Orion Logo"
                  className="h-10 w-auto object-contain"
                  style={{ filter: 'drop-shadow(0 0 5px #61A4F8)' }}
                />
                <h3
                  className="text-2xl font-bold text-white tracking-widest"
                  style={{ letterSpacing: '0.12em' }}
                >
                  ORION
                </h3>
              </div>
              <p className="text-white/60 leading-relaxed text-sm">
                Construímos estratégias que levam empresas a outro nível. Traçando rotas de crescimento para quem recusa o ordinário.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { icon: Phone, text: '+55 85 8441-0835' },
                { icon: Mail, text: 'contatoorion@gmail.com' },
                { icon: Clock, text: 'Dom - Dom: 6h às 0h' },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center space-x-3 text-white/60">
                  <Icon
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: '#61A4F8', filter: 'drop-shadow(0 0 4px #61A4F8)' }}
                  />
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleFooterLinkClick(link.label, link.sectionId)}
                    className="flex items-center space-x-2 text-white/50 text-sm transition-all duration-300 group"
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = '#61A4F8';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.5)';
                    }}
                  >
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-5">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleFooterLinkClick(link.label, link.sectionId)}
                    className="flex items-center space-x-2 text-white/50 text-sm transition-all duration-300 group"
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = '#61A4F8';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.5)';
                    }}
                  >
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-5">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest">Suporte</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleFooterLinkClick(link.label, link.sectionId)}
                    className="flex items-center space-x-2 text-white/50 text-sm transition-all duration-300 group"
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = '#61A4F8';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.5)';
                    }}
                  >
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="py-6"
          style={{ borderTop: '1px solid rgba(97, 164, 248, 0.1)' }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-white/40 text-sm">
              © {currentYear} Orion. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              {['Termos de Uso', 'Política de Privacidade', 'Cookies'].map((label, i) => (
                <React.Fragment key={label}>
                  {i > 0 && <Separator orientation="vertical" className="h-3" style={{ backgroundColor: 'rgba(97,164,248,0.2)' }} />}
                  <a
                    href="#"
                    onClick={() => handleLinkClick(label)}
                    className="text-white/40 text-xs transition-colors duration-300"
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#61A4F8'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.4)'; }}
                  >
                    {label}
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
