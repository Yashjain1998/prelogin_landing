import type { Metadata } from 'next'
import { Inter, Lato } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Content Whale | Professional Content Writing, SEO & Translation Services',
  description: 'Content Whale offers expert content writing, SEO, and translation services for businesses. Boost your brand with high-quality, AI-powered content solutions tailored to your needs.',
  keywords: 'content writing, SEO, translation, AI content, content marketing, digital marketing, business content, professional writing',
  authors: [{ name: 'Content Whale', url: 'https://contentwhale.com' }],
  creator: 'Content Whale',
  publisher: 'Content Whale',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://contentwhale.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Content Whale | Professional Content Writing, SEO & Translation Services',
    description: 'Content Whale offers expert content writing, SEO, and translation services for businesses. Boost your brand with high-quality, AI-powered content solutions tailored to your needs.',
    url: 'https://contentwhale.com',
    siteName: 'Content Whale',
    images: [
      {
        url: '/images/content-whale-logo.svg',
        width: 1200,
        height: 630,
        alt: 'Content Whale Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Whale | Professional Content Writing, SEO & Translation Services',
    description: 'Content Whale offers expert content writing, SEO, and translation services for businesses. Boost your brand with high-quality, AI-powered content solutions tailored to your needs.',
    images: ['/images/content-whale-logo.svg'],
    site: '@contentwhale',
    creator: '@contentwhale',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lato.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#42175B" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
