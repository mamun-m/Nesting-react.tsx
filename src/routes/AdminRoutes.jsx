import { Outlet } from "react-router-dom";
import SingIn from "../pages/SingIn";

const AdminRoutes = () => {
  const issingint = false;
  const isAdmin = true;
  return issingint && isAdmin ? <Outlet /> : <SingIn />;
};

export default AdminRoutes;
