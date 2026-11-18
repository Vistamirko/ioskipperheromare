'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { siteConfig, FaqItem } from '@/config/siteConfig'

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section
      id="faq"
      className="py-14 sm:py-20 bg-white text-[#0c133a] border-t border-[#0c133a]/10"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <div className="text-center">
          <span className="font-cordial text-xs font-bold uppercase tracking-[0.22em] text-[#62b4e4]">
            Domande Frequenti
          </span>
          <h2
            id="faq-heading"
            className="mt-1.5 font-cordial text-2xl sm:text-4xl font-bold uppercase tracking-[0.03em] text-[#0c133a]"
          >
            Tutto chiaro prima di{' '}
            <span className="font-cordial-inline font-normal text-[#62b4e4]">
              salpare
            </span>
          </h2>
        </div>

        <div className="mt-8 space-y-3">
          {siteConfig.faqs.items.map((item: FaqItem) => {
            const isOpen = openId === item.id
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-[#0c133a]/12 bg-[#F4F9FD] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-4 sm:p-5 text-left cursor-pointer"
                >
                  <span className="font-cordial text-base sm:text-lg font-bold uppercase tracking-[0.02em] text-[#0c133a]">
                    {item.question}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#0c133a] border border-[#62b4e4]/40">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="px-4 pb-4 sm:px-5 sm:pb-5 text-sm sm:text-base text-[#0c133a]/80 leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
