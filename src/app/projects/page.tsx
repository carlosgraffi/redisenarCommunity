
import Topbar from "@/components/Topbar";
import ScrollToTop from "@/components/ScrollToTop";
import ProjectsList from "@/components/ProjectsList";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Carlos Graffi',
  description: 'Explore design and development projects by Carlos Graffi, focusing on climate tech, AI tools, and community building.',
  openGraph: {
    title: 'Projects | Carlos Graffi',
    description: 'Explore design and development projects by Carlos Graffi, focusing on climate tech, AI tools, and community building.',
    url: 'https://carlosgraffi.com/projects',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Carlos Graffi',
    description: 'Explore design and development projects by Carlos Graffi, focusing on climate tech, AI tools, and community building.',
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Topbar />
      <main className="mx-4 md:mx-8 lg:mx-[8rem]">
        {/* Header */}
        <section className="py-12 md:py-16 lg:py-20" aria-label="Header">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/" 
              className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 focus:outline-none focus:ring-2 focus:ring-white/50 rounded p-1"
              aria-label="Back to homepage"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-5xl md:text-6xl font-thunder mb-8">
              Projects
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              A selection of design and development projects spanning climate tech, AI tools, 
              and community building. Each project represents a different approach to using 
              design and technology to create positive impact.
            </p>
          </div>
        </section>

        {/* Projects List */}
        <ProjectsList showAll={true} />

        {/* Contact Section */}
        <section className="py-16 md:py-24 lg:py-32" aria-labelledby="collaborate-heading">
          <div className="max-w-4xl mx-auto py-12 text-center border-t border-b border-gray-700">
            <h2 id="collaborate-heading" className="text-3xl md:text-4xl font-thunder mb-6">
              Interested in Collaborating?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              I'm always open to discussing new projects at the intersection of design, 
              technology, and climate action.
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
      </main>
      <ScrollToTop />
    </div>
  );
}
