import Topbar from "@/components/Topbar";
import ScrollToTop from "@/components/ScrollToTop";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Globe, Users, Clock } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from 'next';
import { getEventBySlug, getAllEventSlugs } from "@/lib/events";

// Specific function to handle async params properly in Next.js 15
async function getSlugFromParams(params: { slug?: string | string[] | Record<string, string> }): Promise<string> {
  // First ensure params exists
  if (!params) throw new Error("No params provided");

  // Next.js 15 requires awaiting params, so we handle that here
  const resolvedParams = await Promise.resolve(params);

  // Now extract slug - with type checking
  const slug = resolvedParams.slug;
  if (!slug) throw new Error("No slug in params");

  // Handle various forms slug might take
  if (typeof slug === 'string') return slug;
  if (Array.isArray(slug)) return slug[0];
  return Object.values(slug)[0];
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    // Get the slug safely
    const slug = await getSlugFromParams(params);

    const event = getEventBySlug(slug);

    if (!event) {
      return {
        title: 'Evento no encontrado | Rediseñar',
      };
    }

    return {
      title: `${event.title} | Eventos | Rediseñar`,
      description: event.description,
      openGraph: {
        title: `${event.title} | Eventos | Rediseñar`,
        description: event.description,
        url: `https://redisenar.com/events/${slug}`,
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${event.title} | Eventos | Rediseñar`,
        description: event.description,
      },
    };
  } catch (error) {
    console.error('Error in generateMetadata:', error);
    return {
      title: 'Eventos | Rediseñar',
    };
  }
}

export async function generateStaticParams() {
  const slugs = getAllEventSlugs();
  return slugs.map(slug => ({ slug }));
}

export default async function EventPage({ params }: { params: { slug: string } }) {
  try {
    // Get the slug safely
    const slug = await getSlugFromParams(params);

    const event = getEventBySlug(slug);

    if (!event) {
      notFound();
    }

    // Format date
    const formatDate = (dateString: string | null) => {
      if (!dateString) return "Próximamente";

      const options: Intl.DateTimeFormatOptions = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      };

      return new Date(dateString).toLocaleDateString('es-AR', options);
    };

    const formattedDate = formatDate(event.date);

    return (
      <div className="min-h-screen">
        <Topbar />
        <main className="mx-4 md:mx-8 lg:mx-[8rem]">
          {/* Breadcrumb */}
          <nav className="py-6" aria-label="Breadcrumb">
            <ol className="flex text-sm text-gray-400">
              <li>
                <Link 
                  href="/" 
                  className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded p-1"
                >
                  Inicio
                </Link>
                <span className="mx-2" aria-hidden="true">/</span>
              </li>
              <li>
                <Link 
                  href="/events" 
                  className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded p-1"
                >
                  Eventos
                </Link>
                <span className="mx-2" aria-hidden="true">/</span>
              </li>
              <li className="text-white truncate max-w-[200px]" aria-current="page">
                {event.title}
              </li>
            </ol>
          </nav>

          {/* Back Button */}
          <Link 
            href="/events" 
            className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 focus:outline-none focus:ring-2 focus:ring-white/50 rounded p-1"
            aria-label="Volver a la lista de eventos"
          >
            <ArrowLeft size={16} className="mr-2" />
            Todos los eventos
          </Link>

          {/* Event Header */}
          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl md:text-6xl font-tostada mb-8">
              {event.title}
            </h1>

            {/* Tags/Details */}
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="inline-flex items-center gap-2 text-sm bg-gray-800 text-gray-300 px-4 py-2 rounded-full">
                <Calendar size={16} className="text-gray-400" />
                {formattedDate}
              </span>

              {event.type && (
                <span className="inline-flex items-center gap-2 text-sm bg-gray-800 text-gray-300 px-4 py-2 rounded-full">
                  {event.type === 'online' ? (
                    <>
                      <Globe size={16} className="text-gray-400" />
                      Online
                    </>
                  ) : (
                    <>
                      <MapPin size={16} className="text-gray-400" />
                      {event.locationUrl ? (
                        <a 
                          href={event.locationUrl} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white transition-colors duration-200"
                          aria-label={`Ver ubicación de ${event.location} en el mapa`}
                        >
                          {event.location}
                        </a>
                      ) : (
                        event.location
                      )}
                    </>
                  )}
                </span>
              )}

              {event.price && (
                <span className="inline-flex items-center gap-2 text-sm bg-gray-800 text-gray-300 px-4 py-2 rounded-full">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-gray-400"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                    <path d="M12 18V6" />
                  </svg>
                  {event.price}
                </span>
              )}

              {event.duration && (
                <span className="inline-flex items-center gap-2 text-sm bg-gray-800 text-gray-300 px-4 py-2 rounded-full">
                  <Clock size={16} className="text-gray-400" />
                  {event.duration}
                </span>
              )}

              {event.capacity && (
                <span className="inline-flex items-center gap-2 text-sm bg-gray-800 text-gray-300 px-4 py-2 rounded-full">
                  <Users size={16} className="text-gray-400" />
                  {event.capacity} participantes
                </span>
              )}
            </div>
          </div>

          {/* Event Content */}
          <div className="max-w-3xl mx-auto">
            {/* Description */}
            <section className="mb-12" aria-labelledby="description-heading">
              <h2 id="description-heading" className="sr-only">Descripción</h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-lg text-gray-300 leading-relaxed">
                  {event.description}
                </p>

                {event.longDescription && (
                  <div className="mt-6 text-gray-300 leading-relaxed">
                    {event.longDescription.split('\n\n').map((paragraph, i) => {
                      // Check if this paragraph contains bullet points
                      if (paragraph.includes('- ')) {
                        const listItems = paragraph.split('\n- ');
                        const intro = listItems.shift(); // Get the text before the first bullet

                        return (
                          <div key={i} className="mb-4">
                            {intro && <p className="mb-2">{intro}</p>}
                            <ul className="list-none pl-0 space-y-3">
                              {listItems.map((item, j) => (
                                <li key={j} className="flex items-start">
                                  <span className="text-xl mr-3 text-gray-400">✦</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      } else {
                        // Regular paragraph
                        return (
                          <p key={i} className="mb-4">
                            {paragraph}
                          </p>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            </section>

            {/* Speakers section if available */}
            {event.speakers && event.speakers.length > 0 && (
              <section className="mb-12 border-t border-gray-700 pt-12" aria-labelledby="speakers-heading">
                <h2 id="speakers-heading" className="text-2xl font-bold mb-6">
                  {event.speakers.length > 1 ? 'Presentadores' : 'Presentador'}
                </h2>
                <div className="space-y-8">
                  {event.speakers.map((speaker, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-4">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold mb-2">{speaker.name}</h3>
                        {speaker.bio && (
                          <p className="text-gray-300 mb-3">{speaker.bio}</p>
                        )}

                        {/* Speaker Links */}
                        {(speaker.website || speaker.linkedin) && (
                          <div className="flex gap-3 mt-2">
                            {speaker.website && (
                              <a 
                                href={speaker.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-gray-300 hover:text-white flex items-center gap-1 transition-colors duration-200"
                                aria-label={`Visitar sitio web de ${speaker.name}`}
                              >
                                <svg 
                                  xmlns="http://www.w3.org/2000/svg" 
                                  width="16" 
                                  height="16" 
                                  viewBox="0 0 24 24" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  strokeWidth="2" 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round"
                                >
                                  <circle cx="12" cy="12" r="10" />
                                  <line x1="2" y1="12" x2="22" y2="12" />
                                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                </svg>
                                <span>Sitio web</span>
                              </a>
                            )}

                            {speaker.linkedin && (
                              <a 
                                href={speaker.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-gray-300 hover:text-white flex items-center gap-1 transition-colors duration-200"
                                aria-label={`Perfil de LinkedIn de ${speaker.name}`}
                              >
                                <svg 
                                  xmlns="http://www.w3.org/2000/svg" 
                                  width="16" 
                                  height="16" 
                                  viewBox="0 0 24 24" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  strokeWidth="2" 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round"
                                >
                                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                  <rect x="2" y="9" width="4" height="12" />
                                  <circle cx="4" cy="4" r="2" />
                                </svg>
                                <span>LinkedIn</span>
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Registration/Interest */}
            <section className="border-t border-gray-700 pt-12 pb-20" aria-labelledby="register-heading">
              <h2 id="register-heading" className="text-2xl font-bold mb-6">
                {event.date ? 'Registrarse al evento' : 'Registrar interés'}
              </h2>

              <div className="flex flex-col sm:flex-row gap-4">
                {event.registrationUrl ? (
                  <a
                    href={event.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-black border-2 py-3 px-8 font-bold text-sm tracking-wider hover:bg-white hover:text-black hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Registrarme para este evento"
                  >
                    Registrarme
                  </a>
                ) : (
                  <>
                    <a
                      href="https://redisenar.substack.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-black border-2 py-3 px-8 font-bold text-sm tracking-wider hover:bg-white hover:text-black hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
                      aria-label="Suscribirme a la comunidad de Rediseñar"
                    >
                      Suscribirme a Rediseñar
                    </a>
                    <a
                      href="https://tally.so/r/wgklJ1"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="inline-block bg-transparent text-white border-2 py-3 px-8 font-bold text-sm tracking-wider hover:bg-white hover:text-black hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
                      aria-label="Quiero que me avisen sobre este evento"
                    >
                      Me interesa participar
                    </a>
                  </>
                )}
              </div>
            </section>
          </div>
        </main>
        <ScrollToTop />
      </div>
    );
  } catch (error) {
    console.error('Error in EventPage:', error);
    notFound();
  }
}