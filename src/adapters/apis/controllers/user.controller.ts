import express from 'express';
import createUserUsecase from '../../../domain/usecases/users/create.users.usecase';
import readUserUsecase from '../../../domain/usecases/users/read.users.usecase';
import deleteUserUsecase from '../../../domain/usecases/users/delete.users.usecase';
import updateChartUsersUsecase from '../../../domain/usecases/users/updateChart.users.usecase';
import debug from 'debug';
import loginAuthUsecase from '../../../domain/usecases/users/login.users.usecase';
import constantsConfig from '../../../infrastructure/config/constants.config';
import bcrypt from 'bcrypt';
import listUsersUsecase from '../../../domain/usecases/users/list.users.usecase';

const log: debug.IDebugger = debug('app:users-controller');

class UserController {

    async getUserById(req: express.Request, res: express.Response) {
        const user = await readUserUsecase.execute({
            idUser: Number(req.params.idUser)
        });
        res.status(200).send({
            idUser: user!.idUser,
            name: user!.name,
            email: user!.email,
            birthDate: user!.birthDate,
            telephone: user!.telephone,
            maritalStatus: user!.maritalStatus,
            sex: user!.sex,
            weight: user!.weight,
            height: user!.height,
            zipCode: user!.zipCode,
            address: user!.address,
            number: user!.number,
            neighborhood: user!.neighborhood,
            complement: user!.complement,
            state: user!.state,
            city: user!.city,
            smoke: user!.smoke,
            drugs: user!.drugs,
            exercises: user!.exercises,
            recreation: user!.recreation,
            familialDisease: user!.familialDisease,
            treatment: user!.treatment,
            allergy: user!.allergy,
            pregnant: user!.pregnant,
            medicines: user!.medicines,
            disease: user!.disease,
            bloodType: user!.bloodType,
            status: user!.status
        });
    }

    async createUserRequeriment(req: express.Request, res: express.Response) {
        
        let shufflePass = bcrypt.hashSync(req.body.password,10)
        const user = await createUserUsecase.execute({
            idUser: req.body.idUser,
            name: req.body.name,
            email: req.body.email,
            password: shufflePass,
            birthDate: undefined,
            telephone: undefined,
            maritalStatus: undefined,
            sex: undefined,
            weight: undefined,
            height: undefined,
            zipCode: undefined,
            address: undefined,
            number: undefined,
            neighborhood: undefined,
            complement: undefined,
            state: undefined,
            city: undefined,
            smoke: undefined,
            drugs: undefined,
            exercises: undefined,
            recreation: undefined,
            familialDisease: undefined,
            treatment: undefined,
            allergy: undefined,
            pregnant: undefined,
            medicines: undefined,
            disease: undefined,
            bloodType: undefined,
            status: undefined
        });
        log(user);
        res.status(201).send({
            idUser: req.body.idUser,
            name: req.body.name,
            email: req.body.email,
        });
    }

