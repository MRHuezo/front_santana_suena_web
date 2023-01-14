import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardHeader, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { Parallax } from "rc-scroll-anim";
import { EmojiEvents } from "@mui/icons-material";

function FinalistasHome() {
  const finalistas = [
    {
      nombre: "James Hendrix",
      imagen:
        "https://unycos.com/blog/wp-content/uploads/2019/03/jimi-hendrix.jpg",
      descripcion:
        "James Marshall Hendrix, más conocido como Jimi Hendrix, fue un guitarrista, cantante y compositor.",
    },
    {
      nombre: "Tony Iommi",
      imagen:
        "https://unycos.com/blog/wp-content/uploads/2019/03/tony-iommi.png",
      descripcion:
        "El guitarrista de Black Sabbath configuró junto a Ozzy Osbourne un sonido que perdura en el tiempo.",
    },
    {
      nombre: "Carlos Santana",
      imagen:
        "https://unycos.com/blog/wp-content/uploads/2019/03/carlos-santana.jpg",
      descripcion:
        "Este es probablemente el músico rockero latino más conocido de la historia del rock. ",
    },
    {
      nombre: "Eric Clapton",
      imagen:
        "https://unycos.com/blog/wp-content/uploads/2019/03/eric-clapton-tocando.jpg",
      descripcion:
        "Este es de los pocos  músicos que ha logrado entrar al salón de la fama del rock en tres ocasiones. ",
    },
    {
      nombre: "Slash",
      imagen: "https://unycos.com/blog/wp-content/uploads/2019/03/slash.jpg",
      descripcion:
        "lash es probablemente el guitarrista más conocido por un mayor número de generaciones en el planeta. ",
    },
  ];
  return (
    <Box sx={{ mt: 3 }}>
      <Container maxWidth="lg">
        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
          style={{ transform: "translateX(-100px)", opacity: 0 }}
          className="code-box-shape"
        >
          <Box sx={{ my: 5, display: "flex", justifyContent: "center" }}>
            <EmojiEvents sx={{ fontSize: 50, mx: 2 }} color="secondary" />
            <Typography variant="h3">Finalistas</Typography>
          </Box>
        </Parallax>
        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
          style={{ transform: "translateX(100px)", opacity: 0 }}
          className="code-box-shape"
        >
          <Grid container spacing={2} key="1">
            {finalistas.map((res, index) => (
              <Grid key={res.nombre} item md={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader title={res.nombre} />
                  <CardMedia
                    component="img"
                    height="194"
                    image={res.imagen}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {res.descripcion}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Parallax>
      </Container>
    </Box>
  );
}

export default FinalistasHome;
