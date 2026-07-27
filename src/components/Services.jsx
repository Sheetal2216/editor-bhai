import { motion } from 'framer-motion'
import { Film, Sparkles, Palette, Image, Camera, TrendingUp, Code2, Target, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { SERVICES } from '../data'

const ICONS = { film: Film, sparkles: Sparkles, palette: Palette, image: Image, camera: Camera, trend: TrendingUp, code: Code2, target: Target }

export default function Services() {
  return (
    <section id="services" className="relative py-14 md:py-20 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-mint-100 blur-3xl translate-x-1/3 -translate-y-1/3" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <Reveal className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-mint-600 mb-3">
          <span className="w-6 h-px bg-mint-500" />Services
        </Reveal>
        <Reveal delay={0.06} className="max-w-xl mb-9">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal">
            Everything a growing channel needs, under one roof.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon]
            return (
              <Reveal key={s.title} delay={(i % 4) * 0.07}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group relative overflow-hidden bg-white rounded-2xl p-6 border border-mint-100 hover:border-mint-300 shadow-sm hover:shadow-xl hover:shadow-mint-200/60 transition-all duration-300 h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-mint-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-mint-100 flex items-center justify-center mb-5 text-mint-600 group-hover:bg-mint-500 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" strokeWidth={1.7} />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-charcoal mb-2">{s.title}</h3>
                    <p className="text-sm text-charcoal-soft leading-relaxed pr-6">{s.desc}</p>
                    <ArrowUpRight className="absolute -top-1 right-0 w-5 h-5 text-mint-500 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </div>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
