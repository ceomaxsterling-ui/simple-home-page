
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PainPointsSection from '@/components/PainPointsSection';
import WhyOrionSection from '@/components/WhyOrionSection';
import MethodologySection from '@/components/MethodologySection';
import SolutionsSection from '@/components/SolutionsSection';
import ChallengesSection from '@/components/ChallengesSection';
import ConsultancySection from '@/components/ConsultancySection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const RevealSection = ({ children }: { children: React.ReactNode }) => {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <div ref={ref} className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-black scroll-smooth">
      <ScrollProgressBar />
      <Header />
      <HeroSection />
      <RevealSection><PainPointsSection /></RevealSection>
      <RevealSection><WhyOrionSection /></RevealSection>
      <RevealSection><MethodologySection /></RevealSection>
      <RevealSection><SolutionsSection /></RevealSection>
      <RevealSection><ChallengesSection /></RevealSection>
      <RevealSection><ConsultancySection /></RevealSection>
      <RevealSection><FAQSection /></RevealSection>
      <RevealSection><CTASection /></RevealSection>
      <Footer />
    </div>
  );
};

export default Index;
