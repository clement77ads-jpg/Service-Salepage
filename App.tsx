import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import VisualProblem from './components/VisualProblem';
import CustomerProblem from './components/CustomerProblem';
import CopywritingProblem from './components/CopywritingProblem';
import Testimonials from './components/Testimonials';
import ProductIntro from './components/ProductIntro';
import TargetAudience from './components/TargetAudience';
import Bonuses from './components/Bonuses';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

function App() {
  return (
    <main className="min-h-screen font-sans text-gray-800">
      <Navbar />
      <Hero />
      <Features />
      <VisualProblem />
      <CustomerProblem />
      <CopywritingProblem />
      <Testimonials />
      <ProductIntro />
      <TargetAudience />
      <Bonuses />
      <Pricing />
      <Footer />
      <StickyCTA />
    </main>
  );
}

export default App;