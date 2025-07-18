"use client";

import Footer from "@/components/home/Footer";
import Loader from "@/components/Loader";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";



const Page = () => {
  const { id } = useParams(); // Correct usage
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [others, setOthers] = useState([]);

  const fetch = async () => {
    try {
      const [res, res2] = await Promise.all([
        axios.get(`/api/${id}`),
        axios.get("/api/get-cases"),
      ])
      setData(res.data.caseStudies || []);
      setOthers(res2.data.caseStudies || []);
      const caseStudy = res.data.caseStudy;
      console.log("Fetched case study:", caseStudy);
      setData(caseStudy);
      editor.commands.setContent(caseStudy.content || "");
    } catch (error) {
      console.error(error);
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  if (loading)
    return (
      <div className="flex flex-col h-screen justify-center items-center">
        <Loader />
      </div>
    );

  return (
    <div className="flex flex-col px-6 pt-30">
      <h1 className="text-[18px] md:text-[20px] lg:text-[25px] text-center font-semibold">
        CASE STUDY
      </h1>

      <h2 className="pt-1 text-[40px] md:text-[64px] text-center font-bold">
        {data.title}
      </h2>

      <video
  controls
  className="w-full h-[242px] md:h-[486px] lg:h-[840px] object-cover transition-all duration-300 group-hover:blur-sm"
>
  <source src={data.video} type="video/mp4" />
  Your browser does not support the video tag.
</video>


      {/* <img
        src={data.image}
        alt={data.title}
        className="w-full h-[242px] md:h-[486px] lg:h-[840px] object-cover mt-4"
      /> */}

      <div className="flex md:flex-row flex-col justify-between gap-10 mt-6">
        <p className="font-bold text-[32px] md:text-[40px] w-1/2">
          {data.description.toUpperCase()}
        </p>
        <div
          className="text-[16px] md:text-[18px] lg:text-[22px] w-1/2"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>

      <p className="pt-20 text-center md:text-left font-bold text-[16px] md:text-[18px] lg:text-[22px]">
        Other Case Studies
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {others.filter((item) => item._id !== id).slice(0, 3).map((item, index) => (
          <div key={index} className="flex flex-col">
            {/* Image Wrapper with Hover Group */}
            <div className="relative group overflow-hidden">
              
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[242px] md:h-[487px] lg:h-[402px]  object-cover transition-all duration-300 group-hover:blur-sm"
              />
              {/* Hover Button */}
              <Link
                href="/case-studies/1"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer"
              >
                <span className="bg-white text-black px-4 py-2 text-[16px] md:text-[18px] lg:text-[22px] font-medium rounded shadow-md">
                  Read
                </span>
              </Link>
            </div>

            {/* Title and Description */}
            <div className="mt-2 px-1">
              <h3 className="text-2xl font-semibold text-[32px] md:text-[40px] ">
                {item.title.toUpperCase()}
              </h3>
              <p className="text-gray-700 text-xs text-[16px] md:text-[18px] lg:text-[22px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10 mb-20">
        <Link
          href="/case-studies"
          className="bg-black text-white px-6 py-3 cursor-pointer hover:scale-105 transition-transform duration-300 rounded-md font-medium text-[16px] md:text-[18px] lg:text-[22px]"
        >
          See All
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
