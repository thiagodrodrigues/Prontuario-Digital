import { IAppointmentEntity } from "../../../domain/entities/appointments/appointment.entity";
import { IExamEntity } from "../../../domain/entities/exams/exam.entity";
import { UsersEntity } from "../../../domain/entities/users/users.entity";
import createAppointmentUsecase from "../../../domain/usecases/appointments/create.appointment.usecase";
import createExamUsecase from "../../../domain/usecases/exams/create.exam.usecase";
import createUsersUsecase from "../../../domain/usecases/users/create.users.usecase";
import FakerMocks from "./faker.mocks";
import IMocks from "./mocks.interface";

class Mocks {
    private _users: UsersEntity[];
    private _exams: IExamEntity[];
    private _appointment: IAppointmentEntity[];

    constructor(mocksGenerator: IMocks){
        this._users = mocksGenerator.getUsers();
        this._exams = mocksGenerator.getExams();
        this._appointment = mocksGenerator.getAppointment();
    }

    async createUsers(){
        let countUsers = 0;
        for(countUsers = 0; countUsers < this._users.length; countUsers++){
           
            await createUsersUsecase.execute(this._users[countUsers]);
        }
        return {
            createdUsers: countUsers
        };
    } 

    async createExams(){
        let countExams = 0;
        for(countExams = 0; countExams < this._exams.length; countExams++){
            await createExamUsecase.execute(this._exams[countExams]);
        }
        return {
            createdExames: countExams
        };
    }
    async createAppointment(){
        let countAppointment = 0;
        for(countAppointment = 0; countAppointment < this._appointment.length; countAppointment++){
            await createAppointmentUsecase.execute(this._appointment[countAppointment]);            
        }
        return {
            createdAppointment: countAppointment
        };
    }
}

const mocks = new Mocks(new FakerMocks);

mocks.createUsers().then((result) => {
    console.log(result);
});

mocks.createExams().then((result) => {
    console.log(result);
});

mocks.createAppointment().then((result) => {
    console.log(result);
});


