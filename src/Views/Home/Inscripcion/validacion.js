export function validar_datos_personales(data) {
  if (
    !data.name ||
    !data.sede ||
    !data.id_sede ||
    !data.lugar_origen ||
    !data.fecha_nacimiento ||
    !data.genero ||
    !data.address || 
    !data.telefono ||
    !data.mail
  ) {
    return true
  }else{
    return false
  }
}

export function validar_comprobantes(data) {
    if (
      !data.comprobante_pago || 
      !data.identificacion_personal
    ) {
      return true
    }else{
      return false
    }
  }

  export function validar_requisitos(data) {
    if (
      !data.url_video || 
      !data.nombre_tema ||
      !data.experiencia_artistica ||
      !data.aviso_privacidad
    ) {
      return true
    }else{
      return false
    }
  }
