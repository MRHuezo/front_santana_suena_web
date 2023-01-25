import * as React from "react";
import { SnackbarProvider, useSnackbar } from "notistack";

function RenderSnack({
  children,
  open,
  message,
  variant,
  preventDuplicate,
  anchorOrigin,
}) {
  const { enqueueSnackbar } = useSnackbar();

  const alert = React.useCallback(() => {
    console.log(open)
    enqueueSnackbar(message, {
      variant,
      preventDuplicate,
      anchorOrigin,
    });
  }, [open, message, variant, preventDuplicate, anchorOrigin, enqueueSnackbar]);

  React.useEffect(() => {
    alert();
  }, [alert]);

  return <React.Fragment>{children}</React.Fragment>;
}

export default function CustomSnackbar({
  children,
  open = false,
  message = "No message",
  variant = "default", //default | error | success | warning | info
  autoHideDuration = 2000,
  preventDuplicate = true,
  anchorOrigin = { horizontal: "right", vertical: "bottom" },
}) {
  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={autoHideDuration}>
      <RenderSnack
        children={children}
        open={open}
        variant={variant}
        message={message}
        preventDuplicate={preventDuplicate}
        anchorOrigin={anchorOrigin}
      />
    </SnackbarProvider>
  );
}
