import { Outlet } from "react-router-dom";
import SingIn from "../pages/SingIn";

const ProtectedRoute = () => {
  const userData =
    localStorage.getItem("issingint") &&
    JSON.parse(localStorage.getItem("issingint"));
  return userData.issingint ? <Outlet /> : <SingIn />;
};

export default ProtectedRoute;
