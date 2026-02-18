import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Phone, Mail, Clock, ChevronRight, Shield, Award, Users, TrendingUp } from 'lucide-react';
import { useFacebookPixel } from '@/hooks/useFacebookPixel';

const Footer = () => {
  const { trackViewContent } = useFacebookPixel();
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (linkName: string) => trackViewContent(`Footer - ${linkName}`);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFooterLinkClick = (linkName: string, sectionId: string) => {
    handleLinkClick(linkName);
    scrollToSection(sectionId);
  };

  const footerLinks = {
    services: [
      { label: 'Estratégia e Branding', sectionId: 'solucoes' },
      { label: 'Performance e Aquisição', sectionId: 'solucoes' },
      { label: 'Presença Digital', sectionId: 'solucoes' },
      { label: 'Consultoria Gratuita', sectionId: 'consultoria' },
    ],
    company: [
      { label: 'Sobre Nós', sectionId: 'hero' },
      { label: 'Cases de Sucesso', sectionId: 'provas' },
      { label: 'Depoimentos', sectionId: 'provas' },
      { label: 'Nossa Metodologia', sectionId: 'solucoes' },
    ],
    support: [
      { label: 'Central de Ajuda', sectionId: 'faq' },
      { label: 'FAQ', sectionId: 'faq' },
      { label: 'Contato', sectionId: 'consultoria' },
      { label: 'Consultoria Gratuita', sectionId: 'consultoria' },
    ],
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: '#020810' }}>
      {/* Gradient divider top */}
      <div className="footer-divider" />

      {/* Subtle blob */}
      <div className="absolute bottom-0 left-0 w-96 h-64 pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(79,142,247,0.04) 0%, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="container mx-auto px-6">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://i.postimg.cc/4N8Dk04j/Design-sem-nome.png"
                  alt="Orion Logo"
                  className="h-[40px] sm:h-[52px] w-auto object-contain"
                  style={{ imageRendering: 'crisp-edges' }}
                />
                <h3 className="font-display text-3xl font-bold text-white">ORION</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                Construímos estratégias que levam empresas a outro nível. Traçando rotas de crescimento para quem recusa o ordinário.
              </p>
              <p className="text-[rgba(79,142,247,0.7)] text-xs mt-2 italic">
                Navegando marcas para além do ordinário.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { Icon: Phone, text: '+55 85 8441-0835' },
                { Icon: Mail, text: 'contatoorion@gmail.com' },
                { Icon: Clock, text: 'Dom - Dom: 6h às 0h' },
              ].map(({ Icon, text }, i) => (
                <div key={i} className="flex items-center space-x-3 text-gray-400 group">
                  <Icon className="w-4 h-4 text-nebula-blue flex-shrink-0" />
                  <span className="text-sm group-hover:text-white transition-colors duration-200">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { title: 'Serviços', links: footerLinks.services },
            { title: 'Empresa', links: footerLinks.company },
            { title: 'Suporte', links: footerLinks.support },
          ].map(({ title, links }) => (
            <div key={title} className="space-y-6">
              <h4 className="font-display text-base font-semibold text-white">{title}</h4>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <button
                      onClick={() => handleFooterLinkClick(link.label, link.sectionId)}
                      className="flex items-center space-x-2 text-gray-400 hover:text-nebula-blue transition-colors duration-300 group text-sm"
                    >
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-nebula-blue after:transition-all after:duration-300 group-hover:after:w-full">
                        {link.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="footer-divider mb-8" />
        <div className="pb-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-gray-500 text-sm">
            © {currentYear} Orion Companny. Todos os direitos reservados.
          </div>
          <div className="flex items-center space-x-6 text-sm">
            {['Termos de Uso', 'Política de Privacidade', 'Cookies'].map((label, i) => (
              <React.Fragment key={label}>
                {i > 0 && <Separator orientation="vertical" className="h-4 bg-gray-800" />}
                <a href="#" onClick={() => handleLinkClick(label)}
                  className="text-gray-500 hover:text-nebula-blue transition-colors duration-300">
                  {label}
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
