'use client'

import React from 'react'

interface BrandLogoProps {
  variant?: 'dark' | 'light'
  showSubtitle?: boolean
  className?: string
}

/**
 * Logo ufficiale IoSkippheroMare:
 * Pittogramma S+M (logo-io-skipphero-mare.svg, evoluzione diretta del monogramma R+M di Io Respiro Mare)
 * + font pieno "new-cordial"
 */
export function BrandLogo({
  variant = 'light',
  showSubtitle = true,
  className = '',
}: BrandLogoProps) {
  const isLight = variant === 'light'

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Nuovo Pittogramma S+M IoSkippheroMare (#62b4e4) */}
      <img
        src="/images/logo-io-skipphero-mare.svg"
        alt="IoSkippheroMare"
        className="h-9 sm:h-11 w-auto shrink-0 block transition-transform duration-300 group-hover:scale-105"
      />

      {/* Wordmark con New Cordial pieno */}
      <div className="flex flex-col justify-center leading-none">
        <div
          className={`font-cordial text-lg sm:text-2xl font-bold tracking-[0.08em] uppercase flex items-baseline gap-1.5 whitespace-nowrap ${
            isLight ? 'text-white' : 'text-[#0c133a]'
          }`}
        >
          <span>IO</span>
          <span className="text-[#62b4e4]">SKIPPHERO</span>
          <span>MARE</span>
        </div>

        {showSubtitle && (
          <span
            className={`mt-1 text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.22em] whitespace-nowrap ${
              isLight ? 'text-[#62b4e4]' : 'text-[#1a265d]/70'
            }`}
          >
            Skipper &amp; Guida Sub
          </span>
        )}
      </div>
    </div>
  )
}
