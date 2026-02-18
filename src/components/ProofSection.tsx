import React, { useState, memo } from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp, Star, ArrowRight, CheckCircle, Store, ShoppingCart, Quote, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/config/links';
import AnimatedCounter from '@/components/AnimatedCounter';

const ProofSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cases = [
    {
      clientName: "Maria Silva",
      businessType: "Restaurante Sabor da Terra",
      businessCategory: "Negócio Local",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      challenge: "Baixa visibilidade online e dificuldade em atrair novos clientes. O restaurante dependia apenas do movimento de passagem e não tinha presença digital estruturada.",
      solution: "Implementamos Google Meu Negócio otimizado, identidade visual completa, gestão de tráfego local e design de social media com conteúdo estratégico para engajar a comunidade local.",
      results: [
        { label: "Clientes Novos", value: "+280%" },
        { label: "Visibilidade Google", value: "+450%" },
        { label: "Engajamento Social", value: "+320%" }
      ],
      testimonial: "A Orion transformou completamente nosso negócio. Hoje temos fila de espera todos os dias e nosso faturamento triplicou. A metodologia deles realmente funciona!",
      rating: 5,
      icon: Store,
    },
    {
      clientName: "Ricardo Mendes",
      businessType: "Expert Digital Academy",
      businessCategory: "Infoprodutor",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      challenge: "Lançamentos com baixa conversão e alto custo de aquisição de leads. As campanhas não geravam o ROI esperado e o funil de vendas tinha muitos vazamentos.",
      solution: "Desenvolvemos criativos de alto impacto, otimização completa do funil (CRO), gestão de tráfego pago estratégica e automação de atendimento para qualificar leads automaticamente.",
      results: [
        { label: "Redução no CPL", value: "-65%" },
        { label: "Conversões", value: "+340%" },
        { label: "ROI das Campanhas", value: "+420%" }
      ],
      testimonial: "Meu último lançamento bateu R$ 850 mil em faturamento graças à Orion. A equipe entende profundamente de lançamentos e entregou resultados que eu nunca tinha visto antes.",
      rating: 5,
      icon: TrendingUp,
    },
    {
      clientName: "Juliana Costa",
      businessType: "Loja de Moda Elegance",
      businessCategory: "E-commerce",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      challenge: "Loja online com visual amador e taxa de conversão muito baixa. Tráfego chegava mas não convertia, resultando em alto desperdício de investimento em anúncios.",
      solution: "Criamos identidade visual completa, redesenhamos toda a loja focando em conversão (CRO), implementamos criativos profissionais e gestão de tráfego multicanal.",
      results: [
        { label: "Faturamento", value: "+390%" },
        { label: "Taxa de Conversão", value: "+285%" },
        { label: "Ticket Médio", value: "+125%" }
      ],
      testimonial: "Em 3 meses com a Orion, meu faturamento foi de R$ 15 mil para R$ 73 mil mensais. A transformação foi completa — do visual às estratégias de venda.",
      rating: 5,
      icon: ShoppingCart,
    }
  ];

  const currentCase = cases[currentSlide];

  return (
    <section id="provas" className="py-20 sm:py-28 relative overflow-hidden"
      style={{ background: '#081B2D' }}>
      {/* Subtle background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(97,164,248,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-8"
            style={{ background: 'rgba(97,164,248,0.08)', border: '1px solid rgba(97,164,248,0.18)' }}>
            <CheckCircle className="w-4 h-4 text-[#61A4F8]" />
            <span className="text-[#61A4F8] font-medium text-sm">Missões Concluídas</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Histórias Reais.{' '}
            <span style={{ background: 'linear-gradient(135deg, #61A4F8, #a8d1ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Crescimento Real.
            </span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Empresas que chegaram com desafios reais — e foram além do que elas mesmas esperavam.
          </p>
        </div>

        {/* Números em tipografia grande */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto mb-20">
          {[
            { value: 15, prefix: 'R$', suffix: 'M+', label: 'Gerados para clientes' },
            { value: 280, prefix: '+', suffix: '%', label: 'Média de crescimento' },
            { value: 50, prefix: '+', suffix: '', label: 'Empresas atendidas' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-none mb-2"
                style={{ background: 'linear-gradient(135deg, #61A4F8, #a8d1ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {stat.prefix}<AnimatedCounter target={stat.value} duration={2000} />{stat.suffix}
              </div>
              <div className="text-white/40 text-xs sm:text-sm font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Case principal */}
        <div className="max-w-5xl mx-auto mb-12 md:mb-16">
          <div className="relative rounded-3xl overflow-hidden"
            style={{ background: 'rgba(16,48,81,0.5)', border: '1px solid rgba(97,164,248,0.12)', backdropFilter: 'blur(16px)' }}>
            <div className="p-6 sm:p-8 md:p-10">
              {/* Header do case */}
              <div className="flex items-start gap-4 sm:gap-6 mb-8">
                <div className="relative flex-shrink-0">
                  <img
                    src={currentCase.avatar}
                    alt={currentCase.clientName}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover"
                    style={{ border: '2px solid rgba(97,164,248,0.25)' }}
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(97,164,248,0.15)', border: '1px solid rgba(97,164,248,0.25)' }}>
                    <currentCase.icon className="w-4 h-4 text-[#61A4F8]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1">{currentCase.clientName}</h3>
                  <p className="text-[#61A4F8] font-medium text-sm mb-2">{currentCase.businessType}</p>
                  <span className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{ background: 'rgba(97,164,248,0.10)', color: '#61A4F8', border: '1px solid rgba(97,164,248,0.20)' }}>
                    {currentCase.businessCategory}
                  </span>
                  <div className="flex gap-1 mt-3">
                    {[...Array(currentCase.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#61A4F8] text-[#61A4F8]" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Desafio / Solução */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="rounded-2xl p-5"
                  style={{ background: 'rgba(8,27,45,0.6)', border: '1px solid rgba(239,68,68,0.12)' }}>
                  <h4 className="text-xs font-bold text-red-400 mb-3 uppercase tracking-widest flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                    Desafio Inicial
                  </h4>
                  <p className="text-sm text-white/60 leading-relaxed">{currentCase.challenge}</p>
                </div>
                <div className="rounded-2xl p-5"
                  style={{ background: 'rgba(8,27,45,0.6)', border: '1px solid rgba(97,164,248,0.15)' }}>
                  <h4 className="text-xs font-bold text-[#61A4F8] mb-3 uppercase tracking-widest flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Solução Orion
                  </h4>
                  <p className="text-sm text-white/60 leading-relaxed">{currentCase.solution}</p>
                </div>
              </div>

              {/* Resultados — números grandes */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {currentCase.results.map((result, idx) => (
                  <div key={idx} className="text-center rounded-2xl p-4"
                    style={{ background: 'rgba(97,164,248,0.05)', border: '1px solid rgba(97,164,248,0.12)' }}>
                    <div className="font-display font-bold text-2xl sm:text-3xl md:text-4xl mb-1"
                      style={{ background: 'linear-gradient(135deg, #61A4F8, #a8d1ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {result.value}
                    </div>
                    <div className="text-white/40 text-xs uppercase tracking-wider">{result.label}</div>
                  </div>
                ))}
              </div>

              {/* Depoimento */}
              <div className="rounded-2xl p-5 sm:p-6 relative"
                style={{ background: 'rgba(97,164,248,0.04)', border: '1px solid rgba(97,164,248,0.10)' }}>
                <Quote className="absolute top-4 right-4 w-8 h-8 text-[rgba(97,164,248,0.15)]" />
                <p className="text-sm sm:text-base text-white/70 leading-relaxed italic">"{currentCase.testimonial}"</p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-px w-10 bg-[rgba(97,164,248,0.35)]" />
                  <span className="text-xs text-[#61A4F8] font-medium">{currentCase.clientName}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrentSlide(prev => prev === 0 ? cases.length - 1 : prev - 1)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{ background: 'rgba(97,164,248,0.10)', border: '1px solid rgba(97,164,248,0.20)' }}
              aria-label="Anterior"
            >
              <ArrowRight className="h-5 w-5 rotate-180 text-[#61A4F8]" />
            </button>
            <div className="flex gap-2">
              {cases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: index === currentSlide ? '2rem' : '0.5rem',
                    background: index === currentSlide ? '#61A4F8' : 'rgba(97,164,248,0.25)',
                  }}
                  aria-label={`Case ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrentSlide(prev => prev === cases.length - 1 ? 0 : prev + 1)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{ background: 'rgba(97,164,248,0.10)', border: '1px solid rgba(97,164,248,0.20)' }}
              aria-label="Próximo"
            >
              <ArrowRight className="h-5 w-5 text-[#61A4F8]" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-xl mx-auto text-center">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Pronto Para Escrever Seu{' '}
            <span style={{ background: 'linear-gradient(135deg, #61A4F8, #a8d1ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Próprio Case?
            </span>
          </h3>
          <p className="text-white/60 mb-8 leading-relaxed">
            Sua empresa tem potencial para ir mais longe. Vamos provar isso juntos.
          </p>
          <Button
            size="lg"
            onClick={() => window.open(WHATSAPP_URL, '_blank')}
            className="btn-glow text-white font-semibold px-10 py-5 text-base group transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #61A4F8, #3b82f6)', border: 'none', borderRadius: '999px' }}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Falar com Especialistas
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default memo(ProofSection);
