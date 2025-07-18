"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "HOME", href: "/" },
  { name: "OUR STORY", href: "/story" },
  { name: "CLIENTS", href: "/clients" },
  { name: "WHAT WE DO", href: "/what-we-do" },
  { name: "CASE STUDIES", href: "/case-studies" },
  { name: "WORK", href: "/work" },
  { name: "CAREERS", href: "/careers" },
  { name: "TEAM", href: "/team" },
  { name: "CONTACTS", href: "/contacts" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDarkBg, setIsDarkBg] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  const navbarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDarkBg(!entry.isIntersecting);
      },
      { threshold: 1 }
    );

    if (navbarRef.current) {
      observer.observe(navbarRef.current);
    }

    return () => {
      if (navbarRef.current) observer.unobserve(navbarRef.current);
    };
  }, []);

  useEffect(() => {
    const hiddenPaths = [
      "/portal",
      "/users",
      "/profile",
      "/cms",
      "/case-study",
      "/case-study/[id]",
    ];

    const shouldHide = hiddenPaths.some((path) => pathname.startsWith(path));
    setIsVisible(!shouldHide);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the navbar is over a dark section by checking the body's background or scroll position
      // For simplicity, assume black background after scrolling 100px
      setIsDarkBg(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  const iconColor = menuOpen || isDarkBg ? "white" : "black";
  const bgColor = menuOpen ? "bg-black" : "bg-gray-100";
  const iconColor1 = menuOpen || isDarkBg ? "black" : "white";
  const bgColor1 = menuOpen ? "bg-white" : "bg-black";

  return (
    <>
      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center gap-2 text-2xl sm:text-3xl md:text-5xl font-bold z-40"
          >
            {menuItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`transition-colors duration-200 md:text-[32px] text-[40px] lg:text-[74px] ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "text-white/30"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <nav
        ref={navbarRef}
        className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between transition-all"
      >
        {/* Logo */}
        <div className="w-[240px] transition-colors duration-300">
          <Link href={"/"}>
            <img
              src={isDarkBg ? "/logo.png" : "/logo-black.png"}
              onClick={() => setMenuOpen(false)}
              alt="Infocus Media Logo"
              className="sm:w-[250px] w-[180px] h-auto object-contain"
            />
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center justify-center gap-4">
          {/* Custom Icon Button (example placeholder) */}
          <Link href="/contacts" className={`p-2 rounded-sm transition cursor-pointer ${bgColor1} text-white`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 3H3V16H6.6V21L12.45 16.7368H21V3Z"
                stroke={iconColor1}
                strokeWidth="2"
              />
            </svg>
          </Link>

          {/* Hamburger / Close Icon */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`p-2 rounded-sm transition cursor-pointer ${bgColor}`}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <line
                  x1="3"
                  y1="3"
                  x2="21"
                  y2="21"
                  stroke={iconColor}
                  strokeWidth="3"
                />
                <line
                  x1="3"
                  y1="21"
                  x2="21"
                  y2="3"
                  stroke={iconColor}
                  strokeWidth="3"
                />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <line y1="4" x2="24" y2="4" stroke={iconColor} strokeWidth="3" />
                <line
                  y1="12"
                  x2="24"
                  y2="12"
                  stroke={iconColor}
                  strokeWidth="3"
                />
                <line
                  y1="20"
                  x2="24"
                  y2="20"
                  stroke={iconColor}
                  strokeWidth="3"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
