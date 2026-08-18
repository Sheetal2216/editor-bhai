import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { PROFILE } from '../data'

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [pulseKey, setPulseKey] = useState(0)
  const [ripple, setRipple] = useState(false)

  // Slide in 3s after first load.
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(t)
  }, [])

  // Gentle attention pulse every ~13s.
  useEffect(() => {
    if (!visible || dismissed) return

    const interval = setInterval(
      () => setPulseKey((k) => k + 1),
      13000
    )

    return () => clearInterval(interval)
  }, [visible, dismissed])

  const handleClick = () => {
    setRipple(true)

    setTimeout(() => {
      setRipple(false)
    }, 500)
  }

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          key={pulseKey}

          /* Slide in from the right */
          initial={{
            x: 120,
            opacity: 0
          }}

          animate={{
            x: 0,
            opacity: 1,
            y: [0, -6, 0],
            scale: pulseKey > 0
              ? [1, 1.06, 1]
              : 1
          }}

          /* Slide out to the right when dismissed */
          exit={{
            x: 120,
            opacity: 0,
            transition: {
              duration: 0.25
            }
          }}

          transition={{
            x: {
              type: 'spring',
              stiffness: 260,
              damping: 24
            },

            opacity: {
              duration: 0.4
            },

            y: {
              duration: 3.2,
              repeat: Infinity,
              ease: 'easeInOut'
            },

            scale: {
              duration: 0.6,
              ease: 'easeInOut'
            }
          }}

          whileHover={{
            scale: 1.04
          }}

          /*
            RIGHT SIDE + VERTICAL CENTER
          */
          className="
            fixed
            right-4
            top-1/2
            -translate-y-1/2
            md:right-6
            z-40
            w-[min(85vw,17rem)]
          "
        >

          {/* Main Glass Card */}
          <div
            className="
              group
              relative
              glass
              border
              border-mint-300/70
              rounded-[20px]
              shadow-lg
              shadow-mint-200/50
              p-4
              pr-9
              transition-shadow
              duration-300
              hover:shadow-xl
              hover:shadow-mint-300/60
            "
          >

            {/* Close Button */}
            <button
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              className="
                absolute
                top-2.5
                right-2.5
                w-6
                h-6
                rounded-full
                flex
                items-center
                justify-center
                text-charcoal-soft
                hover:bg-mint-100
                hover:text-charcoal
                transition-colors
              "
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Heading */}
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base">
                💬
              </span>

              <p className="font-display font-semibold text-charcoal text-sm">
                Let's Talk!
              </p>
            </div>

            {/* Description */}
            <p className="text-xs text-charcoal-soft leading-relaxed mb-3">
              Need a video editor? We're just one message away.
            </p>

            {/* WhatsApp Button */}
            <a
              href={PROFILE.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              className="
                relative
                overflow-hidden
                flex
                items-center
                justify-center
                gap-2
                bg-mint-500
                hover:bg-mint-600
                text-white
                text-sm
                font-semibold
                px-4
                py-2.5
                rounded-full
                transition-colors
                duration-300
              "
            >

              {/* Animated Message Icon */}
              <motion.span
                animate={{
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <MessageCircle className="w-4 h-4" />
              </motion.span>

              Chat Now

              {/* Ripple */}
              <AnimatePresence>
                {ripple && (
                  <motion.span
                    initial={{
                      scale: 0,
                      opacity: 0.5
                    }}
                    animate={{
                      scale: 3,
                      opacity: 0
                    }}
                    exit={{
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeOut'
                    }}
                    className="
                      absolute
                      inset-0
                      m-auto
                      w-10
                      h-10
                      rounded-full
                      bg-white/60
                      pointer-events-none
                    "
                  />
                )}
              </AnimatePresence>

            </a>

          </div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}