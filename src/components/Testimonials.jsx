import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Star, Quote } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'
import Reveal from './Reveal'
import { TESTIMONIALS } from '../data'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-14 md:py-20 bg-mint-50">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        
        {/* --- HEADER WRAPPER --- */}
        {/* Changed md:items-end to md:items-center for better vertical balance */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10 md:mb-14">
          
          {/* LEFT: Text Content */}
          <div className="max-w-xl">
            <Reveal className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-mint-600 mb-3">
              <span className="w-6 h-px bg-mint-500" />
              Testimonials
            </Reveal>
            
            <Reveal delay={0.06}>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal">
                What clients say after the first cut.
              </h2>
            </Reveal>

            {/* NEW ADDITION: Paragraph to fill the empty space */}
            <Reveal delay={0.08}>
              <p className="mt-4 md:mt-5 text-charcoal-light leading-relaxed text-sm md:text-base">
                We partner with top creators to build content that truly stands out. Our editing process is designed to maximize viewer retention, boost engagement, and bring your creative vision to life-saving you hours of stress in the process.
              </p>
            </Reveal>
          </div>

          {/* RIGHT: Video Clip */}
          <Reveal 
            delay={0.1} 
            className="w-full md:w-72 lg:w-96 flex-shrink-0 rounded-2xl overflow-hidden border border-mint-200 shadow-sm"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover pointer-events-none aspect-video"
              src="/images/Global_Creator_Network_GIF_Cre (2).mp4"
            >
              Your browser does not support the video tag.
            </video>
          </Reveal>
          
        </div>
        {/* ----------------------- */}

        <Reveal delay={0.12}>
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            loop
            autoplay={{ delay: 4200, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="!pb-12"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.name}>
                <div className="bg-white rounded-2xl p-7 border border-mint-100 border-t-4 border-t-mint-400 h-full flex flex-col">
                  <Quote className="w-8 h-8 text-mint-200 mb-4" fill="currentColor" strokeWidth={0} />
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-mint-500" fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="text-charcoal-light leading-relaxed mb-6 flex-1">{t.quote}</p>
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-mint-500 text-white flex items-center justify-center font-display font-bold text-sm">
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-display font-semibold text-charcoal text-sm">{t.name}</p>
                      <p className="text-xs text-charcoal-soft">{t.role} · {t.company}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>

       
      </div>
    </section>
  )
}