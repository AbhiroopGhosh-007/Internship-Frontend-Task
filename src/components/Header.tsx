import React from 'react';

const Header = () => {
  const handleGetQuote = () => {
    console.log('Get quote clicked');
  };

  return (
    <header className="bg-white absolute z-10 w-full text-lg font-medium">
      <div className="flex min-h-[100px] w-full items-center gap-[40px_100px] justify-between flex-wrap px-[100px] max-md:max-w-full max-md:px-5">
        <nav className="flex min-w-60 items-center gap-6 text-[#282828] capitalize flex-wrap max-md:max-w-full">
          <div className="flex items-center gap-1 whitespace-nowrap p-2.5">
            <div className="flex items-center gap-2.5 justify-center">
              <div>Home</div>
            </div>
          </div>
          <div className="flex items-center gap-1 p-2.5">
            <div className="flex items-center gap-2.5 justify-center">
              <div>About Us</div>
            </div>
          </div>
          <div className="flex items-center gap-1 p-2.5">
            <div className="flex items-center gap-2.5 justify-center">
              <div>Our Services</div>
            </div>
          </div>
          <div className="flex items-center gap-1 whitespace-nowrap p-2.5">
            <div className="flex items-center gap-2.5 justify-center">
              <div>Pricing</div>
            </div>
          </div>
          <div className="flex items-center gap-1 whitespace-nowrap p-2.5">
            <div className="flex items-center gap-2.5 justify-center">
              <div>FAQ</div>
            </div>
          </div>
        </nav>
        <div className="flex items-center gap-6 text-white">
          <button
            onClick={handleGetQuote}
            className="justify-center items-center shadow-[0_0_12px_0_rgba(250,18,57,0.58)] flex min-h-[46px] gap-2.5 bg-[#FA1239] px-[22px] py-3 rounded-[30px] max-md:px-5 hover:bg-[#e10f32] transition-colors"
          >
            <div>Get a quote</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
