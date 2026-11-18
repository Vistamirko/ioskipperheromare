import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { siteConfig } from '@/config/siteConfig'

const newCordial = localFont({
  src: [
    {
      path: '../../public/fonts/new-cordial-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/new-cordial-700.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-cordial',
  display: 'swap',
  preload: true,
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
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
    'crociera vela Campi Flegrei Procida Ischia Pontine Eolie',
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
      className={`${newCordial.variable} ${jakarta.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#0c133a] text-[#0c133a] selection:bg-[#62b4e4]/30 selection:text-[#0c133a]">
        {children}
      </body>
    </html>
  )
}
