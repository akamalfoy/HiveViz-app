'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function ProcessSteps() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-10')
          }
        })
      },
      { threshold: 0.1 }
    )

    const steps = document.querySelectorAll('.step-anim')
    steps.forEach((step) => observer.observe(step))

    return () => {
      steps.forEach((step) => observer.unobserve(step))
    }
  }, [])

  return (
    <div className="bg-cream bg-arch-grid pb-20">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Step 01 */}
        <section className="step-anim opacity-0 translate-y-10 transition-all duration-700 grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[500px] rounded-2xl overflow-hidden shadow-sm border border-[#C9C3B4]/60">
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-[#EBE5D8]">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#232620]/50 font-semibold">STEP 01</span>
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-[#3F4934] mt-4">Your Design</h3>
            <p className="text-[#232620]/70 text-base mt-6 leading-relaxed">
              You provide architectural drawings, floor plans, <span className="text-[#3F4934] font-medium">elevations</span> and <span className="text-[#3F4934] font-medium">design references</span>.
            </p>
            <div className="mt-8 flex gap-2">
              <span className="w-8 h-[2px] bg-[#232620]/30"></span>
              <span className="w-8 h-[2px] bg-[#232620]/30"></span>
            </div>
          </div>
          <div className="bg-[#20231E] p-8 relative overflow-hidden flex flex-col">
            <div className="relative z-10">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#9BA384]">ARCHITECTURAL INPUT</span>
              <p className="text-[#D8D2C2]/50 text-sm mt-1">Plans · Elevations · Design</p>
            </div>
            <div className="flex-1 flex items-center justify-center relative z-0">
              <svg className="w-full h-full max-h-[300px]" viewBox="0 0 400 300" fill="none">
                <rect x="50" y="50" width="300" height="200" stroke="#7A8165" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="50" y1="150" x2="200" y2="150" stroke="#7A8165" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="200" y1="50" x2="200" y2="250" stroke="#7A8165" strokeWidth="1" strokeOpacity="0.4" />
                <rect x="80" y="80" width="40" height="40" stroke="#7A8165" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="100" y1="80" x2="100" y2="120" stroke="#7A8165" strokeWidth="1" strokeOpacity="0.4" />
              </svg>
            </div>
            <div className="absolute bottom-6 left-8 z-10">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#D8D2C2]/40">YOUR DESIGN</span>
            </div>
          </div>
        </section>
        
        {/* Step 02 */}
        <section className="step-anim opacity-0 translate-y-10 transition-all duration-700 grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[500px] rounded-2xl overflow-hidden shadow-sm border border-[#C9C3B4]/60">
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-[#EBE5D8]">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#232620]/50 font-semibold">STEP 02</span>
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-[#3F4934] mt-4">We Change It Into VR</h3>
            <p className="text-[#232620]/70 text-base mt-6 leading-relaxed">
              We transform your design into detailed visual <span className="text-[#3F4934] font-medium">environments</span>, <span className="text-[#3F4934] font-medium">walkthroughs</span> and <span className="text-[#3F4934] font-medium">interactive</span> experiences.
            </p>
            <div className="mt-8 flex gap-2">
              <span className="w-8 h-[2px] bg-[#232620]/30"></span>
              <span className="w-8 h-[2px] bg-[#232620]/30"></span>
            </div>
          </div>
          <div className="overflow-hidden relative min-h-[400px]">
            <Image src="/images/modern-house.jpg" fill style={{ objectFit: "cover" }} alt="Our Visualization" />
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#20231E]/70 to-transparent"></div>
            <span className="absolute top-6 left-6 text-[11px] uppercase tracking-[0.2em] text-[#FAF7F2]/80 font-medium">OUR VISUALIZATION</span>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#20231E]/70 to-transparent"></div>
            <span className="absolute bottom-6 left-6 text-[11px] uppercase tracking-[0.2em] text-[#D8D2C2]/60">YOUR DESIGN</span>
          </div>
        </section>

        {/* Step 03 */}
        <section className="step-anim opacity-0 translate-y-10 transition-all duration-700 grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[500px] rounded-2xl overflow-hidden shadow-sm border border-[#C9C3B4]/60">
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-[#EBE5D8]">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#232620]/50 font-semibold">STEP 03</span>
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-[#3F4934] mt-4">Your Client Feels It</h3>
            <p className="text-[#232620]/70 text-base mt-6 leading-relaxed">
              Your clients can <span className="text-[#3F4934] font-medium">understand</span>, <span className="text-[#3F4934] font-medium">explore</span> and <span className="text-[#3F4934] font-medium">imagine</span> the finished property before it exists.
            </p>
            <div className="mt-8 flex gap-2">
              <span className="w-8 h-[2px] bg-[#232620]/30"></span>
              <span className="w-8 h-[2px] bg-[#232620]/30"></span>
            </div>
          </div>
          <div className="overflow-hidden relative min-h-[400px]">
            <Image src="/images/vr-team.jpg" fill style={{ objectFit: "cover" }} alt="Client Experience" />
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#20231E]/70 to-transparent"></div>
            <span className="absolute top-6 left-6 text-[11px] uppercase tracking-[0.2em] text-[#FAF7F2]/80 font-medium">CLIENT EXPERIENCE</span>
            <div className="absolute top-12 left-6"><span className="text-[#D8D2C2]/70 text-xs">Explore · Understand · Imagine</span></div>
          </div>
        </section>
        
        {/* Text Section */}
        <section className="step-anim opacity-0 translate-y-10 transition-all duration-700 py-16 text-center md:text-left">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#232620]/50 font-semibold">YOUR CLIENT FEELS IT</span>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#232620] mt-4">Before reality.</h2>
        </section>

      </div>
    </div>
  )
}
