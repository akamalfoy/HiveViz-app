'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-300">
      <div className={`w-full py-2.5 px-6 flex items-center justify-between rounded-full bg-[#20231E]/95 backdrop-blur-md border border-[#3A4033] transition-shadow duration-300 ${scrolled ? 'shadow-2xl shadow-black/40' : 'shadow-xl'}`}>
        
        {/* LEFT: Logo area */}
        <a href="#hero" className="flex items-center gap-3 group">
          <Image
            src="/images/logo-horizontal.png?v=4"
            alt="HiveViz Logo"
            width={180}
            height={45}
            className="h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
            unoptimized
          />
        </a>

        {/* CENTER: Nav links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <a href="#experience" className="text-[#C8C2B3] text-[11px] uppercase tracking-[0.2em] font-medium hover:text-[#FAF7F2] transition-colors">Experience</a>
          <a href="#process" className="text-[#C8C2B3] text-[11px] uppercase tracking-[0.2em] font-medium hover:text-[#FAF7F2] transition-colors">Process</a>
          <a href="#services" className="text-[#C8C2B3] text-[11px] uppercase tracking-[0.2em] font-medium hover:text-[#FAF7F2] transition-colors">Services</a>
          <a href="#contact" className="text-[#C8C2B3] text-[11px] uppercase tracking-[0.2em] font-medium hover:text-[#FAF7F2] transition-colors">Contact</a>
        </div>

        {/* RIGHT: Button */}
        <div className="hidden md:block">
          <a href="#contact" className="border border-[#4A5440] text-[#D8D2C2] text-[11px] uppercase tracking-[0.16em] px-5 py-2 rounded-full hover:bg-[#3F4934] hover:text-[#FAF7F2] transition-all duration-300 inline-block font-medium">
            START A PROJECT
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} className="text-[#D8D2C2] p-1 focus:outline-none" aria-label="Open Menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#1D201A] z-50 flex flex-col p-8 rounded-3xl mt-2 border border-[#3A4033] shadow-2xl">
          <div className="flex justify-between items-center">
            <Image src="/images/logo-horizontal.png?v=4" alt="HiveViz Logo" width={150} height={38} className="h-8 w-auto object-contain" unoptimized />
            <button onClick={() => setIsOpen(false)} className="text-[#D8D2C2] focus:outline-none" aria-label="Close Menu">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-7">
            <a href="#experience" onClick={() => setIsOpen(false)} className="text-[#FAF7F2] text-xl uppercase tracking-[0.2em] font-medium hover:text-[#7A8165]">Experience</a>
            <a href="#process" onClick={() => setIsOpen(false)} className="text-[#FAF7F2] text-xl uppercase tracking-[0.2em] font-medium hover:text-[#7A8165]">Process</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="text-[#FAF7F2] text-xl uppercase tracking-[0.2em] font-medium hover:text-[#7A8165]">Services</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-[#FAF7F2] text-xl uppercase tracking-[0.2em] font-medium hover:text-[#7A8165]">Contact</a>
          </div>
          <div className="pb-4 flex justify-center">
             <a href="#contact" onClick={() => setIsOpen(false)} className="border border-[#4A5440] text-[#FAF7F2] text-xs uppercase tracking-[0.16em] px-8 py-3 rounded-full hover:bg-[#3F4934] transition-all duration-300 w-full max-w-sm text-center font-medium">
              START A PROJECT
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
