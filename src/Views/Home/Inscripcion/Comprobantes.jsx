import React, { useCallback, useContext } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { InscripcionContext } from "../../../Context/InscripcionCtx";

const Comprobantes = () => {
  const {
    data,
    setData,
    previewComprobante,
    setPreviewComprobante,
  } = useContext(InscripcionContext);

  const onDrop = useCallback(
    (files) => {
      setPreviewComprobante(URL.createObjectURL(files[0]));
      setData({
        ...data,
        comprobante_pago: files[0],
      });
    },
    [data, setData, setPreviewComprobante]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const styleDragContainer = {
    border: "2px dashed #D9D9D9",
    height: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Paper variant="outlined" sx={{ display: "block", px: 4, py: 2, width: "100%" }}>
      <Box>
        <Typography>Comprobante de pago:</Typography>
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
        <IdentificacionComponent />
      </Box>
    </Paper>
  );
};

const IdentificacionComponent = () => {
  const { data, setData, previewID, setPreviewID } = useContext(
    InscripcionContext
  );

  const onDrop = useCallback(
    (files) => {
      setPreviewID(URL.createObjectURL(files[0]));
      setData({
        ...data,
        identificacion_personal: files[0],
      });
    },
    [setPreviewID, data, setData]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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
