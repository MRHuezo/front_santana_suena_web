import React, { createContext } from "react";

export const InscripcionContext = createContext();

const initial_participante_state = {
  name: "",
  id_sede: "",
  sede: "",
  address: "",
  email: "",
  url_video: "",
  pay: "",
  personal_identify: "",
  phone: "",
  name_song: "",
  artistic_experience: "",
  from: "",
  birthday: "",
  genre: "",
  privacy_notice: false,
  curp: "",
  photo: "",
};

const InscripcionCtxProvider = ({ children }) => {
  const [data, setData] = React.useState(initial_participante_state);
  const [previewComprobante, setPreviewComprobante] = React.useState("");
  const [previewID, setPreviewID] = React.useState("");
  const [previewUser, setPreviewUser] = React.useState("");

  return (
    <InscripcionContext.Provider
      value={{
        data,
        setData,
        previewComprobante,
        setPreviewComprobante,
        previewID,
        setPreviewID,
        initial_participante_state,
        previewUser,
        setPreviewUser,
      }}
    >
      {children}
    </InscripcionContext.Provider>
  );
};

export default InscripcionCtxProvider;
