import React from "react";
import { Box, Button } from "@mui/material";
import { Add } from "@mui/icons-material";

const NuevoComunicado = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Button variant="contained" color="primary" startIcon={<Add />}>
        Nuevo comunicado
      </Button>
    </Box>
  );
};

export default NuevoComunicado;
