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
import MoreSedes from "./MoreSedes";
import MoreSedes2023 from "./MoreSedes2023";
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
  let edicion = "";
  if (matches.length) {
    id_name = matches[0].params.sede;
    edicion = matches[0].params.edicion;
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    const getSedesQuery = async () => {
      await axiosClient
        .get(`/sede/oneSedeCompetitors/${id_name}/${edicion}`)
        .then((res) => {
          setQuery((state) => ({ ...state, loading: false, data: res.data }));
        })
        .catch((error) => {
         
          setQuery((state) => ({ ...state, loading: false, error }));
        
          snackMessage({
            message: handlerErrors("Algo ocurrió al intentar conectar al servidor, revise su conexión y vuelva a intentar.", "GET"),
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
    return <NotMatchSede error="Ups, Algo pasó al mostrar esta sede" />;
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
          <Box sx={{ pt: 5 }} />
          {
            (edicion === '2023') ?
            <MoreSedes2023 id_name={id_name} edicion={edicion} />
            :
            <MoreSedes id_name={id_name} edicion={edicion} />
          }
         
          <Container maxWidth="lg">
            
            <Competitors competitors={competitors} sede={sede} edicion={edicion} />
            
              {/* <Box py={2}>
                <Typography
                  sx={{ fontSize: 22 }}
                  variant="h2" align="center"
                >{` Datos evento semifinal`}</Typography>
                <Typography
                  sx={{ fontSize: 19 }}
                  variant="h3" align="center"
                >{`Lugar: ${sede.lugar_final}`}</Typography>
                <Typography
                  sx={{ fontSize: 19 }}
                  variant="h3" align="center"
                >{`Fecha: ${sede.fecha_final} Hora: ${sede.hora_final}`}</Typography>
                
              </Box>
              <Box py={2}>

                <Typography
                  sx={{ fontSize: 20 }}
                  variant="h3" align="center"
                >{`Institución: ${sede.institution}`}</Typography>
                <Typography
                  sx={{ fontSize: 20 }}
                  variant="h3" align="center"
                >{`Coordinador: ${sede.encargado}`}</Typography>
                <Typography
                  sx={{ fontSize: 20 }}
                  variant="h3" align="center"
                >{`Dirección: ${sede.address.street} C.P. ${sede.address.postal_code}`}</Typography>
                <Typography
                  sx={{ fontSize: 20 }}
                  variant="h3" align="center"
                >{`Teléfono: ${sede.telefono}`}</Typography>
              </Box> */}
            
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
