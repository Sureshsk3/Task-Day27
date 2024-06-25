import Adduser from "./../components/Adduser";
import Viewuser from "./../components/ViewUser";
import Dashboard from "./../components/Dashboard";
import Edituser from "../components/Edituser";
import Topbar from "./../components/Topbar";
import { Navigate } from "react-router-dom";

const Approuter = [
  {
    path: "/",
    element: (
      <>
        <Topbar />
        <Dashboard />
      </>
    ),
  },
  {
    path: "/add-user",
    element: (
      <>
        <Topbar />
        <Adduser />
      </>
    ),
  },
  {
    path: "/view-user",
    element: (
      <>
        <Topbar />
        <Viewuser />
      </>
    ),
  },
  {
    path: "/edit-user/:id",
    element: (
      <>
        <Topbar />
        <Edituser />
      </>
    ),
  },
  {
    path: "/*",
    element: (
      <>
        <Topbar />
        <Navigate to="/" />
      </>
    ),
  },
];
export default Approuter;
