import React from 'react'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { SkipperBookSection } from '@/components/SkipperBookSection'
import { TwoWorldsSection } from '@/components/TwoWorldsSection'
import { MarineLabSection } from '@/components/MarineLabSection'
import { ItinerariesSection } from '@/components/ItinerariesSection'
import { FaqSection } from '@/components/FaqSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Navbar />

      <main>
        {/* 1. Hero — Posizionamento Skipper & Guida Sub come valore aggiunto */}
        <HeroSection />

        {/* 2. Il Biglietto da Visita: Chi sono + Il Libro Io Respiro Mare */}
        <SkipperBookSection />

        {/* 3. A Bordo con Me: Lo Skipper (Sicurezza & Rade) / La Guida Sub (Snorkeling & Meraviglia) */}
        <TwoWorldsSection />

        {/* 4. Nella Mia Sacca da Skipper: Idrofono Cetacei, Drone -100m, Snorkeling, Microscopio */}
        <MarineLabSection />

        {/* 5. Per Ospiti in Crociera, Società di Charter (B2B) e Famiglie */}
        <ItinerariesSection />

        {/* 6. FAQ per Ospiti assegnati dal Charter e per Partner Charter */}
        <FaqSection />

        {/* 7. Contatto Diretto */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
