import React, { Fragment, useState } from "react";
import {
  TextField,
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Parallax } from "rc-scroll-anim";
import NavbarHome from "../../../Components/Navbar/NavbarHome";

function InscripcionesHome() {
  return (
    <Fragment>
      <NavbarHome />
      <Box
        sx={{
          height: "100vh",
          position: "relative",
          backgroundImage:
            "url(https://www.teahub.io/photos/full/125-1255650_carlos-santana.jpg)",
        }}
        id="inscripcion"
      >
        <Box
          sx={{
            position: "absolute",
            height: "100vh",
            width: "100vw",
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.8590029761904762) 48%, rgba(0,0,0,0.32679009103641454) 100%)",
          }}
        />
        <Grid container sx={{ height: "100%" }}>
          <Grid item md={6} sx={{ zIndex: 99 }}>
            <Formulario />
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Parallax
              animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
              style={{ transform: "translateX(100px)", opacity: 0 }}
              className="code-box-shape"
            >
              <Box>
                <Box sx={{ my: 6 }}>
                  <Typography color="white" variant="h2">
                    <b>!Inscríbete ahora!</b>
                  </Typography>
                  <br />
                  <Typography color="white" variant="h4">
                    Demuéstranos tu talento y participa en la sede más cercana,
                   a tu lugar de residencia para que puedas participar en la gran final
                   en Autlán de Navarro tierra de CARLOS SANTANA.
                  </Typography>
                  <br />
                  <Typography color="white" variant="h6">
                    <b>
                      No olvides revisar las bases del concurso.
                    </b>
                  </Typography>
                </Box>
              </Box>
            </Parallax>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
}

const Formulario = () => {
   
  const [sede, setSede] = useState("");
  const [sexo, setSexo] = useState("");
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    sede:'',
    lugar_origen:'',
    nombre:'',
    fecha_nacimiento:'',
    sexo:'',
    direccion:'',
    telefono:'',
    email:'',
    comprobante_de_pago:null,
    identificacion: null,
    url_video: '',
    nombre_cancion:'',
    experiencia_artistica:'',
    accept:false

  })

  const handleChange = (e) => {
    let name = e.target.name;
    let value = (name === 'accept') ? !data.accept : e.target.value;
    
    setData({...data, [name]: value});
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <Paper sx={{ display: "block", p: 4, width: "100%" }}>
        <Typography variant="h5" gutterBottom>
          Registrarse
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          <Grid item xs={12} md={6}>
            <FormControl variant="standard" sx={{ minWidth: "100%" }} error={error && data.sede === ''}>
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
          <Grid item  xs={12} md={6}>
            <TextField
              fullWidth
              size="small"
              label="Nombre"
              name="nombre"
              variant="outlined"
              error={error && data.nombre === ''}
              helperText={error ? "Campo Requerido" : ''}
              placeholder="Nombre del participante"
              value={(data.nombre !== '') ? data.nombre : ''}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>
          <Grid item  xs={12} md={4}>
            <TextField
              fullWidth
              size="small"
              name="lugar_origen"
              label="Lugar de origen"
              variant="outlined"
              error={error && data.lugar_origen === ''}
              helperText={error ? "Campo Requerido" : ''}
              placeholder="Lugar de origen"
              value={(data.lugar_origen !== '') ? data.lugar_origen : ''}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>
          
          <Grid item xs={12} md={4}>
            <TextField
              id="date"
              label="Fecha de nacimiento"
              name="fecha_nacimiento"
              type="date"
              fullWidth
              variant="outlined"
              error={error && data.fecha_nacimiento === ''}
              helperText={error ? "Campo Requerido" : ''}
              onChange={handleChange}
              value={(data.fecha_nacimiento !== '') ? data.fecha_nacimiento : ''}
              placeholder="Fecha de nacimiento"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl variant="standard" sx={{ minWidth: "100%" }}error={error && data.sexo === ''}>
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
                <MenuItem value={'Masculino'}>Masculino</MenuItem>
                <MenuItem value={'Femenino'}>Femenino</MenuItem>
                <MenuItem value={'Otro'}>Otro</MenuItem>
              </Select>
            </FormControl>
          </Grid>     
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              size="small"
              name="direccion"
              label="Dirección"
              variant="outlined"
              placeholder="Dirección"
              value={(data.direccion !== '') ? data.direccion : ''}
              error={error && data.direccion === ''}
              helperText={error ? "Campo Requerido" : ''}
              onChange={handleChange}
              
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              size="small"
              label="Teléfono"
              variant="outlined"
              name="telefono"
              placeholder="Teléfono"
              onChange={handleChange}
              value={(data.telefono !== '') ? data.telefono : ''}
              error={error && data.telefono === ''}
              helperText={error ? "Campo Requerido" : ''}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              size="small"
              label="Correo eléctronico"
              name="email"
              variant="outlined"
              placeholder="Correo eléctronico"
              onChange={handleChange}
              value={(data.email !== '') ? data.email : ''}
              error={error && data.email === ''}
              helperText={error ? "Campo Requerido" : ''}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              size="small"
              label="Comprobante de pago"
              name="comprobante_de_pago"
              variant="outlined"
              placeholder="Comprobante de pago"
              onChange={handleChange}
              value={(data.comprobante_de_pago !== '') ? data.comprobante_de_pago : ''}
              error={error && data.comprobante_de_pago === null}
              helperText={error ? "Campo Requerido" : ''}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              size="small"
              label="Identificación"
              variant="outlined"
              name="identificacion"
              placeholder="Identificación"
              onChange={handleChange}
              value={(data.identificacion !== '') ? data.identificacion : ''}
              error={error && data.identificacion === null}
              helperText={error ? "Campo Requerido" : ''}
              margin="normal"
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              size="small"
              label="Url video"
              variant="outlined"
              name="url_video"
              placeholder="Url video"
              onChange={handleChange}
              value={(data.url_video !== '') ? data.url_video : ''}
              error={error && data.url_video === ''}
              helperText={error ? "Campo Requerido" : ''}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              size="small"
              label="Nombre de la canción"
              variant="outlined"
              name="nombre_cancion"
              placeholder="Nombre de la canción"
              onChange={handleChange}
              value={(data.nombre_cancion !== '') ? data.nombre_cancion : ''}
              error={error && data.nombre_cancion === ''}
              helperText={error ? "Campo Requerido" : ''}
              margin="normal"
             
            />
          </Grid>
          <Grid item xs={12} md={6}/>
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              name="experiencia_artistica" 
              label="Experiencia artística"
              variant="outlined"
              placeholder="Experiencia artística"
              onChange={handleChange}
              value={(data.experiencia_artistica !== '') ? data.experiencia_artistica : ''}
              error={error && data.experiencia_artistica === ''}
              margin="normal"
              multiline
              maxRows={12}
             
            />
          </Grid>

          
        </Grid>
        <Box display="center" justifyContent="center" sx={{ mt: 1 }}>
          <Checkbox
            name='accept'
            checked={data.accept}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <Typography sx={{ mt: 1 }}>Aceptar términos y condiciones</Typography>
        </Box>
        <Box display="flex" justifyContent="flex-end" sx={{ mt: 4 }}>
          <Button component={Link} to="/">
            Cancelar
          </Button>
          <Button
            onClick={() => console.log("chuki")}
            color="secondary"
            variant="contained"
          >
            Guardar
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default InscripcionesHome;
