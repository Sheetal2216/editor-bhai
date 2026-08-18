import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import {
  ArrowRight, Play, Globe, MapPin, Users, CheckCircle2,
  TrendingUp, Award, Trophy, ChevronLeft, ChevronRight
} from "lucide-react";
import Reveal from "./Reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PROFILE, HERO_IMAGES } from "../data";

const heroStats = [
  { value: "150", suffix: "+", icon: Users, label: "Clients Served" },
  { value: "1.5", suffix: "B+", icon: Play, label: "Views Generated" },
  { value: "500", suffix: "+", icon: CheckCircle2, label: "Projects Delivered" },
  { value: "50", suffix: "+", icon: TrendingUp, label: "Channels Built From Zero to Millions" },
  { value: "40", suffix: "+", icon: Award, label: "YouTube Silver Buttons" },
  { value: "5", suffix: "", icon: Trophy, label: "YouTube Gold Buttons" },
  { value: "5", suffix: "B+", icon: Globe, label: "Reach Across All Platforms" }
];

/* =========================================================
   PERFORMANT ANIMATED COUNTER (No Re-renders)
========================================================= */
const AnimatedCounter = ({ value, suffix, delay = 0 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Number.isInteger(parseFloat(value)) ? Math.floor(latest) : latest.toFixed(1)
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
      initial={{ opacity: 0, scale: 0.4, y: 15 }}
      whileInView={{ opacity: 1, scale: [0.4, 1.3, 0.9, 1], y: [15, -8, 3, 0] }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: delay / 1000, ease: "easeOut" }}
      className="inline-block"
    >
      <motion.span>{rounded}</motion.span>
      <span className="text-lg">{suffix}</span>
    </motion.span>
  );
};

