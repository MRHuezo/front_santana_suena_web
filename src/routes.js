import { createBrowserRouter } from "react-router-dom";
import NoMatch from "./Components/NoMatch/NoMatch";
import AdminLayout from "./Layouts/AdminLayout";
import HomeLayout from "./Layouts/HomeLayout";
import LayoutLogin from "./Layouts/LayoutLogin";
import Participantes from "./Views/Admin/Participantes";
import Patrocinadores from "./Views/Admin/Patrocinadores";
import Publicaciones from "./Views/Admin/Publicaciones";
import Finalistas from "./Views/Admin/Finalistas";
import Inscripcion from "./Views/Home/Inscripcion";
import PatrocinadoresHome from "./Views/Home/Patrocinadores";
import PrincipalHome from "./Views/Home/PrincipalHome";
import Solicitudes from "./Views/Admin/Solicitudes";
import Comunicados from "./Views/Admin/Comunicados";
import SedePrincipal from "./Views/Admin/SedePrincipal"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NoMatch />,
    children: [
      {
        path: "finalistas",
        element: <Finalistas />,
      },
      {
        path: "inscripcion",
        element: <Inscripcion />,
      },
      {
        path: "patrocinadores",
        element: <PatrocinadoresHome />,
      },
      {
        path: "principal",
        element: <PrincipalHome />,
      },
    ],
  },
  {
    path: "/login",
    element: <LayoutLogin />,
    errorElement: <NoMatch />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <NoMatch />,
    children: [
      {
        path: "participantes",
        element: <Participantes />,
      },
      {
        path: "publicaciones",
        element: <Publicaciones />,
      },
      {
        path: "patrocinadores",
        element: <Patrocinadores />,
      },
      {
        path: "sede",
        element: <SedePrincipal />,
      },
      {
        path: "solicitudes",
        element: <Solicitudes />,
      },
      {
        path: "comunicados",
        element: <Comunicados />,
      },
      {
        path: "finalistas",
        element: <Finalistas />
      },
    ],
  },
]);
