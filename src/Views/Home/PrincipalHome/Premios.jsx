import React from "react";
import Box from "@mui/material/Box";
import { Parallax } from "rc-scroll-anim";
import { Container } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { EmojiEvents, Looks3, LooksOne, LooksTwo } from "@mui/icons-material";
const premios = [
  {
    lugar: "1er Lugar",
    premios: [
      // 'Guitarra PRS "Santana patrocinada por PAUL REED SMITH"',
      "Viaje a Autlán Jalisco",
      "Paquete de souvenirs",
      "Reconocimiento de participación",
    ],
    icon: <LooksOne sx={{ fontSize: 90 }} />,
  },
  {
    lugar: "2do Lugar",
    premios: [
      "Paquete de souvenirs otorgado por los diferentes patrocinadores del evento",
    ],
    icon: <LooksTwo sx={{ fontSize: 60 }} />,
  },
  {
    lugar: "3er Lugar",
    premios: [
      "Paquete de souvenirs otorgado por los diferentes patrocinadores del evento",
    ],
    icon: <Looks3 sx={{ fontSize: 60 }} />,
  },
];

const premiosFinal = [
  {
    lugar: "1er Lugar",
    premios: [
      // "Guitarra autografiada por Carlos Santana",
      'Guitarra PRS "Santana patrocinada por PAUL REED SMITH',
      "Reconocimiento de participación",
      "Paquete otorgado por los patrocinadores del evento",
    ],
    icon: <LooksOne sx={{ fontSize: 90 }} />,
  },
  {
    lugar: "2do Lugar",
    premios: [
      "Paquete de souvenirs otorgado por los diferentes patrocinadores del evento",
    ],
    icon: <LooksTwo sx={{ fontSize: 60 }} />,
  },
  {
    lugar: "3er Lugar",
    premios: [
      "Paquete de souvenirs otorgado por los diferentes patrocinadores del evento",
    ],
    icon: <Looks3 sx={{ fontSize: 60 }} />,
  },
];

const Reconocimientos = () => {
  return (
    <Box sx={{ py: 5 }} id="reconocimientos">
      <Container maxWidth="lg">
        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
          style={{ transform: "translateX(-100px)", opacity: 0 }}
          className="code-box-shape"
        >
          <Box sx={{ my: 4, mt:1, mb:1, display: "flex", justifyContent: "center" }}>
            <EmojiEvents sx={{ fontSize: 50, mx: 2 }} color="secondary" />
            <Typography variant="h3">Reconocimientos</Typography>
            <EmojiEvents sx={{ fontSize: 50, mx: 2 }} color="secondary" />
          </Box>
          <Box my={5} mt={2}>
            <Grid container>
              <Grid item md={6} xs={12}>
                <Box my={5} mt={2}>
                  <Typography align="center" variant="h6">
                    <b>Reconocimientos por SEDE</b>
                  </Typography>
                </Box>
                {premios.map(({ lugar, premios, icon }, index) => (
                  <Parallax
                    key={`${lugar}-${index}`}
                    animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
                    style={{ transform: "translateX(-100px)", opacity: 0 }}
                    className="code-box-shape"
                  >
                    <Grid container spacing={2} sx={{ width: "100%", my: 1 }}>
                      <Grid
                        item
                        xs={12}
                        md={2}
                        sx={{
                          height: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {icon}
                      </Grid>
                      <Grid item xs={12} md={10}>
                        <Typography variant="h6">
                          <b>{lugar}</b>
                        </Typography>
                        <ul>
                          {premios.map((award, index) => (
                            <li key={index}>
                              <Typography>{award}</Typography>
                            </li>
                          ))}
                        </ul>   
                      </Grid>
                    </Grid>
                  </Parallax>
                ))}
                
              </Grid>
              <Grid item md={6} xs={12}>
                <Box my={5} mt={2}>
                  <Typography align="center" variant="h6">
                    <b>Reconocimientos de la GRAN FINAL</b>
                  </Typography>
                </Box>
                {premiosFinal.map(({ lugar, premios, icon }, index) => (
                  <Parallax
                    key={`${lugar}-${index}`}
                    animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
                    style={{ transform: "translateX(-100px)", opacity: 0 }}
                    className="code-box-shape"
                  >
                    <Grid container spacing={2} sx={{ width: "100%", my: 1 }}>
                      <Grid
                        item
                        xs={12}
                        md={2}
                        sx={{
                          height: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {icon}
                      </Grid>
                      <Grid item xs={12} md={10}>
                        <Typography variant="h6">
                          <b>{lugar}</b>
                        </Typography>
                        <ul>
                          {premios.map((award, index) => (
                            <li key={index}>
                              <Typography>{award}</Typography>
                            </li>
                          ))}
                        </ul>
                      </Grid>
                    </Grid>
                  </Parallax>
                ))}
              </Grid>
            </Grid>
          </Box>
        </Parallax>
      </Container>
    </Box>
  );
};

export default Reconocimientos;
