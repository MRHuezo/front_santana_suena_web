export function handlerErrors(err, type) {
  console.log(err, type);
  try {
    if (type === "POST") {
      const { status, data } = err.response;
      if(status === 400){
        return data.message;
      }
      const { code } = err;
      switch (code) {
        case "ERR_NETWORK":
          return "No se pudo establecer una conexión con el servidor";
        case "ERR_BAD_REQUEST":
          return "Error de solicitud 404";
        case "ERR_BAD_RESPONSE":
          return "Error Interno del Servidor";
        default:
          return "Ops, hubo un error desconocido";
      }
    } else {
      
      let status, data;
      if(err.response)  {status = err.response.status;
         data= err.response.data   ;}
      
     
      switch (status) {
        case 404:
          return data.message
            ? data.message
            : "No se pudo establecer una conexión con el servidor";
        case 500:
          return data.message ? data.message : "Error Interno del Servidor";
        default:
          return err;
      }
    }
  } catch (error) {
    return error.message;
  }
}

//404 y si no hay respnse.data.message not fou
//500
