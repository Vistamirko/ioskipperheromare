'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { CssSailSunIcon, CssDiveWaveIcon, CssCheckPoint } from './CssIcons'

const tabsData = {
  sopra: {
    title: 'Sole a prua, calette limpide e aperitivi al tramonto.',
    subtitle: 'Stacca la spina: navighiamo a vela verso baie raggiungibili solo dal mare.',
    image: '/images/archivio/navigazione-prua-golfo.webp',
    points: [
      'Bagni in acque turchesi lontano dalla folla (ancorando sempre sulla sabbia)',
      'In navigazione a vela spegniamo il motore e ascoltiamo i cetacei con l’idrofono',
      'Pranzi in pozzetto, relax al sole e calice di vino al tramonto',
    ],
  },
  sotto: {
    title: 'Il canto dei delfini in cuffia e il blu fino a 100 metri.',
    subtitle: 'Senza bombole e senza impegno: vivi il mare come non lo hai mai visto né sentito.',
    image: '/images/archivio/mirko-idrofono-cavo.webp',
    points: [
      'Idrofono a bordo per sentire dal vivo i fischi e i click di delfini e cetacei',
      'Drone subacqueo per esplorare il fondale fino a -100m restando in pozzetto',
      'Snorkeling insieme con la Guida Sub e microscopio da campo sullo smartphone',
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
            La Vita a Bordo
          </span>
          <h2
            id="two-worlds-heading"
            className="mt-2 font-cordial text-3xl sm:text-5xl font-bold uppercase tracking-[0.03em] text-[#0c133a] leading-[1.08]"
          >
            Due modi di vivere{' '}
            <span className="text-[#075985]">la stessa baia</span>
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
              <span>Vela &amp; Relax</span>
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
              <span>Snorkel &amp; Mare</span>
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
                unoptimized
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
                  <span>Scegli la tua formula</span>
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
