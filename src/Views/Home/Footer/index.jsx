import React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ mt: 3 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ m: 1 }}>
            <Typography variant="h4" color="text.primary" align="center">
              www.santanasuena.com
            </Typography>
            <Typography variant="body1" color="text.primary" align="center">
              Responsable:Dr. Martín Sandoval Gómez Director y Co-fundador del
              Centro Comunitario y de Salud Tiopa Tlanextli “Santuario de Luz
              A.C.”
            </Typography>
            <Typography variant="body1" color="text.primary" align="center">
              Tel: 3173826632 Ext. 105 Autlán de Navarro, Jalisco, C.P. 48903.
              tiopatlanextli@hotmail.com
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Typography variant="body2" color="text.secondary" align="center">
                NOTA IMPORTANTE: <b>TIOPA TLANEXTLI</b> es una Asociación Civil
                sin fines de lucro, la intención en este concurso es meramente
                de carácter cultural y en homenaje al benefactor y co-fundador
                de esta institución. No contamos con los derechos para manejo de
                la imagen, ni de la música de <b>CARLOS SANTANA</b>
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Este programa es sin fines políticos, ni afiliación partidista
                ni religiosa, es exclusivamente con fines culturales.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
