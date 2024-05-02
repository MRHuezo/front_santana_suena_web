import React from 'react';
import { Box, Typography, Container } from "@mui/material";
import { Parallax } from "rc-scroll-anim";

function PrimeraEdicionHome() {
  return (
    <Container maxWidth="md" sx={{ my: 6, mt: 3, position: 'relative', overflow: 'hidden', height: 500 }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url('https://images.pexels.com/photos/1656066/pexels-photo-1656066.jpeg'),
                             url('https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg')`,
          backgroundSize: 'cover, cover',
          backgroundPosition: 'left, right',
          backgroundRepeat: 'no-repeat, no-repeat',
          opacity: 0.8,
          zIndex: -1
        }}
      />
      <Parallax
        animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
        style={{ transform: "translateX(0px)", opacity: 0 }}
      >
        <Typography variant="h4" sx={{ color: '#fff', textAlign: 'center', position: 'relative', zIndex: 10, paddingTop: '20%' }}>
          Ver SANTANA SUENA 2023
        </Typography>
      </Parallax>
    </Container>
  );
}

export default PrimeraEdicionHome;


