import { IExamEntity } from "../../../../domain/entities/exams/exam.entity"

export default function (exams: IExamEntity ){
   
    const userGeneral = {
        idExams: exams.idExams,
        idUser: exams.idUser,
        exam: exams.exam,
        date: exams.date,
        status: exams.date,
        clinic: exams.clinic,
        doctor: exams.doctor,
        comments: exams.comments,
        createdAt: exams.createdAt,
        updatedAt: exams.updatedAt, 
    }

    return {
        userGeneral: userGeneral
    };
}