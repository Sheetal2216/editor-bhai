import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import {
  ArrowRight, Play, Globe, MapPin, Users, CheckCircle2, TrendingUp, Award, Trophy, ChevronLeft, ChevronRight, MessageCircle, ExternalLink,
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
  { value: "150", suffix: "+", icon: Users, label: "Clients Served" },
  { value: "1.5", suffix: "B+", icon: Play, label: "Views Generated" },
  { value: "500", suffix: "+", icon: CheckCircle2, label: "Projects Delivered" },
  { value: "50", suffix: "+", icon: TrendingUp, label: "Channels Built From Zero to Millions" },
  { value: "40", suffix: "+", icon: Award, label: "YouTube Silver Buttons" },
  { value: "5", suffix: "", icon: Trophy, label: "YouTube Gold Buttons" },
  { value: "5", suffix: "B+", icon: Globe, label: "Reach Across All Platforms" },
];

const statImages = [
  "/images/stats-1.png", "/images/stats-2.png", "/images/stats-3.png", "/images/stats-4.png",
  "/images/stats-5.png", "/images/stats-6.png", "/images/stats-7.png",
];

/* =========================================================
   ANIMATED COUNTER
========================================================= */
const AnimatedCounter = ({ value, suffix, delay = 0 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Number.isInteger(parseFloat(value)) ? Math.floor(latest) : latest.toFixed(1));

  useEffect(() => {
    const controls = animate(count, parseFloat(value), { duration: 1.8, delay: delay / 1000, ease: "easeOut" });
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
      <span className="text-sm sm:text-lg">{suffix}</span>
    </motion.span>
  );
};

/* =========================================================
   HERO
========================================================= */
export default function Hero() {
  // Preloader Delay (3.6s) applied globally to all animations
  const D = 6;

  return (
    <section id="home" className="relative overflow-hidden bg-[#F6F7F1] pt-20 sm:pt-24 lg:pt-16 pb-10 sm:pb-14 lg:pb-16">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-mint-50 via-[#F6F7F1] to-[#F6F7F1]" />
      <div className="absolute top-0 right-0 w-[180px] h-[180px] sm:w-[320px] sm:h-[320px] lg:w-[450px] lg:h-[450px] rounded-full bg-mint-100 blur-[90px] opacity-40" aria-hidden="true" />

      {/* CONTAINER */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        
        {/* MAIN HERO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 sm:gap-12 lg:gap-14 xl:gap-20 items-center">
          
          {/* LEFT COLUMN */}
          <div className="w-full max-w-2xl mx-auto lg:mx-0 text-center lg:text-left min-w-0">
            
           {/* WE ARE */}
            <Reveal delay={D}>
              <div className="w-fit mx-auto lg:mx-0 flex justify-center lg:justify-start">
                <span className="inline-block text-mint-600 font-semibold tracking-wide uppercase text-xs sm:text-sm lg:text-base mb-1 lg:mb-0">
                  We are
                </span>
              </div>
            </Reveal>

   {/* TITLE + LOGO */}
            <Reveal delay={D + 0.1}>
              <div className="-mt-1 sm:-mt-4 lg:-mt-6 flex items-center justify-center lg:justify-start gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 w-fit mx-auto lg:mx-0">
                <h1 className="font-display font-black uppercase leading-[0.86] tracking-tight text-charcoal text-left text-[42px] min-[390px]:text-[46px] min-[430px]:text-[50px] sm:text-6xl md:text-7xl lg:text-[72px] xl:text-[86px] shrink-0">
                  Editor<br />Bhai
                </h1>
                <motion.video
                  autoPlay loop muted playsInline
                  animate={{ scale: [1, 1.035, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="shrink-0 object-contain pointer-events-none z-20 w-[72px] h-[72px] min-[390px]:w-[84px] min-[390px]:h-[84px] min-[430px]:w-[92px] min-[430px]:h-[92px] sm:w-[125px] sm:h-[125px] md:w-[155px] md:h-[155px] lg:w-[185px] lg:h-[185px] xl:w-[225px] xl:h-[225px]"
                >
                  <source src="/images/herOo.mp4" type="video/mp4" />
                </motion.video>
              </div>
            </Reveal>

            {/* ROLE */}
            <Reveal delay={D + 0.18}>
              <p className="mt-4 sm:mt-5 text-base sm:text-xl font-semibold text-mint-700">{PROFILE.title}</p>
            </Reveal>

            {/* DESCRIPTION */}
            <Reveal delay={D + 0.26}>
              <p className="mt-4 sm:mt-5 text-sm sm:text-lg leading-6 sm:leading-8 text-charcoal-light max-w-xl mx-auto lg:mx-0">
                We've worked with Top creators, brands, trader, Astrologer and podcasters turning raw footage into scroll-stopping content that skyrockets watch time, maximizes audience retention, and builds a powerful online presence.
              </p>
            </Reveal>

            {/* LOCATIONS WITH POP ANIMATION */}
            <div className="mt-5 flex flex-col gap-2.5 text-left overflow-hidden">
              
              {/* INTERNATIONAL CLIENTS POP */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 15, delay: D + 0.4 }}
                className="flex flex-wrap items-center gap-1.5 sm:gap-2 justify-center lg:justify-start"
              >
                <span className="flex items-center gap-1.5 text-[9px] sm:text-xs font-bold text-charcoal uppercase tracking-wide mr-1">
                  <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-mint-600" />
                  International Clients:
                </span>
                {["France", "Canada", "Oman", "Abu Dhabi", "Dubai"].map((loc) => (
                  <span key={loc} className="px-2 sm:px-2.5 py-1 rounded-full text-[9px] sm:text-[11px] font-semibold bg-mint-50 text-mint-700 border border-mint-200 whitespace-nowrap">
                    {loc}
                  </span>
                ))}
              </motion.div>

              {/* INDIA CLIENTS POP */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 15, delay: D + 0.55 }}
                className="flex flex-wrap items-center gap-1.5 sm:gap-2 justify-center lg:justify-start"
              >
                <span className="flex items-center gap-1.5 text-[9px] sm:text-xs font-bold text-charcoal uppercase tracking-wide mr-1">
                  <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-mint-600" />
                  India:
                </span>
                {["Noida", "Bangalore", "Mumbai", "West Bengal"].map((loc) => (
                  <span key={loc} className="px-2 sm:px-2.5 py-1 rounded-full text-[9px] sm:text-[11px] font-semibold bg-gray-50 text-charcoal-light border border-gray-200 whitespace-nowrap">
                    {loc}
                  </span>
                ))}
              </motion.div>

            </div>

            {/* PREMIUM BUTTONS */}
            <Reveal delay={D + 0.65}>
              <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-center lg:justify-start">
                
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
                    gap-3.5
                    bg-gradient-to-r
                    from-mint-500
                    to-mint-600
                    text-white
                    font-bold
                    px-6
                    sm:px-8
                    py-3.5
                    sm:py-4
                    rounded-full
                    overflow-hidden
                    shadow-[0_8px_24px_rgba(47,125,79,0.35)]
                    hover:shadow-[0_12px_32px_rgba(47,125,79,0.55)]
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    text-sm
                    sm:text-base
                  "
                >
                  {/* SHINE SWEEP EFFECT */}
                  <span
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      -translate-x-full
                      bg-gradient-to-r
                      from-transparent
                      via-white/30
                      to-transparent
                      group-hover:translate-x-[200%]
                      transition-transform
                      duration-[1.2s]
                      ease-in-out
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
                      w-8
                      h-8
                      sm:w-9
                      sm:h-9
                      rounded-full
                      bg-white
                      text-mint-600
                      shadow-sm
                      group-hover:scale-110
                      transition-transform
                      duration-300
                    "
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>

                  {/* TEXT */}
                  <span className="relative z-10 tracking-wide">
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
                      group-hover:translate-x-1.5
                    "
                  />
                </a>

                {/* PORTFOLIO BUTTON */}
                <a href="https://abisek951.portfolial.com/" target="_blank" rel="noopener noreferrer" className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/70 backdrop-blur-sm border border-gray-300 text-charcoal px-5 sm:px-6 py-3 sm:py-3.5 rounded-full font-semibold hover:border-mint-500 hover:text-mint-700 hover:shadow-[0_12px_30px_-12px_rgba(16,21,15,0.25)] transition-all duration-300 text-sm sm:text-base">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-mint-50 text-mint-600 group-hover:bg-mint-600 group-hover:text-white transition-all duration-300">
                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:rotate-12" />
                  </span>
                  <span>View Portfolio</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>

          </div>

          {/* RIGHT SIDE CAROUSEL */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: D }} className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none mx-auto min-w-0">
            <div className="relative w-full mx-auto">
              <Swiper modules={[Navigation, Pagination, Autoplay]} slidesPerView={1} loop speed={700} spaceBetween={20} autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }} navigation={{ prevEl: ".hero-prev", nextEl: ".hero-next" }} pagination={{ clickable: true, dynamicBullets: true }} className="rounded-2xl sm:rounded-[28px] overflow-hidden">
                {HERO_IMAGES.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-2xl sm:rounded-[28px] shadow-xl bg-gray-100">
                      <img src={slide.image} alt={slide.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-12 sm:bottom-6 sm:left-6 sm:right-16 text-white text-left">
                        <h3 className="text-sm sm:text-2xl lg:text-3xl font-bold leading-tight">{slide.title}</h3>
                        <p className="mt-1 text-[10px] sm:text-sm lg:text-base text-white/90 line-clamp-2">{slide.subtitle}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button aria-label="Previous slide" className="hero-prev absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur shadow-lg flex items-center justify-center hover:bg-mint-500 hover:text-white transition"><ChevronLeft size={18} className="sm:w-5 sm:h-5" /></button>
              <button aria-label="Next slide" className="hero-next absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur shadow-lg flex items-center justify-center hover:bg-mint-500 hover:text-white transition"><ChevronRight size={18} className="sm:w-5 sm:h-5" /></button>
            </div>
          </motion.div>
        </div>

        {/* STATS */}
        <Reveal delay={D + 0.42}>
          <motion.div className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 sm:gap-4 lg:gap-5 w-full" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: D + 0.42 } } }}>
            {heroStats.map((stat, idx) => (
              <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 50, scale: 0.8, rotate: idx % 2 === 0 ? -6 : 6 }, visible: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 120, damping: 12 } } }} whileHover={{ y: -8, scale: 1.04, transition: { type: "spring", stiffness: 300, damping: 15 } }} whileTap={{ scale: 0.96 }} className="relative bg-white border border-gray-200 rounded-2xl p-3 sm:p-4 lg:p-5 w-full min-w-0 overflow-hidden hover:shadow-[0_20px_40px_-22px_rgba(16,21,15,0.25)] hover:border-mint-500 transition-all duration-300 group text-center sm:text-left">
                <motion.div className="absolute -right-3 -bottom-3 w-10 h-10 sm:w-12 sm:h-12 rounded-xl rotate-[20deg] bg-mint-50" initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: [0, 1.3, 0.9, 1], opacity: [0, 0.4, 0.7, 1] }} viewport={{ once: true }} transition={{ duration: 1, delay: D + 0.35 + idx * 0.12 }} />
                <motion.div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full flex items-center justify-center mb-3 z-10 shadow-sm mx-auto sm:mx-0" initial={{ scale: 0, rotate: -180, opacity: 0 }} whileInView={{ scale: [0, 1.2, 0.9, 1], rotate: [-180, 20, -10, 0], opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: D + 0.45 + idx * 0.12, type: "spring", stiffness: 180 }} whileHover={{ rotate: 360, scale: 1.1 }}>
                  <img src={statImages[idx]} alt={stat.label} className="w-full h-full object-cover rounded-full" />
                  <motion.span className="absolute right-0 bottom-0 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white border border-gray-200" animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: D + idx * 0.2 }} />
                </motion.div>
                <motion.div className="relative z-10 font-display font-semibold text-xl sm:text-2xl lg:text-3xl leading-none text-charcoal whitespace-nowrap">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} delay={(D * 1000) + idx * 150} />
                </motion.div>
                <motion.div className="relative z-10 text-[8px] sm:text-[10px] lg:text-[11px] font-bold tracking-widest uppercase text-charcoal-light mt-1.5 leading-snug min-h-[26px]" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: D + 0.7 + idx * 0.12 }}>
                  {stat.label}
                </motion.div>
                <motion.div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full" whileInView={{ x: ["-100%", "200%"] }} viewport={{ once: true }} transition={{ duration: 1.2, delay: D + 1 + idx * 0.15 }} />
              </motion.div>
            ))}
          </motion.div>
        </Reveal>

      </div>
    </section>
  );
}