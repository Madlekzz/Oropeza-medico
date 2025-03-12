import { useState } from "react";
import { Button } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

const RegisterMedicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState("password");

  const toggleVisibility = () => {
    if (isPasswordVisible === "password") {
      setIsPasswordVisible("text");
    } else {
      setIsPasswordVisible("password");
    }
  };
  return (
    <div className="rounded-lg p-4 h-screen flex items-center justify-center">
      <form className="flex flex-col bg-white w-[40%] h-[75%] items-center gap-3 rounded-xl shadow-2xl">
        <h1 className="text-3xl text-center font-bold uppercase mt-12">
          Registro de medico
        </h1>
        <div className="flex items-center gap-1 flex-col mt-8 w-full">
          <h1 className="w-[60%]">Correo Electrónico</h1>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-300 rounded-lg w-[60%] h-12 hover:border-[#89c00f] focus:border-[3.5px] focus:outline-none focus:border-[#89c00f] p-2"
          />
        </div>
        <div className="flex items-center gap-1 flex-col w-full">
          <h1 className="w-[60%]">Contraseña</h1>
          <div className="w-[60%] flex flex-row items-center border-2 border-gray-300 rounded-lg h-12 hover:border-[#89c00f] focus:border-[3.5px] focus:outline-none focus:border-[#89c00f] p-2">
            <input
              type={isPasswordVisible}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full focus:outline-none"
            />
            <Button className="cursor-pointer" onClick={toggleVisibility}>
              {isPasswordVisible === "password" ? (
                <IconEye size={30} />
              ) : (
                <IconEyeOff size={30} />
              )}
            </Button>
          </div>
        </div>
        <Button className="bg-[#89c00f] text-xl text-white font-bold p-3 rounded-lg border-2 border-[#89c00f] shadow-xl w-[30%] cursor-pointer hover:bg-white hover:text-black transition duration-300 mt-2">
          Iniciar sesión
        </Button>
        <h1 className="mt-6 text-lg">
          ¿No tienes una cuenta?{" "}
          <NavLink to="/register" className="hover:underline text-[#89c00f]">
            Registrate aquí
          </NavLink>
        </h1>
      </form>
    </div>
  );
};
export default RegisterMedicForm;
