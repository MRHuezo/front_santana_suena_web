import * as React from "react";
import { Box } from "@mui/system";

export default function VideoPlayer({ url_video }) {

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
    <Box
      sx={{
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${youtube_video_id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="fullscreen"
        allowFullScreen
      ></iframe>
    </Box>
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
