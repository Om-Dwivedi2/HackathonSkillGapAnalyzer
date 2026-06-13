import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/landing/Hero';
import HowItWorks from '../components/landing/HowItWorks';
import FeaturesSection from '../components/landing/FeaturesSection';
import FAQSection from '../components/landing/FAQSection';
import CTASection from '../components/landing/CTASection';
import Footer from '../components/layout/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans antialiased text-dark-navy">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Section (incorporates StatsSection) */}
        <div id="hero">
          <Hero />
        </div>

        {/* How It Works Section */}
        <HowItWorks />

        {/* Features Section */}
        <FeaturesSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA Banner Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
