import React, { useState, memo } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, Star, ArrowRight, CheckCircle, Store, ShoppingCart, Quote, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/config/links';

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
    { label: "Aumento em Clientes Novos", value: "+280%" },
    { label: "Visibilidade no Google", value: "+450%" },
    { label: "Engajamento Social", value: "+320%" }],

    testimonial: "A Orion transformou completamente nosso negócio. Hoje temos fila de espera todos os dias e nosso faturamento triplicou. A metodologia deles realmente funciona!",
    rating: 5,
    icon: Store,
    gradient: "from-elevix-blue/20 to-blue-600/20",
    borderColor: "border-elevix-blue/30"
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
    { label: "Aumento em Conversões", value: "+340%" },
    { label: "ROI das Campanhas", value: "+420%" }],

    testimonial: "Meu último lançamento bateu R$ 850 mil em faturamento graças à Orion. A equipe entende profundamente de lançamentos e entregou resultados que eu nunca tinha visto antes.",
    rating: 5,
    icon: TrendingUp,
    gradient: "from-elevix-blue/20 to-blue-600/20",
    borderColor: "border-elevix-blue/30"
  },
  {
    clientName: "Juliana Costa",
    businessType: "Loja de Moda Elegance",
    businessCategory: "E-commerce",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    challenge: "Loja online com visual amador e taxa de conversão muito baixa. Tráfego chegava mas não convertia, resultando em alto desperdício de investimento em anúncios.",
    solution: "Criamos identidade visual completa, redesenhamos toda a loja focando em conversão (CRO), implementamos criativos profissionais e gestão de tráfego multicanal (Meta, Google, TikTok).",
    results: [
    { label: "Aumento no Faturamento", value: "+390%" },
    { label: "Taxa de Conversão", value: "+285%" },
    { label: "Ticket Médio", value: "+125%" }],

    testimonial: "Em 3 meses com a Orion, meu faturamento foi de R$ 15 mil para R$ 73 mil mensais. A transformação foi completa - do visual às estratégias de venda. Recomendo de olhos fechados!",
    rating: 5,
    icon: ShoppingCart,
    gradient: "from-elevix-blue/20 to-blue-600/20",
    borderColor: "border-elevix-blue/30"
  }];


  const handlePrevious = () => {
    setCurrentSlide((prev) => prev === 0 ? cases.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => prev === cases.length - 1 ? 0 : prev + 1);
  };

  const handleWhatsAppRedirect = () => {
    window.open(WHATSAPP_URL, '_blank');
  };

  const currentCase = cases[currentSlide];

  return (
    <section id="provas" className="py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-elevix-blue/8 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-elevix-blue/8 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-elevix-blue/10 to-blue-500/10 rounded-full px-4 sm:px-8 py-2 sm:py-3 mb-4 sm:mb-8 border border-elevix-blue/20 backdrop-blur-sm">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-elevix-blue flex-shrink-0" />
            <span className="text-blue-300 font-semibold text-xs sm:text-base">Missões Concluídas</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight">
            Histórias Reais. Crescimento Real.{' '}
            <span className="text-elevix-blue">
              Empresas Que Foram Além.
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Conheça as histórias de transformação de empresas que chegaram até nós com desafios reais — e foram além do que{' '}
            <span className="text-elevix-blue font-semibold">elas mesmas esperavam</span>.
          </p>
        </div>

        {/* Main Case Display */}
        <div className="max-w-6xl mx-auto mb-12 md:mb-16">
          <div className="relative">
            <Card className={`bg-gradient-to-br ${currentCase.gradient} border ${currentCase.borderColor} backdrop-blur-sm overflow-hidden`}>
              <div className="p-6 sm:p-8 md:p-10">
                {/* Header com Avatar e Info */}
                <div className="flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="relative flex-shrink-0">
                    <img
                      src={currentCase.avatar}
                      alt={currentCase.clientName}
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-elevix-blue/30" />

                    <div className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-elevix-blue/20 to-blue-500/20 flex items-center justify-center border-2 border-elevix-blue/30">
                      <currentCase.icon className="w-4 h-4 sm:w-5 sm:h-5 text-elevix-blue" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">
                      {currentCase.clientName}
                    </h3>
                    <p className="text-base sm:text-lg text-elevix-blue font-semibold mb-1">
                      {currentCase.businessType}
                    </p>
                    <Badge className="bg-elevix-blue/10 text-elevix-blue border-elevix-blue/20 px-3 py-1 text-xs font-semibold">
                      {currentCase.businessCategory}
                    </Badge>

                    {/* Rating Stars */}
                    <div className="flex gap-1 mt-3">
                      {[...Array(currentCase.rating)].map((_, i) =>
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-elevix-blue text-elevix-blue" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                  {/* Desafio Inicial */}
                  <div className="bg-gray-900/40 border border-gray-700/30 rounded-2xl p-4 sm:p-6">
                    <h4 className="text-sm sm:text-base font-bold text-red-400 mb-3 uppercase tracking-wide flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full" />
                      Desafio Inicial
                    </h4>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {currentCase.challenge}
                    </p>
                  </div>

                  {/* Solução Orion */}
                  <div className="bg-gray-900/40 border border-elevix-blue/30 rounded-2xl p-4 sm:p-6">
                    <h4 className="text-sm sm:text-base font-bold text-elevix-blue mb-3 uppercase tracking-wide flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                      Solução Orion
                    </h4>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {currentCase.solution}
                    </p>
                  </div>
                </div>

                {/* Resultados Alcançados */}
                <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-2xl p-5 sm:p-6 md:p-8 border border-elevix-blue/20 backdrop-blur-sm mb-6 sm:mb-8">
                  <h4 className="text-base sm:text-lg font-bold text-elevix-blue mb-4 sm:mb-6 uppercase tracking-wide text-center">
                    Resultados Alcançados
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    {currentCase.results.map((result, idx) =>
                    <div key={idx} className="bg-gray-800/50 rounded-xl p-4 sm:p-5 border border-gray-700/30 text-center">
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-elevix-blue mb-2">
                          {result.value}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">
                          {result.label}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Depoimento */}
                <div className="bg-gradient-to-br from-elevix-blue/10 to-blue-900/5 border border-elevix-blue/20 rounded-2xl p-5 sm:p-6 md:p-8 relative">
                  <Quote className="absolute top-4 right-4 w-8 h-8 sm:w-12 sm:h-12 text-elevix-blue/20" />
                  <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed italic relative z-10">
                    "{currentCase.testimonial}"
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="h-1 w-12 bg-elevix-blue/40 rounded" />
                    <span className="text-xs sm:text-sm text-elevix-blue font-semibold">
                      {currentCase.clientName}
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevious}
              className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 bg-gray-800/80 border border-gray-600/50 text-white hover:bg-gray-700/80 h-10 w-10 sm:h-12 sm:w-12 rounded-full backdrop-blur-sm transition-all duration-200 flex items-center justify-center"
              aria-label="Case anterior">

              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 rotate-180" />
            </button>

            <button
              onClick={handleNext}
              className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 bg-gray-800/80 border border-gray-600/50 text-white hover:bg-gray-700/80 h-10 w-10 sm:h-12 sm:w-12 rounded-full backdrop-blur-sm transition-all duration-200 flex items-center justify-center"
              aria-label="Próximo case">

              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Slide Indicators */}
            













          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-br from-elevix-blue/10 via-gray-900/80 to-blue-500/10 border border-elevix-blue/30 backdrop-blur-sm p-8 sm:p-10 md:p-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Pronto Para Escrever Seu{' '}
              <span className="text-elevix-blue">Próprio Case</span>?
            </h3>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
              Sua empresa tem potencial para ir mais longe do que você imagina. Vamos provar isso juntos.
            </p>
            <Button
              size="lg"
              onClick={handleWhatsAppRedirect}
              className="bg-gradient-to-r from-elevix-blue to-blue-600 hover:from-blue-hover hover:to-blue-700 text-white font-bold px-6 sm:px-12 py-3 sm:py-6 text-base sm:text-lg rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-elevix-blue/25 hover:scale-105 group">

              <MessageCircle className="hidden sm:block w-6 h-6 mr-2" />
              Falar com Especialistas
              <ArrowRight className="hidden sm:block w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        </div>
      </div>
    </section>);

};

export default memo(ProofSection);