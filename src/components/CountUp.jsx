import { useEffect, useRef, useState } from 'react'

export default function CountUp({ end, suffix = '', duration = 1600, className = '' }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            
            // Cubic ease-out: starts fast, gently decelerates to a stop.
            // This creates the premium, lightweight feel required for the site.
            const eased = 1 - Math.pow(1 - progress, 3)
            
            setValue(Math.round(eased * end))
            
            if (progress < 1) {
              requestAnimationFrame(step)
            }
          }
          
          requestAnimationFrame(step)
          observer.disconnect() // Stop observing once the animation triggers
        }
      },
      { threshold: 0.4 } // Triggers when 40% of the element is visible
    )
    
    observer.observe(node)
    
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString()}
      {suffix}
    </span>
  )
}