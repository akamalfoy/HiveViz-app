import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProcessOverview from '@/components/ProcessOverview'
import Experience from '@/components/Experience'
import Services from '@/components/Services'
import Benefits from '@/components/Benefits'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Script from 'next/script'

export default function Home() {
  return (
    <main>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "HiveViz",
            "url": "https://hiveviz.com",
            "description": "Architectural visualization and immersive experiences",
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "hiveviz@gmail.com",
              "contactType": "customer service"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kallakurichi",
              "addressRegion": "Tamil Nadu",
              "addressCountry": "IN"
            }
          })
        }}
      />
      <Navbar />
      <Hero />
      <ProcessOverview />
      <Experience />
      <Services />
      <Benefits />
      <Contact />
      <Footer />
    </main>
  )
}
