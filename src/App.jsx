import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import About from './components/About'

// import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'

import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <div className="font-body text-charcoal">
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Testimonials />
             <Services />
        <About />
   
        {/* <Portfolio /> */}
       
        <Pricing />
       
        <Contact />
     
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
