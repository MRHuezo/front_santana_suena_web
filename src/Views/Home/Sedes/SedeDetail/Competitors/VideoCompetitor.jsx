import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { DialogTitle } from "@mui/material";
import { Close, YouTube } from "@mui/icons-material";
import { Box } from "@mui/system";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function VideoCompetitor({ url_video }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getUrlYouTube = () => {
    try {
      //eslint-disable-next-line
      const rgx = /(?:https?:)?\/{2}(?:www\.)?youtu\.?be(?:\/|\.com\/watch\?v\=|\.com\/v\/|\.com\/embed\/)?([\w-]*)[?&]?.*/;
      return url_video.match(rgx).pop();
    } catch (error) {
      return "";
    }
  };
  let youtube_video_id = getUrlYouTube();

  return (
    <div>
      <Box
        onClick={handleClickOpen}
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
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
            fontSize: 80,
            display: "none",
            transition: "1s ease-out",
          }}
        />
      </Box>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: { bgcolor: "transparent" },
        }}
      >
        <DialogTitle
          component="div"
          sx={{
            p: 0,
            display: "flex",
            justifyContent: "flex-end",
            backgroundColor: "transparent",
            color: "white",
          }}
        >
          <Button
            size="large"
            startIcon={<Close />}
            onClick={() => handleClose()}
            color="inherit"
          >
            Cerrar
          </Button>
        </DialogTitle>
        <YoutubePlayer youtube_video_id={youtube_video_id} open={open} />
      </Dialog>
    </div>
  );
}

const YoutubePlayer = ({ youtube_video_id, open }) => {
  if (!open) return null;

  return (
    <Box
      sx={{
        height: "500px",
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
  );
};
