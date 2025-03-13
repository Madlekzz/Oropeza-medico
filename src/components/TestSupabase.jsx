// src/components/TestSupabase.jsx
import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseclient";

const TestSupabase = () => {
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
  return (
    <div>
      <h1>Data from Supabase:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default TestSupabase;
