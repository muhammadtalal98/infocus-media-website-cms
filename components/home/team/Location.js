import React from "react";

const Location = () => {
  return (
    <section className="bg-black py-4 px-6 lg:px-16 flex flex-col lg:flex-row  items-center justify-between gap-6">
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-between bg-white text-black px-8 w-full  h-[492px] md:h-[928px] lg:max-h-[950px]">
        <div className="mb-6">
          <h1 className="pl-10 pt-10 text-[30px] md:text-[100px] lg:text-[100px] font-bold leading-tight">Join</h1>
          <h1 className="pl-10  text-[30px] md:text-[100px] lg:text-[100px] font-bold leading-tight">OUR TEAM</h1>
        </div>

        <div className="text-[22px] leading-relaxed mb-8">
          <p
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
            We’re always on the lookout for brilliant minds and bold ideas. Check out our vacancies and apply for the one that suits you best!
          </p>
          <div>
            <a href="/careers">
              <button className="bg-black text-[22px] text-white px-6 py-3 hover:scale-105 transition-transform duration-300 rounded-md  font-medium mt-4">
                Join the Team
              </button>
            </a>
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
