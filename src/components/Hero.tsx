import React from 'react';
import { ShoppingCart, MessageCircle, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 mb-6">
            <p className="text-cyan-400 text-sm font-medium tracking-wide">
              #1 PREMIUM CHEAT PROVIDER
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400 pb-2">
            Bluewing
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Premium gaming solutions for competitive players. Secure, undetected, and continuously updated.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#products" 
              className="group flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-cyan-400 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(0,229,255,0.5)]"
            >
              <ShoppingCart size={18} />
              <span>SHOP NOW</span>
            </a>
            
            <a 
              href="https://discord.gg/bluewing" 
              className="flex items-center justify-center gap-2 bg-transparent border border-cyan-500/50 text-white font-bold py-3 px-8 rounded-lg hover:bg-cyan-900/20 transition-all duration-300"
            >
              <MessageCircle size={18} />
              <span>JOIN DISCORD</span>
            </a>
            
            <a 
              href="#reviews" 
              className="flex items-center justify-center gap-2 bg-transparent border border-gray-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
            >
              <ExternalLink size={18} />
              <span>REVIEWS</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;