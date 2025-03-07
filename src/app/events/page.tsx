import Topbar from "@/components/Topbar";
import ScrollToTop from "@/components/ScrollToTop";
import EventsList from "@/components/EventsList";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Eventos y Workshops | Rediseñar',
  description: 'Explora eventos y workshops organizados por la comunidad Rediseñar.',
  openGraph: {
    title: 'Eventos y Workshops | Rediseñar',
    description: 'Explora eventos y workshops organizados por la comunidad Rediseñar.',
    url: 'https://redisenar.com/events',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eventos y Workshops | Rediseñar',
    description: 'Explora eventos y workshops organizados por la comunidad Rediseñar.',
  },
};

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <Topbar />
      <main className="mx-4 md:mx-8 lg:mx-[8rem]">
        {/* Header */}
        <section className="py-12 md:py-16 lg:py-20" aria-label="Cabecera">
          <div className="max-w-2xl mx-auto">
            <Link 
              href="/" 
              className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 focus:outline-none focus:ring-2 focus:ring-white/50 rounded p-1"
              aria-label="Volver a la página principal"
            >
              <ArrowLeft size={16} className="mr-2" />
              Volver al inicio
            </Link>
            <h1 className="text-5xl md:text-6xl font-tostada mb-8">
              Eventos & Workshops
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Explorá los próximos eventos y workshops organizados por la comunidad Rediseñar. 
              Encontrá oportunidades para conectar, aprender y colaborar con otros profesionales del diseño.
            </p>
          </div>
        </section>

        {/* Events List */}
        <EventsList showAll={true} />

        {/* Register Interest Section */}
        <section className="py-16 md:py-24 lg:py-32" aria-labelledby="register-interest-heading">
          <div className="max-w-2xl mx-auto py-12 text-center border-t border-b border-gray-700">
            <h2 id="register-interest-heading" className="text-3xl md:text-3xl font-tostada mb-6">
              Futuros eventos
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Suscribite a nuestra comunidad para enterarte primero sobre nuevos eventos y talleres.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://redisenar.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black border-2 py-3 px-6 font-bold text-sm tracking-wider hover:bg-white hover:text-black hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Suscribirme a la comunidad de Rediseñar"
              >
                Suscribirme a Rediseñar
              </a>
              <a
                href="https://redisenar.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-transparent text-white border-2 py-3 px-6 font-bold text-sm tracking-wider hover:bg-white hover:text-black hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Quiero que me avisen sobre futuros eventos"
              >
                Quiero que me avisen
              </a>
            </div>
          </div>
        </section>
      </main>
      <ScrollToTop />
    </div>
  );
}