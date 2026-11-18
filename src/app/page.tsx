'use client'

import React, { useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { TwoWorldsSection } from '@/components/TwoWorldsSection'
import { MarineLabSection } from '@/components/MarineLabSection'
import { SkipperBookSection } from '@/components/SkipperBookSection'
import { ItinerariesSection } from '@/components/ItinerariesSection'
import { FaqSection } from '@/components/FaqSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'
import { siteConfig } from '@/config/siteConfig'

export default function HomePage() {
  const [selectedExperience, setSelectedExperience] = useState<string>(
    siteConfig.contactSection.experienceOptions[1]
  )

  const handleSelectFormat = (formatSlug: string) => {
    setSelectedExperience(formatSlug)
    const contactEl = document.getElementById('contatti')
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* 1. Navbar con Logo ufficiale */}
      <Navbar />

      <main>
        {/* 2. Hero Visiva Immediata con CTA sopra la piega */}
        <HeroSection />

        {/* 3. Vela & Relax vs Snorkeling & Scoperta (Super sintetica) */}
        <TwoWorldsSection />

        {/* 4. Le 4 Esperienze Uniche a Bordo (Foto/Video + 1 frase) */}
        <MarineLabSection />

        {/* 5. Formule di Vacanza & Uscita (3 Card di conversione) */}
        <ItinerariesSection onSelectFormat={handleSelectFormat} />

        {/* 6. Chi c'è al timone + Il Libro Io Respiro Mare */}
        <SkipperBookSection />

        {/* 7. FAQ veloci */}
        <FaqSection />

        {/* 8. Contatti & Prenotazione Rapida WhatsApp / Form */}
        <ContactSection selectedExperience={selectedExperience} />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  )
}
