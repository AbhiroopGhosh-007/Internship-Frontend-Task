import React from 'react';

const RatingCard = () => {
  return (
    <div className="relative bg-[rgba(255,255,255,0.79)] flex items-center gap-5 justify-center px-[15px] py-5 rounded-[10px]">
      <div className="text-[rgba(28,176,152,1)] text-[64px] font-semibold max-md:text-[40px]">
        4.9
      </div>
      <div className="flex flex-col items-stretch w-[199px]">
        <div className="flex items-center gap-1">
          <img
            src="https://api.builder.io/api/v1/image/assets/ce5364c8e8754a4db954fd372c9b242d/e4efbe32b35585dcd0f80b958783db314df94997?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[17px] shrink-0"
            alt="Star rating"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/ce5364c8e8754a4db954fd372c9b242d/c788e75620f9b6fdee17f3a4372ef5b26d809a3d?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[17px] shrink-0"
            alt="Star rating"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/ce5364c8e8754a4db954fd372c9b242d/e22f46b9525ae28fd0e2bd274956f1f12746d7ba?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[17px] shrink-0"
            alt="Star rating"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/ce5364c8e8754a4db954fd372c9b242d/071a43c44d0631ad4265324e5b856082c5b2d67f?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[17px] shrink-0"
            alt="Star rating"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/ce5364c8e8754a4db954fd372c9b242d/56cf61ea925b7cfa3c60bab14fa9fb3f118fea1a?placeholderIfAbsent=true"
            className="aspect-[1.06] object-contain w-[18px] shrink-0"
            alt="Star rating"
          />
        </div>
        <div className="text-black text-2xl font-semibold mt-[11px]">
          Instructor Rating
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
