"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const TopSection = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!video || !section) return;

    // Use IntersectionObserver to play/pause video when in view
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
          video.playbackRate = 1.5; // Increase speed
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full">
      <section
        ref={sectionRef}
        className="relative h-screen bg-white overflow-hidden"
        style={{ zIndex: 1 }}
      >
        {/* Scroll-controlled video */}
        <video
          ref={videoRef}
          src="/Final1.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
          style={{ willChange: 'transform' }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
          <Image
            src="/logo.png"
            alt="Logo"
            width={580}
            height={68}
            className="w-3/4 max-w-[580px] max-h-[68px] mb-6 object-contain"
            priority
          />
          <p className="uppercase text-white text-[16px] md:text-[18px] lg:text-[22px]">
            Born from Emirati soil, our roots run deep
          </p>
          <p className="uppercase text-white text-[16px] md:text-[18px] lg:text-[22px]">
            and our vision soars high
          </p>
        </div>
      </section>

      
    </div>
  );
};

export default TopSection;
