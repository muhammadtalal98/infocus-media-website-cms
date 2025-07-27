"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CaseStudies from "../CaseStudies";
import ExpertiseSection from "../ExpertiseSection";

const SheikhCaseStudiesContainer = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ["design", "imagine"];

  // Typing effect
  useEffect(() => {
    const currentWordText = words[currentWord];

    if (!isDeleting) {
      if (displayText.length < currentWordText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentWordText.slice(0, displayText.length + 1));
        }, 150);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentWord((prev) => (prev + 1) % words.length);
      }
    }
  }, [displayText, isDeleting, currentWord, words]);

  return (
    <section className="relative w-full">
      {/* Sticky Portrait Section */}
      <div className="sticky top-0 min-h-[20vh] sm:min-h-[100vh] lg:min-h-[60vh] w-full z-10">
        <div className="w-full h-full flex flex-col-reverse lg:flex-row lg:items-center gap-10 bg-white">
          {/* Image Container */}
          <div className="w-full md:w-2/3 h-[50vh] md:h-[65vh] lg:h-full">
            <img
              src="/assets/portrait.png"
              alt="Portrait"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Container */}
          <div className="w-full lg:w-1/2 text-black lg:items-center font-bandeins-strange px-2 flex text-left sm:text-left md:text-left lg:text-left text-[40px] md:text-[54px] lg:text-[100px] leading-[.99]">
            <div className="flex flex-col gap-0">
              <h1 className="text-green-500 font-bold md:ml-[-230px] lg:ml-0">"</h1>
              <h1 className="font-bold">The future</h1>
              <h1 className="font-bold">belongs to those</h1>
              <h1 className="font-bold">
                who can <span className="text-green-500">{displayText}</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-green-500"
                >
                  |
                </motion.span>
              </h1>
              <p className="font-bold text-sm md:text-[22px] uppercase mt-6">
                H.H. Sheikh Mohammed bin Rashid Al Maktoum
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Keep existing Foreground Sections */}
      <div className="relative z-10">
        <div className="min-h-screen bg-white">
          <CaseStudies />
        </div>
      </div>
    </section>
  );
};

export default SheikhCaseStudiesContainer;
