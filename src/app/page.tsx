// page.tsx
import Topbar from "@/components/Topbar";
import Header from "@/components/Header";
import BlogSection from "@/components/BlogSection";
import InitiativesSection from "@/components/InitiativesSection";
import ScrollToTop from "@/components/ScrollToTop";
import { Instagram, BookOpen, Mail } from "lucide-react";
import EventsSection from "@/components/EventsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Topbar />
      <main className="mx-4 md:mx-8 lg:mx-[8rem]">
        <Header />

        {/* Introduction Section */}
        <section className="py-16 md:py-24 lg:py-32" aria-label="Introducción">
          <div className="max-w-xl mx-auto text-left text-gray-300">
            <h1 className="text-sm mx-auto pb-8 text-gray-500 font-regular leading-tight tracking-widest">
              MANIFIESTO
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              <span className="font-bold">Rediseñar </span>
              es una comunidad dedicada a explorar la intersección
              entre diseño, clima, tecnología y sociedad, desde un enfoque humanista, responsable y sostenible. Creemos en:
            </p>
            <ul className="space-y-6 list-none pl-0">
              <li className="text-lg md:text-xl leading-relaxed flex items-start">
                <span className="text-xl mr-3 text-gray-400">✦</span>
                <span>El diseño como una herramienta de transformación social. Rediseñar las formas y lo que nos rodea, como un acto de rebeldía creativa e intelectual.</span>
              </li>
              <li className="text-lg md:text-xl leading-relaxed flex items-start">
                <span className="text-xl mr-3 text-gray-400">✦</span>
                <span>El rol de los diseñadores como agentes de cambio, capaces de intervenir en la realidad de las personas y el mundo.</span>
              </li>
              <li className="text-lg md:text-xl leading-relaxed flex items-start">
                <span className="text-xl mr-3 text-gray-400">✦</span>
                <span>El encuentro en comunidad como medio vital y catalizador de nuestra especie para generar cambio perdurable y memorable.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Vision Section */}
        <section
          className="mx-auto py-16 md:py-24 lg:py-32"
          aria-labelledby="design-vision-heading"
        >
          <div className="max-w-xl mx-auto py-36 text-center items-left border-y-2 border-gray-700">
            <h2
              id="design-vision-heading"
              className="mx-auto font-tostada text-6xl text-left text-gray-500 tracking-tight md:text-md break-words hyphens-auto"
            >
              <span className="text-white">El diseño</span> es una herramienta
              que <span className="text-white">cambia</span> la forma de ver y
              vivir <span className="text-white">el mundo</span>.
            </h2>
            <div className="flex mt-8">
              <a
                href="https://redisenar.substack.com"
                className="inline-block bg-transparent text-white border-2 py-4 px-12 font-bold font-base tracking-widest hover:bg-white hover:text-black hover:rounded-br-3xl hover:rounded-tl-3xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Unirme a la comunidad de Rediseñar"
              >
                Unirme
              </a>
            </div>
          </div>
        </section>

        <BlogSection />
        <InitiativesSection />
        <EventsSection />

        {/* Carbon Info Section */}
        <section
          className="py-24 min-w-screen mx-auto justify-items-center align-middle w-full"
          aria-label="Información sobre emisiones de carbono"
        >
          <div className="py-12 text-gray-400 max-w-sm text-center text-sm">
            <p className="block pb-4 tracking-widest text-xl">~0.05g de CO2</p>
            <p className="block pb-4">
              Son generados en cada visita.
              <br></br>
              {""}
              Esta página web está desarrollada con conciencia ambiental y
              obtuvo el nivel más alto (A+) en{" "}
              <a
                href="https://www.websitecarbon.com/website/redisen-ar/"
                className="text-blue underline hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver informe de emisiones de carbono del sitio"
              >
                WebsiteCarbon
              </a>
              , siendo más eficiente que el 95% de los sitios web a nivel
              global.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section
          className="py-16 md:py-24 lg:py-32"
          aria-labelledby="contact-heading"
        >
          <h2
            id="contact-heading"
            className="text-xl text-center mb-12 md:mb-16"
          >
            Contacto
          </h2>
          <nav className="max-w-xl mx-auto" aria-label="Redes sociales">
            <ul className="flex justify-center space-x-12">
              <li>
                <a
                  href="https://www.instagram.com/redisen.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity inline-block p-2 focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                  aria-label="Seguinos en Instagram"
                >
                  <Instagram size={24} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://redisenar.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity inline-block p-2 focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                  aria-label="Lee nuestro Substack"
                >
                  <BookOpen size={24} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:carlos@redisen.ar?subject=Hola, quiero ser parte de Rediseñar"
                  className="hover:opacity-75 transition-opacity inline-block p-2 focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                  aria-label="Envíanos un email"
                >
                  <Mail size={24} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
      <ScrollToTop />
    </div>
  );
}
