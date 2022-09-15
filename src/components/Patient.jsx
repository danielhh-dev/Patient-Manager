const Patient = ({ paciente, setPaciente }) => {
  const { mascota, propietario, email, alta, sintomas } = paciente;

  return (
    <div className=" bg-white ml-5 mt-3 shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{mascota}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: <span className="font-normal normal-case">{alta}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button 
          type="button"
          className="py-2 px-10 bg-indigo-500 hover:bg-indigo-700 text-white font-bold uppercase rounded-md"
          onClick={() => setPaciente(paciente)}
          >Editar
        </button>
        <button 
          type="button"
          className="py-2 px-10 bg-red-500 hover:bg-red-700 text-white font-bold uppercase rounded-md"
          >Eliminar
        </button>
      </div>
    </div>
  );
};

export default Patient;
