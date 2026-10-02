'use client'

import { useState } from 'react'
import Image from 'next/image'

const rooms = [
  { name: 'Living Room', image: '/images/living-room.jpg', subtitle: 'Relax. Connect.', area: '420 sq.ft.' },
  { name: 'Kitchen', image: '/images/kitchen.jpg', subtitle: 'Cook. Gather.', area: '250 sq.ft.' },
  { name: 'Master Bed.', image: '/images/master-bedroom.jpg', subtitle: 'Rest. Recharge.', area: '350 sq.ft.' },
  { name: 'Bathroom', image: '/images/bathroom.jpg', subtitle: 'Refresh. Renew.', area: '120 sq.ft.' },
  { name: 'Dining Area', image: '/images/dining-area.jpg', subtitle: 'Dine. Entertain.', area: '200 sq.ft.' },
  { name: 'Balcony', image: '/images/balcony.jpg', subtitle: 'Breathe. Observe.', area: '150 sq.ft.' }
]

export default function Experience() {
  const [activeRoom, setActiveRoom] = useState(0)
  const [isNight, setIsNight] = useState(false)

  const handlePrev = () => {
    setActiveRoom((prev) => (prev === 0 ? rooms.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveRoom((prev) => (prev === rooms.length - 1 ? 0 : prev + 1))
  }

  const room = rooms[activeRoom]

  return (
    <section id="experience" className="bg-cream bg-arch-grid py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-4">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#232620]/50 font-semibold">THE EXPERIENCE</span>
          <h2 className="mt-6 font-playfair text-4xl md:text-5xl leading-tight text-[#232620]">
            <span className="block">Don&apos;t just show</span>
            <span className="block italic text-[#7A8165]">the building.</span>
            <span className="block">Let them feel it.</span>
          </h2>
          <p className="mt-6 text-[#232620]/70 leading-relaxed text-sm md:text-base">
            Architecture is more than plans and elevations. We create <span className="text-[#3F4934] font-medium">visual experiences</span> that help people <span className="text-[#3F4934] font-medium">understand</span>, <span className="text-[#3F4934] font-medium">explore</span> and <span className="text-[#3F4934] font-medium">imagine</span> the space before it exists.
          </p>
          <div className="mt-8">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#232620]/40 font-medium">—————— EXPLORE EVERY ROOM</span>
          </div>
        </div>

        {/* RIGHT COLUMN - ENLARGED TO FIT ALL ROOMS */}
        <div className="lg:col-span-8 bg-[#20231E] rounded-3xl overflow-hidden shadow-2xl border border-[#383D32]">
          
          {/* Top card header */}
          <div className="px-6 py-3 border-b border-[#383D32]/70 flex items-center justify-between text-xs bg-[#242821]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#9BA384] font-semibold block">INTERACTIVE PREVIEW</span>
              <span className="text-[#D8D2C2]/50 text-[11px]">Explore · Visualize · Feel the Space</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#D8D2C2]/70 text-[11px]">The Vista Residence</span>
              <button className="text-[#D8D2C2]/60 hover:text-[#FAF7F2] p-1" title="Fullscreen">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
              </button>
            </div>
          </div>

          {/* Room tabs: Perfectly fitted across all 6 rooms without scrollbar cutoff */}
          <div className="bg-[#282C24] p-2.5 flex items-center justify-between gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {rooms.map((r, index) => {
              const isActive = activeRoom === index
              return (
                <button 
                  key={index} 
                  onClick={() => setActiveRoom(index)}
                  className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl cursor-pointer transition whitespace-nowrap text-left ${
                    isActive 
                      ? 'bg-[#3F4934] text-[#FAF7F2] shadow-sm' 
                      : 'text-[#D8D2C2]/70 hover:bg-[#20231E]/60 hover:text-[#FAF7F2]'
                  }`}
                >
                  <div className="w-6 h-6 rounded-md relative overflow-hidden flex-shrink-0">
                    <Image src={r.image} fill style={{ objectFit: "cover" }} alt={r.name} />
                  </div>
                  <span className="text-[12px] font-medium truncate">{r.name}</span>
                </button>
              )
            })}
          </div>
          
          {/* Main interactive room viewport */}
          <div className="relative w-full h-[380px] sm:h-[440px] md:h-[500px]">
            <div className={`absolute inset-0 transition-all duration-700 ${isNight ? 'brightness-[0.6] contrast-[1.1]' : 'brightness-100'}`}>
              <Image src={room.image} fill className="object-cover" alt={room.name} priority />
            </div>
            
            {/* Top-left area badge */}
            <div className="absolute top-5 left-5 bg-[#3F4934]/90 backdrop-blur-sm text-[#FAF7F2] px-3.5 py-1 rounded-full z-10 shadow-sm border border-white/10">
              <span className="text-[10px] uppercase tracking-wider font-semibold">{room.area} INTERACTIVE SPACE</span>
            </div>
            
            {/* Left / Right arrows */}
            <button onClick={handlePrev} className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#20231E]/70 rounded-full flex items-center justify-center text-[#FAF7F2] hover:bg-[#20231E]/95 backdrop-blur z-10 border border-white/15 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={handleNext} className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#20231E]/70 rounded-full flex items-center justify-center text-[#FAF7F2] hover:bg-[#20231E]/95 backdrop-blur z-10 border border-white/15 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
            
            {/* Day / Night toggle */}
            <div className="absolute top-5 right-5 flex flex-col gap-1 z-10">
              <button 
                onClick={() => setIsNight(false)} 
                className={`px-3 py-1 rounded-full text-xs font-semibold cursor-pointer transition text-center ${
                  !isNight 
                    ? 'bg-[#9DA783] text-[#20231E] shadow-sm' 
                    : 'bg-[#20231E]/70 text-[#FAF7F2]/80 border border-white/10 hover:bg-[#20231E]'
                }`}
              >
                Day
              </button>
              <button 
                onClick={() => setIsNight(true)} 
                className={`px-3 py-1 rounded-full text-xs font-semibold cursor-pointer transition text-center ${
                  isNight 
                    ? 'bg-[#3F4934] text-[#FAF7F2] border border-[#9DA783] shadow-sm' 
                    : 'bg-[#20231E]/70 text-[#FAF7F2]/80 border border-white/10 hover:bg-[#20231E]'
                }`}
              >
                Night
              </button>
            </div>
            
            {/* Fullscreen icon */}
            <div className="absolute bottom-5 right-5 w-8 h-8 bg-[#20231E]/70 rounded-full flex items-center justify-center text-[#FAF7F2] z-10 cursor-pointer border border-white/10 hover:bg-[#20231E]/90 transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
            </div>
            
            {/* Gradient and title */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#20231E] via-[#20231E]/60 to-transparent z-0"></div>
            <div className="absolute bottom-6 left-6 z-10">
              <h3 className="font-playfair text-3xl md:text-4xl text-[#FAF7F2] font-bold">{room.name}</h3>
              <p className="text-[#D8D2C2]/70 text-sm mt-0.5">{room.subtitle}</p>
            </div>
          </div>
          
          {/* Thumbnails row at bottom */}
          <div className="flex gap-2.5 p-3.5 overflow-x-auto bg-[#20231E] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {rooms.map((r, index) => (
              <div 
                key={index} 
                onClick={() => setActiveRoom(index)}
                className={`flex-1 min-w-[70px] h-16 rounded-xl relative overflow-hidden cursor-pointer transition-all ${
                  activeRoom === index ? 'ring-2 ring-[#9DA783] opacity-100 scale-[1.02]' : 'opacity-40 hover:opacity-85'
                }`}
              >
                <Image src={r.image} fill style={{ objectFit: "cover" }} alt={`Thumbnail ${r.name}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
