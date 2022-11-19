export interface IAppointmentEntity {
    idAppointment?: number,
    idUser: number,
    medicalSpecialties: string, // especialidade médica (ex: cardiologista)
    doctor: string, // médico
    hospital: string, // consulta
    date: Date, // data em que ocorreu
    diagnosis?: string, //diagnóstico
    comments?: string, //observações
    createdAt?: Date,
    updatedAt?: Date
}