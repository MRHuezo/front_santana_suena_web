import React from "react";
//import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax } from "rc-scroll-anim";
import autlan from "./img/autlan.png";
import baja from "./img/baja.png";
import coyoacan from "./img/coyoacan.png";
import zapopan from "./img/zapopan.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { Box, Container } from "@mui/system";
//import { Autoplay, Pagination, Navigation } from "swiper";
import { Handshake } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const sponsors = [
  /* {
    nombre: "default1",
    imagen: "",
  }, */
  {
    nombre: "Gobierno de Autlán",
    imagen: autlan,
    bgcolor: "#5A3D76",
  },
  {
    nombre: "Gobierno de Coyoacán",
    imagen: coyoacan,
    bgcolor: "#F9F4FF",
  },
  {
    nombre: "Zapopan",
    imagen: zapopan,
    bgcolor: "#46C5F1",
  },
  {
    nombre: "Instituto de cultura de Baja California",
    imagen: baja,
    bgcolor: "#FFE7E7",
  },
  /* {
    nombre: "default2",
    imagen: "",
  }, */
];

const useStyles = makeStyles((theme) => ({
  img: {
    height: 250,
    width: "100%",
    display: "flex", 
    justifyContent: "center",
    alignItems: "center", 
    padding: 8,
    borderRadius: 8
    //backgroundRepeat: "no-repeat",
    //backgroundSize: "contain",
    //backgroundPosition: "center",
  },
}));

const InstitucionesHome = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" sx={{ minHeight: "70vh", pt: 5 }} id="instituciones">
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
              <Typography variant="h3">Instituciones participantes</Typography>
            </Box>
          </Parallax>
          <Grid container spacing={3}>
            {sponsors.map(({ imagen, nombre, bgcolor }, index) => (
              <Grid key={`${nombre}-${index}`} item xs={12} sm={6} md={6} lg={3}>
                <Box
                  className={classes.img}
                  sx={{
                    backgroundColor: bgcolor,
                  }}
                >
                  <img
                    alt={`imagen-${nombre}`}
                    src={imagen}
                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
          {/* <Swiper
            slidesPerView={3}
            spaceBetween={35}
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
            style={{backgroundColor:'black'}}
            
          >
            {sponsors.map(({ imagen, nombre }, index) => (
              <SwiperSlide key={`${nombre}-${index}`} >
                <Box
                  className={classes.img}
                  sx={{ backgroundImage: `url(${imagen})`, backgroundColor:'rgb(0,0,0)' }}
                />
              </SwiperSlide>
            ))}
          </Swiper> */}
        </Box>
      </Box>
    </Container>
  );
};

export default InstitucionesHome;
