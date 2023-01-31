import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

export default function LoadingSpiner() {
  return (
    <Box
      sx={{
        height: "30vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <CircularProgress color="primary" size={40} />
      <Typography align="center">Cargando...</Typography>
    </Box>
  );
}
