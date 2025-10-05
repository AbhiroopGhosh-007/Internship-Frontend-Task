import React from 'react';
import { GraduationCap } from 'lucide-react';

const StatsCard = () => {
  return (
    <div className="bg-white flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-3 lg:py-4 rounded-xl shadow-lg">
      <div className="bg-primary/10 p-2 lg:p-2.5 rounded-full shrink-0">
        <GraduationCap className="w-5 h-5 lg:w-7 lg:h-7 xl:w-9 xl:h-9 text-primary" />
      </div>
      <div className="flex flex-col min-w-0">
        <div className="text-foreground text-lg lg:text-2xl xl:text-3xl font-extrabold">
          260+
        </div>
        <div className="text-muted-foreground text-[10px] lg:text-xs xl:text-sm font-medium leading-tight">
          Online Resume Created
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
