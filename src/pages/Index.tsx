
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PainPointsSection from '@/components/PainPointsSection';
import SolutionsSection from '@/components/SolutionsSection';
import StoreCreationSection from '@/components/StoreCreationSection';
import ChallengesSection from '@/components/ChallengesSection';
import TyrionServicesSection from '@/components/TyrionServicesSection';
import ProofSection from '@/components/ProofSection';
import ConsultancySection from '@/components/ConsultancySection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: '#103051' }}>
      <Header />
      <HeroSection />
      <PainPointsSection />
      <SolutionsSection />
      <StoreCreationSection />
      <ChallengesSection />
      <TyrionServicesSection />
      <ProofSection />
      <ConsultancySection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
