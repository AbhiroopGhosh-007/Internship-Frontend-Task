import React from 'react';
import { GraduationCap } from 'lucide-react';

const StatsCard = () => {
  return (
    <div className="bg-white flex items-center gap-3 lg:gap-4 px-3 lg:px-5 py-3 lg:py-5 rounded-xl shadow-lg">
      <div className="bg-primary/10 p-2 lg:p-3 rounded-full shrink-0">
        <GraduationCap className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-primary" />
      </div>
      <div className="flex flex-col">
        <div className="text-foreground text-xl lg:text-2xl xl:text-3xl font-extrabold">
          260+
        </div>
        <div className="text-muted-foreground text-xs lg:text-sm xl:text-base font-medium whitespace-nowrap">
          Online Resume Created
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
