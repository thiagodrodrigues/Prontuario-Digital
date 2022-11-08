export interface IExamEntity {
    idExams: number,
    idUser: number,
    exam: string,
    date: Date,
    status: string,
    clinic: string,
    doctor: string,
    comments?: string,
    createdAt?: Date,
    updatedAt?: Date
}