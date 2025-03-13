import { IconStethoscope, IconUserPlus } from "@tabler/icons-react";
import { Button } from "@mantine/core";
import { useState } from "react";
import PropTypes from "prop-types";

const UserType = ({ onTypeSelect }) => {
  // eslint-disable-next-line no-unused-vars
  const [userType, setUserType] = useState("");
  const selectedUserType = (type) => {
    onTypeSelect(type);
    setUserType(type);
  };

  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="w-[40%] h-[75%] bg-white shadow-2xl rounded-xl flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">¿Cómo deseas usar MediDev?</h1>
          <div className="flex flex-row items-center justify-between gap-12 mt-18">
            <div className="flex flex-col items-center justify-center">
              <Button
                onClick={() => selectedUserType("Medico")}
                className="border-4 border-[#89c00f] rounded-full p-3 hover:shadow-lg cursor-pointer"
              >
                <IconStethoscope size={100} />
              </Button>
              <h1 className="text-2xl mt-3 font-bold">
                Profesional de la Salud
              </h1>
            </div>

            <div className="flex flex-col items-center justify-center">
              <Button
                onClick={() => selectedUserType("Paciente")}
                className="border-4 border-[#89c00f] rounded-full p-3 hover:shadow-lg cursor-pointer"
              >
                <IconUserPlus size={100} />
              </Button>
              <h1 className="text-2xl mt-3 font-bold">Paciente</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
UserType.propTypes = {
  onTypeSelect: PropTypes.func.isRequired,
};

export default UserType;
