import React from "react";
import { Box } from "@mui/system";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function PrincipalHome() {
  return (
    <Box sx={{height: "60vh"}}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Banner 1</SwiperSlide>
        <SwiperSlide>Banner 2</SwiperSlide>
        <SwiperSlide>Banner 3</SwiperSlide>
      </Swiper>
    </Box>
  );
}
