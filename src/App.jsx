import React from "react";
import EditorBhaiPreloader from "./components/EditorBhaiPreloader";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import About from "./components/About";

// import Portfolio from "./components/Portfolio";

import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  const [loading, setLoading] = React.useState(true);

  return (
    <>
      {/* =========================================
          EDITOR BHAI PRELOADER
      ========================================= */}
      {loading && (
        <EditorBhaiPreloader
          onComplete={() => setLoading(false)}
        />
      )}

      {/* =========================================
          MAIN WEBSITE
      ========================================= */}
      <div className="font-body text-charcoal">
        <Navbar />

        <main>
          {/* Hero Section */}
          <Hero />

          {/* Clients Section */}
          <Clients />

          {/* Testimonials Section */}
          <Testimonials />

          {/* Services Section */}
          <Services />

          {/* About Section */}
          <About />

          {/* Portfolio Section */}
          {/* <Portfolio /> */}

          {/* Pricing Section */}
          <Pricing />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp */}
        <FloatingWhatsApp />
      </div>
    </>
  );
}