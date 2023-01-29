import React, { useEffect } from "react";
import { Outlet, useMatches, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import NavbarAdmin from "../Components/Navbar/NavbarAdmin";
import { useTheme } from "@mui/material";
import { Container } from "@mui/system";
import { useContext } from "react";
import { MainContext } from "../Context/MainCtx";
import jwtDecode from "jwt-decode";

function AdminLayout() {
  const { palette } = useTheme();
  const navigate = useNavigate();
  const matches = useMatches();
  const token = localStorage.getItem("tokenSS");
  const { user, setUser } = useContext(MainContext);

  useEffect(() => {
    if (token) {
      setUser(jwtDecode(token));
    } else if (!token) {
      navigate("/");
    }
  }, [setUser, token, navigate]);

  useEffect(() => {
    if (matches.length === 1) {
      navigate("/admin/solicitudes");
    }
  }, [matches.length, navigate]);

  if (!token || !user) return null;

  console.log(user);

  return (
    <Grid container>
      <Grid item xs={12} md={2.5} sx={{ backgroundColor: palette.grey[100], display: {xs: "none", md: "flex"} }}>
        <NavbarAdmin />
      </Grid>
      <Grid item xs={12} md={9.5}>
        <Box boxShadow={1} sx={{ py: 2, height: "100vh" }}>
          <Container maxWidth="lg">
            <Outlet />
          </Container>
        </Box>
      </Grid>
    </Grid>
  );
}

export default AdminLayout;
