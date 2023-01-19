import { CalendarMonth } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Parallax } from "rc-scroll-anim";
import React from "react";

const Fechas = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }} id="fechas">
      <Parallax
        animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
        style={{ transform: "translateX(100px)", opacity: 0 }}
        className="code-box-shape"
      >
        <Box sx={{ mt: 4, mb: 1, display: "flex", justifyContent: "center" }}>
          <CalendarMonth sx={{ fontSize: 50, mx: 2 }} color="secondary" />
          <Typography variant="h3">Lugar y fechas de solicitudes</Typography>
        </Box>

        <Box my={5}>
          <ul>
            <li>
              <Typography variant="h6">
                <b>Del 30 de Febrero al 30 de Marzo 2023</b>
              </Typography>
              <Typography variant="h6">
                Convocatoria de inscripción y recepción de material audiovisual
                de los participantes.
              </Typography>
            </li>
            <br />
            <li>
              <Typography variant="h6">
                <b>Del 01 al 31 de Agosto 2023</b>
              </Typography>
              <Typography variant="h6">
                Selección de 10 semifinalistas
              </Typography>
            </li>
            <br />
            <li>
              <Typography variant="h6">
                <b>Septiembre y Octubre</b>
              </Typography>
              <Typography variant="h6">
                Realizar evento de semifinal en cada sede y selección del
                ganador quien los representará en la gran final.
              </Typography>
            </li>
            <br />
            <li>
              <Typography variant="h6">
                <b>17 de Noviembre 2023</b>
              </Typography>
              <Typography variant="h6">
                Final del concurso en Autlán de Navarro Jalisco
              </Typography>
            </li>
            <br />
            <li>
              <Typography variant="h6">
                <b>19 Noviembre 2023</b>
              </Typography>
              <Typography variant="h6">
                Presentación de Ganador de la final junto con el grupo Soul
                Sacrifice en el marco del 7to. Festival Músico Cultural Carlos
                Santana en Autlán.
              </Typography>
            </li>
          </ul>

          <Box mt={6}>
            <Typography variant="h5" align="center">
              Estas fechas aplican para todas las Sedes pudiendo terminar el
              proyecto en tiempo y forma
            </Typography>
            <Typography variant="h5" align="center">
              <b>Fecha límite de inscripción 30 de marzo 2023</b>
            </Typography>
          </Box>
        </Box>
      </Parallax>
    </Container>
  );
};

export default Fechas;
