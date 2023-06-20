/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";
import GestionLibro from "views/GestioLibros.js";
import PrestamosReservas from "views/PrestamosReservas";
import GestionMora from "views/GestionMora.js";
import GestionPrestamosReservasActivos from "views/GestionPrestamosReservasAct"
import Login from "views/Login.js";
import Registrar from "views/Registrar.js";


var routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "nc-icon nc-bank",
        component: <Dashboard />,
        layout: "/admin",
    },
    {
        path: "/icons",
        name: "Catalogo",
        icon: "nc-icon nc-diamond",
        component: <Icons />,
        layout: "/admin",
    },
    /*{
        path: "/maps",
        name: "Maps",
        icon: "nc-icon nc-pin-3",
        component: <Maps />,
        layout: "/admin",
    },*/
    {
        path: "/notifications",
        name: "Notifications",
        icon: "nc-icon nc-bell-55",
        component: <Notifications />,
        layout: "/admin",
    },
    {
        path: "/user-page",
        name: "User Profile",
        icon: "nc-icon nc-single-02",
        component: <UserPage />,
        layout: "/admin",
    },
    /*{
        path: "/tables",
        name: "Table List",
        icon: "nc-icon nc-tile-56",
        component: <TableList />,
        layout: "/admin",
    },
    {
        path: "/typography",
        name: "Typography",
        icon: "nc-icon nc-caps-small",
        component: <Typography />,
        layout: "/admin",
    },*/
    {
        path: "/getionarLibro",
        name: "Gestionar Libro",
        icon: "nc-icon nc-box-2",
        component: <GestionLibro />,
        layout: "/admin",
    },
    {
        path: "/getionarPrestamosYReservasActivos",
        name: "Gestion de Entregas",
        icon: "nc-icon nc-box-2",
        component: <GestionPrestamosReservasActivos />,
        layout: "/admin",
    },
    {
        path: "/getionarMora",
        name: "Gestionar Mora",
        icon: "nc-icon nc-box-2",
        component: <GestionMora />,
        layout: "/admin",
    },
    /*{
        pro: true,
        path: "/upgrade",
        name: "Upgrade to PRO",
        icon: "nc-icon nc-spaceship",
        component: <UpgradeToPro />,
        layout: "/admin",
    },*/
    {
        path: "/prestamosReservas",
        name: "Prestamos y Reservas",
        icon: "nc-icon nc-paper",
        component: <PrestamosReservas />,
        layout: "/admin",
    },
    /*{
      path: "/",
      name: "Iniciar Sesion",
      icon: "nc-icon nc-single-02",
      component: <Login />,
      },
      {
      path: "/registrar",
      name: "Registrar",
      icon: "nc-icon nc-single-02",
      component: <Registrar />,
      },*/
];
export default routes;
