import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchCompetitor from "./SearchCompetitor";
import ItemCompetitor from "./ItemCompetitor";
import { Grid } from "@mui/material";

export default function Competitors({ competitors }) {
  const [competitorsDinamic, setCompetitorsDinamic] = React.useState(competitors);
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
        <SearchCompetitor setCompetitorsDinamic={setCompetitorsDinamic} competitors={competitors} />
        <Box sx={{ mt: 2 }}>
          <Grid container spacing={2} justifyContent="center">
            {competitorsDinamic.map((res) => (
             
              <Grid key={res._id} item xs={12} md={3}>
                <ItemCompetitor data={res} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
