import React from 'react';
import { Star } from 'lucide-react';

const RatingCard = () => {
  return (
    <div className="bg-white/90 backdrop-blur-sm flex items-center gap-3 lg:gap-4 px-3 lg:px-5 py-3 lg:py-5 rounded-xl shadow-lg">
      <div className="text-accent text-4xl lg:text-5xl xl:text-6xl font-bold">
        4.9
      </div>
      <div className="flex flex-col gap-1 lg:gap-2">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-3 h-3 lg:w-4 lg:h-4 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
        <div className="text-foreground text-sm lg:text-base xl:text-lg font-semibold whitespace-nowrap">
          Instructor Rating
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
