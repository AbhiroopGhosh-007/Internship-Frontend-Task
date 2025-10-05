import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, image }) => {
  return (
    <article className="bg-card flex flex-col items-center p-5 lg:p-6 xl:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="w-full h-40 lg:h-48 xl:h-56 flex items-center justify-center mb-4 lg:mb-6">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-foreground text-base lg:text-lg xl:text-xl font-semibold text-center mb-3 lg:mb-4">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm lg:text-base xl:text-lg text-center leading-relaxed">
        {description}
      </p>
    </article>
  );
};

export default FeatureCard;
