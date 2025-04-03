import { useState, useEffect } from "react";
import { supabase } from "../config/supabaseclient";
import { Table, Loader, Pagination, Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { DateTimePicker } from "@mantine/dates";
import dayjs from "dayjs";
import "dayjs/locale/es";

dayjs.locale("es"); // Set the locale to Spanish

const Medics = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [activePage, setPage] = useState(1);
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedMedic, setSelectedMedic] = useState("");

  const handleAppointmentClick = (medic) => {
    setSelectedMedic(medic);
    open();
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from("Medicos") // Replace with your table name
          .select(`*`);

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
      <Table.Td>{element.especialidad}</Table.Td>
      <Table.Td>{element.telefono}</Table.Td>
      <Table.Td>{element.Correo}</Table.Td>
      <Table.Td>
        <Button
          variant="filled"
          color="lime"
          onClick={() => handleAppointmentClick(element.nombre)}
        >
          Agendar Consulta
        </Button>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <div>
      <h1 className="font-bold text-2xl mb-4">Especialistas</h1>
      <Modal opened={opened} onClose={close} title="Agendar consulta">
        <div className="flex flex-col gap-4">
          <DateTimePicker
            value={selectedDate}
            onChange={setSelectedDate}
            label="Elija la fecha y hora de la consulta"
          />
          <p className="font-bold">
            Su consulta será agendada para{" "}
            {dayjs(selectedDate).format("DD/MM/YYYY HH:mm")} con el médico{" "}
            {selectedMedic}
          </p>
          <Button variant="filled" color="lime">
            Agendar consulta
          </Button>
        </div>
      </Modal>
      <div className="flex flex-col gap-4 shadow-lg rounded-xl border-[0.5px] border-gray-200 p-4 max-h-full">
        <h1 className="font-bold text-lg">Medicos disponibles</h1>
        <div className="flex flex-row">
          <Table highlightOnHover horizontalSpacing="xl">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Médico</Table.Th>
                <Table.Th>Especialidad</Table.Th>
                <Table.Th>Telefono</Table.Th>
                <Table.Th>Correo</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <Pagination
          total={(data.length / 10) | 0}
          value={activePage}
          onChange={setPage}
          color="lime"
        />
      </div>
    </div>
  );
};

export default Medics;
