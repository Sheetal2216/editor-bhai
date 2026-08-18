import { motion } from "framer-motion";
import { Film, Sparkles, Palette, Image, Camera, TrendingUp, Code2, Target, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { SERVICES } from "../data";

const ICONS = { film: Film, sparkles: Sparkles, palette: Palette, image: Image, camera: Camera, trend: TrendingUp, code: Code2, target: Target };

// ---------------------------------------------------------------------
// Service images extracted from the provided folder screenshot
// ---------------------------------------------------------------------
const SERVICE_IMAGES = [
  "/images/video-editing.png",
  "/images/motion-graphics.png",
  "/images/color-grading.png",
  "/images/thumbnail-design.png",
  "/images/shoot.png",
  "/images/digital-marketing.png",
  "/images/web-development.png",
  "/images/seo.png"
];

export default function Services() {
  return (
    <section id="services" className="relative py-14 md:py-20 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-mint-100 blur-3xl translate-x-1/3 -translate-y-1/3" aria-hidden="true" />
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">

        {/* TOP CONTENT BLOCK */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <Reveal className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-mint-600 mb-4">
            <span className="w-6 h-px bg-mint-500" />
            What We Do
            <span className="w-6 h-px bg-mint-500" />
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="font-display font-black text-charcoal leading-tight text-4xl lg:text-5xl mb-6">
              We help creators <br />
              <span className="text-mint-600">stand out</span> and grow
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-charcoal-light text-lg leading-relaxed">
              Editor Bhai works with creators, astrologers and podcasters to
              sharpen their visual presence, build content systems that
              compound, and turn raw footage into results. From strategy to
              delivery, we handle every step.
            </p>
          </Reveal>
        </div>

        {/* CAPABILITIES HEADER */}
        <div className="flex flex-col items-center text-center mb-10">
          <Reveal className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-mint-600 mb-3">
            <span className="w-6 h-px bg-mint-500" />
            Capabilities
            <span className="w-6 h-px bg-mint-500" />
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal">
              Our <span className="text-mint-600">Toolkit</span>
            </h2>
          </Reveal>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = ICONS[service.icon];
            const bgImage = SERVICE_IMAGES[index % SERVICE_IMAGES.length];

            return (
              <Reveal key={service.title} delay={(index % 6) * 0.07}>
                <motion.div
                  whileHover={{ rotate: index % 2 === 0 ? 0.5 : -0.5, scale: 1.01, y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative h-[340px] sm:h-[380px] flex flex-col justify-end overflow-hidden rounded-2xl border border-mint-100 shadow-sm hover:shadow-xl hover:shadow-mint-200/60 transition-shadow duration-500 bg-mint-900"
                >
                  {/* Background Image Layer */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
                    style={{ backgroundImage: `url('${bgImage}')` }}
                  />

                  {/* Mint-tinted Vignette Overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-mint-950 via-mint-900/60 to-transparent z-10 transition-all duration-500 group-hover:via-mint-900/40" />

                  {/* Large watermark icon */}
                  {Icon && (
                    <Icon
                      className="absolute -right-6 -top-6 w-40 h-40 text-white/10 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6 z-10 mix-blend-overlay"
                      strokeWidth={1.2}
                    />
                  )}

                  {/* Service ID */}
                  <span className="absolute top-6 left-7 text-4xl font-display font-black text-white/30 z-20 group-hover:text-white/50 transition-colors drop-shadow-md">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon badge */}
                  {Icon && (
                    <div className="absolute top-6 right-6 z-20 w-10 h-10 rounded-xl bg-mint-500/80 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-mint-400 transition-colors duration-300 shadow-lg">
                      <Icon className="w-5 h-5" strokeWidth={1.7} />
                    </div>
                  )}

                  {/* Card content */}
                  <div className="relative z-20 p-7 transform translate-y-3 group-hover:translate-y-0 transition-transform">
                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white mb-2 leading-none drop-shadow-md">
                      {service.title}
                    </h3>
                    <p className="text-mint-50 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 drop-shadow-sm">
                      {service.desc}
                      <ArrowUpRight className="w-4 h-4 shrink-0" />
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}