import React from "react";
import BuscarParticiante from "./BuscarParticipante";
import TablaSolicitudes from "./TablaSolicitudes";
import { MainContext } from "../../../Context/MainCtx";
import { Box } from "@mui/material";
import TopNavAdmin from "../../../Components/Navbar/TopNavAdmin";
import axiosClient from "../../../Config/axios";
import { handlerErrors } from "../../../Config/errors";
import { STATUS } from "../../../Config/constantes";
import { useDebounce } from 'use-debounce';

const initial_competitor_state = {
  data: undefined,
  loading: true,
  error: undefined,
};

function Solicitudes() {
  const [competitors, setCompetitors] = React.useState(
    initial_competitor_state
  );
  const [search, setSearch] = React.useState("");
  const { snackMessage, user } = React.useContext(MainContext);
  const { inscrito, rechazado} = STATUS;
  const [value] = useDebounce(search, 500);
  const [reload, setReload] = React.useState(false);

  React.useEffect(() => {
  
    const getCompetitors = async () => {
      const { id_sede } = user;
      let route = `/competitor/get?main=${id_sede.main}&id_sede=${id_sede._id}&search=${value}&status=${inscrito}-${rechazado}`;
      await axiosClient
        .get(route)
        .then((res) => {
          setCompetitors((comp) => ({
            ...comp,
            data: res.data.competitor,
            loading: false,
          }));
        })
        .catch((error) => {
          setCompetitors((comp) => ({ ...comp, error, loading: false }));
          console.log(error);
          snackMessage({
            message: handlerErrors("Algo ocurrió al intentar conectar al servidor, revise su conexión y vuelva a intentar.", "GET"),
            variant: "error",
          });
        });
    };
    getCompetitors();
  }, [setCompetitors, snackMessage, value, inscrito, rechazado, user, reload, setReload]);

  return (
    <div>
      <TopNavAdmin title="Solicitudes" />
      <BuscarParticiante setSearch={setSearch} search={search} />
      <Box my={2} />
      <TablaSolicitudes competitors={competitors} setReload={setReload} />
    </div>
  );
}

export default Solicitudes;
