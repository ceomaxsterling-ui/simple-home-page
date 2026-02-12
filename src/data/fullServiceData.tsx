
import React from 'react';
import { Palette, TrendingUp, Users, Megaphone, Video, Target, Grid3x3, MapPin, MessageSquareMore } from 'lucide-react';

export const fullServiceData = [
  {
    icon: <Palette className="w-8 h-8 text-elevix-blue" />,
    title: "Identidade Visual e Design",
    subtitle: "ESTRATÉGIA E BRANDING",
    description: "Desenvolvemos a identidade visual completa da sua marca, desde o logo até o manual de uso, garantindo coerência e impacto em todos os pontos de contato.",
    whyItWorks: "Reconhecimento de marca, profissionalismo, diferenciação no mercado. Para negócios locais, infoprodutores e e-commerces que buscam uma imagem forte e memorável.",
    metrics: [
      { value: "100%", label: "Personalizada" },
      { value: "Único", label: "Design" }
    ],
    features: [],
    isLarge: true,
    gradient: "from-elevix-blue/15 to-blue-500/10",
    borderColor: "border-elevix-blue/30",
    buttonText: "Ver Portfólio"
  },
  {
    icon: <Target className="w-6 h-6 text-elevix-blue" />,
    title: "Planejamento Estratégico Digital",
    subtitle: "ESTRATÉGIA E BRANDING",
    description: "Criamos planos de marketing digital personalizados, com análise de mercado, definição de público-alvo, jornada do cliente e táticas para alcançar seus objetivos.",
    whyItWorks: "Direcionamento claro, otimização de recursos, resultados mensuráveis. Para todos os tipos de negócio que precisam de um mapa claro para o sucesso digital.",
    metrics: [
      { value: "Claro", label: "Direcionamento" },
      { value: "Mensurável", label: "Resultados" }
    ],
    features: [],
    isLarge: false,
    gradient: "from-elevix-blue/10 to-blue-500/5",
    borderColor: "border-elevix-blue/20",
    buttonText: "Agendar Consulta"
  },
  {
    icon: <Megaphone className="w-6 h-6 text-elevix-blue" />,
    title: "Gestão de Tráfego Pago",
    subtitle: "PERFORMANCE E AQUISIÇÃO",
    description: "Gerenciamos suas campanhas de anúncios em plataformas como Google Ads, Meta Ads (Facebook/Instagram), TikTok Ads, focando em maximizar o ROI, gerar leads qualificados e impulsionar vendas.",
    whyItWorks: "Aumento de leads/vendas, otimização de custos, alcance segmentado. Para infoprodutores, e-commerces e negócios locais que buscam escalar sua aquisição de clientes.",
    metrics: [
      { value: "ROI", label: "Maximizado" },
      { value: "Leads", label: "Qualificados" }
    ],
    features: [],
    isLarge: false,
    gradient: "from-elevix-blue/10 to-blue-500/5",
    borderColor: "border-elevix-blue/20",
    buttonText: "Escalar Vendas"
  },
  {
    icon: <Video className="w-8 h-8 text-elevix-blue" />,
    title: "Criação de Criativos (Vídeo e Imagem)",
    subtitle: "PERFORMANCE E AQUISIÇÃO",
    description: "Produzimos vídeos e imagens de alta qualidade, otimizados para campanhas de marketing digital, com foco em engajamento e conversão. Do roteiro à edição final.",
    whyItWorks: "Maior taxa de cliques (CTR), melhor performance de anúncios, comunicação visual impactante. Para infoprodutores (lançamentos), e-commerces (produtos) e negócios locais (promoções).",
    metrics: [
      { value: "CTR", label: "Otimizado" },
      { value: "Impactante", label: "Visual" },
      { value: "Multi", label: "Plataforma" }
    ],
    features: [],
    isLarge: true,
    gradient: "from-elevix-blue/15 to-blue-500/10",
    borderColor: "border-elevix-blue/30",
    buttonText: "Ver Criativos"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-elevix-blue" />,
    title: "Otimização de Conversão (CRO)",
    subtitle: "PERFORMANCE E AQUISIÇÃO",
    description: "Analisamos o comportamento do usuário em seu site ou landing page e implementamos melhorias para aumentar a taxa de conversão, transformando visitantes em clientes.",
    whyItWorks: "Mais vendas com o mesmo tráfego, melhor experiência do usuário, aumento do ROI. Para e-commerces, infoprodutores e negócios com presença online que buscam otimizar o funil de vendas.",
    metrics: [
      { value: "+85%", label: "Conversão" },
      { value: "Testado", label: "A/B Tests" },
      { value: "Dados", label: "Baseado" }
    ],
    features: [],
    isLarge: true,
    gradient: "from-elevix-blue/15 to-blue-500/10",
    borderColor: "border-elevix-blue/30",
    buttonText: "Aumentar Vendas"
  },
  {
    icon: <Grid3x3 className="w-6 h-6 text-elevix-blue" />,
    title: "Design de Social Media",
    subtitle: "PRESENÇA E RELACIONAMENTO",
    description: "Desenvolvemos um calendário editorial visual e criamos posts, stories e capas que fortalecem a presença da sua marca nas redes sociais, gerando engajamento e comunidade.",
    whyItWorks: "Marca forte nas redes, maior engajamento, atração de novos seguidores. Para negócios locais, infoprodutores e e-commerces que querem uma gestão de redes sociais profissional.",
    metrics: [
      { value: "Engajamento", label: "Alto" },
      { value: "Consistente", label: "Presença" }
    ],
    features: [],
    isLarge: false,
    gradient: "from-elevix-blue/10 to-blue-500/5",
    borderColor: "border-elevix-blue/20",
    buttonText: "Ver Exemplos"
  },
  {
    icon: <MapPin className="w-6 h-6 text-elevix-blue" />,
    title: "Configuração e Otimização Google Meu Negócio",
    subtitle: "PRESENÇA E RELACIONAMENTO",
    description: "Otimizamos seu perfil no Google Meu Negócio para que sua empresa apareça em destaque nas buscas locais do Google Maps e da pesquisa, atraindo clientes próximos.",
    whyItWorks: "Mais clientes locais, maior visibilidade, melhor reputação online. Para negócios locais (restaurantes, clínicas, lojas físicas, etc.).",
    metrics: [
      { value: "Visibilidade", label: "Local" },
      { value: "Clientes", label: "Próximos" }
    ],
    features: [],
    isLarge: false,
    gradient: "from-elevix-blue/10 to-blue-500/5",
    borderColor: "border-elevix-blue/20",
    buttonText: "Otimizar Perfil"
  },
  {
    icon: <MessageSquareMore className="w-6 h-6 text-elevix-blue" />,
    title: "Automação de Atendimento e Vendas",
    subtitle: "PRESENÇA E RELACIONAMENTO",
    description: "Implementamos chatbots, funis de e-mail marketing e sistemas de CRM para automatizar o atendimento ao cliente, qualificar leads e otimizar o processo de vendas, liberando tempo para sua equipe.",
    whyItWorks: "Atendimento 24/7, leads mais qualificados, aumento da eficiência de vendas. Para todos os tipos de negócio que buscam escalar atendimento e vendas sem perder a qualidade.",
    metrics: [
      { value: "24/7", label: "Disponível" },
      { value: "Leads", label: "Qualificados" }
    ],
    features: [],
    isLarge: false,
    gradient: "from-elevix-blue/10 to-blue-500/5",
    borderColor: "border-elevix-blue/20",
    buttonText: "Automatizar Agora"
  }
];
