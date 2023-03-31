import React from "react";
import Box from "@mui/material/Box";
import NavbarHome from "../../../../Components/Navbar/NavbarHome";
import { useMatches } from "react-router-dom";
import { MainContext } from "../../../../Context/MainCtx";
import NotMatchSede from "./NotMatchSede";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import axiosClient from "../../../../Config/axios";
import { handlerErrors } from "../../../../Config/errors";
import { MusicNote } from "@mui/icons-material";
import "./style.css";
import Competitors from "./Competitors";

const initial_query_state = {
  data: undefined,
  error: undefined,
  loading: true,
};

export default function SedeDetail() {
  const { snackMessage } = React.useContext(MainContext);
  const [query, setQuery] = React.useState(initial_query_state);
  const matches = useMatches();
  let id_name = "";
  if (matches.length) id_name = matches[0].params.sede;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    const getSedesQuery = async () => {
      await axiosClient
        .get(`/sede/oneSedeCompetitors/${id_name}`)
        .then((res) => {
          setQuery((state) => ({ ...state, loading: false, data: res.data }));
        })
        .catch((error) => {
          setQuery((state) => ({ ...state, loading: false, error }));
          console.log(error);
          snackMessage({
            message: handlerErrors(error, "GET"),
            variant: "error",
          });
        });
    };
    getSedesQuery();
  }, [id_name, snackMessage]);

  if (query.loading) {
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
  if (query.error)
    return <NotMatchSede error="Ups, Algo paso al mostrar esta sede" />;
  if (!query.data) return <NotMatchSede />;

  const { sede, competitors } = query.data;

  return (
    <Box>
      <NavbarHome />
      <Box
        sx={{
          backgroundImage: `url(${sede.img})`,
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
          <Container maxWidth="lg">
            <Box sx={{ pt: 7 }}>
              <Typography gutterBottom variant="h5" component="div">
                <b>{`${sede.name}, ${sede.place}`}</b>
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: 20 }}
                variant="h3"
              >{`Institución: ${sede.institution}`}</Typography>
              <Typography
                sx={{ fontSize: 20 }}
                variant="h3"
              >{`Coordinador: ${sede.encargado}`}</Typography>
              <Typography
                sx={{ fontSize: 20 }}
                variant="h3"
              >{`Dirección: ${sede.address.street} C.P. ${sede.address.postal_code}`}</Typography>
              <Typography
                sx={{ fontSize: 20 }}
                variant="h3"
              >{`Teléfono: ${sede.telefono}`}</Typography>
            </Box>
            <Competitors competitors={competitors} />
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
