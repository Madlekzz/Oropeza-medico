import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IconSearch } from "@tabler/icons-react";
import { Image } from "@mantine/core";
import { Autocomplete } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

const Header = () => {
  const [isHoveredId, setIsHoveredId] = useState("");
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    // Navigate to the RegisterPage and pass a unique value in the state
    navigate("/register", { state: { triggerReset: Date.now() } });
  };

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
      <div className="flex justify-between items-start">
        <div>
          <NavLink
            to="/"
            className="text-white uppercase font-bold text-2xl ml-0"
          >
            <Image src="/src/assets/LOGO BLANCO.png" className="w-80 h-12" />
          </NavLink>
        </div>
        <div className="flex flex-row">
          <NavLink
            to="/"
            onClick={() => scrollToPosition(1600)}
            className="text-white font-bold text-2xl p-2 mr-8 cursor-pointer rounded-lg hover:bg-white hover:text-[#466500]  transition-colors duration-300"
          >
            Seguridad
          </NavLink>
          <NavLink
            to="/"
            onClick={() => scrollToPosition(800)}
            className="text-white font-bold text-2xl p-2 mr-8 cursor-pointer rounded-lg hover:bg-white hover:text-[#466500]  transition-colors duration-300"
          >
            Contenido
          </NavLink>
          <NavLink
            to="/"
            onClick={() => scrollToPosition(3000)}
            className="text-white font-bold text-2xl p-2 mr-8 cursor-pointer rounded-lg hover:bg-white hover:text-[#466500]  transition-colors duration-300"
          >
            Sobre nosotros
          </NavLink>



          <div className="border-white flex flex-row bg-white rounded-2xl p-2 w-96">
      <Autocomplete
        placeholder="Especialidad, Especialista o Medico..."
        data={['Cardiologo', 'Endocrinología', 'Pediatría', 'Psiquiatría', 'Dermatología', 'Urología']}
        className="custom-autocomplete text-[#89c00f] overflow-ellipsis w-full"
        styles={{
          wrapper: {
            outline: '2px solid white',
            outlineOffset: '-2px',
          },
        }}
      />
      <button className="border-white flex items-center cursor-pointer text-[#89c00f] ml-2">
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
              className={`border-2 font-bold rounded-lg p-2 ${
                isHoveredId === "registro"
                  ? "bg-transparent shadow-lg"
                  : "bg-white text-[#89c00f]"
              }`}
              onMouseOver={() => handleMouseOver("registro")}
              onMouseLeave={() => handleMouseLeave(null)}
            >
              <button
                className={`font-bold cursor-pointer transition duration-200 ${
                  isHoveredId === "registro" && "text-white"
                }`}
                onClick={handleRegisterClick}
              >
                Registrarse
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
