import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DatosPersonales from "./DatosPersonales";
import Comprobantes from "./Comprobantes";
import { InscripcionContext } from "../../../Context/InscripcionCtx";
import Requisitos from "./Requisitos";
import { CircularProgress } from "@mui/material";
import { Done } from "@mui/icons-material";
import { MainContext } from "../../../Context/MainCtx";
import {
  validar_comprobantes,
  validar_datos_personales,
  validar_requisitos,
} from "./validacion";
import axiosClient from "../../../Config/axios";
import { handlerErrors } from "../../../Config/errors";

const steps = ["Datos personales", "Comprobantes", "Tu video"];
const RenderView = ({ activeStep }) => {
  switch (activeStep) {
    case 0:
      return <DatosPersonales />;
    case 1:
      return <Comprobantes />;
    case 2:
      return <Requisitos />;
    default:
      return null;
  }
};

export default function StepComponent() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const { data } = React.useContext(InscripcionContext);
  const { snackMessage } = React.useContext(MainContext);
  const [loading, setLoading] = React.useState(false);

  const handleNext = () => {
    let newSkipped = skipped;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleOk = async () => {
    setLoading(true);

    let formData = new FormData();
    for (var key in data) {
      formData.append(key, data[key]);
    }
    /* for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    } */
    await axiosClient
      .post("/competitor/create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        setLoading(false);
        snackMessage({
          message: res.data.message,
          variant: "success",
        });
      })
      .catch((err) => {
        setLoading(false);
        snackMessage({
          message: handlerErrors(err, "POST"),
          variant: "error",
        });
      });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel
                StepIconProps={{ sx: { width: "1.5em", height: "1.5em" } }}
              >
                <Typography variant="body1">{label}</Typography>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <React.Fragment>
        <Box sx={{ my: { xs: 1, md: 2 } }} />
        <Box sx={{ minHeight: "57vh" }}>
          <RenderView activeStep={activeStep} />
        </Box>
        <Box sx={{ display: "flex", pt: 2, justifyContent: "space-between" }}>
          <Button
            variant="contained"
            color="primary"
            disabled={activeStep === 0 }
            onClick={handleBack}
          >
            Regresar
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button
              variant="contained"
              onClick={handleOk}
              disabled={validar_requisitos(data)}
              startIcon={
                loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : (
                  <Done />
                )
              }
            >
              Terminar
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={
                activeStep === 0
                  ? validar_datos_personales(data)
                  : activeStep === 1
                  ? validar_comprobantes(data)
                  : false

              }
            >
              Siguiente
            </Button>
          )}
        </Box>
      </React.Fragment>
    </Box>
  );
}
