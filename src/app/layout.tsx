// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Osman Ibrahim - Senior Surveying & Geomatics Engineer',
  description: 'Professional portfolio of Osman Osama Ahmed Ibrahim, Senior Surveying & Geomatics Engineer with 8+ years of experience in GIS, Remote Sensing, and Water Resource Management.',
  keywords: 'GIS, Remote Sensing, Surveying, Geomatics, Water Management, FAO, IFAD, UNESCO',
  authors: [{ name: 'Osman Osama Ahmed Ibrahim' }],
  openGraph: {
    title: 'Osman Ibrahim - Senior Surveying & Geomatics Engineer',
    description: 'Professional portfolio showcasing international projects with FAO, IFAD, and UNESCO',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        className={inter.className}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}