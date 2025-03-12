import { useState } from "react";
import RegisterPatientForm from "../components/RegisterPatientForm";
import RegisterMedicForm from "../components/RegisterMedicForm";
import UserType from "../components/UserType";

const RegisterPage = () => {
  const [selectedUserType, setSelectedUserType] = useState("");
  console.log(selectedUserType);

  const handleUserType = (type) => {
    setSelectedUserType(type);
  };

  return (
    <div>
      {selectedUserType === "" && <UserType onTypeSelect={handleUserType} />}
      {selectedUserType === "Medico" && <RegisterMedicForm />}
      {selectedUserType === "Paciente" && <RegisterPatientForm />}
    </div>
  );
};

export default RegisterPage;
