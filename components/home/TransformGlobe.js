"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TransformGlobe = () => {
  const videoRef = useRef(null);
    const sectionRef = useRef(null);
  
    useEffect(() => {
      const video = videoRef.current;
      const section = sectionRef.current;
      if (!video || !section || typeof window === 'undefined') return;
  
      video.pause();
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [showInsightContent, setShowInsightContent] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section) return;

    // Pause video initially
    video.pause();

    // Make sure metadata is loaded so duration is available
    const handleLoaded = () => {
      const duration = video.duration;

      // GSAP timeline
      gsap.to(video, {
        currentTime: duration,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top", // The animation ends when user finishes scrolling through the section
          scrub: true,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            setShowInsightContent(progress >= 0.6); // switch content after 60% of scroll
          },
        },
      });
    };

    video.addEventListener("loadedmetadata", handleLoaded);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoaded);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      {/* TransformGlobe Fullscreen Section */}
      <section
        ref={sectionRef}
        className="relative h-screen bg-white overflow-hidden"
        style={{ zIndex: 1 }}
      >
        {/* Background Video */}
        <video
          ref={videoRef}
          src="/Blob2.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
          style={{ willChange: "transform" }}
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 transition-opacity duration-500 text-center px-4">
          {!showInsightContent ? (
            <>
              {/* TransformGlobe Content */}
              <p className="md:text-[18px] text-[16px] lg:text-[22px] font-bold uppercase text-black mb-4">
                WE don’t see brands, we see possibilities
              </p>
              <div className="flex flex-col leading-[.95]">
                <h1 className="text-[40px] md:text-[65px] lg:text-[100px] font-bold text-black mb-2">
                  We transform ideas
                </h1>
                <h1 className="text-[40px] md:text-[65px] lg:text-[100px] font-bold text-black">
                  into visual stories
                </h1>
              </div>
              <p className="md:text-[18px] text-[16px] lg:text-[22px] font-bold uppercase text-black mt-4">
                and we know what your brand needs
              </p>
            </>
          ) : (
            <>
              {/* InsightGlobe Content */}
              <p className="md:text-[18px] text-[16px] lg:text-[22px] font-bold uppercase text-black mb-4">
                we make your audience feel, think, and act
              </p>
              <div className="flex flex-col leading-[.95]">
                <h1 className="text-[40px] md:text-[65px] lg:text-[100px] font-bold text-black mb-2">
                  We turn insights
                </h1>
                <h1 className="text-[40px] md:text-[65px] lg:text-[100px] font-bold text-black">
                  into impact
                </h1>
              </div>
              <Link
                href="/contacts"
                className="mt-5 bg-black rounded-md text-white px-8 py-4 font-bold cursor-pointer hover:bg-gray-200 hover:text-black hover:scale-105 transition-transform"
              >
                Let's Get Started
              </Link>
            </>
          )}
        </div>
      </section>

    </>
  );
};

export default TransformGlobe;
