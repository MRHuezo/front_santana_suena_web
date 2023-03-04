import React, { useContext, useEffect } from "react";
import {
  TextField,
  Box,
  Typography,
  Paper,
  Checkbox,
  InputAdornment,
  Tooltip,
  Alert,
} from "@mui/material";
import { InscripcionContext } from "../../../Context/InscripcionCtx";
import { Link } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { CheckCircle, Info } from "@mui/icons-material";

const Requisitos = () => {
  const { data, setData, verificado, setVerificado } = useContext(
    InscripcionContext
  );
  const { artistic_experience, name_song, url_video, privacy_notice } = data;

  const [URL] = useDebounce(url_video, 500);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleChangeAviso = (e) => {
    setData((data) => ({ ...data, privacy_notice: e.target.checked }));
  };

  useEffect(() => {
    if (URL) {
      /* eslint-disable-next-line */
      const rgx = /(?:https?:)?\/{2}(?:www\.)?youtu\.?be(?:\/|\.com\/watch\?v\=|\.com\/v\/|\.com\/embed\/)?([\w-]*)[?&]?.*/;
      const result = URL.match(rgx);
      if (!result) {
        setVerificado(false);
      } else {
        const id = result.pop();
        if (id && id.length === 11) {
          setVerificado(true);
        } else {
          setVerificado(false);
        }
      }
    } else {
      setVerificado(null);
    }
  }, [URL, setVerificado]);

  return (
    <Paper variant="outlined" sx={{ display: "block", p: 4, width: "100%" }}>
      <Alert severity="info">
        Verifica la URL que sea de tu video y que tu video este público en YouTube
      </Alert>
      <TextField
        fullWidth
        size="small"
        label="Url video"
        variant="outlined"
        name="url_video"
        placeholder="Ejemplo: https://youtu.be/icsr89F04Mw"
        onChange={handleChange}
        value={url_video}
        margin="normal"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {verificado === null ? null : verificado ? (
                <CheckCircle color="success" />
              ) : (
                <Tooltip arrow open={true} title="URL inválida" placement="top">
                  <Info />
                </Tooltip>
              )}
            </InputAdornment>
          ),
        }}
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
        rows={3}
      />
      <Box display="center" justifyContent="center" sx={{ mt: 1 }}>
        <Checkbox
          name="privacy_notice"
          checked={privacy_notice}
          onChange={handleChangeAviso}
          inputProps={{ "aria-label": "controlled" }}
        />
        <Typography sx={{ mt: 1 }}>
          He leído y acepto los{" "}
          <Link to="/terminos" target="_blank">
            términos y condiciones
          </Link>
        </Typography>
      </Box>
    </Paper>
  );
};

export default Requisitos;
