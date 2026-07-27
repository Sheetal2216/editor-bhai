import { motion } from "framer-motion";
import { CheckCircle2, Award } from "lucide-react";
import Reveal from "./Reveal";
import {
  PROFILE,
  ABOUT_TIMELINE,
  ABOUT_HIGHLIGHTS,
} from "../data";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 lg:py-28 bg-white overflow-hidden"
    >
      {/* Background Glow */}

      <div
        className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-mint-100 blur-[140px] opacity-40"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* IMAGE */}

          <Reveal
            className="lg:col-span-5 relative"
            y={40}
          >

            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-mint-100">

            <img
  src="/images/about-1.jpeg"
  alt={PROFILE.realName}
  className="w-full h-[520px] md:h-[600px] lg:h-[650px] object-cover object-center transition-transform duration-700 hover:scale-105"
/>

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl border border-white/40 p-5">

                <p className="font-display font-bold text-xl text-white">
                  {PROFILE.realName}
                </p>

                <p className="text-sm text-white/90 mt-1">
                  {PROFILE.title}
                </p>

              </div>

            </div>

            {/* Floating Achievement Card */}

            <motion.div
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              transition={{
                duration: 0.25,
              }}
              className="absolute -bottom-6 right-6 bg-white rounded-2xl shadow-xl border border-mint-100 px-5 py-4 flex items-center gap-4"
            >

              <span className="w-12 h-12 rounded-full bg-mint-500 text-white flex items-center justify-center">
                <Award className="w-6 h-6" />
              </span>

              <div>

                <p className="font-display font-bold text-charcoal">
                  5 Gold Buttons
                </p>

                <p className="text-xs text-charcoal-soft">
                  +15 Silver Play Buttons
                </p>

              </div>

            </motion.div>

          </Reveal>

          {/* CONTENT */}

          <div className="lg:col-span-7">

            <Reveal>

              <div className="flex items-center gap-3 mb-5">

                <span className="w-10 h-[2px] bg-mint-500" />

                <span className="uppercase tracking-[0.25em] text-sm font-semibold text-mint-600">
                  About Me
                </span>

              </div>

            </Reveal>

            <Reveal delay={0.08}>

              <h2 className="font-display font-black text-charcoal leading-tight text-4xl lg:text-5xl">

                Editing that gets creators
                <br />
                noticed & remembered.

              </h2>

            </Reveal>

            <Reveal delay={0.15}>

              <p className="mt-7 text-charcoal-light leading-8 text-lg">

                I'm <strong>{PROFILE.realName}</strong>, better known as{" "}
                <strong>{PROFILE.name}</strong>.

                I help creators, astrologers, spiritual leaders and podcasters
                transform raw footage into engaging content that drives
                retention, increases watch time and builds long-term audience
                growth.

              </p>

            </Reveal>

            <Reveal delay={0.22}>

              <p className="mt-5 text-charcoal-light leading-8 text-lg">

                Over the years I've collaborated with clients across{" "}
                {PROFILE.locations.join(", ")} while contributing towards
                channels that have collectively generated billions of views,
                multiple YouTube Play Buttons and millions of loyal followers.

              </p>

            </Reveal>

            {/* Highlights */}

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {ABOUT_HIGHLIGHTS.map((item, index) => (

                <Reveal
                  key={item}
                  delay={0.1 + index * 0.05}
                >

                  <div className="flex items-start gap-3">

                    <CheckCircle2 className="w-5 h-5 text-mint-500 mt-1 shrink-0" />

                    <p className="text-charcoal-light leading-7">
                      {item}
                    </p>

                  </div>

                </Reveal>

              ))}

            </div>

            {/* Timeline starts here */}
                        <div className="grid md:grid-cols-3 gap-5 mt-12">

              {ABOUT_TIMELINE.map((item, index) => (

                <Reveal
                  key={item.title}
                  delay={0.15 + index * 0.08}
                >

                  <motion.div
                    whileHover={{
                      y: -6,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="h-full rounded-3xl border border-mint-100 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                  >

                    <span className="inline-flex items-center rounded-full bg-mint-100 text-mint-700 text-xs font-semibold px-3 py-1">
                      {item.year}
                    </span>

                    <h3 className="mt-5 font-display font-bold text-xl text-charcoal">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-charcoal-light leading-7">
                      {item.desc}
                    </p>

                  </motion.div>

                </Reveal>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}