
import React from 'react';
import ProductCard from './ProductCard';
import { Flame } from 'lucide-react';

const productData = [
  {
    id: 7,
    name: 'Valorant Color Aimbot',
    image: 'https://i.imgur.com/B74T94g.png',
    description: 'Color-based aimbot for Valorant. Extremely low detection rate.',
    price: 5.99,
    features: ['Color Aimbot', 'Customizable FOV', 'Smooth Aim', 'Config System'],
    sellhubId: '2241d1b4-e2c3-4bad-ad20-4e00dff0dbad',
  },
  {
    id: 2,
    name: 'Rust Cheat',
    image: 'https://i.imgur.com/JJ9Ny5T.png',
    description: 'Premium Rust cheat with ESP, aimbot, and item radar. Bypass EAC.',
    price: 5.99,
    features: ['Player ESP', 'Item ESP', 'Aimbot', 'No Recoil'],
    sellhubId: 'bb847e0a-b262-49f9-86dc-e7e6a54fbe23',
    bestSeller: true,
    label: {
      text: 'BEST SELLER',
      icon: <Flame className="w-4 h-4" />,
      color: 'from-orange-500 to-red-500'
    }
  },
  {
    id: 3,
    name: 'HWID Spoofer',
    image: 'https://i.imgur.com/nMwgPoW.png',
    description: 'Advanced HWID spoofer to avoid hardware bans and stay undetected.',
    price: 9.99,
    features: ['HWID Spoofer', 'Disk Cleaner', 'Trace Remover', 'Auto-Updates'],
    sellhubId: '61a831a3-1f07-41b8-95b7-e56fa3607fef',
  },
  {
    id: 4,
    name: 'Fortnite Private',
    image: 'https://i.imgur.com/he7yYlu.png',
    description: 'Private Fortnite cheat with aimbot, ESP, and more. Limited slots available.',
    price: 5.99,
    features: ['Aimbot', 'ESP', 'No Recoil', '24/7 Support'],
    sellhubId: 'f8b2c662-a87c-44aa-810a-cc62d30834ff',
  },
  {
    id: 5,
    name: 'Rainbow Six Full',
    image: 'https://i.imgur.com/1SAzdvg.png',
    description: 'Complete Rainbow Six Siege cheat package. Undetected and regularly updated.',
    price: 5.99,
    features: ['Aimbot', 'ESP', 'No Recoil', 'Gadget ESP'],
    sellhubId: 'f172b527-4908-47ce-a348-4c36e7aa7ac2',
  },
  {
    id: 6,
    name: 'Rust No-Recoil Script',
    image: 'https://i.imgur.com/rYjEI5E.png',
    description: 'Advanced no-recoil script for Rust. Works with all weapons.',
    price: 5.99,
    features: ['No Recoil', 'Customizable', 'Weapon Profiles', 'Undetected'],
    sellhubId: '28e3aee3-a126-4c6b-b37a-8e5875752d25',
  },
  {
    id: 1,
    name: 'Valorant Full',
    image: 'https://i.imgur.com/qogn2Rk.png',
    description: 'Complete Valorant cheat package with aimbot, ESP, and more. Always undetected.',
    price: 4.99,
    features: ['Aimbot', 'ESP/Wallhack', 'Triggerbot', 'No Recoil'],
    sellhubId: '390e07f0-2905-4b9a-8c80-45d95eaf5ea1',
  }
];

const Products = () => {
  const firstRow = productData.slice(0, 3);
  const secondRow = productData.slice(3);

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-transparent to-blue-950/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="inline-block text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            SHOP HERE!
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our vast collection of premium game enhancements. All products come with 24/7 support and regular updates.
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1050px] mx-auto">
            {firstRow.map((product) => (
              <div key={product.id} className="relative">
                {product.label && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <div className={`bg-gradient-to-r ${product.label.color} px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg`}>
                      {product.label.icon}
                      <span className="text-sm font-bold text-white">{product.label.text}</span>
                    </div>
                  </div>
                )}
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondRow.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;