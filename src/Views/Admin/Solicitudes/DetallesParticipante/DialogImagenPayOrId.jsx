import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Link } from "@mui/material";

export default function DialogImagenPayOrId({ competitor, text, img }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>{text}</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <img
            src={`${img}`}
            alt=""
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </DialogContent>
        <DialogActions>
          <Link href={img} download={`${text}-${competitor.name}`}>
            <Button autoFocus onClick={handleClose} componet="a">
              Descargar
            </Button>
          </Link>

          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
