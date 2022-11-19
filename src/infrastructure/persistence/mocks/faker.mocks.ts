import { UsersEntity } from "../../../domain/entities/users/users.entity";
import IMocks from "./mocks.interface";
import { faker } from "@faker-js/faker"
import { IExamEntity } from "../../../domain/entities/exams/exam.entity";
import { IAppointmentEntity } from "../../../domain/entities/appointments/appointment.entity";


export default class FakerMocks implements IMocks{
    getUsers(): UsersEntity[]{
        let users: UsersEntity[] = [];
        users = this._getUsers();
        return users;
    }

    getAppointment(): IAppointmentEntity[] {
        let appointment: IAppointmentEntity[] = [];
        appointment = this._getAppointment();
        return appointment;
        
    }

    getExams(): IExamEntity[] {
        let exams: IExamEntity[] = [];
        exams = this._getExams();
        return exams;
        
    }

    private _getUsers(): UsersEntity[]{
        const users: UsersEntity[] = [];
        Array.from({ length: 20}).forEach(()=>{
            users.push({
                name: faker.name.fullName(),
                email: String(faker.internet.email),
                password: String(faker.internet.password),
                birthDate: faker.date.past(),
                address: faker.address.street(),
                telephone: faker.phone.number(),
                weight: Number(faker.finance.amount(40,180)),
                height: Number(faker.finance.amount(1,2,2)),
            })
        })
        return users;
    }

    private _getExams(): IExamEntity[]{
        const exams: IExamEntity[] = [];
        Array.from({ length: 25}).forEach(()=>{
            exams.push({
                idUser: Number(faker.finance.amount(1,20,0)),
                exam: faker.random.word(),
                date: faker.date.past(),
                status: faker.random.word(),
                clinic: faker.random.words(3),   
                doctor: `Dr(a) ` + faker.name.fullName(),                             
            })          
        })
        return exams;
    }

    private _getAppointment():  IAppointmentEntity[]{
        const appointment: IAppointmentEntity[] = [];
        Array.from({ length: 25}).forEach(()=>{
            appointment.push({
                idUser: Number(faker.finance.amount(1,20,0)),
                doctor: `Dr(a)` + faker.name.fullName(),
                date: faker.date.past(),
                hospital: faker.random.words(3),
            })
        })
        return appointment;
    }


}