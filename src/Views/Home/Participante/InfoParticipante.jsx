import React from "react";
import { Avatar, Grid, Typography, Box } from "@mui/material";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { Facebook, WhatsApp } from "@mui/icons-material";
import { useMatches } from "react-router-dom";

function InfoParticipante({ participante }) {
  const matches = useMatches();
  let path = "";
  if (matches.length) path = matches[0].pathname;

  return (
    <Box mb={5}>
      <Grid container>
        <Grid item xs={12} md={3}>
          <Avatar
            alt={participante.photo_key}
            src={participante.photo}
            variant="square"
            sx={{
              height: 186,
              width: 186,
            }}
          />
          <Box mt={2}>
            <Typography variant="h6">Compartir</Typography>
            <Box>
              <FacebookShareButton
                url={"https://santanasuena.com" + path}
                quote={participante.name}
              >
                <Facebook style={{ fontSize: 50, color: "white" }} />
              </FacebookShareButton>
              <WhatsappShareButton
                url={"https://santanasuena.com" + path}
                quote={participante.name}
                separator=":: "
              >
                <WhatsApp style={{ fontSize: 50, color: "white" }} />
              </WhatsappShareButton>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography variant="h5">
            <b>{participante.name}</b>
          </Typography>
          <Typography variant="h6">
            <b>Nombre de la Canción: </b>
            {participante.name_song}
          </Typography>
          <Typography>{participante.from}</Typography>
          <hr />
          <Typography>
            <b>Sede: </b>{" "}
            {`${participante.id_sede.place}, ${participante.id_sede.name}`}
          </Typography>
          <br />
          <Typography>
            <b>Experiencia Artística:</b>
          </Typography>
          <Typography>{participante.artistic_experience}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default InfoParticipante;
