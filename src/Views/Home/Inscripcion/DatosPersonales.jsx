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
import UserPhoto from "./UserPhoto";

const DatosPersonales = () => {
  const { data, setData } = useContext(InscripcionContext);
  const { sedes } = useContext(MainContext);
  const {
    sede,
    name,
    from,
    birthday,
    address,
    email,
    genre,
    phone,
    curp,
  } = data;

  const handleChange = (e, child) => {
    const { name, value } = e.target;
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
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <UserPhoto />
            </Grid>
            <Grid item xs={12} md={8}>
              <FormControl
                variant="outlined"
                size="small"
                fullWidth
                required
                margin="dense"
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
                margin="dense"
              />
              <TextField
                fullWidth
                size="small"
                label="CURP"
                name="curp"
                variant="outlined"
                placeholder="CURP"
                value={curp}
                onChange={handleChange}
                required
                margin="dense"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            size="small"
            name="from"
            label="Lugar de origen"
            variant="outlined"
            placeholder="Lugar de origen"
            value={from}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="date"
            label="Fecha de nacimiento"
            name="birthday"
            type="date"
            fullWidth
            variant="outlined"
            onChange={handleChange}
            value={birthday}
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
            <InputLabel id="genre-label">Género</InputLabel>
            <Select
              labelId="genre-label"
              id="genre"
              name="genre"
              value={genre}
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
            name="phone"
            placeholder="Teléfono"
            onChange={handleChange}
            value={phone}
            requiredo
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
            value={email}
            required
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DatosPersonales;
