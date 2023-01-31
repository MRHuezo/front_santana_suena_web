import React, { useContext } from "react";
import { TextField, Box, Typography, Paper, Checkbox } from "@mui/material";
import { InscripcionContext } from "../../../Context/InscripcionCtx";

const Requisitos = () => {
  const { data, setData } = useContext(InscripcionContext);
  const {
    artistic_experience,
    name_song,
    url_video,
    privacy_notice,
  } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleChangeAviso = (e) => {
    setData((data) => ({ ...data, privacy_notice: e.target.checked }));
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
        name="name_song"
        placeholder="Nombre de la canción"
        onChange={handleChange}
        value={name_song}
        margin="normal"
      />
      <TextField
        fullWidth
        name="artistic_experience"
        label="Experiencia artística"
        variant="outlined"
        placeholder="Experiencia artística"
        onChange={handleChange}
        value={artistic_experience}
        margin="normal"
        multiline
        rows={4}
      />
      <Box display="center" justifyContent="center" sx={{ mt: 1 }}>
        <Checkbox
          name="privacy_notice"
          checked={privacy_notice}
          onChange={handleChangeAviso}
          inputProps={{ "aria-label": "controlled" }}
        />
        <Typography sx={{ mt: 1 }}>Aceptar términos y condiciones</Typography>
      </Box>
    </Paper>
  );
};

export default Requisitos;
