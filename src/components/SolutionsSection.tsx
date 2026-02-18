import React, { useState } from 'react';
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
      { icon: <BarChart3 className="w-4 h-4" />, label: 'Alta Conversão' },
    ],
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
      { icon: <Heart className="w-4 h-4" />, label: '+Engajamento' },
    ],
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
      { icon: <Eye className="w-4 h-4" />, label: 'Mais Visibilidade' },
    ],
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
      { icon: <RefreshCw className="w-4 h-4" />, label: 'Otimização Contínua' },
    ],
  },
];

const SolutionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [fading, setFading] = useState(false);

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
    <section id="solucoes" className="bg-[#050505] py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 text-[#5F91FF] mb-3">
            <div className="w-2 h-2 bg-[#5F91FF] rounded-full animate-pulse" />
            <span className="text-sm font-medium">Nossas Soluções</span>
            <div className="w-2 h-2 bg-[#5F91FF] rounded-full animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
            Tudo Que Sua Empresa Precisa{' '}
            <span className="text-[#5F91FF]">Para Crescer</span>
          </h2>
          <p className="text-[#888] text-base max-w-xl mx-auto">
            Soluções completas para impulsionar sua presença digital e transformar visitantes em clientes.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              onClick={() => handleTabChange(i)}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                activeTab === i
                  ? 'bg-[#5F91FF]/15 border-[#5F91FF]/60 text-[#5F91FF]'
                  : 'bg-white/3 border-white/8 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/5'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          className="grid md:grid-cols-5 gap-8 md:gap-12 items-center"
          style={{
            opacity: fading ? 0 : 1,
            transform: fading ? 'translateY(8px)' : 'translateY(0)',
            transition: 'opacity 0.25s ease, transform 0.25s ease',
          }}
        >
          {/* Image — 40% (2/5) */}
          <div className="md:col-span-2 flex justify-center">
            <div className="relative group w-full max-w-sm md:max-w-none">
              <div className="absolute -inset-3 bg-[#5F91FF]/12 rounded-2xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <img
                key={tab.id}
                src={tab.image}
                alt={tab.imageAlt}
                className="relative z-10 w-full rounded-2xl border border-white/8 shadow-2xl shadow-black/60 object-cover"
                style={{ maxHeight: '380px', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Content — 60% (3/5) */}
          <div className="md:col-span-3 space-y-5">
            {/* Badge */}
            <div className="inline-flex">
              <span className="bg-[#5F91FF]/15 border border-[#5F91FF]/30 text-[#5F91FF] text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">
                {tab.badge}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-white text-3xl sm:text-4xl font-bold leading-tight">
              {tab.title}
            </h3>

            {/* Description */}
            <p className="text-[#888] text-base leading-relaxed max-w-[500px]">
              {tab.description}
            </p>

            {/* Mini cards */}
            <div className="grid grid-cols-3 gap-3">
              {tab.cards.map((card, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl border border-white/8 bg-white/[0.03] hover:border-[#5F91FF]/30 hover:bg-[#5F91FF]/5 transition-all duration-300 text-center"
                >
                  <div className="text-[#5F91FF]">{card.icon}</div>
                  <span className="text-white text-xs font-medium leading-snug">{card.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 bg-[#5F91FF] hover:bg-[#4a7ee8] text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(95,145,255,0.35)] text-sm"
            >
              Quero Começar Agora
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;
