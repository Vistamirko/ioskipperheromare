import type { Metadata } from 'next'
import { Cormorant_Garamond, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/config/siteConfig'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.brand.url),
  title: {
    default: 'IoSkippheroMare — Skipper & Guida Subacquea | Mirko Generoso Vista',
    template: '%s | IoSkippheroMare',
  },
  description:
    'Non la solita vacanza in barca. Un viaggio raccontato tra il vento e i fondali con Mirko Generoso Vista, Skipper, Guida Subacquea e autore del libro Io Respiro Mare.',
  keywords: [
    'IoSkippheroMare',
    'Io Respiro Mare',
    'Skipper e Guida Subacquea',
    'Mirko Generoso Vista',
    'vacanza in barca a vela biologia marina',
    'snorkeling guidato barca a vela',
    'crociera vela Campi Flegrei Procida Ischia Pontine',
  ],
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: siteConfig.brand.url,
    siteName: 'IoSkippheroMare',
    title: 'IoSkippheroMare — Un viaggio raccontato tra il vento e i fondali',
    description:
      'Naviga a vela con uno skipper che è anche guida subacquea e autore del libro "Io Respiro Mare". Ogni baia diventa una storia, ogni tuffo un’esplorazione consapevole.',
    images: [
      {
        url: '/images/cover-io-respiro-mare-800.webp',
        width: 800,
        height: 1200,
        alt: 'IoSkippheroMare — Skipper & Guida Subacquea',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="it"
      className={`${cormorant.variable} ${jakarta.variable} ${jetbrains.variable} antialiased`}
    >
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/xys3qnn.css" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#061423] selection:bg-[#2DD4BF]/30 selection:text-[#2DD4BF]">
        {children}
      </body>
    </html>
  )
}
