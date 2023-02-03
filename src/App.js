import { SnackbarProvider } from "notistack";
import React from "react";
import { RouterProvider } from "react-router-dom";
import MainCtxProvider from "./Context/MainCtx.jsx";
import { router } from "./routes.js";

function App() {
  return (
    <div className="App" style={{backgroundColor:'white'}}>
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <MainCtxProvider>
          <RouterProvider router={router} />
        </MainCtxProvider>
      </SnackbarProvider>
    </div>
  );
}

export default App;
