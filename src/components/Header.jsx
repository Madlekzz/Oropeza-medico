import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IconSearch } from "@tabler/icons-react";
import { Button } from "@mantine/core";

const Header = () => {
  const [isHoveredId, setIsHoveredId] = useState("");

  const scrollToPosition = (top) => {
    window.scrollTo({
      top, // Vertical scroll position
      behavior: "smooth", // Enable smooth scrolling
    });
  };

  const handleMouseOver = (id) => {
    setIsHoveredId(id);
  };

  const handleMouseLeave = (id) => {
    setIsHoveredId(id);
  };

  return (
    <header className="bg-[#89c00f] text-white p-5 text-xl">
      <div className="flex justify-between items-end container mx-auto">
        <div className="p-2">
          <NavLink to="/" className="text-white uppercase font-bold text-2xl">
            MediDev
          </NavLink>
        </div>
        <div className="flex flex-row">
          <Button
            onClick={() => scrollToPosition(1400)}
            className="text-white font-bold text-2xl p-2 mr-8 cursor-pointer"
          >
            Seguridad
          </Button>
          <Button
            onClick={() => scrollToPosition(800)}
            className="text-white font-bold text-2xl p-2 mr-8 cursor-pointer"
          >
            Contenido
          </Button>
          <div className="flex flex-row bg-white rounded-2xl p-2 w-96">
            <input
              type="text"
              placeholder="Especialidad, Especialista o Medico..."
              className="text-[#89c00f] focus:outline-none overflow-ellipsis w-full"
            />
            <button className="flex items-center cursor-pointer text-[#89c00f] ml-2">
              <IconSearch />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <nav className="flex gap-4 items-end justify-end">
            <div
              className={`border-2 rounded-lg p-2 ${
                isHoveredId === "login" && "bg-white shadow-lg"
              }`}
              onMouseOver={() => handleMouseOver("login")}
              onMouseLeave={() => handleMouseLeave(null)}
            >
              <NavLink
                to="/login"
                className={`font-bold transition duration-200 ${
                  isHoveredId === "login" ? "text-[#89c00f]" : "text-white"
                }`}
              >
                Iniciar sesión
              </NavLink>
            </div>
            <div
              className={`border-2 rounded-lg p-2 ${
                isHoveredId === "registro"
                  ? "bg-transparent shadow-lg"
                  : "bg-white text-[#89c00f]"
              }`}
              onMouseOver={() => handleMouseOver("registro")}
              onMouseLeave={() => handleMouseLeave(null)}
            >
              <NavLink
                to="/register"
                className={`font-bold transition duration-200 ${
                  isHoveredId === "registro" && "text-white"
                }`}
              >
                Registrarse
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
