import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import SaleNotification from './components/SaleNotification';
import { useEffect } from 'react';

function App() {
  // Move useEffect INSIDE the component
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://public.sellhub.cx/embeds.js';
    script.type = 'module';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array = runs once on mount

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />
      <SaleNotification />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Products />
          <About />
          <Reviews />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;