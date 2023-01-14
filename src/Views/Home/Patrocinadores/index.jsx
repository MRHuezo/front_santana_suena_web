import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax } from "rc-scroll-anim";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Box, Container } from "@mui/system";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Handshake } from "@mui/icons-material";
import { Typography } from "@mui/material";

const sponsors = [
  {
    nombre: "Sponsor 1",
    imagen: "https://reactjs.org/logo-og.png",
  },
  {
    nombre: "Sponsor 2",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    nombre: "Sponsor 3",
    imagen:
      "https://cdn.appdesign.dev/wp-content/uploads/2020/08/Agencia-desarrollo-Angular-JS.jpg",
  },
  {
    nombre: "Sponsor 4",
    imagen:
      "https://segwitz.com/wp-content/uploads/2021/06/vuejs-development-malaysia.jpeg",
  },
  {
    nombre: "Sponsor 5",
    imagen:
      "https://www.redeszone.net/app/uploads-redeszone.net/2013/11/java_main.png?x=480&y=375&quality=40",
  },
];

const PatrocinadoresHome = () => {
  return (
    <Container maxWidth="md" sx={{height: "60vh", mt: 5 }}>
      <Box>
        <Box>
        <Parallax
        animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
        style={{ transform: "translateX(-100px)", opacity: 0 }}
        className="code-box-shape"
      >
        <Box sx={{ my: 5, display: "flex", justifyContent: "center" }}>
          <Handshake sx={{ fontSize: 50, mx: 2 }} color="secondary" />
          <Typography variant="h3">Patrocinadores</Typography>
        </Box>
      </Parallax>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
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
        {sponsors.map(({ imagen, nombre }, index) => (
          <SwiperSlide key={`${nombre}-${index}`}>
            <Box sx={{ height: 200, width: 200 }}>
              <img alt={nombre} src={imagen} height="100%" width="100%" />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
        </Box>
      </Box>
    </Container>
  );
};

export default PatrocinadoresHome;
