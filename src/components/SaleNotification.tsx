import React, { useState } from 'react';
import { X, Sparkles, Copy, Check } from 'lucide-react';

const SaleNotification = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [copied, setCopied] = useState(false);

  if (!isVisible) return null;

  const couponCode = "Spring2025";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(couponCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="fixed top-4 left-4 z-50 max-w-sm bg-gradient-to-br from-gray-900/80 to-gray-950/90 backdrop-blur-sm rounded-xl border border-blue-900/30 shadow-[0_0_20px_rgba(0,149,255,0.1)] p-4">
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute top-3 right-3 text-gray-400 hover:text-cyan-400 transition-colors"
      >
        <X size={16} />
      </button>
      
      <div className="flex items-start gap-3">
        <div className="mt-0.5 p-2 bg-blue-900/20 rounded-full">
          <Sparkles className="w-4 h-4 text-cyan-400" />
        </div>
        <div>
          <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            <span className="text-[#ff69b4]">🌺</span> Spring Sale!
          </h3>
          <p className="text-gray-300 text-sm mt-1 mb-2">
            Enjoy a 15% discount on all products this spring time!
          </p>
          <div className="bg-gradient-to-br from-gray-900/70 to-gray-950/80 border border-blue-900/20 rounded-lg px-3 py-2 mb-2 flex items-center justify-between">
            <p className="font-mono text-cyan-400 text-sm">{couponCode}</p>
            <button
              onClick={handleCopy}
              className="ml-2 p-1 hover:bg-blue-900/30 rounded-md transition-colors"
              title="Copy coupon code"
            >
              {copied ? (
                <Check size={16} className="text-green-400" />
              ) : (
                <Copy size={16} className="text-cyan-400" />
              )}
            </button>
          </div>
          <p className="text-xs text-gray-400">
            Use coupon to get discount on our products before the sale ends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SaleNotification;