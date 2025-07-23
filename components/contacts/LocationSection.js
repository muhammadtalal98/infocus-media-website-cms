import React from 'react';

const LocationSection = () => {
  return (
    <div className="w-full h-[100vh] relative overflow-hidden">
    {/* Address Box */}
    <div className="absolute top-[60px] lg:left-[60px]  sm:pl-[24px]  bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-9 z-10 w-[90%] sm:w-[342px] lg:w-[568px] md-w-[424] sm:w-[342] flex flex-col gap-4">
  <h3 className="font-bold lg:text-[22px] sm:text-[18px] md:text[20]  text-gray-600">ADDRESS</h3>
  <p className="lg:text-[22px] sm:text-[18px] md:text[20] text-black font-semibold mt-2 leading-relaxed">
    OFFICE 221, AL HANNA CENTER,<br />
    DUBAI, UAE<br />
    (04) 3300 409
  </p>
  </div>

      {/* Map Image */}
      <a
        href="https://maps.app.goo.gl/cWRBwXFomTUYaeYs9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/map-img.png" // Replace with your image path
           className="w-full h-screen object-cover"
          alt="Map"
        />
      </a>
    </div>
  );
};

export default LocationSection;
