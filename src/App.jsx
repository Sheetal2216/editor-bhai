import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
// import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Process from './components/Process'
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
        <Stats />
        <About />
        <Services />
        {/* <Portfolio /> */}
        <Testimonials />
        <Pricing />
        <Process />
        <Contact />
     
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
