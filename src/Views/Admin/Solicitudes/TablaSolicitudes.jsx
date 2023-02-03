import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import RechazarParticipante from "./RechazarParticipante";
import AceptarParticipante from "./AceptarParticipante";
//import { Verified } from "@mui/icons-material";
import DetallesIndex from "./DetallesParticipante/DetallesIndex";
import { MainContext } from "../../../Context/MainCtx";
import EmptyQuery from "../../../Components/NoMatch/EmptyQuery";
import LoadingSpiner from "../../../Components/NoMatch/LoadingSpiner"


export default function TablaSolicitudes (props) {
  const { snackMessage } = React.useContext(MainContext);
  const { data, loading, error } = props.competitors;

  if (loading) {
    return <LoadingSpiner />
  }
  if (error || (!loading && !data)) {
    console.log(error);
    return <EmptyQuery />;
  }

  return (
    <TableContainer
      style={{ maxHeight: "80vh", overflowX: "scroll" }}
    >
      <Table aria-label="simple table" stickyHeader size="small">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Tema</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Sede</TableCell>
            <TableCell>Ciudad</TableCell>
            <TableCell>Estatus</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => {
            console.log(row)
            if(row.status === "INSCRITO" || row.status === "RECHAZADO"){
            return(
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center"><DetallesIndex data={row} /></TableCell>
                <TableCell component="th" scope="row">
                  {row.name_song}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.id_sede.name}</TableCell>
                <TableCell>{row.from}</TableCell>
                <TableCell>{row.status}</TableCell>
                {/* <TableCell align="center" padding="checkbox"><Verified color="primary" /></TableCell>*/}
                
                
              </TableRow>
            )
          }else{
            return <div/>
          }  
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}