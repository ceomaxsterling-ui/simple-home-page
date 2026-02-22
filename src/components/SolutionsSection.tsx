import React, { useState, useRef } from 'react';
import { Smartphone, Search, BarChart3, Calendar, Palette, Heart, Map, Star, Eye, Target, DollarSign, RefreshCw, ArrowRight, Monitor } from 'lucide-react';
import mockupWebsites from '@/assets/mockup-websites.jpg';
import mockupInstagram from '@/assets/mockup-instagram.jpg';
import mockupGoogle from '@/assets/mockup-google.jpg';
import mockupAds from '@/assets/mockup-ads.jpg';

const tabs = [
{
  id: 'sites',
  label: 'Sites & Landing Pages',
  image: mockupWebsites,
  imageAlt: 'Mockup de sites profissionais modernos',
  title: 'Sites que Convertem',
  description: 'Desenvolvemos sites institucionais e landing pages de alta performance, otimizados para SEO e focados em converter visitantes em clientes.',
  badge: '100% Personalizado',
  cards: [
  { icon: <Smartphone className="w-4 h-4" />, label: 'Responsivo' },
  { icon: <Search className="w-4 h-4" />, label: 'SEO Otimizado' },
  { icon: <BarChart3 className="w-4 h-4" />, label: 'Alta Conversão' }]

},
{
  id: 'social',
  label: 'Social Media',
  image: mockupInstagram,
  imageAlt: 'Feed profissional do Instagram em smartphone',
  title: 'Gestão de Instagram',
  description: 'Criamos conteúdo estratégico e visual impactante para construir autoridade e engajamento real com seu público-alvo.',
  badge: '+150% Engajamento',
  cards: [
  { icon: <Calendar className="w-4 h-4" />, label: 'Conteúdo Estratégico' },
  { icon: <Palette className="w-4 h-4" />, label: 'Design Profissional' },
  { icon: <Heart className="w-4 h-4" />, label: '+Engajamento' }]

},
{
  id: 'google',
  label: 'Google Meu Negócio',
  image: mockupGoogle,
  imageAlt: 'Google Meu Negócio otimizado com avaliações 5 estrelas',
  title: 'Google Meu Negócio',
  description: 'Otimizamos seu perfil para aparecer nas buscas locais, atrair clientes da região e se destacar com avaliações positivas.',
  badge: 'Buscas Locais',
  cards: [
  { icon: <Map className="w-4 h-4" />, label: 'Buscas Locais' },
  { icon: <Star className="w-4 h-4" />, label: 'Avaliações 5★' },
  { icon: <Eye className="w-4 h-4" />, label: 'Mais Visibilidade' }]

},
{
  id: 'ads',
  label: 'Tráfego Pago',
  image: mockupAds,
  imageAlt: 'Dashboard de anúncios com métricas de performance',
  title: 'Gestão de Tráfego Pago',
  description: 'Campanhas estratégicas no Google Ads e Meta Ads com segmentação precisa e otimização constante para máximo ROI.',
  badge: 'ROI Comprovado',
  cards: [
  { icon: <Target className="w-4 h-4" />, label: 'Google & Meta Ads' },
  { icon: <DollarSign className="w-4 h-4" />, label: 'ROI Comprovado' },
  { icon: <RefreshCw className="w-4 h-4" />, label: 'Otimização Contínua' }]

}];


const SolutionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [fading, setFading] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (index: number) => {
    if (index === activeTab) return;
    setFading(true);
    setTimeout(() => {
      setActiveTab(index);
      setFading(false);
    }, 200);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contato') || document.getElementById('cta');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const tab = tabs[activeTab];

  return (
    <section
      id="solucoes"
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #050505 0%, #04060c 40%, #050505 100%)'
      }}>

      {/* Top edge glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(95,145,255,0.4), transparent)' }} />

      {/* Bottom edge glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(95,145,255,0.4), transparent)' }} />

      {/* Right ambient orb */}
      <div
        className="absolute right-0 top-1/3 w-[350px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 100% 50%, rgba(95,145,255,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }} />

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(95,145,255,0.1) 0%, transparent 70%)',
          filter: 'blur(30px)'
        }} />


      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl relative z-10">

        {/* Header */}
        <div className="text-center mb-8 md:mb-12 px-2">
          <div className="inline-flex items-center gap-2 text-[#5F91FF] mb-3">
            <div className="w-2 h-2 bg-[#5F91FF] rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-medium">Nossas Soluções</span>
            <div className="w-2 h-2 bg-[#5F91FF] rounded-full animate-pulse" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
            Tudo Que Sua Empresa Precisa{' '}
            <span className="text-primary">Para Crescer</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Soluções completas para impulsionar sua presença digital e transformar visitantes em clientes.
          </p>
        </div>

        {/* Tabs — STACKED on mobile (grid 2x2), row on md+ */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-2 mb-8 md:mb-10">
          {tabs.map((t, i) =>
          <button
            key={t.id}
            onClick={() => handleTabChange(i)}
            className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 border whitespace-nowrap w-full md:w-auto ${
            activeTab === i ?
            'bg-[#5F91FF]/15 border-[#5F91FF]/60 text-[#5F91FF] shadow-[0_0_12px_rgba(95,145,255,0.25)]' :
            'bg-white/3 border-white/8 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/5'}`
            }>

              {t.label}
            </button>
          )}
        </div>

        {/* Content — stacked on mobile */}
        <div
          className="flex flex-col md:grid md:grid-cols-5 gap-6 md:gap-12 items-center"
          style={{
            opacity: fading ? 0 : 1,
            transform: fading ? 'translateY(8px)' : 'translateY(0)',
            transition: 'opacity 0.25s ease, transform 0.25s ease'
          }}>

          {/* Image */}
          <div className="md:col-span-2 flex justify-center w-full">
            <div className="relative group w-full max-w-sm md:max-w-none">
              <div
                className="absolute -inset-3 rounded-2xl pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse, rgba(95,145,255,0.18) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                  transition: 'opacity 0.5s ease'
                }} />

              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  border: '1px solid rgba(95,145,255,0.25)',
                  boxShadow: '0 0 30px rgba(95,145,255,0.15)'
                }}>

                <img
                  key={tab.id}
                  src={tab.image}
                  alt={tab.imageAlt}
                  className="w-full object-cover"
                  style={{ maxHeight: '280px', objectFit: 'cover' }}
                  loading="lazy" />

              </div>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-3 space-y-4 md:space-y-5">
            {/* Badge */}
            <div className="inline-flex">
              <span className="bg-[#5F91FF]/15 border border-[#5F91FF]/30 text-[#5F91FF] text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">
                {tab.badge}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              {tab.title}
            </h3>

            {/* Description */}
            <p className="text-[#888] text-sm md:text-base leading-relaxed">
              {tab.description}
            </p>

            {/* Mini cards */}
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {tab.cards.map((card, i) =>
              <div
                key={i}
                className="relative flex flex-col items-center gap-1.5 md:gap-2 p-2 md:p-3 rounded-xl transition-all duration-300 text-center overflow-hidden"
                style={{
                  border: '1px solid rgba(30,144,255,0.2)',
                  background: 'linear-gradient(135deg, rgba(30,144,255,0.08) 0%, rgba(15,20,25,0.9) 100%)',
                  boxShadow: '0 0 15px rgba(30,144,255,0.08)',
                  backdropFilter: 'blur(10px)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(37,168,245,0.4)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 30px rgba(30,144,255,0.2)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(30,144,255,0.2)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 15px rgba(30,144,255,0.08)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}>

                  <div style={{ filter: 'drop-shadow(0 0 8px rgba(30,144,255,0.6))' }} className="text-[#1E90FF]">{card.icon}</div>
                  <span style={{ color: '#FFFFFF' }} className="text-xs font-medium leading-snug">{card.label}</span>
                </div>
              )}
            </div>

            {/* CTA */}
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 text-white font-bold px-5 py-2.5 md:px-6 md:py-3 rounded-xl transition-all duration-300 hover:scale-105 text-sm w-full md:w-auto justify-center md:justify-start"
              style={{
                background: '#1E90FF',
                boxShadow: '0 0 0 rgba(30,144,255,0)'
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = '#1C86EE';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 24px rgba(30,144,255,0.4)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = '#1E90FF';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 0 rgba(30,144,255,0)';
              }}>

              Quero Começar Agora
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>);

};

export default SolutionsSection;