import React, { useContext, useEffect } from "react";
import NavbarHome from "../Components/Navbar/NavbarHome";
import PatrocinadoresHome from "../Views/Home/Patrocinadores";
import InstitucionesHome from "../Views/Home/Instituciones";
import PrincipalHome from "../Views/Home/PrincipalHome";
import SedesHome from "../Views/Home/Sedes";
import FinalistasHome from "../Views/Home/Finalistas";
import Footer from "../Views/Home/Footer";
import InscripcionesHome from "../Views/Home/Inscripcion";
import InstitucionOrganizadora from "../Views/Home/Sedes/InstitucionOrganizadora";
import Bases from "../Views/Home/PrincipalHome/Bases";
import Etapas from "../Views/Home/PrincipalHome/Etapas";
import Fechas from "../Views/Home/PrincipalHome/Fechas";
import Premios from "../Views/Home/PrincipalHome/Premios";
import { MainContext } from "../Context/MainCtx";
import jwtDecode from "jwt-decode";

function HomeLayout() {
  const token = localStorage.getItem("tokenSS");
  const { setUser } = useContext(MainContext);

  useEffect(() => {
    if (token) {
      setUser(jwtDecode(token));
    }
  }, [setUser, token]);

  return (
    <div>
      <NavbarHome />
      <PrincipalHome />
      <InstitucionOrganizadora />
      <Bases />
      <SedesHome />
      <Etapas />
      <Premios />
     {/*  <InscripcionesHome /> */}
      <PatrocinadoresHome />
      <InstitucionesHome />
      {/* <FinalistasHome /> */}
      <Footer />
    </div>
  );
}

export default HomeLayout;
