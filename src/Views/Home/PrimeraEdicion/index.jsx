import React from 'react';
import { Box, Typography, Container } from "@mui/material";
import { Parallax } from "rc-scroll-anim";

function PrimeraEdicion() {
  return (
    <Container maxWidth="md" sx={{ my: 6, mt: 3, position: 'relative', overflow: 'hidden' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
           `url('https://www.pexels.com/es-es/foto/persona-con-guitarra-marron-y-negra-33597/'), 
           url('https://www.pexels.com/es-es/foto/persona-tocando-guitarra-marron-1407322/'),
           url('https://www.pexels.com/es-es/foto/persona-que-usa-black-fender-stratocaster-1656066/'),`, // Reemplaza con tus URLs
          backgroundSize: 'cover, contain', // Ajusta según necesites
          backgroundPosition: 'left, right', // Ajusta según necesites
          opacity: 0.8,
          zIndex: -1
        }}
      />
      <Parallax
        animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
        style={{ transform: "translateX(0px)", opacity: 0 }}
        className="code-box-shape"
      >
        <Typography variant="h4" sx={{ color: '#fff', textAlign: 'center', paddingTop: '20%' }}>
          Ver SANTANA SUENA 2023
        </Typography>
      </Parallax>
    </Container>
  );
}

export default PrimeraEdicion;