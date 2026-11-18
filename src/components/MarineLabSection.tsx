'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  CssWaveBadge,
  CssSonarBadge,
  CssSoundWaveBadge,
  CssLensBadge,
} from './CssIcons'

const items = [
  {
    id: 'idrofono',
    tag: 'CETACEI IN DIRETTA',
    title: 'Idrofono & Cetacei',
    short: 'In navigazione caliamo l’idrofono per ascoltare dal vivo delfini e cetacei nel blu.',
    image: '/images/archivio/mirko-idrofono-cavo.webp',
    badge: CssSoundWaveBadge,
  },
  {
    id: 'rov',
    tag: 'FINO A -100m',
    title: 'Drone Subacqueo',
    short: 'Dal pozzetto guardiamo in diretta sullo schermo cosa c’è fino a 100 metri.',
    image: '/images/archivio/drone-sub-rov-reale.webp',
    video: '/images/archivio/drone-sub-rov.mp4',
    badge: CssSonarBadge,
  },
  {
    id: 'snorkel',
    tag: 'IN ACQUA',
    title: 'Snorkeling Guidato',
    short: 'Nuotiamo insieme con maschera e pinne tra stelle marine, polpi e Posidonia.',
    image: '/images/snorkel.webp',
    badge: CssWaveBadge,
  },
  {
    id: 'microscopio',
    tag: 'SU SMARTPHONE',
    title: 'Microscopio da Campo',
    short: 'Una goccia di mare ingrandita sul telefono: uno spettacolo per grandi e ragazzi.',
    image: '/images/archivio/microscopio-diple-barca.webp',
    badge: CssLensBadge,
  },
]

export function MarineLabSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [showVideo, setShowVideo] = useState(false)

  // Carica il video MP4 del drone sub solo quando l'utente scorre vicino alla sezione (risparmia 5MB al caricamento iniziale)
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShowVideo(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="strumenti"
      className="py-14 sm:py-22 bg-[#0c133a] text-white"
      aria-labelledby="marine-lab-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-cordial text-xs font-bold uppercase tracking-[0.22em] text-[#62b4e4]">
            L’Emozione che non ti aspetti
          </span>
          <h2
            id="marine-lab-heading"
            className="mt-2 font-cordial text-3xl sm:text-5xl font-bold uppercase tracking-[0.03em] text-white leading-[1.08]"
          >
            Quello che sulle altre barche{' '}
            <span className="text-[#62b4e4]">non trovi</span>
          </h2>
          <p className="mt-2 text-xs sm:text-base text-blue-100/80">
            Veleggiare a motore spento e ascoltare in cuffia i delfini che comunicano sotto lo scafo.
          </p>
        </div>

        {/* Griglia 2x2 su Mobile e 4 colonne su Desktop */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {items.map((item) => {
            const BadgeIcon = item.badge
            return (
              <div
                key={item.id}
                className="group rounded-2xl sm:rounded-3xl bg-[#1a265d]/60 border border-[#62b4e4]/25 overflow-hidden shadow-lg hover:border-[#62b4e4]/60 transition-all flex flex-col"
              >
                <div className="relative h-36 sm:h-52 w-full overflow-hidden bg-[#0c133a]">
                  {item.video && showVideo ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster={item.image}
                      aria-label={item.title}
                      className="h-full w-full object-cover"
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      quality={65}
                      sizes="(max-width: 768px) 170px, 260px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <span className="absolute top-2.5 left-2.5 rounded-full bg-[#0c133a]/90 border border-[#62b4e4]/40 px-2.5 py-0.5 font-cordial text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#62b4e4]">
                    {item.tag}
                  </span>
                  <div className="absolute bottom-2 right-2 scale-90 sm:scale-100">
                    <BadgeIcon />
                  </div>
                </div>

                <div className="p-3.5 sm:p-5 flex-1">
                  <h3 className="font-cordial text-base sm:text-xl font-bold uppercase tracking-[0.03em] text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[11px] sm:text-sm text-blue-100/85 leading-snug">
                    {item.short}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Banner Cetacei in Navigazione */}
        <div className="mt-6 sm:mt-8 rounded-2xl sm:rounded-3xl bg-[#1a265d] border border-[#62b4e4]/35 text-white p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-4">
            <CssSoundWaveBadge className="shrink-0" />
            <div>
              <span className="font-cordial text-[10px] font-bold uppercase tracking-[0.2em] text-[#62b4e4] block">
                In Navigazione nel Blu
              </span>
              <p className="font-cordial text-base sm:text-xl font-bold uppercase tracking-[0.02em] leading-snug mt-0.5">
                Motore spento, vele gonfie e l’idrofono in acqua: quando passano delfini e cetacei,
                li sentiamo cantare dal vivo.
              </p>
            </div>
          </div>

          <a
            href="#contatti"
            className="shrink-0 rounded-full bg-[#62b4e4] hover:bg-white px-6 py-3 font-cordial text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[#0c133a] transition-colors"
          >
            Vivilo a bordo →
          </a>
        </div>
      </div>
    </section>
  )
}
