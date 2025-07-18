"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;

    if (!section || !text) return;

    // Only run GSAP on large screens
    if (window.innerWidth < 1024) return;

    requestAnimationFrame(() => {
      const textWidth = text.getComputedTextLength();
      const viewportWidth = window.innerWidth;

      const startX = 0;
      const endX = -textWidth + viewportWidth * 0.9;

      gsap.set(text, { attr: { x: startX } });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=4000",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        })
        .to(text, {
          attr: { x: endX },
          ease: "power1.out"
        });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-screen min-h-screen overflow-hidden"
    >
      {/* Background Image (Large Screens Only) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat hidden lg:block"
        style={{ backgroundImage: 'url("/main.png")' }}
      />

      {/* Large Screens: Animated Text Mask */}
      <div className="absolute inset-0 z-10 hidden lg:block">
        <div className="sticky top-0 h-screen">
          <svg
            className="absolute inset-0 pointer-events-none"
            width="100%"
            height="100%"
          >
            <defs>
              <mask
                id="text-mask"
                x="0"
                y="0"
                width="100%"
                height="100%"
                maskUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                <text
                  ref={textRef}
                  x="0"
                  y="60%"
                  dominantBaseline="middle"
                  fontSize="54vw"
                  textAnchor="start"
                  fontWeight="bold"
                  fontFamily="inherit"
                  fill="black"
                  className="whitespace-nowrap"
                >
                  Infocus Media
                  <tspan fontSize="20vw" dy="-0.65em">
                    ®
                  </tspan>
                </text>
              </mask>
            </defs>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="white"
              mask="url(#text-mask)"
            />
          </svg>
        </div>
      </div>

      {/* md Screens */}
      <div className="hidden md:flex lg:hidden min-h-[220vh] py-10 bg-white flex-col justify-start">
        <div className="mt-[46vh] flex justify-center">
          <h1 className="text-[55vw] font-bold text-black rotate-90 leading-none">
            Infocus Media <span className="text-[3vw] align-super">®</span>
          </h1>
        </div>
      </div>

      {/* sm Screens */}
      <div className="md:hidden min-h-[340vh]  bg-white flex flex-col justify-start">
        <div className="mt-[65vh] flex justify-center">
          <div className="transform rotate-90 origin-center -translate-y-[-144vw]">
            <h1 className="text-[100vw] font-bold text-black whitespace-nowrap">
              Infocus Media <span className="text-[15vw] align-super">®</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
