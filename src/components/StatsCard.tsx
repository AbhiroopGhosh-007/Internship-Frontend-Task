import React from 'react';

const StatsCard = () => {
  return (
    <div className="relative bg-white flex min-h-[133px] items-center gap-5 justify-center mt-8 pl-[23px] pr-6 py-[27px] rounded-[10px] max-md:px-5">
      <img
        src="https://api.builder.io/api/v1/image/assets/ce5364c8e8754a4db954fd372c9b242d/00f47e5572b0fdc95dd6a6c93b4c337c88040e65?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-20 shrink-0"
        alt="Resume icon"
      />
      <div className="w-[124px]">
        <div className="text-black text-3xl font-extrabold">
          260+
        </div>
        <div className="text-[rgba(102,102,102,1)] text-[17px] font-medium">
          Online Resume Created
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
