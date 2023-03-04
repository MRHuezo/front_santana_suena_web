import { withSnackbar } from "notistack";
import React, { createContext, useState, useEffect } from "react";

export const MainContext = createContext();

const initial_query_state = {
  data: undefined,
  loading: false,
  error: undefined,
};

const MainCtxProvider = ({ children, enqueueSnackbar }) => {
  const [user, setUser] = useState(null);
  const [sedes, setSedes] = useState(initial_query_state);
 
    
    
  const snackMessage = React.useCallback(
    ({
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
    },
    [enqueueSnackbar],
  )
  ;

  return (
    <MainContext.Provider
      value={{
        snackMessage,
        user, 
        setUser,
        initial_query_state,
        sedes, 
        setSedes
       
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default withSnackbar(MainCtxProvider);
