import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { Grid, IconButton, Typography } from "@mui/material";
import { FilePresent } from "@mui/icons-material";
import { Box } from "@mui/system";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DetallesIndex({ data }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton size="small" color="primary" onClick={handleClickOpen}>
        <FilePresent />
      </IconButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullWidth
        maxWidth="md"
      >
        <DialogContent>
          <Grid container>
            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  height: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid"
                }}
              >
                video
              </Box>
              <Typography>nombre del tema</Typography>
              <Box sx={{border: "1px solid", my: 2}}>
                <Typography>experiencia del artista</Typography>
              </Box>
              <Box sx={{border: "1px solid", my: 2}}>
                    Calificar
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <ul>
                <li>nombre</li>
                <li>fecha nacimiento + genero</li>
                <li>correo</li>
                <li>telefono</li>
                <li>domicilio + lugar de origen + cp</li>
                <li>comprobante de pago + identificacion</li>
              </ul>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button color="primary" onClick={handleClose}>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
