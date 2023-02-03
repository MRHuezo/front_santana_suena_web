import React, { useCallback, useContext } from "react";
import { Box } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { InscripcionContext } from "../../../Context/InscripcionCtx";

const UserPhoto = () => {
  const {
    data,
    setData,
    previewUser, setPreviewUser
  } = useContext(InscripcionContext);
  
  
  const onDrop = useCallback(
    (files) => {
      setPreviewUser(URL.createObjectURL(files[0]));
      setData({
        ...data,
        photo: files[0],
      });
    },
    [data, setData, setPreviewUser]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const styleDragContainer = {
    border: "2px dashed #D9D9D9",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Box height="100%">
        <div {...getRootProps()} style={styleDragContainer}>
          <input {...getInputProps()} />
          {previewUser ? (
            <Box
              height="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img
                alt="user_photo"
                src={previewUser}
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
            </Box>
          ) : isDragActive ? (
            <p>Suelta tu imagen aquí ...</p>
          ) : (
            <p>Foto</p>
          )}
        </div>
      </Box>
  );
};

export default UserPhoto;
