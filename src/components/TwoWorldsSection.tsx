'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { CssSailSunIcon, CssDiveWaveIcon, CssCheckPoint } from './CssIcons'

const tabsData = {
  sopra: {
    title: 'Conduzione sicura, baie ridossate e vero spirito di vacanza.',
    subtitle: 'Cura dell’imbarcazione, ancoraggi consapevoli e ritmo rilassato per gli ospiti.',
    image: '/images/archivio/navigazione-prua-golfo.webp',
    points: [
      'Massima attenzione alla sicurezza, alla barca e agli ancoraggi sempre su sabbia',
      'Scelta delle calette più limpide e dei migliori ridossi tra Flegree, Pontine ed Eolie',
      'Clima sereno e conviviale in pozzetto, con ascolto dei cetacei durante le veleggiate',
    ],
  },
  sotto: {
    title: 'Il kit che porto nella mia sacca per stupire l’equipaggio.',
    subtitle: 'Senza bombole e senza impegno: un valore aggiunto gratuito per chi naviga con me.',
    image: '/images/archivio/mirko-idrofono-cavo.webp',
    points: [
      'Idrofono professionale per ascoltare dal vivo in cuffia delfini e cetacei',
      'Drone subacqueo fino a -100m per esplorare i fondali insieme dal pozzetto',
      'Snorkeling guidato in superficie e microscopio da campo per grandi e ragazzi',
    ],
  },
}

export function TwoWorldsSection() {
  const [activeTab, setActiveTab] = useState<'sopra' | 'sotto'>('sopra')
  const current = tabsData[activeTab]

  return (
    <section
      id="sopra-sotto"
      className="py-14 sm:py-22 bg-[#F4F9FD] text-[#0c133a]"
      aria-labelledby="two-worlds-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-cordial text-xs font-bold uppercase tracking-[0.22em] text-[#075985]">
            A Bordo con Me
          </span>
          <h2
            id="two-worlds-heading"
            className="mt-2 font-cordial text-3xl sm:text-5xl font-bold uppercase tracking-[0.03em] text-[#0c133a] leading-[1.08]"
          >
            Sicurezza al timone.{' '}
            <span className="text-[#075985]">Meraviglia in rada.</span>
          </h2>
        </div>

        <div className="mt-7 flex justify-center">
          <div className="grid grid-cols-2 gap-1.5 rounded-full bg-white p-1.5 border border-[#0c133a]/10 shadow-md w-full max-w-sm sm:max-w-md">
            <button
              type="button"
              onClick={() => setActiveTab('sopra')}
              className={`flex items-center justify-center gap-2 rounded-full py-3 px-4 font-cordial text-xs sm:text-sm font-bold uppercase tracking-[0.12em] whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'sopra'
                  ? 'bg-[#0c133a] text-white shadow-sm'
                  : 'text-[#0c133a] hover:bg-[#F4F9FD]'
              }`}
            >
              <CssSailSunIcon active={activeTab === 'sopra'} />
              <span>Lo Skipper</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('sotto')}
              className={`flex items-center justify-center gap-2 rounded-full py-3 px-4 font-cordial text-xs sm:text-sm font-bold uppercase tracking-[0.12em] whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'sotto'
                  ? 'bg-[#0c133a] text-white shadow-sm'
                  : 'text-[#0c133a] hover:bg-[#F4F9FD]'
              }`}
            >
              <CssDiveWaveIcon active={activeTab === 'sotto'} />
              <span>La Guida Sub</span>
            </button>
          </div>
        </div>

        <div className="mt-7 sm:mt-9">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center rounded-3xl bg-white p-4 sm:p-8 border border-[#62b4e4]/25 shadow-[0_20px_50px_rgba(12,19,58,0.06)] transition-opacity duration-200">
            <div className="lg:col-span-6 relative aspect-[16/11] sm:aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={current.image}
                alt={current.title}
                fill
                quality={65}
                sizes="(max-width: 768px) 350px, 500px"
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-4 px-1 sm:px-0 pb-1 sm:pb-0">
              <h3 className="font-cordial text-2xl sm:text-3xl font-bold uppercase tracking-[0.02em] text-[#0c133a] leading-snug">
                {current.title}
              </h3>

              <p className="text-xs sm:text-base text-[#0c133a]/80">{current.subtitle}</p>

              <ul className="space-y-2.5 pt-1">
                {current.points.map((pt, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-base font-medium leading-snug text-[#0c133a]"
                  >
                    <CssCheckPoint variant="blue" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <a
                  href="#itinerari"
                  className="group inline-flex items-center gap-2 font-cordial text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#075985] hover:text-[#0c133a] transition-colors"
                >
                  <span>Per Ospiti &amp; Società di Charter</span>
                  <span className="inline-block h-[1.5px] w-4 bg-current transition-all group-hover:w-7" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
