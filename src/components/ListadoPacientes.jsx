import { Paciente } from "./Paciente";

export const ListadoPacientes = ({ pacientes }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus{" "}
        <span className="text-indigo-600 font-bold text-xl">
          Pacientes y Citas
        </span>
      </p>
      {pacientes.map((paciente) => (
        <Paciente paciente={paciente} />
      ))}
    </div>
  );
};
