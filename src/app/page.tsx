import Topbar from '@/components/Topbar';
import Header from '@/components/Header';
import BlogSection from '@/components/BlogSection';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Topbar />
      <div className="mx-4 md:mx-8 lg:mx-[8rem]">
        <Header />

        {/* Main Content */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="max-w-md mx-auto text-center">
            <p className="text-lg md:text-xl leading-relaxed">
              <span className="font-bold">Rediseñar </span>
              es una comunidad de diseño dedicada a explorar la intersección entre diseño, 
              clima, tecnología y sociedad.
            </p>
          </div>
        </section>

        <BlogSection />

        {/* Contact Section */}
        <section className="py-16 md:py-24 lg:py-32">
          <h2 className="text-2xl text-center mb-12 md:mb-16">Contacto</h2>
          <div className="max-w-xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-12">
              <a href="#" className="text-center hover:opacity-75 transition-opacity">Instagram</a>
              <a href="#" className="text-center hover:opacity-75 transition-opacity">Substack</a>
              <a href="mailto:your@email.com" className="text-center hover:opacity-75 transition-opacity">Email</a>
            </div>
          </div>
        </section>
      </div>
      <ScrollToTop />
    </div>
  );
}