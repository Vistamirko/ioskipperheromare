import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { siteConfig } from '@/config/siteConfig'

const newCordial = localFont({
  src: '../../public/fonts/new-cordial-700.woff2',
  weight: '700',
  style: 'normal',
  variable: '--font-cordial',
  display: 'swap',
  preload: true,
})

export const viewport: Viewport = {
  themeColor: '#0c133a',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.brand.url),
  title: {
    default: 'IoSkippheroMare — Skipper & Guida Subacquea | Vacanze a Vela Raccontate',
    template: '%s | IoSkippheroMare',
  },
  description:
    'Vacanze in barca a vela tra Procida, Ischia, Isole Pontine ed Eolie con Mirko Generoso Vista, Skipper, Guida Subacquea e autore di Io Respiro Mare. Snorkeling guidato, ascolto cetacei con idrofono e drone subacqueo fino a 100m.',
  keywords: [
    'IoSkippheroMare',
    'Io Respiro Mare',
    'Skipper e Guida Subacquea',
    'Mirko Generoso Vista',
    'vacanza in barca a vela biologia marina',
    'snorkeling guidato barca a vela',
    'ascolto cetacei idrofono barca a vela',
    'crociera vela Procida Ischia Pontine Eolie',
  ],
  authors: [{ name: 'Mirko Generoso Vista', url: 'https://iorespiromare.com' }],
  creator: 'Mirko Generoso Vista',
  publisher: 'IoSkippheroMare',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: siteConfig.brand.url,
    siteName: 'IoSkippheroMare',
    title: 'IoSkippheroMare — La tua vacanza a vela come non l’hai mai vissuta',
    description:
      'Naviga a vela con uno skipper che è anche guida subacquea e autore del libro "Io Respiro Mare". Ascolto cetacei con idrofono, snorkeling guidato e drone subacqueo.',
    images: [
      {
        url: '/images/archivio/barca-drone-fondale.webp',
        width: 1440,
        height: 900,
        alt: 'IoSkippheroMare — Vacanze a vela, snorkeling e ascolto cetacei',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IoSkippheroMare — Skipper & Guida Subacquea',
    description:
      'Vacanze a vela tra Flegree, Pontine ed Eolie con snorkeling guidato, idrofono cetacei e drone subacqueo.',
    images: ['/images/archivio/barca-drone-fondale.webp'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TravelAgency',
      '@id': `${siteConfig.brand.url}/#organization`,
      name: 'IoSkippheroMare',
      url: siteConfig.brand.url,
      logo: `${siteConfig.brand.url}/images/logo-io-skipphero-mare.svg`,
      image: `${siteConfig.brand.url}/images/archivio/barca-drone-fondale.webp`,
      description:
        'Vacanze in barca a vela raccontate, snorkeling guidato, ascolto cetacei con idrofono e drone subacqueo fino a 100 metri con Mirko Generoso Vista.',
      telephone: '+393290160806',
      email: siteConfig.contact.email,
      areaServed: ['Procida', 'Ischia', 'Campi Flegrei', 'Isole Pontine', 'Isole Eolie'],
      founder: {
        '@type': 'Person',
        name: 'Mirko Generoso Vista',
        jobTitle: 'Skipper, Guida Subacquea & Autore',
        url: 'https://iorespiromare.com/autore',
      },
      sameAs: [
        siteConfig.contact.instagramUrl,
        siteConfig.contact.authorInstagramUrl,
        siteConfig.contact.bookWebsiteUrl,
      ],
    },
    {
      '@type': 'Book',
      name: 'Io Respiro Mare',
      author: {
        '@type': 'Person',
        name: 'Mirko Generoso Vista',
      },
      url: 'https://iorespiromare.com/libro-io-respiro-mare',
      sameAs: 'https://www.amazon.it/dp/B0FXS6DJ8G',
    },
    {
      '@type': 'FAQPage',
      mainEntity: siteConfig.faqs.items.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${newCordial.variable} antialiased`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/archivio/barca-drone-mobile.webp"
          media="(max-width: 767px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/archivio/barca-drone-fondale.webp"
          media="(min-width: 768px)"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#0c133a] text-[#0c133a] selection:bg-[#62b4e4]/30 selection:text-[#0c133a]">
        {children}
      </body>
    </html>
  )
}
