import React, { useEffect, useRef } from 'react';
import { Star, User, CheckCircle2 } from 'lucide-react';

const reviews = [
  {
    name: 'xXShadowKillerXx',
    rating: 5,
    comment: '"Fast, legit and the best UI/UX!"',
    verified: true
  },
  {
    name: 'HeadshotPro99',
    rating: 5,
    comment: '"10/10 so easy to use. Server owner hooked me up!"',
    verified: true
  },
  {
    name: 'AimGod420',
    rating: 5,
    comment: '"THIS IS FUN AF DO IT!!"',
    verified: true
  },
  {
    name: 'NoScopeKing',
    rating: 5,
    comment: '"10/10 BEST SCRIPTS ON THE MARKET +REP INSANE FOR THE PRICE"',
    verified: true
  },
  {
    name: 'RustLord2025',
    rating: 5,
    comment: '"Good fucking shit and W support"',
    verified: true
  },
  {
    name: 'ValorantElite',
    rating: 5,
    comment: '"Very nice, good support"',
    verified: true
  }
];

const Reviews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Double the reviews array to create a seamless loop
  const doubledReviews = [...reviews, ...reviews];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="inline-block text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            WHAT OUR USERS SAY
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
        </div>

        <div 
          ref={scrollRef}
          className="overflow-hidden relative"
        >
          <div className="flex gap-6 whitespace-nowrap">
            {doubledReviews.map((review, index) => (
              <div 
                key={`${review.name}-${index}`}
                className="inline-block w-[350px] shrink-0 bg-gradient-to-br from-gray-900/70 to-gray-950/80 p-6 rounded-xl border border-blue-900/20 transition-all duration-300 hover:border-cyan-900/40 hover:shadow-[0_0_15px_rgba(0,149,255,0.1)]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-900/30 p-2 rounded-full">
                      <User size={20} className="text-cyan-400" />
                    </div>
                    <span className="text-gray-300 font-medium">{review.name}</span>
                  </div>
                  <div className="flex items-center">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-300 italic mb-4 text-center whitespace-normal">{review.comment}</p>
                
                {review.verified && (
                  <div className="flex justify-center">
                    <div className="inline-flex items-center gap-1 bg-blue-900/20 px-3 py-1 rounded-full">
                      <CheckCircle2 size={14} className="text-cyan-400" />
                      <span className="text-cyan-400 text-xs font-medium">Verified Purchase</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;