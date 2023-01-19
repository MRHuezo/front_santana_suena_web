import React from "react";
import NavbarHome from "../Components/Navbar/NavbarHome";
import PatrocinadoresHome from "../Views/Home/Patrocinadores";
import PrincipalHome from "../Views/Home/PrincipalHome";
import SedesHome from "../Views/Home/Sedes";
import FinalistasHome from "../Views/Home/Finalistas";
import InscripcionesHome from "../Views/Home/Inscripcion";
import InstitucionOrganizadora from "../Views/Home/Sedes/InstitucionOrganizadora";
import Bases from "../Views/Home/PrincipalHome/Bases";
import Etapas from "../Views/Home/PrincipalHome/Etapas";
import Fechas from "../Views/Home/PrincipalHome/Fechas";
import Premios from "../Views/Home/PrincipalHome/Premios";

function HomeLayout() {
  return (
    <div>
      <NavbarHome />
      <PrincipalHome />
      <InstitucionOrganizadora />
      <Bases />
      <Etapas />
      <Fechas />
      <SedesHome />
      <Premios />
      <InscripcionesHome />
      <PatrocinadoresHome />
      <FinalistasHome />
    </div>
  );
}

export default HomeLayout;
