import React from 'react'
import BuscarParticiante from './BuscarParticipante'
import TablaParticipantes from './TablaParticipantes'
import { Box } from '@mui/material'
import TopNavAdmin from '../../../Components/Navbar/TopNavAdmin'
import { useState } from 'react'
import { useDebounce } from 'use-debounce';

function Participantes() {
  const [search, setSearch] = useState("");
  const [value] = useDebounce(search, 500);

  return (
    <div>
      <TopNavAdmin title="Participantes" />
      si es sede principal buscar por todos si no nada mas su sede
      <BuscarParticiante search={search} setSearch={setSearch} />
      <Box my={2} />
      <TablaParticipantes search={value} />
    </div>
  )
}

export default Participantes