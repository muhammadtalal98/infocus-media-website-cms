"use client";
import React, { useRef, useState, useEffect } from "react";
import { timelineData } from "@/utils/data";

const TimeLine = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const progress = maxScrollLeft === 0 ? 0 : container.scrollLeft / maxScrollLeft;
      setScrollProgress(progress);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll(); // set initial
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const getItemColorProgress = (index) => {
    const totalItems = timelineData.length;
    const itemThreshold = (index + 1) / totalItems;
    return scrollProgress >= itemThreshold;
  };

  const lastActiveIndex = timelineData.map((d) => d.active).lastIndexOf(true);

  return (
    <div
      ref={containerRef}
      className="hidden lg:block relative w-full h-screen overflow-x-auto overflow-y-hidden bg-white px-4 md:px-8 py-20"
      style={{ whiteSpace: 'nowrap', maxWidth: '100vw', boxSizing: 'border-box' }}
    >
      <div className="flex min-w-max h-full gap-12" style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
        {timelineData.map((item, index) => {
          const isLastActive = index === lastActiveIndex;
          const isColored = getItemColorProgress(index);
          const isLast = index === timelineData.length - 1;

          return (
            <div
              key={index}
              className="flex flex-col items-center min-w-[420px] max-w-[600px] flex-shrink-0 mr-8"
              style={isLast ? { paddingRight: 64, boxSizing: 'border-box' } : {}}
            >
              <div className="mb-6">
                <div
                  className={`text-[100px] font-bold ${
                    isColored ? "text-green-500" : "text-black"
                  }`}
                >
                  {item.title}
                </div>
                <div className="flex items-center my-6">
                  <div
                    className={`w-[24px] h-[24px] rounded-full ${
                      isColored ? "bg-green-500" : "bg-gray-300"
                    } z-10`}
                  />
                  {index !== timelineData.length - 1 && (
                    <div
                      className={`h-[1px] w-[600px] ${
                        isColored ? "bg-green-500" : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
                <div className="text-[22px] font-bold sub-heading">
                  {item.subTitle}
                </div>
                {item.description.map((desc, i) => (
                  <div
                    key={i}
                    className="text-[22px] text-gray-500 leading-relaxed sub-heading mb-8"
                    style={{
                      maxWidth: '100%',
                      width: '100%',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      boxSizing: 'border-box',
                    }}
                  >
                    <p
                      className={`break-words max-w-[550px] w-full ${
                        isLastActive ? "mr-5" : ""
                      }`}
                      style={{
                        wordBreak: 'break-word',
                        overflowWrap: 'break-word',
                        marginBottom: 0,
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeLine;
