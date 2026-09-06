import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { PROFILE } from "../data";

// ---------------------------------------------------------------------
// Second founder is a placeholder — swap in the real name, role, photo
// and blurb whenever you have them.
// ---------------------------------------------------------------------
const FOUNDERS = [
  {
    name: PROFILE.realName,
    role: `Founder · ${PROFILE.name}`,
    blurb: `Leads editing, strategy and client relationships day to day, working across ${PROFILE.locations.join(", ")}.`,
    image: "/images/founder.jpeg",
  },
  {
    name: "Rakhi Pandey",
    role: "Co-Founder",
    blurb: "Experienced in working with international clients, driving business growth, and building strong client relationships across global markets.",
    image: "/images/co-founder.jpeg",
  },
];

// ---------------------------------------------------------------------
// Swap in real photos via the `image` field whenever you have them —
// falls back to a colored initials avatar until then.
// ---------------------------------------------------------------------
const TEAM = [
  { name: "Gauri", role: "Video Editor" },
  { name: "Sunny Pal", role: "Video Editor" },
  { name: "Mahendra", role: "Video Editor" },
  { name: "Sheetal Pandey", role: "Web Development" },
  { name: "Saumya Mishra", role: "Social Media Manager" },
  { name: "Kunal", role: "Social Media Manager" },
  { name: "Diwakar Bhardwaj", role: "Graphic Designer" },
  { name: "Sanjana Singh", role: "Video Editor" },
  { name: "Saurabh Gupta", role: "Graphic Designer" },
  { name: "Muskan Sharma", role: "Researcher & Script Writer" },
  { name: "Prachi", role: "Researcher & Script Writer" },
];

const AVATAR_COLORS = [
  "bg-mint-500",
  "bg-mint-600",
  "bg-emerald-600",
  "bg-teal-600",
  "bg-mint-700",
];

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full bg-mint-100 blur-[140px] opacity-40"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* FOUNDERS */}
        <Reveal>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-[2px] bg-mint-500" />
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="font-display font-black text-charcoal leading-tight text-3xl lg:text-4xl">
            Meet the Founders
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 text-charcoal-light leading-7 text-base max-w-xl">
            The people steering Editor Bhai's editing, strategy and client
            relationships day to day.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          {FOUNDERS.map((founder, index) => (
            <Reveal key={founder.name} delay={0.12 + index * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col xl:flex-row items-center xl:items-start gap-6 rounded-3xl border border-mint-100 bg-white p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center xl:text-left"
              >
                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-mint-50">
                  {founder.image ? (
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-mint-50 flex items-center justify-center font-display font-bold text-mint-700 text-3xl lg:text-4xl">
                      {founder.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                  )}
                </div>

                <div className="flex-1 mt-2 xl:mt-0">
                  <p className="font-display font-bold text-xl lg:text-2xl text-charcoal">
                    {founder.name}
                  </p>
                  <p className="text-sm font-semibold uppercase tracking-wide text-mint-600 mt-1.5">
                    {founder.role}
                  </p>
                  <p className="mt-3 text-base text-charcoal-soft leading-relaxed">
                    {founder.blurb}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* TEAM */}
        <Reveal delay={0.05} className="mt-16 lg:mt-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-[2px] bg-mint-500" />
           
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="font-display font-black text-charcoal leading-tight text-4xl lg:text-5xl">
            Meet the Team
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-5 text-charcoal-light leading-8 text-lg max-w-2xl">
            A multidisciplinary team of editors, designers, developers, and strategists working together to bring every project to life.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="inline-flex items-center gap-2 mt-6 bg-mint-100 text-mint-700 text-sm font-semibold px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-mint-500" />
            {TEAM.length} team members
          </div>
        </Reveal>

        {/* TEAM GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5 mt-10">
          {TEAM.map((member, index) => (
            <Reveal key={member.name} delay={0.1 + (index % 6) * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="h-full rounded-2xl border border-mint-100 bg-white p-5 text-center shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <span
                  className={`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl text-white font-display font-bold text-base ${
                    AVATAR_COLORS[index % AVATAR_COLORS.length]
                  }`}
                >
                  {initials(member.name)}
                </span>

                <p className="font-semibold text-charcoal text-sm leading-snug">
                  {member.name}
                </p>
                <p className="mt-1 text-xs text-charcoal-soft leading-snug">
                  {member.role}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}