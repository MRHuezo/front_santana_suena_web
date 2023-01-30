import React, { createContext } from "react";

export const InscripcionContext = createContext();

const initial_participante_state = {
  name: "",
  id_sede: "",
  sede: "",
  address: "",
  mail: "",
  url_video: "",
  comprobante_pago: "",
  identificacion_personal: "",
  telefono: "",
  nombre_tema: "",
  experiencia_artistica: "",
  lugar_origen: "",
  fecha_nacimiento: "",
  genero: "",
  aviso_privacidad: false,
}

const InscripcionCtxProvider = ({ children }) => {
  const [data, setData] = React.useState(initial_participante_state);
  const [previewComprobante, setPreviewComprobante] = React.useState("");
  const [previewID, setPreviewID] = React.useState("");

  return (
    <InscripcionContext.Provider
      value={{
        data,
        setData,
        previewComprobante,
        setPreviewComprobante,
        previewID,
        setPreviewID,
        initial_participante_state
      }}
    >
      {children}
    </InscripcionContext.Provider>
  );
};

export default InscripcionCtxProvider;
