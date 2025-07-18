import React from "react";

const TeamLocationSection = () => {
  return (
    <div className="flex items-center lg:flex-row flex-col gap-4 px-10 w-full min-h-screen">
      {/* left side */}
      <div className="flex flex-col justify-between p-10 bg-black text-white h-[60%] lg:h-screen w-full lg:w-1/2">
        <div className="flex flex-col gap-2 leading-[.97]">
          <h1
            className="font-bold"
            style={{
              width: "568px",
              paddingTop: "10px",
              paddingLeft: "40px",
              fontFamily: 'Bandeins Strange Variable, sans-serif',
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: "100px",
              lineHeight: "100%",
              letterSpacing: "-2%",
            }}
          >
            Join
          </h1>
          <h1
            className="font-bold"
            style={{
              width: "568px",
              paddingLeft: "40px",
              
              fontFamily: 'Bandeins Strange Variable, sans-serif',
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: "100px",
              lineHeight: "100%",
              letterSpacing: "-2%",
            }}
          >
            Our Team
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <p
            className="font-semibold uppercase"
            style={{
              width: "728px",
              height: "75px",
              fontFamily: 'Almarai, sans-serif',
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: "22px",
              lineHeight: "100%",
              letterSpacing: "3%",
              textTransform: "uppercase",
            }}
          >
            we’re always on the lookout for brilliant minds and bold ideas.
            check out our vacancies and apply for the one that suits you best!
          </p>
          <div className="flex mt-6">
            <button className="bg-white text-black px-6 py-3 cursor-pointer hover:scale-105 transition-transform duration-300 rounded-md font-medium text-[16px] md:text-[18px] lg:text-[22px]">
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
