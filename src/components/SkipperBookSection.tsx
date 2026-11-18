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
                quality={65}
                sizes="(max-width: 768px) 350px, 420px"
                className="object-cover"
              />
            </div>

            <div className="mt-3 sm:mt-0 sm:absolute sm:-bottom-5 sm:-right-5 flex items-center gap-3.5 rounded-2xl bg-[#1a265d] p-3.5 border border-[#62b4e4]/45 shadow-2xl w-full sm:max-w-xs">
              <div className="relative h-16 w-12 overflow-hidden rounded-lg shrink-0 border border-white/20">
                <Image
                  src="/images/cover-io-respiro-mare-thumb.webp"
                  alt="Libro Io Respiro Mare"
                  width={180}
                  height={270}
                  unoptimized
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <span className="font-cordial text-[10px] font-bold uppercase tracking-wider text-[#62b4e4] block">
                  Il Mio Libro a Bordo
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

          {/* Presentazione Personale per Ospiti e Charter (7 col) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 lg:pl-4">
            <span className="inline-block font-cordial text-xs font-bold uppercase tracking-[0.22em] text-[#62b4e4]">
              Il Biglietto da Visita dello Skipper
            </span>

            <h2
              id="skipper-book-heading"
              className="font-cordial text-3xl sm:text-5xl font-bold uppercase tracking-[0.03em] text-white leading-[1.08]"
            >
              Ciao, sono Mirko.{' '}
              <span className="text-[#62b4e4] block mt-1">
                Il tuo Comandante &amp; Guida Sub.
              </span>
            </h2>

            <p className="text-sm sm:text-lg text-blue-50/90 leading-relaxed">
              Che il tuo charter ti abbia inviato questa pagina per presentarmi prima dell’imbarco,
              o che tu sia una società di charter alla ricerca di una figura capace di valorizzare
              la flotta: a bordo porto <strong>conduzione sicura, empatia con l’equipaggio</strong>{' '}
              e tutta la meraviglia del mio progetto <em>Io Respiro Mare</em> tra{' '}
              <strong>Procida, Ischia, le Isole Pontine e le Eolie</strong>.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-[#62b4e4]/30 px-3.5 py-1.5 text-xs font-semibold">
                <CssPulseDot color="blue" />
                Ufficiale del Diporto 2ª Classe · STCW
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-[#62b4e4]/30 px-3.5 py-1.5 text-xs font-semibold">
                <CssPulseDot color="teal" />
                Guida Subacquea PSS · BLSD &amp; First Aid
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-[#62b4e4]/30 px-3.5 py-1.5 text-xs font-semibold">
                <CssPulseDot color="blue" />
                Autore «Io Respiro Mare»
              </span>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="#strumenti"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-[#62b4e4] hover:bg-white px-7 py-3.5 font-cordial text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[#0c133a] shadow-lg transition-all"
              >
                <span>Guarda il kit che porto a bordo</span>
              </a>
              <a
                href="#itinerari"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 px-6 py-3.5 font-cordial text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-white transition-all"
              >
                <span>Info per Ospiti &amp; Charter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
