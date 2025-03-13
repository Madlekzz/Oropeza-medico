import NavbarSimpleColored from "../components/NavbarSimpleColored";
import { Outlet } from "react-router-dom";

export const ProtectedLayout = () => {
  return (
    <div>
      <NavbarSimpleColored />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
