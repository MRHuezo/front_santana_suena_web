import {
  Apartment,
  Computer,
  ContentPaste,
  EmojiEvents,
  Face,
  Lyrics,
  MusicNote,
  Person2,
  Person4,
  Place,
  RequestQuote,
  Star,
  Verified,
  Videocam,
} from "@mui/icons-material";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Parallax } from "rc-scroll-anim";
import React from "react";

const Bases = () => {
  return (
    <Container maxWidth="lg" sx={{py: 5}} id="como_participar">
      <Parallax
        animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
        style={{ transform: "translateX(-100px)", opacity: 0 }}
        className="code-box-shape"
      >
        <Box>
          <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
            style={{ transform: "translateX(-100px)", opacity: 0 }}
            className="code-box-shape"
          >
            <Box sx={{ my: 4, display: "flex", justifyContent: "center" }}>
              <Person2 sx={{ fontSize: 50, mx: 2 }} color="secondary" />
              <Typography variant="h3">Perfil de los participantes</Typography>
            </Box>
          </Parallax>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <Box sx={{ my: 2, display: "flex", alignItems: "center" }}>
                <Face sx={{ fontSize: 30 }} color="primary" />
                <Box sx={{ mx: 1 }} />
                <Typography variant="h6">Edad mínima de 18 años.</Typography>
              </Box>
              <Box sx={{ my: 2, display: "flex", alignItems: "center" }}>
                <MusicNote sx={{ fontSize: 30 }} color="primary" />
                <Box sx={{ mx: 1 }} />
                <Typography variant="h6">
                  Interpretar la música de Carlos Santana con guitarra.
                </Typography>
              </Box>
              <Box sx={{ my: 2, display: "flex", alignItems: "center" }}>
                <Lyrics sx={{ fontSize: 30 }} color="primary" />
                <Box sx={{ mx: 1 }} />
                <Typography variant="h6">
                  Ser lírico o con conocimiento académico.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box sx={{ my: 2, display: "flex", alignItems: "center" }}>
                <Person4 sx={{ fontSize: 30 }} color="primary" />
                <Box sx={{ mx: 1 }} />
                <Typography variant="h6">
                  Participación individual (podrá interpretar solo o con pista
                  musical).
                </Typography>
              </Box>
              <Box sx={{ my: 2, display: "flex", alignItems: "center" }}>
                <Star sx={{ fontSize: 30 }} color="primary" />
                <Box sx={{ mx: 1 }} />
                <Typography variant="h6">Estilo musical libre.</Typography>
              </Box>
              <Box sx={{ my: 2, display: "flex", alignItems: "center" }}>
                <Place sx={{ fontSize: 30 }} color="primary" />
                <Box sx={{ mx: 1 }} />
                <Typography variant="h6">
                  No importa nacionalidad, solo que resida en la República
                  Mexicana
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Parallax>
      <Parallax
        animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
        style={{ transform: "translateX(-100px)", opacity: 0 }}
        className="code-box-shape"
      >
        <Box>
        <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
            style={{ transform: "translateX(-100px)", opacity: 0 }}
            className="code-box-shape"
          >
            <Box sx={{ my: 4, display: "flex", justifyContent: "center" }}>
              <ContentPaste sx={{ fontSize: 50, mx: 2 }} color="secondary" />
              <Typography variant="h3">Formato de participación</Typography>
            </Box>
          </Parallax>
          <Box sx={{ my: 2, display: "flex" }}>
            <Computer sx={{ fontSize: 30 }} color="primary" />
            <Box sx={{ mx: 1 }} />
            <Typography variant="h6">
              El registro será de manera virtual llenando el formulario oficial
              en la sede que mejor le convenga.
            </Typography>
          </Box>
          <Box sx={{ my: 2, display: "flex" }}>
            <RequestQuote sx={{ fontSize: 30 }} color="primary" />
            <Box sx={{ mx: 1 }} />
            <Box>
              <Typography variant="h6">
                Presentar y/o enviar comprobante de donativo de
                inscripción.
              </Typography>
              <Typography variant="h6">
                <b>
                  Donativo de inscripción 300.00 pesos a favor de Santuario de Luz
                  A.C. a la cuenta bancaria BBVA: 0176 2439 08 Clabe: 0123 3300
                  1762 4390 84
                </b>
              </Typography>
            </Box>
          </Box>
          <Box sx={{ my: 2, display: "flex" }}>
            <Videocam sx={{ fontSize: 30 }} color="primary" />
            <Box sx={{ mx: 1 }} />
            <Box>
              <Typography variant="h6">
                Subír un video en youtube con el título "Primer Nombre del participante" "Sede registro" "Nombre canción Cover" "Santana Suena"a su canal personal 
                (Puede ser desde su celular) y compartir el Link en la página oficial www.santanasuena.com en la sede de su elección 
                al momento de realizar su registro.
              </Typography>
              <Typography variant="h6">
                El video deberá comenzar mostrando su recibo de pago e
                información personal como nombre, edad y lugar de residencia
                seguido de la interpretación musical con la que se pretende
                concursar.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ my: 2, display: "flex" }}>
            <Apartment sx={{ fontSize: 30 }} color="primary" />
            <Box sx={{ mx: 1 }} />
            <Typography variant="h6">
            Cada participante únicamente podrá registrarse en una sola sede, 
            si se registrara en más de una, quedará automáticamente descalificado 
            y no tendrá derecho al reembolso de las inscripciones que haya realizado.
            </Typography>
          </Box>
          <Box sx={{ my: 2, display: "flex" }}>
            <Verified sx={{ fontSize: 30 }} color="primary" />
            <Box sx={{ mx: 1 }} />
            <Typography variant="h6">
            El ganador del 1er lugar de cada sede participará en un sorteo donde se elegirá 
            al azahar un tema musical de una lista de 5 para interpretar en la gran final.
            </Typography>
          </Box>
          <Box sx={{ my: 2, display: "flex" }}>
            <EmojiEvents sx={{ fontSize: 30 }} color="primary" />
            <Box sx={{ mx: 1 }} />
            <Typography variant="h6">
              Participación en vivo en la GRAN FINAL acompañado del Grupo Soul
              Sacrifice Tributo a la música de Carlos Santana.
            </Typography>
          </Box>
        </Box>
      </Parallax>
    </Container>
  );
};

export default Bases;
