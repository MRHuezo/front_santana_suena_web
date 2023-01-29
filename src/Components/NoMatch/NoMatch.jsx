import React from "react";
import { useRouteError } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function NoMatch() {
  const error = useRouteError();
  console.error(error);

  return (
    <Box
      id="error-page"
      sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <div>
        <Typography variant="h1" align="center">Oops!</Typography>
        <Typography align="center">Sorry, an unexpected error has occurred.</Typography>
        <Typography align="center">
          <i>{error.statusText || error.message}</i>
        </Typography>
      </div>
    </Box>
  );
}
