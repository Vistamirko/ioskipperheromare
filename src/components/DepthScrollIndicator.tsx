'use client'

import React, { useEffect, useState } from 'react'

export function DepthScrollIndicator() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const ratio = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0
      setProgress(ratio)
    }

    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  const momentLabel =
    progress < 0.18
      ? '☀️ MATTINA A VELA'
      : progress < 0.42
      ? '🌊 TUFFO IN BAIA'
      : progress < 0.65
      ? '✨ CURIOSITÀ A BORDO'
      : progress < 0.85
      ? '🏝️ ROTTE & ISOLE'
      : '🍷 TRAMONTO IN RADA'

  return (
    <div
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-2 pointer-events-none select-none"
      aria-hidden="true"
    >
      <div className="rounded-full px-3 py-1 text-[10px] font-mono-nautical font-semibold tracking-wider uppercase border bg-white/90 border-[#0F3D5E]/15 text-[#0F3D5E] shadow-sm backdrop-blur-md">
        {momentLabel}
      </div>

      <div className="relative h-36 w-1.5 rounded-full overflow-hidden bg-[#0F3D5E]/10 border border-[#0F3D5E]/15">
        <div
          className="w-full rounded-full transition-all duration-150 ease-out"
          style={{
            height: `${Math.max(8, progress * 100)}%`,
            background: 'linear-gradient(180deg, #D97706 0%, #0F3D5E 100%)',
          }}
        />
      </div>
    </div>
  )
}
