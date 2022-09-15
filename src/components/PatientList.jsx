import Patient from "./Patient";

const PatientList = ({ pacientes }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll scrollbar-hide">
      {pacientes.length ? (
        <h2 className="font-black text-3xl text-center">
          Listado de Pacientes
        </h2>
      ) : (
        <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
      )}

      <p className="text-lg mt-5 mb-10 text-center">
        Administra tus{" "}
        <span className="text-indigo-500 font-bold">Pacientes y Citas</span>
      </p>
      {
        pacientes.map((element) => (
          <Patient key={element.id} element={element} />
        ))
        // <Patient key={element.id} element={element} />;
      }
    </div>
  );
};

export default PatientList;
