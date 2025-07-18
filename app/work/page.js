'use client'

import Footer from '@/components/home/Footer'
import Animation from '@/components/work/Animation'
import EventCoverage from '@/components/work/EventCoverage'
import MotionGraphics from '@/components/work/MotionGraphics'
import SocialMedia from '@/components/work/SocialMedia'
import VideoProduction from '@/components/work/VideoProduction'
import Link from 'next/link'
import React, { useState } from 'react'

const Page = () => {
  const [activeTab, setActiveTab] = useState("Social Media")

  return (
    <div className='flex flex-col px-6 pt-10'>
      <p className='py-20 text-center text-[40px] md:text-[64px] lg:text-[64px] font-bold'>Our Works</p>

      {/* Tabs */}
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <button
          onClick={() => setActiveTab("Video Production")}
          className={`cursor-pointer rounded-md text-[16px] md:text-[18px] lg:text-[22px] px-4 py-2 hover:bg-black hover:text-white ${activeTab === "Video Production" ? "bg-black text-white" : "text-gray-700 bg-gray-200"}`}
        >
          Video Production
        </button>

        <button
          onClick={() => setActiveTab("Motion Graphics")}
          className={`cursor-pointer rounded-md text-[16px] md:text-[18px] lg:text-[22px] px-4 py-2 hover:bg-black hover:text-white ${activeTab === "Motion Graphics" ? "bg-black text-white" : "text-gray-700 bg-gray-200"}`}
        >
          Motion Graphics
        </button>

        <button
          onClick={() => setActiveTab("Social Media")}
          className={`cursor-pointer rounded-md text-[16px] md:text-[18px] lg:text-[22px] px-4 py-2 hover:bg-black hover:text-white ${activeTab === "Social Media" ? "bg-black text-white" : "text-gray-700 bg-gray-200"}`}
        >
          Social Media
        </button>
        <button
          onClick={() => setActiveTab("Animation")}
          className={`cursor-pointer rounded-md text-[16px] md:text-[18px] lg:text-[22px] px-4 py-2 hover:bg-black hover:text-white ${activeTab === "Animation" ? "bg-black text-white" : "text-gray-700 bg-gray-200"}`}
        >
          Animation
        </button>

        <button
          onClick={() => setActiveTab("Event Coverage")}
          className={`cursor-pointer rounded-md text-[16px] md:text-[18px] lg:text-[22px] px-4 py-2 hover:bg-black hover:text-white ${activeTab === "Event Coverage" ? "bg-black text-white" : "text-gray-700 bg-gray-200"}`}
        >
          Event Coverage
        </button>
      </div>

      


      { activeTab === "Video Production" && <VideoProduction />}
      { activeTab === "Motion Graphics" && <MotionGraphics />}
      { activeTab === "Social Media" && <SocialMedia />}
      { activeTab === "Animation" && <Animation />}
      { activeTab === "Event Coverage" && <EventCoverage />}

        <Footer/>

    </div>
  )
}

export default Page
