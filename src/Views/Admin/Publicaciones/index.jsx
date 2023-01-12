import React from 'react'
import NuevaPublicacion from './NuevaPublicacion'
import ListaPublicaciones from './ListaPublicaciones'
import { Box } from '@mui/material'
import TopNavAdmin from '../../../Components/Navbar/TopNavAdmin'

function Publicaciones() {
  return (
    <div>
      <TopNavAdmin title="Publicaciones" />
      <NuevaPublicacion />
      <Box my={2} />
      <ListaPublicaciones />
    </div>
  )
}

export default Publicaciones