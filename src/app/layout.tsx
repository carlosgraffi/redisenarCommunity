import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import QueryProvider from '@/components/QueryProvider'

const tostada = localFont({
  src: '../../public/fonts/TOSTADA.ttf',
  variable: '--font-tostada',
  display: 'swap',
})

const rethink = localFont({
  src: '../../public/fonts/RethinkSans-Regular.ttf',
  variable: '--font-rethink',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rediseñar',
    description: 'Una comunidad de diseño dedicada a explorar la intersección entre diseño, clima, tecnología y sociedad.',
    keywords: ['diseño', 'clima', 'tecnología', 'sociedad', 'comunidad'],
    openGraph: {
      title: 'Rediseñar',
      description: 'Una comunidad de diseño dedicada a explorar la intersección entre diseño, clima, tecnología y sociedad.',
      url: 'https://redisenar.com',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Rediseñar',
      description: 'Una comunidad de diseño dedicada a explorar la intersección entre diseño, clima, tecnología y sociedad.',
    },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${tostada.variable} ${rethink.variable}`} suppressHydrationWarning>
      <body className="bg-background text-white font-rethink" suppressHydrationWarning>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  )
}