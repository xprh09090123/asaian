import React from 'react';
import { ExternalLink, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-950 to-transparent pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold">
                <span className="text-blue-400">Blue</span>wing
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Premium gaming solutions for competitive players. Our products are continuously updated and supported by our dedicated team.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Shield size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Valorant Full</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Rust Cheat</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">HWID Spoofer</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Fortnite Private</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-cyan-400 transition-colors">Products</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#reviews" className="hover:text-cyan-400 transition-colors">Reviews</a></li>
              <li><a href="https://discord.gg/bluewing" className="hover:text-cyan-400 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Bluewing. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;