import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import AppShowcase from './components/sections/AppShowcase';
import Problema from './components/sections/Problema';
import SolucaoUnica from './components/sections/SolucaoUnica';
import Features from './components/sections/Features';
import AntesDepois from './components/sections/AntesDepois';
import Testimonials from './components/sections/Testimonials';
import ComoFunciona from './components/sections/ComoFunciona';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import CTAFinal from './components/sections/CTAFinal';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 w-full overflow-x-hidden relative">
      <Header />
      <main className="w-full max-w-[100vw] overflow-x-hidden">
        <Hero />
        <Problema />
        <SolucaoUnica />
        <AppShowcase />
        <Features />
        <AntesDepois />
        <Testimonials />
        <ComoFunciona />
        <Pricing />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </div >
  );
};

export default App;
