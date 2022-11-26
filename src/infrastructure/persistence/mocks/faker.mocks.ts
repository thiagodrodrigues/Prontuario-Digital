import { UsersEntity } from "../../../domain/entities/users/users.entity";
import IMocks from "./mocks.interface";
import { faker } from "@faker-js/faker"
import { IExamEntity } from "../../../domain/entities/exams/exam.entity";
import { IAppointmentEntity } from "../../../domain/entities/appointments/appointment.entity";
import { IChartEntity } from "../../../domain/entities/users/chart.entity";
import bcrypt from 'bcrypt';


export default class FakerMocks implements IMocks{
    getUsers(): IChartEntity[]{
        let users: IChartEntity[] = [];
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

    private _getUsers(): IChartEntity[]{
        faker.locale = 'pt_BR'
        const users: IChartEntity[] = [];
        Array.from({ length: 15}).forEach(()=>{
            let pass = "123456";
            let shufflePass = bcrypt.hashSync(pass,10);
            users.push({
                name: faker.name.fullName(),
                email: String(faker.internet.email()),
                password: shufflePass,
                birthDate: faker.date.past(),
                telephone: faker.phone.number(),
                maritalStatus: faker.helpers.arrayElement(['Solteiro(a)', 'Casado(a)', 'Divorciado(a)']),
                sex: faker.helpers.arrayElement(['Masculino', 'Feminino']),
                height: Number(faker.datatype.number({ min: 1.5, max: 2.0, precision: 0.01 })),
                weight: Number(faker.datatype.number({ min: 45, max: 120, precision: 0.5 })),
                zipCode: String(faker.address.zipCode('#######')),
                address: faker.address.street(),
                number: Number(faker.datatype.number({ min: 1, max: 2000, precision: 1 })),
                neighborhood: faker.address.cityName(),
                complement: faker.helpers.arrayElement(['Casa', 'Fundos', 'Apto 101', 'Apto 102', 'Apto 201', 'Apto 202', 'Apto 301', 'Apto 302']),
                state: faker.address.state(),
                city: faker.address.city(),
                smoke: faker.helpers.arrayElement(['Sim', 'Não']),
                drugs: faker.helpers.arrayElement(['Sim', 'Não']),
                exercises: faker.helpers.arrayElement(['Natação', 'Futebol', 'Academia', 'Corrida', 'Não pratico']),
                recreation: faker.helpers.arrayElement(['Sim', 'Não']),
                familialDisease: faker.helpers.arrayElement(['Diabetes', 'Pressão alta', 'Cancer', 'Sem Histórico familiar']),
                treatment: faker.helpers.arrayElement(['Asma', 'Bronquite', 'Depressão', 'Labirintite', 'Hepatite']),
                allergy: faker.helpers.arrayElement(['Ácaro', 'Mofo', 'Frutos do mar', 'Ovo', 'Sem Alergia']),
                pregnant: faker.helpers.arrayElement(['Sim', 'Não']),
                medicines: faker.helpers.arrayElement(['Novalgina', 'Paracetamol', 'Dipirona', 'Não tomo medicamentos']),
                disease: faker.helpers.arrayElements(['Diabetes tipo 1', 'Diabetes tipo 2', 'Leucemia', 'Linfoma', 'Covid19', 'Depressão', 'Asma', 'Anemia']),
                bloodType: faker.helpers.arrayElement(['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-']),
                status: faker.helpers.arrayElement([true]),
            })
        })
        return users;
    }

    private _getExams(): IExamEntity[]{
        faker.locale = 'pt_BR'
        const exams: IExamEntity[] = [];
        Array.from({ length: 50}).forEach(()=>{
            exams.push({
                idUser: Number(faker.datatype.number({ min: 1, max: 15, precision: 1 })),
                exam: faker.helpers.arrayElement(['Ultrasom', 'Sangue', 'Urina', 'Fezes', 'Raio-X', 'Tomografia', 'Eletrocardiograma']),
                date: faker.date.past(),
                diagnosis: faker.random.word(),
                clinic: `Laboratório` + faker.random.words(1),   
                doctor: `Dr(a) ` + faker.name.fullName(), 
                comments: faker.random.words(8)                            
            })          
        })
        return exams;
    }

    private _getAppointment():  IAppointmentEntity[]{
        faker.locale = 'pt_BR'
        const appointment: IAppointmentEntity[] = [];
        Array.from({ length: 50}).forEach(()=>{
            appointment.push({
                idUser: Number(faker.datatype.number({ min: 1, max: 15, precision: 1 })),
                medicalSpecialties: faker.helpers.arrayElement(['Cardiologista', 'Obstetria', 'Pediatria', 'Neurologia', 'Oftalmologia', 'Clínico Geral', 'Geriatria', 'Ortopedia']),
                doctor: `Dr(a) ` + faker.name.fullName(),
                hospital: `St. ` + faker.name.firstName(),
                date: faker.date.past(),
                diagnosis: faker.random.word(),
                comments: faker.random.words(8)  
            })
        })
        return appointment;
    }


}