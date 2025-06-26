
'use client';

import Topbar from "@/components/Topbar";
import Header from "@/components/Header";
import BlogSection from "@/components/BlogSection";
import InitiativesSection from "@/components/InitiativesSection";
import ScrollToTop from "@/components/ScrollToTop";
import { Instagram, BookOpen, Mail, Slack } from "lucide-react";
import ProjectsSection from "@/components/ProjectsSection";
import { useTranslation } from "@/contexts/TranslationContext";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Topbar />
      <main className="mx-4 md:mx-8 lg:mx-[8rem]">
        <Header />

        {/* About Section */}
        <section className="py-16 md:py-24 lg:py-32" aria-labelledby="about-title">
          <div className="max-w-3xl mx-auto">
            <h2 id="about-title" className="text-4xl md:text-5xl font-thunder mb-8">
              {t('about.title')}
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-base text-gray-300 leading-relaxed mb-6">
                {t('about.intro')}
              </p>
              <p className="text-base text-gray-300 leading-relaxed mb-6">
                {t('about.experience')}
              </p>
              <p className="text-base text-gray-300 leading-relaxed mb-6">
                {t('about.origin')}
              </p>
              <p className="text-base text-gray-300 leading-relaxed mb-6">
                {t('about.currentRole')}
              </p>              
              <p className="text-base text-gray-300 leading-relaxed mb-6">
                {t('about.project')} <span className="text-white font-semibold mr-2">{t('about.purpose')}</span>
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-sm text-gray-400">{t('about.stats.years')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-sm text-gray-400">{t('about.stats.cities')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">5</div>
                  <div className="text-sm text-gray-400">{t('about.stats.tools')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">$3M+</div>
                  <div className="text-sm text-gray-400">{t('about.stats.grants')}</div>
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
              {t('contact.title')}
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              {t('contact.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:carlos@redisen.ar"
                className="inline-block bg-white text-black border-2 py-3 px-6 font-bold text-sm tracking-wider hover:bg-white hover:text-black hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label={t('accessibility.sendEmail')}
              >
                {t('contact.getInTouch')}
              </a>
              <a
                href="https://linkedin.com/in/carlosgraffi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-transparent text-white border-2 py-3 px-6 font-bold text-sm tracking-wider hover:bg-white hover:text-black hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label={t('accessibility.viewLinkedIn')}
              >
                {t('contact.linkedin')}
              </a>
            </div>
          </div>
        </section>

        {/* Carbon Info Section */}
        <section
          className="py-24 min-w-screen mx-auto justify-items-center align-middle w-full"
          aria-label={t('accessibility.carbonInfo')}
        >
          <div className="py-12 text-gray-400 max-w-sm text-center text-sm">
            <p className="block pb-4 tracking-widest text-xl">{t('carbon.emissions')}</p>
            <p className="block pb-4">
              {t('carbon.description')}{" "}
              <a
                href="https://www.websitecarbon.com/website/carlosgraffi-com/"
                className="text-blue underline hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('accessibility.viewCarbonReport')}
              >
                WebsiteCarbon
              </a>
              {t('carbon.efficiency')}
            </p>
          </div>
        </section>
      </main>
      <ScrollToTop />
    </div>
  );
}
