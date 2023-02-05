import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DetallesIndex from "./DetallesParticipante/DetallesIndex";
import EmptyQuery from "../../../Components/NoMatch/EmptyQuery";
import LoadingSpiner from "../../../Components/NoMatch/LoadingSpiner";
import EliminarSolicitud from "./EliminarSolicitud";
import { Chip } from "@mui/material";
import { STATUS } from "../../../Config/constantes";

export default function TablaSolicitudes(props) {
  const { data, loading, error } = props.competitors;
  const { rechazado } = STATUS;

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
            <TableCell>Estatus</TableCell>
            <TableCell>Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => {
            console.log(row);
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
                <TableCell>
                  <Chip
                    label={row.status}
                    variant="outlined"
                    color={row.status === rechazado ? "error" : "primary"}
                  />
                </TableCell>
                <TableCell align="center" padding="checkbox">
                  <EliminarSolicitud idCompetitor={row._id} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
