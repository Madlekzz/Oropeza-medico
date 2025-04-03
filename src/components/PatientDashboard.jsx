import { useState, useEffect } from "react";
import { supabase } from "../config/supabaseclient";
import { Table, Loader, Pagination } from "@mantine/core";
import dayjs from "dayjs";
import "dayjs/locale/es"; // Import Spanish locale

const formatDate = (isoString) => {
  dayjs.locale("es"); // Set the locale to Spanish
  return dayjs(isoString).format("D [de] MMM, YYYY [a las] h:mm A");
};
const PatientDashboard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [activePage, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from("Consultas") // Replace with your table name
          .select(`*, Pacientes(nombre), Medicos(nombre)`);

        if (error) {
          setError(error);
        } else {
          setData(data);
        }
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader color="lime" type="dots" />
      </div>
    );
  }
  console.log(data);
  const rows = data.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.Pacientes.nombre}</Table.Td>
      <Table.Td>{element.Medicos.nombre}</Table.Td>
      <Table.Td>{formatDate(element.fecha)}</Table.Td>
      <Table.Td>{element.motivo}</Table.Td>
    </Table.Tr>
  ));
  return (
    <div>
      <h1 className="font-bold text-2xl mb-4">Inicio</h1>
      <div className="flex flex-col gap-4 shadow-lg rounded-xl border-[0.5px] border-gray-200 p-4 max-h-full">
        <h1 className="font-bold text-lg">Consultas pendientes</h1>
        <div className="flex flex-row">
          <Table highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Paciente</Table.Th>
                <Table.Th>Médico Encargado</Table.Th>
                <Table.Th>Fecha</Table.Th>
                <Table.Th>Motivo</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <Pagination
          total={data.length}
          value={activePage}
          onChange={setPage}
          color="lime"
        />
      </div>
    </div>
  );
};

export default PatientDashboard;
