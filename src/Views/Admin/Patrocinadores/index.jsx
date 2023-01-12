import React from 'react'
import NuevoPatrocinador from './NuevoPatrocinador'
import ListaPatrocinadores from './ListaPatrocinadores'
import { Box } from '@mui/material'
import TopNavAdmin from '../../../Components/Navbar/TopNavAdmin'

function Patrocinadores() {
  return (
    <div>
      <TopNavAdmin title="Patrocinadores" />
      <NuevoPatrocinador />
      <Box my={2} />
      <ListaPatrocinadores />
    </div>
  )
}

export default Patrocinadores