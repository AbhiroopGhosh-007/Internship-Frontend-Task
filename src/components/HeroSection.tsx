import React from 'react';
import RatingCard from './RatingCard';
import StatsCard from './StatsCard';

const HeroSection = () => {
  const handleResumePackages = () => {
    console.log('Resume packages clicked');
  };

  const handleContactUs = () => {
    console.log('Contact us clicked');
  };

  return (
    <section className="relative min-h-[909px] w-full max-md:max-w-full">
      <div className="z-0 w-full overflow-hidden pt-[190px] px-10 max-md:max-w-full max-md:pt-[100px] max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="relative flex w-full flex-col items-stretch capitalize mt-[38px] max-md:max-w-full max-md:mt-10">
              <h1 className="text-black text-[64px] font-bold leading-[78px] z-0 max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
                Your Resume{" "}
                <span style={{lineHeight: '85px', color: 'rgba(250,18,57,1)'}}>
                  Deserves a yes
                </span>
                <span style={{lineHeight: '85px'}}> let's make it happen</span>
              </h1>
              <p className="text-black text-base font-normal leading-[34px] z-0 mt-[38px] max-md:max-w-full">
                If your resume isn't getting responses, it's time for an
                upgrade. Get an ATS-optimized resume crafted by HR experts to
                help you land more interviews. Our resumes are designed to get
                your foot in the door and place your name at the top of the
                shortlist.
              </p>
              <div className="z-0 flex items-center gap-6 text-lg font-medium uppercase mt-[38px]">
                <button
                  onClick={handleResumePackages}
                  className="justify-center items-center border shadow-[0_0_12px_0_rgba(250,18,57,0.58)] bg-white flex min-h-[46px] gap-2.5 text-[#FA1239] px-[22px] py-3 rounded-[30px] border-solid border-[#FA1239] max-md:px-5 hover:bg-gray-50 transition-colors"
                >
                  <div className="text-[#FA1239]">
                    Resume Pakages
                  </div>
                </button>
                <button
                  onClick={handleContactUs}
                  className="justify-center items-center shadow-[0_0_12px_0_rgba(250,18,57,0.58)] flex min-h-[46px] gap-2.5 text-white bg-[#FA1239] px-[22px] py-3 rounded-[30px] max-md:px-5 hover:bg-[#e10f32] transition-colors"
                >
                  <div>Contact us</div>
                </button>
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/ce5364c8e8754a4db954fd372c9b242d/e92f964e6e4e8c4ebb293b785f63c812ac1d5fcf?placeholderIfAbsent=true"
                className="aspect-[21.28] object-contain w-[363px] absolute z-0 max-w-full h-[17px] left-0 top-[153px]"
                alt="Decorative underline"
              />
            </div>
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col relative min-h-[719px] w-full pt-[395px] pb-[42px] max-md:max-w-full max-md:mt-10 max-md:pt-[100px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/ce5364c8e8754a4db954fd372c9b242d/8e907a9abb6a9e25f6f76c8051daa9b6189ff63a?placeholderIfAbsent=true"
                className="absolute h-full w-full object-cover inset-0"
                alt="Professional resume background"
              />
              <RatingCard />
              <StatsCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
