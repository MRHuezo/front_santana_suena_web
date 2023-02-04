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
  const { inscrito, revisado} = STATUS;
  const [value] = useDebounce(search, 500);

  React.useEffect(() => {
    const getCompetitors = async () => {
      const { id_sede } = user;
      let route = `/competitor/get?main=${id_sede.main}&id_sede=${id_sede._id}&search=${value}&status=${inscrito}-${revisado}`;
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
            message: handlerErrors(error, "GET"),
            variant: "error",
          });
        });
    };
    getCompetitors();
  }, [setCompetitors, snackMessage, value, inscrito, revisado, user]);

  return (
    <div>
      <TopNavAdmin title="Solicitudes" />
      <BuscarParticiante setSearch={setSearch} search={search} />
      <Box my={2} />
      <TablaSolicitudes competitors={competitors} />
    </div>
  );
}

export default Solicitudes;
