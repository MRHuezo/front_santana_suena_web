import React from "react";
import Box from "@mui/material/Box";
import { Parallax } from "rc-scroll-anim";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { AssignmentTurnedIn, Gavel, Place } from "@mui/icons-material";
import ListSedes from "./ListSedes";

const SedesHome = () => {
  return (
    <Box sx={{ py: 5 }} id="sedes">
      <Container maxWidth="lg">
        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
          style={{ transform: "translateX(-100px)", opacity: 0 }}
          className="code-box-shape"
        >
          <Box sx={{ my: 4, display: "flex", justifyContent: "center" }}>
            <Gavel sx={{ fontSize: 50, mx: 2 }} color="secondary" />
            <Typography variant="h3">Jurado calificador</Typography>
          </Box>
          <Box my={5}>
            <Typography align="center" variant="h6">
              Se conformará por 5 miembros y el fallo de estos será inapelable.
            </Typography>
            <br />
            <Typography align="justify" variant="h6">
              Cada sede nombrará un grupo de 3 jueces con la autoridad y el
              conocimiento del tema en cuestión para la evaluación de los
              participantes. El guitarrista líder del grupo Soul Sacrifice
              Everardo Vázquez y un representante del museo del Rock Mexicano,
              serán quien representen al comite organizador y completaran al
              grupo de 5 jueces para todas las sedes.
            </Typography>
          </Box>
        </Parallax>
      </Container>
      <Container maxWidth="md">
        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
          style={{ transform: "translateX(-100px)", opacity: 0 }}
          className="code-box-shape"
        >
          <Box sx={{ my: 4, display: "flex", justifyContent: "center" }}>
            <Place sx={{ fontSize: 50, mx: 2 }} color="secondary" />
            <Typography variant="h3">Sedes</Typography>
          </Box>
        </Parallax>
        <ListSedes />
        <Box my={5}>
          <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
            style={{ transform: "translateX(-100px)", opacity: 0 }}
            className="code-box-shape"
          >
            <Typography variant="h5">
              Jurado Calificador GranFinal (Autlán,Jalisco) Se invitará a un
              juez de cada sede conformado por 4 miembros y el guitarrista de
              Soul Sacrifice, siendo 5 en total.
            </Typography>
          </Parallax>
        </Box>
        <Box my={5}>
          <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
            style={{ transform: "translateX(-100px)", opacity: 0 }}
            className="code-box-shape"
          >
            <Box sx={{ my: 4, display: "flex", justifyContent: "center" }}>
              <AssignmentTurnedIn
                sx={{ fontSize: 40, mx: 2 }}
                color="secondary"
              />
              <Typography variant="h4">
                Aspectos a calificar en el concurso
              </Typography>
            </Box>
            <Box
              my={2}
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <ul>
                <li>
                  <Typography variant="h5">Originalidad</Typography>
                </li>
                <br />
                <li>
                  <Typography variant="h5">Habilidad</Typography>
                </li>
              </ul>
              <ul>
                <li>
                  <Typography variant="h5">Ejecución</Typography>
                </li>
                <br />
                <li>
                  <Typography variant="h5">Técnica</Typography>
                </li>
              </ul>
              <ul>
                <li>
                  <Typography variant="h5">Expresión</Typography>
                </li>
                <br />
                <li>
                  <Typography variant="h5">Improvisación</Typography>
                </li>
              </ul>
            </Box>
          </Parallax>
        </Box>
      </Container>
    </Box>
  );
};

export default SedesHome;
