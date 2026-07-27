import { motion } from 'framer-motion'

// A drop-in scroll-reveal wrapper used across every section for the
// "fade up into view" entrance animation. Pass `delay` for staggering.
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.6,
  className = '',
  as = 'div',
  ...props
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
