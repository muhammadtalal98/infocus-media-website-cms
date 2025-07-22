import React from "react";
import Link from "next/link";

const Location = () => {
  return (
    <section className="bg-black py-4 px-6 lg:px-16 flex flex-col lg:flex-row  items-center justify-between gap-6">
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-between bg-white text-black px-8 w-full  h-[492px] md:h-[928px] lg:max-h-[950px]">
        <div className="mb-6">
        <h1
            className="font-bold pl-2 sm:pl-4 md:pl-8 lg:pl-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              width: "568px",
              paddingTop: "20px",
              // paddingLeft: "40px", // Remove inline paddingLeft
              fontFamily: 'Bandeins Strange Variable, sans-serif',
              fontWeight: 700,
              fontStyle: "bold",
              // fontSize: "100px", // Remove fixed font size
              lineHeight: "100%",
              letterSpacing: "-2%",
            }}
          >
            Join
          </h1>
          <h1
            className="font-bold pl-2 sm:pl-4 md:pl-8 lg:pl-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              width: "568px",
              // paddingLeft: "40px", // Remove inline paddingLeft
              fontFamily: 'Bandeins Strange Variable, sans-serif',
              fontWeight: 700,
              fontStyle: "bold",
              // fontSize: "100px", // Remove fixed font size
              lineHeight: "100%",
              letterSpacing: "-2%",
            }}
          >
            Our Team
          </h1>
        </div>

        <div className="text-[22px] leading-relaxed mb-8">
          <p
            className="pl-2 sm:pl-4 md:pl-8 lg:pl-10 text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase"
            style={{
              width: "728px",
              height: "75px",
              fontFamily: 'Almarai, sans-serif',
              fontWeight: 700,
              fontStyle: "bold",
              // fontSize: "22px", // Remove fixed font size
              // paddingLeft: "40px", // Remove fixed padding
              lineHeight: "100%",
              letterSpacing: "3%",
              textTransform: "uppercase",
            }}
          >
            We’re always on the lookout for brilliant minds and bold ideas. Check out our vacancies and apply for the one that suits you best!
          </p>
          <div className="pl-2 sm:pl-4 md:pl-8 lg:pl-10">
            <Link href="/careers">
              <button className="bg-black text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] text-white px-4 sm:px-6 md:px-10 lg:px-12 py-2 sm:py-3 pl-2 sm:pl-4 md:pl-8 lg:pl-12 hover:scale-105 transition-transform duration-300 rounded-md font-medium mt-4  max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                Join the Team
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Map or Illustration Section */}
      <div className="flex-1 w-full  relative overflow-hidden h-[492px] md:h-[928px] lg:max-h-[950px]">
        <a href="https://maps.app.goo.gl/cWRBwXFomTUYaeYs9" target="_blank" rel="noopener noreferrer">
          <img src="/image.png" className="w-full h-full object-cover" alt="map" />
        </a>
      </div>
    </section>
  );
};

export default Location;
