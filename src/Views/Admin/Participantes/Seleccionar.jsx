import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import {
  CircularProgress,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import axiosClient from "../../../Config/axios";
import { useContext } from "react";
import { MainContext } from "../../../Context/MainCtx";
import { handlerErrors } from "../../../Config/errors";

export default function SeleccionarParticipante({ competitor }) {
  const [open, setOpen] = React.useState(false);
  const token = localStorage.getItem("tokenSS");
  const { snackMessage } = useContext(MainContext);
  const [loading, setLoading] = React.useState(false);
  const [reason, setReason] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setReason("");
  };

  const handleFinalist = async () => {
    setLoading(true);
    await axiosClient
      .post(`/competitor/selectFinalist/${competitor}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
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
          message: handlerErrors(err, "POST"),
          variant: "error",
        });
      });
  };

  return (
    <div>
      <Button
        startIcon={<CheckCircle />}
        color="success"
        onClick={handleClickOpen}
      >
        Seleccionar como finalista
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          ¿Seleccionar cómo finalista a este participante?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Se seleccionará como finalista a este participante y se le enviará
            un correo para notificarle.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={handleClose} autoFocus>
            Cancelar
          </Button>
          <Button
            onClick={() => handleFinalist()}
            startIcon={
              loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <CheckCircle />
              )
            }
            color="success"
          >
            Seleccionar finalista
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
