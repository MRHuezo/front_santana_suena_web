import React from "react";
import { MainContext } from "../../../Context/MainCtx";
import axiosClient from "../../../Config/axios";
import { handlerErrors } from "../../../Config/errors";
import { useMatches } from "react-router";
import { Box, Container } from "@mui/system";
import NavbarHome from "../../../Components/Navbar/NavbarHome";
import { MusicNote } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import VideoCompetitor from "../Sedes/SedeDetail/Competitors/VideoCompetitor";
import InfoParticipante from "./InfoParticipante";
import VideoPlayer from "../Sedes/SedeDetail/Competitors/VideoPlayer";

const initial_query_state = {
  data: undefined,
  loading: false,
  error: undefined,
};

function Participante() {
  const [participante, setParticipante] = React.useState(initial_query_state);
  const { snackMessage } = React.useContext(MainContext);
  const { data, loading, error } = participante;
  const matches = useMatches();
  let id_name = "";
  if (matches.length) id_name = matches[0].params.id_name;

  React.useEffect(() => {
    const getCompetitors = async () => {
      await axiosClient
        .get(`/competitor/get/main/idname/${id_name}`)
        .then((res) => {
          setParticipante((st) => ({
            ...st,
            data: res.data.competitor,
            loading: false,
          }));
        })
        .catch((error) => {
          setParticipante((st) => ({ ...st, error, loading: false }));
          console.log(error);
          snackMessage({
            message: handlerErrors(error, "GET"),
            variant: "error",
          });
        });
    };
    getCompetitors();
  }, [setParticipante, snackMessage]);

  if (loading) {
    return (
      <Box>
        <NavbarHome />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "95vh",
          }}
        >
          <MusicNote className="animate-loading" />
          <Box my={1} />
          <Typography variant="h5">Cargando...</Typography>
        </Box>
      </Box>
    );
  }
  if (error || !data) {
    console.log(error);
    return null;
  }
  return (
    <Box>
      <NavbarHome />
      <Box
        sx={{
          backgroundImage: `url(${data.id_sede.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "fixed",
          top: 0,
          minHeight: "100vh",
          width: "100%",
        }}
      />
      <Box
        sx={{
          position: "relative",
          backdropFilter: "blur(5px)",
          backgroundColor: "rgb(0,0,0,0.6)",
          minHeight: "100vh",
        }}
      >
        <Box sx={{ color: "white" }}>
          <Box sx={{ pt: 7 }} />
          <Container maxWidth="md">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <VideoPlayer url_video={data.url_video} />
              </Grid>
              <Grid item xs={12}>
                <InfoParticipante participante={data} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export default Participante;
