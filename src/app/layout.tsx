
// layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  // Solo los pesos que usa el sitio (light, regular, semibold, bold, black)
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-bricolage-grotesque",
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const rethink = localFont({
  src: "../fonts/RethinkSans-Regular.woff2",
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
    url: "https://redisen.ar",
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
      </head>
      <body className="bg-background text-white font-rethink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-black focus:text-white"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
