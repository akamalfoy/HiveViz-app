'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="hero" className="relative h-screen min-h-[600px] overflow-hidden">
      <Image 
        src="/images/hero-arch.jpg?v=3" 
        fill 
        style={{ objectFit: "cover" }} 
        priority 
        unoptimized
        alt="Modern architectural visualization" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#20231E]/90 via-[#20231E]/40 to-[#20231E]/30" />
      
      <div className="absolute inset-0 flex flex-col justify-center px-6 max-w-7xl mx-auto pt-16">
        <div className={`transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-[11px] uppercase tracking-[0.3em] text-[#9BA384] mb-6 font-semibold">
            ARCHITECTURAL VISUALIZATION STUDIO
          </div>
          
          <h1 className="font-playfair text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.95]">
            <span className="block text-[#FAF7F2]">Vision</span>
            <span className="block">
              <span className="text-[#9DA783] italic font-normal">Beyond</span> <span className="text-[#FAF7F2]">Reality.</span>
            </span>
          </h1>
          
          <p className="text-[#D8D2C2]/80 text-lg mt-6 max-w-lg leading-relaxed">
            Turn your architectural design into an experience before it becomes reality.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#experience" className="bg-[#3F4934] text-[#FAF7F2] px-7 py-3.5 text-[12px] uppercase tracking-[0.14em] font-medium rounded-full flex items-center gap-2 hover:bg-[#2E3526] transition shadow-lg shadow-black/20">
              ENTER THE EXPERIENCE
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="#services" className="border border-[#FAF7F2]/40 text-[#FAF7F2] px-7 py-3.5 text-[12px] uppercase tracking-[0.14em] font-medium rounded-full hover:bg-white/10 transition">
              WHAT WE CREATE
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5BFB0]/60 font-medium">SCROLL TO DISCOVER</span>
        <span className="text-[#C5BFB0]/60 mt-1 text-sm animate-bounce">↓</span>
      </div>
    </section>
  )
}
