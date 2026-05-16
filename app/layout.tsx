import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: 'DERMASENSE | Matelas Intelligent Anti-Escarres',
  description: 'DERMASENSE - Technologie IoT au service de la prévention des escarres. Surveillance en temps réel avec capteurs FSR, humidité et ESP32.',
  keywords: ['escarres', 'prévention', 'matelas intelligent', 'IoT', 'santé', 'capteurs', 'ESP32'],
  authors: [{ name: 'DERMASENSE Team' }],
  openGraph: {
    title: 'DERMASENSE | Matelas Intelligent Anti-Escarres',
    description: 'Technologie au service de la prévention des escarres',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-background">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
