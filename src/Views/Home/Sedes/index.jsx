import React from "react";
import Box from "@mui/material/Box";
import { Parallax } from "rc-scroll-anim";
import { Container } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { Place, PushPin } from "@mui/icons-material";

const SedesHome = () => {
  const locations = [
    {
      location: "Autlán de Navarro",
      imagen:
        "https://iieg.gob.mx/strategos/wp-content/uploads/2021/07/autlan-11.jpg",
      description:
        "Esta es una descripcion para esta tarjeta, y me estoy inventando todo este rollo, aqui puede ir los detalles de la sede y mas información como numero, ubicacion, etc.",
    },
    {
      location: "Guadalaraja",
      imagen: "https://i.ytimg.com/vi/_5SXkhkgNHI/maxresdefault.jpg",
      description:
        "Esta es una descripcion para esta tarjeta, y me estoy inventando todo este rollo, aqui puede ir los detalles de la sede y mas información como numero, ubicacion, etc.",
    },
    {
      location: "CDMX",
      imagen: "https://i.ytimg.com/vi/kJmHX67OUPM/maxresdefault.jpg",
      description:
        "Esta es una descripcion para esta tarjeta, y me estoy inventando todo este rollo, aqui puede ir los detalles de la sede y mas información como numero, ubicacion, etc.",
    },
    {
      location: "Monterrey",
      imagen: "https://i.ytimg.com/vi/MWWj18tTWbw/maxresdefault.jpg",
      description:
        "Esta es una descripcion para esta tarjeta, y me estoy inventando todo este rollo, aqui puede ir los detalles de la sede y mas información como numero, ubicacion, etc.",
    },
  ];
  return (
    <Box sx={{ py: 5 }}>
      <Container maxWidth="md">
        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
          style={{ transform: "translateX(-100px)", opacity: 0 }}
          className="code-box-shape"
        >
          <Box sx={{ my: 4, display: "flex", justifyContent: "center" }}>
            <Place sx={{fontSize: 50, mx: 2}} color="secondary" />
            <Typography variant="h3">Sedes</Typography>
          </Box>
        </Parallax>
        {locations.map(({ location, imagen, description }, index) => (
          <Parallax
            key={`${location}-${index}`}
            animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
            style={{ transform: "translateX(-100px)", opacity: 0 }}
            className="code-box-shape"
          >
            <Grid container spacing={2} sx={{ width: "100%", my: 3 }}>
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
                <PushPin color="secondary" sx={{ fontSize: 80 }} />
              </Grid>
              <Grid item xs={12} md={7}>
                <Typography variant="h6">
                  <b>{location}</b>
                </Typography>
                <Typography>{description}</Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box
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
                  <img alt={location} src={imagen} height="100%" width="100%" />
                </Box>
              </Grid>
            </Grid>
          </Parallax>
        ))}
      </Container>
    </Box>
  );
};

export default SedesHome;
