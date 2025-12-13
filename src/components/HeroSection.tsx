import React from "react";
import RatingCard from "./RatingCard";
import StatsCard from "./StatsCard";
import heroImage from "@/assets/HeroImage.png";
import Underline from "@/assets/Underline.png";

const HeroSection = () => {
  const handleResumePackages = () => {
    console.log("Resume packages clicked");
  };

  const handleContactUs = () => {
    console.log("Contact us clicked");
  };

  return (
    <section className="figtree-uniquifier relative w-full bg-rose-100 overflow-hidden pt-[70px] lg:pt-[90px]">
      <div className="container px-5 py-6 mobile375:py-2 lg:px-9 xl:px-12 lg:py-15 xl:py-18 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col space-y-8 lg:space-y-10 order-1 font-weight-normal mobile375:items-center mobile375:my-2 lg:items-start text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight ">
              Your Resume{" "}
              <span className="relative inline-block text-primary my-0 lg:my-4">
                Deserves  A  Yes
                {/* underline image positioned absolutely below the text */}
                <img
                  src={Underline}
                  alt="Underline"
                  className="absolute top-full mx-1 mobile375:hidden pointer-events-none  lg:block"
                />
              </span>{" "}
              <span className="text-black">Let's</span>
              <span className=""> Make It Happen</span>
            </h1>

            <div className="figtree-uniquifier space-y-2 leading-[34px] text-foreground max-w-none lg:max-w-[600px] xl:max-w-[500px] text-base">
If Your Resume Isn't Getting Responses, It's Time For An Upgrade.
              Get An ATS-Optimized Resume Crafted By HR Experts To Help You
              Land More Interviews. Our Resumes Are Designed To Get Your Foot 
              In The Door And Place Your Name At The Top Of The Shortlist.
</div>


            <div className="flex flex-col sm:flex-row sm:justify-center items-center sm:items-center gap-4 lg:gap-6 text-base mobile375:mt-1">
              <button
                onClick={handleResumePackages}
                className="bg-white  text-primary border border-primary w-auto mobile375:px-6 mobile375:py-3 px-4 sm:px-4 py-2 rounded-full text-base  uppercase hover:bg-red-500 hover:text-white transition-colors shadow-[0_0_12px_0_rgba(250,18,57,0.4)]"
              >
                RESUME PAKAGES
              </button>
              <button
                onClick={handleContactUs}
                className="bg-primary text-primary-foreground w-auto mobile375:px-6 mobile375:py-3 px-4 sm:px-4 py-2 rounded-full text-base  uppercase hover:opacity-90 transition-opacity shadow-[0_0_12px_0_rgba(250,18,57,0.4)]"
              >
                CONTACT US
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image with Cards */}
          <div className="relative flex justify-center lg:justify-end order-2 mobile375:mt-0 ">
            <div className="relative w-full max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] mt-8 lg:mt-16 -mb-6 lg:-mb-15 xl:-mb-18 mobile375:mb-1 mobile375:mt-1">
              {/* Circular background */}
              <div className="absolute inset-0 bg-secondary rounded-full w-full h-full -z-10"></div>

              <img
                src={heroImage}
                alt="Professional woman with books"
                className="w-full h-auto object-contain relative z-10"
              />
              {/* 
              
              <div className="absolute bottom-[25%] left-[-5%] lg:left-[-10%] w-[250px] lg:w-[280px] xl:w-[320px] z-20">
                <RatingCard />
              </div>

              
              <div className="absolute bottom-[5%] right-[-5%] lg:right-[-10%] w-[180px] lg:w-[200px] xl:w-[240px] z-20">
                <StatsCard />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
