import React, { useContext } from "react";
import { TextField, Box, Typography, Paper, Checkbox } from "@mui/material";
import { InscripcionContext } from "../../../Context/InscripcionCtx";

const Requisitos = () => {
  const { error, data, setData } = useContext(InscripcionContext);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = name === "accept" ? !data.accept : e.target.value;

    setData(data => ({ ...data, [name]: value }));
  };

  return (
    <Paper variant="outlined" sx={{ display: "block", p: 4, width: "100%" }}>
      <TextField
        fullWidth
        size="small"
        label="Url video"
        variant="outlined"
        name="url_video"
        placeholder="Url video"
        onChange={handleChange}
        value={data.url_video !== "" ? data.url_video : ""}
        error={error && data.url_video === ""}
        helperText={error ? "Campo Requerido" : ""}
        margin="normal"
      />
      <TextField
        fullWidth
        size="small"
        label="Nombre de la canción"
        variant="outlined"
        name="nombre_cancion"
        placeholder="Nombre de la canción"
        onChange={handleChange}
        value={data.nombre_cancion !== "" ? data.nombre_cancion : ""}
        error={error && data.nombre_cancion === ""}
        helperText={error ? "Campo Requerido" : ""}
        margin="normal"
      />
      <TextField
        fullWidth
        name="experiencia_artistica"
        label="Experiencia artística"
        variant="outlined"
        placeholder="Experiencia artística"
        onChange={handleChange}
        value={
          data.experiencia_artistica !== "" ? data.experiencia_artistica : ""
        }
        error={error && data.experiencia_artistica === ""}
        margin="normal"
        multiline
        rows={4}
      />
      <Box display="center" justifyContent="center" sx={{ mt: 1 }}>
        <Checkbox
          name="accept"
          checked={data.accept}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <Typography sx={{ mt: 1 }}>Aceptar términos y condiciones</Typography>
      </Box>
    </Paper>
  );
};

export default Requisitos;
