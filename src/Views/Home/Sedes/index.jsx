import React from "react";
import Box from "@mui/material/Box";
import { Parallax } from "rc-scroll-anim";
import { Container } from "@mui/system";
import { Typography, Grid } from "@mui/material";
import { AssignmentTurnedIn, Gavel, Place } from "@mui/icons-material";
import ListSedesNew from "./ListSedesNew";

const SedesHome = ({edicion}) => {
  return (
    <Box sx={{ py: 5 }} id="sedes">
      <Container maxWidth="lg">
        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
          style={{ transform: "translateX(-100px)", opacity: 0 }}
          className="code-box-shape"
        >
          {edicion === '2024' ?
          <Box sx={{ my: 4, display: "flex", justifyContent: "center" }}>
            <Place sx={{ fontSize: 50, mx: 2 }} color="secondary" />
            <Typography variant="h3">SEDES SANTANA SUENA 2024</Typography>
          </Box>
          :  
          <Box sx={{ my: 4, display: "flex", justifyContent: "center" }}>
            
            <Typography variant="h3">VUELVE A VIVIR SANTANA SUENA 2023</Typography>
          </Box>
          }
           
        </Parallax>
        <ListSedesNew edicion={edicion} />
        {edicion === '2024' ?
          <Box my={5}>
            <Parallax
              animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
              style={{ transform: "translateX(-100px)", opacity: 0 }}
              className="code-box-shape"
            >
            <Box sx={{ my: 4, display: "flex", justifyContent: "center" }}>
              <Gavel sx={{ fontSize: 40, mx: 2 }} color="secondary" />
              <Typography variant="h4">Jurado calificador</Typography>
            </Box>
            <Box my={5} mt={2}>
              <Typography align="center" variant="h6">
                Se conformará por 5 miembros y el fallo de ellos será inapelable.
              </Typography>
              <br />
              <Typography align="justify" variant="h6">
              Cada sede nombrará un grupo de 2 jueces con la autoridad y el conocimiento 
              del tema en cuestión para la evaluación de los participantes.
              El guitarrista líder del grupo Soul Sacriﬁce Everardo Vázquez  será quien 
              represente al comite organizador y completarán al grupo de 3 jueces para todas las sedes.
              </Typography>
            </Box>
              <Typography variant="h6">
                Jurado Calificador GranFinal (Autlán,Jalisco) Se invitará a un
                juez de cada sede conformado por 3 miembros,el guitarrista de
                Soul Sacrifice y un invitado especial, siendo 5 en total.
              </Typography>
              <Box sx={{ my: 4, display: "flex", justifyContent: "center" }}>
                <AssignmentTurnedIn
                  sx={{ fontSize: 40, mx: 2 }}
                  color="secondary"
                />
                <Typography variant="h4">
                  Aspectos a calificar
                </Typography>
              </Box>
              <Box
                my={2}
              >
                <Grid container spacing={2} justifyContent="center">
                {/*  <Grid item xs={6} sm={4}>
                  <Typography variant="h4" align="center">Originalidad</Typography>
                  </Grid> */}
                  <Grid item xs={6} sm={4}>
                  <Typography variant="h5" align="center">Habilidad</Typography>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                  <Typography variant="h5" align="center">Ejecución</Typography>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                  <Typography variant="h5" align="center">Técnica</Typography>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                  <Typography variant="h5" align="center">Expresión</Typography>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                  <Typography variant="h5" align="center">Improvisación</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Parallax>
          </Box>
          :
          <Box></Box>
        }
      </Container>
    </Box>
  );
};

export default SedesHome;
