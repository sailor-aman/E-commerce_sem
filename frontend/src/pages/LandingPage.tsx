import React from 'react';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import {
  HeroSection,
  PopularCategoriesSection,
  FeaturedComponentsSection,
  ApplicationExplorerSection,
  HowItWorksSection,
  ValuePropositionSection,
  SupplierCTASection,
  MetricsBannerSection,
  FaqSection,
  BottomCTASection,
} from '../components/landing';

export const LandingPage: React.FC = () => {
  const handleSearchSubmit = (query: string) => {
    console.log('Search query submitted:', query);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar cartCount={0} onSearchSubmit={handleSearchSubmit} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection onSearchSubmit={handleSearchSubmit} />

        {/* 3. Popular Categories Grid */}
        <PopularCategoriesSection />

        {/* 4. Featured Components */}
        <FeaturedComponentsSection />

        {/* 5. Find Components by Application */}
        <ApplicationExplorerSection />

        {/* 6. How Electromart Works Pipeline */}
        <HowItWorksSection />

        {/* 7. Value Propositions */}
        <ValuePropositionSection />

        {/* 8. Supplier Onboarding Banner */}
        <SupplierCTASection />

        {/* 9. Metrics & Social Proof */}
        <MetricsBannerSection />

        {/* 10. Frequently Asked Questions */}
        <FaqSection />

        {/* 11. Final Call-to-Action Banner */}
        <BottomCTASection />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
};
