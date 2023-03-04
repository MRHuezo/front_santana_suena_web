import React from "react";
//import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax } from "rc-scroll-anim";
import prs from "./img/prs_logo.png";
import colectivamente from "./img/colectivamente.png";
import hermes from "./img/hermes.png";
import prs_page from "./img/prs_page.png";
import hermes_page from "./img/hermes_page.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { styled } from "@mui/material/styles";

// import required modules
import { Box, Container } from "@mui/system";
//import { Autoplay, Pagination, Navigation } from "swiper";
import { Handshake } from "@mui/icons-material";
import { ButtonBase, Grid, Link, Typography } from "@mui/material";
//import { makeStyles } from "@mui/styles";

/* const sponsors = [
  {
    nombre: "PRS",
    imagen: prs,
    col: 4,
    height: 250,
    width: "100%",
  },
  {
    nombre: "Hermes",
    imagen: hermes,
    col: 4,
    height: 400,
    width: "100%",
  },
  {
    nombre: "SONY MUSIC",
    imagen: sony,
    col: 4,
    height: 500,
    width: "100%"
  },
  {
    nombre: "COLECTIVAMENTE",
    imagen: colectivamente,
    col: 4,
    height: 400,
    width: "100%",
  },
]; */

/* const useStyles = makeStyles((theme) => ({
  img: {
    height: 300,
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
  },
})); */

const PatrocinadoresHome = () => {
  //const classes = useStyles();
  return (
    <Container
      maxWidth="xl"
      sx={{ minHeight: "60vh", pt: 5 }}
      id="patrocinadores"
    >
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
          <Grid container spacing={2}>
            {/* <Grid item xs={6}>
              <Box
                className={classes.img}
                sx={{ backgroundImage: `url(${prs})` }}
              />
            </Grid> */}
            <Grid item xs={12}>
              <CustomButton
                bgimage={prs_page}
                image={prs}
                url="https://prsguitars.com.mx/"
              />
            </Grid>
          {/*   <Grid item xs={12}>
              <CustomButton
                bgimage={hermes_page}
                image={hermes}
                url="https://hermes-music.com.mx/"
              />
            </Grid> */}
            <Grid item xs={12}>
              <CustomButton
                bgimage={colectivamente}
                image={colectivamente}
                url="#"
              />
            </Grid>
          </Grid>
          {/* <Swiper
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
          </Swiper> */}
        </Box>
      </Box>
    </Container>
  );
};

export default PatrocinadoresHome;

const CustomButton = ({ image, bgimage, url }) => {
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    height: "60vh",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important", // Overrides inline-style
      height: "40vh",
    },
    borderRadius: 10,
    overflow: "hidden",
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .imgSrc": {
        transform: "scale(1.1)",
      },
    },
  }));

  const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: 10,
    transition: "transform .2s",
    transform: "scale(1)",
  });

  const Image = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .img-logo-cont": {
      backgroundColor: theme.palette.common.white,
    },
  }));

  const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
    borderRadius: 10,
  }));

  return (
    <Link href={url} target="_blank">
      <ImageButton
        focusRipple
        style={{
          width: "100%",
        }}
      >
        <ImageSrc
          className="imgSrc"
          style={{ backgroundImage: `url(${bgimage})` }}
        />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <Image>
          <Box
            borderRadius={5}
            className="img-logo-cont"
            sx={{
              height: { xs: 200, md: 300 },
              width: { xs: 200, md: 600 },
              ml: { xs: 0, md: 5 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <img alt="prs guitar" src={image} style={{maxHeight: "100%", maxWidth: "100%"}} />
          </Box>
        </Image>
      </ImageButton>
    </Link>
  );
};
