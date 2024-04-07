import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Slider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      scrollbar={{ draggable: true }}
      loop={true} // Make the Swiper infinite
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay
      allowTouchMove={false} // Disable touch interactions
    >
      <SwiperSlide>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/rsBMQZNm19c?si=R6fvWCevP7L2RVLd"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </SwiperSlide>
      <SwiperSlide>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/WvrQCpWYBBk?si=yCo7wxO8ZJjCFXV5"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </SwiperSlide>
      <SwiperSlide>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/m-ioG4KEVyc?si=HBjE9GVKEepi8Nrz"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
