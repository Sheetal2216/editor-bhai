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
  {
    Icon: MessageCircle,
    label: 'WhatsApp',
    href: PROFILE.whatsappLink,
    primary: true,
  },
  {
    Icon: CalendarCheck2Icon,
    label: 'Book Consultation',
    href: PROFILE.googleFormUrl,
    primary: true,
  },
  {
    Icon: LinkedinIcon,
    label: 'LinkedIn',
    href: PROFILE.linkedinLink,
    primary: false,
  },
  {
    Icon: Phone,
    label: 'Call',
    href: PROFILE.phoneLink,
    primary: false,
  },
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
  {
    Icon: CalendarCheck2Icon,
    label: '4K Exports',
    className: 'top-[6%] -left-[8%]',
    delay: 0.5,
  },
  {
    Icon: Zap,
    label: '48h Turnaround',
    className: 'bottom-[14%] -right-[9%]',
    delay: 0.68,
  },
  {
    Icon: UserCheck,
    label: 'Dedicated Editor',
    className: '-bottom-[5%] left-[14%]',
    delay: 0.86,
  },
]

const NATIONAL = [
  { city: 'Kolkata', region: 'West Bengal' },
  { city: 'Noida', region: 'Delhi NCR' },
  { city: 'Mumbai', region: 'Maharashtra' },
  { city: 'Bangalore', region: 'Karnataka' },
]

const INTERNATIONAL = [
  {
    group: 'North America',
    cities: [{ city: 'Toronto', region: 'Canada' }],
  },
  {
    group: 'Europe',
    cities: [{ city: 'Paris', region: 'France' }],
  },
  {
    group: 'Middle East',
    cities: [
      { city: 'Muscat', region: 'Oman' },
      { city: 'Abu Dhabi', region: 'UAE' },
    ],
  },
]

// Rough relative positions for illustrative dot-map
const MAP_PINS = [
  {
    label: 'Toronto',
    sub: 'Canada',
    left: '18%',
    top: '34%',
  },
  {
    label: 'Paris',
    sub: 'France',
    left: '46%',
    top: '30%',
  },
  {
    label: 'Muscat',
    sub: 'Oman',
    left: '60%',
    top: '48%',
  },
  {
    label: 'Abu Dhabi',
    sub: 'UAE',
    left: '58%',
    top: '52%',
  },
  {
    label: 'India · 4 hubs',
    sub: 'Kolkata, Noida, Mumbai, Bangalore',
    left: '68%',
    top: '46%',
    big: true,
  },
]

