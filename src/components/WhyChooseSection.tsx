'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Compass, Waves, BookOpen, Anchor, Sun } from 'lucide-react'
import { siteConfig, EditorialPillar } from '@/config/siteConfig'

const iconMap = {
  Compass,
  Waves,
  BookOpen,
  Anchor,
}

export function WhyChooseSection() {
  return (
    <section
      id="esperienza"
      className="relative py-20 sm:py-28 overflow-hidden bg-[#F8F9FA] text-[#061423]"
      aria-labelledby="why-choose-heading"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Editoriale */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#0F3D5E]/12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E0F2FE] px-4 py-1.5 font-mono-nautical text-[11px] uppercase tracking-[0.2em] text-[#0F3D5E] font-bold">
              <Sun className="h-3.5 w-3.5 text-[#D97706]" />
              <span>{siteConfig.whyChoose.eyebrow}</span>
            </div>

            <h2
              id="why-choose-heading"
              className="mt-4 font-editorial text-3xl sm:text-5xl font-semibold tracking-tight text-[#061423] leading-[1.08]"
            >
              {siteConfig.whyChoose.title}
            </h2>
          </div>

          <p className="max-w-xl text-base sm:text-lg text-[#061423]/75 leading-relaxed">
            {siteConfig.whyChoose.subtitle}
          </p>
        </div>

        {/* 4 Card Luminose */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.whyChoose.cards.map((card: EditorialPillar, index: number) => {
            const IconComponent = iconMap[card.iconName]
            return (
              <motion.article
                key={card.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative flex flex-col justify-between rounded-[2rem] bg-white border border-[#0F3D5E]/12 hover:border-[#D97706]/45 p-7 shadow-[0_16px_40px_rgba(15,61,94,0.06)] transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-editorial text-4xl font-light italic text-[#D97706]">
                      {card.number}
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="font-mono-nautical text-[10px] uppercase tracking-widest text-[#0F3D5E] bg-[#E0F2FE] px-2.5 py-1 rounded-full font-semibold">
                        {card.depth}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0F3D5E] text-white group-hover:bg-[#D97706] transition-colors">
                        <IconComponent className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  <p className="font-mono-nautical text-[10px] uppercase tracking-[0.2em] text-[#D97706] font-bold mb-1.5">
                    {card.subtitle}
                  </p>

                  <h3 className="font-editorial text-2xl font-bold text-[#061423] leading-snug mb-3">
                    {card.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#061423]/75 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0F3D5E]/10 flex items-center gap-2 text-xs font-semibold text-[#0F3D5E]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D97706]" />
                  <span>{card.highlight}</span>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
