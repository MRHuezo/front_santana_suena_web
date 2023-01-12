import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { KeyboardBackspace } from "@mui/icons-material";
import { Link } from "react-router-dom";

const LayoutLogin = () => {
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
        component={Link} to="/"
      >
        <KeyboardBackspace />
      </IconButton>
      <Paper sx={{ display: "block", p: 4 }}>
        <TextField label="Username" fullWidth margin="normal" />
        <TextField label="Password" fullWidth margin="normal" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant="contained" margin="normal">
            continuar
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default LayoutLogin;
