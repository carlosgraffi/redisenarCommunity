'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Globe, CalendarCheck } from 'lucide-react';
import Link from 'next/link';
import { getEvents, Event } from '@/lib/events';

interface EventsListProps {
  showAll?: boolean;
  limit?: number;
}

const EventCard = ({ event }: { event: Event }) => {
  // Format date
  const formatDate = (dateString: string | null | "past") => {
    if (!dateString) return "Próximamente";
    if (dateString === "past") return "Evento pasado";

    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };

    return new Date(dateString).toLocaleDateString('es-AR', options);
  };

  const formattedDate = formatDate(event.date);

  const content = (
    <div className="flex flex-col gap-4 group">
      <h3 className="text-5xl font-tostada transition-transform duration-300 group-hover:-translate-x-2 py-2 break-words">
        {event.title}
      </h3>
      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          {/* Tags section */}
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1 text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
              <Calendar size={14} className="text-gray-400" />
              {formattedDate}
            </span>
            {event.type && (
              <span className="inline-flex items-center gap-1 text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                {event.type === 'online' ? (
                  <>
                    <Globe size={14} className="text-gray-400" />
                    Online
                  </>
                ) : event.type === 'past' ? (
                  <>
                    <CalendarCheck size={14} className="text-gray-400" />
                    Pasado
                  </>
                ) : (
                  <>
                    <MapPin size={14} className="text-gray-400" />
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
              <span className="inline-flex items-center gap-1 text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="14" 
                  height="14" 
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
          </div>
        </div>
        <div 
          className="text-base text-gray-300 transition-colors duration-300 group-hover:text-white/80"
        >
          {event.description}
        </div>

        {/* Link to event detail or subscription */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link
            href={`/events/${event.slug}`}
            className="inline-flex items-center justify-center bg-white text-black border-2 py-3 px-6 font-bold text-sm tracking-wider hover:bg-white hover:text-black hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label={`Ver detalles de ${event.title}`}
          >
            Ver detalles
          </Link>

          {!event.date && (
            <a 
              href="https://tally.so/r/wgklJ1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-transparent text-white border-2 py-3 px-6 font-bold text-sm tracking-wider hover:bg-white hover:text-black hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Completar formulario para ser notificado sobre este evento"
            >
              Me interesa participar
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <motion.div 
      className="block transition-all duration-300 hover:scale-[1.01] rounded-lg p-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {content}
    </motion.div>
  );
};

export default function EventsList({ showAll = false, limit = 3 }: EventsListProps) {
  const events = getEvents();
  const displayEvents = showAll ? events : events.slice(0, limit);

  return (
    <section 
      className={showAll ? "" : ""}
      aria-labelledby={showAll ? undefined : "events-list-title"}
    >
      {!showAll && (
        <h2 
          id="events-list-title" 
          className="text-xl mb-24 text-center sm:text-md"
        >
          Eventos + Workshops
        </h2>
      )}

      <div 
        className="space-y-24 max-w-2xl mx-auto"
        role="feed"
        aria-label="Lista de eventos"
      >
        {displayEvents.length > 0 ? (
          displayEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))
        ) : (
          <div className="text-center py-8 text-gray-400">
            No hay eventos programados actualmente. Suscríbete para recibir notificaciones
            sobre futuros eventos.
          </div>
        )}
      </div>

      {!showAll && events.length > limit && (
        <div className="text-center mt-16">
          <Link
            href="/events"
            className="inline-flex items-center justify-center bg-transparent text-white border-2 py-3 px-8 font-bold text-sm tracking-wider hover:bg-white hover:text-black hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Ver todos los eventos"
          >
            Ver todos los eventos
          </Link>
        </div>
      )}
    </section>
  );
}