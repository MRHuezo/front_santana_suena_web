import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import NavbarAdmin from "../Components/Navbar/NavbarAdmin";
import { useTheme } from "@mui/material";
import { Container } from "@mui/system";

function AdminLayout() {
  const {palette} = useTheme()
  return (
    <Grid container>
      <Grid item xs={2.5} sx={{backgroundColor: palette.grey[100]}}>
        <NavbarAdmin />
      </Grid>
      <Grid item xs={9.5}>
        <Box boxShadow={1} sx={{py: 2, height: "100vh"}}>
          <Container maxWidth="lg">
            <Outlet />
          </Container>
        </Box>
      </Grid>
    </Grid>
  );
}

export default AdminLayout;
