import { IExamEntity } from "../../../../domain/entities/exams/exam.entity"

export default function (exams:any): IExamEntity | undefined {
    if(!exams)
    return
    let examGeneral: IExamEntity = {
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
//
    if(exams.logado){
        (examGeneral as IExamEntity).idExams = exams.idExams;
        (examGeneral as IExamEntity).idUser = exams.idUser
        (examGeneral as IExamEntity).exam = exams.exam;
        (examGeneral as IExamEntity).date = exams.date;
        (examGeneral as IExamEntity).diagnosis = exams.diagnosis;
        (examGeneral as IExamEntity).clinic = exams.clinic;
        (examGeneral as IExamEntity).doctor = exams.doctor
        (examGeneral as IExamEntity).comments = exams.comments;
        (examGeneral as IExamEntity).createdAt = exams.createdAt;
        (examGeneral as IExamEntity).updatedAt = exams.updatedAt;
    }

    return (examGeneral as IExamEntity);
}