import { usePatientStore } from "../store/store"
import PatientDetails from "./PatientDetails"

export default function PatientList() {

	const patient=usePatientStore(state=>state.patients)
	return (
		<div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
			{patient.length ? (
				<>
					<h2 className="font-black text-3xl text-center">Listado de Paciente</h2>
					<p className="text-xl mt-5 mb-10 text-center">Administra tus {''}
						<span className="text-indigo-600 font-bold">Pacientes y citas</span>
					</p>
					{patient.map(patient=>
						<PatientDetails
							key={patient.id}
							patient={patient}
						/>
					)

					}
				</>
			):(
				<>
					<h2 className="font-black text-3xl text-center">No hay pacientes</h2>
					<p className="text-xl mt-5 mb-10 text-center">
						comienza agregando pacientes y
						<span className="text-indigo-600 font-bold">apareceran en este lugar</span>
					</p>
				</>
			)}
		</div>
	)
}
