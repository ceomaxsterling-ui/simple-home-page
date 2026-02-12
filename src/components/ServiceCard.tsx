
import React from 'react';
import { Zap } from 'lucide-react';

interface ServiceMetric {
  label: string;
  value: string;
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  whyItWorks: string;
  metrics: ServiceMetric[];
  features: string[];
  isLarge: boolean;
  gradient: string;
  borderColor: string;
  buttonText: string;
}

const ServiceCard = ({
  icon,
  title,
  subtitle,
  description,
  whyItWorks,
  metrics,
  isLarge,
  gradient,
  borderColor
}: ServiceCardProps) => {
  return (
    <div className={`group relative bg-gradient-to-br ${gradient} rounded-2xl ${isLarge ? 'p-6' : 'p-5'} border ${borderColor} backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-elevix-blue/60 h-full`}>
      <div className={`flex items-start gap-${isLarge ? '5' : '4'} mb-${isLarge ? '5' : '4'}`}>
        <div className={`p-${isLarge ? '3' : '2'} bg-elevix-blue/20 rounded-xl`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className={`${isLarge ? 'text-xl' : 'text-lg'} font-bold text-white mb-2`}>
            {title}
          </h3>
          <p className={`text-elevix-blue font-semibold uppercase tracking-wide ${isLarge ? 'text-sm' : 'text-xs'} mb-3`}>
            {subtitle}
          </p>
        </div>
      </div>
      
      <p className={`text-gray-300 leading-relaxed ${isLarge ? 'text-base' : 'text-sm'} mb-4`}>
        {description}
      </p>

      <div className={`bg-blue-950/30 rounded-lg p-${isLarge ? '4' : '3'} mb-4 border border-elevix-blue/20`}>
        {isLarge && (
          <h4 className="text-elevix-blue font-semibold mb-3 flex items-center gap-2 text-sm">
            <Zap className="w-4 h-4" />
            Por Que Funciona
          </h4>
        )}
        <p className={`text-gray-300 leading-relaxed ${isLarge ? 'text-sm' : 'text-xs'}`}>
          {whyItWorks}
        </p>
      </div>

      <div className={`grid ${metrics.length <= 2 ? 'grid-cols-2' : metrics.length === 3 ? 'grid-cols-3' : 'grid-cols-4'} gap-${isLarge ? '3' : '2'}`}>
        {metrics.map((metric, idx) => (
          <div key={idx} className="bg-gray-900/50 rounded-lg p-2 border border-elevix-blue/20 text-center">
            <div className={`${isLarge ? 'text-lg' : 'text-sm'} font-bold text-elevix-blue mb-1`}>
              {metric.value}
            </div>
            <div className={`text-gray-400 ${isLarge ? 'text-sm' : 'text-xs'}`}>
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
