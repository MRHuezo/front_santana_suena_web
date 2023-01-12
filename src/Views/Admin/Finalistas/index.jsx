import React from 'react'
import BuscarFinalista from './BuscarFinalista'
import TablaFinalistas from './TablaFinalistas'
import { Box } from '@mui/material'
import TopNavAdmin from '../../../Components/Navbar/TopNavAdmin'

function Finalistas() {
  return (
    <div>
      <TopNavAdmin title="Finalistas" />
      <BuscarFinalista />
      <Box my={2} />
      <TablaFinalistas />
    </div>
  )
}

export default Finalistas