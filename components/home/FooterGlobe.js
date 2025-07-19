"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const FooterGlobe = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    video.pause();

    let lastScrollY = window.scrollY;
    let ticking = false;
    let lastTimestamp = performance.now();
    let scrollTimeout;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame((timestamp) => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

          // Only play if section is in view
          if (rect.top < windowHeight && rect.bottom > 0) {
            // Calculate scroll speed
            const scrollDelta = Math.abs(window.scrollY - lastScrollY);
            const timeDelta = timestamp - lastTimestamp;
            lastScrollY = window.scrollY;
            lastTimestamp = timestamp;

            // Map scroll speed to playbackRate (min 0.5, max 2)
            let playbackRate = Math.min(2, Math.max(0.5, scrollDelta / (timeDelta / 16)));
            video.playbackRate = playbackRate;
            video.play();

            // Pause video immediately when scrolling stops
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
              video.pause();
            }, 50); // Pause almost immediately after scroll stops
          } else {
            video.pause();
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-white py-20 overflow-hidden"
    >
      {/* Video background */}
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/Blob2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text on top of video */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <p className="text-[16px] md:text-[18px] lg:text-[22px] font-bold uppercase tracking-widest mb-1">
          HAVE PROJECT IN MIND?
        </p>
        <div className="flex flex-col items-center justify-center leading-[.95]">
          <h1 className="text-[60px] md:text-[100px] font-bold">let's create</h1>
          <h1 className="text-[60px] md:text-[100px] font-bold">something great</h1>
          <h1 className="text-[60px] md:text-[100px] font-bold mb-2">together!</h1>
        </div>

        <div className="text-center mt-4">
          <Link href="/contacts" className="bg-black text-[16px] md:text-[18px] lg:text-[22px] text-white px-4 py-2 cursor-pointer hover:scale-105 transition-transform duration-300 rounded-md font-medium inline-block">
            let's Go
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FooterGlobe;
