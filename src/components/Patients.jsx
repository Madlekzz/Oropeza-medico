// src/components/TestSupabase.jsx
import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseclient";
import { Table } from "@mantine/core";

const Patients = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from("Pacientes") // Replace with your table name
          .select("*")
          .limit(1);

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
    return <div>Loading...</div>;
  }
  console.log(data);
  const rows = data.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.nombre}</Table.Td>
    </Table.Tr>
  ));
  return (
    <Table highlightOnHover className="shadow-lg rounded-l border-2">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Paciente</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};

export default Patients;
