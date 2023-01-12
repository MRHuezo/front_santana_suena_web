import React from "react";
import { Box, Grid } from "@mui/material";
import ItemPublicacion from "./ItemPublicacion";

const ListaPublicaciones = () => {
  return (
    <Box sx={{ p:1, maxHeight: "80vh", overflowX: "scroll" }}>
      <Grid container spacing={2}>
        {["Registrate", "Participantes", "Fecha de evento!", "Sede autlan", "finalistas"].map((res, index) => (
          <Grid item md={4}>
            <ItemPublicacion key={index} data={res} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ListaPublicaciones;
