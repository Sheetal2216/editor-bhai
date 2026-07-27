import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { HERO_IMAGES } from "../data";

export default function SimpleCarousel() {
  return (
    <div className="relative w-full max-w-3xl mx-auto">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop
        speed={700}
        spaceBetween={30}
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
        className="rounded-[28px]"
      >
        {HERO_IMAGES.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="group relative overflow-hidden rounded-[28px] bg-gray-100 shadow-xl">

              <img
                src={slide.image}
                alt={slide.title}
                className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl lg:text-3xl font-bold">
                  {slide.title}
                </h3>

                <p className="mt-1 text-sm lg:text-base text-white/90">
                  {slide.subtitle}
                </p>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Previous */}

      <button
        className="hero-prev absolute left-4 top-1/2 -translate-y-1/2 z-20
        w-12 h-12 rounded-full bg-white/95 backdrop-blur-md
        shadow-lg flex items-center justify-center
        hover:bg-mint-500 hover:text-white transition-all duration-300"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Next */}

      <button
        className="hero-next absolute right-4 top-1/2 -translate-y-1/2 z-20
        w-12 h-12 rounded-full bg-white/95 backdrop-blur-md
        shadow-lg flex items-center justify-center
        hover:bg-mint-500 hover:text-white transition-all duration-300"
      >
        <ChevronRight size={22} />
      </button>

    </div>
  );
}