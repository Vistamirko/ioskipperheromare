import React from 'react'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { TwoWorldsSection } from '@/components/TwoWorldsSection'
import { MarineLabSection } from '@/components/MarineLabSection'
import { SkipperBookSection } from '@/components/SkipperBookSection'
import { ItinerariesSection } from '@/components/ItinerariesSection'
import { FaqSection } from '@/components/FaqSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Navbar />

      <main>
        <HeroSection />
        <TwoWorldsSection />
        <MarineLabSection />
        <ItinerariesSection />
        <SkipperBookSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
