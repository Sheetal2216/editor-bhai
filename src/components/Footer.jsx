import { motion } from 'framer-motion'
import { MessageCircle, Mail } from 'lucide-react'
import LinkedinIcon from './icons/LinkedinIcon'
import { NAV_LINKS, PROFILE } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-white border-t border-mint-100 pt-20 pb-10 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-mint-50/60 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 pb-16">
          
          {/* BRAND & LOGO */}
          <div className="flex flex-col items-center lg:items-start max-w-sm text-center lg:text-left">
            <a href="#home" className="inline-block hover:scale-105 transition-transform duration-300">
              {/* Replace '/images/logo.png' with your actual logo image path */}
              <img src="/images/logo.png" alt="Editor Bhai Logo" className="h-14 sm:h-16 w-auto object-contain drop-shadow-sm" />
            </a>
            <p className="mt-5 text-charcoal-soft text-sm sm:text-base leading-relaxed">
              Turning raw footage into scroll-stopping content that skyrockets watch time, maximizes retention, and builds a powerful online presence.
            </p>
          </div>

          {/* NAVIGATION LINKS */}
          <nav className="flex flex-col items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-mint-600 mb-6">
              Explore
            </span>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a 
                    href={l.href} 
                    className="text-charcoal-light font-medium hover:text-mint-700 transition-colors duration-300 relative group"
                  >
                    {l.label}
                    {/* Hover Underline Effect */}
                    <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-mint-500 transition-all duration-300 group-hover:w-full rounded-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* SOCIAL ACTIONS */}
          <div className="flex flex-col items-center lg:items-end">
            <span className="text-xs font-bold uppercase tracking-widest text-mint-600 mb-6">
              Let's Connect
            </span>
            <div className="flex items-center gap-4">
              {[
                { Icon: MessageCircle, href: PROFILE.whatsappLink, label: 'WhatsApp', bgHover: 'hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:shadow-[0_8px_20px_rgba(37,211,102,0.3)]' },
                { Icon: LinkedinIcon, href: PROFILE.linkedinLink, label: 'LinkedIn', bgHover: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:shadow-[0_8px_20px_rgba(10,102,194,0.3)]' },
                { Icon: Mail, href: `mailto:${PROFILE.email}`, label: 'Email', bgHover: 'hover:bg-mint-600 hover:text-white hover:border-mint-600 hover:shadow-[0_8px_20px_rgba(47,125,79,0.3)]' }
              ].map(({ Icon, href, label, bgHover }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? "_blank" : undefined}
                  rel={label !== 'Email' ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 rounded-full bg-white border-2 border-mint-50 text-charcoal flex items-center justify-center shadow-sm transition-all duration-300 ${bgHover}`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

        </div>

        {/* COPYRIGHT & SIGN-OFF */}
        <div className="border-t border-mint-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-sm text-charcoal-soft font-medium">
            © {year} Editor Bhai. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-2.5 text-sm text-charcoal-soft/70 font-medium">
            <span>Designed for creators</span>
            <span className="w-1.5 h-1.5 rounded-full bg-mint-400" />
            <span>Built for growth</span>
          </div>
        </div>
      </div>
    </footer>
  )
}