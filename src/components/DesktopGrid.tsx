
import React from 'react';

interface Achievement {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
  gradient: string;
  borderColor: string;
}

interface DesktopGridProps {
  achievements: Achievement[];
}

const DesktopGrid: React.FC<DesktopGridProps> = ({ achievements }) => {
  return (
    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {achievements.map((achievement, index) => (
        <div
          key={index}
          className={`relative p-8 rounded-2xl bg-gradient-to-br ${achievement.gradient} backdrop-blur-sm border ${achievement.borderColor} hover:scale-105 transition-all duration-300`}
        >
          <div className="flex items-center justify-center mb-6">
            {achievement.icon}
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">
              {achievement.number}
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              {achievement.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {achievement.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesktopGrid;
