import { useState } from 'react'
import { motion } from 'framer-motion'
import { WORLD_MAP_PINS } from '../data'

export default function WorldMap() {
  const [hovered, setHovered] = useState(null)

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="relative aspect-[4/5] md:aspect-square rounded-3xl bg-white border border-mint-100 shadow-sm overflow-hidden"
    >
      {/* light dotted "map" texture */}
     <div
  className="absolute inset-0 bg-center bg-contain bg-no-repeat opacity-90"
  style={{
    backgroundImage: "url('/images/world-map.png')",
  }}
  aria-hidden="true"
/>
      <div className="absolute inset-6 rounded-2xl border border-dashed border-mint-200" aria-hidden="true" />

      {WORLD_MAP_PINS.map((loc) => (
        <div
          key={loc.name}
          className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
          onMouseEnter={() => setHovered(loc.name)}
          onMouseLeave={() => setHovered((h) => (h === loc.name ? null : h))}
        >
          <span className="relative flex w-3.5 h-3.5 cursor-pointer">
            <span className="absolute inline-flex h-full w-full rounded-full bg-mint-500 animate-pulseRing" />
            <span className="relative inline-flex rounded-full w-3.5 h-3.5 bg-mint-600 ring-4 ring-white" />
          </span>

          {hovered === loc.name && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.15 }}
              className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full glass border border-mint-200 rounded-xl px-3 py-2 shadow-lg whitespace-nowrap"
            >
              <p className="text-xs font-bold text-charcoal">{loc.name}</p>
              <p className="text-[11px] text-mint-600 font-medium">{loc.count}</p>
            </motion.div>
          )}

          {hovered !== loc.name && (
            <span className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-charcoal-soft whitespace-nowrap">
              {loc.name}
            </span>
          )}
        </div>
      ))}
    </motion.div>
  )
}
