
import React, { memo, useRef } from 'react';
import { Users, Target, Zap, TrendingUp, Shield, Rocket } from 'lucide-react';
import AchievementsCarousel from './AchievementsCarousel';

const ChallengesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const achievements = [
  {
    icon: <Users className="w-7 h-7 text-blue-400" />,
    number: "500+",
    title: "Negócios Ativos",
    description: "Comunidade crescente de empreendedores de diversos segmentos utilizando nossas estratégias diariamente para maximizar resultados e escalar seus negócios digitais com metodologia comprovada.",
    gradient: "from-blue-500/20 to-blue-500/10",
    borderColor: "border-blue-500/30",
    featured: false
  },
  {
    icon: <Target className="w-7 h-7 text-blue-400" />,
    number: "97%",
    title: "Taxa de Sucesso dos Projetos",
    description: "Nossos projetos são otimizados com metodologia exclusiva testada rigorosamente. Cada elemento é desenvolvido para converter visitantes em clientes, independente do seu segmento de atuação.",
    gradient: "from-blue-500/25 to-blue-600/15",
    borderColor: "border-blue-500/40",
    featured: true
  },
  {
    icon: <Zap className="w-7 h-7 text-blue-400" />,
    number: "24/7",
    title: "Suporte Especializado",
    description: "Atendimento especializado via chat ao vivo, WhatsApp prioritário e suporte técnico via Telegram para resolver problemas do seu negócio e otimizar resultados rapidamente.",
    gradient: "from-blue-600/20 to-blue-400/10",
    borderColor: "border-blue-400/30",
    featured: false
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-blue-300" />,
    number: "300%",
    title: "Aumento Médio em Resultados",
    description: "Nossos clientes conseguem em média um aumento de 300% em conversões, leads qualificados e vendas após implementação da nossa metodologia. Resultados comprovados em diversos segmentos.",
    gradient: "from-blue-400/25 to-blue-500/15",
    borderColor: "border-blue-400/40",
    featured: true
  },
  {
    icon: <Shield className="w-7 h-7 text-blue-500" />,
    number: "100%",
    title: "Garantia de Entrega",
    description: "Confiança total em nossos serviços. Oferecemos garantia completa de entrega do seu projeto funcional e otimizado, independente do segmento, porque sabemos que nossa metodologia funciona.",
    gradient: "from-blue-500/20 to-blue-600/10",
    borderColor: "border-blue-500/30",
    featured: false
  },
  {
    icon: <Rocket className="w-7 h-7 text-blue-500" />,
    number: "R$ 50K+",
    title: "Faturamento Médio dos Clientes",
    description: "Nossos principais clientes atingem faturamentos superiores a R$ 50.000 mensais utilizando nossa estrutura otimizada e ferramentas exclusivas de automação e conversão em diversos segmentos.",
    gradient: "from-blue-500/25 to-blue-400/15",
    borderColor: "border-blue-500/40",
    featured: false
  }];


  return (
    <section
      id="challenges"
      ref={sectionRef}
      className="relative bg-black py-12 sm:py-16 md:py-20 overflow-hidden">

      {/* Top edge glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)' }} />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.1) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }} />


      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Resultados Que Falam Por Si:{' '}
            <span className="text-primary">O Sucesso dos Nossos Clientes</span>{' '}
            é a Nossa Maior Conquista
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Acreditamos que os números contam a melhor história. Nossos cases de sucesso
            abrangem diversos segmentos e demonstram o impacto real da{' '}
            <span className="text-blue-400 font-semibold">Metodologia Orion de Alavancagem</span>.
          </p>
        </div>

        <div className="px-0 md:px-6">
          <AchievementsCarousel achievements={achievements} />
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tr from-blue-400/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </section>);

};

export default memo(ChallengesSection);