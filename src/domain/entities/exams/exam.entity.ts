export interface IExamEntity {
    idExams?: number,
    idUser: number,
    exam: string, // Exame
    date: Date, // Data
    diagnosis?: string, // diagnóstico 
    clinic: string, // Local
    doctor?: string, // médico
    comments?: string, // Observações
    createdAt?: Date,
    updatedAt?: Date
}