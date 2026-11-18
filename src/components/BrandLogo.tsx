import React from 'react'

interface BrandLogoProps {
  variant?: 'dark' | 'light'
  showSubtitle?: boolean
  className?: string
}

export function BrandLogo({
  variant = 'light',
  showSubtitle = true,
  className = '',
}: BrandLogoProps) {
  const isLight = variant === 'light'

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <img
        src="/images/logo-iobioskipper.svg"
        alt="IoBioSkipper"
        aria-hidden="true"
        width={44}
        height={42}
        className="h-9 sm:h-11 w-auto shrink-0 block transition-transform duration-300 group-hover:scale-105"
      />

      <div className="flex flex-col justify-center leading-none">
        <div
          className={`font-cordial text-lg sm:text-2xl font-bold tracking-[0.08em] uppercase flex items-baseline gap-1.5 whitespace-nowrap ${
            isLight ? 'text-white' : 'text-[#0c133a]'
          }`}
        >
          <span>IO</span>
          <span>
            <span className="text-[#62b4e4]">BIO</span>
            <span>SKIPPER</span>
          </span>
        </div>

        {showSubtitle && (
          <span
            className={`mt-1 text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.22em] whitespace-nowrap ${
              isLight ? 'text-[#62b4e4]' : 'text-[#1a265d]'
            }`}
          >
            Skipper &amp; Guida Sub
          </span>
        )}
      </div>
    </div>
  )
}
