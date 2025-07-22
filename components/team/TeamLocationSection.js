import React from "react";

const TeamLocationSection = () => {
  return (
    <div className="pt-2 pb-2 bg-black flex items-center lg:flex-row flex-col gap-4 px-10 w-full min-h-screen">
      {/* left side */}
      <div className=" flex flex-col justify-between p-10 bg-white text-white h-[60%] lg:h-screen w-full lg:w-1/2">
        <div className="flex flex-col gap-2 leading-[.97]">
          <h1
            className=" text-black font-bold pl-2 sm:pl-4 md:pl-8 lg:pl-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              width: "568px",
              paddingTop: "10px",
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
            className=" text-black font-bold pl-2 sm:pl-4 md:pl-8 lg:pl-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              width: "568px",
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
        <div className="flex flex-col gap-4">
          <p
            className=" text-black font-semibold uppercase pl-2 sm:pl-4 md:pl-8 lg:pl-10 text-base sm:text-lg md:text-xl lg:text-2xl"
            style={{
              width: "728px",
              height: "75px",
              fontFamily: 'Almarai, sans-serif',
              fontWeight: 700,
              fontStyle: "bold",
              lineHeight: "100%",
              letterSpacing: "3%",
              textTransform: "uppercase",
            }}
          >
            we’re always on the lookout for brilliant minds and bold ideas.
            check out our vacancies and apply for the one that suits you best!
          </p>
          <div className="flex mt-6 pl-2 sm:pl-4 md:pl-8 lg:pl-10">
            <button className="bg-black text-white px-4 sm:px-6 md:px-10 lg:px-12 py-2 sm:py-3 pl-2 sm:pl-4 md:pl-8 lg:pl-12 cursor-pointer hover:scale-105 transition-transform duration-300 rounded-md font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg ">
             Join the Team
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-[60%] lg:h-screen lg:w-1/2 relative overflow-hidden ">

        <img src="/image.png" className="w-full h-full object-cover" alt="map" />

        
      </div>
    </div>
  );
};

export default TeamLocationSection;
