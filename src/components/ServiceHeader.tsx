
import React from 'react';

const ServiceHeader = () => {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-3 bg-gradient-to-r from-elevix-blue/10 to-blue-500/10 rounded-full px-6 py-2 mb-6 border border-elevix-blue/20">
        <div className="w-2 h-2 bg-elevix-blue rounded-full animate-pulse" />
        <span className="text-elevix-blue font-semibold">Soluções Orion</span>
        <div className="w-2 h-2 bg-elevix-blue rounded-full animate-pulse" />
      </div>
      
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
        <span className="bg-gradient-to-r from-elevix-blue via-blue-400 to-elevix-blue bg-clip-text text-transparent">
          Estratégias Inteligentes
        </span>{' '}
        Para Cada Desafio do Seu Negócio
      </h2>
      
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Nosso portfólio de serviços é desenhado para impulsionar o crescimento de{' '}
        <span className="text-elevix-blue font-semibold">negócios locais, infoprodutores e e-commerces</span>, 
        com foco em resultados e inovação.
      </p>
    </div>
  );
};

export default ServiceHeader;
