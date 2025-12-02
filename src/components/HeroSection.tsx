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
    <section className="relative w-full bg-secondary overflow-hidden pt-[70px] lg:pt-[90px]">
      <div className="container px-5 mobile375:py-0 lg:px-20 xl:px-24 py-6 lg:py-15 xl:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col space-y-8 lg:space-y-10 order-1 font-weight-normal mobile375:items-center mobile375:my-2 lg:items-start text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight  ">
              Your Resume{" "}
              <span className="relative inline-block text-primary my-4 mobile375:my-0">
                Deserves A Yes
                {/* underline image positioned absolutely below the text */}
                <img
                  src={Underline}
                  alt="Underline"
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-1 pointer-events-none mobile375:hidden"
                />
              </span>{" "}
              <span className="text-black">Let's</span>
              <span className=""> Make It Happen</span>
            </h1>

            <p className="text-sm lg:text-base xl:text-lg mobile375:font-size-12 leading-relaxed text-foreground">
              If Your Resume Isn't Getting Responses, It's Time For An Upgrade.
              Get An ATS-Optimized Resume Crafted By HR Experts To Help You Land
              More Interviews. Our Resumes Are Designed To Get Your Foot In The
              Door And Place Your Name At The Top Of The Shortlist.
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 lg:gap-6">
              <button
                onClick={handleResumePackages}
                className="bg-white text-primary border border-primary w-auto mobile375:px-6 mobile375:py-3 px-4 sm:px-4 py-2 rounded-full text-sm lg:text-base font-semibold uppercase hover:bg-red-500 hover:text-white transition-colors shadow-[0_0_12px_0_rgba(250,18,57,0.4)]"
              >
                RESUME PAKAGES
              </button>
              <button
                onClick={handleContactUs}
                className="bg-primary text-primary-foreground w-auto mobile375:px-6 mobile375:py-3 px-4 sm:px-4 py-2 rounded-full text-sm lg:text-base font-semibold uppercase hover:opacity-90 transition-opacity shadow-[0_0_12px_0_rgba(250,18,57,0.4)]"
              >
                CONTACT US
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image with Cards */}
          <div className="relative flex justify-center lg:justify-end order-2">
            <div className="relative w-full max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] mt-6 lg:mt-0">
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
