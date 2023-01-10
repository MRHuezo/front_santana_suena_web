import { createBrowserRouter } from "react-router-dom";
import NoMatch from "./Components/NoMatch/NoMatch";
import AdminLayout from "./Layouts/AdminLayout";
import HomeLayout from "./Layouts/HomeLayout";
import LayoutLogin from "./Layouts/LayoutLogin";
import Participantes from "./Views/Admin/Participantes";
import Patrocinadores from "./Views/Admin/Patrocinadores";
import Publicaciones from "./Views/Admin/Publicaciones";
import SeccionesHome from "./Views/Admin/SeccionesHome";
import Finalistas from "./Views/Home/Finalistas";
import Inscripcion from "./Views/Home/Inscripcion";
import PatrocinadoresHome from "./Views/Home/Patrocinadores";
import PrincipalHome from "./Views/Home/PrincipalHome";

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
        path: "secciones",
        element: <SeccionesHome />,
      },
      {
        path: "patrocinadores",
        element: <Patrocinadores />,
      },
    ],
  },
]);
