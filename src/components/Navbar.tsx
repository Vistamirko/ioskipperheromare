'use client'

import React, { useState, useEffect } from 'react'
import { siteConfig } from '@/config/siteConfig'
import { BrandLogo } from './BrandLogo'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-2.5 sm:py-3' : 'py-4 sm:py-6'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between rounded-full transition-all duration-300 ${
              scrolled
                ? 'bg-[#0c133a]/95 text-white backdrop-blur-xl border border-[#62b4e4]/25 px-4 py-2.5 sm:px-6 sm:py-3 shadow-[0_16px_40px_rgba(12,19,58,0.45)]'
                : 'bg-transparent text-white px-1 py-1 sm:px-2'
            }`}
          >
            {/* Link senza aria-label discordante dal testo visibile (risolve label-content-name-mismatch) */}
            <a
              href="#"
              className="group flex items-center text-left focus:outline-none min-w-0"
            >
              <BrandLogo variant="light" />
            </a>

            <nav className="hidden lg:flex items-center gap-2" aria-label="Navigazione principale">
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 font-cordial text-sm font-bold uppercase tracking-[0.14em] text-white/90 hover:text-[#62b4e4] hover:bg-white/5 transition-all duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2.5 shrink-0">
              <a
                href="#contatti"
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#62b4e4] hover:bg-white text-[#0c133a] px-6 py-2.5 font-cordial text-xs sm:text-sm font-bold uppercase tracking-[0.16em] shadow-[0_8px_24px_rgba(98,180,228,0.35)] transition-all duration-300 hover:scale-105"
              >
                <span>Sali a bordo</span>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
                aria-expanded={mobileMenuOpen}
                className="lg:hidden relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-[#0c133a]/80 backdrop-blur-md text-white transition-colors"
              >
                <div className="flex flex-col items-center justify-center gap-1.5 w-4">
                  <span
                    className={`block h-[1.5px] w-full bg-white rounded-full transition-transform duration-300 ${
                      mobileMenuOpen ? 'translate-y-[3.5px] rotate-45' : ''
                    }`}
                  />
                  <span
                    className={`block h-[1.5px] w-full bg-[#62b4e4] rounded-full transition-transform duration-300 ${
                      mobileMenuOpen ? '-translate-y-[3.5px] -rotate-45' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer in puro CSS (zero JS Framer Motion) */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-40 rounded-3xl bg-[#0c133a]/98 p-6 text-white border border-[#62b4e4]/30 backdrop-blur-2xl shadow-2xl lg:hidden">
          <nav className="flex flex-col space-y-2" aria-label="Menu mobile">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-2xl px-4 py-3 font-cordial text-xl font-bold uppercase tracking-[0.1em] text-white hover:bg-white/5 hover:text-[#62b4e4] transition-colors"
              >
                <span>{item.label}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#62b4e4]" />
              </a>
            ))}
          </nav>

          <div className="mt-5 pt-4 border-t border-white/10">
            <a
              href="#contatti"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-[#62b4e4] py-3.5 font-cordial text-sm font-bold uppercase tracking-[0.18em] text-[#0c133a] shadow-lg"
            >
              Sali a bordo
            </a>
          </div>
        </div>
      )}
    </>
  )
}
