import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <article className="bg-white shadow-[0px_4px_16px_rgba(0,0,0,0.08)] flex min-w-60 min-h-[450px] flex-col items-stretch flex-1 shrink basis-[0%] pt-5 pb-[38px] px-5 rounded-[20px]">
      <div className="flex w-full flex-col items-stretch text-xl text-black font-medium">
        <div className="self-center flex min-h-[200px] max-w-full w-[300px]" />
        <div className="flex w-full items-center gap-2.5 justify-center mt-[18px] px-2.5">
          <h3 className="text-black flex-1 shrink basis-[0%] text-center">
            {title}
          </h3>
        </div>
      </div>
      <p className="text-[rgba(89,89,89,1)] text-lg font-normal mt-6 text-center leading-[30px]">
        {description}
      </p>
    </article>
  );
};

export default FeatureCard;
