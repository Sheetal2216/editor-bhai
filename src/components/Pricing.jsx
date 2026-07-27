import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Reveal from './Reveal'
import { PRICING_PLANS, PROFILE } from '../data'

export default function Pricing() {
  return (
    <section className="relative py-14 md:py-20 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-mint-100 blur-3xl translate-x-1/3 -translate-y-1/3" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <Reveal className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-mint-600 mb-3">
          <span className="w-6 h-px bg-mint-500" />Plans
        </Reveal>
        <Reveal delay={0.06} className="max-w-xl mb-9">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal">
            Three ways to work together.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {PRICING_PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className={`relative rounded-3xl p-8 flex flex-col h-full transition-shadow duration-300 ${
                  p.highlight
                    ? 'bg-mint-50 border-2 border-mint-400 shadow-xl shadow-mint-200/60 md:scale-105'
                    : 'bg-white border border-mint-100 hover:shadow-lg hover:shadow-mint-100'
                } text-charcoal`}
              >
                {p.highlight && (
                  <span className="self-start text-xs font-semibold bg-mint-500 text-white px-3 py-1 rounded-full mb-4">
                    Most popular
                  </span>
                )}
                <h3 className="font-display font-bold text-2xl mb-1">{p.name}</h3>
                <p className="text-sm mb-6 text-charcoal-soft">
                  {p.price} — tailored to your channel
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="w-5 h-5 shrink-0 text-mint-600" strokeWidth={2} />
                      <span className="text-charcoal-light">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={PROFILE.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-center font-semibold px-5 py-3 rounded-full transition-colors ${
                    p.highlight
                      ? 'bg-mint-500 hover:bg-mint-600 text-white'
                      : 'bg-charcoal text-white hover:bg-mint-600'
                  }`}
                >
                  Get a proposal
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
