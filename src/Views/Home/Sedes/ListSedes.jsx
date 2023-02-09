import React from "react";
import Box from "@mui/material/Box";
import { Parallax } from "rc-scroll-anim";
import { Grid, Typography } from "@mui/material";
import { PushPin } from "@mui/icons-material";
import axiosClient from "../../../Config/axios";
import { MainContext } from "../../../Context/MainCtx";
import LoadingPage from "./LoadingPage";
import { handlerErrors } from "../../../Config/errors";

const ListSedes = () => {
  const { snackMessage, setSedes, sedes } = React.useContext(MainContext);
  const { data, loading, error } = sedes;

  React.useEffect(() => {
    const getSedes = async () => {
      await axiosClient
        .get("/sede/consultarSedes")
        .then((res) => {
          setSedes((sedes) => ({
            ...sedes,
            data: res.data.sedes,
            loading: false,
          }));
        })
        .catch((error) => {
          setSedes((sedes) => ({ ...sedes, error, loading: false }));
          console.log(error);
          snackMessage({
            message: handlerErrors(error, "GET"),
            variant: "error",
          });
        });
    };
    getSedes();
  }, [setSedes, snackMessage]);

  if (loading) {
    return <LoadingPage />;
  }
  if (error || !data) {
    console.log(error);
    return null;
  }

  return (
    <Box>
      {data.map(({ encargado, place, name, img, _id }) => (
        <Parallax
          key={_id}
          animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
          style={{ transform: "translateX(-100px)", opacity: 0 }}
          className="code-box-shape"
        >
          <Grid container spacing={2} sx={{ width: "100%", my: 3 }}>
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
              <PushPin color="secondary" sx={{ fontSize: 80 }} />
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="h6">
                <b>{`${name}, ${place}`}</b>
              </Typography>
              <Typography>{`Coordinador: ${encargado}`}</Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img alt={place} src={img} height="100%" width="100%" />
              </Box>
            </Grid>
          </Grid>
        </Parallax>
      ))}
    </Box>
  );
};

export default ListSedes;
