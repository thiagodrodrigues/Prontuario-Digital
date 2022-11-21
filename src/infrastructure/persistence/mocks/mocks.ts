import { IAppointmentEntity } from "../../../domain/entities/appointments/appointment.entity";
import { IExamEntity } from "../../../domain/entities/exams/exam.entity";
import { UsersEntity } from "../../../domain/entities/users/users.entity";
import { IChartEntity } from "../../../domain/entities/users/chart.entity";
import createAppointmentUsecase from "../../../domain/usecases/appointments/create.appointment.usecase";
import createExamUsecase from "../../../domain/usecases/exams/create.exam.usecase";
import createUsersUsecase from "../../../domain/usecases/users/create.users.usecase";
import FakerMocks from "./faker.mocks";
import IMocks from "./mocks.interface";

class Mocks {
    private _users: IChartEntity[];
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
        // const user = await this.createUsers();
        // if(user){
        let countExams = 0;
        for(countExams = 0; countExams < this._exams.length; countExams++){
            await createExamUsecase.execute(this._exams[countExams]);
        }
        return {
            createdExames: countExams
    //    }
    };
    }
    async createAppointment(){
        // const user = await this.createUsers();
        // if(user){
        let countAppointment = 0;
        for(countAppointment = 0; countAppointment < this._appointment.length; countAppointment++){
            await createAppointmentUsecase.execute(this._appointment[countAppointment]);            
        }
        return {
            createdAppointment: countAppointment
       // }
    };
    }
}

const execute = async ()=>{
    const mocks = new Mocks(new FakerMocks);

    const totalUsers = await mocks.createUsers();
    console.log(totalUsers);
    const totalExams = await mocks.createExams();
    console.log(totalExams);
    const totalAppointment = await mocks.createAppointment();
    console.log(totalAppointment);
}

execute();