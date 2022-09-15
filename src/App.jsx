import Header from "./components/Header";
import Form from "./components/Form";
import PatientList from "./components/PatientList";
import { useState } from "react";

function App() {
  const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className=" mt-12 md:flex">
        <Form pacientes={pacientes} setPacientes={setPacientes} />
        <PatientList />
      </div>
    </div>
  );
}

export default App;
