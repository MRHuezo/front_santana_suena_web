import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import {
  KeyboardBackspace,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import axiosClient from "../Config/axios";
import { CircularProgress, InputAdornment } from "@mui/material";
import { MainContext } from "../Context/MainCtx";

const LayoutLogin = () => {
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const { snackMessage } = React.useContext(MainContext);

  const login = async (e) => {
    e.preventDefault();
    if (!userData.email || !userData.password) {
      snackMessage({ message: "Datos incompletos", variant: "error" });
      return;
    }
    setLoading(true);
    await axiosClient
      .post("/login/", userData)
      .then((res) => {
        setLoading(false);
        const token = res.data.token;
        localStorage.setItem("tokenSS", token);
        //success
        console.log(res);
      })
      .catch((err) => {
        setLoading(false);
        if (err.response) {
          snackMessage({
            message: err.response.data.message,
            variant: "error",
          });
        } else {
          snackMessage({
            message: "No se pudo establecer una conexión con el servidor",
            variant: "error",
          });
        }
      });
  };

  const handleGetUserData = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <IconButton
        color="primary"
        size="large"
        sx={{ position: "absolute", top: 10, left: 20 }}
        component={Link}
        to="/"
      >
        <KeyboardBackspace />
      </IconButton>
      <form autoComplete="off" onSubmit={login}>
        <Paper sx={{ display: "block", p: 4 }}>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            name="email"
            value={userData.email}
            onChange={handleGetUserData}
            required
          />
          <TextField
            required
            label="Password"
            name="password"
            fullWidth
            margin="normal"
            value={userData.password}
            onChange={handleGetUserData}
            type={show ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={() => setShow(!show)}>
                    {show ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              margin="normal"
              type="submit"
              startIcon={
                loading ? <CircularProgress color="inherit" size={20} /> : null
              }
            >
              continuar
            </Button>
          </Box>
        </Paper>
      </form>
    </Container>
  );
};

export default LayoutLogin;
