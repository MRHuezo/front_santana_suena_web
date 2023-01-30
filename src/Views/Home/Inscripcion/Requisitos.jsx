import React, { useContext } from "react";
import { TextField, Box, Typography, Paper, Checkbox } from "@mui/material";
import { InscripcionContext } from "../../../Context/InscripcionCtx";

const Requisitos = () => {
  const { data, setData } = useContext(InscripcionContext);
  const {
    experiencia_artistica,
    nombre_tema,
    url_video,
    aviso_privacidad,
  } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleChangeAviso = (e) => {
    setData((data) => ({ ...data, aviso_privacidad: e.target.checked }));
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
        value={url_video}
        margin="normal"
      />
      <TextField
        fullWidth
        size="small"
        label="Nombre de la canción"
        variant="outlined"
        name="nombre_tema"
        placeholder="Nombre de la canción"
        onChange={handleChange}
        value={nombre_tema}
        margin="normal"
      />
      <TextField
        fullWidth
        name="experiencia_artistica"
        label="Experiencia artística"
        variant="outlined"
        placeholder="Experiencia artística"
        onChange={handleChange}
        value={experiencia_artistica}
        margin="normal"
        multiline
        rows={4}
      />
      <Box display="center" justifyContent="center" sx={{ mt: 1 }}>
        <Checkbox
          name="aviso_privacidad"
          checked={aviso_privacidad}
          onChange={handleChangeAviso}
          inputProps={{ "aria-label": "controlled" }}
        />
        <Typography sx={{ mt: 1 }}>Aceptar términos y condiciones</Typography>
      </Box>
    </Paper>
  );
};

export default Requisitos;
