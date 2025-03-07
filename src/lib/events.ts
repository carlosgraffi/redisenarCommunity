// src/lib/events.ts

export interface Event {
  id: string;
  slug: string;
  title: string;
  date: string | null; // null for "coming soon"
  type: 'online' | 'in-person'| null;
  location: string | null; // null if online, otherwise location name
  locationUrl?: string; // URL to Google Maps or other address link
  description: string;
  longDescription?: string;
  duration?: string;
  capacity?: number;
  price?: string; // Can be any text like "Gratis" or "$9,99"
  registrationUrl?: string | null;
  imageUrl?: string | null;
  tags?: string[];
  speakers?: {
    name: string;
    bio?: string;
    imageUrl?: string;
    website?: string; // Personal or company website
    linkedin?: string; // LinkedIn profile URL
  }[];
}

// Sample events data
// In a real application, this could come from a CMS, API, or database
  const events: Event[] = [
    {
      id: '1',
      slug: 'disenar-y-construir',
      title: "Diseñar y Construir con AI",
      date: null, // coming soon
      type: "in-person",
      location: "A definir",
      price: "Gratis", // Free for this event
      registrationUrl: null,
      description: "Aprendé las bases para desarrollar un MVP funcional en horas –o hasta minutos. En este conversatorio la idea es que entres sin nada y te vayas sabiendo lo básico para diseñar y construir al mismo tiempo, aunque no sepas mucho de código.",
      longDescription: "Vamos a explorar herramientas low-code, IDEs, generadores de interfaz y cómo desde el diseño también podemos construir y salir a testear un proyecto de manera autónoma.\n\nEn este taller práctico, vamos a ver:\n- Herramientas como Replit, Claude, v0 y su workflow con Figma. \n- Qué hace falta saber –y qué no. \n- Tips y prompts claves. \n- Cómo intervenir el diseño en el código. \n- Para qué nos sirve construir diseño de esta manera.\n- El caso de estudio de AyudaPatagonia.ar (+ te llevás el código).\n\n ***La modalidad (presencial u online) y la fecha van a depender de cuantas personas registren interés y desde dónde puedan participar. El taller se va a anunciar a través del Substack de Rediseñar (si te suscribís, te llega al mail y es más fácil).***\n\nEvento en conjunto con la comunidad IxDF Córdoba.",
      tags: ['diseño', 'desarrollo', 'herramientas', 'MVP'],
      speakers: [
        {
          name: 'Carlos O. Graffi',
          bio: 'Product Design Lead en Open Earth Foundation. Escribo sobre diseño, tecnología y clima en Rediseñar. Local Leader de Interaction Design Foundation (IxDF) Córdoba',
          website: 'https://redisenar.substack.com',
          linkedin: 'https://linkedin.com/in/carlosgraffi'
        }
      ]
    },
  /*{
    id: '2',
    slug: 'clima-y-diseno-responsable',
    title: "Clima y Diseño Responsable",
    date: '2025-05-15',
    type: "online",
    location: null,
    description: "Un workshop interactivo sobre cómo integrar consideraciones climáticas y ambientales en el proceso de diseño.",
    longDescription: "El cambio climático es uno de los mayores desafíos de nuestro tiempo, y como diseñadores, tenemos una responsabilidad única. Este workshop interactivo te mostrará cómo integrar consideraciones climáticas y ambientales en cada etapa del proceso de diseño.\n\nA través de casos prácticos y ejercicios colaborativos, exploraremos metodologías para reducir el impacto ambiental de nuestros diseños digitales y físicos. Desde la optimización web hasta la selección de materiales, aprenderás estrategias concretas para un diseño más sostenible.\n\nEste evento es ideal para diseñadores de todos los niveles que quieran expandir su comprensión del diseño responsable en el contexto de la emergencia climática.",
    duration: '2 horas',
    capacity: 50,
    registrationUrl: 'https://tally.so/r/woPYlN',
    tags: ['clima', 'sostenibilidad', 'diseño responsable'],
    speakers: [
      {
        name: 'Ana Martínez',
        bio: 'Especialista en diseño sostenible y políticas ambientales aplicadas al diseño.',
      }
    ]
  }*/
];

// Get all events
export function getEvents(): Event[] {
  return events;
}

// Get event by slug
export function getEventBySlug(slug: string): Event | undefined {
  return events.find(event => event.slug === slug);
}

// Get all event slugs (useful for static generation)
export function getAllEventSlugs(): string[] {
  return events.map(event => event.slug);
}

// Get featured events (could be based on certain criteria)
export function getFeaturedEvents(): Event[] {
  return events.filter(event => event.date !== null).slice(0, 3);
}

// Get upcoming events (those with dates in the future)
export function getUpcomingEvents(): Event[] {
  const now = new Date();
  return events
    .filter(event => event.date !== null && new Date(event.date) > now)
    .sort((a, b) => {
      // Handle null dates (put them at the end)
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
}