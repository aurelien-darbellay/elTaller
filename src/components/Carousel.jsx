// Carousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Carousel({ images }) {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      speed={1500}
      slidesPerView={1}
      className="w-full h-full"
    >
      {images.map((imgSrc, index) => (
        <SwiperSlide key={index} className="relative w-full h-full">
          <img
            src={imgSrc}
            alt={`Slide ${index}`}
            className="absolute object-cover h-full w-full opacity-70"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
