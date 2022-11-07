export interface IExamEntity {
    idExams: number,
    patientsCPF: number,
    exam: string,
    date: Date,
    status: string,
    clinic: string,
    crm?: number,
    comments?: string,
    createdAt?: Date,
    updatedAt?: Date
}