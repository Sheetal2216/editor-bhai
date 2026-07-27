import { motion } from 'framer-motion'
import Reveal from './Reveal'
import CountUp from './CountUp'
import { STATS } from '../data'

export default function Stats() {
  return (
    <section className="relative py-14 md:py-20 bg-mint-50 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full bg-mint-200/40 blur-3xl" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-white rounded-3xl p-6 md:p-8 text-center border border-mint-100 shadow-sm hover:shadow-xl hover:shadow-mint-200/60 hover:border-mint-300 transition-shadow duration-300"
              >
                <p className="font-display font-extrabold text-3xl md:text-4xl text-charcoal">
                  <CountUp end={s.value} suffix={s.suffix} />
                </p>
                <p className="text-xs md:text-sm text-charcoal-soft mt-2 font-medium">{s.label}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
