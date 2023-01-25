import React from "react";
import { Box } from "@mui/system";


import imagen1 from "./img/santana_suena_portada.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const images = [

  {
    img: imagen1,
    title: "Texto ejemplo",
    description:
      "Este es un texto de ejemplo, es una simple idea de como puede quedar",
    id: 1,
  },
  {
    img: "https://www.teahub.io/photos/full/125-1255650_carlos-santana.jpg",
    title: "Texto ejemplo",
    description:
      "Este es un texto de ejemplo, es una simple idea de como puede quedar",
    id: 2,
  },
  {
    img:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d130a033-5dd5-48a5-a59a-fdcf18bdd352/d5y304f-162233da-6a91-47da-a5be-64723c2d2224.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QxMzBhMDMzLTVkZDUtNDhhNS1hNTlhLWZkY2YxOGJkZDM1MlwvZDV5MzA0Zi0xNjIyMzNkYS02YTkxLTQ3ZGEtYTViZS02NDcyM2MyZDIyMjQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aB8y9OEiC0DuBaYTSBjnHxNaHMdGlUIASNMlM2SRTMU",
    title: "Texto ejemplo",
    description:
      "Este es un texto de ejemplo, es una simple idea de como puede quedar",
    id: 3,
  },
  {
    img: "https://wallpapercave.com/dwp2x/U4X4P9d.jpg",
    title: "Texto ejemplo",
    description:
      "Este es un texto de ejemplo, es una simple idea de como puede quedar",
    id: 4,
  },
];

export default function PrincipalHome() {
  return (
    <Box sx={{ height: "80vh" }} id="home">
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
        {images.map(({ img, id, title }) => (
          <SwiperSlide key={id}>
            <Box
              sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img alt={title} src={img} height="100%" width="100%" />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
