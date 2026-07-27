// import { motion } from 'framer-motion'
// import { Play } from 'lucide-react'
// import Reveal from './Reveal'
// import { PORTFOLIO_PROJECTS } from '../data'

// const HEIGHT_CLASS = {
//   short: 'aspect-[4/3]',
//   medium: 'aspect-[4/4.6]',
//   tall: 'aspect-[4/5.6]',
// // }

// export default function Portfolio() {
//   return (
//     <section id="portfolio" className="relative py-14 md:py-20 bg-mint-50 overflow-hidden">
//       <div className="max-w-6xl mx-auto px-5 md:px-8">
//         <Reveal className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-mint-600 mb-3">
//           <span className="w-6 h-px bg-mint-500" />Portfolio
//         </Reveal>
//         <Reveal delay={0.06} className="max-w-xl mb-9">
//           <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal">
//             A few stories worth a second watch.
//           </h2>
//         </Reveal>

//         <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
//           {PORTFOLIO_PROJECTS.map((p, i) => (
//             <Reveal key={p.id} delay={(i % 3) * 0.08} className="mb-5 break-inside-avoid">
//               <motion.div
//                 whileHover={{ y: -4 }}
//                 className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br from-mint-200 to-mint-300 border border-mint-300/50 shadow-sm hover:shadow-xl hover:shadow-mint-300/50 transition-shadow duration-300 ${HEIGHT_CLASS[p.height]}`}
//               >
//                 <div
//                   className="absolute inset-0 opacity-30"
//                   style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '16px 16px' }}
//                   aria-hidden="true"
//                 />
//                 {/* hover overlay */}
//                 <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/55 transition-colors duration-300 flex flex-col items-center justify-center text-center p-6">
//                   <span className="w-14 h-14 rounded-full bg-white/0 group-hover:bg-mint-500 border border-white/0 group-hover:border-white/80 text-white flex items-center justify-center scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 mb-4">
//                     <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
//                   </span>
//                   <p className="text-[11px] uppercase tracking-widest text-mint-200 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
//                     {p.category}
//                   </p>
//                   <p className="font-display font-semibold text-white mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
//                     {p.title}
//                   </p>
//                   <span className="mt-4 text-xs font-semibold text-white border border-white/40 rounded-full px-4 py-1.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-150">
//                     Watch
//                   </span>
//                 </div>
//               </motion.div>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
