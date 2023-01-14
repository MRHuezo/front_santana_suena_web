import React from "react";
import NavbarHome from "../Components/Navbar/NavbarHome";
import PatrocinadoresHome from "../Views/Home/Patrocinadores";
import PrincipalHome from "../Views/Home/PrincipalHome";
import SedesHome from "../Views/Home/Sedes";
import FinalistasHome from "../Views/Home/Finalistas";
import InscripcionesHome from "../Views/Home/Inscripcion";

function HomeLayout() {
  return (
    <div>
      <NavbarHome />
      <PrincipalHome />
      <SedesHome />
      <InscripcionesHome />
      <PatrocinadoresHome />
      <FinalistasHome />
    </div>
  );
}

export default HomeLayout;
