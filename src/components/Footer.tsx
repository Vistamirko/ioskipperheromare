import React from 'react'
import { siteConfig } from '@/config/siteConfig'
import { BrandLogo } from './BrandLogo'
import { CssPulseDot } from './CssIcons'

const certifications = [
  {
    code: 'TITOLO PROFESSIONALE',
    name: 'Ufficiale di Navigazione del Diporto di 2ª Classe',
  },
  {
    code: 'IMO · MARITIME SAFETY',
    name: 'Certificazione Internazionale STCW',
  },
  {
    code: 'PROFESSIONAL SCUBA SCHOOLS',
    name: 'Guida Subacquea Certificata PSS',
  },
  {
    code: 'EMERGENZA SANITARIA',
    name: 'Brevetto BLSD (Basic Life Support & Defibrillation)',
  },
  {
    code: 'PRIMO SOCCORSO A BORDO',
    name: 'Certificazione First Aid & Medical Care',
  },
]

export function Footer() {
  return (
    <footer className="relative bg-[#070b24] text-white border-t border-white/10 pt-14 pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        {/* Fascia Titoli & Certificazioni Ufficiali */}
        <div className="mb-12 rounded-3xl bg-[#0c133a] border border-[#62b4e4]/30 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-5 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <CssPulseDot color="teal" />
              <span className="font-cordial text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#62b4e4]">
                Titoli Professionali, Brevetti &amp; Sicurezza a Bordo
              </span>
            </div>
            <span className="text-xs text-blue-100/75">
              Qualifiche ufficiali per Charter, Flotte &amp; Navigazione da Diporto
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="rounded-2xl bg-[#1a265d]/55 border border-[#62b4e4]/20 px-4 py-3.5 flex flex-col justify-between"
              >
                <span className="font-cordial text-[9px] font-bold uppercase tracking-[0.18em] text-[#62b4e4] block">
                  {cert.code}
                </span>
                <p className="mt-1.5 text-xs sm:text-sm font-semibold text-white leading-snug">
                  {cert.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Colonne Footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          {/* Brand (5 col) */}
          <div className="md:col-span-5 space-y-3">
            <BrandLogo variant="light" />
            <p className="text-xs sm:text-sm text-blue-100/75 max-w-sm leading-relaxed">
              Ufficiale di Navigazione del Diporto di 2ª Classe, Guida Subacquea PSS e autore di{' '}
              <em>«Io Respiro Mare»</em>. Conduzione per Charter, Armatori ed Equipaggi con kit di
              ascolto cetacei e drone subacqueo a bordo.
            </p>
            <div className="text-xs text-[#62b4e4]/90">{siteConfig.brand.homeArea}</div>
          </div>

          {/* Link Rapidi (4 col) */}
          <div className="md:col-span-4 space-y-2.5">
            <h3 className="font-cordial text-xs font-bold uppercase tracking-[0.2em] text-[#62b4e4]">
              Navigazione
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-blue-100/80">
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
            <div className="flex flex-col space-y-2 text-xs sm:text-sm text-blue-100/85">
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
