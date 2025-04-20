import React, { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  features: string[];
  sellhubId: string;
  bestSeller?: boolean;
  label?: {
    text: string;
    icon: React.ReactNode;
    color: string;
  };
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-gradient-to-b from-gray-900/80 to-gray-950/90 rounded-xl overflow-hidden border border-blue-900/30 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,149,255,0.15)] flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 overflow-hidden relative">
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 transition-opacity duration-300 ${
            isHovered ? 'opacity-60' : 'opacity-80'
          }`}
        ></div>
        <img 
          src={product.image} 
          alt={product.name}
          className={`w-full h-full object-cover object-center transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          loading="lazy"
        />
        <div className="absolute top-3 left-3 z-20">
          <div className="bg-cyan-500/90 text-black font-bold px-3 py-1 rounded-md text-sm">
            From ${product.price.toFixed(2)}
          </div>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex-grow flex flex-col min-h-[200px]">
          <h3 className="text-xl font-bold text-white">{product.name}</h3>
          <p className="text-gray-400 text-sm mt-2">{product.description}</p>
          
          <div className="mt-auto pt-4">
            <h4 className="text-cyan-400 text-sm font-medium mb-2">Features:</h4>
            <ul className="space-y-1">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                  <Check size={16} className="text-cyan-500 mt-0.5 min-w-[16px]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex gap-2 mt-6">
        <button
          data-sellhub-product={product.sellhubId} // Update this line
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-cyan-400 hover:from-cyan-500 hover:to-cyan-300 text-black font-bold py-2.5 rounded-lg transition-all duration-300"
        >
          <ShoppingCart size={18} />
          <span>Buy Now</span>
        </button>
          <button
            data-sellhub-cart-variant="57857b5e-7a37-4b57-96e7-a5e3bab0553f"
            className="px-4 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-black font-bold py-2.5 rounded-lg transition-all duration-300"
          >
            Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;