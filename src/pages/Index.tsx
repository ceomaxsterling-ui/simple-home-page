
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PainPointsSection from '@/components/PainPointsSection';
import SolutionsSection from '@/components/SolutionsSection';
import ChallengesSection from '@/components/ChallengesSection';
import ConsultancySection from '@/components/ConsultancySection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <PainPointsSection />
      <SolutionsSection />
      <ChallengesSection />
      <ConsultancySection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
