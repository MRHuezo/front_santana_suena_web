import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EliminarParticipante from "./EliminarParticipante";
import { Verified } from "@mui/icons-material";
import DetallesIndex from "./DetallesParticipante/DetallesIndex";
import { MainContext } from "../../../Context/MainCtx";
import axiosClient from "../../../Config/axios";
import { handlerErrors } from "../../../Config/errors";
import EmptyQuery from "../../../Components/NoMatch/EmptyQuery";
import LoadingSpiner from "../../../Components/NoMatch/LoadingSpiner";
import { STATUS } from "../../../Config/constantes";

const initial_competitor_state = {
  data: undefined,
  loading: true,
  error: undefined,
};

export default function TablaParticipantes({ search }) {
  const { snackMessage, user } = React.useContext(MainContext);
  const [competitors, setCompetitors] = React.useState(
    initial_competitor_state
  );
  const { data, loading, error } = competitors;
  const { aceptado } = STATUS;

  React.useEffect(() => {
    const getCompetitors = async () => {
      const { id_sede } = user;
      let route = `/competitor/get?main=${id_sede.main}&id_sede=${id_sede._id}&search=${search}&status=${aceptado}`;
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
  }, [setCompetitors, snackMessage, search, aceptado, user]);

  if (loading) {
    return <LoadingSpiner />;
  }
  if (error || (!loading && !data)) {
    console.log(error);
    return <EmptyQuery />;
  }

  return (
    <TableContainer style={{ maxHeight: "80vh", overflowX: "scroll" }}>
      <Table aria-label="simple table" stickyHeader size="small">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Tema</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Sede</TableCell>
            <TableCell>Ciudad</TableCell>
            <TableCell>status</TableCell>
            <TableCell>Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => {
            return (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  <DetallesIndex data={row} />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name_song}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.id_sede.name}</TableCell>
                <TableCell>{row.from}</TableCell>
                <TableCell>{row.status}</TableCell>
                {/* <TableCell align="center" padding="checkbox"><Verified color="primary" /></TableCell>*/}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
