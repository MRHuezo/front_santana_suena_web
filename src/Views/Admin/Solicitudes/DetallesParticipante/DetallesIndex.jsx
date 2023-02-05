import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { DialogTitle, Grid, Typography } from "@mui/material";
import { Close, YouTube } from "@mui/icons-material";
import { Box } from "@mui/system";
import moment from "moment";
import "moment/locale/es-mx";
import DialogImagenPayOrId from "./DialogImagenPayOrId";
import RechazarSolicitud from "../RechazarSolicitud";
import AceptarSolicitud from "../AceptarSolicitud";
import SeleccionarParticipante from "../../Participantes/Seleccionar";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DetallesIndex({ data, status = "INSCRITO" }) {
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
  console.log(data.url_video);
  const rgx = /(?:https?:)?\/{2}(?:www\.)?youtu\.?be(?:\/|\.com\/watch\?v\=|\.com\/v\/|\.com\/embed\/)?([\w-]*)[?&]?.*/;
  let youtube_video_id = data.url_video.match(rgx).pop();

  return (
    <div>
      <Box
        onClick={handleClickOpen}
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80px",
          width: "100px",
          cursor: "pointer",
          ":hover": {
            "& .play-icon": {
              display: "flex",
              transition: "1s ease-out",
            },
          },
        }}
      >
        <img
          src={`http://img.youtube.com/vi/${youtube_video_id}/0.jpg`}
          alt=""
          style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
        <YouTube
          className="play-icon"
          sx={{
            position: "absolute",
            color: "rgb(255,255,255,0.8)",
            fontSize: 50,
            display: "none",
            transition: "1s ease-out",
          }}
        />
      </Box>
      <DialogInfoParticipante
        open={open}
        handleClose={handleClose}
        competitor={competitor}
        youtube_video_id={youtube_video_id}
        status={status}
      />
    </div>
  );
}

const DialogInfoParticipante = ({
  competitor,
  open,
  handleClose,
  youtube_video_id,
  status
}) => {
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
      <DialogTitle component="div" sx={{ p: 0 }}>
        <Box
          sx={{
            height: "275px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${youtube_video_id}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </Box>
        <Box sx={{ px: 1 }}>
          <Typography variant="h6">
            <b>{competitor.name_song}</b>
          </Typography>
          <Typography variant="subtitle1">
            <b>{competitor.name}</b>
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
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
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  border: "1px solid #e6e6e6",
                  borderRadius: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "90%",
                  width: "100%",
                }}
              >
                <img
                  src={`${competitor.photo}`}
                  alt=""
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={9}>
              <Typography>{`Género: ${competitor.genre}`}</Typography>
              <Typography>{`Fecha de nacimiento: ${moment()
                .locale("es-mx")
                .format("LL")}`}</Typography>
              <Typography>{`Correo: ${competitor.email}`}</Typography>
              <Typography>{`Telefono: ${competitor.phone}`}</Typography>
              <Typography>{`Domicilio: ${competitor.address}, ${competitor.from}`}</Typography>
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
            <DialogImagenPayOrId
              text="Comprobante de donativo"
              img={competitor.personal_identify}
              competitor={competitor}
            />
            <DialogImagenPayOrId
              text="Identificación personal"
              img={competitor.pay}
              competitor={competitor}
            />
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "flex-start" }}>
        {status === "REVISADO" ? (
          <SeleccionarParticipante />
        ) : (
          <>
            <AceptarSolicitud competitor={competitor} />
            <RechazarSolicitud competitor={competitor} />
          </>
        )}

        <Box sx={{ flexGrow: 1 }} />
        <Button color="inherit" startIcon={<Close />} onClick={handleClose}>
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
