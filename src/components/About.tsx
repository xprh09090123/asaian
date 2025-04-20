import React from 'react';
import { Clock, ShieldCheck, HeadsetIcon, DollarSign } from 'lucide-react';

const features = [
  {
    icon: <Clock className="w-8 h-8 text-cyan-400" />,
    title: 'Instant Delivery',
    description: 'Get your products instantly after purchase. No waiting, no hassle.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-cyan-400" />,
    title: 'Secure Payments',
    description: 'Top-tier encryption and trusted payment methods for your security.'
  },
  {
    icon: <HeadsetIcon className="w-8 h-8 text-cyan-400" />,
    title: '24/7 Support',
    description: 'Our support team is always there to help, anytime you need us.'
  },
  {
    icon: <DollarSign className="w-8 h-8 text-cyan-400" />,
    title: 'Best Price Guarantee',
    description: 'Found a cheaper price? Let us know and we\'ll match the price.'
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-950/10 to-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="inline-block text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              ABOUT US
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/90 p-8 rounded-xl border border-blue-900/30 shadow-lg mb-12">
            <p className="text-gray-300 text-center leading-relaxed">
              Bluewing has been dedicated to providing premium game enhancements at competitive prices since 2021. 
              Our collection is continuously updated, ensuring you always have access to the latest content. 
              We're committed to customer satisfaction with a dedicated support team ready to assist whenever needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-900/70 to-gray-950/80 p-6 rounded-xl border border-blue-900/20 transition-all duration-300 hover:border-cyan-900/40 hover:shadow-[0_0_15px_rgba(0,149,255,0.1)]"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-blue-900/20 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-cyan-400">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;