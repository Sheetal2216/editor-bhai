import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Reveal from "./Reveal";
import SimpleCarousel from "./SimpleCarousel";
import { PROFILE } from "../data";

export default function Hero() {
  const scrollToPortfolio = () => {
    document
      .querySelector("#portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-24 sm:pt-28 lg:pt-36 pb-12 sm:pb-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-mint-50 via-white to-white" />

      <div
        className="absolute top-0 right-0
        w-[240px] h-[240px]
        sm:w-[320px] sm:h-[320px]
        lg:w-[450px] lg:h-[450px]
        rounded-full bg-mint-100 blur-[100px] opacity-50"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">
          {/* LEFT */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <Reveal>
              <span className="inline-block text-mint-600 font-semibold tracking-wide uppercase text-sm sm:text-base">
                Hi, I'm
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              {/* Flex container to keep text and graphic aligned side-by-side */}
              <div className="mt-3 flex flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8">
                <h1 className="font-display font-black uppercase leading-[0.9] tracking-tight text-charcoal text-[42px] sm:text-6xl md:text-7xl lg:text-[88px]">
                  Editor
                  <br />
                  Bhai
                </h1>

                {/* Floating Video/GIF with mix-blend-multiply applied */}
                <motion.video
                  autoPlay
                  loop
                  muted
                  playsInline
                  animate={{
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    w-[140px] sm:w-[180px] md:w-[240px] lg:w-[300px] 
                    shrink-0 pointer-events-none z-20 
                    mix-blend-multiply object-contain
                  "
                >
                  <source
                    src="/images/Create_a_seamless_looping_anim (1).mp4"
                    type="video/mp4"
                  />
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
                I help creators, brands, astrologers and podcasters transform
                raw footage into engaging content that increases watch time,
                boosts audience retention and grows their online presence.
              </p>
            </Reveal>

            <Reveal
              delay={0.34}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center lg:items-start"
            >
              <a
                href={PROFILE.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-charcoal text-white font-semibold px-6 py-3.5 rounded-full hover:bg-mint-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Chat on WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>

              <button
                onClick={scrollToPortfolio}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gray-300 text-charcoal px-6 py-3.5 rounded-full font-semibold hover:border-mint-500 hover:text-mint-600 transition-all"
              >
                <Play className="w-4 h-4" />
                View Portfolio
              </button>
            </Reveal>

            <Reveal delay={0.42}>
              <div className="mt-10 grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:justify-center lg:justify-start sm:gap-10">
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-charcoal">
                    100+
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-light">
                    Happy Clients
                  </p>
                </div>

                <div className="text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-charcoal">
                    250M+
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-light">
                    Views Generated
                  </p>
                </div>

                <div className="text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-charcoal">
                    500+
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-light">
                    Projects Delivered
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none mx-auto w-full"
          >
            <SimpleCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}