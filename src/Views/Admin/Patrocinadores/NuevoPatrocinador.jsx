import React from "react";
import { Box, Button } from "@mui/material";
import { Add } from "@mui/icons-material";

const NuevoPatrocinador = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Button variant="contained" color="primary" startIcon={<Add />}>
        Nuevo patrocinador
      </Button>
    </Box>
  );
};

export default NuevoPatrocinador;
