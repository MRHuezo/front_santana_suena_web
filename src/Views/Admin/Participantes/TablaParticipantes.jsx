import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { rows } from "./data";
import EliminarParticipante from "./EliminarParticipante";
import { Verified } from "@mui/icons-material";
import DetallesIndex from "./DetallesParticipante/DetallesIndex";


export default function TablaParticipantes() {
  return (
    <TableContainer
      component={Paper}
      style={{ maxHeight: "80vh", overflowX: "scroll" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>status</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Telefono</TableCell>
            <TableCell>Ciudad</TableCell>
            <TableCell>Detalles</TableCell>
            <TableCell>Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" padding="checkbox"><Verified color="primary" /></TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.mail}</TableCell>
              <TableCell>{row.telefono}</TableCell>
              <TableCell>{row.lugar_origen}</TableCell>
              <TableCell align="center" padding="checkbox"><DetallesIndex data={row} /></TableCell>
              <TableCell align="center" padding="checkbox"><EliminarParticipante data={row} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
