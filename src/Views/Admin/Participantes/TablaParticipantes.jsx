import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EliminarParticipante from "./EliminarParticipante";
import { Verified } from "@mui/icons-material";
import DetallesIndex from "./DetallesParticipante/DetallesIndex";
import { MainContext } from "../../../Context/MainCtx";
import axiosClient from "../../../Config/axios";
import { handlerErrors } from "../../../Config/errors";
import EmptyQuery from "../../../Components/NoMatch/EmptyQuery";
import LoadingSpiner from "../../../Components/NoMatch/LoadingSpiner";

const initial_competitor_state = {
  data: undefined,
  loading: true,
  error: undefined
}

export default function TablaParticipantes() {
  const { snackMessage } = React.useContext(MainContext);
  const [competitors, setCompetitors] = React.useState(initial_competitor_state)
  const { data, loading, error } = competitors;

  React.useEffect(() => {
    const getCompetitors = async () => {
      await axiosClient
        .get(`/competitor/get`)
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
  }, [setCompetitors, snackMessage]);

  console.log(data)

  if (loading) {
    return <LoadingSpiner />
  }
  if (error || (!loading && !data)) {
    console.log(error);
    return <EmptyQuery />;
  }

  return (
    <TableContainer
      component={Paper}
      style={{ maxHeight: "80vh", overflowX: "scroll" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>status</TableCell>
            <TableCell>Sede</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Telefono</TableCell>
            <TableCell>Ciudad</TableCell>
            <TableCell>Detalles</TableCell>
            <TableCell>Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" padding="checkbox"><Verified color="primary" /></TableCell>
              <TableCell component="th" scope="row">
                {row.id_sede.name}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.from}</TableCell>
              <TableCell align="center" padding="checkbox"><DetallesIndex data={row} /></TableCell>
              <TableCell align="center" padding="checkbox"><EliminarParticipante data={row} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
