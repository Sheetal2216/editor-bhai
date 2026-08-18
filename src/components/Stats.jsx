// import { motion } from 'framer-motion'
// import Reveal from './Reveal'
// import CountUp from './CountUp'
// // We will integrate these example stats for a more self-contained demonstration
// // Instead of import { STATS } from '../data'
// import { Users, Target, Rocket, Palette } from 'lucide-react'

// // --- INTEGRATED DEMONSTRATION STATS ---
// // You can remove this array and uncomment the original import if you move
// // the icon definitions into your data file. See the explanation comment below.
// const DEMO_STATS = [
//   { label: 'Total Clients', value: 350, suffix: '+', icon: Users },
//   { label: 'Projects Completed', value: 1200, suffix: '+', icon: Target },
//   { label: 'Creative Solutions', value: 50, suffix: 'k', icon: Rocket },
//   { label: 'Design Experts', value: 15, suffix: '', icon: Palette },
// ]
// // --- END DEMONSTRATION STATS ---

// export default function Stats() {
//   return (
//     <section className="relative py-16 md:py-24 bg-mint-50 overflow-hidden">
//       {/* Enhanced Section Background Blur Circles */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-mint-200/30 blur-3xl" aria-hidden="true" />
//       <div className="absolute top-1/4 left-1/4 w-[300px] h-[150px] rounded-full bg-mint-100/50 blur-3xl opacity-60" aria-hidden="true" />
//       <div className="absolute bottom-10 right-10 w-[200px] h-[100px] rounded-full bg-mint-200/40 blur-2xl opacity-50" aria-hidden="true" />

//       <div className="relative max-w-7xl mx-auto px-5 md:px-8">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
//           {DEMO_STATS.map((s, i) => {
//             const Icon = s.icon // Access the icon component

//             return (
//               <Reveal key={s.label} delay={i * 0.08}>
//                 <motion.div
//                   whileHover={{ y: -8 }}
//                   transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//                   // Define 'group' for nested hover effects
//                   className="relative bg-white rounded-3xl p-8 md:p-10 border border-mint-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-mint-200/50 hover:border-mint-200 text-left overflow-hidden group"
//                 >
//                   {/* Decorative Background Shape inside the Card */}
//                   <div className="absolute -top-1/4 -left-1/4 w-full h-full rounded-full bg-mint-50/50 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
//                   <div className="absolute -bottom-2 -right-2 w-1/3 h-1/3 rounded-lg bg-mint-100/80 rotate-12 group-hover:bg-mint-200/60 transition-colors duration-300" aria-hidden="true" />

//                   {/* Icon Container with integrated example icons */}
//                   <div className="relative mb-7 w-16 h-16 rounded-full bg-mint-100/80 flex items-center justify-center border border-mint-200 group-hover:scale-105 transition-transform duration-300">
//                     <Icon className="w-8 h-8 text-mint-600" />
//                     {/* Tiny icon-related shape for texture */}
//                     <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-mint-50 group-hover:bg-mint-100 transition-colors duration-300" />
//                   </div>

//                   {/* Stat Details */}
//                   <div className="relative z-10">
//                     <p className="font-display font-extrabold text-4xl md:text-5xl text-charcoal tracking-tight">
//                       <CountUp end={s.value} suffix={s.suffix} />
//                     </p>
//                     <p className="text-xs md:text-sm text-charcoal-soft mt-3 font-semibold uppercase tracking-widest">{s.label}</p>
//                   </div>
//                 </motion.div>
//               </Reveal>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }