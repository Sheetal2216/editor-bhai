import { useState } from "react";
import { motion } from "framer-motion";
import { WORLD_MAP_PINS } from "../data";

export default function WorldMap() {
  const [hovered, setHovered] = useState(null);

  const handleClick = (name) => {
    setHovered((prev) => (prev === name ? null : name));
  };

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
      className="
        relative
        w-full
        h-[200px]
        sm:h-[260px]
        md:h-[320px]
        lg:h-[380px]
        rounded-2xl
        lg:rounded-3xl
        bg-white
        border
        border-mint-100
        shadow-sm
        overflow-hidden
      "
    >
      {/* World Map */}
      <div
        className="absolute inset-0 bg-center bg-contain bg-no-repeat opacity-90"
        style={{
          backgroundImage: "url('/images/world-map.png')",
        }}
      />

      {/* Border */}
      <div className="absolute inset-3 sm:inset-5 lg:inset-6 rounded-2xl border border-dashed border-mint-200" />

      {WORLD_MAP_PINS.map((loc) => (
        <div
          key={loc.name}
          className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
          style={{
            left: `${loc.x}%`,
            top: `${loc.y}%`,
          }}
          onMouseEnter={() => setHovered(loc.name)}
          onMouseLeave={() =>
            setHovered((h) => (h === loc.name ? null : h))
          }
          onClick={() => handleClick(loc.name)}
        >
          {/* Pin */}
          <span
            className="
              relative
              flex
              w-3
              h-3
              sm:w-4
              sm:h-4
              cursor-pointer
            "
          >
            <span className="absolute inline-flex h-full w-full rounded-full bg-mint-500 animate-pulseRing" />

            <span className="relative inline-flex rounded-full w-3 h-3 sm:w-4 sm:h-4 bg-mint-600 ring-2 sm:ring-4 ring-white" />
          </span>

          {/* Tooltip */}
          {hovered === loc.name && (
            <motion.div
              initial={{
                opacity: 0,
                y: 8,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                absolute
                left-1/2
                bottom-6
                -translate-x-1/2
                glass
                border
                border-mint-200
                rounded-xl
                px-3
                py-2
                shadow-xl
                whitespace-nowrap
              "
            >
              <p className="text-[11px] sm:text-xs font-bold text-charcoal">
                {loc.name}
              </p>

              <p className="text-[10px] sm:text-[11px] text-mint-600">
                {loc.count}
              </p>
            </motion.div>
          )}

          {/* Labels */}
          <span
            className="
              absolute
              top-4
              left-1/2
              -translate-x-1/2
              whitespace-nowrap
              text-[8px]
              sm:text-[10px]
              font-semibold
              text-charcoal-soft
              hidden
              md:block
            "
          >
            {loc.name}
          </span>
        </div>
      ))}
    </motion.div>
  );
}