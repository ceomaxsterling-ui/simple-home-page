
import React, { memo, useRef } from 'react';
import { Users, Target, Zap, TrendingUp, Shield, Rocket } from 'lucide-react';
import AchievementsCarousel from './AchievementsCarousel';

const ChallengesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const achievements = [
    {
      icon: <Users className="w-7 h-7 text-[#00D1FF]" />,
      number: "500+",
      title: "Negócios Ativos",
      description: "Comunidade crescente de empreendedores de diversos segmentos utilizando nossas estratégias diariamente para maximizar resultados e escalar seus negócios digitais com metodologia comprovada.",
      gradient: "from-[#00D1FF]/20 to-[#00D1FF]/10",
      borderColor: "border-[#00D1FF]/30",
      featured: false,
    },
    {
      icon: <Target className="w-7 h-7 text-[#00D1FF]" />,
      number: "97%",
      title: "Taxa de Sucesso dos Projetos",
      description: "Nossos projetos são otimizados com metodologia exclusiva testada rigorosamente. Cada elemento é desenvolvido para converter visitantes em clientes, independente do seu segmento de atuação.",
      gradient: "from-[#00D1FF]/25 to-[#00D1FF]/15",
      borderColor: "border-[#00D1FF]/40",
      featured: true,
    },
    {
      icon: <Zap className="w-7 h-7 text-[#00D1FF]" />,
      number: "24/7",
      title: "Suporte Especializado",
      description: "Atendimento especializado via chat ao vivo, WhatsApp prioritário e suporte técnico via Telegram para resolver problemas do seu negócio e otimizar resultados rapidamente.",
      gradient: "from-[#00D1FF]/20 to-[#00D1FF]/10",
      borderColor: "border-[#00D1FF]/30",
      featured: false,
    },
    {
      icon: <TrendingUp className="w-7 h-7 text-[#00D1FF]" />,
      number: "300%",
      title: "Aumento Médio em Resultados",
      description: "Nossos clientes conseguem em média um aumento de 300% em conversões, leads qualificados e vendas após implementação da nossa metodologia. Resultados comprovados em diversos segmentos.",
      gradient: "from-[#00D1FF]/25 to-[#00D1FF]/15",
      borderColor: "border-[#00D1FF]/40",
      featured: true,
    },
    {
      icon: <Shield className="w-7 h-7 text-[#00D1FF]" />,
      number: "100%",
      title: "Garantia de Entrega",
      description: "Confiança total em nossos serviços. Oferecemos garantia completa de entrega do seu projeto funcional e otimizado, independente do segmento, porque sabemos que nossa metodologia funciona.",
      gradient: "from-[#00D1FF]/20 to-[#00D1FF]/10",
      borderColor: "border-[#00D1FF]/30",
      featured: false,
    },
    {
      icon: <Rocket className="w-7 h-7 text-[#00D1FF]" />,
      number: "R$ 50K+",
      title: "Faturamento Médio dos Clientes",
      description: "Nossos principais clientes atingem faturamentos superiores a R$ 50.000 mensais utilizando nossa estrutura otimizada e ferramentas exclusivas de automação e conversão em diversos segmentos.",
      gradient: "from-[#00D1FF]/25 to-[#00D1FF]/15",
      borderColor: "border-[#00D1FF]/40",
      featured: false,
    },
  ];

  return (
    <section
      id="challenges"
      ref={sectionRef}
      className="relative bg-black py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      {/* Top edge glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,209,255,0.5), transparent)' }}
      />
      <div className="light-ellipse" style={{ top: '-80px', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '300px' }} />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Resultados Que Falam Por Si:{' '}
            <span className="title-neon">O Sucesso dos Nossos Clientes</span>{' '}
            é a Nossa Maior Conquista
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Acreditamos que os números contam a melhor história. Nossos cases de sucesso
            abrangem diversos segmentos e demonstram o impacto real da{' '}
            <span className="text-[#00D1FF] font-semibold">Metodologia Orion de Alavancagem</span>.
          </p>
        </div>

        <div className="px-0 md:px-6">
          <AchievementsCarousel achievements={achievements} />
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-[#00D1FF]/5 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tr from-[#00D1FF]/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default memo(ChallengesSection);
