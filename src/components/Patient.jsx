const Patient = () => {
  return (
    <div className=" bg-white ml-5 mt-3 shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">Titch</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">Daniel Hernandez</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta:{" "}
        <span className="font-normal normal-case">10 de diciembre de 2022</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas:{" "}
        <span className="font-normal normal-case">Le duele la pancita</span>
      </p>
    </div>
  );
};

export default Patient;
