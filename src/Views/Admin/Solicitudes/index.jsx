import React from 'react'
import TablaSolicitudes from './TablaSolicitudes'
import { Box } from '@mui/material'
import TopNavAdmin from '../../../Components/Navbar/TopNavAdmin'

function Solicitudes() {
  return (
    <div>
      <TopNavAdmin title="Solicitudes" />
      <Box my={2} />
      <TablaSolicitudes />
    </div>
  )
}

export default Solicitudes