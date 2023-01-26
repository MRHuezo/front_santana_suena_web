import React, {useContext} from "react";
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

const DatosPersonales = () => {
  const { error, data, setData } = useContext(InscripcionContext)
  const handleChange = (e) => {
    let name = e.target.name;
    let value = name === "accept" ? !data.accept : e.target.value;

    setData({ ...data, [name]: value });
  };

  return (
    <Paper variant="outlined" sx={{ display: "block", p: 4, width: "100%", height: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            error={error && data.sede === ""}
          >
            <InputLabel id="sede-label">Sede</InputLabel>
            <Select
              labelId="sede-label"
              id="sede"
              name="sede"
              value={data.sede}
              onChange={handleChange}
              label="Sede"
            >
              <MenuItem value="">
                <em> </em>
              </MenuItem>
              <MenuItem value={1}>Guadalajara</MenuItem>
              <MenuItem value={2}>Cd. México</MenuItem>
              <MenuItem value={3}>Baja california</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            size="small"
            label="Nombre"
            name="nombre"
            variant="outlined"
            error={error && data.nombre === ""}
            helperText={error ? "Campo Requerido" : ""}
            placeholder="Nombre del participante"
            value={data.nombre !== "" ? data.nombre : ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            size="small"
            name="lugar_origen"
            label="Lugar de origen"
            variant="outlined"
            error={error && data.lugar_origen === ""}
            helperText={error ? "Campo Requerido" : ""}
            placeholder="Lugar de origen"
            value={data.lugar_origen !== "" ? data.lugar_origen : ""}
            onChange={handleChange}
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
            error={error && data.fecha_nacimiento === ""}
            helperText={error ? "Campo Requerido" : ""}
            onChange={handleChange}
            value={data.fecha_nacimiento !== "" ? data.fecha_nacimiento : ""}
            placeholder="Fecha de nacimiento"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            error={error && data.sexo === ""}
          >
            <InputLabel id="sexo-label">Sexo</InputLabel>
            <Select
              labelId="sexo-label"
              id="sexo"
              name="sexo"
              value={data.sexo}
              onChange={handleChange}
              label="Sexo"
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
            name="direccion"
            label="Dirección"
            variant="outlined"
            placeholder="Dirección"
            value={data.direccion !== "" ? data.direccion : ""}
            error={error && data.direccion === ""}
            helperText={error ? "Campo Requerido" : ""}
            onChange={handleChange}
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
            value={data.telefono !== "" ? data.telefono : ""}
            error={error && data.telefono === ""}
            helperText={error ? "Campo Requerido" : ""}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            size="small"
            label="Correo eléctronico"
            name="email"
            variant="outlined"
            placeholder="Correo eléctronico"
            onChange={handleChange}
            value={data.email !== "" ? data.email : ""}
            error={error && data.email === ""}
            helperText={error ? "Campo Requerido" : ""}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DatosPersonales;
