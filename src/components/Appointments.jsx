import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseclient";
import { Table, Loader } from "@mantine/core";
import { Calendar } from "@mantine/dates";

const Appointments = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from("Consultas") // Replace with your table name
          .select("*");

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
      <Table.Td>{element.nombre}</Table.Td>
    </Table.Tr>
  ));
  return <Calendar />;
};

export default Appointments;
