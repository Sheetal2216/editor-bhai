import { motion } from 'framer-motion'
import { Play, Film, Camera, Sparkles, Star } from 'lucide-react'

const SHAPES = [
  { Icon: Play, pos: 'top-[6%] left-[2%] md:left-[4%]', size: 'w-9 h-9', dur: 7, delayY: 0 },
  { Icon: Film, pos: 'top-[52%] left-[-2%] md:left-[0%]', size: 'w-10 h-10', dur: 8.5, delayY: 1 },
  { Icon: Camera, pos: 'bottom-[10%] left-[10%] md:left-[14%]', size: 'w-8 h-8', dur: 6.5, delayY: 0.5 },
  { Icon: Sparkles, pos: 'top-[2%] right-[6%]', size: 'w-8 h-8', dur: 7.5, delayY: 1.4 },
  { Icon: Star, pos: 'bottom-[4%] right-[2%] md:right-[6%]', size: 'w-7 h-7', dur: 9, delayY: 0.8 },
]

const BLOBS = [
  { pos: '-top-10 -left-10', size: 'w-48 h-48', tone: 'bg-mint-200/50' },
  { pos: 'bottom-0 -right-8', size: 'w-56 h-56', tone: 'bg-mint-300/30' },
]

export default function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {BLOBS.map((b, i) => (
        <div key={i} className={`absolute rounded-full blur-3xl ${b.pos} ${b.size} ${b.tone}`} />
      ))}
      {SHAPES.map(({ Icon, pos, size, dur, delayY }, i) => (
        <motion.div
          key={i}
          className={`absolute ${pos} ${size} rounded-2xl bg-white/80 border border-mint-200 shadow-sm shadow-mint-200/50 flex items-center justify-center text-mint-500`}
          animate={{ y: [0, -14, 0], rotate: [0, 3, 0] }}
          transition={{ duration: dur, delay: delayY, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon className="w-1/2 h-1/2" strokeWidth={1.6} />
        </motion.div>
      ))}
    </div>
  )
}
