import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, image }) => {
  return (
    <article className="bg-card flex flex-col text-base items-center px-11 py-8 mobile375:px-16 mobile375:mx-1 rounded-2xl shadow-lg hover:shadow-xl transition-shadow h-full">
      <div className="w-full h-40 flex items-center justify-center mb-4">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      <h4 className="text-foreground text-base font-semibold text-center mb-3">
        {title}
      </h4>
      <p className="text-muted-foreground text-sm text-center leading-relaxed ">
        {description}
      </p>
    </article>
  );
};

export default FeatureCard;
