import React, { useContext } from "react";
import {
  TextField,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import { InscripcionContext } from "../../../Context/InscripcionCtx";
import { MainContext } from "../../../Context/MainCtx";

const DatosPersonales = () => {
  const { data, setData } = useContext(InscripcionContext);
  const { sedes } = useContext(MainContext);
  const {
    sede,
    name,
    lugar_origen,
    fecha_nacimiento,
    address,
    mail,
    genero,
    telefono,
  } = data;

  const handleChange = (e, child) => {
    const { name, value } = e.target;
    console.log(child)
    if (name === "sede") {
      setData({ ...data, [name]: value, id_sede: child.props.id_sede });
      return;
    }
    setData({ ...data, [name]: value });
  };

  return (
    <Paper
      variant="outlined"
      sx={{ display: "block", p: 4, width: "100%", height: "100%" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            required
          >
            <InputLabel id="sede-label">Sede</InputLabel>
            <Select
              labelId="sede-label"
              id="sede"
              name="sede"
              value={sede}
              onChange={handleChange}
              label="Sede"
            >
              <MenuItem value="">
                <em>Selecciona una sede</em>
              </MenuItem>
              {sedes.data ? (
                sedes.data?.map(({ name, place, _id }, index) => (
                  <MenuItem
                    key={`${place} - ${index}`}
                    id_sede={_id}
                    value={`${name} - ${place}`}
                  >{`${name} - ${place}`}</MenuItem>
                ))
              ) : (
                <MenuItem value="No hay sedes disponibles">
                  <em>No hay sedes disponibles</em>
                </MenuItem>
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            size="small"
            label="Nombre"
            name="name"
            variant="outlined"
            placeholder="Nombre del participante"
            value={name}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            size="small"
            name="lugar_origen"
            label="Lugar de origen"
            variant="outlined"
            placeholder="Lugar de origen"
            value={lugar_origen}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="date"
            label="Fecha de nacimiento"
            name="fecha_nacimiento"
            type="date"
            fullWidth
            variant="outlined"
            onChange={handleChange}
            value={fecha_nacimiento}
            placeholder="Fecha de nacimiento"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            required
          >
            <InputLabel id="genero-label">Género</InputLabel>
            <Select
              labelId="genero-label"
              id="genero"
              name="genero"
              value={genero}
              onChange={handleChange}
              label="genero"
            >
              <MenuItem value="">
                <em> </em>
              </MenuItem>
              <MenuItem value={"Masculino"}>Masculino</MenuItem>
              <MenuItem value={"Femenino"}>Femenino</MenuItem>
              <MenuItem value={"Otro"}>Otro</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            size="small"
            name="address"
            label="Dirección"
            variant="outlined"
            placeholder="Dirección"
            value={address}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            size="small"
            label="Teléfono"
            variant="outlined"
            name="telefono"
            placeholder="Teléfono"
            onChange={handleChange}
            value={telefono}
            requiredo
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            size="small"
            label="Correo eléctronico"
            name="mail"
            variant="outlined"
            placeholder="Correo eléctronico"
            onChange={handleChange}
            value={mail}
            required
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DatosPersonales;
