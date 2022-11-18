export interface IAppointmentEntity {
    idAppointment?: number,
    idUser: number,
    doctor: string,
    hospital: string,
    crm?: number,
    date: Date,
    symptoms?: string,
    medicines?: string,
    comments?: string,
    createdAt?: Date,
    updatedAt?: Date
}