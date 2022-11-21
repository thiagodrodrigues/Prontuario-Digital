import { IExamEntity } from "../../../../domain/entities/exams/exam.entity"

export default function (exams: IExamEntity ){
   
    const examGeneral = {
        idExams: exams.idExams,
        idUser: exams.idUser,
        exam: exams.exam,
        date: exams.date,
        diagnosis: exams.diagnosis,
        clinic: exams.clinic,
        doctor: exams.doctor,
        comments: exams.comments,
        createdAt: exams.createdAt,
        updatedAt: exams.updatedAt, 
    }

    return {
        examGeneral: examGeneral
    };
}