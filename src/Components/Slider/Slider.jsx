import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://www.ashokitech.com/uploads/banner/932868389_1671028258.png"
            alt="my imng"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.ashokitech.com/uploads/banner/1254170965_1671029617.png"
            alt="my imng"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
