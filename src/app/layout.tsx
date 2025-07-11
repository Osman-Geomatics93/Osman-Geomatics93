import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Osman O. A. Ibrahim - Senior Surveying & Geomatics Engineer',
  description: 'Ph.D. Candidate in Geomatics | GIS & Remote Sensing Specialist | AI & Deep Learning for Water Productivity | Hydrology & Smart Irrigation',
  keywords: 'Geomatics, Remote Sensing, GIS, Water Productivity, Sudan, Irrigation, Machine Learning',
  authors: [{ name: 'Osman Osama Ahmed Ibrahim' }],
  openGraph: {
    title: 'Osman O. A. Ibrahim - Senior Surveying & Geomatics Engineer',
    description: 'Ph.D. Candidate specializing in Geomatics, GIS, and Remote Sensing with 8+ years of international experience.',
    url: 'https://your-domain.com',
    siteName: 'Osman Ibrahim Portfolio',
    images: [
      {
        url: 'https://i.imgur.com/1QHqofS.jpg',
        width: 800,
        height: 600,
        alt: 'Osman Ibrahim - Geomatics Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Osman O. A. Ibrahim - Senior Surveying & Geomatics Engineer',
    description: 'Ph.D. Candidate specializing in Geomatics, GIS, and Remote Sensing',
    images: ['https://i.imgur.com/1QHqofS.jpg'],
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
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}