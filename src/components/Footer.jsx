import { motion } from 'framer-motion'
import { MessageCircle, Mail } from 'lucide-react'
import LinkedinIcon from './icons/LinkedinIcon'
import { NAV_LINKS, PROFILE } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-mint-50 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12">
          
          {/* Brand */}
          <a 
            href="#home" 
            className="font-display font-extrabold text-3xl text-charcoal hover:opacity-80 transition-opacity duration-300"
          >
            {PROFILE.name}<span className="text-mint-500">.</span>
          </a>

          {/* Navigation */}
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a 
                  href={l.href} 
                  className="text-charcoal-light hover:text-mint-600 transition-colors duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Actions */}
          <div className="flex items-center gap-3">
            {[
              { Icon: MessageCircle, href: PROFILE.whatsappLink, label: 'WhatsApp' },
              { Icon: LinkedinIcon, href: PROFILE.linkedinLink, label: 'LinkedIn' },
              { Icon: Mail, href: `mailto:${PROFILE.email}`, label: 'Email' }
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== 'Email' ? "_blank" : undefined}
                rel={label !== 'Email' ? "noopener noreferrer" : undefined}
                aria-label={label}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="w-10 h-10 rounded-full bg-white border border-mint-100 text-charcoal-light hover:border-mint-300 hover:text-mint-600 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_4px_15px_rgb(0,0,0,0.05)] flex items-center justify-center transition-colors duration-300"
              >
                <Icon className="w-4.5 h-4.5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright & Sign-off */}
        <div className="border-t border-mint-50/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal-soft font-medium tracking-wide">
            © {year} {PROFILE.name}. All rights reserved.
          </p>
          <p className="text-xs text-charcoal-soft/60">
            Designed for creators.
          </p>
        </div>
      </div>
    </footer>
  )
}