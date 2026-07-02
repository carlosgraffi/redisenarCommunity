import Topbar from "@/components/Topbar";
import ScrollToTop from "@/components/ScrollToTop";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ExternalLink,
  Book,
  Globe,
  Settings,
  Users,
  Github,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kevracho - Nuevas Economías | Rediseñar",
  description:
    "Exploración de modelos económicos alternativos: Economía de la Dona, Economía del Bien Común, Economía Circular y más.",
  openGraph: {
    title: "Kevracho - Nuevas Economías | Rediseñar",
    description:
      "Exploración de modelos económicos alternativos: Economía de la Dona, Economía del Bien Común, Economía Circular y más.",
    url: "https://redisen.ar/kevracho",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevracho - Nuevas Economías | Rediseñar",
    description:
      "Exploración de modelos económicos alternativos: Economía de la Dona, Economía del Bien Común, Economía Circular y más.",
  },
};

const economies = [
  {
    id: "doughnut",
    name: "Economía de la Dona (Doughnut Economics)",
    author: "Kate Raworth",
    books: [
      "Economía rosquilla: 7 maneras de pensar la economía del siglo XXI",
    ],
    description:
      "Un modelo que combina los límites planetarios con las necesidades sociales básicas, creando un espacio seguro y justo para la humanidad.",
    links: [
      {
        type: "web",
        label: "Kate Raworth",
        url: "https://www.kateraworth.com",
      },
      {
        type: "web",
        label: "Doughnut Economics",
        url: "http://doughnuteconomics.org",
      },
      {
        type: "tool",
        label: "Herramientas",
        url: "https://doughnuteconomics.org/tools",
      },
      {
        type: "web",
        label: "Historias",
        url: "https://doughnuteconomics.org/stories/107",
      },
    ],
    tools: [
      "Herramientas de análisis de sostenibilidad",
      "Marcos de evaluación urbana",
    ],
  },
  {
    id: "common-good",
    name: "Economía del Bien Común",
    author: "Christian Felber",
    books: [],
    description:
      "Un modelo económico que mide el éxito empresarial por su contribución al bien común en lugar de solo el beneficio financiero.",
    links: [
      {
        type: "web",
        label: "Christian Felber",
        url: "https://christian-felber.at",
      },
      {
        type: "web",
        label: "Economía del Bien Común",
        url: "https://economiadelbiencomun.org",
      },
      {
        type: "web",
        label: "Wikipedia",
        url: "https://es.wikipedia.org/wiki/Economía_del_bien_común",
      },
    ],
    tools: [
      "Balance del Bien Común",
      "Índice del Bien Común",
      "Canvas EBC",
      "Organizaciones pioneras",
      "Municipios",
    ],
  },
  {
    id: "circular",
    name: "Economía Circular",
    author:
      "Ellen MacArthur Foundation, Michael Braungart & Bill McDonough, Janine Benyus, Walter Stahel",
    books: ["Cradle to Cradle"],
    description:
      "Un modelo de producción y consumo que implica compartir, alquilar, reutilizar, reparar, renovar y reciclar materiales y productos existentes.",
    links: [
      {
        type: "web",
        label: "Ellen MacArthur Foundation",
        url: "https://ellenmacarthurfoundation.org",
      },
      {
        type: "web",
        label: "Ejemplos Empresas",
        url: "https://ellenmacarthurfoundation.org/es/recursos/empresas/ejemplos",
      },
      {
        type: "web",
        label: "Ejemplos Ciudades",
        url: "https://ellenmacarthurfoundation.org/es/temas/ciudades/ejemplos",
      },
      {
        type: "web",
        label: "Universidades",
        url: "https://ellenmacarthurfoundation.org/es/recursos/educacion-y-aprendizaje/directorio-de-universidades",
      },
    ],
    tools: [
      "Diagrama de la mariposa",
      "Herramientas de diseño circular",
      "Métricas de circularidad",
    ],
  },
  {
    id: "regenerative",
    name: "Economía Regenerativa",
    author:
      "John Fullerton, Bill Reed, Daniel Christian Wahl, Paul Hawken, Janine Benyus",
    books: ["Regeneration"],
    description:
      "Un enfoque económico que busca restaurar y revitalizar los sistemas naturales y sociales en lugar de solo mantenerlos.",
    links: [
      {
        type: "web",
        label: "Capital Institute",
        url: "https://capitalinstitute.org/regenerative-capitalism",
      },
      {
        type: "web",
        label: "Regenesis Group",
        url: "https://regenesisgroup.com",
      },
      {
        type: "web",
        label: "Regeneration International",
        url: "https://regenerationinternational.org/espanol",
      },
      {
        type: "web",
        label: "Escuela de Regeneración",
        url: "https://escueladeregeneracion.com",
      },
    ],
    tools: ["Métricas regenerativas", "Evaluación de impacto regenerativo"],
  },
  {
    id: "b-corp",
    name: "Sistema B / Empresas B",
    author: "Jay Coen Gilbert, Bart Houlahan, Andrew Kassoy",
    books: [],
    description:
      "Un movimiento global de empresas que cumplen altos estándares de desempeño social y ambiental, transparencia pública y responsabilidad legal.",
    links: [
      {
        type: "web",
        label: "B Corporation",
        url: "https://www.bcorporation.net/en-us",
      },
      { type: "web", label: "Sistema B", url: "https://www.sistemab.org" },
      { type: "web", label: "Academia B", url: "https://academiab.org" },
    ],
    tools: ["B Impact Assessment", "SDG Action Manager"],
  },
  {
    id: "social-solidarity",
    name: "Economía Social y Solidaria",
    author:
      "José Luis Coraggio, Paul Singer, Luis Razeto, Mirta Vuotto, Luiz Inácio Gaiger",
    books: [],
    description:
      "Un enfoque económico basado en la cooperación, la solidaridad y la satisfacción de necesidades humanas por encima del lucro.",
    links: [
      { type: "web", label: "Socioeco", url: "https://www.socioeco.org" },
      {
        type: "web",
        label: "Economía Solidaria",
        url: "https://www.economiasolidaria.org",
      },
    ],
    tools: ["Índices de desarrollo social", "Métricas de cooperativismo"],
  },
  {
    id: "local",
    name: "Economías Locales",
    author: "Helena Norberg-Hodge, Anja Lyngbaek",
    books: [],
    description:
      "Enfoques económicos que priorizan la producción y el consumo local para fortalecer las comunidades y reducir el impacto ambiental.",
    links: [
      {
        type: "web",
        label: "Local Futures",
        url: "https://www.localfutures.org",
      },
      {
        type: "web",
        label: "Action Guide",
        url: "https://actionguide.localfutures.org",
      },
    ],
    tools: [
      "Biblioteca Planet Local",
      "Herramientas de localización económica",
    ],
  },
  {
    id: "collapsology",
    name: "Colapsología / Decrecimiento",
    author: "Pablo Servigne, Raphaël Stevens, Yves Cochet, Jem Bendell",
    books: [],
    description:
      "Estudio interdisciplinario del colapso de la civilización industrial y propuestas de transición hacia sociedades más resilientes.",
    links: [
      {
        type: "web",
        label: "Sobrevivir al Descalabro",
        url: "https://www.sobreviviraldescalabro.org",
      },
      { type: "web", label: "Jem Bendell", url: "https://jembendell.com" },
      {
        type: "web",
        label: "Rebellion Global",
        url: "https://rebellion.global",
      },
      {
        type: "web",
        label: "Wikipedia",
        url: "https://es.wikipedia.org/wiki/Colapsología",
      },
    ],
    tools: ["Métricas de resiliencia", "Herramientas de adaptación profunda"],
  },
  {
    id: "feminist-ecological",
    name: "Economía Feminista Ecológica",
    author:
      "Yayo Herrero, Silvia Federici, Rita Segato, Paul B. Preciado, Dona Haraway, Joanna Macy",
    books: [],
    description:
      "Una perspectiva que integra el análisis feminista con la economía ecológica, poniendo la vida en el centro del análisis económico.",
    links: [],
    tools: ["Análisis de cuidados", "Métricas de sostenibilidad de la vida"],
  },
  {
    id: "ethical-banking",
    name: "Banca Ética",
    author: "Joan Melé, Rudolf Steiner",
    books: [],
    description:
      "Un modelo bancario que prioriza el impacto social y ambiental positivo por encima de la maximización de beneficios.",
    links: [
      {
        type: "web",
        label: "Banca Ética Latinoamérica",
        url: "https://bancaeticalat.com",
      },
      {
        type: "web",
        label: "Fundación Dinero",
        url: "https://fundaciondinero.org",
      },
    ],
    tools: ["Mapa de bancos éticos", "Evaluación de impacto social financiero"],
  },
];

