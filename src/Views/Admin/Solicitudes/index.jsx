import React from 'react';
import BuscarParticiante from './BuscarParticipante';
import TablaSolicitudes from './TablaSolicitudes';
import { MainContext } from "../../../Context/MainCtx";
import { Box } from '@mui/material';
import TopNavAdmin from '../../../Components/Navbar/TopNavAdmin';
import axiosClient from "../../../Config/axios";
import { handlerErrors } from "../../../Config/errors";


const initial_competitor_state = {
  data: undefined,
  loading: true,
  error: undefined 
}

function Solicitudes() {
  const [competitors, setCompetitors] = React.useState(initial_competitor_state);
  const [search, setSearch] = React.useState('');
  const { snackMessage, user } = React.useContext(MainContext);

  React.useEffect(() => {
    const getCompetitors = async () => {
      console.log(user.id_sede)
      let route = (user.id_sede.main) ? `/competitor/get/main/${search}` :  (search === '') ? `/competitor/get/sede/${user.id_sede._id}` : `/competitor/get/${search}/${user.id_sede._id}` ;
      console.log(route)
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
  }, [setCompetitors, snackMessage, search]);

  return (
    <div>
      <TopNavAdmin title="Solicitudes" />
      <BuscarParticiante setSearch={setSearch} search={search} />
      <Box my={2} />
      <TablaSolicitudes competitors={competitors} />
    </div>
  )
}

export default Solicitudes