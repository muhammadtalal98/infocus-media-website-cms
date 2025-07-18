"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Clients = () => {
  const clients = [
    { name: "Client 1", logo: "/assets/Clients/Frame 254.png" },
    { name: "Client 2", logo: "/assets/Clients/Frame 255.png" },
    { name: "Client 3", logo: "/assets/Clients/Frame 256.png" },
    { name: "Client 4", logo: "/assets/Clients/Frame 257.png" },
    { name: "Client 5", logo: "/assets/Clients/Frame 258.png" },
    { name: "Client 6", logo: "/assets/Clients/Frame 254-1.png" },
    
    { name: "Client 8", logo: "/assets/Clients/Frame 278.png" }, 
    { name: "Client 9", logo: "/assets/Clients/Frame 256-1.png" }, 
    { name: "Client 10", logo: "/assets/Clients/Frame 257-1.png" }, 
    { name: "Client 11", logo: "/assets/Clients/Frame 258-1.png" }, 
    { name: "Client 12", logo: "/assets/Clients/Frame 259.png" }, 
    
    { name: "Client 14", logo: "/assets/Clients/Frame 265.png" },
    { name: "Client 15", logo: "/assets/Clients/Frame 261.png" }, 
    { name: "Client 16", logo: "/assets/Clients/Frame 262.png" }, 
    { name: "Client 17", logo: "/assets/Clients/Frame 263.png" }, 
    { name: "Client 18", logo: "/assets/Clients/Frame 264.png" },
   
    { name: "Client 20", logo: "/assets/Clients/Frame 265.png" }, 
    { name: "Client 21", logo: "/assets/Clients/Frame 266.png" }, 
    { name: "Client 22", logo: "/assets/Clients/Frame 267.png" },
    { name: "Client 23", logo: "/assets/Clients/Frame 268.png" },
    { name: "Client 24", logo: "/assets/Clients/Frame 269.png" },
    
    { name: "Client 26", logo: "/assets/Clients/Frame 270.png" },
    { name: "Client 27", logo: "/assets/Clients/Frame 254.png" },
    { name: "Client 28", logo: "/assets/Clients/Frame 277.png" },
    { name: "Client 29", logo: "/assets/Clients/Frame 273.png" },
    { name: "Client 30", logo: "/assets/Clients/Frame 274.png" },
   
    { name: "Client 32", logo: "/assets/Clients/Frame 275.png" },
    { name: "Client 33", logo: "/assets/Clients/Frame 276.png" },
    { name: "Client 34", logo: "/assets/Clients/Frame 277.png" },
  ];

  const gridRef = useRef(null);
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const updateColumnCount = () => {
      const grid = gridRef.current;
      if (grid) {
        const firstRowChildren = Array.from(grid.children).filter((el) =>
          el.matches("div")
        );
        const rowTop = firstRowChildren[0]?.getBoundingClientRect().top;
        const count = firstRowChildren.filter(
          (el) => el.getBoundingClientRect().top === rowTop
        ).length;
        setColumns(count);
      }
    };

    updateColumnCount();
    window.addEventListener("resize", updateColumnCount);
    return () => window.removeEventListener("resize", updateColumnCount);
  }, []);

  return (
    <section className="w-full px-[5%] py-20 flex flex-col items-center justify-center">
      <h2 className="text-[40px] md:text-[64px] lg:text-[64px] font-bold mb-10">Our Clients</h2>

      <div
        ref={gridRef}
        className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full"
      >
        {clients.map((client, index) => {
          const isFirstColumn = index % columns === 0;
          const isLastColumn = (index + 1) % columns === 0;
          const isFirstRow = index < columns;
          const isLastRow = index >= clients.length - columns;

          return (
            <div
              key={index}
              className={`
                flex items-center justify-center p-4 h-[150px] w-full bg-white
                ${!isFirstRow ? "border-t" : ""}
                ${!isFirstColumn ? "border-l" : ""}
                ${!isLastColumn ? "border-r" : ""}
                ${!isLastRow ? "border-b" : ""}
                border-gray-100
              `}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          );
        })}
        <div className="text-center w-full h-full items-center justify-center mt-17">
        <Link href={"/contacts"} className="bg-black text-white px-2 py-3 text-xs md:px-6 md:py-3 cursor-pointer hover:scale-105 transition-transform duration-300 rounded-md md:font-medium text-[16px] md:text-[18px] lg:text-[22px]">
          Join Them
        </Link>
      </div>
      </div>

      
    </section>
  );
};

export default Clients;
