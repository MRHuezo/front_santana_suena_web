import React from 'react'
import NuevoComunicado from './NuevoComunicado'
import TablaComunicados from './TablaComunicados'
import { Box } from '@mui/material'
import TopNavAdmin from '../../../Components/Navbar/TopNavAdmin'

function Comunicados() {
  return (
    <div>
      <TopNavAdmin title="Comunicados" />
      <NuevoComunicado />
      <Box my={2} />
      <TablaComunicados />
    </div>
  )
}

export default Comunicados;