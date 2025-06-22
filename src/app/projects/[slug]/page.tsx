
import Topbar from "@/components/Topbar";
import ScrollToTop from "@/components/ScrollToTop";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, ExternalLink, Users, Clock } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from 'next';
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";

// Handle async params properly in Next.js 15
async function getSlugFromParams(params: { slug?: string | string[] | Record<string, string> }): Promise<string> {
  if (!params) throw new Error("No params provided");
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;
  if (!slug) throw new Error("No slug in params");
  if (typeof slug === 'string') return slug;
  if (Array.isArray(slug)) return slug[0];
  return Object.values(slug)[0];
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const slug = await getSlugFromParams(params);
    const project = getProjectBySlug(slug);

    if (!project) {
      return {
        title: 'Project not found | Carlos Graffi',
      };
    }

    return {
      title: `${project.title} | Carlos Graffi`,
      description: project.description,
      openGraph: {
        title: `${project.title} | Carlos Graffi`,
        description: project.description,
        url: `https://carlosgraffi.com/projects/${slug}`,
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${project.title} | Carlos Graffi`,
        description: project.description,
      },
    };
  } catch (error) {
    console.error('Error in generateMetadata:', error);
    return {
      title: 'Projects | Carlos Graffi',
    };
  }
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map(slug => ({ slug }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  try {
    const slug = await getSlugFromParams(params);
    const project = getProjectBySlug(slug);

    if (!project) {
      notFound();
    }

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
                  Home
                </Link>
                <span className="mx-2" aria-hidden="true">/</span>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded p-1"
                >
                  Projects
                </Link>
                <span className="mx-2" aria-hidden="true">/</span>
              </li>
              <li className="text-white truncate max-w-[200px]" aria-current="page">
                {project.title}
              </li>
            </ol>
          </nav>

          {/* Back Button */}
          <Link 
            href="/projects" 
            className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 focus:outline-none focus:ring-2 focus:ring-white/50 rounded p-1"
            aria-label="Back to all projects"
          >
            <ArrowLeft size={16} className="mr-2" />
            All Projects
          </Link>

          {/* Project Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-5xl md:text-6xl font-thunder mb-8">
              {project.title}
            </h1>

            {/* Project Details */}
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="inline-flex items-center gap-2 text-sm bg-gray-800 text-gray-300 px-4 py-2 rounded-full">
                <Calendar size={16} className="text-gray-400" />
                {project.year}
              </span>

              <span className="inline-flex items-center gap-2 text-sm bg-gray-800 text-gray-300 px-4 py-2 rounded-full">
                <MapPin size={16} className="text-gray-400" />
                {project.organization}
              </span>

              {project.duration && (
                <span className="inline-flex items-center gap-2 text-sm bg-gray-800 text-gray-300 px-4 py-2 rounded-full">
                  <Clock size={16} className="text-gray-400" />
                  {project.duration}
                </span>
              )}

              {project.impact && (
                <span className="inline-flex items-center gap-2 text-sm bg-gray-800 text-gray-300 px-4 py-2 rounded-full">
                  <Users size={16} className="text-gray-400" />
                  {project.impact}
                </span>
              )}
            </div>

            {/* Role */}
            <div className="mb-6">
              <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                Role: {project.role}
              </span>
            </div>

            {/* Technologies */}
            {project.technologies && (
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Project Content */}
          <div className="max-w-4xl mx-auto">
            {/* Description */}
            <section className="mb-12" aria-labelledby="description-heading">
              <h2 id="description-heading" className="sr-only">Project Description</h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-lg text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {project.longDescription && (
                  <div className="mt-8 text-gray-300 leading-relaxed space-y-6">
                    {project.longDescription.split('\n\n').map((paragraph, i) => {
                      // Check if this paragraph contains bullet points
                      if (paragraph.includes('- ')) {
                        const listItems = paragraph.split('\n- ');
                        const intro = listItems.shift(); // Get the text before the first bullet

                        return (
                          <div key={i}>
                            {intro && <p className="mb-4">{intro}</p>}
                            <ul className="list-none pl-0 space-y-3">
                              {listItems.map((item, j) => (
                                <li key={j} className="flex items-start">
                                  <span className="text-xl mr-3 text-gray-400">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      } else {
                        // Regular paragraph
                        return (
                          <p key={i}>
                            {paragraph}
                          </p>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            </section>

            {/* Outcomes section if available */}
            {project.outcomes && project.outcomes.length > 0 && (
              <section className="mb-12 border-t border-gray-700 pt-12" aria-labelledby="outcomes-heading">
                <h2 id="outcomes-heading" className="text-2xl font-bold mb-6">
                  Key Outcomes
                </h2>
                <ul className="list-none pl-0 space-y-4">
                  {project.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-xl mr-3 text-green-400">✓</span>
                      <span className="text-gray-300">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Project Links */}
            <section className="border-t border-gray-700 pt-12 pb-20" aria-labelledby="links-heading">
              <h2 id="links-heading" className="text-2xl font-bold mb-6">
                Explore Project
              </h2>

              <div className="flex flex-col sm:flex-row gap-4">
                {project.projectUrl ? (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white text-black border-2 py-3 px-8 font-bold text-sm tracking-wider hover:bg-white hover:text-black hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Visit live project"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Visit Project
                  </a>
                ) : (
                  <span className="inline-flex items-center justify-center bg-gray-700 text-gray-400 border-2 border-gray-700 py-3 px-8 font-bold text-sm tracking-wider">
                    Internal Project
                  </span>
                )}
                
                <a
                  href="mailto:carlos@redisenar.com"
                  className="inline-flex items-center justify-center bg-transparent text-white border-2 py-3 px-8 font-bold text-sm tracking-wider hover:bg-white hover:text-black hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Discuss this project"
                >
                  Discuss Project
                </a>
              </div>
            </section>
          </div>
        </main>
        <ScrollToTop />
      </div>
    );
  } catch (error) {
    console.error('Error in ProjectPage:', error);
    notFound();
  }
}
