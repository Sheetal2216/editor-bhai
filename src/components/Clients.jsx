import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import WorldMap from "./WorldMap";
import { PREMIUM_CLIENTS, OTHER_BRANDS } from "../data";

export default function Clients() {
  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <div className="max-w-xl mx-auto md:mx-0 w-full">
            <Reveal className="flex items-center justify-center md:justify-start gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-mint-600 mb-3">
              <span className="w-8 h-px bg-mint-500 shrink-0" />
              Clients
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="text-center md:text-left font-display font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight break-words">
                Trusted Worldwide
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-4 sm:mt-5 text-center md:text-left text-sm sm:text-base lg:text-lg text-charcoal-light leading-7 sm:leading-8">
                From India's leading astrologers to podcasters, educators and
                digital creators, Editor Bhai helps creators build content that
                keeps audiences engaged.
              </p>
            </Reveal>

            {/* CLIENT CARDS */}
           <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
              {PREMIUM_CLIENTS.map((c, i) => (
                <Reveal key={c.name} delay={0.1 + i * 0.05}>
                  <motion.div
                    whileHover={{
                      y: -6,
                    }}
                    whileTap={{ y: -2 }}
                    className="group relative overflow-hidden rounded-2xl border border-mint-100 bg-white p-4 sm:p-5 shadow-sm transition-all duration-300 hover:border-mint-400 hover:shadow-lg h-full"
                  >
                    <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-mint-100 transition-colors group-hover:bg-mint-200" />

                    <div className="relative">
                      <span className="mb-3 sm:mb-4 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-mint-500 text-xs sm:text-sm font-bold text-white shrink-0">
                        {c.name.charAt(0)}
                      </span>

                      <h3 className="font-semibold text-charcoal text-sm sm:text-base break-words">
                        {c.name}
                      </h3>

                      <p className="mt-1 text-xs sm:text-sm text-charcoal-soft break-words">
                        {c.country} • {c.category}
                      </p>

                      <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-semibold text-mint-600 break-words">
                        {c.stat}
                      </p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            {/* MARQUEE */}
            <Reveal
              delay={0.2}
              className="mt-8 sm:mt-10 flex items-center justify-center md:justify-start gap-2 text-xs font-semibold uppercase tracking-widest text-charcoal-soft"
            >
              <Sparkles className="h-4 w-4 text-mint-500 shrink-0" />
              Also Worked With
            </Reveal>

            <Reveal
              delay={0.24}
              className="mt-4 sm:mt-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
            >
              <div className="flex w-max gap-2 sm:gap-3 animate-marquee">
                {[...OTHER_BRANDS, ...OTHER_BRANDS].map((brand, index) => (
                  <span
                    key={index}
                    className="shrink-0 whitespace-nowrap rounded-full border border-mint-100 bg-mint-50 px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium text-charcoal-light"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* RIGHT */}
          <Reveal delay={0.15} y={40}>
            <div className="max-w-xl mx-auto w-full">
              <div className="mb-4 sm:mb-5 flex items-center justify-center md:justify-start gap-2 text-xs font-semibold uppercase tracking-widest text-mint-600">
                <MapPin className="h-4 w-4 shrink-0" />
                Global Footprint
              </div>

              <div className="w-full overflow-hidden rounded-2xl">
                <WorldMap />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}