/* =========================================================
   HERO
========================================================= */
export default function Hero() {
  const scrollToPortfolio = () => {
    document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative overflow-hidden bg-[#F6F7F1] pt-24 sm:pt-28 lg:pt-20 pb-10 sm:pb-16">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-mint-50 via-[#F6F7F1] to-[#F6F7F1]" />
      <div
        className="absolute top-0 right-0 w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[450px] lg:h-[450px] rounded-full bg-mint-100 blur-[100px] opacity-50"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">
          
          {/* LEFT COLUMN */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0 w-full overflow-hidden">
            <Reveal>
              <span className="inline-block text-mint-600 font-semibold tracking-wide uppercase text-sm sm:text-base">
                We are
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-3 flex flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8">
                <h1 className="font-display font-black uppercase leading-[0.9] tracking-tight text-charcoal text-[42px] sm:text-6xl md:text-7xl lg:text-[88px]">
                  Editor<br />Bhai
                </h1>
                <motion.video
                  autoPlay loop muted playsInline
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-[140px] sm:w-[180px] md:w-[240px] lg:w-[300px] shrink-0 pointer-events-none z-20 mix-blend-multiply object-contain"
                >
                  <source src="/images/herOo.mp4" type="video/mp4" />
                </motion.video>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-5 text-lg sm:text-xl font-semibold text-mint-700">
                {PROFILE.title}
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <p className="mt-5 text-base sm:text-lg leading-7 sm:leading-8 text-charcoal-light">
                We've worked with top astrologers, creators, brands, and podcasters turning raw footage into scroll-stopping content that skyrockets watch time, maximizes audience retention, and builds a powerful online presence.
              </p>
            </Reveal>

            {/* LOCATION SECTION */}
            <Reveal delay={0.30}>
              <div className="mt-5 flex flex-col gap-2.5 sm:gap-3 text-left">
                <div className="flex flex-wrap items-center gap-2 justify-center lg:justify-start">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-charcoal uppercase tracking-wide mr-1">
                    <Globe className="w-3.5 h-3.5 text-mint-600" />
                    International Clientele:
                  </span>
                  {["France", "Canada", "Oman", "Abu Dhabi", "Dubai"].map((loc) => (
                    <span key={loc} className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-mint-50 text-mint-700 border border-mint-200">
                      {loc}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2 justify-center lg:justify-start">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-charcoal uppercase tracking-wide mr-1">
                    <MapPin className="w-3.5 h-3.5 text-mint-600" />
                    India:
                  </span>
                  {["Noida", "Bangalore", "Mumbai", "West Bengal"].map((loc) => (
                    <span key={loc} className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-gray-50 text-charcoal-light border border-gray-200">
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* BUTTONS */}
            <Reveal delay={0.34} className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center lg:items-start">
              <a
                href={PROFILE.whatsappLink} target="_blank" rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-charcoal text-white font-semibold px-6 py-3.5 rounded-full hover:bg-mint-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Chat on WhatsApp <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://abisek951.portfolial.com/" target="_blank" rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gray-300 text-charcoal px-6 py-3.5 rounded-full font-semibold hover:border-mint-500 hover:text-mint-600 transition-all"
              >
                <Play className="w-4 h-4" /> View Portfolio
              </a>
            </Reveal>
          </div>

          {/* RIGHT COLUMN - CAROUSEL */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none mx-auto w-full"
          >
            <div className="relative w-full max-w-xl lg:max-w-3xl mx-auto">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1} loop speed={700} spaceBetween={20}
                autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                navigation={{ prevEl: ".hero-prev", nextEl: ".hero-next" }}
                pagination={{ clickable: true, dynamicBullets: true }}
                className="rounded-2xl sm:rounded-[28px]"
              >
                {HERO_IMAGES.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl sm:rounded-[28px] shadow-xl bg-gray-100">
                      <img
                        src={slide.image} alt={slide.title} loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-16 text-white text-left">
                        <h3 className="text-base xs:text-lg sm:text-2xl lg:text-3xl font-bold leading-tight break-words">
                          {slide.title}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm lg:text-base text-white/90 line-clamp-2">
                          {slide.subtitle}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button aria-label="Previous slide" className="hero-prev absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur shadow-lg flex items-center justify-center hover:bg-mint-500 hover:text-white transition">
                <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
              </button>
              <button aria-label="Next slide" className="hero-next absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur shadow-lg flex items-center justify-center hover:bg-mint-500 hover:text-white transition">
                <ChevronRight size={18} className="sm:w-5 sm:h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM FULL-WIDTH ROW - STATS CARDS */}
      <Reveal delay={0.42}>
  <motion.div
    className="mt-16 sm:mt-20 flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.25 }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.12 } }
    }}
  >
    {heroStats.map((stat, idx) => {
      
      // Array mapping exact file names from your screenshot to avoid the "stats=3.png" typo issue
    const statImages = [
  "/images/stats-1.png",
  "/images/stats-2.png",
  "/images/stats-3.png",
  "/images/stats-4.png",
  "/images/stats-5.png",
  "/images/stats-6.png",
  "/images/stats-7.png"
];

      return (
        <motion.div
          key={idx}
          variants={{
            hidden: { opacity: 0, y: 70, scale: 0.7, rotate: idx % 2 === 0 ? -8 : 8 },
            visible: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 120, damping: 12, mass: 0.8 } }
          }}
          whileHover={{
            y: -12, scale: 1.06, rotate: idx % 2 === 0 ? 1.5 : -1.5,
            transition: { type: "spring", stiffness: 300, damping: 15 }
          }}
          whileTap={{ scale: 0.94, rotate: 0 }}
          className="relative bg-white border border-gray-200 rounded-2xl p-[16px_12px_18px] min-w-[130px] max-w-[150px] shrink-0 snap-start overflow-hidden hover:shadow-[0_20px_40px_-22px_rgba(16,21,15,0.25)] hover:border-mint-500 transition-all duration-300 group text-left"
        >
          {/* ANIMATED BACKGROUND SHAPE */}
          <motion.div
            className="absolute -right-3 -bottom-3 w-[44px] h-[44px] rounded-xl rotate-[20deg] z-0 bg-mint-50"
            initial={{ scale: 0, rotate: 20, opacity: 0 }}
            whileInView={{ scale: [0, 1.3, 0.9, 1], rotate: [20, 45, 10, 20], opacity: [0, 0.4, 0.7, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.35 + idx * 0.12, ease: "easeOut" }}
          />

          {/* IMAGE REPLACEMENT */}
      <motion.div
  className="relative w-30 h-30 rounded-full flex items-center justify-center mb-3 z-10 shadow-sm"
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            whileInView={{ scale: [0, 1.3, 0.9, 1], rotate: [-180, 20, -10, 0], opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.45 + idx * 0.12, type: "spring", stiffness: 180 }}
            whileHover={{ rotate: 360, scale: 1.15, transition: { duration: 0.6 } }}
          >
            {/* The image tag using the exact array mapping */}
            <img 
              src={statImages[idx]} 
              alt={stat.label || `Stat icon ${idx + 1}`} 
              className="w-full h-full object-cover rounded-full"
            />
            
            <motion.span
              className="absolute -right-0.5 -bottom-0.5 w-2.5 h-2.5 rounded-full bg-white border border-gray-200 z-20"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.2 }}
            />
          </motion.div>

          {/* NUMBER */}
          <motion.div className="relative z-10 font-display font-semibold text-2xl leading-none text-charcoal whitespace-nowrap">
            <AnimatedCounter value={stat.value} suffix={stat.suffix} delay={idx * 150} />
          </motion.div>

          {/* LABEL */}
          <motion.div
            className="relative z-10 text-[10px] font-bold tracking-widest uppercase text-charcoal-light mt-1.5 leading-snug"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 + idx * 0.12, ease: "easeOut" }}
          >
            {stat.label}
          </motion.div>

          {/* SHINE EFFECT */}
          <motion.div
            className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full"
            whileInView={{ x: ["-100%", "200%"] }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 1 + idx * 0.15, ease: "easeInOut" }}
          />
        </motion.div>
      );
    })}
  </motion.div>
</Reveal>
      </div>
    </section>
  );
}