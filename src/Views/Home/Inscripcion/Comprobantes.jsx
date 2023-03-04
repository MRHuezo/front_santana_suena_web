import React, { useCallback, useContext } from "react";
import { Box, Typography, Paper, Alert } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { InscripcionContext } from "../../../Context/InscripcionCtx";
import { MainContext } from "../../../Context/MainCtx";

const Comprobantes = () => {
  const {
    data,
    setData,
    previewComprobante,
    setPreviewComprobante,
  } = useContext(InscripcionContext);

  const { snackMessage } = React.useContext(MainContext);

  const getError = (e) => {
    if(e.message.includes("Overload resolution failed")){
      snackMessage({
        message: "Límite excedido, el limite son 3Mb",
        variant: "error",
        anchorOrigin: { horizontal: "left", vertical: "top" }
      });
    }else{
      snackMessage({
        message: "Hubo un error al cargar esta imagen",
        variant: "error",
        anchorOrigin: { horizontal: "left", vertical: "top" }
      });
    }
  };

  const onDrop = useCallback(
    (files) => {
      setPreviewComprobante(URL.createObjectURL(files[0]));
      setData({
        ...data,
        pay: files[0],
      });
    },
    [data, setData, setPreviewComprobante]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxSize: 3000000,
    onError: (error) => getError(error),
  });

  const styleDragContainer = {
    border: "2px dashed #D9D9D9",
    height: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Paper
      variant="outlined"
      sx={{ display: "block", px: 4, py: 2, width: "100%" }}
    >
      <Alert severity="info">El tamaño de la imagen no debe pasar los 3Mb</Alert>
      <Box mt={0.5}>
        <Typography>Comprobante de donativo:</Typography>
        <div {...getRootProps()} style={styleDragContainer}>
          <input {...getInputProps()} />
          {previewComprobante ? (
            <Box
              height="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img
                alt="comprobante"
                src={previewComprobante}
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
            </Box>
          ) : isDragActive ? (
            <p>Suelta tu imagen aquí ...</p>
          ) : (
            <p>Arrastra y suelta tu imagen aquí, o haz clic</p>
          )}
        </div>
      </Box>
      <Box sx={{ my: 1 }}>
        <Typography>Identificación:</Typography>
        <IdentificacionComponent getError={getError} />
      </Box>
    </Paper>
  );
};

const IdentificacionComponent = ({getError}) => {
  const { data, setData, previewID, setPreviewID } = useContext(
    InscripcionContext
  );

  const onDrop = useCallback(
    (files) => {
      setPreviewID(URL.createObjectURL(files[0]));
      setData({
        ...data,
        personal_identify: files[0],
      });
    },
    [setPreviewID, data, setData]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxSize: 3000000,
    onError: (error) => getError(error),
  });

  const styleDragContainer = {
    border: "2px dashed #D9D9D9",
    height: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div {...getRootProps()} style={styleDragContainer}>
      <input {...getInputProps()} />
      {previewID ? (
        <Box
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img
            alt="identificacion"
            src={previewID}
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </Box>
      ) : isDragActive ? (
        <p>Suelta tu imagen aquí ...</p>
      ) : (
        <p>Arrastra y suelta tu imagen aquí, o haz clic</p>
      )}
    </div>
  );
};

export default Comprobantes;
