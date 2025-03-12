import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper CSS
import "swiper/css/navigation"; // Navigation module CSS
import "swiper/css/pagination"; // Pagination module CSS
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../styles/style.css";

const images = [
  "/src/assets/banner 1.png",
  "/src/assets/banner 2.png",
  "/src/assets/banner 3.png",
  "/src/assets/banner 4.png",
  "/src/assets/banner 5.png",
];

const ImageSlider = () => {
  return (
    <div className="p-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        autoplay={{ delay: 3000 }}
        loop
        className="w-[50%] max-h-96 mx-auto shadow-lg rounded-lg overflow-hidden relative"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-96 overflow-hidden">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}

        {/* Default Navigation Arrows */}
        <div className="swiper-button-next !text-[#89c00f]" />
        <div className="swiper-button-prev !text-[#89c00f]" />

        {/* Custom Pagination Dots */}
        <div className="swiper-pagination !bottom-4">
          {images.map((_, index) => (
            <div
              key={index}
              className="swiper-pagination-bullet !bg-[#89c00f] !opacity-100 !w-3 !h-3 !mx-1 !transition-colors hover:!bg-[#89c00f]"
            />
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
