'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Architectural Visualization',
    subtitle: 'Photorealistic spaces',
    tags: ['Interior renders', 'Exterior renders', 'Day & night', 'Material visualization'],
    image: '/images/modern-house.jpg',
    desc: 'Transform architectural drawings into photorealistic interiors and exteriors.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'Immersive VR Walkthroughs',
    subtitle: 'Step inside before reality',
    tags: ['Virtual tours', 'VR presentations', 'Spatial walkthroughs', 'Client previews'],
    image: '/images/arch-viz-house.jpg',
    desc: 'Walk through your project in full VR before construction begins.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'AI Project Films',
    subtitle: 'Architecture in motion',
    tags: ['Project films', 'AI sequences', 'Cinematic visuals', 'Social content'],
    image: '/images/ai-film.jpg',
    desc: 'Turn your project into cinematic visual stories using AI assisted production.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
    title: 'Interactive Experiences',
    subtitle: 'Explore. Interact. Imagine.',
    tags: ['Interactive models', 'Hotspots', 'Room navigation', 'Digital presentations'],
    image: '/images/modern-office.jpg',
    desc: 'Create interactive digital experiences that let prospects explore your project.',
  }
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="bg-cream bg-arch-grid py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#232620]/50 font-semibold">
              WHAT WE CREATE
            </span>
            <h2 className="mt-4 font-playfair text-4xl md:text-5xl leading-tight text-[#232620]">
              Architecture,<br />
              <span className="italic text-[#7A8165]">reimagined.</span>
            </h2>
          </div>
          <div className="lg:max-w-sm lg:pt-8">
            <p className="text-[#232620]/70 leading-relaxed">
              Visualization, immersive technology and AI combined around your project.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2.5">
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className="bg-[#EBE5D8] rounded-2xl border border-[#C9C3B4]/60 overflow-hidden transition-all shadow-sm"
                >
                  <div
                    className="px-6 py-5 flex items-center gap-4 cursor-pointer hover:bg-[#E5DFD2] transition"
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${isActive ? 'border-[#3F4934] bg-[#3F4934]' : 'border-[#232620]/20'}`}>
                      {isActive && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#DDD7C8] text-[#232620]/70">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#232620] text-[15px]">{service.title}</h3>
                      <p className="text-[#232620]/50 text-[13px]">{service.subtitle}</p>
                    </div>
                    <div className={`text-[#232620]/40 transition-transform ${isActive ? 'rotate-90' : ''}`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  {isActive && (
                    <div className="px-6 pb-5 pt-0 flex flex-wrap gap-2">
                      {service.tags.map((tag, i) => (
                        <span key={i} className="px-4 py-1.5 bg-[#FAF7F2] text-[#232620]/80 text-[12px] font-medium rounded-full border border-[#D5CEBF] shadow-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl overflow-hidden relative h-[500px] lg:aspect-[4/3] lg:h-auto border border-[#383D32] shadow-xl">
            <Image
              src={services[activeIndex].image}
              alt={services[activeIndex].title}
              fill
              unoptimized
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#20231E]/90 via-[#20231E]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-[#D8D2C2]/80 text-sm leading-relaxed">{services[activeIndex].desc}</p>
              <h3 className="font-playfair text-2xl md:text-3xl text-[#FAF7F2] font-bold mt-2">
                {services[activeIndex].title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
