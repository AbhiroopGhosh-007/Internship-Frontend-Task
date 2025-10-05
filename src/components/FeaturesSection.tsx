import React from 'react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      title: "A Resume Format That Gets You Interviews",
      description: "Get a professionally written, keyword-optimized resume that lands in recruiter inboxes."
    },
    {
      title: "A Cover Letter Style That Stands Out Strong",
      description: "Stand out with a cover letter that speaks directly to the role and reflects your strengths."
    },
    {
      title: "A LinkedIn Profile That Works For You",
      description: "Attract the right eyes, start conversations, and show up in recruiter searches."
    },
    {
      title: "An Interview Strategy That Builds Confidence",
      description: "Interview preperation with real HR professionals so you speak clearly confidently."
    }
  ];

  return (
    <section className="bg-white w-full overflow-hidden max-md:max-w-full">
      <div className="bg-white flex w-full flex-col items-stretch justify-center px-20 py-12 max-md:max-w-full max-md:px-5">
        <div className="max-md:max-w-full">
          <div className="flex max-w-full w-[1240px] flex-col items-stretch text-black font-semibold justify-center">
            <div className="flex w-full flex-col items-center text-lg max-md:max-w-full">
              <div className="bg-[rgba(253,146,164,0.3)] flex items-center gap-2.5 justify-center px-5 py-2.5 rounded-md">
                <div>What you Get</div>
              </div>
            </div>
            <div className="w-full text-[44px] text-center leading-[55px] mt-[26px] max-md:max-w-full">
              <h2 className="max-md:max-w-full">
                You're not just{" "}
                <span style={{color: 'rgba(250,18,57,1)'}}>
                  another applicant
                </span>{" "}
                and your resume shouldn't look like one
              </h2>
            </div>
          </div>
          <div className="flex w-full items-center gap-5 text-center leading-[30px] flex-wrap mt-[50px] max-md:max-w-full max-md:mt-10">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
