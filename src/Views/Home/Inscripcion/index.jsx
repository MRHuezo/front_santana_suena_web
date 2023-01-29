import React, { Fragment } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Parallax } from "rc-scroll-anim";
import StepComponent from "./StepComponent";
import InscripcionCtxProvider from "../../../Context/InscripcionCtx";

function InscripcionesHome() {
  return (
    <Fragment>
      <Box
        sx={{
          height: "100vh",
          position: "relative",
          backgroundImage:
            "url(https://www.teahub.io/photos/full/125-1255650_carlos-santana.jpg)",
        }}
        id="inscripcion"
      >
        <Box
          sx={{
            position: "absolute",
            height: "100vh",
            width: "100vw",
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.8590029761904762) 50%, rgba(0,0,0,0.42679009103641454) 120%)",
          }}
        />
        <Grid
          container
          sx={{ height: "100%", display: { xs: "none", md: "flex" } }}
        >
          <Grid
            item
            md={6}
            sx={{ display: "flex", alignItems: "center", zIndex: 99 }}
          >
            <Container maxWidth="lg">
              <FormContainer />
            </Container>
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Parallax
              animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
              style={{ transform: "translateX(-100px)", opacity: 0 }}
              className="code-box-shape"
            >
              <Box p={4}>
                <Box>
                  <Typography color="white" variant="h2">
                    <b>!Inscríbete ahora!</b>
                  </Typography>
                  <br />
                  <Typography color="white" variant="h4">
                    Demuéstranos tu talento y participa en la sede más cercana,
                    a tu lugar de residencia para que puedas participar en la
                    gran final en Autlán de Navarro tierra de CARLOS SANTANA.
                  </Typography>
                  <br />
                  <Typography color="white" variant="h6">
                    <b>No olvides revisar las bases del concurso.</b>
                  </Typography>
                </Box>
              </Box>
            </Parallax>
          </Grid>
        </Grid>
        <Container
          maxWidth="lg"
          sx={{
            display: { xs: "flex", md: "none" },
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FormContainer />
        </Container>
      </Box>
    </Fragment>
  );
}

const FormContainer = () => {
  return (
    <InscripcionCtxProvider>
      <Box
        sx={{
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          zIndex: 999,
          backgroundColor: "rgb(255,255,255,0.8)",
          padding: {xs: 0, sm: 3},
          borderRadius: 5,
        }}
      >
        <StepComponent />
      </Box>
    </InscripcionCtxProvider>
  );
};

export default InscripcionesHome;
