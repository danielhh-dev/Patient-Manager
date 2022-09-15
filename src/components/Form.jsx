import { useState } from "react";
import Error from "./Error";



const Form = ({ pacientes, setPacientes }) => {

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
  
    return random + fecha;
  };
  
  const initialForm = {
    mascota: "",
    propietario: "",
    email: "",
    alta: "",
    sintomas: "",
    id: generarId(),
  };

  const [error, setError] = useState(false);
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).includes("")) {
      setError(true);
      return;
    }

    setPacientes([...pacientes, form]);
    setError(false);
    handleReset();
  };

  const handleReset = () => setForm(initialForm);

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Arega Pacientes y {""}
        <span className="text-indigo-500 font-bold">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-xl py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {error && <Error mensaje={"Todos los campos son obligatorios"} />}
        <div className="mb-5">
          <input
            name="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            onChange={handleChange}
            value={form.mascota}
            className="border-2 w-full p-2 mt-2 rdounded-m placeholder-gray-400"
          />
        </div>

        <div className="mb-5">
          <input
            name="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            onChange={handleChange}
            value={form.propietario}
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
          />
        </div>

        <div className="mb-5">
          <input
            name="email"
            type="email"
            placeholder="Email de Contacto"
            onChange={handleChange}
            value={form.email}
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
          />
        </div>

        <div className="mb-5">
          <input
            name="alta"
            type="date"
            onChange={handleChange}
            value={form.alta}
            className="border-2 w-full p-2 mt-2 rounded-md"
          />
        </div>

        <div className="mb-5">
          <textarea
            name="sintomas"
            placeholder="Describe los Síntomas"
            onChange={handleChange}
            value={form.sintomas}
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-500 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-all"
          value="Agregar Paciente"
        />
      </form>
    </div>
  );
};

export default Form;
