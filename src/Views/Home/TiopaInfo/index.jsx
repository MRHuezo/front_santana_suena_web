import React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import { Parallax } from "rc-scroll-anim";
import { Grid } from "@mui/material";
import imagen from "./img/info.png";

function Footer() {
  return (
    <Box sx={{ mt: 3 }}>
      <Container maxWidth="lg">
        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
          style={{ transform: "translateX(100px)", opacity: 0 }}
          className="code-box-shape"
        >
          <Grid container  key="1">
            <img alt='' src={imagen} height="100%" width="100%" />
          </Grid>
        </Parallax>
      </Container>
    </Box>
  );
}

export default Footer;