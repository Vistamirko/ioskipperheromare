'use client'

import React, { useState, useEffect } from 'react'
import { siteConfig } from '@/config/siteConfig'
import { CssPulseDot } from './CssIcons'

export function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [period, setPeriod] = useState(siteConfig.contactSection.periods[1])
  const [experience, setExperience] = useState(
    siteConfig.contactSection.experienceOptions[1]
  )
  const [message, setMessage] = useState('')
  const [highlightPulse, setHighlightPulse] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    const onSelect = (e: Event) => {
      const slug = (e as CustomEvent<string>).detail
      if (slug) {
        setExperience(slug)
        setHighlightPulse(true)
        setTimeout(() => setHighlightPulse(false), 2000)
      }
    }
    window.addEventListener('select-format', onSelect)
    return () => window.removeEventListener('select-format', onSelect)
  }, [])

  const buildWhatsappUrl = () => {
    const text = name
      ? `Ciao Mirko! Sono ${name}.\nVorrei info per: ${experience} (${period}).\n${
          email ? `Email: ${email}\n` : ''
        }${phone ? `Tel: ${phone}\n` : ''}${message ? `Note: ${message}` : ''}`
      : siteConfig.contact.whatsappDefaultMessage

    return `https://wa.me/${siteConfig.contact.phoneRaw}?text=${encodeURIComponent(text)}`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          contactInfo: email || phone,
          period,
          experience,
          message,
        }),
      })
    } catch {
      // Fallback silenzioso
    } finally {
      setSubmitting(false)
      setSubmitted(true)
    }
  }

  return (
    <section
      id="contatti"
      className="py-16 sm:py-24 bg-[#0c133a] text-white"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-cordial text-xs font-bold uppercase tracking-[0.22em] text-[#62b4e4]">
                Saliamo a Bordo
              </span>
              <h2
                id="contact-heading"
                className="mt-2 font-cordial text-3xl sm:text-5xl font-bold uppercase tracking-[0.03em] text-white leading-tight"
              >
                Prenota o chiedi{' '}
                <span className="text-[#62b4e4]">informazioni</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-blue-100/85">
                Scrivimi direttamente su WhatsApp per una risposta immediata oppure compila il
                modulo.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={buildWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl bg-[#62b4e4] hover:bg-white text-[#0c133a] p-4 font-cordial font-bold uppercase tracking-[0.12em] shadow-lg transition-all"
              >
                <div className="flex items-center gap-3">
                  <CssPulseDot color="teal" />
                  <div>
                    <div className="text-sm sm:text-base leading-none">Scrivimi su WhatsApp</div>
                    <div className="font-body text-xs font-semibold text-[#0c133a] mt-1">
                      {siteConfig.contact.phoneDisplay}
                    </div>
                  </div>
                </div>
                <span aria-hidden="true">→</span>
              </a>

              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl bg-[#1a265d] hover:bg-[#233275] border border-[#62b4e4]/35 p-4 text-white transition-all"
              >
                <div className="text-sm font-medium">
                  Instagram <strong className="text-[#62b4e4]">{siteConfig.contact.instagramHandle}</strong>
                </div>
                <span aria-hidden="true" className="text-[#62b4e4]">→</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div
              className={`rounded-3xl bg-white text-[#0c133a] p-6 sm:p-8 shadow-2xl border-2 transition-all ${
                highlightPulse ? 'border-[#62b4e4] ring-4 ring-[#62b4e4]/30' : 'border-white'
              }`}
            >
              {submitted ? (
                <div className="py-6 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-1">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-cordial text-2xl sm:text-3xl font-bold uppercase text-[#0c133a]">
                    Richiesta inviata!
                  </h3>
                  <p className="text-sm text-[#0c133a]/80 max-w-sm mx-auto leading-relaxed">
                    {email ? (
                      <>
                        Ti abbiamo inviato una ricevuta di conferma all&apos;indirizzo{' '}
                        <strong className="text-[#0c133a] font-semibold">{email}</strong>.
                      </>
                    ) : (
                      'Abbiamo ricevuto la tua richiesta.'
                    )}{' '}
                    Ti ricontatteremo prestissimo!
                  </p>
                  <div className="pt-2">
                    <a
                      href={buildWhatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#62b4e4] px-6 py-3 font-cordial text-xs font-bold uppercase tracking-[0.16em] text-[#0c133a] hover:bg-[#0c133a] hover:text-white transition-all shadow-md"
                    >
                      <span>Vuoi scrivermi su WhatsApp?</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {highlightPulse && (
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#F4F9FD] border border-[#075985]/40 px-3.5 py-1 text-xs font-bold text-[#0c133a]">
                      <CssPulseDot color="blue" />
                      <span>Formula selezionata!</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-cordial text-xs font-bold uppercase tracking-wider text-[#0c133a] mb-1"
                      >
                        Nome e Cognome *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Il tuo nome"
                        className="w-full rounded-xl border border-[#0c133a]/25 px-3.5 py-3 text-sm focus:border-[#075985] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block font-cordial text-xs font-bold uppercase tracking-wider text-[#0c133a] mb-1"
                      >
                        Email * <span className="text-gray-400 font-normal lowercase">(ricevi qui la ricevuta)</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nome@email.com"
                        className="w-full rounded-xl border border-[#0c133a]/25 px-3.5 py-3 text-sm focus:border-[#075985] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block font-cordial text-xs font-bold uppercase tracking-wider text-[#0c133a] mb-1"
                      >
                        WhatsApp / Telefono <span className="text-gray-400 font-normal lowercase">(facoltativo)</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+39 333 1234567"
                        className="w-full rounded-xl border border-[#0c133a]/25 px-3.5 py-3 text-sm focus:border-[#075985] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="period"
                        className="block font-cordial text-xs font-bold uppercase tracking-wider text-[#0c133a] mb-1"
                      >
                        Periodo indicativo
                      </label>
                      <select
                        id="period"
                        value={period}
                        onChange={(e) => setPeriod(e.target.value)}
                        className="w-full rounded-xl border border-[#0c133a]/25 bg-white px-3.5 py-3 text-sm font-medium focus:outline-none"
                      >
                        {siteConfig.contactSection.periods.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="experience"
                      className="block font-cordial text-xs font-bold uppercase tracking-wider text-[#0c133a] mb-1"
                    >
                      Chi sei / Motivo del contatto
                    </label>
                    <select
                      id="experience"
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="w-full rounded-xl border border-[#0c133a]/25 bg-white px-3.5 py-3 text-sm font-medium focus:outline-none"
                    >
                      {siteConfig.contactSection.experienceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-cordial text-xs font-bold uppercase tracking-wider text-[#0c133a] mb-1"
                    >
                      Messaggio (es. barca prenotata, società di charter o richiesta)
                    </label>
                    <textarea
                      id="message"
                      rows={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Es. Il charter ci ha assegnato te per la settimana di luglio / Siamo un charter..."
                      className="w-full rounded-xl border border-[#0c133a]/25 px-3.5 py-2.5 text-sm focus:border-[#075985] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0c133a] hover:bg-[#1a265d] py-4 font-cordial text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-white shadow-lg transition-all cursor-pointer"
                  >
                    <span>{submitting ? 'Invio...' : 'Invia richiesta'}</span>
                    <span aria-hidden="true">→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
