import React, { createContext } from "react";

export const InscripcionContext = createContext();

const InscripcionCtxProvider = ({ children }) => {
  const [error, setError] = React.useState(false);
  const [data, setData] = React.useState({
    sede: "",
    lugar_origen: "",
    nombre: "",
    fecha_nacimiento: "",
    sexo: "",
    direccion: "",
    telefono: "",
    email: "",
    comprobante_de_pago: null,
    identificacion: null,
    url_video: "",
    nombre_cancion: "",
    experiencia_artistica: "",
    accept: false,
  });
  const [previewComprobante, setPreviewComprobante] = React.useState("");
  const [previewID, setPreviewID] = React.useState("");

  return (
    <InscripcionContext.Provider
      value={{
        error,
        setError,
        data,
        setData,
        previewComprobante,
        setPreviewComprobante,
        previewID,
        setPreviewID
      }}
    >
      {children}
    </InscripcionContext.Provider>
  );
};

export default InscripcionCtxProvider;
