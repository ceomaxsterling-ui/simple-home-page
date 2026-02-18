import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import mockupWebsites from '@/assets/mockup-websites.jpg';
import mockupInstagram from '@/assets/mockup-instagram.jpg';
import mockupGoogle from '@/assets/mockup-google.jpg';
import mockupAds from '@/assets/mockup-ads.jpg';

const solutions = [
  {
    id: 'websites',
    badge: '100% Personalizado',
    subtitle: 'Desenvolvimento Web Profissional',
    title: 'Sites que Convertem\nVisitantes em Clientes',
    description:
      'Criamos sites institucionais e landing pages de alta performance, otimizados para conversão e preparados para posicionar sua marca no topo das buscas. Design moderno, responsivo e focado em resultados.',
    benefits: [
      'Design Responsivo (Mobile-First)',
      'Otimização SEO',
      'Alta Velocidade de Carregamento',
      'Focado em Conversão',
      'Tecnologia de Ponta',
    ],
    image: mockupWebsites,
    imageAlt: 'Mockup de sites profissionais em desktop',
    imageRight: true,
  },
  {
    id: 'instagram',
    badge: '+150% Engajamento',
    subtitle: 'Gestão Completa de Instagram',
    title: 'Sua Marca Brilhando\nnas Redes Sociais',
    description:
      'Transformamos seu Instagram em uma máquina de atrair e engajar clientes. Criamos conteúdo estratégico, visual impactante e copywriting persuasivo para construir uma comunidade fiel em torno da sua marca.',
    benefits: [
      'Criação de Conteúdo Estratégico',
      'Design Profissional',
      'Copywriting Persuasivo',
      'Agendamento Inteligente',
      'Análise de Métricas',
    ],
    image: mockupInstagram,
    imageAlt: 'Mockup de Instagram profissional no smartphone',
    imageRight: false,
  },
  {
    id: 'google',
    badge: 'Buscas Locais',
    subtitle: 'Otimização Google Meu Negócio',
    title: 'Seja Encontrado por\nClientes Próximos a Você',
    description:
      'Colocamos sua empresa no mapa — literalmente. Otimizamos seu perfil no Google para aparecer nas buscas locais, atrair clientes da região e se destacar da concorrência com avaliações positivas e informações precisas.',
    benefits: [
      'Otimização Completa do Perfil',
      'Apareça no Google Maps',
      'Gestão de Avaliações',
      'Posts Semanais',
      'Relatórios de Performance',
    ],
    image: mockupGoogle,
    imageAlt: 'Mockup do Google Meu Negócio com avaliações 5 estrelas',
    imageRight: true,
  },
  {
    id: 'ads',
    badge: 'ROI Comprovado',
    subtitle: 'Gestão Profissional de Tráfego Pago',
    title: 'Anúncios que Geram\nResultados Reais',
    description:
      'Maximizamos seu ROI com campanhas estratégicas no Google Ads, Meta Ads e outras plataformas. Segmentação precisa, copywriting persuasivo e otimização constante para transformar cada real investido em lucro.',
    benefits: [
      'Google Ads & Meta Ads',
      'Segmentação Precisa',
      'Otimização Contínua',
      'Relatórios Transparentes',
      'Foco em ROI',
    ],
    image: mockupAds,
    imageAlt: 'Dashboard de tráfego pago com métricas de conversão',
    imageRight: false,
  },
];

interface SolutionBlockProps {
  solution: typeof solutions[0];
  index: number;
}

const SolutionBlock: React.FC<SolutionBlockProps> = ({ solution, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contato') || document.getElementById('cta');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const imageFirst = !solution.imageRight;

  return (
    <div
      ref={ref}
      className={`flex flex-col ${imageFirst ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16 lg:gap-24 transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Text side */}
      <div className="flex-1 w-full space-y-5 md:space-y-7">
        {/* Badge */}
        <div className="inline-flex">
          <span className="bg-[#5F91FF]/15 border border-[#5F91FF]/30 text-[#5F91FF] text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">
            {solution.badge}
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-[#5F91FF] text-sm md:text-base font-semibold tracking-wide uppercase">
          {solution.subtitle}
        </p>

        {/* Title */}
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight whitespace-pre-line">
          {solution.title}
        </h2>

        {/* Description */}
        <p className="text-[#888] text-base md:text-lg leading-relaxed max-w-xl">
          {solution.description}
        </p>

        {/* Benefits */}
        <ul className="space-y-3">
          {solution.benefits.map((benefit, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-gray-300 text-sm md:text-base group cursor-default transition-all duration-200 hover:text-white"
            >
              <CheckCircle className="w-5 h-5 text-[#5F91FF] flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={scrollToContact}
          className="inline-flex items-center gap-2 mt-2 bg-[#5F91FF] hover:bg-[#4a7ee8] text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(95,145,255,0.4)] text-sm md:text-base"
        >
          Quero Começar Agora
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Image side */}
      <div className="flex-1 w-full flex justify-center">
        <div className="relative group w-full max-w-sm md:max-w-none">
          {/* Glow */}
          <div className="absolute -inset-4 bg-[#5F91FF]/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />
          <div className="absolute -inset-1 bg-gradient-to-br from-[#5F91FF]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <img
            src={solution.image}
            alt={solution.imageAlt}
            className="relative z-10 w-full rounded-2xl border border-white/8 shadow-2xl shadow-black/60 group-hover:-translate-y-2 transition-transform duration-500 object-cover"
            style={{ maxHeight: '420px', objectFit: 'cover' }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

const SolutionsSection: React.FC = () => {
  return (
    <section id="solucoes" className="bg-[#050505] py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 text-[#5F91FF] mb-4">
            <div className="w-2 h-2 bg-[#5F91FF] rounded-full animate-pulse" />
            <span className="text-sm md:text-base font-medium">Nossas Soluções</span>
            <div className="w-2 h-2 bg-[#5F91FF] rounded-full animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Tudo Que Sua Empresa Precisa{' '}
            <span className="text-[#5F91FF]">Para Crescer</span>
          </h2>
          <p className="text-[#888] text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            Soluções completas e personalizadas para impulsionar sua presença digital e transformar visitantes em clientes.
          </p>
        </div>

        {/* Solution blocks */}
        <div className="space-y-24 md:space-y-32 lg:space-y-40">
          {solutions.map((solution, index) => (
            <SolutionBlock key={solution.id} solution={solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
