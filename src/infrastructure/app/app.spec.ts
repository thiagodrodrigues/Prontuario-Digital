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

    test("Teste integrado de login", async () => {
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

    /* test("Teste integrado de criação de usuário", async () => {
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
    }); */

    test("Teste integrado de atualização de prontuário do usuário", async () => {
        const token = await supertest(api).post('/login')
                                    .send(user)
                                    .set('Accept', 'application/json');
        expect(token.status).toEqual(200);
        const tokenUser = token.body.token;
        const sendProntuario = {
            "name": "Alvia Melo Souza",
            "email": "Alcia.Melo11@live.com",
            "password": "123456",
            "birthDate": "1992-07-21",
            "telephone": "3199999999",
            "maritalStatus": "Solteiro(a)",
            "sex": "Masculino",
            "weight": 84.4,
            "height": 1.70,
            "zipCode": "31310310",
            "address": "Rua das Goaiabas",
            "number": "999",
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
                                        .set('Authorization', `Bearer ${tokenUser}`);
        expect(res.status).toEqual(200);
        expect(res.body).toMatchObject({
            "name": "Alvia Melo Souza",
            "email": "Alcia.Melo11@live.com",
            "birthDate": "1992-07-21",
            "telephone": "3199999999",
            "maritalStatus": "Solteiro(a)",
            "sex": "Masculino",
            "weight": 84.4,
            "height": 1.70,
            "zipCode": "31310310",
            "address": "Rua das Goaiabas",
            "number": "999",
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

    test("Teste integrado de perfil do usuário", async () => {
        const token = await supertest(api).post('/login')
                                    .send(user)
                                    .set('Accept', 'application/json');
        expect(token.status).toEqual(200);
        const tokenUser = token.body.token;
        const res = await supertest(api).get(`/users/${user.idUser}`)
                                        .set('Authorization', `Bearer ${tokenUser}`);
        expect(res.status).toEqual(200);
        expect(res.body).toMatchObject({
            "name": "Alvia Melo Souza",
            "email": "Alcia.Melo11@live.com",
            "birthDate": "1992-07-21T00:00:00.000Z",
            "telephone": "3199999999",
            "maritalStatus": "Solteiro(a)",
            "sex": "Masculino",
            "weight": 84.4,
            "height": 1.70,
            "zipCode": "31310310",
            "address": "Rua das Goaiabas",
            "number": "999",
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

})