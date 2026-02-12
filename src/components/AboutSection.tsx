import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Target, Zap, ChevronRight } from 'lucide-react';
const AboutSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
      if (element) {
        const rect = element.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const stats = [{
    icon: Users,
    label: 'Clientes Ativos',
    value: '500+'
  }, {
    icon: Target,
    label: 'Taxa de Sucesso',
    value: '95%'
  }, {
    icon: Zap,
    label: 'ROI Médio',
    value: '300%'
  }];
  return;
};
export default AboutSection;