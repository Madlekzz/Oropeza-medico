import NavbarSimpleColored from "../components/NavbarSimpleColored";
import { Outlet } from "react-router-dom";
import NavbarSimpleColoredPatient from "../components/NavbarSimpleColoredPatient";

export const ProtectedLayout = () => {
  return (
    <div className="flex h-screen">
      <NavbarSimpleColoredPatient />
      <div className="flex-1 p-4 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};
