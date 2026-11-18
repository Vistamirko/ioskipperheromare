'use client'

import React from 'react'

/**
 * Collezione di icone e micro-indicatori CSS/SVG su misura per IoSkippheroMare
 * Stile editoriale nautico, linee sottili bicolori e micro-animazioni CSS (zero emoji di sistema).
 */

/** Punto luminoso animato in puro CSS (Sole / Segnale di bordo) */
export function CssPulseDot({ color = 'gold' }: { color?: 'gold' | 'blue' | 'teal' }) {
  const palette = {
    gold: { core: 'bg-[#0284C7]', ring: 'border-[#62b4e4]/50 bg-[#62b4e4]/20' },
    blue: { core: 'bg-[#62b4e4]', ring: 'border-[#62b4e4]/50 bg-[#62b4e4]/20' },
    teal: { core: 'bg-[#2DD4BF]', ring: 'border-[#2DD4BF]/50 bg-[#2DD4BF]/20' },
  }[color]

  return (
    <span className="relative inline-flex h-3 w-3 items-center justify-center shrink-0">
      <span
        className={`absolute inline-flex h-full w-full rounded-full border animate-ping ${palette.ring}`}
      />
      <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${palette.core}`} />
    </span>
  )
}

/** Icona CSS Onde Marine animate a doppia linea */
export function CssWaveBadge({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/95 border border-[#62b4e4]/35 shadow-sm ${className}`}
    >
      <svg className="h-4 w-4 text-[#0F3D5E]" viewBox="0 0 24 24" fill="none">
        <path
          d="M2 9.5C4.5 7 7 7 9.5 9.5C12 12 14.5 12 17 9.5C19 7.5 20.5 7.5 22 9"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M2 15.5C4.5 13 7 13 9.5 15.5C12 18 14.5 18 17 15.5C19 13.5 20.5 13.5 22 15"
          stroke="#62b4e4"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    </span>
  )
}

/** Icona CSS Sonar / Drone Subacqueo con cerchi concentrici */
export function CssSonarBadge({ className = '' }: { className?: string }) {
  return (
    <span
      className={`relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/95 border border-[#62b4e4]/35 shadow-sm ${className}`}
    >
      <span className="absolute h-6 w-6 rounded-full border border-[#62b4e4]/45 animate-ping" />
      <span className="relative flex h-4 w-4 items-center justify-center rounded-full border border-[#0F3D5E] bg-[#62b4e4]/20">
        <span className="h-1.5 w-1.5 rounded-full bg-[#0284C7]" />
      </span>
    </span>
  )
}

/** Icona CSS Onde Sonore (Idrofono) con barre armoniche in puro CSS */
export function CssSoundWaveBadge({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-9 w-9 items-center justify-center gap-[2.5px] rounded-full bg-white/95 border border-[#62b4e4]/35 shadow-sm ${className}`}
    >
      <span className="h-2 w-[2px] rounded-full bg-[#62b4e4] animate-pulse" />
      <span
        className="h-4 w-[2px] rounded-full bg-[#0F3D5E] animate-pulse"
        style={{ animationDelay: '150ms' }}
      />
      <span
        className="h-3 w-[2px] rounded-full bg-[#0284C7] animate-pulse"
        style={{ animationDelay: '300ms' }}
      />
      <span
        className="h-4 w-[2px] rounded-full bg-[#0F3D5E] animate-pulse"
        style={{ animationDelay: '450ms' }}
      />
      <span
        className="h-2 w-[2px] rounded-full bg-[#62b4e4] animate-pulse"
        style={{ animationDelay: '600ms' }}
      />
    </span>
  )
}

/** Icona CSS Lente Ottica / Microscopio con anello diaframma */
export function CssLensBadge({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/95 border border-[#62b4e4]/35 shadow-sm ${className}`}
    >
      <span className="relative flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] border-dashed border-[#0F3D5E]">
        <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-tr from-[#62b4e4] to-[#0284C7]" />
      </span>
    </span>
  )
}

/** Icona CSS Vela / Orizzonte Solare */
export function CssSailSunIcon({ active = false }: { active?: boolean }) {
  return (
    <span
      className={`inline-flex h-5 w-5 items-center justify-center rounded-full transition-colors ${
        active ? 'bg-white/20 text-white' : 'bg-[#62b4e4]/20 text-[#0284C7]'
      }`}
    >
      <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 3L15 14H5L10 3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M3 16.5H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </span>
  )
}

/** Icona CSS Maschera / Profondità Marina */
export function CssDiveWaveIcon({ active = false }: { active?: boolean }) {
  return (
    <span
      className={`inline-flex h-5 w-5 items-center justify-center rounded-full transition-colors ${
        active ? 'bg-[#62b4e4]/25 text-[#62b4e4]' : 'bg-[#0F3D5E]/10 text-[#0F3D5E]'
      }`}
    >
      <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="5.5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="10" cy="10" r="2" fill="currentColor" />
      </svg>
    </span>
  )
}

/** Spunta Editoriale Nautica in puro CSS */
export function CssCheckPoint({ variant = 'gold' }: { variant?: 'gold' | 'blue' }) {
  return (
    <span
      className={`mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
        variant === 'blue'
          ? 'border-[#62b4e4]/50 bg-[#62b4e4]/15'
          : 'border-[#0284C7]/40 bg-[#62b4e4]/20'
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          variant === 'blue' ? 'bg-[#62b4e4]' : 'bg-[#0284C7]'
        }`}
      />
    </span>
  )
}
