
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";

const thunder = localFont({
  src: "../../public/fonts/right-grotesk/RightGrotesk-Black.otf",
  variable: "--font-thunder",
  weight: "900",
});

const thunderFine = localFont({
  src: "../../public/fonts/right-grotesk/RightGrotesk-Fine.otf",
  variable: "--font-thunder-fine",
  weight: "300",
});

const thunderLight = localFont({
  src: "../../public/fonts/right-grotesk/RightGrotesk-Light.otf",
  variable: "--font-thunder-light",
  weight: "200",
});

const tostada = localFont({
  src: "../../public/fonts/TOSTADA.ttf",
  variable: "--font-tostada",
  weight: "400",
});

const rethink = localFont({
  src: "../../public/fonts/RethinkSans-Regular.ttf",
  variable: "--font-rethink",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Carlos Graffi - Designer & Climate Tech Builder",
  description: "Designer who builds things with a purpose. Leading product design at Open Earth Foundation, developing tools for climate action.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${thunder.variable} ${thunderFine.variable} ${thunderLight.variable} ${tostada.variable} ${rethink.variable} antialiased`}
      >
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