export default function KevrachoPage() {
  return (
    <div className="min-h-screen">
      <Topbar />
      <main className="mx-4 md:mx-8 lg:mx-[8rem] scroll-smooth">
        {/* Header */}
        <section className="py-12 md:py-12" aria-label="Encabezado">
          <div className="flex items-center mb-6">
            <Link
              href="/"
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors mr-6 focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
              aria-label="Volver al inicio"
            >
              <ArrowLeft size={20} className="mr-2" />
              Volver
            </Link>
          </div>

          <div className="lg:grid lg:grid-cols-3 lg:gap-12 lg:items-start">
            {/* Content - takes 2 columns on large screens */}
            <div className="lg:col-span-2 max-w-3xl">
              <h1 className="font-bricolage text-6xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
                <span className="font-black">Kevracho</span>
                <span className="font-light">PRJCT</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                Su nombre viene de "Kit de evocación visual, radical y
                abierto sobre clima, humanidad y otredades", acrónimo inspirado
                en el Quebracho como símbolo cordobés de fuerza, ancestralidad y
                comunidad.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                Kevracho es un proyecto de diseño comunicacional open source
                sobre ambiente y nuevas economías. Fue desarrollado en el marco
                de la Diplomatura en Nuevas Economías, PINE 2025, y es un
                trabajo en curso.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                ¿Cuál es el cambio buscado con este proyecto? Interpelar, a
                través del diseño, los datos y las historias, para lograr el
                impacto perdurable y revelador. Inaugurar un espacio de
                colaboración y uso compartido en comunidad.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                Todas las piezas redirigen a este sitio, para encontrar nuevos
                materiales, referencias y autores/as sobre las nuevas
                economías.{" "}
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Sean bienvenidos a sentarse a la sombra del kevracho.
              </p>
            </div>

            {/* Image - takes 1 column on large screens, hidden on smaller screens */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-8">
                <Image
                  src="/kevracho.webp"
                  alt="Kevracho Project - Ilustración del proyecto sobre nuevas economías"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12" aria-label="Llamada a la acción">
          <div className="flex justify-left text-sm">
            <div className="flex gap-2 items-left justify-center bg-transparent text-white border-2 hover:text-black border-2 py-4 px-12 font-bold font-base tracking-widest hover:rounded-br-3xl hover:bg-white hover:rounded-tl-3xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50">
              <Github size={20} />
              <a
                href="https://github.com/carlosgraffi/kevracho"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver el repositorio del proyecto Kevracho en GitHub"
              >
                IR AL REPOSITORIO{" "}
              </a>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section
          className="py-8 mb-12 border-y border-gray-700"
          aria-label="Navegación rápida"
        >
          <div className="flex flex-wrap gap-3">
            {economies.map((economy) => (
              <a
                key={economy.id}
                href={`#${economy.id}`}
                className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-white/50 whitespace-nowrap"
              >
                {economy.name}
              </a>
            ))}
          </div>
        </section>

        {/* Economies List */}
        <section className="pb-16" aria-label="Modelos Económicos">
          <div className="space-y-12">
            {economies.map((economy) => (
              <article
                key={economy.id}
                id={economy.id}
                className="bg-gray-900/50 rounded-2xl p-6 md:p-8 border border-gray-800"
              >
                <div className="flex items-start mb-6">
                  <div className="flex-1">
                    <h2 className="font-bricolage text-4xl md:text-3xl text-white mb-3 leading-tight">
                      {economy.name}
                    </h2>
                    {economy.description && (
                      <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                        {economy.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Authors and Books */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="flex items-center text-white font-bold mb-2">
                        <Users size={18} className="mr-2" />
                        Autor(es)
                      </h3>
                      <p className="text-gray-300">{economy.author}</p>
                    </div>

                    {economy.books.length > 0 && (
                      <div>
                        <h3 className="flex items-center text-white font-bold mb-2">
                          <Book size={18} className="mr-2" />
                          Libros Clave
                        </h3>
                        <ul className="text-gray-300 space-y-1">
                          {economy.books.map((book, index) => (
                            <li key={index}>• {book}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {economy.tools.length > 0 && (
                      <div>
                        <h3 className="flex items-center text-white font-bold mb-2">
                          <Settings size={18} className="mr-2" />
                          Herramientas y Métricas
                        </h3>
                        <ul className="text-gray-300 space-y-1">
                          {economy.tools.map((tool, index) => (
                            <li key={index}>• {tool}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Links */}
                  {economy.links.length > 0 && (
                    <div>
                      <h3 className="flex items-center text-white font-bold mb-3">
                        <Globe size={18} className="mr-2" />
                        Enlaces Relevantes
                      </h3>
                      <div className="space-y-2">
                        {economy.links.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 mr-2 mb-2"
                          >
                            <ExternalLink size={14} className="mr-2" />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Attribution */}
        <section
          className="py-12 border-t border-gray-700"
          aria-label="Atribución"
        >
          <div className="max-w-2xl text-center mx-auto text-gray-400 text-sm leading-relaxed">
            <p className="mb-4">
              Contenido adaptado de la{" "}
              <strong>Diplomatura en Nuevas Economías</strong> (PINE 2023,
              Santoli & Díaz Acuña) - CC BY 4.0
            </p>
            <a
              href="https://nuevaseconomias.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded"
            >
              <ExternalLink size={16} className="mr-2" />
              PINE – Plataforma de Introducción a las Nuevas Economías
            </a>
          </div>
        </section>
      </main>
      <ScrollToTop />
    </div>
  );
}
