import React,{Fragment, useState} from 'react'
import {TextField, Box, Container, Grid, Typography, Paper, Checkbox, FormControl, InputLabel, Select, MenuItem} from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
function Inscripcion() {
  const [sede, setSede] = useState('');
  const handleChange = (event) => {
    setSede(event.target.value);
  };
  return (
    <Fragment>
      <Container 
        maxWidth="md"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >  
        <Paper sx={{ display: "block", p:4, width:"80vh",height: "70vh", }}>
          <Typography variant="h4" gutterBottom>
            Registrarse
          </Typography>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <FormControl variant="standard" sx={{  minWidth: "100%" }}>
                <InputLabel id="sede-label">Sede</InputLabel>
                <Select
                  labelId="sede-label"
                  id="sede"
                  value={sede}
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
            <Grid item xs={6}>
              <TextField
                fullWidth
                size="small"
                label="Nombre"
                variant="outlined"
                placeholder="Nombre del participante"
                onChange={console.log('')}
                value={'Juan Castañeda'}
                margin='normal'
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                size="small"
                label="Dirección"
                variant="outlined"
                placeholder="Dirección"
                onChange={console.log('')}
                value={'Dirección'}
                margin='normal'
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                size="small"
                label="Correo eléctronico"
                variant="outlined"
                placeholder="Correo eléctronico"
                onChange={console.log('')}
                value={'juan@eléctronico.com'}
                margin='normal'
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                size="small"
                label="Comprobante de pago"
                variant="outlined"
                placeholder="Comprobante de pago"
                onChange={console.log('')}
                value={''}
                margin='normal'
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                size="small"
                label="Identificación"
                variant="outlined"
                placeholder="Identificación"
                onChange={console.log('')}
                value={''}
                margin='normal'
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                size="small"
                label="Teléfono"
                variant="outlined"
                placeholder="Teléfono"
                onChange={console.log('')}
                value={''}
                margin='normal'
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                size="small"
                label="Url video"
                variant="outlined"
                placeholder="Url video"
                onChange={console.log('')}
                value={''}
                margin='normal'
              />
            </Grid>
          </Grid>
          <Box display='center' justifyContent="center" sx={{mt:1}}>
            <Checkbox
              checked={true}
              onChange={console.log('true')}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            <Typography sx={{mt:1}} >
              Aceptar términos y condiciones
            </Typography>
          </Box>
          <Box display="flex" justifyContent="flex-end" sx={{mt:4}}>
            <Button component={Link} to="/">
              Cancelar
            </Button>
            <Button onClick={() => console.log('chuki')} color="secondary" variant="contained">
              Guardar
            </Button>
          </Box>
        </Paper>
       
        
         
         
     
       
      
      </Container>
      
    </Fragment>
  )
}

export default Inscripcion