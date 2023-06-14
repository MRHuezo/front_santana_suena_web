import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchCompetitor from "./SearchCompetitor";
import ItemCompetitor from "./ItemCompetitor";
import { Grid } from "@mui/material";

export default function Competitors({ competitors, sede }) {
  const [competitorsDinamic, setCompetitorsDinamic] = React.useState(
    competitors
  );
  if (!competitors.length)
    return (
      <Box sx={{ my: 5 }}>
        <Typography variant="h5" align="center">
          <b> Aun no hay participantes</b>
        </Typography>
      </Box>
    );
  return (
    <Box sx={{ my: 5 }}>
      <Box sx={{ my: 1 }}>
        <Grid container>
          <Grid item md={6} sx={12}>
            <Typography gutterBottom variant="h5" component="div">
              <b>{`${sede.name}, ${sede.place}`}</b>
            </Typography>
          </Grid>
          <Grid item md={6} sx={12}>
            <SearchCompetitor
              setCompetitorsDinamic={setCompetitorsDinamic}
              competitors={competitors}
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 5 }}>
          <Grid container spacing={3} justifyContent="center">
            {competitorsDinamic.map((res) => (
              <Grid key={res._id} item>
                <ItemCompetitor data={res} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
