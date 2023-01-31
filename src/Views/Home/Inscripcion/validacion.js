export function validar_datos_personales(data) {
  if (
    !data.name ||
    !data.sede ||
    !data.id_sede ||
    !data.from ||
    !data.birthday ||
    !data.genre ||
    !data.address || 
    !data.phone ||
    !data.email || 
    !data.photo || 
    !data.curp
  ) {
    return true
  }else{
    return false
  }
}

export function validar_comprobantes(data) {
    if (
      !data.pay || 
      !data.personal_identify
    ) {
      return true
    }else{
      return false
    }
  }

  export function validar_requisitos(data) {
    if (
      !data.url_video || 
      !data.name_song ||
      !data.artistic_experience ||
      !data.privacy_notice
    ) {
      return true
    }else{
      return false
    }
  }
