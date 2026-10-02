'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const projectTypes = ['Residential', 'Villa', 'Commercial', 'Real Estate Launch', 'Other'];

const projectTypeData: { [key: string]: { image: string; subtitle: string } } = {
  'Residential': {
    image: '/images/modern-house.jpg',
    subtitle: 'Imagine your project before it becomes reality.'
  },
  'Villa': {
    image: '/images/villa.jpg',
    subtitle: 'Experience luxury living spaces and bespoke architecture.'
  },
  'Commercial': {
    image: '/images/commercial.jpg',
    subtitle: 'Command attention with iconic commercial spaces and workspaces.'
  },
  'Real Estate Launch': {
    image: '/images/real-estate.jpg',
    subtitle: 'Engage prospective buyers with cinematic interactive presentations.'
  },
  'Other': {
    image: '/images/concept.jpg',
    subtitle: 'Bring visionary architectural concepts to life.'
  }
};

export default function Contact() {
  const [projectType, setProjectType] = useState('Residential');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const validate = () => {
    const newErrors: { [key: string]: boolean } = {};
    if (!name.trim()) newErrors.name = true;
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = true;
    if (!details.trim()) newErrors.details = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          projectType,
          name,
          company,
          email,
          phone,
          details,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setName('');
        setCompany('');
        setEmail('');
        setPhone('');
        setDetails('');
        setErrors({});
      } else {
        setSubmitStatus('error');
        setErrorMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Failed to send inquiry. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-cream bg-arch-grid py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#232620]/50 font-semibold">
            START SOMETHING
          </span>
          <h2 className="mt-4 font-playfair text-4xl md:text-5xl leading-tight text-[#232620]">
            Let&apos;s create<br />
            <span className="italic text-[#7A8165]">what comes next.</span>
          </h2>
          <p className="mt-4 text-[#232620]/70 max-w-2xl leading-relaxed">
            Tell us about your project and let&apos;s turn your architectural vision into an experience.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#EBE5D8] rounded-2xl p-8 md:p-10 relative border border-[#C9C3B4]/60 shadow-sm">
            {submitStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-[#3F4934]/10 rounded-2xl border border-[#3F4934]/20">
                <div className="w-16 h-16 bg-[#3F4934] rounded-full flex items-center justify-center text-white mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-playfair font-bold text-[#232620] mb-2">Thank you!</h3>
                <p className="text-[#232620]/70 mb-8">We will get back to you within 24 hours.</p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="text-[#3F4934] hover:text-[#232620] font-medium underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex justify-between items-center">
                    <span className="text-sm">{errorMessage}</span>
                    <button type="button" onClick={() => setSubmitStatus('idle')} className="text-red-400 hover:text-red-600">
                      ×
                    </button>
                  </div>
                )}
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#3F4934] font-semibold">
                      PROJECT ENQUIRY
                    </span>
                    <p className="text-[#232620]/60 text-sm mt-1">
                      Let&apos;s understand your vision.
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-[#DDD7C8] rounded-full flex items-center justify-center text-[#232620]/60">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-[11px] uppercase tracking-[0.15em] text-[#232620]/50 font-semibold">
                    01 · WHAT ARE YOU BUILDING?
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {projectTypes.map(type => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setProjectType(type)}
                        className={`px-5 py-2.5 rounded-full text-[13px] border transition font-medium ${
                          projectType === type
                            ? 'bg-[#3F4934] text-[#FAF7F2] border-[#3F4934] shadow-sm'
                            : 'bg-[#FAF7F2] text-[#232620]/70 border-[#C9C3B4]/60 hover:border-[#232620]/40'
                        }`}
                      >
                        {projectType === type && <span className="mr-1.5">✓</span>}
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-[11px] uppercase tracking-[0.15em] text-[#232620]/50 font-semibold">
                    02 · TELL US ABOUT IT
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div>
                      <label className="text-[11px] uppercase tracking-[0.1em] text-[#232620]/50 mb-2 block font-medium">YOUR NAME</label>
                      <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Enter your name"
                        className={`w-full bg-transparent border-b py-3 text-[#232620] placeholder:text-[#232620]/35 focus:border-[#3F4934] focus:outline-none transition ${errors.name ? 'border-red-500' : 'border-[#C9C3B4]'}`}
                      />
                      {errors.name && <span className="text-xs text-red-500 mt-1">Name is required</span>}
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-[0.1em] text-[#232620]/50 mb-2 block font-medium">COMPANY</label>
                      <input
                        type="text"
                        value={company}
                        onChange={e => setCompany(e.target.value)}
                        placeholder="Company name"
                        className="w-full bg-transparent border-b border-[#C9C3B4] py-3 text-[#232620] placeholder:text-[#232620]/35 focus:border-[#3F4934] focus:outline-none transition"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div>
                      <label className="text-[11px] uppercase tracking-[0.1em] text-[#232620]/50 mb-2 block font-medium">EMAIL</label>
                      <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className={`w-full bg-transparent border-b py-3 text-[#232620] placeholder:text-[#232620]/35 focus:border-[#3F4934] focus:outline-none transition ${errors.email ? 'border-red-500' : 'border-[#C9C3B4]'}`}
                      />
                      {errors.email && <span className="text-xs text-red-500 mt-1">Valid email required</span>}
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-[0.1em] text-[#232620]/50 mb-2 block font-medium">PHONE</label>
                      <input
                        type="text"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="+91"
                        className="w-full bg-transparent border-b border-[#C9C3B4] py-3 text-[#232620] placeholder:text-[#232620]/35 focus:border-[#3F4934] focus:outline-none transition"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-[11px] uppercase tracking-[0.15em] text-[#232620]/50 font-semibold mb-2">
                    PROJECT DETAILS
                  </h4>
                  <textarea
                    value={details}
                    onChange={e => setDetails(e.target.value)}
                    placeholder="Tell us about the property, location, scope or experience you have in mind..."
                    className={`w-full bg-transparent border-b py-3 text-[#232620] placeholder:text-[#232620]/35 focus:border-[#3F4934] focus:outline-none transition resize-none h-24 ${errors.details ? 'border-red-500' : 'border-[#C9C3B4]'}`}
                  />
                  {errors.details && <span className="text-xs text-red-500 mt-1">Project details are required</span>}
                </div>

                <div className="mt-8 pt-8 border-t border-[#C9C3B4]/60">
                  <div className="flex justify-between items-center">
                    <h4 className="text-[11px] uppercase tracking-[0.15em] text-[#232620]/50 font-semibold">YOUR HIVEVIZ JOURNEY</h4>
                    <span className="text-[11px] uppercase tracking-[0.15em] text-[#232620]/40">DELIVERED</span>
                  </div>
                  <div className="flex mt-4 gap-0">
                    <div className="bg-[#FAF7F2] border border-[#C9C3B4]/60 rounded-l-xl px-4 py-3 flex-1 shadow-2xs">
                      <div className="text-[9px] uppercase text-[#232620]/40 font-semibold">PROJECT</div>
                      <div className="text-sm text-[#232620] font-medium truncate">{projectType}</div>
                    </div>
                    <div className="flex items-center text-[#232620]/30 px-1">→</div>
                    <div className="bg-[#3F4934] text-[#FAF7F2] rounded-none px-4 py-3 flex-1 shadow-xs">
                      <div className="text-[9px] uppercase text-[#FAF7F2]/60 font-semibold">STUDIO</div>
                      <div className="text-sm text-[#FAF7F2] font-medium">Transform</div>
                    </div>
                    <div className="flex items-center text-[#232620]/30 px-1">→</div>
                    <div className="bg-[#FAF7F2] border border-[#C9C3B4]/60 rounded-r-xl px-4 py-3 flex-1 shadow-2xs">
                      <div className="text-[9px] uppercase text-[#232620]/40 font-semibold">RESULT</div>
                      <div className="text-sm text-[#232620] font-medium">Experience</div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 w-full bg-[#20231E] text-[#FAF7F2] py-4 rounded-full uppercase text-[12px] tracking-[0.18em] font-semibold flex items-center justify-between px-7 hover:bg-[#2E3526] transition-colors disabled:opacity-70 shadow-lg"
                >
                  <span>{isSubmitting ? 'SENDING...' : 'START THE CONVERSATION'}</span>
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </button>
              </form>
            )}
          </div>

          <div className="bg-[#20231E] rounded-2xl overflow-hidden relative h-[500px] lg:h-full flex flex-col border border-[#383D32] shadow-xl">
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-[#3F4934] text-[#FAF7F2] text-[11px] px-3.5 py-1 rounded-full font-medium">
                YOUR PROJECT
              </span>
            </div>
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-[#282C24] text-[#FAF7F2]/90 text-[11px] px-3.5 py-1 rounded-full border border-[#383D32]">
                HIVEVIZ
              </span>
            </div>
            
            <Image
              key={projectType}
              src={projectTypeData[projectType]?.image || '/images/modern-house.jpg'}
              alt={projectType}
              fill
              className="object-cover opacity-50 transition-opacity duration-700"
            />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 text-center">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#9BA384] mb-2 font-medium">SELECTED</span>
              <h3 className="font-playfair text-4xl text-[#FAF7F2] font-bold drop-shadow-lg transition-all duration-300">
                {projectType}
              </h3>
              <p className="text-[#D8D2C2]/80 text-sm mt-4 max-w-xs leading-relaxed transition-all duration-300">
                {projectTypeData[projectType]?.subtitle || 'Imagine your project before it becomes reality.'}
              </p>
            </div>

            <div className="absolute bottom-6 left-6 right-6 z-10">
              <span className="text-[11px] uppercase tracking-[0.15em] text-[#D8D2C2]/50 mb-3 block font-semibold">
                EXPERIENCE PREVIEW
              </span>
              <div className="flex gap-2">
                <div className="bg-[#282C24]/80 backdrop-blur border border-[#383D32] px-3 py-2 rounded-lg flex-1 text-center">
                  <span className="text-[11px] text-[#FAF7F2]/70">01 Design</span>
                </div>
                <div className="bg-[#3F4934] px-3 py-2 rounded-lg flex-1 text-center shadow-xs">
                  <span className="text-[11px] text-[#FAF7F2] font-medium">02 Visualize</span>
                </div>
                <div className="bg-[#282C24]/80 backdrop-blur border border-[#383D32] px-3 py-2 rounded-lg flex-1 text-center">
                  <span className="text-[11px] text-[#FAF7F2]/70">03 Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
