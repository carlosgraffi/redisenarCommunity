// layout.tsx
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import QueryProvider from '@/components/QueryProvider';


const tostada = localFont({
  src: '../../public/fonts/TOSTADA.ttf',
  variable: '--font-tostada',
  display: 'swap',
});

const rethink = localFont({
  src: '../../public/fonts/RethinkSans-Regular.ttf',
  variable: '--font-rethink',
  display: 'swap',
});

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
  metadataBase: new URL('https://redisenar.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="es" 
      className={`${tostada.variable} ${rethink.variable}`} 
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body 
        className="bg-background text-white font-rethink" 
        suppressHydrationWarning
      >
        <QueryProvider>
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-black focus:text-white"
          >
            Saltar al contenido principal
          </a>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}