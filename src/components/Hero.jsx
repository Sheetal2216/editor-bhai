import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import {
  ArrowRight,
  Play,
  Globe,
  MapPin,
  Users,
  CheckCircle2,
  TrendingUp,
  Award,
  Trophy,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

import Reveal from "./Reveal";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { PROFILE, HERO_IMAGES } from "../data";

/* =========================================================
   HERO STATS
========================================================= */

const heroStats = [
  {
    value: "150",
    suffix: "+",
    icon: Users,
    label: "Clients Served",
  },
  {
    value: "1.5",
    suffix: "B+",
    icon: Play,
    label: "Views Generated",
  },
  {
    value: "500",
    suffix: "+",
    icon: CheckCircle2,
    label: "Projects Delivered",
  },
  {
    value: "50",
    suffix: "+",
    icon: TrendingUp,
    label: "Channels Built From Zero to Millions",
  },
  {
    value: "40",
    suffix: "+",
    icon: Award,
    label: "YouTube Silver Buttons",
  },
  {
    value: "5",
    suffix: "",
    icon: Trophy,
    label: "YouTube Gold Buttons",
  },
  {
    value: "5",
    suffix: "B+",
    icon: Globe,
    label: "Reach Across All Platforms",
  },
];

/* =========================================================
   STAT IMAGES
========================================================= */

const statImages = [
  "/images/stats-1.png",
  "/images/stats-2.png",
  "/images/stats-3.png",
  "/images/stats-4.png",
  "/images/stats-5.png",
  "/images/stats-6.png",
  "/images/stats-7.png",
];

/* =========================================================
   ANIMATED COUNTER
========================================================= */

const AnimatedCounter = ({ value, suffix, delay = 0 }) => {
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) =>
    Number.isInteger(parseFloat(value))
      ? Math.floor(latest)
      : latest.toFixed(1)
  );

  useEffect(() => {
    const controls = animate(count, parseFloat(value), {
      duration: 1.8,
      delay: delay / 1000,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [value, delay, count]);

  return (
    <motion.span
      initial={{
        opacity: 0,
        scale: 0.4,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        scale: [0.4, 1.3, 0.9, 1],
        y: [15, -8, 3, 0],
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: delay / 1000,
        ease: "easeOut",
      }}
      className="inline-block"
    >
      <motion.span>{rounded}</motion.span>

      <span className="text-sm sm:text-lg">
        {suffix}
      </span>
    </motion.span>
  );
};

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-[#F6F7F1]
        pt-20
        sm:pt-24
        lg:pt-16
        pb-10
        sm:pb-14
        lg:pb-16
      "
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 bg-gradient-to-br from-mint-50 via-[#F6F7F1] to-[#F6F7F1]" />

      <div
        className="
          absolute
          top-0
          right-0
          w-[180px]
          h-[180px]
          sm:w-[320px]
          sm:h-[320px]
          lg:w-[450px]
          lg:h-[450px]
          rounded-full
          bg-mint-100
          blur-[90px]
          opacity-40
        "
        aria-hidden="true"
      />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-4
          sm:px-8
          lg:px-10
        "
      >

        {/* ===================================================
            MAIN HERO GRID
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-9
            sm:gap-12
            lg:gap-14
            xl:gap-20
            items-center
          "
        >

          {/* =================================================
              LEFT COLUMN
          ================================================= */}

          <div
            className="
              w-full
              max-w-2xl
              mx-auto
              lg:mx-0
              text-center
              lg:text-left
              min-w-0
            "
          >

            {/* =================================================
                WE ARE
            ================================================= */}

            <Reveal>
              <span
                className="
                  inline-block
                  text-mint-600
                  font-semibold
                  tracking-wide
                  uppercase
                  text-xs
                  sm:text-sm
                  lg:text-base
                "
              >
                We are
              </span>
            </Reveal>

            {/* =================================================
                TITLE + LOGO
                IMPORTANT:
                row no longer gets vertically stretched
            ================================================= */}

            <Reveal delay={0.1}>
              <div
                className="
                  mt-2
                  flex
                  items-center
                  justify-center
                  lg:justify-start
                  gap-2
                  sm:gap-4
                  md:gap-5
                  lg:gap-6
                  xl:gap-8
                  w-full
                "
              >

                {/* TITLE */}

                <h1
                  className="
                    font-display
                    font-black
                    uppercase
                    leading-[0.86]
                    tracking-tight
                    text-charcoal
                    text-[42px]
                    min-[390px]:text-[46px]
                    min-[430px]:text-[50px]
                    sm:text-6xl
                    md:text-7xl
                    lg:text-[72px]
                    xl:text-[86px]
                    text-left
                    shrink-0
                  "
                >
                  Editor
                  <br />
                  Bhai
                </h1>

                {/* =================================================
                    LOGO VIDEO
                    Smaller on desktop so it doesn't create huge
                    vertical spacing.
                ================================================= */}

                <motion.video
                  autoPlay
                  loop
                  muted
                  playsInline
                  animate={{
                    scale: [1, 1.035, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    self-center
                    w-[78px]
                    h-[78px]
                    min-[390px]:w-[88px]
                    min-[390px]:h-[88px]
                    min-[430px]:w-[98px]
                    min-[430px]:h-[98px]
                    sm:w-[125px]
                    sm:h-[125px]
                    md:w-[155px]
                    md:h-[155px]
                    lg:w-[185px]
                    lg:h-[185px]
                    xl:w-[225px]
                    xl:h-[225px]
                    shrink-0
                    object-contain
                    pointer-events-none
                    z-20
                  "
                >
                  <source
                    src="/images/herOo.mp4"
                    type="video/mp4"
                  />
                </motion.video>

              </div>
            </Reveal>

            {/* =================================================
                ROLE
            ================================================= */}

            <Reveal delay={0.18}>
              <p
                className="
                  mt-4
                  sm:mt-5
                  text-base
                  sm:text-xl
                  font-semibold
                  text-mint-700
                "
              >
                {PROFILE.title}
              </p>
            </Reveal>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <Reveal delay={0.26}>
              <p
                className="
                  mt-4
                  sm:mt-5
                  text-sm
                  sm:text-lg
                  leading-6
                  sm:leading-8
                  text-charcoal-light
                  max-w-xl
                  mx-auto
                  lg:mx-0
                "
              >
                We've worked with top astrologers, creators, brands,
                and podcasters turning raw footage into scroll-stopping
                content that skyrockets watch time, maximizes audience
                retention, and builds a powerful online presence.
              </p>
            </Reveal>

            {/* =================================================
                LOCATIONS
            ================================================= */}

            <Reveal delay={0.3}>
              <div
                className="
                  mt-5
                  flex
                  flex-col
                  gap-2.5
                  text-left
                "
              >

                {/* INTERNATIONAL */}

                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    gap-1.5
                    sm:gap-2
                    justify-center
                    lg:justify-start
                  "
                >

                  <span
                    className="
                      flex
                      items-center
                      gap-1.5
                      text-[9px]
                      sm:text-xs
                      font-bold
                      text-charcoal
                      uppercase
                      tracking-wide
                      mr-1
                    "
                  >
                    <Globe
                      className="
                        w-3
                        h-3
                        sm:w-3.5
                        sm:h-3.5
                        text-mint-600
                      "
                    />

                    International Clientele:
                  </span>

                  {[
                    "France",
                    "Canada",
                    "Oman",
                    "Abu Dhabi",
                    "Dubai",
                  ].map((loc) => (
                    <span
                      key={loc}
                      className="
                        px-2
                        sm:px-2.5
                        py-1
                        rounded-full
                        text-[9px]
                        sm:text-[11px]
                        font-semibold
                        bg-mint-50
                        text-mint-700
                        border
                        border-mint-200
                        whitespace-nowrap
                      "
                    >
                      {loc}
                    </span>
                  ))}

                </div>

                {/* INDIA */}

                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    gap-1.5
                    sm:gap-2
                    justify-center
                    lg:justify-start
                  "
                >

                  <span
                    className="
                      flex
                      items-center
                      gap-1.5
                      text-[9px]
                      sm:text-xs
                      font-bold
                      text-charcoal
                      uppercase
                      tracking-wide
                      mr-1
                    "
                  >
                    <MapPin
                      className="
                        w-3
                        h-3
                        sm:w-3.5
                        sm:h-3.5
                        text-mint-600
                      "
                    />

                    India:
                  </span>

                  {[
                    "Noida",
                    "Bangalore",
                    "Mumbai",
                    "West Bengal",
                  ].map((loc) => (
                    <span
                      key={loc}
                      className="
                        px-2
                        sm:px-2.5
                        py-1
                        rounded-full
                        text-[9px]
                        sm:text-[11px]
                        font-semibold
                        bg-gray-50
                        text-charcoal-light
                        border
                        border-gray-200
                        whitespace-nowrap
                      "
                    >
                      {loc}
                    </span>
                  ))}

                </div>

              </div>
            </Reveal>

            {/* =================================================
                PREMIUM BUTTONS
            ================================================= */}

            <Reveal delay={0.34}>

              <div
                className="
                  mt-7
                  sm:mt-9
                  flex
                  flex-col
                  sm:flex-row
                  gap-3
                  sm:gap-4
                  items-stretch
                  sm:items-center
                  justify-center
                  lg:justify-start
                "
              >

                {/* =================================================
                    WHATSAPP BUTTON
                ================================================= */}

                <a
                  href={PROFILE.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    relative
                    w-full
                    sm:w-auto
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    bg-charcoal
                    text-white
                    font-semibold
                    px-5
                    sm:px-6
                    py-3
                    sm:py-3.5
                    rounded-full
                    overflow-hidden
                    shadow-lg
                    hover:shadow-[0_12px_30px_-10px_rgba(16,21,15,0.45)]
                    transition-all
                    duration-300
                    text-sm
                    sm:text-base
                  "
                >

                  {/* HOVER BACKGROUND */}

                  <span
                    className="
                      absolute
                      inset-0
                      bg-mint-600
                      translate-y-full
                      group-hover:translate-y-0
                      transition-transform
                      duration-300
                    "
                  />

                  {/* ICON */}

                  <span
                    className="
                      relative
                      z-10
                      flex
                      items-center
                      justify-center
                      w-7
                      h-7
                      rounded-full
                      bg-white/10
                      group-hover:bg-white/20
                      transition-colors
                    "
                  >
                    <MessageCircle
                      className="
                        w-4
                        h-4
                        sm:w-[18px]
                        sm:h-[18px]
                      "
                    />
                  </span>

                  {/* TEXT */}

                  <span className="relative z-10">
                    Chat on WhatsApp
                  </span>

                  {/* ARROW */}

                  <ArrowRight
                    className="
                      relative
                      z-10
                      w-4
                      h-4
                      sm:w-5
                      sm:h-5
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                </a>

                {/* =================================================
                    PORTFOLIO BUTTON
                ================================================= */}

                <a
                  href="https://abisek951.portfolial.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    relative
                    w-full
                    sm:w-auto
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    bg-white/70
                    backdrop-blur-sm
                    border
                    border-gray-300
                    text-charcoal
                    px-5
                    sm:px-6
                    py-3
                    sm:py-3.5
                    rounded-full
                    font-semibold
                    hover:border-mint-500
                    hover:text-mint-700
                    hover:shadow-[0_12px_30px_-12px_rgba(16,21,15,0.25)]
                    transition-all
                    duration-300
                    text-sm
                    sm:text-base
                  "
                >

                  {/* ICON */}

                  <span
                    className="
                      flex
                      items-center
                      justify-center
                      w-7
                      h-7
                      rounded-full
                      bg-mint-50
                      text-mint-600
                      group-hover:bg-mint-600
                      group-hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    <ExternalLink
                      className="
                        w-3.5
                        h-3.5
                        sm:w-4
                        sm:h-4
                        transition-transform
                        duration-300
                        group-hover:rotate-12
                      "
                    />
                  </span>

                  <span>
                    View Portfolio
                  </span>

                  <ArrowRight
                    className="
                      w-4
                      h-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                </a>

              </div>

            </Reveal>

          </div>

          {/* =================================================
              RIGHT SIDE CAROUSEL
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              relative
              w-full
              max-w-md
              sm:max-w-lg
              md:max-w-xl
              lg:max-w-none
              mx-auto
              min-w-0
            "
          >

            <div
              className="
                relative
                w-full
                mx-auto
              "
            >

              <Swiper
                modules={[
                  Navigation,
                  Pagination,
                  Autoplay,
                ]}
                slidesPerView={1}
                loop
                speed={700}
                spaceBetween={20}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  prevEl: ".hero-prev",
                  nextEl: ".hero-next",
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                className="
                  rounded-2xl
                  sm:rounded-[28px]
                  overflow-hidden
                "
              >

                {HERO_IMAGES.map((slide) => (
                  <SwiperSlide key={slide.id}>

                    <div
                      className="
                        relative
                        w-full
                        aspect-[16/10]
                        sm:aspect-[16/9]
                        overflow-hidden
                        rounded-2xl
                        sm:rounded-[28px]
                        shadow-xl
                        bg-gray-100
                      "
                    >

                      <img
                        src={slide.image}
                        alt={slide.title}
                        loading="lazy"
                        className="
                          absolute
                          inset-0
                          w-full
                          h-full
                          object-cover
                          transition-transform
                          duration-700
                          hover:scale-105
                        "
                      />

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-black/70
                          via-black/20
                          to-transparent
                        "
                      />

                      <div
                        className="
                          absolute
                          bottom-3
                          left-3
                          right-12
                          sm:bottom-6
                          sm:left-6
                          sm:right-16
                          text-white
                          text-left
                        "
                      >

                        <h3
                          className="
                            text-sm
                            sm:text-2xl
                            lg:text-3xl
                            font-bold
                            leading-tight
                          "
                        >
                          {slide.title}
                        </h3>

                        <p
                          className="
                            mt-1
                            text-[10px]
                            sm:text-sm
                            lg:text-base
                            text-white/90
                            line-clamp-2
                          "
                        >
                          {slide.subtitle}
                        </p>

                      </div>

                    </div>

                  </SwiperSlide>
                ))}

              </Swiper>

              {/* PREVIOUS */}

              <button
                aria-label="Previous slide"
                className="
                  hero-prev
                  absolute
                  left-2
                  sm:left-4
                  top-1/2
                  -translate-y-1/2
                  z-20
                  w-8
                  h-8
                  sm:w-12
                  sm:h-12
                  rounded-full
                  bg-white/90
                  backdrop-blur
                  shadow-lg
                  flex
                  items-center
                  justify-center
                  hover:bg-mint-500
                  hover:text-white
                  transition
                "
              >
                <ChevronLeft
                  size={18}
                  className="sm:w-5 sm:h-5"
                />
              </button>

              {/* NEXT */}

              <button
                aria-label="Next slide"
                className="
                  hero-next
                  absolute
                  right-2
                  sm:right-4
                  top-1/2
                  -translate-y-1/2
                  z-20
                  w-8
                  h-8
                  sm:w-12
                  sm:h-12
                  rounded-full
                  bg-white/90
                  backdrop-blur
                  shadow-lg
                  flex
                  items-center
                  justify-center
                  hover:bg-mint-500
                  hover:text-white
                  transition
                "
              >
                <ChevronRight
                  size={18}
                  className="sm:w-5 sm:h-5"
                />
              </button>

            </div>
          </motion.div>

        </div>

        {/* =====================================================
            STATS
        ===================================================== */}

        <Reveal delay={0.42}>

          <motion.div
            className="
              mt-10
              sm:mt-14
              lg:mt-16
              grid
              grid-cols-2
              sm:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-7
              gap-3
              sm:gap-4
              lg:gap-5
              w-full
            "
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >

            {heroStats.map((stat, idx) => (

              <motion.div
                key={idx}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 50,
                    scale: 0.8,
                    rotate:
                      idx % 2 === 0 ? -6 : 6,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                    transition: {
                      type: "spring",
                      stiffness: 120,
                      damping: 12,
                    },
                  },
                }}
                whileHover={{
                  y: -8,
                  scale: 1.04,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  },
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  relative
                  bg-white
                  border
                  border-gray-200
                  rounded-2xl
                  p-3
                  sm:p-4
                  lg:p-5
                  w-full
                  min-w-0
                  overflow-hidden
                  hover:shadow-[0_20px_40px_-22px_rgba(16,21,15,0.25)]
                  hover:border-mint-500
                  transition-all
                  duration-300
                  group
                  text-center
                  sm:text-left
                "
              >

                {/* BACKGROUND */}

                <motion.div
                  className="
                    absolute
                    -right-3
                    -bottom-3
                    w-10
                    h-10
                    sm:w-12
                    sm:h-12
                    rounded-xl
                    rotate-[20deg]
                    bg-mint-50
                  "
                  initial={{
                    scale: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    scale: [0, 1.3, 0.9, 1],
                    opacity: [0, 0.4, 0.7, 1],
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.35 + idx * 0.12,
                  }}
                />

                {/* IMAGE */}

                <motion.div
                  className="
                    relative
                    w-12
                    h-12
                    sm:w-16
                    sm:h-16
                    lg:w-20
                    lg:h-20
                    xl:w-24
                    xl:h-24
                    rounded-full
                    flex
                    items-center
                    justify-center
                    mb-3
                    z-10
                    shadow-sm
                    mx-auto
                    sm:mx-0
                  "
                  initial={{
                    scale: 0,
                    rotate: -180,
                    opacity: 0,
                  }}
                  whileInView={{
                    scale: [0, 1.2, 0.9, 1],
                    rotate: [-180, 20, -10, 0],
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.9,
                    delay: 0.45 + idx * 0.12,
                    type: "spring",
                    stiffness: 180,
                  }}
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                  }}
                >

                  <img
                    src={statImages[idx]}
                    alt={stat.label}
                    className="
                      w-full
                      h-full
                      object-cover
                      rounded-full
                    "
                  />

                  <motion.span
                    className="
                      absolute
                      right-0
                      bottom-0
                      w-2
                      h-2
                      sm:w-2.5
                      sm:h-2.5
                      rounded-full
                      bg-white
                      border
                      border-gray-200
                    "
                    animate={{
                      scale: [1, 1.4, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: idx * 0.2,
                    }}
                  />

                </motion.div>

                {/* NUMBER */}

                <motion.div
                  className="
                    relative
                    z-10
                    font-display
                    font-semibold
                    text-xl
                    sm:text-2xl
                    lg:text-3xl
                    leading-none
                    text-charcoal
                    whitespace-nowrap
                  "
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    delay={idx * 150}
                  />
                </motion.div>

                {/* LABEL */}

                <motion.div
                  className="
                    relative
                    z-10
                    text-[8px]
                    sm:text-[10px]
                    lg:text-[11px]
                    font-bold
                    tracking-widest
                    uppercase
                    text-charcoal-light
                    mt-1.5
                    leading-snug
                    min-h-[26px]
                  "
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.7 + idx * 0.12,
                  }}
                >
                  {stat.label}
                </motion.div>

                {/* SHINE */}

                <motion.div
                  className="
                    absolute
                    inset-0
                    pointer-events-none
                    bg-gradient-to-r
                    from-transparent
                    via-white/40
                    to-transparent
                    -translate-x-full
                  "
                  whileInView={{
                    x: ["-100%", "200%"],
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: 1 + idx * 0.15,
                  }}
                />

              </motion.div>

            ))}

          </motion.div>

        </Reveal>

      </div>
    </section>
  );
}