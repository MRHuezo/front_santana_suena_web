import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { IconButton, Typography } from "@mui/material";
import { FilePresent } from "@mui/icons-material";
import { Box } from "@mui/system";
import moment from "moment";
import "moment/locale/es-mx";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DetallesIndex({ data }) {
  const [open, setOpen] = React.useState(false);
  const [competitor, setCompetitor] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
    setCompetitor(data);
  };

  const handleClose = () => {
    setOpen(false);
    setCompetitor(null);
  };

  /* 
  id_sede;
  pay;
  personal_identify;
  from;
  status; */

  return (
    <div>
      <IconButton size="small" color="primary" onClick={handleClickOpen}>
        <FilePresent />
      </IconButton>
      <DialogInfoParticipante
        open={open}
        handleClose={handleClose}
        competitor={competitor}
      />
    </div>
  );
}

const DialogInfoParticipante = ({ competitor, open, handleClose }) => {
  if (!competitor) return;

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogContent>
        <Box
          sx={{
            height: "250px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src={competitor.url_video}
            title="YouTube video player"
            frameborder="0"
            allowfullscreen
            on
          ></iframe>
        </Box>
        <Typography variant="h6" sx={{ mt: 1 }}>
          <b>{competitor.name_song}</b>
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          <b>{competitor.name}</b>
        </Typography>
        <Box sx={{ mb: 1 }}>
          <Typography variant="subtitle2" color="gray">
            Experiencia artística
          </Typography>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            {competitor.artistic_experience}
          </Typography>
        </Box>
        <Box sx={{ mb: 1 }}>
          <Typography variant="subtitle2" color="gray">
            Más datos del participante
          </Typography>
          <Typography>{`Género: ${competitor.genre}`}</Typography>
          <Typography>{`Fecha de nacimiento: ${moment()
            .locale("es-mx")
            .format("LL")}`}</Typography>
          <Typography>{`Correo: ${competitor.email}`}</Typography>
          <Typography>{`Telefono: ${competitor.phone}`}</Typography>
          <Typography>{`Domicilio: ${competitor.address}, ${competitor.from}`}</Typography>
          <Box sx={{display: "flex", my: 2}}>
            <Button color="primary">Comprobante de pago</Button>
            <Button color="primary">Identificación personal</Button>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button color="primary" onClick={handleClose}>
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