    async updateUserChart(req: express.Request, res: express.Response){
        const user = await readUserUsecase.execute({
            idUser: Number(req.params.idUser)
        });
        console.log(user);
        if(req.body.password){
        let shufflePass = bcrypt.hashSync(req.body.password,10);
        const userModel = await updateChartUsersUsecase.execute({
            idUser: user!.idUser,
            name: req.body.name,
            email: req.body.email,
            password: shufflePass,
            birthDate: req.body.birthDate,
            telephone: req.body.telephone,
            maritalStatus: req.body.maritalStatus,
            sex: req.body.sex,
            weight: req.body.weight,
            height: req.body.height,
            zipCode: req.body.zipCode,
            address: req.body.address,
            number: req.body.number,
            neighborhood: req.body.neighborhood,
            complement: req.body.complement,
            state: req.body.state,
            city: req.body.city,
            smoke: req.body.smoke,
            drugs: req.body.drugs,
            exercises: req.body.exercises,
            recreation: req.body.recreation,
            familialDisease: req.body.familialDisease,
            treatment: req.body.treatment,
            medicines: req.body.medicines,
            allergy: req.body.allergy,
            pregnant: req.body.pregnant,
            disease: req.body.disease,
            bloodType: req.body.bloodType,
            status: req.body.status
        });
        log(userModel);
        res.status(200).send({
            idUser: userModel!.idUser,
            name: userModel!.name,
            email: userModel!.email,
            birthDate: userModel!.birthDate,
            telephone: userModel!.telephone,
            maritalStatus: userModel!.maritalStatus,
            sex: userModel!.sex,
            weight: userModel!.weight,
            height: userModel!.height,
            zipCode: userModel!.zipCode,
            address: userModel!.address,
            number: userModel!.number,
            neighborhood: userModel!.neighborhood,
            complement: userModel!.complement,
            state: userModel!.state,
            city: userModel!.city,
            smoke: userModel!.smoke,
            drugs: userModel!.drugs,
            exercises: userModel!.exercises,
            recreation: userModel!.recreation,
            familialDisease: userModel!.familialDisease,
            treatment: userModel!.treatment,
            medicines: userModel!.medicines,
            allergy: userModel!.allergy,
            pregnant: userModel!.pregnant,
            disease: userModel!.disease,
            bloodType: userModel!.bloodType,
            status: userModel!.status
        })} else {
            let pass = user!.password;
            console.log(pass)
            const userModel = await updateChartUsersUsecase.execute({
            idUser: user!.idUser,
            name: req.body.name,
            email: req.body.email,
            password: user!.password,
            birthDate: req.body.birthDate,
            telephone: req.body.telephone,
            maritalStatus: req.body.maritalStatus,
            sex: req.body.sex,
            weight: req.body.weight,
            height: req.body.height,
            zipCode: req.body.zipCode,
            address: req.body.address,
            number: req.body.number,
            neighborhood: req.body.neighborhood,
            complement: req.body.complement,
            state: req.body.state,
            city: req.body.city,
            smoke: req.body.smoke,
            drugs: req.body.drugs,
            exercises: req.body.exercises,
            recreation: req.body.recreation,
            familialDisease: req.body.familialDisease,
            treatment: req.body.treatment,
            medicines: req.body.medicines,
            allergy: req.body.allergy,
            pregnant: req.body.pregnant,
            disease: req.body.disease,
            bloodType: req.body.bloodType,
            status: req.body.status
        });
        log(userModel);
        res.status(200).send({
            idUser: userModel!.idUser,
            name: userModel!.name,
            email: userModel!.email,
            birthDate: userModel!.birthDate,
            telephone: userModel!.telephone,
            maritalStatus: userModel!.maritalStatus,
            sex: userModel!.sex,
            weight: userModel!.weight,
            height: userModel!.height,
            zipCode: userModel!.zipCode,
            address: userModel!.address,
            number: userModel!.number,
            neighborhood: userModel!.neighborhood,
            complement: userModel!.complement,
            state: userModel!.state,
            city: userModel!.city,
            smoke: userModel!.smoke,
            drugs: userModel!.drugs,
            exercises: userModel!.exercises,
            recreation: userModel!.recreation,
            familialDisease: userModel!.familialDisease,
            treatment: userModel!.treatment,
            medicines: userModel!.medicines,
            allergy: userModel!.allergy,
            pregnant: userModel!.pregnant,
            disease: userModel!.disease,
            bloodType: userModel!.bloodType,
            status: userModel!.status
        }) 
        };
    }


    async removeUser(req: express.Request, res: express.Response) {
        const User = await deleteUserUsecase.execute({
            idUser: Number(req.params.idUser)
        });
        res.status(204).send();
    }

    async login(req: express.Request, res: express.Response){
        const user = await loginAuthUsecase.execute(req.body);
        if(user){
            res.status(200).send({
                User: {
                    idUser: user.user.idUser,
                    name: user.user.name,
                    email: user.user.email
                },
                token: user.token
            });
        } else {
            res.status(401).send({
                error: constantsConfig.USERS.MESSAGES.ERROR.USER_UNAUTHENTICATED
            });
        }
        
    }

    async listUsers(req: express.Request, res: express.Response) {
        const users = await listUsersUsecase.execute();
        res.status(200).send(users);
    }

}

export default new UserController();