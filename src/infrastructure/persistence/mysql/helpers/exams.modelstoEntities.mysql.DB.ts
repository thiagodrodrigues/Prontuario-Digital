import { IExamEntity } from "../../../../domain/entities/exams/exam.entity"

export default function (exams:any): IExamEntity | undefined {
    if(!exams)
    return
    let userGeneral: IExamEntity = {
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
//
    if(exams.logado){
        (userGeneral as IExamEntity).idExams = exams.idExams;
        (userGeneral as IExamEntity).idUser = exams.idUser
        (userGeneral as IExamEntity).exam = exams.exam;
        (userGeneral as IExamEntity).date = exams.date;
        (userGeneral as IExamEntity).status = exams.status;
        (userGeneral as IExamEntity).clinic = exams.clinic;
        (userGeneral as IExamEntity).doctor = exams.doctor
        (userGeneral as IExamEntity).comments = exams.comments;
        (userGeneral as IExamEntity).createdAt = exams.createdAt;
        (userGeneral as IExamEntity).updatedAt = exams.updatedAt;
    }

    return (userGeneral as IExamEntity);
}