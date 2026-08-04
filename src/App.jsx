import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import CustomCursor from '@/components/CustomCursor';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import ImageSlider from '@/components/ImageSlider';
import Clients from '@/components/Clients';
import LimePlasterDesigns from '@/components/LimePlasterDesigns';
import AboutUs from '@/components/AboutUs';

function App() {
  // FAQ Schema for rich results (SEO)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who provides the best lime plasters in Kondapur, Hyderabad?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "D'LUXURIO is a premium studio in Kondapur, Hyderabad specializing in high-quality lime plasters, Venetian plasters, and luxury wall textures for homes and commercial spaces.",
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer interior design services in Kondapur?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes, D'LUXURIO offers complete interior design services in Kondapur and across Hyderabad, including concept design, material selection, and execution for residential and commercial projects.",
        },
      },
      {
        '@type': 'Question',
        name: 'Which areas in Hyderabad do you serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We serve Kondapur, Gachibowli, Hitec City, Madhapur, Financial District, Jubilee Hills, Banjara Hills, Miyapur, Tellapur, Lingampally, and other major areas in Hyderabad.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are your lime plasters eco-friendly?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our lime plasters are eco-friendly, breathable, and durable, making them ideal for healthy, long-lasting interior wall finishes.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-app-background bg-cover bg-fixed">
      <Helmet>
        {/* Primary SEO */}
        <title>
          Best Lime Plasters & Interior Design Studio in Kondapur, Hyderabad | D&apos;LUXURIO
        </title>

        <meta
          name="description"
          content="D'LUXURIO is a premium lime plaster and interior design studio in Kondapur, Hyderabad. We specialize in luxury lime plasters, Venetian plasters, wall textures, and bespoke interior design for homes and commercial spaces across Hyderabad."
        />

        <meta
          name="keywords"
          content="best lime plasters in Kondapur, lime plaster Kondapur Hyderabad, lime plaster contractor Kondapur, Venetian plaster Hyderabad, lime plaster showroom Hyderabad, luxury wall textures Hyderabad, lime plaster experts Kondapur, interior designer in Kondapur, best interior designer in Kondapur, interior design studio Kondapur, luxury interiors Hyderabad, wall texture designers Hyderabad, eco-friendly lime plaster Hyderabad, microcement Hyderabad, lime wash Hyderabad, plaster design Kondapur"
        />

        <meta name="robots" content="index, follow" />

        {/* Local SEO / Geo tags */}
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Kondapur, Hyderabad" />
        <meta name="geo.position" content="17.467;78.357" />
        <meta name="ICBM" content="17.467, 78.357" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Best Lime Plasters & Interior Design Studio in Kondapur, Hyderabad | D'LUXURIO"
        />
        <meta
          property="og:description"
          content="Looking for the best lime plasters and interior designer in Kondapur, Hyderabad? D'LUXURIO offers premium lime plasters, Venetian plasters, and luxury interiors for homes and commercial projects."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dzwxkhkvi/image/upload/v1756125226/D-luxurio_logo-removebg-preview_jsrkmz.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dluxurio.in/" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Lime Plasters & Interior Design Studio in Kondapur, Hyderabad | D'LUXURIO"
        />
        <meta
          name="twitter:description"
          content="Premium lime plaster finishes, wall textures, and interior design services in Kondapur, Hyderabad."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dzwxkhkvi/image/upload/v1756125226/D-luxurio_logo-removebg-preview_jsrkmz.png"
        />

        {/* Canonical (reinforce local main URL) */}
        <link rel="canonical" href="https://dluxurio.in/" />

        {/* FAQ Schema for rich results */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* Accessible H1 for SEO + screen readers (doesn't break design) */}
      <section className="sr-only">
        <h1>
          Best Lime Plasters &amp; Interior Design Studio in Kondapur, Hyderabad – D&apos;LUXURIO
        </h1>
        <p>
          DLUXURIO specializes in premium lime plasters, Venetian plasters, wall textures, and
          luxury interior design services for homes and commercial spaces in Kondapur and across
          Hyderabad.
        </p>
      </section>

      <Header />

      <main className="bg-gray-800 backdrop-blur-sm">
        <Hero />
        <ImageSlider />
        <AboutUs />
        <Services />
        <LimePlasterDesigns />
        <Projects />
        <Clients />
        {/* <LogoReveal /> */}
        {/* <DesignSeries /> */}
      </main>

      <CustomCursor />
      <Footer />
      <Toaster />

      <div className="fixed right-1 bottom-12 mb-20 z-50">
      <div className="bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col items-center gap-3 p-2.5 relative">
        
        {/* Subtle ambient gold glow behind the container */}
        <div className="absolute inset-0 bg-[#E5C158]/5 rounded-2xl blur-md pointer-events-none" />

        {/* Catalog Button */}
        <a
          href="./catalog.pdf"
          download="DLuxurio-Catalog.pdf"
          className="group relative bg-white p-3 rounded-xl shadow-lg hover:bg-[#E5C158] transition-all duration-300 flex items-center justify-center cursor-pointer"
          aria-label="Download Catalog"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/000000/open-book.png"
            alt="Download D'LUXURIO lime plaster & interior design catalog"
            className="w-4 h-4 transition-transform duration-300 group-hover:scale-110"
          />
          {/* Tooltip */}
          <span className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap bg-neutral-900 border border-white/10 text-white text-[11px] font-medium tracking-wide px-2.5 py-1 rounded-md shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
            Download Catalog
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919160000002"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-[#25D366] p-3 rounded-xl shadow-lg hover:bg-[#20ba5a] transition-all duration-300 flex items-center justify-center cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png"
            alt="WhatsApp D'LUXURIO Kondapur Hyderabad"
            className="w-4 h-4 transition-transform duration-300 group-hover:scale-110"
          />
          {/* Tooltip */}
          <span className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap bg-neutral-900 border border-white/10 text-white text-[11px] font-medium tracking-wide px-2.5 py-1 rounded-md shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>

        {/* Instagram Button */}
        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-3 rounded-xl shadow-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center cursor-pointer"
          aria-label="Visit Instagram"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
            alt="D'LUXURIO Instagram"
            className="w-4 h-4 transition-transform duration-300 group-hover:scale-110"
          />
          {/* Tooltip */}
          <span className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap bg-neutral-900 border border-white/10 text-white text-[11px] font-medium tracking-wide px-2.5 py-1 rounded-md shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
            Visit Instagram
          </span>
        </a>
      </div>
    </div>

      <style>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: upright;
        }
      `}</style>
    </div>
  );
}

export default App;
