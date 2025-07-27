"use client";

import React from "react";
import Link from "next/link";

const Location = () => {
  return (
    <section className="bg-black py-4 px-4 lg:px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
      {/* Text Section */}
      <div className="flex flex-col justify-between bg-white text-black px-4 w-full sm:h-[60vh] md:h-[50vh] lg:h-[80vh] lg:w-1/2">
        <div className="mb-10 md:mb-4 lg:mb-20">
          <h1
            className="font-bold  pl-2 sm:pl-4 md:pl-8 lg:pl-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              paddingTop: "50px",
              width: "100%",
              fontFamily: 'Bandeins Strange Variable, sans-serif',
              fontWeight: 700,
              fontStyle: "bold",
              lineHeight: "100%",
              letterSpacing: "-2%",
            }}
          >
            Join
          </h1>
          <h1
            className=" font-bold pl-2 sm:pl-4 md:pl-8 lg:pl-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              width: "100%",
              fontFamily: 'Bandeins Strange Variable, sans-serif',
              fontWeight: 700,
              fontStyle: "bold",
              lineHeight: "100%",
              letterSpacing: "-2%",
            }}
          >
            Our Team
          </h1>
        </div>

        <div className="text-[22px] lg:w-[728] leading-relaxed mb-10 mt-20 md:mt-0">
          <p
            className=" pl-2 sm:pl-4 md:pl-8 lg:pl-10 text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase break-words w-full max-w-full xs:px-2 xs:w-full xs:max-w-full"
            style={{
              fontFamily: 'Almarai, sans-serif',
              fontWeight: 700,
              fontStyle: "bold",
              lineHeight: "100%",
              letterSpacing: "3%",
              textTransform: "uppercase",
            }}
          >
            We’re always on the lookout for brilliant minds and bold ideas.Check out our vacancies and apply for the one that suits you best!
             
          </p>
          <div className="pl-2 sm:pl-4 md:pl-8 lg:pl-10 mt-5 lg:mt-10">
            <Link href="/careers">
              <button className="bg-black text-white rounded-md text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] px-4 sm:px-6 md:px-10 lg:px-12 py-2 sm:py-3 pl-2 sm:pl-4 md:pl-8 lg:pl-12 hover:scale-105 transition-transform duration-300  font-medium mt-4  max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                Join the Team
              </button>
            </Link>
          </div>
        </div>
      </div>

      
      {/* Map or Illustration Section */}
      <div className="flex-1 w-full lg:w-1/2 relative overflow-hidden h-[60vh] md:h-[50vh] lg:h-[80vh]">
        {/* Address Overlay */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 md:top-4 md:left-4 md:translate-x-0 bg-white p-3 md:p-8 w-[92vw] max-w-[568px] md:w-[568px] z-10 m-5">
          <div className="font-bold text-gray-500 text-base md:text-xl uppercase mb-3 md:mb-4 tracking-wide">ADDRESS</div>
          <div className="font-black text-black text-lg md:text-2xl uppercase leading-tight mb-2">OFFICE 221, AL HANNA CENTER,<br/>DUBAI, UAE</div>
          <div className="font-bold text-black text-base md:text-xl">(04) 3300 409</div>
        </div>
        <a href="https://maps.app.goo.gl/cWRBwXFomTUYaeYs9" target="_blank" rel="noopener noreferrer">
          <img src="/map_home.png" className="w-full h-[40vh] md:h-[50vh] lg:h-[80vh] object-cover" alt="map" />
        </a>
      </div>
      
    </section>
  );
};

export default Location;
