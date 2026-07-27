// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import { Star, Flower2, Mic2, Briefcase } from "lucide-react";

// import "swiper/css";
// import "swiper/css/navigation";

// import { HERO_SLIDES } from "../data";

// const ICONS = {
//   star: Star,
//   lotus: Flower2,
//   mic: Mic2,
//   bag: Briefcase,
// };

// export default function CoverflowCarousel() {
//   return (
//     <div className="relative w-full max-w-[700px] mx-auto">

//       <Swiper
//         modules={[Navigation, Autoplay]}
//         loop={true}
//         spaceBetween={24}
//         slidesPerView={2.2}
//         speed={800}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true,
//         }}
//         navigation={{
//           nextEl: ".hero-next",
//           prevEl: ".hero-prev",
//         }}
//         breakpoints={{
//           640: {
//             slidesPerView: 2.3,
//           },
//           768: {
//             slidesPerView: 2.6,
//           },
//           1024: {
//             slidesPerView: 2.8,
//           },
//         }}
//       >
//         {HERO_SLIDES.map((item) => {
//           const Icon = ICONS[item.icon];

//           return (
//             <SwiperSlide key={item.id}>
//               <div
//                 className={`h-[260px] rounded-3xl bg-gradient-to-br ${item.tone}
//                 border border-mint-200
//                 shadow-lg
//                 flex flex-col justify-center items-center
//                 text-center px-6`}
//               >
//                 <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow mb-5">
//                   <Icon className="w-8 h-8 text-mint-700" />
//                 </div>

//                 <h3 className="font-display text-2xl font-semibold text-charcoal">
//                   {item.label}
//                 </h3>

//                 <p className="mt-2 text-sm text-charcoal-soft">
//                   {item.sub}
//                 </p>
//               </div>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>

//       <div className="flex justify-center gap-4 mt-8">
//         <button className="hero-prev w-11 h-11 rounded-full border border-mint-300 bg-white hover:bg-mint-500 hover:text-white transition">
//           ←
//         </button>

//         <button className="hero-next w-11 h-11 rounded-full border border-mint-300 bg-white hover:bg-mint-500 hover:text-white transition">
//           {/* → */}
//         </button>
//       </div>

//     </div>
//   );
// }