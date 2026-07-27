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
      className="relative overflow-hidden bg-white pt-28 lg:pt-36 pb-16"
    >
      {/* Soft Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-mint-50 via-white to-white" />

      <div
        className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-mint-100 blur-[120px] opacity-50"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* LEFT */}

          <div className="text-center lg:text-left">

            <Reveal>
              <span className="inline-block text-mint-600 font-semibold tracking-wide uppercase text-sm">
                Hi, I'm
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-3 font-display font-black uppercase leading-[0.9] tracking-tight text-charcoal text-[56px] sm:text-7xl lg:text-[88px]">
                Editor
                <br />
                Bhai
              </h1>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-6 text-xl font-semibold text-mint-700">
                {PROFILE.title}
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-[17px] leading-8 text-charcoal-light">
                I help creators, brands, astrologers and podcasters transform
                raw footage into engaging content that increases watch time,
                boosts audience retention and grows their online presence.
              </p>
            </Reveal>

            <Reveal
              delay={0.34}
              className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-4"
            >
              <a
                href={PROFILE.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-charcoal text-white font-semibold px-7 py-4 rounded-full hover:bg-mint-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Chat on WhatsApp

                <ArrowRight className="w-5 h-5" />
              </a>

              <button
                onClick={scrollToPortfolio}
                className="inline-flex items-center justify-center gap-2 border border-gray-300 text-charcoal px-7 py-4 rounded-full font-semibold hover:border-mint-500 hover:text-mint-600 transition-all"
              >
                <Play className="w-4 h-4" />

                View Portfolio
              </button>
            </Reveal>

            <Reveal delay={0.42}>
              <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-10">

                <div>
                  <h3 className="text-3xl font-bold text-charcoal">
                    100+
                  </h3>

                  <p className="text-sm text-charcoal-light">
                    Happy Clients
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-charcoal">
                    250M+
                  </h3>

                  <p className="text-sm text-charcoal-light">
                    Views Generated
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-charcoal">
                    500+
                  </h3>

                  <p className="text-sm text-charcoal-light">
                    Projects Delivered
                  </p>
                </div>

              </div>
            </Reveal>

          </div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >
            <SimpleCarousel />
          </motion.div>

        </div>

      </div>
    </section>
  );
}