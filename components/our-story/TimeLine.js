"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { timelineData } from "@/utils/data";

gsap.registerPlugin(ScrollTrigger);

const TimeLine = () => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const lastItemRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const timeline = timelineRef.current;

    const containerWidth = container.offsetWidth;
    const timelineWidth = timeline.scrollWidth;
    const moveDistance = timelineWidth - containerWidth;

    const lastItemWidth = lastItemRef.current?.offsetWidth || 0;
    const extraDistance = lastItemWidth + 150; // Give the last item space to show + a little pause
    const totalScrollDistance = moveDistance + extraDistance;

    const tl = gsap.to(timeline, {
      x: -moveDistance,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: container,
        start: "center center",
        end: () => `+=${totalScrollDistance}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        ease: "power1.out",
        onUpdate: (self) => {
          setScrollProgress(self.progress);
        },
      },
    });

    return () => {
      tl.scrollTrigger?.kill();
    };
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
      className="hidden lg:block relative w-full bg-white overflow-hidden px-4 md:px-8 py-20"
    >
      <div ref={timelineRef} className="flex min-w-max">
        {timelineData.map((item, index) => {
          const isLastActive = index === lastActiveIndex;
          const isColored = getItemColorProgress(index);
          const isLast = index === timelineData.length - 1;

          return (
            <div
              key={index}
              ref={isLast ? lastItemRef : null}
              className="flex flex-col items-center min-w-[250px]"
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
                      className={`h-[1px] w-[500px] ${
                        isColored ? "bg-green-500" : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
                <div className="text-[22px] font-medium font-bold">
                  {item.subTitle}
                </div>
                {item.description.map((desc, i) => (
                  <div
                    key={i}
                    className="text-[22px] text-gray-500 leading-relaxed sub-heading break-words max-w-[950px]"
                  >
                    <p
                      className={`break-words max-w-[500px] ${
                        isLastActive ? "mr-5" : ""
                      }`}
                    >
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        {/* Spacer to allow last item to fully scroll into view */}
        <div style={{ minWidth: '2vw', flexShrink: 0 }} />
      </div>
    </div>


    
  
  );
};

export default TimeLine;