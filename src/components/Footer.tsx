import React from 'react'
import { siteConfig } from '@/config/siteConfig'
import { BrandLogo } from './BrandLogo'

export function Footer() {
  return (
    <footer className="relative bg-[#070b24] text-white border-t border-white/10 pt-14 pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          {/* Brand (5 col) */}
          <div className="md:col-span-5 space-y-3">
            <BrandLogo variant="light" />
            <p className="text-xs sm:text-sm text-blue-100/70 max-w-sm leading-relaxed">
              Vacanze a vela raccontate, snorkeling guidato e ascolto dei cetacei a bordo. Un
              progetto di{' '}
              <strong className="text-white font-semibold">{siteConfig.brand.skipperName}</strong>,
              autore di <em>«Io Respiro Mare»</em>.
            </p>
            <div className="text-xs text-[#62b4e4]/80">{siteConfig.brand.homeArea}</div>
          </div>

          {/* Link Rapidi (4 col) */}
          <div className="md:col-span-4 space-y-2.5">
            <h3 className="font-cordial text-xs font-bold uppercase tracking-[0.2em] text-[#62b4e4]">
              Navigazione
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-blue-100/75">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-[#62b4e4] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#faq" className="hover:text-[#62b4e4] transition-colors">
                  Domande Frequenti
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Progetto Culturale (3 col) */}
          <div className="md:col-span-3 space-y-2.5">
            <h3 className="font-cordial text-xs font-bold uppercase tracking-[0.2em] text-[#62b4e4]">
              Contatti &amp; Libro
            </h3>
            <div className="flex flex-col space-y-2 text-xs sm:text-sm text-blue-100/80">
              <a
                href={`https://wa.me/${siteConfig.contact.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#62b4e4] transition-colors"
              >
                WhatsApp · {siteConfig.contact.phoneDisplay}
              </a>
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#62b4e4] transition-colors"
              >
                Instagram · {siteConfig.contact.instagramHandle}
              </a>
              <a
                href={siteConfig.contact.bookWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#62b4e4] transition-colors text-[#62b4e4]"
              >
                iorespiromare.com →
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-100/80">
          <p>
            © {new Date().getFullYear()} <strong className="text-white">IoSkippheroMare</strong>{' '}
            ({siteConfig.brand.domain}) · {siteConfig.brand.skipperName}.
          </p>
          <a
            href="#"
            className="font-cordial text-xs font-bold uppercase tracking-[0.18em] text-[#62b4e4] hover:text-white transition-colors"
          >
            Torna su ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
