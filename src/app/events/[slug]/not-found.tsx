          import Link from "next/link";
          import Topbar from "@/components/Topbar";

          export default function EventNotFound() {
            return (
              <div className="min-h-screen">
                <Topbar />
                <main className="mx-4 md:mx-8 lg:mx-[8rem] flex flex-col items-center justify-center min-h-[80vh]">
                  <h1 className="text-6xl md:text-8xl font-tostada mb-8">404</h1>
                  <h2 className="text-2xl md:text-3xl mb-8 text-center">
                    No pudimos encontrar el evento que estás buscando
                  </h2>
                  <p className="text-gray-400 text-lg mb-12 text-center max-w-lg">
                    El evento puede haber sido movido, eliminado o quizás la URL es incorrecta.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/events"
                      className="inline-block bg-white text-black border-2 py-3 px-8 font-bold text-sm tracking-wider hover:bg-white hover:text-black hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
                      aria-label="Ver todos los eventos disponibles"
                    >
                      Ver todos los eventos
                    </Link>
                    <Link
                      href="/"
                      className="inline-block bg-transparent text-white border-2 py-3 px-8 font-bold text-sm tracking-wider hover:bg-white hover:text-black hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
                      aria-label="Volver a la página principal"
                    >
                      Volver al inicio
                    </Link>
                  </div>
                </main>
              </div>
            );
          }