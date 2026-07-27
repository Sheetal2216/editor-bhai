import { motion } from 'framer-motion'
import { MessageCircle, Phone, CalendarCheck } from 'lucide-react'
import LinkedinIcon from './icons/LinkedinIcon'
import Reveal from './Reveal'
import { PROFILE } from '../data'

const ACTIONS = [
  { Icon: MessageCircle, label: 'WhatsApp', href: PROFILE.whatsappLink, primary: true },
  { Icon: CalendarCheck, label: 'Book Consultation', href: PROFILE.googleFormUrl, primary: true },
  { Icon: LinkedinIcon, label: 'LinkedIn', href: PROFILE.linkedinLink, primary: false },
  { Icon: Phone, label: 'Call', href: PROFILE.phoneLink, primary: false },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-24 overflow-hidden bg-white">
      {/* Reduced blur opacity significantly to keep the background dominantly white */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-mint-100/30 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-mint-50/40 blur-3xl" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
        <Reveal className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-mint-600 mb-3">
          <span className="w-6 h-px bg-mint-500" />Contact<span className="w-6 h-px bg-mint-500" />
        </Reveal>
        
        <Reveal delay={0.06}>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-charcoal mb-5">
            Let's Build Something Amazing
          </h2>
        </Reveal>
        
        <Reveal delay={0.12}>
          <p className="text-charcoal-light max-w-lg mx-auto mb-10 leading-relaxed">
            Fill out a short form and get a free consultation with a custom
            proposal — no obligations.
          </p>
        </Reveal>

        <Reveal delay={0.18} className="flex flex-wrap justify-center gap-3">
          {ACTIONS.map(({ Icon, label, href, primary }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className={`flex items-center gap-2 font-semibold px-6 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_14px_rgb(0,0,0,0.03)] hover:shadow-[0_6px_20px_rgb(0,0,0,0.06)] ${
                primary
                  ? 'bg-charcoal text-white hover:bg-charcoal/90'
                  : 'bg-white border border-mint-100 text-charcoal hover:border-mint-300'
              }`}
            >
              <Icon className="w-4.5 h-4.5" />
              {label}
            </motion.a>
          ))}
        </Reveal>

        <Reveal delay={0.24}>
          <p className="text-sm text-charcoal-soft mt-10">
            Or email directly at{' '}
            <a href={`mailto:${PROFILE.email}`} className="text-mint-600 hover:text-mint-700 transition-colors font-medium">
              {PROFILE.email}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}