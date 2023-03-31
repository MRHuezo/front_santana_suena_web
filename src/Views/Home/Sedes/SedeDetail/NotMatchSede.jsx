import React from "react";
import { Box, Typography } from "@mui/material";
import NavbarHome from "../../../../Components/Navbar/NavbarHome";

export default function NotMatchSede({error = "Esta página no existe"}) {
  return (
    <>
      <NavbarHome />
      <Box
        id="error-page"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Typography variant="h1" align="center">
            Oops!
          </Typography>
          <Typography align="center">{error}</Typography>
        </div>
      </Box>
    </>
  );
}
