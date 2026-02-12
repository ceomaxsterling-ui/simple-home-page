
import React from 'react';
import { Database, Clock, TrendingUp, Users, Smartphone, Bot } from 'lucide-react';

export const servicesData = [
  {
    icon: <Database className="w-8 h-8 text-emerald-400" />,
    title: "Criativos de Alto Impacto",
    subtitle: "NEUROMARKETING APLICADO",
    description: "Criamos criativos com alta taxa de conversão baseados em neuromarketing e psicologia do consumidor. Cada peça é desenvolvida para capturar atenção, gerar desejo e converter leads qualificados para o seu negócio.",
    whyItWorks: "Nossos criativos são testados com metodologia científica, aplicando gatilhos mentais comprovados. Analisamos comportamento do público-alvo e criamos peças que geram até 400% mais engajamento que a média do mercado.",
    metrics: [
      { label: "Taxa de Conversão", value: "400%+" },
      { label: "Criativos Ativos", value: "50+" }
    ],
    features: ["Neuromarketing", "Gatilhos Mentais", "Testes A/B", "Alta Conversão"],
    isLarge: true,
    gradient: "from-emerald-500/25 to-green-600/15",
    borderColor: "border-emerald-500/40",
    buttonText: "Ver Criativos"
  },
  {
    icon: <Clock className="w-6 h-6 text-green-400" />,
    title: "Monitoramento Inteligente",
    subtitle: "ACOMPANHAMENTO 24/7",
    description: "Monitoramos suas campanhas em tempo real com alertas automatizados. Sistema inteligente que identifica oportunidades e problemas antes que afetem seus resultados.",
    whyItWorks: "Monitoramento contínuo previne perdas e maximiza oportunidades. Nosso sistema de alertas permite otimizações em tempo real, mantendo suas campanhas sempre no pico de performance.",
    metrics: [
      { label: "Monitoramento", value: "24/7" },
      { label: "Alertas", value: "Tempo Real" },
      { label: "Otimização", value: "Automática" }
    ],
    features: ["Alertas Inteligentes", "Tempo Real", "Auto-Otimização", "Performance máxima"],
    isLarge: false,
    gradient: "from-green-500/20 to-emerald-500/10",
    borderColor: "border-green-500/30",
    buttonText: "Ver Sistema"
  },
  {
    icon: <Users className="w-6 h-6 text-emerald-400" />,
    title: "Suporte Técnico Especializado",
    subtitle: "EXPERTS EM MARKETING DIGITAL",
    description: "Equipe especializada em marketing digital e estratégias de crescimento. Suporte prioritário para resolver problemas técnicos e otimizar suas estratégias de negócio.",
    whyItWorks: "Suporte especializado significa soluções rápidas e precisas. Nossa equipe entende profundamente diversos segmentos de mercado e resolve problemas complexos com expertise comprovada.",
    metrics: [
      { label: "Tempo Resposta", value: "<2h" },
      { label: "Disponibilidade", value: "24/7" }
    ],
    features: ["WhatsApp Priority", "Experts Dedicados", "SLA Garantido", "Suporte Técnico"],
    isLarge: false,
    gradient: "from-emerald-600/20 to-green-400/10",
    borderColor: "border-emerald-400/30",
    buttonText: "WhatsApp Priority"
  },
  {
    icon: <Bot className="w-8 h-8 text-green-400" />,
    title: "Copy e Scripts Profissionais",
    subtitle: "AUTOMAÇÃO COMPLETA",
    description: "Criamos páginas de vendas de alta conversão, scripts de WhatsApp automatizados e sequências de e-mail que vendem 24/7. Copywriting persuasivo que transforma visitantes em compradores.",
    whyItWorks: "Copy profissional aumenta conversões em até 300%. Nossos scripts automatizados trabalham enquanto você dorme, qualificando leads e fechando vendas através de sequências otimizadas e gatilhos psicológicos.",
    metrics: [
      { label: "Conversão Copy", value: "300%+" },
      { label: "Automação", value: "24/7" },
      { label: "Scripts Ativos", value: "20+" }
    ],
    features: ["Landing Pages", "Scripts WhatsApp", "E-mail Marketing", "Copy Persuasivo"],
    isLarge: true,
    gradient: "from-green-400/25 to-emerald-500/15",
    borderColor: "border-green-400/40",
    buttonText: "Ver Scripts"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-emerald-500" />,
    title: "Gestão Profissional de Tráfego",
    subtitle: "ESPECIALISTAS CERTIFICADOS",
    description: "Equipe certificada gerencia suas campanhas no Meta Ads, Google Ads e TikTok Ads. Metodologia proprietária com otimização algorítmica e análise preditiva para maximizar ROI do seu negócio.",
    whyItWorks: "Nossa metodologia combina expertise humana com algoritmos proprietários. Analisamos milhares de dados para identificar padrões vencedores e aplicamos otimizações que aumentam ROI em até 400%.",
    metrics: [
      { label: "ROI Médio", value: "400%" },
      { label: "Redução CPA", value: "-70%" },
      { label: "Taxa Sucesso", value: "97%" },
      { label: "Otimização", value: "Diária" }
    ],
    features: ["Meta Ads Expert", "Google Ads Pro", "TikTok Certified", "ROI Máximo"],
    isLarge: true,
    gradient: "from-emerald-500/25 to-green-600/15",
    borderColor: "border-emerald-500/40",
    buttonText: "Ver Resultados"
  },
  {
    icon: <Smartphone className="w-6 h-6 text-green-500" />,
    title: "Estrutura Completa",
    subtitle: "SOLUÇÃO INTEGRADA",
    description: "Fornecemos toda a estrutura necessária: desde a criação até a gestão completa. Solução integrada que elimina a necessidade de múltiplos fornecedores.",
    whyItWorks: "Estrutura integrada significa eficiência máxima. Com tudo centralizado, você economiza tempo, reduz custos operacionais e tem resultados mais consistentes e previsíveis.",
    metrics: [
      { label: "Integração", value: "100%" },
      { label: "Eficiência", value: "+250%" }
    ],
    features: ["Solução Completa", "Gestão Total", "Suporte Integrado", "Máxima Eficiência"],
    isLarge: false,
    gradient: "from-green-600/20 to-emerald-400/10",
    borderColor: "border-green-500/30",
    buttonText: "Ver Estrutura"
  }
];
