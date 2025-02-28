'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Globe } from 'lucide-react';

interface Event {
  title: string;
  date: string | null; // null for "coming soon"
  type: 'online' | 'in-person';
  location: string | null; // null if online
  description: string;
  url: string | null; // optional URL
}

const events: Event[] = [
  {
    title: "Intro: Diseño, Low-Code & AI",
    date: null, // coming soon
    type: "online",
    location: null,
    description: "Aprendé las bases para desarrollar un MVP o proyecto funcional con herramientas low-code, generadores de interfaz y cómo, desde el diseño, también podemos construir y salir a testear un proyecto en horas. Las personas suscriptas al Substack de la comunidad van a recibir un acceso anticipado a la fecha del evento.",
    url: null
  }
] as const;

const EventCard = ({ event }: { event: Event }) => {
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
            <span className="inline-flex items-center gap-1 text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
              {event.type === 'online' ? (
                <>
                  <Globe size={14} className="text-gray-400" />
                  Online
                </>
              ) : (
                <>
                  <MapPin size={14} className="text-gray-400" />
                  {event.location}
                </>
              )}
            </span>
          </div>
        </div>
        <div 
          className="text-base text-gray-300 transition-colors duration-300 group-hover:text-white/80"
          role="article"
        >
          {event.description}
        </div>

        {/* Add subscription button for coming soon events */}
        {!event.date && (
          <div className="mt-6">
            <a 
              href="https://redisenar.substack.com"
              target='_blank'
              className="inline-block bg-transparent text-white border-2 py-3 px-6 font-bold text-sm tracking-wider hover:bg-white hover:text-black hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Suscribite para enterarte antes sobre este evento"
            >
              Suscribite para enterarte antes
            </a>
          </div>
        )}
      </div>
    </div>
  );

  // If URL is available, make the card clickable
  if (event.url) {
    return (
      <motion.a 
        href={event.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        aria-label={`Ver evento: ${event.title} - ${formattedDate}`}
      >
        {content}
      </motion.a>
    );
  }

  // Otherwise, render as a div with the same styling
  return (
    <motion.div 
      className="block transition-all duration-300 hover:scale-[1.02] rounded-lg p-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {content}
    </motion.div>
  );
};

export default function EventsSection() {
  return (
    <section 
      className="py-16 md:py-24 lg:py-32"
      aria-labelledby="events-title"
    >
      <h2 
        id="events-title" 
        className="text-xl mb-24 text-center sm:text-md"
      >
        Eventos + Workshops
      </h2>
      <div 
        className="space-y-24 max-w-2xl mx-auto"
        role="feed"
        aria-label="Lista de eventos"
      >
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </section>
  );
}