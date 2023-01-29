import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax } from "rc-scroll-anim";
import prs from "./img/prs_logo.png";
import sony from "./img/sony_logo.png";
import colectivamente from "./img/colectivamente.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { Box, Container } from "@mui/system";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Handshake } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const sponsors = [
  {
    nombre: "Sponsor 1",
    imagen: prs,
  },
  {
    nombre: "Sponsor 2",
    imagen: sony,
  },
  {
    nombre: "Sponsor 3",
    imagen: colectivamente,
  },
];

const useStyles = makeStyles((theme) => ({
  img: {
    height: 200,
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
  },
}));

const PatrocinadoresHome = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" sx={{ height: "60vh", pt: 5 }} id="patrocinadores">
      <Box>
        <Box>
          <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
            style={{ transform: "translateX(-100px)", opacity: 0 }}
            className="code-box-shape"
          >
            <Box
              sx={{
                my: 5,
                display: "flex",
                justifyContent: "center",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
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
                <Box
                  className={classes.img}
                  sx={{ backgroundImage: `url(${imagen})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Container>
  );
};

export default PatrocinadoresHome;
