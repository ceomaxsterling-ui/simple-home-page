
import React from 'react';

const StatsSummary: React.FC = () => {
  return (
    <div className="mt-16 grid grid-cols-3 gap-2 sm:gap-4 px-2 sm:px-4">
      <div className="text-center p-2 sm:p-4 rounded-xl bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/20 flex flex-col items-center justify-center min-h-[80px] sm:min-h-[100px]">
        <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-1 leading-tight">500+</div>
        <div className="text-xs text-gray-400 uppercase tracking-wide text-center leading-tight">Negócios Ativos</div>
      </div>
      <div className="text-center p-2 sm:p-4 rounded-xl bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/20 flex flex-col items-center justify-center min-h-[80px] sm:min-h-[100px]">
        <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-1 leading-tight">97%</div>
        <div className="text-xs text-gray-400 uppercase tracking-wide text-center leading-tight">Taxa de Sucesso</div>
      </div>
      <div className="text-center p-2 sm:p-4 rounded-xl bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/20 flex flex-col items-center justify-center min-h-[80px] sm:min-h-[100px]">
        <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-1 leading-tight">R$ 50K+</div>
        <div className="text-xs text-gray-400 uppercase tracking-wide text-center leading-tight">Faturamento</div>
      </div>
    </div>
  );
};

export default StatsSummary;
