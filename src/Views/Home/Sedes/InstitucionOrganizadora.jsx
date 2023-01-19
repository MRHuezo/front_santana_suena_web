import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { Parallax } from "rc-scroll-anim";

const InstitucionOrganizadora = () => {
  return (
    <Container maxWidth="lg">
      <Box my={5}>
        <Typography variant="h3" component="h1">
          <b>Concurso Nacional de Guitarra tributo a Carlos Santana</b>
        </Typography>
      </Box>
      <Box my={2}>
        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
          style={{ transform: "translateX(100px)", opacity: 0 }}
          className="code-box-shape"
        >
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <Typography variant="h6">
                <b>Institución organizadora</b>
              </Typography>
              <Typography variant="h6">
                El Centro Comunitario y de Salud Tiopa Tlanextli es una clínica
                de primer contacto donde se ofrecen servicios básicos de salud
                así como educativos y culturales, creada con fines de apoyo a
                las personas más vulnerables de la sociedad como son, niños,
                mujeres, ancianos e indígenas.
              </Typography>
              <br />
              <Typography variant="h6">
                Aunque se enfoca en la población más vulnerable, es abierta para
                toda la comunidad sin importar su estatus económico-social.
              </Typography>
              <br />
              <Typography variant="h6">
                Comité General Organizador: Centro Comunitario y de Salud Tiopa
                Tlanextli, Dr. Martin Sandoval Gómez. Museo del Rock Mexicano
                A.C., Francisco Sánchez Loaeza.
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                alt="institucion"
                src="https://letrafria.com/wp-content/uploads/tiopa_tlanextli_carlos_santana_20200122.jpg"
                height="100%"
                width="100%"
              />
            </Grid>
          </Grid>
        </Parallax>
        <Box my={5} />
        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
          style={{ transform: "translateX(-100px)", opacity: 0 }}
          className="code-box-shape"
        >
          <Grid container spacing={2}>
            <Grid
              item
              md={6}
              xs={12}
              sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                alt="institucion"
                src="https://revistakuadro.com/wp-content/uploads/2016/09/image-2.jpeg"
                height="100%"
                width="100%"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography variant="h6">
                  <b>Objetivos</b>
                </Typography>
                <ul>
                  <li>
                    <Typography variant="h6">
                      Promover la música, la sana convivencia, la sana
                      competencia, así como motivar a nuestros jóvenes músicos
                      en oportunidades de sobresalir en una experiencia nacional
                      participando en otros foros
                    </Typography>
                  </li>
                  <br />
                  <li>
                    <Typography variant="h6">
                      Promover la cultura y dar auge al turismo regional,
                      estatal, nacional de nuestras sedes.
                    </Typography>
                  </li>
                  <br />
                  <li>
                    <Typography variant="h6">
                      Presentar la oportunidad a músicos amateur como
                      profesionales a mostrar sus habilidades musicales con la
                      guitarra abriendo sus posibilidades de ser reconocidos a
                      nivel nacional.
                    </Typography>
                  </li>
                </ul>
              </Box>
            </Grid>
          </Grid>
        </Parallax>
      </Box>
    </Container>
  );
};

export default InstitucionOrganizadora;