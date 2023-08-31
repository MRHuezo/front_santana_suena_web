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
  /* {
    img:
      "https://mountainsantanasuena.s3.us-east-2.amazonaws.com/santanaBanner2CambioFecha.jpeg",
    title: "Santana Suena",
    description:
      "",
    id: 1,
  }, */
  
  {
    img: "https://mountainsantanasuena.s3.us-east-2.amazonaws.com/santanaBanner1.png",
    title: "Santana Suena",
    description:
      "",
    id: 2,
  },
  /* {
    img: "https://www.teahub.io/photos/full/125-1255650_carlos-santana.jpg",
    title: "Santana Suena",
    description:
      "",
    id: 3,
  }, */
  {
    img: "https://mountainsantanasuena.s3.us-east-2.amazonaws.com/BannerTijuana.png",
    title: "Santana Suena Sede Tijuana",
    description:
      "",
    id: 4,
  },
  {
    img: "https://mountainsantanasuena.s3.us-east-2.amazonaws.com/BannerZapopan.png",
    title: "Santana Suena Sede Zapopan",
    description:
      "",
    id: 5,
  },
  {
    img: "https://mountainsantanasuena.s3.us-east-2.amazonaws.com/BannerCdmx.png",
    title: "Santana Suena Sede Ciudad de México",
    description:
      "",
    id: 6,
  },
  {
    img: imagen1,
    title: "Santana Suena",

    description:
      "",
    id: 2,
  },
];

export default function PrincipalHome() {
  return (
    <Box sx={{ height: {xs: "50vh", md: "75vh"} }} id="home">
      <Swiper
        //spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map(({ img, id, title}) => (
          <SwiperSlide key={id}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img alt={title} src={img} style={{maxHeight: "100%", maxWidth: "100%"}} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
