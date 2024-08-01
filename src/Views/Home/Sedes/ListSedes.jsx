import React from "react";
import { Parallax } from "rc-scroll-anim";
import { Grid } from "@mui/material";
import axiosClient from "../../../Config/axios";
import { MainContext } from "../../../Context/MainCtx";
import LoadingPage from "./LoadingPage";
import { handlerErrors } from "../../../Config/errors";
import CardItemSede from "./CardItemSede";

const ListSedes = ({edicion}) => {
  const { snackMessage, setSedes, sedes } = React.useContext(MainContext);
  const { data, loading, error } = sedes;

  React.useEffect(() => {
    const getSedes = async () => {
      await axiosClient
      
        .get(`/sede/consultarSedes/${edicion}`)
        .then((res) => {
          setSedes((sedes) => ({
            ...sedes,
            data: res.data.sedes,
            loading: false,
          }));
        })
        .catch((error) => {
          setSedes((sedes) => ({ ...sedes, error, loading: false }));
          snackMessage({
            message: handlerErrors("Algo ocurrió al intentar conectar al servidor, revise su conexión y vuelva a intentar.", "GET"),
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
    
    return null;
  }

  return (
    <Parallax
      animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
      style={{ transform: "translateX(-100px)", opacity: 0 }}
      className="code-box-shape"
    >
      <Grid container spacing={2} sx={{ width: "100%", my: 3 }}>
        {data.map((sede) => (
          (sede.main) ?
          <div/>
          :

          <Grid
            key={sede._id}
            item
            xs={12}
            md={6}
            sx={{ minHeight: 400 }}
          >
            <CardItemSede sede={sede} />
          </Grid>
        ))}
      </Grid>
    </Parallax>
  );
};

export default ListSedes;
