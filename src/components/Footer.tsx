import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import { useFacebookPixel } from '@/hooks/useFacebookPixel';

const Footer = () => {
  const { trackViewContent } = useFacebookPixel();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFooterLinkClick = (linkName: string, sectionId: string) => {
    trackViewContent(`Footer - ${linkName}`);
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
      { label: 'Nossa Metodologia', sectionId: 'solucoes' },
      { label: 'FAQ', sectionId: 'faq' },
    ],
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: '#081B2D' }}>
      {/* Gradient divider top */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(97,164,248,0.4), transparent)' }} />

      {/* Subtle blob */}
      <div className="absolute bottom-0 left-0 w-80 h-48 pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(97,164,248,0.04) 0%, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="container mx-auto px-6">
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center space-x-3">
              <img
                src="https://i.postimg.cc/4N8Dk04j/Design-sem-nome.png"
                alt="Orion Logo"
                className="h-[40px] w-auto object-contain"
                style={{ imageRendering: 'crisp-edges', filter: 'drop-shadow(0 0 6px rgba(97,164,248,0.4))' }}
              />
              <h3 className="font-display text-2xl font-bold text-white tracking-tight">ORION</h3>
            </div>
            <p className="text-white/40 leading-relaxed text-sm max-w-xs">
              Construímos estratégias que levam empresas a outro nível. Traçando rotas de crescimento para quem recusa o ordinário.
            </p>
            <div className="space-y-3">
              {[
                { Icon: Phone, text: '+55 85 8441-0835' },
                { Icon: Mail, text: 'contatoorion@gmail.com' },
                { Icon: Clock, text: 'Dom - Dom: 6h às 0h' },
              ].map(({ Icon, text }, i) => (
                <div key={i} className="flex items-center space-x-3 group">
                  <Icon className="w-4 h-4 text-[#61A4F8] flex-shrink-0 opacity-70" />
                  <span className="text-sm text-white/40 group-hover:text-white/70 transition-colors duration-200">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { title: 'Serviços', links: footerLinks.services },
            { title: 'Empresa', links: footerLinks.company },
          ].map(({ title, links }) => (
            <div key={title} className="space-y-5">
              <h4 className="font-display text-sm font-semibold text-white/90 uppercase tracking-widest">{title}</h4>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <button
                      onClick={() => handleFooterLinkClick(link.label, link.sectionId)}
                      className="flex items-center space-x-2 text-white/40 hover:text-[#61A4F8] transition-colors duration-300 group text-sm"
                    >
                      <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" />
                      <span>{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="h-px w-full mb-6" style={{ background: 'rgba(97,164,248,0.08)' }} />
        <div className="pb-8 flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
          <div className="text-white/30 text-xs">
            © {currentYear} Orion Companny. Todos os direitos reservados.
          </div>
          <div className="flex items-center space-x-5 text-xs">
            {['Termos de Uso', 'Privacidade', 'Cookies'].map((label, i) => (
              <React.Fragment key={label}>
                {i > 0 && <Separator orientation="vertical" className="h-3 bg-white/10" />}
                <a href="#" className="text-white/30 hover:text-[#61A4F8] transition-colors duration-300">
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
