import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { HERO_IMAGES } from "../data";

export default function SimpleCarousel() {
  return (
    <div className="relative w-full max-w-xl lg:max-w-3xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop
        speed={700}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="rounded-2xl sm:rounded-[28px]"
      >
        {HERO_IMAGES.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Fixed aspect ratio keeps the same rectangle shape at every screen size */}
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl sm:rounded-[28px] shadow-xl bg-gray-100">
              <img
                src={slide.image}
                alt={slide.title}
                loading="lazy"
                className="
                  absolute inset-0
                  w-full h-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-16 text-white">
                <h3 className="text-base xs:text-lg sm:text-2xl lg:text-3xl font-bold leading-tight break-words">
                  {slide.title}
                </h3>

                <p className="mt-1 text-xs sm:text-sm lg:text-base text-white/90 line-clamp-2">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        aria-label="Previous slide"
        className="
        hero-prev
        absolute
        left-2
        sm:left-4
        top-1/2
        -translate-y-1/2
        z-20
        w-8
        h-8
        sm:w-12
        sm:h-12
        rounded-full
        bg-white/90
        backdrop-blur
        shadow-lg
        flex
        items-center
        justify-center
        hover:bg-mint-500
        hover:text-white
        transition
        "
      >
        <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
      </button>

      <button
        aria-label="Next slide"
        className="
        hero-next
        absolute
        right-2
        sm:right-4
        top-1/2
        -translate-y-1/2
        z-20
        w-8
        h-8
        sm:w-12
        sm:h-12
        rounded-full
        bg-white/90
        backdrop-blur
        shadow-lg
        flex
        items-center
        justify-center
        hover:bg-mint-500
        hover:text-white
        transition
        "
      >
        <ChevronRight size={18} className="sm:w-5 sm:h-5" />
      </button>
    </div>
  );
}