import React, { useContext } from "react";
import {
  TextField,
  Paper,
  FormControl,
  InputLabel,
  Select,
  Grid,
  NativeSelect,
  Alert,
} from "@mui/material";
import { InscripcionContext } from "../../../Context/InscripcionCtx";
import { MainContext } from "../../../Context/MainCtx";
import UserPhoto from "./UserPhoto";

const DatosPersonales = () => {
  const { data, setData } = useContext(InscripcionContext);
  const { sedes } = useContext(MainContext);
  const {
    id_sede,
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "sede") {
      setData({
        ...data,
        [name]: value.split("/")[0],
        id_sede: value.split("/")[1],
      });
      return;
    }
    setData({ ...data, [name]: value });
  };

  return (
    <Paper
      variant="outlined"
      sx={{ display: "block", p: 4, width: "100%", height: "100%" }}
    >
      <Alert severity="info">El tamaño de la imagen no debe pasar los 3Mb</Alert>
      <Grid container spacing={2} sx={{mt: 0.5}}>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <UserPhoto />
            </Grid>
            <Grid item xs={12} md={8}>
              <FormControl fullWidth size="small" required>
                <InputLabel variant="outlined" htmlFor="sede-label">
                  Sede
                </InputLabel>
                <NativeSelect
                  inputProps={{
                    name: "sede",
                    id: "sede-label",
                  }}
                  value={`${sede}/${id_sede}`}
                  onChange={handleChange}
                  input={<Select label="sede" />}
                >
                  <option value="">
                    <em>Selecciona una sede</em>
                  </option>
                  {sedes.data ? (
                    sedes.data?.map(({ name, place, _id, main }, index) => {
                      if (main) {
                        return null;
                      } else {
                        return (
                          <option
                            key={`${place} - ${index}`}
                            value={`${name} - ${place}/${_id}`}
                          >{`${name} - ${place}`}</option>
                        );
                      }
                    })
                  ) : (
                    <option value="No hay sedes disponibles">
                      <em>No hay sedes disponibles</em>
                    </option>
                  )}
                </NativeSelect>
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
                inputProps={{ style: { textTransform: "uppercase" } }}
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
          <FormControl fullWidth size="small" required>
            <InputLabel variant="outlined" htmlFor="genero-label">
              Género
            </InputLabel>
            <NativeSelect
              inputProps={{
                name: "genre",
                id: "genero-label",
              }}
              value={(genre !== "" ) ? `${genre}` : " "}
              onChange={handleChange}
              input={<Select label="Género" />}
            >
              <option value="">
                <em>Selecciona un género</em>
              </option>
              <option value={"Masculino"}>Masculino</option>
              <option value={"Femenino"}>Femenino</option>
              <option value={"Otro"}>Otro</option>
            </NativeSelect>
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
            inputProps={{ style: { textTransform: "lowercase" } }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DatosPersonales;
