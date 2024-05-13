import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import {
  CircularProgress,
  DialogContent,
  DialogContentText,
  TextField,
} from "@mui/material";
import { ThumbDownAlt } from "@mui/icons-material";
import axiosClient from "../../../Config/axios";
import { useContext } from "react";
import { MainContext } from "../../../Context/MainCtx";
import { handlerErrors } from "../../../Config/errors";

export default function RechazarSolicitud({ competitor, handleCloseInd }) {
  const [open, setOpen] = React.useState(false);
  const token = localStorage.getItem("tokenSS");
  const { snackMessage, } = useContext(MainContext);
  const [loading, setLoading] = React.useState(false);
  const [reason, setReason] = React.useState("");
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setReason("");
    handleCloseInd();
    navigate("/admin/solicitudes");
  };

  const handleGetReason = (e) => {
    setReason(e.target.value);
  };

  const handleDecline = async () => {
    setLoading(true);
    await axiosClient
      .post(
        `/competitor/edit/decline/`,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
          reason: reason,
          id_competitor: competitor._id
          
        }
      )
      .then((res) => {
        setLoading(false);
        snackMessage({
          message: res.data.message,
          variant: "success",
        });
     
        handleClose();
      })
      .catch((err) => {
        setLoading(false);
        snackMessage({
          message: handlerErrors("Algo ocurrió al intentar conectar al servidor, revise su conexión y vuelva a intentar.", "POST"),
          variant: "error",
        });
      });
  };

  return (
    <div>
      <Button
        startIcon={<ThumbDownAlt />}
        color="secondary"
        onClick={handleClickOpen}
      >
        Rechazar solicitud
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          ¿Está seguro que desea rechazar la solicitud?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Se rechazará la solicitud de este participante y se le enviará un
            correo para notificarle, en el siguiente recuadro de texto puedes
            indicar el motivo de recházo.
          </DialogContentText>
          <TextField
            fullWidth
            size="small"
            multiline
            placeholder="Motivo de rechazo"
            rows={3}
            value={reason}
            onChange={handleGetReason}
          />
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={handleClose} autoFocus>
            Cancelar
          </Button>
          <Button
            onClick={() => handleDecline()}
            startIcon={
              loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <ThumbDownAlt />
              )
            }
            color="error"
          >
            Rechazar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
