'use client';

import React from 'react';
import Image from 'next/image';
export default function Footer() {
  return (
    <footer className="bg-[#20231E] text-[#FAF7F2] py-16 px-6 border-t border-[#383D32]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <a href="#hero" className="inline-block group">
              <Image src="/images/logo-horizontal.png?v=4" alt="HiveViz Logo" width={200} height={50} className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" unoptimized />
            </a>
            <p className="mt-6 text-[#D8D2C2]/60 text-sm leading-relaxed max-w-xs">
              Architectural visualization and immersive experiences for the spaces of tomorrow.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#9BA384] font-semibold mb-4">
              CONTACT
            </h4>
            <a href="mailto:hiveviz@gmail.com" className="flex items-center gap-2 text-[#D8D2C2]/70 text-sm hover:text-[#FAF7F2] transition">
              <svg className="w-4 h-4 text-[#9BA384]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hiveviz@gmail.com
            </a>
            <div className="flex items-center gap-2 text-[#D8D2C2]/70 text-sm mt-3">
              <svg className="w-4 h-4 text-[#9BA384]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Kallakurichi, Tamil Nadu, India
            </div>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#9BA384] font-semibold mb-4">
              EXPLORE
            </h4>
            <div className="flex flex-col gap-2">
              <a href="#experience" className="text-[#D8D2C2]/70 text-sm hover:text-[#FAF7F2] transition">Experience</a>
              <a href="#process" className="text-[#D8D2C2]/70 text-sm hover:text-[#FAF7F2] transition">Process</a>
              <a href="#services" className="text-[#D8D2C2]/70 text-sm hover:text-[#FAF7F2] transition">Services</a>
              <a href="#contact" className="text-[#D8D2C2]/70 text-sm hover:text-[#FAF7F2] transition">Start a Project</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#383D32] flex justify-between items-center">
          <span className="text-[#D8D2C2]/40 text-[12px]">HIVEVIZ @ 2026</span>
          <span className="text-[#9BA384] text-[11px] tracking-[0.2em] font-medium">VISION BEYOND REALITY</span>
        </div>
      </div>
    </footer>
  );
}
