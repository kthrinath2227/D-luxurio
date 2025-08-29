import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import ImageSlider from '@/components/ImageSlider';
import DesignSeries from '@/components/DesignSeries';
import Clients from '@/components/Clients';
import LimePlasterDesigns from '@/components/LimePlasterDesigns';
import  LogoReveal from '@/components/LogoReveal';
import AboutSection from '@/components/AboutUs';

function App() {
  return (
    <div className="min-h-screen bg-app-background bg-cover bg-fixed">
      <Helmet>
        <title>D'LUXURIO - Premium Architecture & Interior Design Studio</title>
        <meta name="description" content="D'LUXURIO is a premier architecture and interior design studio in Hyderabad, specializing in luxury residential and commercial spaces with innovative design solutions." />
      </Helmet>
      
      <Header />
      <main className="bg-white/80 backdrop-blur-sm">
        <Hero />
        <ImageSlider />
        {/* <LogoReveal /> */}
        {/* <AboutSection /> */}
        <Services />
        <LimePlasterDesigns />
        {/* <DesignSeries /> */}
        <Projects />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;