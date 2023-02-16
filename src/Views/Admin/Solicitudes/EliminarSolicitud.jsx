import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { CircularProgress, IconButton,   DialogContent,
  DialogContentText, TextField} from "@mui/material";
import { Delete } from "@mui/icons-material";
import axiosClient from "../../../Config/axios";
import { useContext } from "react";
import { MainContext } from "../../../Context/MainCtx";
import { handlerErrors } from "../../../Config/errors";

export default function EliminarSolicitud({ idCompetitor }) {
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
  };
  const handleGetReason = (e) => {
    setReason(e.target.value);
  };

  const handleDelete = async () => {
    setLoading(true);
    await axiosClient
      .post(`/competitor/delete/${idCompetitor}`, {
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
      <IconButton variant="outlined" color="error" onClick={handleClickOpen}>
        <Delete />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          ¿Estás seguro de eliminar esta solicitud?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Estas a punto de eliminar esta solicitud , se
            enviará un email presentando el motivo y detalles en caso de darle otra oportunidad para inscribirse nuevamente.
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
                <Delete />
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
