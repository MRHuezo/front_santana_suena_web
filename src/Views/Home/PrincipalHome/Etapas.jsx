import { EmojiEvents, Flag, HowToReg, UploadFile, Verified, AutoAwesome } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Parallax } from "rc-scroll-anim";
import React from "react";

const Etapas = () => {
  return (
    <Container maxWidth="md" sx={{my: 6, mt:3}}>
      <Parallax
        animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
        style={{ transform: "translateX(0px)", opacity: 0 }}
        className="code-box-shape"
      >
        <Box sx={{  mb: 1, display: "flex", justifyContent: "center" }}>
          <Flag sx={{ fontSize: 50, mx: 2 }} color="secondary" />
          <Typography variant="h3">Etapas</Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Typography variant="h6">
            La evaluación y selección de participantes se
            llevarán a cabo en 5 etapas.
          </Typography>
        </Box>

        <Box my={5}>
          <Box>
            <Box
              sx={{
                my: 2,
                display: "flex",
              }}
            >
              <UploadFile sx={{ fontSize: 30 }} color="primary" />
              <Box mx={1} />
              <Typography variant="h6">
                <b>1er Etapa: </b>Del 04 de Febrero al 30 de Abril del 2023
              </Typography>
            
            </Box>
            <Typography variant="h6">
              Convocatoria de inscripción y recepción de material audiovisual
              de los participantes.
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{
                my: 2,
                display: "flex",
              }}
            >
              <HowToReg sx={{ fontSize: 30 }} color="primary" />
              <Box mx={1} />
              <Typography variant="h6">
                <b>2er Etapa: </b>Del 01 al 31 de Agosto 2023
              </Typography>
            </Box>
              <Typography variant="h6">
                Evaluación y selección de 10 semifinalistas por
                sede.
              </Typography>
          </Box>
          <Box>
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
                Septiembre y Octubre
         
              </Typography>
            </Box>
            <Typography variant="h6">
              Concursos de semifinalistas(saldrá primer lugar en cada sede). (Las
              fechas son a disposición de actividades en cada estado
              participante).
            </Typography>
          </Box>    
          <Box>
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
                17 de Noviembre 2023
              </Typography>
            </Box>
            <Typography variant="h6">
                
                Gran Final en Autlán de Navarro Jalisco, dentro
                del marco del 7to. Festival Músico Cultural Carlos Santana.
              </Typography>    
          </Box>
          <Box>
            <Box
              sx={{
                my: 2,
                display: "flex",
              }}
            >
              <AutoAwesome sx={{ fontSize: 30 }} color="primary" />
              <Box mx={1} />
              <Typography variant="h6">
                <b>5ta Etapa: </b>
                19 de Noviembre 2023
              </Typography>
            </Box>
            <Typography variant="h6">
                
            Presentación del ganador  junto con el grupo Soul Sacrifice en el marco del 6to. Festival Músico Cultural Carlos Santana en Autlán.
              </Typography>    
          </Box>
          <Box mt={6}>
            <Typography variant="h5" align="center">
              Estas fechas aplican para todas las Sedes pudiendo terminar el
              proyecto en tiempo y forma
            </Typography>
            <Typography variant="h5" align="center">
              <b>Fecha límite de inscripción 30 de abril 2023</b>
            </Typography>
          </Box>
        </Box>
      </Parallax>
    </Container>
  );
};

export default Etapas;
