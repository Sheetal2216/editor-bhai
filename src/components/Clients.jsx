import { motion } from 'framer-motion'
import { MapPin, Sparkle } from 'lucide-react'
import Reveal from './Reveal'
import WorldMap from './WorldMap'
import { PREMIUM_CLIENTS, OTHER_BRANDS } from '../data'

export default function Clients() {
  return (
    <section id="clients" className="relative py-14 md:py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-10 items-start">
          {/* Left: premium clients + logo belt */}
          <div>
            <Reveal className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-mint-600 mb-3">
              <span className="w-6 h-px bg-mint-500" />Clients
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal mb-3">
                Trusted Worldwide
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-charcoal-light leading-relaxed mb-8 max-w-md">
                From India's top astrologers to spiritual leaders and
                podcasters, the names below already trust Editor Bhai with
                their content.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-4 mb-9">
              {PREMIUM_CLIENTS.map((c, i) => (
                <Reveal key={c.name} delay={0.1 + i * 0.06}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group relative overflow-hidden bg-white rounded-2xl p-5 border border-mint-100 hover:border-mint-400 shadow-sm hover:shadow-lg hover:shadow-mint-200/60 transition-all duration-300"
                  >
                    <div className="absolute -right-6 -top-6 w-20 h-20 rounded-full bg-mint-100 group-hover:bg-mint-200 transition-colors" aria-hidden="true" />
                    <div className="relative">
                      <span className="w-10 h-10 rounded-full bg-mint-500 text-white flex items-center justify-center font-display font-bold text-sm mb-3">
                        {c.name.charAt(0)}
                      </span>
                      <p className="font-display font-semibold text-charcoal text-sm">{c.name}</p>
                      <p className="text-xs text-charcoal-soft mt-0.5">{c.country} · {c.category}</p>
                      <p className="text-xs font-semibold text-mint-600 mt-2">{c.stat}</p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-charcoal-soft mb-4">
              <Sparkle className="w-3.5 h-3.5 text-mint-500" />Also worked with
            </Reveal>
            <Reveal delay={0.24} className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
              <div className="flex gap-3 w-max animate-marquee">
                {[...OTHER_BRANDS, ...OTHER_BRANDS].map((b, i) => (
                  <span
                    key={i}
                    className="shrink-0 bg-mint-50 border border-mint-100 text-charcoal-light text-sm font-medium px-5 py-2.5 rounded-full"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: world map */}
          <Reveal delay={0.1} y={40}>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-mint-600 mb-3">
              <MapPin className="w-3.5 h-3.5" />Global footprint
            </div>
            <WorldMap />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
