import supertest from 'supertest';
import api from './app';
import { UsersEntity } from '../../domain/entities/users/users.entity';
import { AppointmentEntity } from '../../domain/entities/appointments/appointments.entity';
import { ExamEntity } from '../../domain/entities/exams/exams.entity';
import { randomInt } from 'crypto';

describe("Testes Integrados com API", () => {
    const user: UsersEntity = {
        "idUser": 1,
        "name": "Alvia Melo Souza",
        "email": "Alcia.Melo11@live.com",
        "password": "123456"
    };
    const random = String(randomInt(500)); // validação de teste por data... novos cadastros

    test("1. User. Teste integrado de login", async () => {
        const res = await supertest(api).post('/login')
                                    .send(user)
                                    .set('Accept', 'application/json');
        const userResponse = {
                "idUser": user.idUser,
                "name": user.name,
                "email": user.email
        };
        expect(res.status).toEqual(200);
        expect(res.body.User).toMatchObject(userResponse);
        // const token = res.body.token;
    });

    test("2. User. Teste integrado de criação de usuário", async () => {
        const user: UsersEntity = {
                "name": "Usuário Exemplo",
                "email": `usuario.exemplo.${random}@abc.com.br`,
                "password": "123456"
        };
        const userResponse: UsersEntity = {
            "name": "Usuário Exemplo",
            "email": `usuario.exemplo.${random}@abc.com.br`,
    };

        const res = await supertest(api).post('/users')
                                        .send(user)
                                        .set('Accept', 'application/json');
        
        expect(res.status).toEqual(201);
        expect(res.body).toMatchObject(userResponse);
    });

    test("3. User. Teste integrado de atualização de prontuário do usuário", async () => {
        const token = await supertest(api).post('/login')
                                    .send(user)
                                    .set('Accept', 'application/json');
        expect(token.status).toEqual(200);
        const tokenAuth = token.body.token;
        const sendProntuario = {
            "name": "Alvia Melo Souza",
            "email": "Alcia.Melo11@live.com",
            "password": "123456",
            "birthDate": "1992-07-21",
            "telephone": "3199999999",
            "maritalStatus": "Solteiro(a)",
            "sex": "Masculino",
            "weight": 84.40,
            "height": 1.70,
            "zipCode": "31310310",
            "address": "Rua das Goaiabas",
            "number": 999,
            "neighborhood": "Bairro do Limoeiro",
            "complement": "Apto 101",
            "state": "MG",
            "city": "Frutal",
            "smoke": "Não",
            "drugs": "Não",
            "exercises": "Natação",
            "recreation": "Não",
            "familialDisease": "Diabetes",
            "treatment": "Asma",
            "allergy": "Ácaro",
            "pregnant": "Não",
            "medicines": "Novalgina",
            "disease": "Diabetes tipo 1",
            "bloodType": "O+",
            "status": true
        }
        const res = await supertest(api).put(`/users/${user.idUser}`)
                                        .send(sendProntuario)
                                        .set('Authorization', `Bearer ${tokenAuth}`);
        expect(res.status).toEqual(200);
        expect(res.body).toMatchObject({
            "name": "Alvia Melo Souza",
            "email": "Alcia.Melo11@live.com",
            "birthDate": "1992-07-21",
            "telephone": "3199999999",
            "maritalStatus": "Solteiro(a)",
            "sex": "Masculino",
            "weight": 84.4,
            "height": 1.7,
            "zipCode": "31310310",
            "address": "Rua das Goaiabas",
            "number": 999,
            "neighborhood": "Bairro do Limoeiro",
            "complement": "Apto 101",
            "state": "MG",
            "city": "Frutal",
            "smoke": "Não",
            "drugs": "Não",
            "exercises": "Natação",
            "recreation": "Não",
            "familialDisease": "Diabetes",
            "treatment": "Asma",
            "allergy": "Ácaro",
            "pregnant": "Não",
            "medicines": "Novalgina",
            "disease": "Diabetes tipo 1",
            "bloodType": "O+",
            "status": true
        })
    });

    test("4. User. Teste integrado de perfil do usuário", async () => {
        const token = await supertest(api).post('/login')
                                    .send(user)
                                    .set('Accept', 'application/json');
        expect(token.status).toEqual(200);
        const tokenAuth = token.body.token;
        const res = await supertest(api).get(`/users/${user.idUser}`)
                                        .set('Authorization', `Bearer ${tokenAuth}`);
        expect(res.status).toEqual(200);
        expect(res.body).toMatchObject({
            "name": "Alvia Melo Souza",
            "email": "Alcia.Melo11@live.com",
            "birthDate": "1992-07-21T00:00:00.000Z",
            "telephone": "3199999999",
            "maritalStatus": "Solteiro(a)",
            "sex": "Masculino",
            "weight": "84.40",
            "height": "1.70",
            "zipCode": "31310310",
            "address": "Rua das Goaiabas",
            "number": 999,
            "neighborhood": "Bairro do Limoeiro",
            "complement": "Apto 101",
            "state": "MG",
            "city": "Frutal",
            "smoke": "Não",
            "drugs": "Não",
            "exercises": "Natação",
            "recreation": "Não",
            "familialDisease": "Diabetes",
            "treatment": "Asma",
            "allergy": "Ácaro",
            "pregnant": "Não",
            "medicines": "Novalgina",
            "disease": "Diabetes tipo 1",
            "bloodType": "O+",
            "status": true
        })
    });

    test("5. User. Teste integrado de Deletar Usuário", async () => {
        const userExemplo: UsersEntity = {
            "name": "Usuário Exemplo",
            "email": `usuario.exemplo.${random}@abc.com.br`,
            "password": "123456"
    };
        const token = await supertest(api).post('/login')
                                    .send(userExemplo)
                                    .set('Accept', 'application/json');
        expect(token.status).toEqual(200);
        const tokenAuth = token.body.token;
        const tokenId = token.body.User.idUser;
        const res = await supertest(api).del(`/users/${tokenId}`)
                                        .set('Authorization', `Bearer ${tokenAuth}`);
        expect(res.status).toEqual(204);
    });

    test("6. Exam. Teste integrado de cadastrar novo exame do usuário", async () => {
        const token = await supertest(api).post('/login')
                                    .send(user)
                                    .set('Accept', 'application/json');
        expect(token.status).toEqual(200);
        const tokenAuth = token.body.token;
        const tokenId = token.body.User.idUser;
        const sendExam = {
                "exam": "Sangue",
                "date": "2022-11-01T00:00:00.000Z",
                "diagnosis": "Glicemia alterada",
                "clinic": "Laboratório Hermes Pardini",
                "doctor": "Fulano de Tal",
                "comments": "Repetir o exame em 3 meses"
        }
        const res = await supertest(api).post(`/exam/${tokenId}`)
                                        .send(sendExam)
                                        .set('Authorization', `Bearer ${tokenAuth}`);
        expect(res.status).toEqual(201);
        expect(res.body).toMatchObject(sendExam);
    });

    test("7. Exam. Teste integrado de listagem de exames do usuário", async () => {
        const token = await supertest(api).post('/login')
                                    .send(user)
                                    .set('Accept', 'application/json');
        expect(token.status).toEqual(200);
        const tokenAuth = token.body.token;
        const tokenId = token.body.User.idUser;
        const sendExam = {
            "exam": "Sangue",
            "date": "2022-11-01T00:00:00.000Z",
            "diagnosis": "Glicemia alterada",
            "clinic": "Laboratório Hermes Pardini",
            "doctor": "Fulano de Tal",
            "comments": "Repetir o exame em 3 meses"
    };
        const res = await supertest(api).get(`/exam/${tokenId}`)
                                        .set('Authorization', `Bearer ${tokenAuth}`);
        expect(res.status).toEqual(200);
        expect(res.body[res.body.length-1]).toMatchObject(sendExam);
    });

    test("8. Exam. Teste integrado de listagem de exame específico do usuário", async () => {
        const token = await supertest(api).post('/login')
                                    .send(user)
                                    .set('Accept', 'application/json');
        expect(token.status).toEqual(200);
        const tokenAuth = token.body.token;
        const tokenId = token.body.User.idUser;
        const sendExam = {
            "exam": "Sangue",
            "date": "2022-11-01T00:00:00.000Z",
            "diagnosis": "Glicemia alterada",
            "clinic": "Laboratório Hermes Pardini",
            "doctor": "Fulano de Tal",
            "comments": "Repetir o exame em 3 meses"
    };
        const resExam = await supertest(api).get(`/exam/${tokenId}`)
                                        .set('Authorization', `Bearer ${tokenAuth}`);
        expect(resExam.status).toEqual(200);
        const getExamId = resExam.body[resExam.body.length-1].idExams;
        const res = await supertest(api).get(`/exam/${tokenId}/${getExamId}`)
                                        .set('Authorization', `Bearer ${tokenAuth}`);
        expect(res.status).toEqual(200);
        expect(res.body).toMatchObject(sendExam);
    });

    test("9. Exam. Teste integrado de atualização de exame específico do usuário", async () => {
        const token = await supertest(api).post('/login')
                                    .send(user)
                                    .set('Accept', 'application/json');
        expect(token.status).toEqual(200);
        const tokenAuth = token.body.token;
        const tokenId = token.body.User.idUser;
        const resExam = await supertest(api).get(`/exam/${tokenId}`)
                                        .set('Authorization', `Bearer ${tokenAuth}`);
        expect(resExam.status).toEqual(200);
        const getExamId = resExam.body[resExam.body.length-1].idExams;
        const updateExam = {
            "exam": "Eletrocardiograma",
            "date": "2022-11-01T00:00:00.000Z",
            "diagnosis": "Pressão Alta",
            "clinic": "Laboratório Hermes Pardini",
            "doctor": "Fulano de Tal",
            "comments": "Praticar exercícios físicos"
        };
        const res = await supertest(api).put(`/exam/${tokenId}/${getExamId}`)
                                        .send(updateExam)
                                        .set('Authorization', `Bearer ${tokenAuth}`);
        expect(res.status).toEqual(200);
        expect(res.body).toMatchObject(updateExam);
    });

    test("10. Exam. Teste integrado de deletar exame específico do usuário", async () => {
        const token = await supertest(api).post('/login')
                                    .send(user)
                                    .set('Accept', 'application/json');
        expect(token.status).toEqual(200);
        const tokenAuth = token.body.token;
        const tokenId = token.body.User.idUser;
        const resExam = await supertest(api).get(`/exam/${tokenId}`)
                                        .set('Authorization', `Bearer ${tokenAuth}`);
        expect(resExam.status).toEqual(200);
        const getExamId = resExam.body[resExam.body.length-1].idExams;
        const res = await supertest(api).del(`/exam/${tokenId}/${getExamId}`)
                                        .set('Authorization', `Bearer ${tokenAuth}`);
        expect(res.status).toEqual(204);
    });

    test("11. Appointment. Teste integrado de cadastrar nova consulta do usuário", async () => {
        const token = await supertest(api).post('/login')
                                    .send(user)
                                    .set('Accept', 'application/json');
        expect(token.status).toEqual(200);
        const tokenAuth = token.body.token;
        const tokenId = token.body.User.idUser;
        const sendAppointment = {
            "date": "1992-07-21T00:00:00.000Z",
            "doctor": "Fulano de Tal",
            "hospital": "Pronto Socorro",
            "medicalSpecialties": "Clínico Geral",
            "diagnosis": "Covid19",
            "comments": "Repouso, isolamento, Vacinar após 15 dias"
        };
        const res = await supertest(api).post(`/appointment/${tokenId}`)
                                        .send(sendAppointment)
                                        .set('Authorization', `Bearer ${tokenAuth}`);
        expect(res.status).toEqual(201);
        expect(res.body).toMatchObject(sendAppointment);
    });

    test("12. Appointment. Teste integrado de listagem de consultas do usuário", async () => {
        const token = await supertest(api).post('/login')
                                    .send(user)
                                    .set('Accept', 'application/json');
        expect(token.status).toEqual(200);
        const tokenAuth = token.body.token;
        const tokenId = token.body.User.idUser;
        const sendAppointment = {
            "date": "1992-07-21T00:00:00.000Z",
            "doctor": "Fulano de Tal",
            "hospital": "Pronto Socorro",
            "medicalSpecialties": "Clínico Geral",
            "diagnosis": "Covid19",
            "comments": "Repouso, isolamento, Vacinar após 15 dias"
        };
        const res = await supertest(api).get(`/appointment/${tokenId}`)
                                        .set('Authorization', `Bearer ${tokenAuth}`);
        expect(res.status).toEqual(200);
        expect(res.body[res.body.length-1]).toMatchObject(sendAppointment);
    });

    test("13. Appointment. Teste integrado de listagem de consulta específica do usuário", async () => {
        const token = await supertest(api).post('/login')
                                    .send(user)
                                    .set('Accept', 'application/json');
        expect(token.status).toEqual(200);
        const tokenAuth = token.body.token;
        const tokenId = token.body.User.idUser;
        const sendAppointment = {
            "date": "1992-07-21T00:00:00.000Z",
            "doctor": "Fulano de Tal",
            "hospital": "Pronto Socorro",
            "medicalSpecialties": "Clínico Geral",
            "diagnosis": "Covid19",
            "comments": "Repouso, isolamento, Vacinar após 15 dias"
        };
        const resAppointment = await supertest(api).get(`/appointment/${tokenId}`)
                                        .set('Authorization', `Bearer ${tokenAuth}`);
        expect(resAppointment.status).toEqual(200);
        const getAppointmentId = resAppointment.body[resAppointment.body.length-1].idAppointment;
        const res = await supertest(api).get(`/appointment/${tokenId}/${getAppointmentId}`)
                                        .set('Authorization', `Bearer ${tokenAuth}`);
        expect(res.status).toEqual(200);
        expect(res.body).toMatchObject(sendAppointment);
    });

    test("14. Appointment. Teste integrado de atualização de consulta específica do usuário", async () => {
        const token = await supertest(api).post('/login')
                                    .send(user)
                                    .set('Accept', 'application/json');
        expect(token.status).toEqual(200);
        const tokenAuth = token.body.token;
        const tokenId = token.body.User.idUser;
        const resAppointment = await supertest(api).get(`/appointment/${tokenId}`)
                                        .set('Authorization', `Bearer ${tokenAuth}`);
        expect(resAppointment.status).toEqual(200);
        const getAppointmentId = resAppointment.body[resAppointment.body.length-1].idAppointment;
        const updateAppointment = {
            "date": "1992-07-21T00:00:00.000Z",
            "doctor": "Fulano de Tal",
	        "hospital": "Pronto Socorro",
	        "medicalSpecialties": "Clínico Geral",
	        "diagnosis": "Covid19",
	        "comments": "Repouso, isolamento, Vacinar após 15 dias. Houve piora respiratória após 4 dias da consulta e precisou internar"
        };
        const res = await supertest(api).put(`/appointment/${tokenId}/${getAppointmentId}`)
                                        .send(updateAppointment)
                                        .set('Authorization', `Bearer ${tokenAuth}`);
        expect(res.status).toEqual(200);
        expect(res.body).toMatchObject(updateAppointment);
    });

    test("15. Appointment. Teste integrado de deletar consulta específica do usuário", async () => {
        const token = await supertest(api).post('/login')
                                    .send(user)
                                    .set('Accept', 'application/json');
        expect(token.status).toEqual(200);
        const tokenAuth = token.body.token;
        const tokenId = token.body.User.idUser;
        const resAppointment = await supertest(api).get(`/appointment/${tokenId}`)
                                        .set('Authorization', `Bearer ${tokenAuth}`);
        expect(resAppointment.status).toEqual(200);
        const getAppointmentId = resAppointment.body[resAppointment.body.length-1].idAppointment;
        const res = await supertest(api).del(`/appointment/${tokenId}/${getAppointmentId}`)
                                        .set('Authorization', `Bearer ${tokenAuth}`);
        expect(res.status).toEqual(204);
    });

});

