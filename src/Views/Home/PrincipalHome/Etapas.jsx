import { EmojiEvents, Flag, HowToReg, UploadFile, Verified } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Parallax } from "rc-scroll-anim";
import React from "react";

const Etapas = () => {
  return (
    <Container maxWidth="md" sx={{my: 6}}>
      <Parallax
        animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
        style={{ transform: "translateX(100px)", opacity: 0 }}
        className="code-box-shape"
      >
        <Box sx={{ mt: 4, mb: 1, display: "flex", justifyContent: "center" }}>
          <Flag sx={{ fontSize: 50, mx: 2 }} color="secondary" />
          <Typography variant="h3">Etapas</Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Typography variant="h6">
            Fases o Etapas La evaluación y selección de participantes se
            llevarán a cabo en 5 etapas.
          </Typography>
        </Box>

        <Box my={5}>
          <Box
            sx={{
              my: 2,
              display: "flex",
            }}
          >
            <UploadFile sx={{ fontSize: 30 }} color="primary" />
            <Box mx={1} />
            <Typography variant="h6">
              <b>1er Etapa: </b>Registro y envíodearchivos.
            </Typography>
          </Box>
          <Box
            sx={{
              my: 2,
              display: "flex",
            }}
          >
            <HowToReg sx={{ fontSize: 30 }} color="primary" />
            <Box mx={1} />
            <Typography variant="h6">
              <b>2er Etapa: </b>Evaluación y selección de 10 semifinalistas por
              sede.
            </Typography>
          </Box>
          <Box
            sx={{
              my: 2,
              display: "flex",
            }}
          >
            <Verified sx={{ fontSize: 30 }} color="primary" />
            <Box mx={1} />
            <Typography variant="h6">
              <b>3er Etapa: </b>
              Concursos de semifinalistas(saldrá primer lugar en cada sede). (Las
              fechas son a disposición de actividades en cada estado
              participante).
            </Typography>
          </Box>
          <Box
            sx={{
              my: 2,
              display: "flex",
            }}
          >
            <EmojiEvents sx={{ fontSize: 30 }} color="primary" />
            <Box mx={1} />
            <Typography variant="h6">
              <b>4ta Etapa: </b>
              Gran Final el día 17 de Noviembre 2023 en Autlán de Navarro Jalisco, dentro
              del marco del 7to. Festival Músico Cultural Carlos Santana.
            </Typography>
          </Box>
        </Box>
      </Parallax>
    </Container>
  );
};

export default Etapas;
