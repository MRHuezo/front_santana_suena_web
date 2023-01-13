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
import Solicitudes from "./Views/Admin/Solicitudes";
import Comunicados from "./Views/Admin/Comunicados";
import SedePrincipal from "./Views/Admin/SedePrincipal"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NoMatch />,
  },
  {
    path: "/inscripcion",
    element: <Inscripcion />,
    errorElement: <NoMatch />,
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
        path: "sedes",
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
