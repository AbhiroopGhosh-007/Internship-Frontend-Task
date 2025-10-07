import React from 'react';
import FeatureCard from './FeatureCard';
import feature1 from '@/assets/feature-1.png';
import feature2 from '@/assets/feature-2.png';
import feature3 from '@/assets/feature-3.png';
import feature4 from '@/assets/feature-4.png';

const FeaturesSection = () => {
  const features = [
    {
      title: "A Resume Format That Gets You Interviews",
      description: "Get a professionally written, keyword-optimized resume that lands in recruiter inboxes.",
      image: feature1
    },
    {
      title: "A Cover Letter Style That Stands Out Strong",
      description: "Stand out with a cover letter that speaks directly to the role and reflects your strengths.",
      image: feature2
    },
    {
      title: "A LinkedIn Profile That Works For You",
      description: "Attract the right eyes, start conversations, and show up in recruiter searches.",
      image: feature3
    },
    {
      title: "An Interview Strategy That Builds Confidence",
      description: "Interview preperation with real HR professionals so you speak clearly confidently.",
      image: feature4
    }
  ];

  return (
    <section className="bg-background w-full py-12 lg:py-16 xl:py-20">
      <div className="container mx-auto px-5 lg:px-20 xl:px-24">
        <div className="flex flex-col items-center space-y-8 lg:space-y-12">
          {/* Section Header */}
          <div className="flex flex-col items-center space-y-4 lg:space-y-6 text-center max-w-5xl">
            <div className="bg-primary/10 px-5 lg:px-6 py-2 rounded-md">
              <span className="text-foreground text-sm lg:text-base xl:text-lg font-semibold">
                What You Get
              </span>
            </div>
            <h2 className="text-2xl lg:text-4xl xl:text-5xl font-semibold leading-tight px-4">
              You're Not Just{' '}
              <span className="text-primary font-semibold">Another Applicant</span>{' '}
              And Your Resume Shouldn't Look Like One
            </h2>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 xl:gap-8 w-full">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                image={feature.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
