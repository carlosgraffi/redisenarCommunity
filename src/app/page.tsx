// page.tsx
import Topbar from "@/components/Topbar";
import Header from "@/components/Header";
import BlogSection from "@/components/BlogSection";
import InitiativesSection from "@/components/InitiativesSection";
import ScrollToTop from "@/components/ScrollToTop";
import { Instagram, BookOpen, Mail, Slack } from "lucide-react";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Topbar />
      <main className="mx-4 md:mx-8 lg:mx-[8rem]">
        <Header />

        {/* About Section */}
        <section className="py-16 md:py-24 lg:py-32" aria-labelledby="about-title">
          <div className="max-w-3xl mx-auto">
            <h2 id="about-title" className="text-4xl md:text-5xl font-thunder mb-8">
              About Me
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm Carlos Graffi — a designer who builds things with a purpose.
              </p>
              <p className="text-base text-gray-300 leading-relaxed mb-6">
                Over the last 10+ years, I've designed, led, and launched products at the intersection of design, technology, and (more recently) climate action. My background is in graphic and product design, but I've never drawn a line between thinking and making. I sketch, code, test, and iterate. I work with frontend components when needed, but I don't consider myself a frontend developer. I'm a maker — someone who learns what's needed to bring an idea to life.
              </p>
              <p className="text-base text-gray-300 leading-relaxed mb-6">
                Since 2022, I've been leading product design at the Open Earth Foundation, developing open-source digital tools to accelerate climate action. In 2024, I became Head of Impact, ensuring our tools contribute to real-world emissions reductions and climate strategy implementation across 50+ cities in Latin America.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-sm text-gray-400">Years designing</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-sm text-gray-400">Cities served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">5</div>
                  <div className="text-sm text-gray-400">AI tools launched</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">1,000+</div>
                  <div className="text-sm text-gray-400">Students mentored</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProjectsSection />
        <BlogSection />

        {/* Contact Section */}
        <section className="py-16 md:py-24 lg:py-32 border-t border-gray-700" aria-labelledby="contact-title">
          <div className="max-w-2xl mx-auto text-center">
            <h2 id="contact-title" className="text-3xl md:text-4xl font-thunder mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Interested in collaborating on climate tech, AI tools, or design projects? Let's connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:carlos@redisenar.com"
                className="inline-block bg-white text-black border-2 py-3 px-6 font-bold text-sm tracking-wider hover:bg-white hover:text-black hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Send email to Carlos"
              >
                Get in Touch
              </a>
              <a
                href="https://linkedin.com/in/carlosgraffi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-transparent text-white border-2 py-3 px-6 font-bold text-sm tracking-wider hover:bg-white hover:text-black hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="View LinkedIn profile"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Carbon Info Section */}
        <section
          className="py-24 min-w-screen mx-auto justify-items-center align-middle w-full"
          aria-label="Información sobre emisiones de carbono"
        >
          <div className="py-12 text-gray-400 max-w-sm text-center text-sm">
            <p className="block pb-4 tracking-widest text-xl">~0.05g de CO2</p>
            <p className="block pb-4">
              Generated per visit.
              <br></br>
              {""}
              This portfolio is built with environmental consciousness and
              achieved the highest rating (A+) on{" "}
              <a
                href="https://www.websitecarbon.com/"
                className="text-blue underline hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View carbon emissions report"
              >
                WebsiteCarbon
              </a>
              , being more efficient than 95% of websites globally.
            </p>
          </div>
        </section>
      </main>
      <ScrollToTop />
    </div>
  );
}