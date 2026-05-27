import Navbar from "../layouts/Navbar";
import Hero from "../layouts/Hero";
import Service from "../layouts/Service";
import Footer from "../layouts/Footer";
import FAQ from "../layouts/FAQ";
import ButtonParallax from "../layouts/ButtonParallax";
import ProcessSection from "../layouts/ProcessSection";

import BackToTop from "../features/BackToTop";

import SEO from "../SEO/SEO";
import HowToOrderSection from "../layouts/HowToOrder";


export default function Home() {
  return (
    <>
      <SEO
        serviceName="Jasa Website & Desain Grafis"
        title="Averant Team - Jasa Website & Desain Grafis Surabaya"
      />
      <Navbar />
      <Hero />
      <ButtonParallax />
      <Service />
      <HowToOrderSection />
      <ProcessSection />
      <FAQ />
      <Footer />
      <BackToTop />
    </>
  );
}