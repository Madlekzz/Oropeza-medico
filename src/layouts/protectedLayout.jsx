import NavbarSimpleColored from "../components/NavbarSimpleColored";
import { Outlet } from "react-router-dom";

export const ProtectedLayout = () => {
  return (
    <div className="flex h-screen">
      <NavbarSimpleColored />
      <div className="flex-1 p-4 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};
