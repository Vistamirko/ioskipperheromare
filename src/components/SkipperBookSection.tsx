'use client'

import React from 'react'
import Image from 'next/image'
import { siteConfig } from '@/config/siteConfig'
import { CssPulseDot } from './CssIcons'

export function SkipperBookSection() {
  const { skipperAndBook } = siteConfig

  return (
    <section
      id="skipper-libro"
      className="py-14 sm:py-24 bg-[#0c133a] text-white"
      aria-labelledby="skipper-book-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-12 items-center">
          {/* Foto Reale al Timone + Libro in Barca (5 col) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/4.1] w-full overflow-hidden rounded-3xl border border-[#62b4e4]/30 shadow-2xl">
              <Image
                src={skipperAndBook.portraitPrimary}
                alt="Mirko Generoso Vista al timone"
                fill
                sizes="(min-width: 1024px) 460px, 92vw"
                className="object-cover"
              />
            </div>

            {/* Card Libro con sizes="180px" per evitare warning Retina su Lighthouse */}
            <div className="mt-3 sm:mt-0 sm:absolute sm:-bottom-5 sm:-right-5 flex items-center gap-3.5 rounded-2xl bg-[#1a265d] p-3.5 border border-[#62b4e4]/45 shadow-2xl w-full sm:max-w-xs">
              <div className="relative h-16 w-12 overflow-hidden rounded-lg shrink-0 border border-white/20">
                <Image
                  src={skipperAndBook.book.coverImage}
                  alt="Libro Io Respiro Mare"
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <span className="font-cordial text-[10px] font-bold uppercase tracking-wider text-[#62b4e4] block">
                  Il Libro a Bordo
                </span>
                <p className="font-cordial text-base font-bold uppercase tracking-[0.04em] text-white leading-tight truncate mt-0.5">
                  «Io Respiro Mare»
                </p>
                <a
                  href={skipperAndBook.book.amazonPaperbackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1.5 text-xs text-[#62b4e4] hover:underline font-semibold"
                >
                  <span>Scoprilo su Amazon</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bio Cortissima e Diretta (7 col) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 lg:pl-4">
            <span className="inline-block font-cordial text-xs font-bold uppercase tracking-[0.22em] text-[#62b4e4]">
              Chi c’è al timone
            </span>

            <h2
              id="skipper-book-heading"
              className="font-cordial text-3xl sm:text-5xl font-bold uppercase tracking-[0.03em] text-white leading-[1.08]"
            >
              Ciao, sono Mirko.{' '}
              <span className="text-[#62b4e4] block mt-1">
                Skipper, Guida Sub &amp; Autore.
              </span>
            </h2>

            <p className="text-sm sm:text-lg text-blue-50/85 leading-relaxed">
              In barca con me si viene prima di tutto per stare bene, rilassarsi al sole e fare il
              bagno nelle baie più belle tra{' '}
              <strong>Procida, Ischia, le Isole Pontine e le Eolie</strong>. La mia passione per i
              fondali e per il progetto <em>Io Respiro Mare</em> è il regalo in più che trovi a
              bordo.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-[#62b4e4]/30 px-3.5 py-1.5 text-xs font-semibold">
                <CssPulseDot color="blue" />
                Comandante &amp; Skipper
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-[#62b4e4]/30 px-3.5 py-1.5 text-xs font-semibold">
                <CssPulseDot color="teal" />
                Guida Sub (Snorkeling)
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-[#62b4e4]/30 px-3.5 py-1.5 text-xs font-semibold">
                <CssPulseDot color="blue" />
                Autore «Io Respiro Mare»
              </span>
            </div>

            <div className="pt-2">
              <a
                href="#contatti"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-[#62b4e4] hover:bg-white px-8 py-3.5 font-cordial text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[#0c133a] shadow-lg transition-all"
              >
                <span>Organizziamo la tua uscita</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
