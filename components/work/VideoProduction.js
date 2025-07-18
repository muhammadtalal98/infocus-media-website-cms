import React, { useState } from 'react';

const data = [
  { title: "MOHaP", image: "/assets/production1.png" },
  { title: "7x", image: "/assets/production2.png" },
  { title: "Ministry of education", image: "/assets/production3.png" },
  { title: "Ministry of education", image: "/assets/production3.png" },
];

const VideoProduction = () => {
  const [visibleCount, setVisibleCount] = useState(4); // Show 2 initially

  const handleToggle = () => {
    if (visibleCount >= data.length) {
      setVisibleCount(4); 
    } else {
      setVisibleCount(data.length); // Show all
    }
  };

  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-col w-full gap-8'>
        {data.slice(0, visibleCount).map((item, index) => (
          <React.Fragment key={index}>
            <div className='w-full h-[1px] bg-gray-200 my-6'></div>

            <div className='flex  flex-col-reverse md:flex-row gap-6 w-full'>
              {/* Text */}
              <div className='md:w-1/3 w-full flex md:justify-end' >
                <div className='flex gap-10 md:gap-0 md:flex-col md:text-right text-left'>
                  <p className='text-[16px] md:text-[18px] lg:text-[22px] uppercase text-gray-500 md:mb-2'>Client</p>
                  <div className='flex flex-col leading-[1]'>
                    <h1 className='text-[40px] lg:text-[64px] font-semibold uppercase'>{item.title}</h1>
                    <p className=' md:text-[40px] lg:text-[64px] font-bold text-gray-400'>UAE</p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className='w-full md:w-2/3 h-[191px] md:h-[383px] lg:h-[750px]'>
                <img
                  src={item.image}
                  alt={item.title || 'Case Study'}
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      { data.length> visibleCount &&
        <div className='flex justify-center items-center mt-10'>
        <button
          onClick={handleToggle}
          className="bg-black text-white px-6 py-3 cursor-pointer hover:scale-105 transition-transform duration-300 rounded-md font-medium text-[16px] md:text-[18px] lg:text-[22px]"
        >
          {visibleCount >= data.length ? 'See Less' : 'See More!'}
        </button>
      </div>}
    </div>
  );
};

export default VideoProduction;
