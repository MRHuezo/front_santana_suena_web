import React from "react";
import NavbarHome from "../Components/Navbar/NavbarHome";
import PatrocinadoresHome from "../Views/Home/Patrocinadores";
import PrincipalHome from "../Views/Home/PrincipalHome";
import SedesHome from "../Views/Home/Sedes";
import FinalistasHome from "../Views/Home/Finalistas";

function HomeLayout() {
  return (
    <div>
      <NavbarHome />
      <PrincipalHome />
      <PatrocinadoresHome />
      <SedesHome />
      <FinalistasHome />
    </div>
  );
}

export default HomeLayout;
