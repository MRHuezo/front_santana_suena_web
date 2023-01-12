import React from "react";
import { Box, Button } from "@mui/material";
import { Add } from "@mui/icons-material";

const NuevaPublicacion = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Button variant="contained" color="primary" startIcon={<Add />}>
        Nueva Publicación
      </Button>
    </Box>
  );
};

export default NuevaPublicacion;
