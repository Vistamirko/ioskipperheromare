'use client'

import React from 'react'
import Image from 'next/image'
import { siteConfig, VoyageFormat } from '@/config/siteConfig'
import { CssCheckPoint, CssPulseDot } from './CssIcons'

export function ItinerariesSection() {
  const handleSelectFormat = (formatSlug: string) => {
    window.dispatchEvent(new CustomEvent('select-format', { detail: formatSlug }))
    const contactEl = document.getElementById('contatti')
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  return (
    <section
      id="itinerari"
      className="py-14 sm:py-22 bg-[#F4F9FD] text-[#0c133a]"
      aria-labelledby="itineraries-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="font-cordial text-xs font-bold uppercase tracking-[0.22em] text-[#075985]">
            Saliamo a Bordo
          </span>
          <h2
            id="itineraries-heading"
            className="mt-2 font-cordial text-3xl sm:text-5xl font-bold uppercase tracking-[0.03em] text-[#0c133a]"
          >
            Scegli la tua{' '}
            <span className="text-[#075985]">formula</span>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {siteConfig.itineraries.formats.map((format: VoyageFormat) => {
            const isFeatured = Boolean(format.featured)

            return (
              <article
                key={format.id}
                className={`group flex flex-col justify-between rounded-3xl overflow-hidden border transition-all duration-300 ${
                  isFeatured
                    ? 'bg-[#0c133a] text-white border-[#62b4e4]/50 shadow-2xl lg:-translate-y-2'
                    : 'bg-white text-[#0c133a] border-[#0c133a]/10 shadow-lg'
                }`}
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={format.image}
                      alt={format.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c133a]/85 via-transparent to-transparent" />

                    <span
                      className={`absolute top-3.5 left-3.5 inline-flex items-center gap-2 rounded-full px-3 py-1 font-cordial text-[10px] font-bold uppercase tracking-wider ${
                        isFeatured
                          ? 'bg-[#62b4e4] text-[#0c133a]'
                          : 'bg-white/95 text-[#0c133a]'
                      }`}
                    >
                      {isFeatured && <CssPulseDot color="teal" />}
                      {format.badge}
                    </span>

                    <div className="absolute bottom-3 left-4 flex items-center gap-2 text-xs text-white font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#62b4e4]" />
                      <span>{format.depthRange}</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3.5">
                    <h3 className="font-cordial text-xl sm:text-2xl font-bold uppercase tracking-[0.02em] leading-snug">
                      {format.title}
                    </h3>

                    <ul className="space-y-2.5 pt-1">
                      {format.highlights.map((item, idx) => (
                        <li
                          key={idx}
                          className={`flex items-start gap-2.5 text-xs sm:text-sm leading-snug ${
                            isFeatured ? 'text-blue-50/90' : 'text-[#0c133a]/85'
                          }`}
                        >
                          <CssCheckPoint variant="blue" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <button
                    type="button"
                    onClick={() => handleSelectFormat(format.slug)}
                    className={`w-full inline-flex items-center justify-center gap-2.5 rounded-full py-3.5 px-5 font-cordial text-xs sm:text-sm font-bold uppercase tracking-[0.16em] transition-all cursor-pointer ${
                      isFeatured
                        ? 'bg-[#62b4e4] hover:bg-white text-[#0c133a] shadow-lg'
                        : 'bg-[#0c133a] hover:bg-[#1a265d] text-white'
                    }`}
                  >
                    <span>Chiedi disponibilità</span>
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
