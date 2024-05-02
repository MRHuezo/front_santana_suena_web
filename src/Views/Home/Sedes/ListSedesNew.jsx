import React from "react";
import { Parallax } from "rc-scroll-anim";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { ButtonBase, Grid, Typography } from "@mui/material";
import { MainContext } from "../../../Context/MainCtx";
import axiosClient from "../../../Config/axios";
import LoadingPage from "./LoadingPage";
import { handlerErrors } from "../../../Config/errors";
import { Place } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ListSedesNew = () => {
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
    <Parallax
      animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
      style={{ transform: "translateX(-100px)", opacity: 0 }}
      className="code-box-shape"
    >
      <Grid container spacing={1}>
        {data.map((sede) =>
          sede.main ? (
            <div />
          ) : (
            <Grid key={sede._id} item xs={12} md={4}>
              <CustomButton sede={sede} />
            </Grid>
          )
        )}
      </Grid>
    </Parallax>
  );
};

export default ListSedesNew;

const CustomButton = ({ sede }) => {
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    height: "80vh",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "100% !important", // Overrides inline-style
      height: "40vh",
    },
    cursor: "pointer",
    //borderRadius: 5,
    overflow: "hidden",
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .imgSrc": {
        transform: "scale(1.1)",
      },
    },
  }));

  const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    //borderRadius: 5,
    transition: "transform .2s",
    transform: "scale(1)",
  });

  const Image = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .img-logo-cont": {
      backgroundColor: "transparent",
    },
  }));

  const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
    //borderRadius: 5,
  }));

  return (
    <Link to={`/sede/${sede.id_name}`}>
      <ImageButton
        focusRipple
        style={{
          width: "100%",
        }}
      >
        <ImageSrc
          className="imgSrc"
          style={{ backgroundImage: `url(${sede.img})` }}
        />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <Image>
          <Box
            className="img-logo-cont"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              flexDirection: "column",
            }}
          >
           
            <Typography gutterBottom variant="h6" component="div">
              <strong>{sede.name}</strong>
            </Typography>
            {/* <Place sx={{ fontSize: 40 }} />
            <Typography gutterBottom variant="h4" component="div">
              <strong>{sede.place}</strong>
            </Typography>
           
            
            <Box  sx={{display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              flexDirection: "column",}}>
            <Typography gutterBottom  sx={{fontSize:22}} component="div">
            <strong>{sede.lugar_final.split(",")[0]} </strong>
            </Typography>
            <Typography gutterBottom  sx={{fontSize:19}}  component="div">
            <strong>{sede.fecha_final } {" " + sede.hora_final + " hrs"}</strong>
            </Typography>
            </Box> */}
          </Box>
         
        </Image>
      </ImageButton>
    </Link>
  );
};
