import React from 'react'
import BuscarParticiante from './BuscarParticipante'
import TablaParticipantes from './TablaParticipantes'
import { Box } from '@mui/material'
import TopNavAdmin from '../../../Components/Navbar/TopNavAdmin'

function Participantes() {
  return (
    <div>
      <TopNavAdmin title="Participantes" />
      si es sede principal buscar por todos si no nada mas su sede
      <BuscarParticiante />
      <Box my={2} />
      <TablaParticipantes />
    </div>
  )
}

export default Participantes