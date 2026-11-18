import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/siteConfig'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'IoSkippheroMare — Skipper & Guida Subacquea',
    short_name: 'IoSkippheroMare',
    description:
      'Vacanze a vela raccontate, snorkeling guidato, ascolto dei cetacei con idrofono e drone subacqueo con Mirko Generoso Vista.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0c133a',
    theme_color: '#0c133a',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
