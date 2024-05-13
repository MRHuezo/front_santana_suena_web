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
} from "@mui/material";
import { ThumbUpAlt } from "@mui/icons-material";
import axiosClient from "../../../Config/axios";
import { useContext } from "react";
import { MainContext } from "../../../Context/MainCtx";
import { handlerErrors } from "../../../Config/errors";

export default function AceptarSolicitud({ competitor, handleCloseInd }) {
  const [open, setOpen] = React.useState(false);
  const token = localStorage.getItem("tokenSS");
  const { snackMessage } = useContext(MainContext);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
   
    setOpen(false);
    handleCloseInd();
    navigate("/admin/solicitudes");

  };

  const handleAccept = async () => {
    setLoading(true);
    await axiosClient
      .post(
        `/competitor/edit/accept?id_competitor=${competitor._id}`,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setLoading(false);
        snackMessage({
          message: res.data.message,
          variant: "success",
        });
      
      })
      .catch((err) => {
        setLoading(false);
        snackMessage({
          message: handlerErrors("Algo ocurrió al intentar conectar al servidor, revise su conexión y vuelva a intentar.", "POST"),
          variant: "error",
        });
      });
      handleClose();
      
  };

  return (
    <div>
      <Button
        startIcon={<ThumbUpAlt />}
        color="primary"
        onClick={handleClickOpen}
      >
        Aceptar solicitud
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          Aceptar solicitud
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Se aceptará la solicitud de este participante y se le enviará un
            correo para notificarle.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={handleClose} autoFocus>
            Cancelar
          </Button>
          <Button
            onClick={() => handleAccept()}
            startIcon={
              loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <ThumbUpAlt />
              )
            }
            color="primary"
          >
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
