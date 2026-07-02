
// layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";
import TypekitLoader from "@/components/TypekitLoader";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-bricolage-grotesque",
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const rethink = localFont({
  src: "../../public/fonts/RethinkSans-Regular.ttf",
  variable: "--font-rethink",
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: "Rediseñar",
  description:
    "Una comunidad de diseño dedicada a explorar la intersección entre diseño, clima, tecnología y sociedad.",
  keywords: ["diseño", "clima", "tecnología", "sociedad", "comunidad"],
  openGraph: {
    title: "Rediseñar",
    description:
      "Una comunidad de diseño dedicada a explorar la intersección entre diseño, clima, tecnología y sociedad.",
    url: "https://redisenar.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rediseñar",
    description:
      "Una comunidad de diseño dedicada a explorar la intersección entre diseño, clima, tecnología y sociedad.",
  },
  metadataBase: new URL("https://redisen.ar/"),
  alternates: {
    canonical: "/",
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
      className={`${bricolageGrotesque.variable} ${rethink.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="dns-prefetch" href="//use.typekit.net" />
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="" />
        <link rel="dns-prefetch" href="//redisenar.substack.com" />
        <link rel="preconnect" href="https://redisenar.substack.com" crossOrigin="" />
        <link rel="preload" href="/fonts/RethinkSans-Regular.ttf" as="font" type="font/ttf" crossOrigin="" />
        <link rel="preload" href="/fonts/right-grotesk/RightGrotesk-Black.otf" as="font" type="font/otf" crossOrigin="" />
        
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7P9E74X6BW"></script>
      </head>
      <body className="bg-background text-white font-rethink">
        <TypekitLoader />
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
