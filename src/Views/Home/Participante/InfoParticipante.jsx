import React from "react";
import { Avatar, Grid, Typography, Box } from "@mui/material";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { Facebook, WhatsApp } from "@mui/icons-material";
import { useMatches } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  img: {
    height: 250,
    width: "100%",
    display: "flex", 
    justifyContent: "center",
    alignItems: "center", 
    padding: 8,
    borderRadius: 8
    //backgroundRepeat: "no-repeat",
    //backgroundSize: "contain",
    //backgroundPosition: "center",
  },
}));
function InfoParticipante({ participante }) {
  const classes = useStyles();
  const matches = useMatches();
  let path = "";
  if (matches.length) path = matches[0].pathname;
  let patrocinadores = (participante.patrocinadores) ? participante.patrocinadores : [];

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
          {
            (patrocinadores.length > 0) ? 
            <Box>
            <Typography  variant="h4" mt={2} >
              <b>Patrocinadores</b>
            </Typography>
            <Grid container sx={{display:"flex", justifyContent:"center"}}>
              {patrocinadores.map((patrocinador,index) => {
                return(
                  <Grid key={index} item xs={12} sm={8} md={8} lg={5}>
                  <Box
                    className={classes.img}
                   
                  >
                    <img
                      alt={`imagen-${patrocinador.nombre}`}
                      src={patrocinador.url_logo}
                      style={{ maxHeight: "100%", maxWidth: "100%" }}
                    />
                  </Box>
                </Grid> 

                )
              }
              )
                
              }
              
            </Grid>
          </Box>
          :
          <div/>
          }
         
         
        </Grid>
      </Grid>
    </Box>
  );
}

export default InfoParticipante;
