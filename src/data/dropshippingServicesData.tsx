
import React from 'react';
import { Store, Palette, Code, TrendingUp, Shield, Rocket } from 'lucide-react';

export const dropshippingServicesData = [
  {
    icon: <Store className="w-8 h-8 text-elevix-blue" />,
    title: "Loja Profissional Completa",
    subtitle: "DESIGN EXCLUSIVO",
    description: "Criamos sua loja do zero com design profissional e exclusivo. Desenvolvemos uma identidade visual única que transmite confiança e profissionalismo aos seus clientes.",
    whyItWorks: "Uma loja bem projetada é a base do sucesso no e-commerce. Nosso design focado em conversão combina estética profissional com elementos estratégicos que guiam o cliente até a compra.",
    metrics: [
      { value: "100%", label: "Personalizada" },
      { value: "Exclusivo", label: "Design" }
    ],
    features: [],
    isLarge: true,
    gradient: "from-elevix-blue/15 to-blue-500/10",
    borderColor: "border-elevix-blue/30",
    buttonText: "Ver Portfólio"
  },
  {
    icon: <Palette className="w-6 h-6 text-elevix-blue" />,
    title: "Identidade Visual Única",
    subtitle: "MARCA PROFISSIONAL",
    description: "Desenvolvemos toda a identidade visual da sua marca, incluindo logo, paleta de cores e elementos visuais que diferenciam sua loja da concorrência.",
    whyItWorks: "Uma identidade visual forte cria reconhecimento de marca e confiança. Clientes confiam mais em marcas que demonstram profissionalismo através do design.",
    metrics: [
      { value: "Logo", label: "Personalizada" },
      { value: "Cores", label: "Exclusivas" }
    ],
    features: [],
    isLarge: false,
    gradient: "from-elevix-blue/10 to-blue-500/5",
    borderColor: "border-elevix-blue/20",
    buttonText: "Ver Exemplos"
  },
  {
    icon: <Code className="w-6 h-6 text-elevix-blue" />,
    title: "Desenvolvimento Técnico",
    subtitle: "FUNCIONALIDADE AVANÇADA",
    description: "Implementamos todas as funcionalidades necessárias para sua loja funcionar perfeitamente: carrinho, checkout, pagamentos e integrações essenciais.",
    whyItWorks: "Uma loja tecnicamente bem estruturada evita problemas que podem custar vendas. Funcionalidades bem implementadas garantem uma experiência fluida para o cliente.",
    metrics: [
      { value: "100%", label: "Funcional" },
      { value: "Segura", label: "Checkout" }
    ],
    features: [],
    isLarge: false,
    gradient: "from-elevix-blue/10 to-blue-500/5",
    borderColor: "border-elevix-blue/20",
    buttonText: "Ver Recursos"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-elevix-blue" />,
    title: "Otimização para Vendas",
    subtitle: "CONVERSÃO MAXIMIZADA",
    description: "Estruturamos sua loja com técnicas comprovadas de conversão: páginas de produto persuasivas, checkout otimizado e elementos que aumentam a confiança do cliente.",
    whyItWorks: "Cada elemento da sua loja é posicionado estrategicamente para maximizar vendas. Utilizamos técnicas de psicologia do consumidor e otimização de conversão testadas no mercado.",
    metrics: [
      { value: "Otimizada", label: "Conversão" },
      { value: "Persuasiva", label: "Apresentação" },
      { value: "Confiável", label: "Experiência" }
    ],
    features: [],
    isLarge: true,
    gradient: "from-elevix-blue/15 to-blue-500/10",
    borderColor: "border-elevix-blue/30",
    buttonText: "Ver Resultados"
  },
  {
    icon: <Rocket className="w-8 h-8 text-elevix-blue" />,
    title: "Lançamento Estratégico",
    subtitle: "ENTRADA NO MERCADO",
    description: "Não apenas criamos sua loja, mas também a preparamos para o sucesso. Configuramos tudo para que você possa começar a vender imediatamente após o lançamento.",
    whyItWorks: "Uma loja bem preparada para o lançamento tem muito mais chances de sucesso. Cuidamos de todos os detalhes técnicos e estratégicos para que você foque apenas nas vendas.",
    metrics: [
      { value: "Pronta", label: "Para Vender" },
      { value: "Completa", label: "Configuração" },
      { value: "Suporte", label: "Lançamento" }
    ],
    features: [],
    isLarge: true,
    gradient: "from-elevix-blue/15 to-blue-500/10",
    borderColor: "border-elevix-blue/30",
    buttonText: "Começar Agora"
  },
  {
    icon: <Shield className="w-6 h-6 text-elevix-blue" />,
    title: "Suporte Completo",
    subtitle: "ACOMPANHAMENTO TOTAL",
    description: "Oferecemos suporte completo durante todo o processo de criação e após o lançamento. Você nunca fica sozinho em sua jornada empreendedora.",
    whyItWorks: "Ter suporte especializado faz toda a diferença no sucesso do seu negócio. Nossa equipe está sempre disponível para resolver dúvidas e otimizar sua operação.",
    metrics: [
      { value: "24/7", label: "Disponível" },
      { value: "Especializado", label: "Suporte" }
    ],
    features: [],
    isLarge: false,
    gradient: "from-elevix-blue/10 to-blue-500/5",
    borderColor: "border-elevix-blue/20",
    buttonText: "Falar Conosco"
  }
];
