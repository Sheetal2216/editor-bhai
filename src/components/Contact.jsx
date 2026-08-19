import { motion } from 'framer-motion'
import {
  MessageCircle,
  Phone,
  CalendarCheck2Icon,
  Zap,
  UserCheck,
  CheckCircle2,
  Play,
  Globe2,
  MapPin,
} from 'lucide-react'
import LinkedinIcon from './icons/LinkedinIcon'
import Reveal from './Reveal'
import { PROFILE } from '../data'

const ACTIONS = [
  { Icon: MessageCircle, label: 'WhatsApp', href: PROFILE.whatsappLink, primary: true },
  { Icon: CalendarCheck2Icon, label: 'Book Consultation', href: PROFILE.googleFormUrl, primary: true },
  { Icon: LinkedinIcon, label: 'LinkedIn', href: PROFILE.linkedinLink, primary: false },
  { Icon: Phone, label: 'Call', href: PROFILE.phoneLink, primary: false },
]

const TRUST = [
  { Icon: Zap, label: '48h turnaround' },
  { Icon: UserCheck, label: 'Dedicated editor' },
  { Icon: CheckCircle2, label: 'Free, no-obligation call' },
]

const COUNTRIES = [
  { flag: '🇮🇳', name: 'India' },
  { flag: '🇨🇦', name: 'Canada' },
  { flag: '🇫🇷', name: 'France' },
  { flag: '🇴🇲', name: 'Oman' },
  { flag: '🇦🇪', name: 'UAE' },
]

const BADGES = [
  { Icon: CalendarCheck2Icon, label: '4K Exports', className: 'top-[6%] -left-[8%]', delay: 0.5 },
  { Icon: Zap, label: '48h Turnaround', className: 'bottom-[14%] -right-[9%]', delay: 0.68 },
  { Icon: UserCheck, label: 'Dedicated Editor', className: '-bottom-[5%] left-[14%]', delay: 0.86 },
]

const NATIONAL = [
  { city: 'Kolkata', region: 'West Bengal' },
  { city: 'Noida', region: 'Delhi NCR' },
  { city: 'Mumbai', region: 'Maharashtra' },
  { city: 'Bangalore', region: 'Karnataka' },
]

const INTERNATIONAL = [
  { group: 'North America', cities: [{ city: 'Toronto', region: 'Canada' }] },
  { group: 'Europe', cities: [{ city: 'Paris', region: 'France' }] },
  {
    group: 'Middle East',
    cities: [
      { city: 'Muscat', region: 'Oman' },
      { city: 'Abu Dhabi', region: 'UAE' },
    ],
  },
]

// Rough relative positions (%) for the illustrative dot-map
const MAP_PINS = [
  { label: 'Toronto', sub: 'Canada', left: '18%', top: '34%' },
  { label: 'Paris', sub: 'France', left: '46%', top: '30%' },
  { label: 'Muscat', sub: 'Oman', left: '60%', top: '48%' },
  { label: 'Abu Dhabi', sub: 'UAE', left: '58%', top: '52%' },
  { label: 'India · 4 hubs', sub: 'Kolkata, Noida, Mumbai, Bangalore', left: '68%', top: '46%', big: true },
]

