export interface IAppointmentEntity {
    idAppointment: number,
    patientsCPF: number,
    doctorsCRM: number,
    date: Date,
    symptoms?: string,
    medicines?: string,
    comments?: string,
    createdAt?: Date,
    updatedAt?: Date
}