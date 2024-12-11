import { toast } from 'react-toastify'
import { usePatientStore } from '../store/store'
import { Patient } from '../types'
import PatientDetailItem from './PatientDetailItem'

type PatientDetailsProps={
	patient:Patient
}

export default function PatientDetails({patient}:PatientDetailsProps) {
	const {deletePatient,getPatientById}=usePatientStore()
	const handleClick = (id:string)=>{
		deletePatient(id)
		toast('Eliminado Correctamente',{
			type:'error'
		})
	}
	return (
		<div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
			<PatientDetailItem label="Nombre" data={patient.name} />
			<PatientDetailItem
				label="Propietario"
				data={patient.caretaker}
			/>
			<PatientDetailItem label="Email" data={patient.email} />
			<PatientDetailItem
				label="Fecha alta"
				data={patient.date.toString()}
			/>
			<PatientDetailItem label="Sintomas" data={patient.symptoms} />


			<div className="flex flex-col gap-3 lg:flex-row justify-between mt-10">
				<button
					type="button"
					title="edit"
					className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg"
					onClick={()=>getPatientById(patient.id)}
				>
					Editar
				</button>
				<button
					type="button"
					title="edit"
					className="py-2 px-10 bg-red-600 hover:bg-indigo-700 text-white font-bold rounded-lg"
					onClick={()=>handleClick(patient.id)}
				>
					Eliminar
				</button>
			</div>
		</div>
	);
}
