import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { Place } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function CardItemSede({ sede }) {
  return (
    <Card sx={{ width: "100%", height: "100%" }}>
      <CardActionArea
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
        LinkComponent={Link}
        to={`/sede/${sede.id_name}`}
      >
        <CardMedia
          component="img"
          height="210"
          image={sede.img}
          alt={sede.place}
        />
        <CardContent
          sx={{
            height: "100%",
            width: "100%",
            border: "1px solid transparent",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Place color="secondary" sx={{ fontSize: 30 }} />
            <Typography gutterBottom variant="h6" component="div">
              <b>{`${sede.name}, ${sede.place}`}</b>
            </Typography>
          </Box>

          <Typography>{`Institución: ${sede.institution}`}</Typography>
          <Typography>{`Coordinador: ${sede.encargado}`}</Typography>
          <Typography>{`Dirección: ${sede.address.street} C.P. ${sede.address.postal_code}`}</Typography>
          <Typography>{`Teléfono: ${sede.telefono}`}</Typography>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
            <Typography variant="button" color="secondary">
              Ver Sede
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
