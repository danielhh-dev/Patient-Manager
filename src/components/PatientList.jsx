import Patient from "./Patient"

const PatientList = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll scrollbar-hide">
      <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
      
      <p className="text-lg mt-5 mb-10 text-center">
        Administra tus {" "} 
        <span className="text-indigo-500 font-bold">Pacientes y Citas</span>
      </p>
      <Patient />
      <Patient />

      <Patient />

      <Patient />

      <Patient />

      <Patient />

      <Patient />

    </div>
  )
}

export default PatientList