import { useState } from "react";
import { Button } from "@mantine/core";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

const RegisterPatientForm = () => {
  const [birthday, setBirthday] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState("password");
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState("password");

  const togglePasswordVisibility = () => {
    if (isPasswordVisible === "password") {
      setIsPasswordVisible("text");
    } else {
      setIsPasswordVisible("password");
    }
  };

  const toggleConfirmPasswordVisibility = () => {
    if (isConfirmPasswordVisible === "password") {
      setIsConfirmPasswordVisible("text");
    } else {
      setIsConfirmPasswordVisible("password");
    }
  };
  return (
    <div className="rounded-lg p-4 h-screen flex items-center justify-center">
      <form className="flex flex-col bg-white w-[40%] h-fit items-center gap-3 rounded-xl shadow-2xl">
        <h1 className="text-3xl text-center font-bold uppercase mt-12">
          Registro de paciente
        </h1>
        <div className="flex items-center gap-1 flex-col mt-4 w-full">
          <h1 className="w-[60%]">Nombre</h1>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-gray-300 rounded-lg w-[60%] h-12 hover:border-[#89c00f] focus:border-[3.5px] focus:outline-none focus:border-[#89c00f] p-2"
          />
        </div>
        <div className="flex items-center gap-1 flex-col w-full">
          <h1 className="w-[60%]">Fecha de nacimiento</h1>
          <input
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            className="border-2 border-gray-300 rounded-lg w-[60%] h-12 hover:border-[#89c00f] focus:border-[3.5px] focus:outline-none focus:border-[#89c00f] p-2"
          />
        </div>
        <div className="flex items-center gap-1 flex-col w-full">
          <h1 className="w-[60%]">Sexo</h1>
          <input
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            className="border-2 border-gray-300 rounded-lg w-[60%] h-12 hover:border-[#89c00f] focus:border-[3.5px] focus:outline-none focus:border-[#89c00f] p-2"
          />
        </div>
        <div className="flex items-center gap-1 flex-col w-full">
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
            <Button
              className="cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible === "password" ? (
                <IconEye size={30} />
              ) : (
                <IconEyeOff size={30} />
              )}
            </Button>
          </div>
          <h1 className="w-[60%]">Confirmar Contraseña</h1>
          <div className="w-[60%] flex flex-row items-center border-2 border-gray-300 rounded-lg h-12 hover:border-[#89c00f] focus:border-[3.5px] focus:outline-none focus:border-[#89c00f] p-2">
            <input
              type={isConfirmPasswordVisible}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full focus:outline-none"
            />
            <Button
              className="cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            >
              {isConfirmPasswordVisible === "password" ? (
                <IconEye size={30} />
              ) : (
                <IconEyeOff size={30} />
              )}
            </Button>
          </div>
        </div>
        <Button className="bg-[#89c00f] text-xl text-white font-bold p-3 mb-4 rounded-lg border-2 border-[#89c00f] shadow-xl w-[30%] cursor-pointer hover:bg-white hover:text-black transition duration-300 mt-2">
          Registrarse
        </Button>
      </form>
    </div>
  );
};
export default RegisterPatientForm;
