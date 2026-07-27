import { motion } from 'framer-motion'
import { Search, ClipboardList, Scissors, Rocket } from 'lucide-react'
import Reveal from './Reveal'
import { WORK_PROCESS } from '../data'

const ICONS = { search: Search, clipboard: ClipboardList, scissors: Scissors, rocket: Rocket }

export default function Process() {
  return (
    <section className="relative py-14 md:py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-mint-600 mb-3">
          <span className="w-6 h-px bg-mint-500" />How We Work
        </Reveal>
        <Reveal delay={0.06} className="max-w-xl mb-14">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal">
            From first message to your next upload.
          </h2>
        </Reveal>

        <div className="relative grid md:grid-cols-4 gap-8">
          <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-mint-200" aria-hidden="true" />
          <motion.div
            className="hidden md:block absolute top-7 left-[12.5%] h-px bg-mint-500 origin-left"
            initial={{ width: 0 }}
            whileInView={{ width: '75%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
          />

          {WORK_PROCESS.map((step, i) => {
            const Icon = ICONS[step.icon]
            return (
              <Reveal key={step.title} delay={0.1 + i * 0.12} className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.12, type: 'spring', stiffness: 260 }}
                  className="w-14 h-14 rounded-2xl bg-charcoal text-white font-display font-bold flex items-center justify-center relative z-10 mb-5"
                >
                  <Icon className="w-6 h-6" strokeWidth={1.7} />
                </motion.div>
                <h3 className="font-display font-semibold text-lg text-charcoal mb-2">
                  {i + 1}. {step.title}
                </h3>
                <p className="text-sm text-charcoal-soft leading-relaxed">{step.desc}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
