import { IAppointmentEntity } from "../../../domain/entities/appointments/appointment.entity";
import { IExamEntity } from "../../../domain/entities/exams/exam.entity";
import { IUserEntity } from "../../../domain/entities/users/user.entity";

export default interface IMocks {
    getUsers(): IUserEntity[];
    getExams(): IExamEntity[];
    getAppointment(): IAppointmentEntity[];
}