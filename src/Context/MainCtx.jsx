import { withSnackbar } from "notistack";
import React, { createContext } from "react";

export const MainContext = createContext();

const MainCtxProvider = ({ children, enqueueSnackbar }) => {

    
  const snackMessage = ({
    message = "No Message",
    variant = "default",
    preventDuplicate = true,
    anchorOrigin = { horizontal: "right", vertical: "bottom" }
  }) => {
    enqueueSnackbar(message, {
      variant,
      preventDuplicate,
      anchorOrigin,
    });
  };

  return (
    <MainContext.Provider
      value={{
        snackMessage,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default withSnackbar(MainCtxProvider);
