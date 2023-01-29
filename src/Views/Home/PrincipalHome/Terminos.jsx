import { Menu, Settings } from "@mui/icons-material";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NavbarHome from "../../../Components/Navbar/NavbarHome";
import { HashLink } from "react-router-hash-link";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import "./terminosStyle.css";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Terminos(props){
  return (
    <div>
      <NavbarHome />
      <Container maxWidth="lg">
        <ElevationScroll {...props}>
          <Box py={10}>
            <Box id="indice">
              <Typography variant="h4" align="center">
                <b>AVISO DE PRIVACIDAD</b>
              </Typography>
              <br />
              <br />
              <ol type="I" className="indice-aviso">
                <li className="li-aviso">
                  <HashLink to="#aviso-i">
                    <span>IDENTIFICACIÓN DEL RESPONSABLE Y DEL ENCARGADO</span>
                  </HashLink>
                </li>
                <li className="li-aviso">
                  <HashLink to="#aviso-ii">
                    <span>PARA EFECTOS DEL PRESENTE AVISO SE ENTIENDE</span>
                  </HashLink>
                </li>
                <li className="li-aviso">
                  <HashLink to="#aviso-iii">
                    <span>FINALIDAD DEL TRATAMIENTO</span>
                  </HashLink>
                </li>
                <li className="li-aviso">
                  <HashLink to="#aviso-iv">
                    <span>FINALIDADES SECUNDARIAS</span>
                  </HashLink>
                </li>
                <li className="li-aviso">
                  <HashLink to="#aviso-v">
                    <span>DATOS PERSONALES A RECABAR</span>
                  </HashLink>
                </li>
                <li className="li-aviso">
                  <HashLink to="#aviso-vi">
                    <span>CONSENTIMIENTO</span>
                  </HashLink>
                </li>
                <li className="li-aviso">
                  <HashLink to="#aviso-vii">
                    <span>
                      PROTECCIÓN A DATOS PERSONALES DE MENORES Y PERSONAS CON
                      ESTADO DE INTERDICCIÓN
                    </span>
                  </HashLink>
                </li>
                <li className="li-aviso">
                  <HashLink to="#aviso-viii">
                    <span>REMISIÓN DE DATOS PERSONALES</span>
                  </HashLink>
                </li>
                <li className="li-aviso">
                  <HashLink to="#aviso-ix">
                    <span>TRANSFERENCIA DE DATOS PERSONALES</span>
                  </HashLink>
                </li>
                <li className="li-aviso">
                  <HashLink to="#aviso-x">
                    <span>
                      {" "}
                      LIMITACIÓN DEL USO O DIVULGACIÓN DE SUS DATOS PERSONALES
                    </span>
                  </HashLink>
                </li>
                <li className="li-aviso">
                  <HashLink to="#aviso-xi">
                    <span>
                      REVOCACIÓN DE SU CONSENTIMIENTO PARA EL TRATAMIENTO DE
                      DATOS
                    </span>
                  </HashLink>
                </li>
                <li className="li-aviso">
                  <HashLink to="#aviso-xii">
                    <span>EXCLUSIÓN DE RESPONSABILIDAD</span>
                  </HashLink>
                </li>
                <li className="li-aviso">
                  <HashLink to="#aviso-xiii">
                    <span>CAMBIOS AL AVISO DE PRIVACIDAD</span>
                  </HashLink>
                </li>
                <li className="li-aviso">
                  <HashLink to="#aviso-xiv">
                    <span>DERECHOS DEL TITULAR DE LOS DATOS PERSONALES</span>
                  </HashLink>
                </li>
              </ol>
              <br />
            </Box>
            <Box id="aviso-i">
              <Typography variant="h6">
                <b>I. IDENTIFICACIÓN DEL RESPONSABLE Y DEL ENCARGADO</b>
              </Typography>
              <br />
              <Typography align="justify">
                El Centro Comunitario y de Salud Tiopa Tlanextli cuya razón
                social es <b>Santuario de Luz A.C.</b> ubicado en la calle
                Rosario Castellanos No. 217 colonia Echeverría en la ciudad de
                Autlán de Navarro, Jalisco, C.P. 48903, da a conocer el presente
                Aviso de Privacidad, en donde se especifica en su carácter de
                Responsable la forma en la que recaba, utiliza, transfiere y
                almacena sus datos personales, de conformidad con lo dispuesto
                en el artículo 16 constitucional de la Ley Federal de Protección
                de Datos Personales en Posesión de los Particulares.
              </Typography>
              <br />
              <Typography align="justify">
                Para atender y dar trámite a las solicitudes para revocar el
                consentimiento al tratamiento de su información personal o para
                ejercer sus derechos ARCO, ponemos a su disposición los
                siguientes medios de contacto:
              </Typography>
              <br />
              <Typography>Teléfonos.- (3173826632, 3173814187)</Typography>
              <Typography>
                Y el correo electrónico.- tiopatlanextli@hotmail.com
              </Typography>
            </Box>
            <br />
            <Box id="aviso-ii">
              <Typography variant="h6">
                <b>II. PARA EFECTOS DEL PRESENTE AVISO SE ENTIENDE </b>
              </Typography>
              <br />
              <Typography align="justify">
                <b>Datos personales:</b> Cualquier información concerniente a
                una persona física identificada o identificable. Los datos
                personales que recabamos de forma directa de usted son aquellos
                que nos proporciona a través de los siguientes medios: En
                nuestras instalaciones, por correo electrónico, página web y en
                forma telefónica.
              </Typography>
              <br />
              <Typography align="justify">
                <b>Legislación vigente aplicable:</b> Ley: Ley Federal de
                Protección de Datos Personales en Posesión de los Particulares
                (LFPDPPP). Reglamento: Reglamento de la Ley Federal de
                Protección de Datos Personales en Posesión de los Particulares
                (RLFPDPPP).
              </Typography>
              <br />
              <Typography align="justify">
                <b>
                  Principios y deberes que rigen el tratamiento de su
                  información personal:
                </b>
                En la obtención y tratamiento de sus datos personales que usted
                nos proporciona y para los efectos que se mencionan en el
                presente Aviso de Privacidad, estos serán tratados observando
                los principios y deberes plasmados en la Ley, los cuales se
                enuncian a continuación: licitud, consentimiento, información,
                calidad, finalidad, lealtad, proporcionalidad, responsabilidad,
                confidencialidad y seguridad.
              </Typography>
              <br />
              <Typography align="justify">
                <b>Datos personales sensibles:</b> Aquellos datos personales que
                afecten a la esfera más íntima de su Titular o cuya utilización
                indebida puedan dar origen a discriminación o conlleve un riesgo
                grave para éste. En particular, se consideran sensibles aquellos
                que puedan revelar aspectos como origen racial o étnico, estado
                de salud presente y futura, información genética, creencias
                religiosas, filosóficas y morales, afiliación sindical,
                opiniones políticas, preferencia sexual.
              </Typography>
              <br />
              <Typography align="justify">
                <b>
                  Datos personales financieros o patrimoniales. La Ley considera
                  dentro esta categoría los siguientes datos personales:
                </b>{" "}
                Nombre del titular de la tarjeta bancaria, el número de la
                tarjeta bancaria, la fecha de vencimiento de la tarjeta bancaria
                y el nombre del banco. La Ley establece que en caso de solicitar
                este tipo de datos personales, el Responsable a obtener el
                consentimiento será expreso del Titular por los siguientes
                medios: verbalmente, por escrito, medios electrónicos, ópticos o
                por cualquier otra tecnología, o por signos inequívocos, salvo
                aquellas excepciones que se indican en los artículos 10 y 37 de
                la Ley.
              </Typography>
              <br />
              <Typography align="justify">
                <b>Consentimiento Tácito y Expreso. Consentimiento Tácito:</b>{" "}
                Se entenderá que usted nos otorga este consentimiento para el
                tratamiento de sus datos personales, cuando habiéndole puesto a
                su disposición el presente Aviso de Privacidad, no manifieste
                alguna oposición. Consentimiento Expreso: Se entenderá que usted
                nos otorga este consentimiento para el tratamiento de sus datos
                personales, una vez que su voluntad la manifiesta de forma
                verbal, por escrito, por medios electrónicos, ópticos o por
                cualquier otra tecnología, o por signos inequívocos.
              </Typography>
              <br />
              <Typography align="justify">
                <b>Duración del tratamiento de sus datos personales.</b> La
                información de sus datos personales será tratada únicamente por
                el tiempo necesario a fin de cumplir con las finalidades
                descritas en este Aviso de Privacidad que está a su disposición
                y el cual cumple con lo establecido por las disposiciones
                legales respectivas. No obstante, se le informa que no será
                necesario el consentimiento para el tratamiento de sus datos
                personales cuando estos se encuentren en alguna de las
                situaciones que se indican en la Ley.
              </Typography>
              <br />
              <Typography align="justify">
                <b>Datos especiales: </b>Con base a nuestro compromiso en la
                protección de los datos personales y de la privacidad de los
                mismos, los datos de menores de edad o de personas que se
                encuentren en estado de interdicción o incapacidad establecida
                por ley, no serán recabados sin consentimiento previo por parte
                del padre o tutor o su representante.
              </Typography>
            </Box>
            <br />
            <Box id="aviso-iii">
              <Typography variant="h6">
                <b>III. FINALIDAD DEL TRATAMIENTO.</b>
              </Typography>
              <br />
              <Typography align="justify">
                Santuario de Luz A.C. a través del Concurso Nacional de Guitarra
                “Santana Suena” podrá solicitar y/o recabar, a través de los
                medios datos personales de los participantes para los fines
                abajo señalados, así como para dar cumplimiento con las
                disposiciones legales que así lo requieran. Santuario de Luz
                A.C. y/o cualquier tercero que llegue a intervenir en cualquier
                fase del Tratamiento de Datos Personales, guardará
                confidencialidad respecto de los mismos cuando tengan dicho
                carácter, conforme a las disposiciones legales aplicables en
                México.
              </Typography>
              <br />
              <Typography>
                Los Datos Personales que los participantes proporcionen tienen
                como finalidad principal:
              </Typography>
              <br />
              <ul className="finalidad-ul">
                <li>Integrar registro de participantes.</li>
                <li>
                  Atender dudas, comentarios y sugerencias vinculados con el
                  Concurso Nacional de Guitarra “Santana Suena 2023”.
                </li>
                <li>
                  Identificar y tener contacto con los participantes del
                  Concurso Nacional de Guitarra “Santana Suena 2023”
                </li>
                <li>
                  Informarle sobre principales noticias del Concurso Nacional de
                  Guitarra “Carlos Santana”
                </li>
                <li>
                  Participar en el Concurso Nacional de Guitarra “Santana Suena
                  2023”
                </li>
                <li>
                  Cumplir con lo establecido en las bases del Concurso Nacional
                  de Guitarra “Santana Suena 2023”
                </li>
                <li>
                  Poder ser seleccionado y reconocerlo como seleccionado del
                  Concurso Nacional de Guitarra “Santana Suena 2023”
                </li>
                <li>
                  Utilizar su videograbación, imagen y/o fotografía para
                  elaboración de material informativo y promocional del Concurso
                  Nacional de Guitarra “Santana Suena 2023”
                </li>
                <li>
                  El nombre, imagen y lugar del participante que resulte
                  seleccionado por cada Sede y en la Gran Final podrá ser
                  utilizado en anuncios y/o publicaciones realizadas en redes
                  sociales o televisión para reconocerlos como seleccionados y
                  /o ganador del Concurso Nacional de Guitarra “Santana Suena
                  2023”
                </li>
                <li>
                  Otorgar los premios previstos en las bases del Concurso
                  Nacional de Guitarra “Santana Suena 2023”
                </li>
              </ul>
              <br />
              <Typography>
                <b>En nuestro sitio Web. </b>
              </Typography>
              <br />
              <Typography align="justify">
                Hacemos de su conocimiento que en nuestro sitio web{" "}
                <span style={{ color: "red" }}>santanasuena</span>
                contamos con una sección de chat para contacto, en la cual
                solicita nombre, apellido, e-mail, teléfono con el fin de
                realizar preguntas o mayor información en nuestro Portal Web.
              </Typography>
              <br />
              <Typography align="justify">
                Le informamos que en nuestro sitio web utilizamos cookies, web
                beacons u otras tecnologías, a través de las cuales es posible
                monitorear su comportamiento como usuario de internet, así como
                brindarle un mejor servicio y experiencia al navegar en nuestra
                página. Los datos personales que recabamos a través de estas
                tecnologías, los utilizaremos para fines estadísticos, marketing
                y para facilitar al usuario un acceso más rápido al sitio. Las
                cookies de{" "}
                <span style={{ color: "red" }}>www.santanasuena.com</span> se
                asocian únicamente con un Usuario Anónimo y su ordenador y no
                proporcionan referencias que permitan deducir datos personales
                del Usuario. Los datos personales que obtenemos de estas
                tecnologías de rastreo son los siguientes: Identificadores,
                Idioma preferido por el usuario, región en la que se encuentra
                el usuario, tipo de navegador del usuario, tipo de sistema
                operativo del usuario, fecha y hora del inicio y final de una
                sesión de un usuario, páginas web visitadas por un usuario,
                búsquedas realizadas por un usuario, publicidad revisada por un
                usuario.
              </Typography>
              <br />
              <Typography align="justify">
                Para conocer la forma en que se pueden deshabilitar estas
                tecnologías en los principales navegadores, consulte el
                siguiente medio:
              </Typography>
              <br />
              <Typography>
                <b>Google Chrome</b>
              </Typography>
              <Typography align="justify">
                {`Selecciona el icono de menú de Chrome  `}
                <Menu />
                {`  > Selecciona Configuración >
              En la parte inferior de la página selecciona mostrar opciones
              avanzadas > En la sección "Privacidad", selecciona Configuración
              de contenido > Selecciona No permitir que se guarden datos de los
              sitios > Selecciona Listo.`}
              </Typography>
              <br />
              <Typography>
                <b>Internet Explorer</b>
              </Typography>
              <Typography align="justify">
                {`Haga clic en el botón Herramientas  `}
                <Settings />
                {`  y luego en Opciones de Internet > Pulse o haga clic en la pestaña Privacidad >
               Configuración > bloquear todas las cookies y luego pulse o haga clic en Aceptar.`}
              </Typography>
              <br />
              <Typography>
                <b>Safari</b>
              </Typography>
              <Typography align="justify">
                {`Para configurar el bloqueo de cookies de Safari en iOS 8, Ajustes >
               Safari > Bloquear cookies y selecciona Bloquear siempre. En iOS 7 o 
               versiones anteriores, selecciona Nunca, De publicidad y terceros o Siempre. `}
              </Typography>
              <br />
              <Typography>
                <b>Firefox</b>
              </Typography>
              <Typography align="justify">
                {`Haz clic en el botón Menú   `}
                <Menu />
                {`   y elige Opciones > Selecciona el panel Privacidad > 
              En Firefox: elige Usar una configuración personalizada para el historial > 
              Desmarca la opción Aceptar cookies para desactivarlas > Cierra la página. 
              Cualquier cambio que hayas hecho se guardará automáticamente.`}
              </Typography>
              <br />
              <Typography>
                Para otro tipo de navegadores o versiones, consulta la sección
                de ayuda en tu navegador.
              </Typography>
            </Box>
            <br />
            <Box id="aviso-iv">
              <Typography variant="h6">
                <b>IV. FINALIDADES SECUNDARIAS </b>
              </Typography>
              <br />
              <Typography align="justify">
                De manera adicional si usted no se opone, Santuario de Luz A.C.
                utilizará su información personal para: Envío tanto físico como
                electrónico de publicidad y comunicación con fines de
                mercadotecnia o tele-marketing, invitarlo a participar en
                actividades similares, participar en encuestas, sorteos y/o
                rifas para apoyo de la institución.
              </Typography>
              <br />
              <Typography align="justify">
                <b>
                  En caso de que no desee que sus datos personales sean tratados
                  para alguna o todas las Finalidades Secundarias, desde este
                  momento usted nos puede comunicar lo anterior mediante correo
                  electrónico a la dirección que se indica más adelante, para el
                  ejercicio de derechos A.R.C.O
                </b>
              </Typography>
              <br />
            </Box>
            <br />
            <Box id="aviso-v">
              <Typography variant="h6">
                <b>V. DATOS PERSONALES A RECABAR</b>
              </Typography>
              <br />
              <Typography>
                Para las finalidades antes señaladas solicitamos los siguientes
                datos personales:
              </Typography>
              <ul className="datos-personales-ul">
                <li>Nombre Completo</li>
                <li>Registro Federal de Contribuyentes(RFC)</li>
                <li>Clave única de Registro de Población (CURP)</li>
                <li>Nacionalidad</li>
                <li>Datos académicos</li>
                <li>Domicilio</li>
                <li>Teléfono particular</li>
                <li>Teléfono celular</li>
                <li>Correo electrónico</li>
                <li>Firma autógrafa</li>
                <li>Identificación oficial</li>
                <li>Fotografía e imagen</li>
                <li>Nombre de usuario en redes sociales</li>
                <li>
                  Datos financieros (Cuenta bancaria) en caso de ser necesario
                </li>
              </ul>
            </Box>
            <br />
            <Box id="aviso-vi">
              <Typography variant="h6">
                <b>VI. CONSENTIMIENTO.</b>
              </Typography>
              <br />
              <Typography align="justify">
                Para el caso de mayores de edad, el envío de sus datos mediante
                los medios, implica el consentimiento pleno y sin reservas de
                los usuarios para el Tratamiento de sus Datos Personales de
                acuerdo con el presente Aviso de Privacidad.{" "}
              </Typography>
              <br />
              <Typography align="justify">
                No será necesario el consentimiento para el tratamiento de los
                datos personales cuando:
              </Typography>
              <ol type="I">
                <li> Esté previsto en una Ley</li>
                <li>Los datos figuren en fuentes de acceso público;</li>
                <li>
                  Los datos personales se sometan a un procedimiento previo de
                  disociación;
                </li>
                <li>
                  Tenga el propósito de cumplir obligaciones derivadas de una
                  relación jurídica entre el titular y el responsable;
                </li>
                <li>
                  Exista una situación de emergencia que potencialmente pueda
                  dañar a un individuo en su persona o en sus bienes;
                </li>
                <li>
                  Sean indispensables para la atención médica, la prevención,
                  diagnóstico, la prestación de asistencia sanitaria,
                  tratamientos médicos o la gestión de servicios sanitarios,
                  mientras el titular no esté en condiciones de otorgar el
                  consentimiento, en los términos que establece la Ley General
                  de Salud y demás disposiciones jurídicas aplicables y que
                  dicho tratamiento de datos se realice por una persona sujeta
                  al secreto profesional u obligación equivalente, o VII. Se
                  dicte resolución de autoridad competente.
                </li>
              </ol>
            </Box>
            <br />
            <Box id="aviso-vii">
              <Typography variant="h6">
                <b>
                  VII. PROTECCIÓN A DATOS PERSONALES DE MENORES Y PERSONAS CON
                  ESTADO DE INTERDICCIÓN.{" "}
                </b>
              </Typography>
              <br />
              <Typography align="justify">
                En el caso de menores de edad o de personas que se encuentren en
                estado de interdicción o incapacidad establecida por Ley no se
                recabarán o tratarán Datos Personales de dichos titulares, sin
                contar con el consentimiento previo de la persona que ejerce la
                patria potestad, o en su caso, del tutor o representante legal,
                de conformidad con las reglas de representación aplicables en
                cada caso.
              </Typography>
              <br />
              <Typography align="justify">
                En caso de que Santuario de Luz A.C. considere que los Datos
                Personales han sido proporcionados por un menor de edad o por
                una persona en estado de interdicción, en contravención del
                presente Aviso o sin el consentimiento correspondiente por parte
                de los representantes o padres, Santuario de Luz A.C. suprimirá
                tales Datos Personales a la brevedad. Si usted se da cuenta que
                tales Datos Personales han sido proporcionados por un menor de
                edad o por una persona en estado de interdicción, sin contar con
                el consentimiento de sus padres o representantes, por favor
                envíe un correo electrónico a tiopatlanextli@hotmail.com.
              </Typography>
            </Box>
            <br />
            <Box id="aviso-viii">
              <Typography variant="h6">
                <b>VIII. REMISIÓN DE DATOS PERSONALES</b>
              </Typography>
              <br />
              <Typography align="justify">
                Santuario de Luz A.C. podrá llegar a compartir parte o totalidad
                de sus Datos Personales con empleados u otros proveedores (en
                adelante los Encargados) con el fin específico y limitado de que
                le apoyen a ejecutar las finalidades del tratamiento de este
                Aviso.
              </Typography>
              <br />
              <Typography align="justify">
                Santuario de Luz A.C. supervisará que los Encargados utilicen
                dicha información exclusivamente para los fines que les
                instruyamos y no la resguarden por más tiempo del estrictamente
                necesario.
              </Typography>
            </Box>
            <br />
            <Box id="aviso-ix">
              <Typography variant="h6">
                <b>IX. TRANSFERENCIA DE DATOS PERSONALES</b>
              </Typography>
              <br />
              <Typography align="justify">
                Santuario de Luz A.C. transferirá sus datos personales sin
                requerir de sus consentimiento, únicamente en los casos que sean
                necesarios u obligatorios en términos del artículo 37 de la Ley
                Federal de Protección de Datos Personales en Posesión de los
                Particulares.
              </Typography>
            </Box>
            <br />
            <Box id="aviso-x">
              <Typography variant="h6">
                <b>
                  X. LIMITACIÓN DEL USO O DIVULGACIÓN DE SUS DATOS PERSONALES
                </b>
              </Typography>
              <br />
              <Typography align="justify">
                Si desea limitar el uso o divulgación de su información personal
                en nuestra posesión, el mecanismo que se ha implementado para el
                ejercicio de dichos derechos es a través de la presentación de
                la solicitud respectiva, enviando un correo electrónico a la
                siguiente dirección: tiopatlanextli@hotmail.com con el asunto.-
                “SOLICITUD DE LIMITACIÓN O DIVULGACIÓN DE DATOS PERSONALES”, no
                obstante lo anterior el participante deberá considerar que para
                ciertos fines, la limitación del uso o divulgación de sus datos
                personales implicará la conclusión de su participación en el
                Concurso de Guitarra “Santana Suena 2023”.
              </Typography>
            </Box>
            <br />
            <Box id="aviso-xi">
              <Typography variant="h6">
                <b>
                  XI. REVOCACIÓN DE SU CONSENTIMIENTO PARA EL TRATAMIENTO DE
                  DATOS
                </b>
              </Typography>
              <br />
              <Typography align="justify">
                Usted o su representante legal podrán ejercer cualquiera de los
                derechos de Acceso, rectificación, Cancelación u Oposición
                (“Derechos A.R.C.O”) así como revocar el consentimiento que nos
                haya otorgado para el tratamiento de sus datos personales, ya
                sea en consentimiento tácito o expreso.
              </Typography>
              <br />
              <Typography align="justify">
                El mecanismo que se ha implementado es a través de la
                presentación de la solicitud respectiva, enviando un correo
                electrónico a la siguiente dirección: museo@rockmexicano.mx con
                el asunto.- “SOLICITUD DE REVOCACIÓN DE CONSENTIMIENTO PARA EL
                TRATAMIENTO DE DATOS PERSONALES”
              </Typography>
              <br />
              <Typography align="justify">
                El plazo para atender tu solicitud es de{" "}
                <span style={{ color: "red" }}>20 días hábiles</span> y le
                informaremos sobre la procedencia de la misma a través de los
                medios que nos proporcionó para notificarle.
              </Typography>
            </Box>
            <br />
            <Box id="aviso-xii">
              <Typography variant="h6">
                <b>XII. EXCLUSIÓN DE RESPONSABILIDAD.</b>
              </Typography>
              <br />
              <Typography align="justify">
                Santuario de Luz A.C. advierte a sus participantes que su
                participación a través de Facebook podría implicar que Facebook
                puedan llegar a tener acceso a los Datos Personales y/o
                información relacionada con el uso de su cuenta y su
                participación por lo que en su caso Santuario de Luz A.C. no
                será responsable del uso, publicación, revelación, y/o
                divulgación que Facebook haga respecto a los Datos Personales
                usados, publicados, revelados y/o divulgados.
              </Typography>
              <br />
              <Typography align="justify">
                Recomendamos a los participantes ser cuidadosos y responsables
                sobre toda la información de carácter personal así como todo los
                accesos y permisos que el participante le otorgue a Facebook
                para acceder a dichos Datos Personales, asimismo Santuario de
                Luz A.C. sugiere a sus participantes conocer y revisar las
                políticas y avisos de privacidad de Facebook a efecto de tener
                pleno conocimiento sobre el posible acceso, uso, publicación,
                revelación y/o divulgación que este último realice respecto a
                los Datos Personales.
              </Typography>
            </Box>
            <br />
            <Box id="aviso-xiii">
              <Typography variant="h6">
                <b>XIII. CAMBIOS AL AVISO DE PRIVACIDAD</b>
              </Typography>
              <br />
              <Typography align="justify">
                Santuario de Luz A.C. se reserva el derecho de efectuar en
                cualquier momento modificaciones y actualizaciones al contenido
                del presente Aviso de Privacidad,{" "}
                <span style={{ color: "red" }}>
                  cualquier cambio en el Aviso de Privacidad lo podrán
                  visualizar en nuestra página de internet {` `}
                  <a
                    href="https://www.santanasuena.com/terminos"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://www.santanasuena.com/terminos
                  </a>
                </span>
              </Typography>
              <br />
              <Typography align="justify">
                El presente Aviso de Privacidad surtirá sus efectos legales, una
                vez puesto a disposición al participante.
              </Typography>
            </Box>
            <br />
            <Box id="aviso-xiv">
              <Typography variant="h6">
                <b>XIV. DERECHOS DEL TITULAR DE LOS DATOS PERSONALES</b>
              </Typography>
              <br />
              <Typography align="justify">
                Como Titular de sus datos personales tiene los derechos de
                Acceso, Rectificación, Cancelación y Oposición (derechos “ARCO”)
                respecto a sus datos personales, incluyendo los sensibles. Así
                como para limitar el uso o divulgación de sus datos personales,
                revocar el consentimiento para su tratamiento.
              </Typography>
              <br />
              <Typography align="justify">
                Los derechos “ARCO” consisten en:
              </Typography>
              <br />
              <Typography align="justify">
                <b>ACCESO.</b> Que se le informe cuáles de sus datos personales
                están contenidos en nuestras bases de datos, así como
                información relativa a las condiciones y generalidades del
                tratamiento. La obligación de acceso se dará por cumplida cuando
                nuestro Encargado ponga a disposición del Titular de los datos
                personales en sitio, respetando el periodo señalado en el
                artículo 99 del RLFPDPPP, o mediante la expedición de copias
                simples, medios magnéticos, ópticos, sonoros, visuales u
                holográficos, o utilizando otras tecnologías de la información
                que se hayan previsto en el aviso de privacidad. En todos los
                casos, el acceso deberá ser en formatos legibles o comprensibles
                para el titular.
              </Typography>
              <br />
              <Typography align="justify">
                <b>RECTIFICACIÓN. </b>Solicitar en todo momento que se corrijan
                o actualicen sus datos personales en caso de que sean inexactos
                o incompletos.
              </Typography>
              <br />
              <Typography align="justify">
                <b>CANCELACIÓN. </b>Es el cese en el tratamiento de sus datos
                personales, a partir de un bloqueo de los mismos y su posterior
                supresión. Este derecho podrá solicitarlo en todo momento cuando
                considere que sus datos no están siendo tratados conforme a los
                principios y deberes que establece la Ley y el Reglamento. La
                cancelación puede ser solicitada con procederá respecto de la
                totalidad de sus datos personales, o sólo a una parte de ellos.
              </Typography>
              <br />
              <Typography align="justify">
                <b>OPOSICIÓN. </b>Solicitar en todo momento, oponerse al
                tratamiento de sus datos personales o exigir que se cese en el
                mismo cuando, exista causa legítima. Este derecho no procederá
                en aquellos casos en los que el tratamiento sea necesario para
                el cumplimiento de una obligación legal.
              </Typography>
              <br />
              <Typography align="justify">
                Si desea ejercer algunos de sus derechos ARCO, lo podrá realizar
                comunicándose a los teléfonos (3173826632, 3173814187) o
                enviando un correo electrónico a la siguiente dirección.-
                tiopatlanextli@hotmail.com, con el asunto: “SOLICITUD DE ACCESO,
                RECTIFICACIÓN, CANCELACIÓN U OPOSICIÓN” (de acuerdo al derecho a
                ejercer)
              </Typography>
              <br />
              <Typography>
                Dentro del correo deberá indicar la siguiente información:{" "}
              </Typography>
              <ul>
                <li>Nombre del titular.</li>
                <li>Declaración de hechos</li>
                <li>
                  Domicilio de titular o dirección de correo electrónico para
                  comunicar respuesta a solicitud.
                </li>
                <li>
                  Documentos que acrediten identidad o personalidad para
                  presentar la solicitud.
                </li>
                <li>
                  Descripción de datos personales sobre los que se pretende
                  ejercer algún derecho ARCO.
                </li>
                <li>
                  Cualquier otro elemento que permita la localización de los
                  datos personales y atención a la solicitud.
                </li>
              </ul>
              <br />
              <Typography align="justify">
                Para el ejercicio de los derechos ARCO de datos personales de
                menores de edad o de personas que se encuentren en estado de
                interdicción o incapacidad establecida por ley, podrán
                ejercitarlos por medio de su representante.
              </Typography>
              <br />
              <Typography align="justify">
                Si considera que su derecho de protección de datos personales ha
                sido lesionado por alguna conducta de nuestros empleados o de
                nuestras actuaciones o respuestas, o presume que en el
                tratamiento de sus datos personales existe alguna violación a
                las disposiciones previstas en la Ley Federal de Protección de
                Datos Personales en Posesión de los Particulares, podrá
                interponer la queja o denuncia correspondiente ante el INAI,
                para mayor información visita:{` `}{" "}
                <a href="www.inai.org.mx" target="_blank" rel="noreferrer">
                  www.inai.org.mx
                </a>
              </Typography>
              <br />
              <Typography align="justify">
                El tratamiento de sus datos personales bajo nuestra posesión se
                realizará de conformidad con los presentes términos y
                condiciones, por lo que desde este momento se entiende que
                autoriza expresamente al Responsable y al Encargado de tratar su
                información personal para tal efecto, hasta en tanto tú no
                manifiestes tu oposición mediante alguno de los elementos que
                indica la Ley.
              </Typography>
              <br />
              <Typography align="justify">
                Para cualquier asunto relativo al tratamiento de tu información
                personal que no haya sido tratado en el presente Aviso de
                Privacidad, favor de comunicarse con el encargado, cuyos datos
                se encuentran al principio del presente documento.
              </Typography>
              <br />
              <Typography align="justify">
                Última actualización: 25 de Enero del 2023.
              </Typography>
            </Box>
          </Box>
        </ElevationScroll>
      </Container>
    </div>
  );
};
