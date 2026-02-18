
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ServiceCard from './ServiceCard';
import ServiceHeader from './ServiceHeader';
import { fullServiceData } from '../data/fullServiceData';

const TyrionServicesSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="nossas-solucoes" className="py-12 sm:py-16 relative overflow-hidden"
      style={{ background: '#103051' }}>
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full blur-3xl opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(97,164,248,0.07) 0%, transparent 70%)' }} />
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full blur-3xl opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-72 rounded-full blur-3xl opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(97,164,248,0.04) 0%, transparent 70%)' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <ServiceHeader />

        {/* Mobile: Expandable Buttons */}
        <div className="block lg:hidden max-w-7xl mx-auto space-y-3">
          {fullServiceData.map((service, index) => (
            <div key={index} className="w-full">
              {/* Expandable Button */}
              <button
                onClick={() => toggleCard(index)}
                className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                  expandedCard === index 
                    ? 'bg-gradient-to-r from-elevix-blue/20 to-blue-500/10 border-2 border-elevix-blue/60 shadow-lg shadow-elevix-blue/20' 
                    : 'bg-gradient-to-r from-elevix-blue/10 to-blue-500/5 border border-elevix-blue/20 hover:border-elevix-blue/40'
                }`}
                style={{ minHeight: '48px' }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-elevix-blue/20 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white text-left">
                    {service.title}
                  </h3>
                </div>
                {expandedCard === index ? (
                  <ChevronUp className="w-5 h-5 text-elevix-blue" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-elevix-blue" />
                )}
              </button>

              {/* Expanded Content */}
              {expandedCard === index && (
                <div className="mt-3 overflow-hidden">
                  <div className="bg-gradient-to-br from-elevix-blue/10 to-blue-500/5 rounded-xl p-5 border border-elevix-blue/20 backdrop-blur-sm animate-fade-in">
                    <p className="text-elevix-blue font-semibold uppercase tracking-wide text-xs mb-3">
                      {service.subtitle}
                    </p>
                    
                    <p className="text-gray-300 leading-relaxed text-sm mb-4">
                      {service.description}
                    </p>

                    <div className="bg-blue-950/30 rounded-lg p-3 mb-4 border border-elevix-blue/20">
                      <h4 className="text-elevix-blue font-semibold mb-2 flex items-center gap-2 text-sm">
                        <span className="w-4 h-4 bg-elevix-blue rounded-full flex items-center justify-center">
                          <span className="text-xs">✓</span>
                        </span>
                        Por Que Funciona
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-xs">
                        {service.whyItWorks}
                      </p>
                    </div>

                    <div className={`grid ${service.metrics.length <= 2 ? 'grid-cols-2' : service.metrics.length === 3 ? 'grid-cols-3' : 'grid-cols-4'} gap-2`}>
                      {service.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-gray-900/50 rounded-lg p-2 border border-elevix-blue/20 text-center">
                          <div className="text-sm font-bold text-elevix-blue mb-1">
                            {metric.value}
                          </div>
                          <div className="text-gray-400 text-xs">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop: Layout Alternado Original */}
        <div className="hidden lg:block">
          <div className="max-w-7xl mx-auto space-y-4 sm:space-y-5">
            {/* Primeira Linha: Grande à esquerda, pequeno à direita */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
              <div className="lg:col-span-8">
                <ServiceCard {...fullServiceData[0]} />
              </div>
              <div className="lg:col-span-4">
                <ServiceCard {...fullServiceData[1]} />
              </div>
            </div>

            {/* Segunda Linha: Pequeno à esquerda, grande à direita */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
              <div className="lg:col-span-4">
                <ServiceCard {...fullServiceData[2]} />
              </div>
              <div className="lg:col-span-8">
                <ServiceCard {...fullServiceData[3]} />
              </div>
            </div>

            {/* Terceira Linha: Grande à esquerda, pequeno à direita */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              <div className="lg:col-span-8">
                <ServiceCard {...fullServiceData[4]} />
              </div>
              <div className="lg:col-span-4">
                <ServiceCard {...fullServiceData[5]} />
              </div>
            </div>
            
            {/* Quarta Linha: Dois pequenos */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5">
              <div className="lg:col-span-6">
                <ServiceCard {...fullServiceData[6]} />
              </div>
              <div className="lg:col-span-6">
                <ServiceCard {...fullServiceData[7]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TyrionServicesSection;
