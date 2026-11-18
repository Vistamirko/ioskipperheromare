import React from 'react'
import Image from 'next/image'
import { siteConfig } from '@/config/siteConfig'
import { CssPulseDot } from './CssIcons'

export function HeroSection() {
  return (
    <section
      className="relative min-h-[92svh] sm:min-h-screen w-full overflow-hidden bg-[#0c133a] flex flex-col justify-center pt-28 pb-24 sm:pt-36 sm:pb-32"
      aria-label="Introduzione IoSkippheroMare"
    >
      {/* Immagine LCP prioritaria senza ritardo JS */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/archivio/barca-drone-fondale.webp"
          alt="Barca a vela nel mare cristallino"
          fill
          priority
          fetchPriority="high"
          quality={75}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0c133a]/35 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c133a] via-[#0c133a]/45 to-[#0c133a]/55" />
      </div>

      {/* Contenuto Hero renderizzato immediatamente nel primo frame SSR per LCP < 1.2s */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 my-auto">
        <div className="max-w-3xl space-y-5 sm:space-y-7 text-left">
          <div className="inline-flex items-center gap-2.5 rounded-full bg-white/10 ring-1 ring-white/20 px-4 py-1.5 backdrop-blur-xl">
            <CssPulseDot color="blue" />
            <span className="font-cordial text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#62b4e4] uppercase">
              Vela · Snorkeling · Ascolto Cetacei
            </span>
          </div>

          <h1 className="font-cordial text-4xl sm:text-6xl lg:text-7xl font-bold text-white uppercase tracking-[0.03em] leading-[1.05] drop-shadow-2xl">
            La tua vacanza a vela.{' '}
            <span className="font-cordial font-bold text-[#62b4e4] block mt-1">
              Come non l’hai mai vissuta.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-blue-50/90 font-light leading-relaxed max-w-2xl drop-shadow">
            Calette turchesi, relax a prua e l’emozione unica di ascoltare i cetacei con l’idrofono
            in navigazione e spiare i fondali fino a 100 metri.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="#contatti"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#62b4e4] hover:bg-white px-8 py-4 font-cordial text-sm sm:text-base font-bold uppercase tracking-[0.18em] text-[#0c133a] shadow-[0_0_40px_-10px_rgba(98,180,228,0.6)] transition-all duration-300"
            >
              <span>Chiedi disponibilità</span>
            </a>

            <a
              href={`https://wa.me/${siteConfig.contact.phoneRaw}?text=${encodeURIComponent(
                siteConfig.contact.whatsappDefaultMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/25 backdrop-blur-md px-7 py-4 font-cordial text-sm sm:text-base font-bold uppercase tracking-[0.16em] text-white transition-all"
            >
              <CssPulseDot color="teal" />
              <span>Scrivimi su WhatsApp</span>
            </a>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-blue-100/90 font-medium">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0c133a]/60 border border-[#62b4e4]/30 px-3.5 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#62b4e4]" />
              Sole &amp; Calette
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0c133a]/60 border border-[#62b4e4]/30 px-3.5 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2DD4BF]" />
              Idrofono Cetacei
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0c133a]/60 border border-[#62b4e4]/30 px-3.5 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#62b4e4]" />
              Snorkeling &amp; Drone -100m
            </span>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-1 left-0 right-0 z-20 w-full overflow-hidden leading-none rotate-180 pointer-events-none">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[55px] sm:h-[90px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#F4F9FD"
            className="opacity-25"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="#F4F9FD"
          />
        </svg>
      </div>
    </section>
  )
}
