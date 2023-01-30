import React from "react";
import Box from "@mui/material/Box";
import { Grid, Typography, Skeleton } from "@mui/material";

const LoadingPage = () => {
  return (
    <Box>
      {[1, 2, 3].map((res) => (
        <Grid key={res} container spacing={2} sx={{ width: "100%", my: 3 }}>
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Skeleton variant="rounded" width={60} height={60} />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="h6">
              <Skeleton variant="rounded" />
            </Typography>
            <Box my={1} />
            <Typography>
              <Skeleton variant="rounded" />
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Skeleton variant="rounded" width={100} height={100} />
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default LoadingPage;
