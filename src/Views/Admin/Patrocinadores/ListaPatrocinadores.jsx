import React from "react";
import { Box, Grid } from "@mui/material";
import ItemPatrocinador from "./ItemPatrocinador";

const ListaPatrocinadores = () => {
  return (
    <Box sx={{ p: 1, maxHeight: "80vh", overflowX: "scroll" }}>
      <Grid container spacing={2}>
        {["AB cloud", "Tiopa Tlanextli", "Caja popular", "Tacos martha", "El caldero", "una mas"].map((res, index) => (
          <Grid item md={4}>
            <ItemPatrocinador key={index} data={res} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ListaPatrocinadores;