const STATS = [
  { value: '5', label: 'Countries served' },
  { value: '8', label: 'Cities' },
  { value: '1', label: 'Shared process' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-mint-100/30 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-mint-50/40 blur-3xl" aria-hidden="true" />

      {/* ===== Contact hero ===== */}
      <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-16 md:pb-20">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-14 items-center">
          {/* Copy column */}
          <div>
            <Reveal className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-mint-600 mb-4">
              <span className="w-6 h-px bg-mint-500" />Contact
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="font-display font-bold text-3xl md:text-5xl leading-[1.08] tracking-tight text-charcoal mb-4">
                Let's Build Something Amazing
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="text-charcoal-light max-w-md leading-relaxed mb-7">
                Fill out a short form and get a free consultation with a custom
                proposal — no obligations.
              </p>
            </Reveal>

            {/* Trust row */}
            <Reveal delay={0.16} className="flex flex-wrap gap-5 mb-8">
              {TRUST.map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-[10px] bg-mint-50 flex items-center justify-center flex-none">
                    <Icon className="w-4 h-4 text-mint-700" strokeWidth={2} />
                  </span>
                  <span className="text-[13.5px] font-semibold text-charcoal">{label}</span>
                </div>
              ))}
            </Reveal>

            {/* CTA buttons */}
            <Reveal delay={0.22} className="flex flex-wrap items-center gap-3 mb-6">
              {ACTIONS.map(({ Icon, label, href, primary }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className={`flex items-center gap-2 font-display font-semibold text-[14.5px] px-6 py-3.5 rounded-full transition-colors duration-300 ${
                    primary
                      ? 'bg-charcoal text-white shadow-[0_10px_24px_rgba(21,24,28,0.18)] hover:bg-charcoal/90'
                      : 'bg-white border border-mint-100 text-charcoal hover:border-mint-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </motion.a>
              ))}
            </Reveal>

           <Reveal delay={0.28}>
  <p className="text-sm text-charcoal-soft mb-8">
    Or email directly at{' '}
    <a
      href={`mailto:${PROFILE.email}`}
      className="text-mint-600 hover:text-mint-700 transition-colors font-medium"
    >
      {PROFILE.email}
    </a>
  </p>
</Reveal>

            {/* Country marquee */}
            <Reveal delay={0.34} className="max-w-[460px] w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-charcoal-soft mb-2.5">
                Trusted by clients in
              </div>
              <div className="flex gap-2.5 w-max animate-[marquee_16s_linear_infinite] hover:[animation-play-state:paused]">
                {[...COUNTRIES, ...COUNTRIES].map(({ flag, name }, i) => (
                  <span
                    key={`${name}-${i}`}
                    className="flex items-center gap-1.5 flex-none bg-mint-50 border border-mint-100 rounded-full px-3.5 py-1.5 text-[13px] font-semibold text-charcoal"
                  >
                    <span className="text-[15px] leading-none">{flag}</span>
                    {name}
                    <span className="w-1.5 h-1.5 rounded-full bg-mint-500 animate-pulse" />
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Visual column */}
          <Reveal delay={0.18} className="relative">
            <div className="relative bg-gradient-to-br from-mint-50 via-mint-50/40 to-white border border-mint-100 rounded-[28px] shadow-[0_24px_60px_rgba(21,24,28,0.08)] p-6">
              <div className="bg-charcoal rounded-2xl p-5 pb-6 relative overflow-hidden">
                <div className="flex gap-1.5 mb-4">
                  <span className="w-2 h-2 rounded-full bg-white/25" />
                  <span className="w-2 h-2 rounded-full bg-white/25" />
                  <span className="w-2 h-2 rounded-full bg-white/25" />
                </div>

                <motion.div
                  animate={{ boxShadow: ['0 0 0 0 rgba(47,125,79,0.45)', '0 0 0 18px rgba(47,125,79,0)', '0 0 0 0 rgba(47,125,79,0)'] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: 'easeOut' }}
                  className="w-16 h-16 rounded-full bg-mint-600 flex items-center justify-center mx-auto my-5"
                >
                  <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                </motion.div>

                <div className="flex items-end gap-[3px] h-9 mx-1.5 mb-4">
                  {[40, 70, 35, 90, 55, 75, 30, 65, 45, 80, 38, 60].map((h, i) => (
                    <motion.span
                      key={i}
                      animate={{ scaleY: [0.35, 1, 0.35] }}
                      transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.1, ease: 'easeInOut' }}
                      style={{ height: `${h}%` }}
                      className="flex-1 bg-mint-600/85 rounded-sm origin-bottom"
                    />
                  ))}
                </div>

                <div className="relative bg-white/[0.08] rounded-lg h-2 overflow-hidden">
                  <span className="absolute inset-y-0 left-0 w-[38%] bg-mint-600 rounded-lg" />
                  <motion.span
                    animate={{ left: ['0%', '82%', '0%'] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-[3px] w-3.5 h-3.5 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
                  />
                </div>
              </div>

              {BADGES.map(({ Icon, label, className, delay }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay, ease: [0.34, 1.56, 0.64, 1] }}
                  className={`hidden md:flex absolute items-center gap-2 bg-white border border-mint-100 rounded-full pl-2.5 pr-3.5 py-2 shadow-[0_12px_26px_rgba(21,24,28,0.10)] font-display text-xs font-bold text-charcoal ${className}`}
                >
                  <span className="w-6 h-6 rounded-full bg-mint-50 flex items-center justify-center flex-none">
                    <Icon className="w-3 h-3 text-mint-700" strokeWidth={2.2} />
                  </span>
                  {label}
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* ===== Global reach / map ===== */}
      <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24 pt-4 border-t border-mint-100/60">
        <div className="max-w-xl pt-12 md:pt-16">
          <Reveal className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-mint-600 mb-4">
            <span className="w-6 h-px bg-mint-500" />Global Reach
          </Reveal>
          <Reveal delay={0.06}>
            <h3 className="font-display font-bold text-3xl md:text-[40px] leading-[1.16] tracking-tight text-charcoal">
              One editor, clients across four time zones
            </h3>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-charcoal-light leading-relaxed mt-4 max-w-lg">
              From Kolkata to Toronto, every client gets the same process,
              turnaround, and direct line to me — wherever they're based.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid lg:grid-cols-[1.55fr_1fr] gap-6 items-start">
          {/* Map card */}
          <Reveal delay={0.16}>
            <div className="relative bg-gradient-to-br from-mint-50 via-mint-50/40 to-white border border-mint-100 rounded-3xl shadow-[0_20px_50px_rgba(21,24,28,0.06)] p-4 pb-6">
              <div className="relative w-full aspect-[784/459] rounded-2xl overflow-hidden bg-mint-100/40">
                {/* stylized dot grid standing in for landmass */}
                <div className="absolute inset-0 [background-image:radial-gradient(rgba(47,125,79,0.18)_1px,transparent_1px)] [background-size:16px_16px]" />

                {MAP_PINS.map((pin) => (
                  <motion.div
                    key={pin.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                    className="absolute -translate-x-1/2 -translate-y-full"
                    style={{ left: pin.left, top: pin.top }}
                  >
                    <span className="relative flex items-center justify-center">
                      <motion.span
                        animate={{ scale: [1, 3.5], opacity: [0.5, 0] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
                        className="absolute w-2.5 h-2.5 rounded-full bg-mint-600"
                      />
                      <span className="w-2.5 h-2.5 rounded-full bg-mint-700 ring-2 ring-white" />
                    </span>
                    <div
                      className={`mt-2 bg-white border border-mint-100 rounded-xl px-3 py-1.5 shadow-[0_8px_18px_rgba(21,24,28,0.08)] whitespace-nowrap ${
                        pin.big ? 'w-max' : ''
                      }`}
                    >
                      <div className="text-[8.5px] font-bold uppercase tracking-wider text-charcoal-soft">
                        {pin.big ? 'National' : 'International'}
                      </div>
                      <div className="font-display text-[11.5px] font-semibold text-charcoal">
                        {pin.label}
                      </div>
                      {pin.big && (
                        <div className="text-[10.5px] text-charcoal-soft mt-0.5">{pin.sub}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 px-2 pt-4 text-xs text-charcoal-soft">
                <span>Client locations, plotted as of 2026.</span>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <i className="w-2 h-2 rounded-full bg-mint-600 inline-block" />
                    Where our clients are
                  </span>
                  <span className="flex items-center gap-1.5">
                    <i className="w-2 h-2 rounded-full bg-mint-200 inline-block" />
                    Rest of world
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Location list card */}
          <Reveal delay={0.22}>
            <div className="bg-white border border-mint-100 rounded-3xl shadow-[0_20px_50px_rgba(21,24,28,0.05)] p-6 md:p-7">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-charcoal-soft mb-2.5">
                  🇮🇳 National
                </div>
                <ul>
                  {NATIONAL.map(({ city, region }) => (
                    <li
                      key={city}
                      className="flex items-center gap-2.5 text-[14.5px] text-charcoal py-2 border-b border-mint-100 last:border-none"
                    >
                      <span className="w-5 h-5 rounded-full bg-mint-50 flex items-center justify-center flex-none">
                        <MapPin className="w-2.5 h-2.5 text-mint-700" strokeWidth={2} />
                      </span>
                      <span className="font-semibold">{city}</span>
                      <span className="ml-auto text-[12.5px] text-charcoal-soft text-right">{region}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-charcoal-soft mb-2.5 flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5" /> International
                </div>
                {INTERNATIONAL.map(({ group, cities }) => (
                  <div key={group} className="mt-3.5 first:mt-0">
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-charcoal-soft">
                      {group}
                    </div>
                    <ul className="mt-1">
                      {cities.map(({ city, region }) => (
                        <li
                          key={city}
                          className="flex items-center gap-2.5 text-[14.5px] text-charcoal py-2 border-b border-mint-100 last:border-none"
                        >
                          <span className="w-5 h-5 rounded-full bg-mint-50 flex items-center justify-center flex-none">
                            <MapPin className="w-2.5 h-2.5 text-mint-700" strokeWidth={2} />
                          </span>
                          <span className="font-semibold">{city}</span>
                          <span className="ml-auto text-[12.5px] text-charcoal-soft text-right">{region}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-mint-100 flex gap-6">
                {STATS.map(({ value, label }) => (
                  <div key={label} className="flex-1">
                    <div className="font-display text-xl md:text-[22px] font-bold text-charcoal">{value}</div>
                    <div className="text-[11.5px] text-charcoal-soft">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}