'use client'

import { useState } from 'react'
import Image from 'next/image'

const processCards = [
  {
    num: '01',
    title: 'Your Design',
    subtitle: 'Start with your vision',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="6" width="18" height="2" rx="1" />
        <rect x="3" y="11" width="18" height="2" rx="1" />
        <rect x="3" y="16" width="18" height="2" rx="1" />
      </svg>
    )
  },
  {
    num: '02',
    title: 'We Change It Into VR',
    subtitle: 'Architecture becomes immersive',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="8" width="20" height="8" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 12h4" />
      </svg>
    )
  },
  {
    num: '03',
    title: 'Your Client Feels It',
    subtitle: 'Experience before reality',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
      </svg>
    )
  }
]

export default function ProcessOverview() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="process" className="bg-cream bg-arch-grid py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#232620] font-playfair text-4xl md:text-5xl lg:text-[3.5rem] leading-tight">
          <span className="block">From your design</span>
          <span className="block">to the <span className="italic text-[#7A8165]">experience.</span></span>
        </h2>
        
        {/* Top 3 Interactive Step Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {processCards.map((card, idx) => {
            const isActive = activeStep === idx
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`rounded-2xl p-8 border transition-all duration-300 flex flex-col min-h-[220px] cursor-pointer shadow-sm ${
                  isActive 
                    ? 'bg-[#FAF7F2] border-[#3F4934] ring-2 ring-[#3F4934]/40 shadow-md scale-[1.01]' 
                    : 'bg-[#EBE5D8] border-[#C9C3B4]/60 hover:bg-[#E5DFD2] hover:border-[#232620]/30'
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className={`text-[15px] font-bold ${isActive ? 'text-[#3F4934]' : 'text-[#3F4934]/70'}`}>
                    {card.num}
                  </span>
                  <div className={isActive ? 'text-[#3F4934]' : 'text-[#232620]/40'}>
                    {card.icon}
                  </div>
                </div>
                <div className="mt-auto pt-10">
                  <h3 className="font-playfair text-xl font-semibold text-[#232620]">{card.title}</h3>
                  <p className="text-sm text-[#232620]/60 mt-1">{card.subtitle}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Dynamic Detail Viewer (Updates seamlessly on click) */}
        <div className="mt-10 rounded-2xl overflow-hidden shadow-sm border border-[#C9C3B4]/60 transition-all duration-500">
          
          {/* STEP 01: Your Design */}
          {activeStep === 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[480px] opacity-100 transition-opacity duration-300">
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-[#EBE5D8]">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#232620]/50 font-semibold">STEP 01</span>
                <h3 className="font-playfair text-3xl md:text-4xl font-bold text-[#3F4934] mt-4">Your Design</h3>
                <p className="text-[#232620]/70 text-base mt-6 leading-relaxed">
                  You provide architectural drawings, floor plans, <span className="text-[#3F4934] font-semibold">elevations</span> and <span className="text-[#3F4934] font-semibold">design references</span>.
                </p>
                <div className="mt-8 flex gap-2">
                  <span className="w-8 h-[3px] bg-[#3F4934] rounded-full"></span>
                  <span className="w-8 h-[3px] bg-[#232620]/20 rounded-full"></span>
                  <span className="w-8 h-[3px] bg-[#232620]/20 rounded-full"></span>
                </div>
              </div>
              <div className="bg-[#20231E] p-8 relative overflow-hidden flex flex-col min-h-[350px]">
                <div className="relative z-10">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#9BA384] font-semibold">ARCHITECTURAL INPUT</span>
                  <p className="text-[#D8D2C2]/50 text-sm mt-1">Plans · Elevations · Design</p>
                </div>
                <div className="flex-1 flex items-center justify-center relative z-0 py-8">
                  <svg className="w-full h-full max-h-[260px]" viewBox="0 0 400 300" fill="none">
                    <rect x="50" y="50" width="300" height="200" stroke="#7A8165" strokeWidth="1.2" strokeOpacity="0.5" />
                    <line x1="50" y1="150" x2="200" y2="150" stroke="#7A8165" strokeWidth="1.2" strokeOpacity="0.5" />
                    <line x1="200" y1="50" x2="200" y2="250" stroke="#7A8165" strokeWidth="1.2" strokeOpacity="0.5" />
                    <rect x="80" y="80" width="40" height="40" stroke="#7A8165" strokeWidth="1.2" strokeOpacity="0.5" />
                    <line x1="100" y1="80" x2="100" y2="120" stroke="#7A8165" strokeWidth="1.2" strokeOpacity="0.5" />
                  </svg>
                </div>
                <div className="absolute bottom-6 left-8 z-10">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#D8D2C2]/40 font-medium">YOUR DESIGN</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 02: We Change It Into VR */}
          {activeStep === 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[480px] opacity-100 transition-opacity duration-300">
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-[#EBE5D8]">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#232620]/50 font-semibold">STEP 02</span>
                <h3 className="font-playfair text-3xl md:text-4xl font-bold text-[#3F4934] mt-4">We Change It Into VR</h3>
                <p className="text-[#232620]/70 text-base mt-6 leading-relaxed">
                  We transform your design into detailed visual <span className="text-[#3F4934] font-semibold">environments</span>, <span className="text-[#3F4934] font-semibold">walkthroughs</span> and <span className="text-[#3F4934] font-semibold">interactive</span> experiences.
                </p>
                <div className="mt-8 flex gap-2">
                  <span className="w-8 h-[3px] bg-[#232620]/20 rounded-full"></span>
                  <span className="w-8 h-[3px] bg-[#3F4934] rounded-full"></span>
                  <span className="w-8 h-[3px] bg-[#232620]/20 rounded-full"></span>
                </div>
              </div>
              <div className="overflow-hidden relative min-h-[350px]">
                <Image src="/images/step-02-vr.jpg?v=3" fill style={{ objectFit: "cover" }} alt="Our Visualization" priority unoptimized />
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#20231E]/80 to-transparent"></div>
                <span className="absolute top-6 left-6 text-[11px] uppercase tracking-[0.2em] text-[#FAF7F2] font-semibold">OUR VISUALIZATION</span>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#20231E]/80 to-transparent"></div>
                <span className="absolute bottom-6 left-6 text-[11px] uppercase tracking-[0.2em] text-[#D8D2C2]/70 font-medium">YOUR DESIGN</span>
              </div>
            </div>
          )}

          {/* STEP 03: Your Client Feels It */}
          {activeStep === 2 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[480px] opacity-100 transition-opacity duration-300">
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-[#EBE5D8]">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#232620]/50 font-semibold">STEP 03</span>
                <h3 className="font-playfair text-3xl md:text-4xl font-bold text-[#3F4934] mt-4">Your Client Feels It</h3>
                <p className="text-[#232620]/70 text-base mt-6 leading-relaxed">
                  Your clients can <span className="text-[#3F4934] font-semibold">understand</span>, <span className="text-[#3F4934] font-semibold">explore</span> and <span className="text-[#3F4934] font-semibold">imagine</span> the finished property before it exists.
                </p>
                <div className="mt-8 flex gap-2">
                  <span className="w-8 h-[3px] bg-[#232620]/20 rounded-full"></span>
                  <span className="w-8 h-[3px] bg-[#232620]/20 rounded-full"></span>
                  <span className="w-8 h-[3px] bg-[#3F4934] rounded-full"></span>
                </div>
              </div>
              <div className="overflow-hidden relative min-h-[350px]">
                <Image src="/images/vr-client.jpg?v=3" fill style={{ objectFit: "cover" }} alt="Client Experience" priority unoptimized />
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#20231E]/80 to-transparent"></div>
                <span className="absolute top-6 left-6 text-[11px] uppercase tracking-[0.2em] text-[#FAF7F2] font-semibold">CLIENT EXPERIENCE</span>
                <div className="absolute top-12 left-6"><span className="text-[#D8D2C2]/80 text-xs">Explore · Understand · Imagine</span></div>
                
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#20231E]/90 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#9BA384] font-semibold block">YOUR CLIENT FEELS IT</span>
                  <span className="font-playfair text-2xl text-[#FAF7F2] font-bold">Before reality.</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
