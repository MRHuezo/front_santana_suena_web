import React from "react";
import { Box, Typography } from "@mui/material";
import { Folder } from "@mui/icons-material";

export default function EmptyQuery() {
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
      <Folder color="disabled" sx={{fontSize: 80}} />
      <Typography align="center">No hay información</Typography>
    </Box>
  );
}