const STATS = [
  { value: '5', label: 'Countries served' },
  { value: '8', label: 'Cities' },
  { value: '1', label: 'Shared process' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white">

      {/* ============================================================
          BACKGROUND GLOWS
      ============================================================ */}

      <div
        className="
          absolute
          -top-24
          -right-24
          w-72
          h-72
          sm:w-96
          sm:h-96
          rounded-full
          bg-mint-100/30
          blur-3xl
          pointer-events-none
        "
        aria-hidden="true"
      />

      <div
        className="
          absolute
          -bottom-24
          -left-24
          w-72
          h-72
          sm:w-96
          sm:h-96
          rounded-full
          bg-mint-50/40
          blur-3xl
          pointer-events-none
        "
        aria-hidden="true"
      />

      {/* ============================================================
          CONTACT HERO
      ============================================================ */}

      <div
        className="
          relative
          max-w-6xl
          mx-auto
          px-4
          sm:px-5
          md:px-8
          pt-14
          sm:pt-16
          md:pt-24
          pb-14
          sm:pb-16
          md:pb-20
        "
      >

        <div
          className="
            grid
            lg:grid-cols-[1.05fr_0.95fr]
            gap-10
            sm:gap-12
            lg:gap-14
            items-center
          "
        >

          {/* ========================================================
              COPY COLUMN
          ======================================================== */}

          <div className="min-w-0">

            <Reveal
              className="
                flex
                items-center
                gap-2
                text-[10px]
                sm:text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-mint-600
                mb-3
                sm:mb-4
              "
            >
              <span className="w-5 sm:w-6 h-px bg-mint-500" />
              Contact
            </Reveal>

            <Reveal delay={0.06}>

              <h2
                className="
                  font-display
                  font-bold
                  text-[36px]
                  sm:text-4xl
                  md:text-5xl
                  lg:text-[52px]
                  leading-[1.04]
                  tracking-[-0.035em]
                  text-charcoal
                  mb-4
                  max-w-[650px]
                "
              >
                Let's Build Something Amazing
              </h2>

            </Reveal>

            <Reveal delay={0.12}>

              <p
                className="
                  text-sm
                  sm:text-[15px]
                  md:text-base
                  text-charcoal-light
                  max-w-md
                  leading-relaxed
                  mb-6
                  sm:mb-7
                "
              >
                Fill out a short form and get a free consultation with a custom
                proposal — no obligations.
              </p>

            </Reveal>


            {/* ======================================================
                TRUST ROW
            ====================================================== */}

            <Reveal
              delay={0.16}
              className="
                flex
                flex-col
                xs:flex-row
                sm:flex-wrap
                gap-3
                sm:gap-5
                mb-7
                sm:mb-8
              "
            >

              {TRUST.map(({ Icon, label }) => (

                <div
                  key={label}
                  className="
                    flex
                    items-center
                    gap-2.5
                    min-w-0
                  "
                >

                  <span
                    className="
                      w-8
                      h-8
                      rounded-[10px]
                      bg-mint-50
                      flex
                      items-center
                      justify-center
                      flex-none
                    "
                  >
                    <Icon
                      className="w-4 h-4 text-mint-700"
                      strokeWidth={2}
                    />
                  </span>

                  <span
                    className="
                      text-[12.5px]
                      sm:text-[13.5px]
                      font-semibold
                      text-charcoal
                    "
                  >
                    {label}
                  </span>

                </div>

              ))}

            </Reveal>


            {/* ======================================================
                CTA BUTTONS
            ====================================================== */}

            <Reveal
              delay={0.22}
              className="
                flex
                flex-wrap
                items-center
                gap-2.5
                sm:gap-3
                mb-5
                sm:mb-6
              "
            >

              {ACTIONS.map(({ Icon, label, href, primary }) => (

                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    duration: 0.2,
                    ease: 'easeOut',
                  }}
                  className={`
                    flex
                    items-center
                    justify-center
                    gap-2
                    font-display
                    font-semibold
                    text-[13px]
                    sm:text-[14.5px]
                    px-4
                    sm:px-6
                    py-3
                    sm:py-3.5
                    rounded-full
                    transition-all
                    duration-300
                    whitespace-nowrap
                    ${
                      primary
                        ? 'bg-charcoal text-white shadow-[0_10px_24px_rgba(21,24,28,0.18)] hover:bg-charcoal/90'
                        : 'bg-white border border-mint-100 text-charcoal hover:border-mint-300 hover:bg-mint-50/40'
                    }
                  `}
                >

                  <Icon className="w-4 h-4 flex-none" />

                  {label}

                </motion.a>

              ))}

            </Reveal>


            {/* ======================================================
                EMAIL
            ====================================================== */}

            <Reveal delay={0.28}>

              <p
                className="
                  text-[12.5px]
                  sm:text-sm
                  text-charcoal-soft
                  mb-7
                  sm:mb-8
                  break-words
                "
              >
                Or email directly at{' '}

                <a
                  href={`mailto:${PROFILE.email}`}
                  className="
                    text-mint-600
                    hover:text-mint-700
                    transition-colors
                    font-medium
                    break-all
                  "
                >
                  {PROFILE.email}
                </a>

              </p>

            </Reveal>


            {/* ======================================================
                COUNTRY MARQUEE
            ====================================================== */}

            <Reveal
              delay={0.34}
              className="
                max-w-[460px]
                w-full
                overflow-hidden
                [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]
              "
            >

              <div
                className="
                  text-[10px]
                  sm:text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-charcoal-soft
                  mb-2.5
                "
              >
                Trusted by clients in
              </div>

              <div
                className="
                  flex
                  gap-2
                  sm:gap-2.5
                  w-max
                  animate-[marquee_16s_linear_infinite]
                  hover:[animation-play-state:paused]
                "
              >

                {[...COUNTRIES, ...COUNTRIES].map(
                  ({ flag, name }, i) => (

                    <span
                      key={`${name}-${i}`}
                      className="
                        flex
                        items-center
                        gap-1.5
                        flex-none
                        bg-mint-50
                        border
                        border-mint-100
                        rounded-full
                        px-3
                        sm:px-3.5
                        py-1.5
                        text-[12px]
                        sm:text-[13px]
                        font-semibold
                        text-charcoal
                      "
                    >

                      <span className="text-[14px] sm:text-[15px] leading-none">
                        {flag}
                      </span>

                      {name}

                      <span
                        className="
                          w-1.5
                          h-1.5
                          rounded-full
                          bg-mint-500
                          animate-pulse
                        "
                      />

                    </span>

                  )
                )}

              </div>

            </Reveal>

          </div>


          {/* ========================================================
              VISUAL COLUMN
          ======================================================== */}

          <Reveal
            delay={0.18}
            className="
              relative
              w-full
              max-w-[620px]
              mx-auto
              lg:max-w-none
            "
          >

            <div
              className="
                relative
                bg-gradient-to-br
                from-mint-50
                via-mint-50/40
                to-white
                border
                border-mint-100
                rounded-[24px]
                sm:rounded-[28px]
                shadow-[0_24px_60px_rgba(21,24,28,0.08)]
                p-3
                sm:p-5
                md:p-6
              "
            >

              <div
                className="
                  bg-charcoal
                  rounded-[18px]
                  sm:rounded-2xl
                  p-4
                  sm:p-5
                  pb-5
                  sm:pb-6
                  relative
                  overflow-hidden
                "
              >

                {/* Decorative dots */}

                <div className="flex gap-1.5 mb-3 sm:mb-4">

                  <span className="w-2 h-2 rounded-full bg-white/25" />
                  <span className="w-2 h-2 rounded-full bg-white/25" />
                  <span className="w-2 h-2 rounded-full bg-white/25" />

                </div>


                {/* Play button */}

                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(47,125,79,0.45)',
                      '0 0 0 18px rgba(47,125,79,0)',
                      '0 0 0 0 rgba(47,125,79,0)',
                    ],
                  }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                  className="
                    w-14
                    h-14
                    sm:w-16
                    sm:h-16
                    rounded-full
                    bg-mint-600
                    flex
                    items-center
                    justify-center
                    mx-auto
                    my-5
                    sm:my-6
                  "
                >

                  <Play
                    className="
                      w-4
                      h-4
                      sm:w-5
                      sm:h-5
                      text-white
                      ml-0.5
                    "
                    fill="white"
                  />

                </motion.div>


                {/* Audio bars */}

                <div
                  className="
                    flex
                    items-end
                    gap-[3px]
                    h-8
                    sm:h-9
                    mx-1
                    sm:mx-1.5
                    mb-4
                  "
                >

                  {[40, 70, 35, 90, 55, 75, 30, 65, 45, 80, 38, 60].map(
                    (h, i) => (

                      <motion.span
                        key={i}
                        animate={{
                          scaleY: [0.35, 1, 0.35],
                        }}
                        transition={{
                          duration: 1.4,
                          repeat: Infinity,
                          delay: i * 0.1,
                          ease: 'easeInOut',
                        }}
                        style={{
                          height: `${h}%`,
                        }}
                        className="
                          flex-1
                          bg-mint-600/85
                          rounded-sm
                          origin-bottom
                        "
                      />

                    )
                  )}

                </div>


                {/* Timeline */}

                <div
                  className="
                    relative
                    bg-white/[0.08]
                    rounded-lg
                    h-1.5
                    sm:h-2
                    overflow-hidden
                  "
                >

                  <span
                    className="
                      absolute
                      inset-y-0
                      left-0
                      w-[38%]
                      bg-mint-600
                      rounded-lg
                    "
                  />

                  <motion.span
                    animate={{
                      left: ['0%', '82%', '0%'],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="
                      absolute
                      -top-[3px]
                      w-3
                      sm:w-3.5
                      h-3
                      sm:h-3.5
                      rounded-full
                      bg-white
                      shadow-[0_2px_6px_rgba(0,0,0,0.35)]
                    "
                  />

                </div>

              </div>


              {/* ====================================================
                  FLOATING BADGES
              ==================================================== */}

              {BADGES.map(
                ({ Icon, label, className, delay }) => (

                  <motion.div
                    key={label}
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    className={`
                      hidden
                      md:flex
                      absolute
                      items-center
                      gap-2
                      bg-white
                      border
                      border-mint-100
                      rounded-full
                      pl-2.5
                      pr-3.5
                      py-2
                      shadow-[0_12px_26px_rgba(21,24,28,0.10)]
                      font-display
                      text-xs
                      font-bold
                      text-charcoal
                      ${className}
                    `}
                  >

                    <span
                      className="
                        w-6
                        h-6
                        rounded-full
                        bg-mint-50
                        flex
                        items-center
                        justify-center
                        flex-none
                      "
                    >

                      <Icon
                        className="w-3 h-3 text-mint-700"
                        strokeWidth={2.2}
                      />

                    </span>

                    {label}

                  </motion.div>

                )
              )}

            </div>

          </Reveal>

        </div>

      </div>


      {/* ==============================================================
          GLOBAL REACH
      ============================================================== */}

      <div
        className="
          relative
          max-w-6xl
          mx-auto
          px-4
          sm:px-5
          md:px-8
          pb-14
          sm:pb-16
          md:pb-24
          pt-4
          border-t
          border-mint-100/60
        "
      >

        {/* ============================================================
            GLOBAL REACH HEADING
        ============================================================ */}

        <div className="max-w-xl pt-10 sm:pt-12 md:pt-16">

          <Reveal
            className="
              flex
              items-center
              gap-2
              text-[10px]
              sm:text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-mint-600
              mb-3
              sm:mb-4
            "
          >

            <span className="w-5 sm:w-6 h-px bg-mint-500" />

            Global Reach

          </Reveal>

          <Reveal delay={0.06}>

            <h3
              className="
                font-display
                font-bold
                text-[32px]
                sm:text-4xl
                md:text-[40px]
                leading-[1.08]
                md:leading-[1.16]
                tracking-tight
                text-charcoal
              "
            >
              One editor, clients across four time zones
            </h3>

          </Reveal>

          <Reveal delay={0.12}>

            <p
              className="
                text-sm
                sm:text-[15px]
                text-charcoal-light
                leading-relaxed
                mt-4
                max-w-lg
              "
            >
              From Kolkata to Toronto, every client gets the same process,
              turnaround, and direct line to me — wherever they're based.
            </p>

          </Reveal>

        </div>


        {/* ============================================================
            MAP + LOCATIONS
        ============================================================ */}

        <div
          className="
            mt-9
            sm:mt-10
            md:mt-12
            grid
            lg:grid-cols-[1.55fr_1fr]
            gap-5
            sm:gap-6
            items-start
          "
        >

          {/* ==========================================================
              MAP CARD
          ========================================================== */}

          <Reveal delay={0.16}>

            <div
              className="
                relative
                bg-gradient-to-br
                from-mint-50
                via-mint-50/40
                to-white
                border
                border-mint-100
                rounded-2xl
                sm:rounded-3xl
                shadow-[0_20px_50px_rgba(21,24,28,0.06)]
                p-2.5
                sm:p-4
                pb-4
                sm:pb-6
              "
            >

              <div
                className="
                  relative
                  w-full
                  aspect-[784/459]
                  min-h-[230px]
                  sm:min-h-0
                  rounded-xl
                  sm:rounded-2xl
                  overflow-hidden
                  bg-mint-100/40
                "
              >

                {/* Dot grid */}

                <div
                  className="
                    absolute
                    inset-0
                    [background-image:radial-gradient(rgba(47,125,79,0.18)_1px,transparent_1px)]
                    [background-size:12px_12px]
                    sm:[background-size:16px_16px]
                  "
                />


                {/* Map Pins */}

                {MAP_PINS.map((pin) => (

                  <motion.div
                    key={pin.label}
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    className="
                      absolute
                      -translate-x-1/2
                      -translate-y-full
                    "
                    style={{
                      left: pin.left,
                      top: pin.top,
                    }}
                  >

                    {/* Pin */}

                    <span className="relative flex items-center justify-center">

                      <motion.span
                        animate={{
                          scale: [1, 3.5],
                          opacity: [0.5, 0],
                        }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          ease: 'easeOut',
                        }}
                        className="
                          absolute
                          w-2
                          h-2
                          sm:w-2.5
                          sm:h-2.5
                          rounded-full
                          bg-mint-600
                        "
                      />

                      <span
                        className="
                          w-2
                          h-2
                          sm:w-2.5
                          sm:h-2.5
                          rounded-full
                          bg-mint-700
                          ring-2
                          ring-white
                        "
                      />

                    </span>


                    {/* Pin label */}

                    <div
                      className={`
                        mt-1.5
                        sm:mt-2
                        bg-white
                        border
                        border-mint-100
                        rounded-lg
                        sm:rounded-xl
                        px-2
                        sm:px-3
                        py-1
                        sm:py-1.5
                        shadow-[0_8px_18px_rgba(21,24,28,0.08)]
                        whitespace-nowrap
                        ${
                          pin.big
                            ? 'w-max'
                            : ''
                        }
                      `}
                    >

                      <div
                        className="
                          text-[7px]
                          sm:text-[8.5px]
                          font-bold
                          uppercase
                          tracking-wider
                          text-charcoal-soft
                        "
                      >
                        {pin.big
                          ? 'National'
                          : 'International'}
                      </div>

                      <div
                        className="
                          font-display
                          text-[9px]
                          sm:text-[11.5px]
                          font-semibold
                          text-charcoal
                        "
                      >
                        {pin.label}
                      </div>

                      {pin.big && (

                        <div
                          className="
                            text-[8px]
                            sm:text-[10.5px]
                            text-charcoal-soft
                            mt-0.5
                            max-w-[150px]
                            sm:max-w-none
                            whitespace-normal
                            sm:whitespace-nowrap
                          "
                        >
                          {pin.sub}
                        </div>

                      )}

                    </div>

                  </motion.div>

                ))}

              </div>


              {/* ======================================================
                  MAP LEGEND
              ====================================================== */}

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  sm:flex-wrap
                  items-start
                  sm:items-center
                  justify-between
                  gap-3
                  px-1
                  sm:px-2
                  pt-3
                  sm:pt-4
                  text-[10px]
                  sm:text-xs
                  text-charcoal-soft
                "
              >

                <span>
                  Client locations, plotted as of 2026.
                </span>

                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    gap-3
                    sm:gap-4
                  "
                >

                  <span className="flex items-center gap-1.5">

                    <i
                      className="
                        w-2
                        h-2
                        rounded-full
                        bg-mint-600
                        inline-block
                      "
                    />

                    Where our clients are

                  </span>

                  <span className="flex items-center gap-1.5">

                    <i
                      className="
                        w-2
                        h-2
                        rounded-full
                        bg-mint-200
                        inline-block
                      "
                    />

                    Rest of world

                  </span>

                </div>

              </div>

            </div>

          </Reveal>


          {/* ==========================================================
              LOCATION LIST
          ========================================================== */}

          <Reveal delay={0.22}>

            <div
              className="
                bg-white
                border
                border-mint-100
                rounded-2xl
                sm:rounded-3xl
                shadow-[0_20px_50px_rgba(21,24,28,0.05)]
                p-5
                sm:p-6
                md:p-7
              "
            >

              {/* ====================================================
                  NATIONAL
              ==================================================== */}

              <div>

                <div
                  className="
                    text-[10px]
                    sm:text-[11px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-charcoal-soft
                    mb-2
                    sm:mb-2.5
                  "
                >
                  🇮🇳 National
                </div>

                <ul>

                  {NATIONAL.map(({ city, region }) => (

                    <li
                      key={city}
                      className="
                        flex
                        items-center
                        gap-2
                        sm:gap-2.5
                        text-[13px]
                        sm:text-[14.5px]
                        text-charcoal
                        py-2.5
                        border-b
                        border-mint-100
                        last:border-none
                      "
                    >

                      <span
                        className="
                          w-5
                          h-5
                          rounded-full
                          bg-mint-50
                          flex
                          items-center
                          justify-center
                          flex-none
                        "
                      >

                        <MapPin
                          className="
                            w-2.5
                            h-2.5
                            text-mint-700
                          "
                          strokeWidth={2}
                        />

                      </span>

                      <span className="font-semibold">
                        {city}
                      </span>

                      <span
                        className="
                          ml-auto
                          text-[10.5px]
                          sm:text-[12.5px]
                          text-charcoal-soft
                          text-right
                          pl-2
                        "
                      >
                        {region}
                      </span>

                    </li>

                  ))}

                </ul>

              </div>


              {/* ====================================================
                  INTERNATIONAL
              ==================================================== */}

              <div className="mt-5">

                <div
                  className="
                    text-[10px]
                    sm:text-[11px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-charcoal-soft
                    mb-2.5
                    flex
                    items-center
                    gap-1.5
                  "
                >

                  <Globe2 className="w-3.5 h-3.5" />

                  International

                </div>


                {INTERNATIONAL.map(
                  ({ group, cities }) => (

                    <div
                      key={group}
                      className="
                        mt-3
                        sm:mt-3.5
                        first:mt-0
                      "
                    >

                      <div
                        className="
                          text-[10px]
                          sm:text-[11px]
                          font-semibold
                          uppercase
                          tracking-wide
                          text-charcoal-soft
                        "
                      >
                        {group}
                      </div>

                      <ul className="mt-1">

                        {cities.map(
                          ({ city, region }) => (

                            <li
                              key={city}
                              className="
                                flex
                                items-center
                                gap-2
                                sm:gap-2.5
                                text-[13px]
                                sm:text-[14.5px]
                                text-charcoal
                                py-2.5
                                border-b
                                border-mint-100
                                last:border-none
                              "
                            >

                              <span
                                className="
                                  w-5
                                  h-5
                                  rounded-full
                                  bg-mint-50
                                  flex
                                  items-center
                                  justify-center
                                  flex-none
                                "
                              >

                                <MapPin
                                  className="
                                    w-2.5
                                    h-2.5
                                    text-mint-700
                                  "
                                  strokeWidth={2}
                                />

                              </span>

                              <span className="font-semibold">
                                {city}
                              </span>

                              <span
                                className="
                                  ml-auto
                                  text-[10.5px]
                                  sm:text-[12.5px]
                                  text-charcoal-soft
                                  text-right
                                  pl-2
                                "
                              >
                                {region}
                              </span>

                            </li>

                          )
                        )}

                      </ul>

                    </div>

                  )
                )}

              </div>


              {/* ====================================================
                  STATS
              ==================================================== */}

              <div
                className="
                  mt-5
                  sm:mt-6
                  pt-4
                  sm:pt-5
                  border-t
                  border-mint-100
                  grid
                  grid-cols-3
                  gap-3
                  sm:gap-6
                "
              >

                {STATS.map(({ value, label }) => (

                  <div
                    key={label}
                    className="min-w-0"
                  >

                    <div
                      className="
                        font-display
                        text-lg
                        sm:text-xl
                        md:text-[22px]
                        font-bold
                        text-charcoal
                      "
                    >
                      {value}
                    </div>

                    <div
                      className="
                        text-[9.5px]
                        sm:text-[11.5px]
                        text-charcoal-soft
                        leading-tight
                        mt-0.5
                      "
                    >
                      {label}
                    </div>

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