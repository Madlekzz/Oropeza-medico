import { useState, useEffect } from "react";
import RegisterPatientForm from "../components/RegisterPatientForm";
import RegisterMedicForm from "../components/RegisterMedicForm";
import UserType from "../components/UserType";
import { useLocation } from "react-router-dom";

const RegisterPage = () => {
  const [selectedUserType, setSelectedUserType] = useState("");
  const location = useLocation();

  useEffect(() => {
    setSelectedUserType(""); // Reset the state to its initial value
  }, [location.state?.triggerReset]);

  const handleUserType = (type) => {
    setSelectedUserType(type);
  };

  useEffect(() => {
    setSelectedUserType("");
  }, []);

  return (
    <div>
      {selectedUserType === "" && <UserType onTypeSelect={handleUserType} />}
      {selectedUserType === "Medico" && <RegisterMedicForm />}
      {selectedUserType === "Paciente" && <RegisterPatientForm />}
    </div>
  );
};

export default RegisterPage;
