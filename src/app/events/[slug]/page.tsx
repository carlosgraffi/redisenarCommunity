import Topbar from "@/components/Topbar";
import ScrollToTop from "@/components/ScrollToTop";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Globe, Users, Clock } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getEventBySlug, getAllEventSlugs } from "@/lib/events";

// ✅ Define correct type
type PageParams = { slug: string };

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const event = await getEventBySlug(params.slug);

  if (!event) {
    return { title: "Evento no encontrado | Rediseñar" };
  }

  return {
    title: `${event.title} | Eventos | Rediseñar`,
    description: event.description,
    openGraph: {
      title: `${event.title} | Eventos | Rediseñar`,
      description: event.description,
      url: `https://redisenar.com/events/${event.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${event.title} | Eventos | Rediseñar`,
      description: event.description,
    },
  };
}

export async function generateStaticParams() {
  const slugs = await getAllEventSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function EventPage({ params }: { params: PageParams }) {
  const event = await getEventBySlug(params.slug);

  if (!event) {
    notFound();
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Próximamente";
    return new Date(dateString).toLocaleDateString("es-AR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen">
      <Topbar />
      <main className="mx-4 md:mx-8 lg:mx-[8rem]">
        {/* Breadcrumb */}
        <nav className="py-6">
          <ol className="flex text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-white p-1">Inicio</Link>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link href="/events" className="hover:text-white p-1">Eventos</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="text-white truncate max-w-[200px]">{event.title}</li>
          </ol>
        </nav>

        {/* Back Button */}
        <Link href="/events" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 p-1">
          <ArrowLeft size={16} className="mr-2" />
          Todos los eventos
        </Link>

        {/* Event Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-5xl md:text-6xl font-tostada mb-8">{event.title}</h1>

          {/* Event Details */}
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="inline-flex items-center gap-2 text-sm bg-gray-800 text-gray-300 px-4 py-2 rounded-full">
              <Calendar size={16} className="text-gray-400" />
              {formatDate(event.date)}
            </span>

            {event.type && (
              <span className="inline-flex items-center gap-2 text-sm bg-gray-800 text-gray-300 px-4 py-2 rounded-full">
                {event.type === "online" ? (
                  <>
                    <Globe size={16} className="text-gray-400" />
                    Online
                  </>
                ) : (
                  <>
                    <MapPin size={16} className="text-gray-400" />
                    {event.location}
                  </>
                )}
              </span>
            )}

            {event.capacity && (
              <span className="inline-flex items-center gap-2 text-sm bg-gray-800 text-gray-300 px-4 py-2 rounded-full">
                <Users size={16} className="text-gray-400" />
                {event.capacity} participantes
              </span>
            )}

            {event.duration && (
              <span className="inline-flex items-center gap-2 text-sm bg-gray-800 text-gray-300 px-4 py-2 rounded-full">
                <Clock size={16} className="text-gray-400" />
                {event.duration}
              </span>
            )}
          </div>
        </div>

        {/* Event Description */}
        <div className="max-w-3xl mx-auto">
          <section className="mb-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-gray-300">{event.description}</p>
            </div>
          </section>
        </div>

        {/* Speaker Section */}
        {event.speakers && event.speakers.length > 0 && (
          <section className="mb-12 border-t border-gray-700 pt-12">
            <h2 className="text-2xl font-bold mb-6">{event.speakers.length > 1 ? "Presentadores" : "Presentador"}</h2>
            <div className="space-y-8">
              {event.speakers.map((speaker, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-4">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2">{speaker.name}</h3>
                    {speaker.bio && <p className="text-gray-300 mb-3">{speaker.bio}</p>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Register Section */}
        <section className="border-t border-gray-700 pt-12 pb-20">
          <h2 className="text-2xl font-bold mb-6">{event.date ? "Registrarse al evento" : "Registrar interés"}</h2>

          <div className="flex flex-col sm:flex-row gap-4">
            {event.registrationUrl ? (
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black border-2 py-3 px-8 font-bold text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
              >
                Registrarme
              </a>
            ) : (
              <>
                <a
                  href="https://redisenar.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-black border-2 py-3 px-8 font-bold text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
                >
                  Suscribirme a Rediseñar
                </a>
                <a
                  href="https://tally.so/r/wgklJ1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-transparent text-white border-2 py-3 px-8 font-bold text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
                >
                  Quiero que me avisen
                </a>
              </>
            )}
          </div>
        </section>
      </main>
      <ScrollToTop />
    </div>
  );
}