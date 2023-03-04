import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import {
  CircularProgress,
  DialogContent,
  DialogContentText,
  IconButton,
  TextField,
} from "@mui/material";
import { ThumbDownAlt } from "@mui/icons-material";
import axiosClient from "../../../Config/axios";
import { useContext } from "react";
import { MainContext } from "../../../Context/MainCtx";
import { handlerErrors } from "../../../Config/errors";

export default function EliminarParticipante({ idCompetitor, handleCloseInd }) {
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
    handleCloseInd();
  };

  const handleGetReason = (e) => {
    setReason(e.target.value);
  };

  const handleDelete = async () => {
    setLoading(true);
    await axiosClient
      .post(`/competitor/disqualify/${idCompetitor}`, {
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
        startIcon={<ThumbDownAlt />}
        color="secondary"
        onClick={handleClickOpen}
      >
       Descalificar participante
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          ¿Estás seguro de descalificar a este participante?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Estas a punto de descalificar a un participante, se
            enviará un email presentando el motivo de descalificación
          </DialogContentText>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Motivo"
            value={reason}
            onChange={handleGetReason}
            multiline
            rows={3}
          />
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={handleClose} autoFocus>
            Cancelar
          </Button>
          <Button
            onClick={() => handleDelete()}
            startIcon={
              loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <ThumbDownAlt />
              )
            }
            color="error"
          >
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
