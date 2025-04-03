import { useState } from "react";
import PropTypes from "prop-types";
import { Button, UnstyledButton } from "@mantine/core";
import { IconEye, IconEyeOff, IconChevronLeft } from "@tabler/icons-react";
import { MultiSelect } from "@mantine/core";
import { AuthController } from "../controllers/auth";

const RegisterMedicForm = ({ onTypeSelect }) => {
  const [, setUserType] = useState("");
  const [Especialidad, setEspecialidad] = useState([]);
  const [Sexo, setSexo] = useState("");
  const [birthday, setBirthday] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState("password");
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState("password");
  const Specialties = [
    // Cirujanos
    "Cirujano general",
    "Cirujano maxilofacial",
    "Cirujano oncólogo",
    "Cirujano plástico",
    "Cirujano pediatra",
    "Cirujano torácico",
    "Cirujano vascular",

    // Médicos internistas
    "Médico de medicina familiar",
    "Médico especialista en adolescentes",
    "Médico especialista en geriatría",
    "Médico especialista en medicina interna",

    // Pediatras
    "Cardiólogo pediátrico",
    "Intensivista pediátrico",
    "Infectólogo pediatra",
    "Neumonólogo pediatra",
    "Otorrinolaringólogo pediatra",

    // Psiquiatras
    "Psiquiatra especialista en adicciones",

    // Otros especialistas
    "Alergólogo",
    "Anestesiólogo",
    "Dermatólogo",
    "Endocrinólogo",
    "Gastroenterólogo",
    "Ginecólogo",
    "Hematólogo",
    "Hepatólogo",
    "Neurólogo",
    "Neurólogo cirujano",
  ];

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

  const handleGoBackButton = () => {
    selectedUserType("");
  };

  const selectedUserType = (type) => {
    onTypeSelect(type);
    setUserType(type);
  };
  return (
    <div className="rounded-lg p-4 h-screen flex items-center justify-center">
      <form className="flex flex-col bg-white w-[40%] h-fit items-center gap-3 rounded-xl shadow-2xl">
        <div className="flex flex-row w-full items-center justify-between text-center font-bold uppercase mt-12">
          <UnstyledButton>
            <IconChevronLeft
              size={40}
              className="ml-6 cursor-pointer"
              color="#89c00f"
              onClick={handleGoBackButton}
            />
          </UnstyledButton>
          <h1 className="text-3xl">Registro de medico</h1>
          <div></div>
        </div>
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
          <select
            value={Sexo}
            onChange={(e) => setSexo(e.target.value)}
            className="border-2 border-gray-300 rounded-lg w-[60%] h-12 hover:border-[#89c00f] focus:border-[3.5px] focus:outline-none focus:border-[#89c00f] p-2"
          >
            <option value="Hombre">👨 Masculino</option>
            <option value="Mujer">👩 Femenino</option>
          </select>
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
              variant="transparent"
              color="#89c00f"
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
              variant="transparent"
              color="#89c00f"
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

        <div className="flex items-center gap-1 flex-col mt-4 w-full">
          <h1 className="w-[60%]">Especialidad</h1>
          <div className="focus-within:border-2 focus-within:border-[#89c00f] focus-within:rounded-lg">
            {" "}
            {/* Borde en focus */}
            <MultiSelect
              variant="transparent"
              color="#89c00f"
              w={400}
              size="lg"
              placeholder="Elige profesión"
              data={Specialties}
              value={Especialidad}
              onChange={setEspecialidad}
              clearable
            />
          </div>
        </div>

        <Button
          color="#89c00f"
          className="bg-[#89c00f] text-xl text-white font-bold p-3 mb-4 rounded-lg border-2 border-[#89c00f] shadow-xl w-[30%] cursor-pointer hover:bg-white hover:text-black transition duration-300 mt-2"
          onClick={AuthController.signUp}
        >
          Registrarse
        </Button>
      </form>
    </div>
  );
};
RegisterMedicForm.propTypes = {
  onTypeSelect: PropTypes.func.isRequired,
};

export default RegisterMedicForm;
