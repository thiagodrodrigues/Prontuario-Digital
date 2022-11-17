import express from 'express';
import createUserUsecase from '../../../domain/usecases/users/create.users.usecase';
import readUserUsecase from '../../../domain/usecases/users/read.users.usecase';
import updateUserUsecase from '../../../domain/usecases/users/update.users.usecase';
import deleteUserUsecase from '../../../domain/usecases/users/delete.users.usecase';
import updateChartUsersUsecase from '../../../domain/usecases/users/updateChart.users.usecase';
import debug from 'debug';
import loginAuthUsecase from '../../../domain/usecases/users/login.users.usecase';
import constantsConfig from '../../../infrastructure/config/constants.config';
import bcrypt from 'bcrypt';
import jwt  from 'jsonwebtoken';

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
            healthPlan: user!.healthPlan,
            allergy: user!.allergy,
            bloodType: user!.bloodType,
            weight: user!.weight,
            height: user!.height,
            address: user!.address,
            telephone: user!.telephone,
            emergency: user!.emergency,
            medicines: user!.medicines,
            photo: user!.photo,
            comments: user!.comments,
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
            healthPlan: undefined,
            allergy: undefined,
            bloodType: undefined,
            weight: undefined,
            height: undefined,
            address: undefined,
            telephone: undefined,
            emergency: undefined,
            medicines: undefined,
            photo: undefined,
            comments: undefined
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
        console.log(user)
        const userModel = await updateChartUsersUsecase.execute({
            idUser: user!.idUser,
            name: user!.name,
            email: user!.email,
            password: user!.password,
            birthDate: req.body.birthDate,
            healthPlan: req.body.healthPlan,
            allergy: req.body.allergy,
            bloodType: req.body.bloodType,
            weight: req.body.weight,
            height: req.body.height,
            address: req.body.address,
            telephone: req.body.telephone,
            emergency: req.body.emergency,
            medicines: req.body.medicines,
            photo: req.body.photo,
            comments: req.body.comments
        });
        log(userModel);
        res.status(200).send({
            idUser: user!.idUser,
            name: user!.name,
            email: user!.email,
            birthDate: req.body.birthDate,
            healthPlan: req.body.healthPlan,
            allergy: req.body.allergy,
            bloodType: req.body.bloodType,
            weight: req.body.weight,
            height: req.body.height,
            address: req.body.address,
            telephone: req.body.telephone,
            emergency: req.body.emergency,
            medicines: req.body.medicines,
            photo: req.body.photo,
            comments: req.body.comments
        });
    }

    async updateUser(req: express.Request, res: express.Response) {
        let shufflePass = bcrypt.hashSync(req.body.password,10)
        const userModel = await updateUserUsecase.execute({
            idUser: Number(req.params.idUser),
            name: req.body.name,
	        email: req.body.email,
	        password: shufflePass,
        });
        log(userModel);
        res.status(200).send({
            idUser: userModel!.idUser,
            name: userModel!.name,
	        email: userModel!.email,
        });
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
                idUser: user.user.idUser,
                name: user.user.name,
                email: user.user.email,
                token: user.token
            });
        } else {
            res.status(401).send({
                error: constantsConfig.USERS.MESSAGES.ERROR.USER_UNAUTHENTICATED
            });
        }
        
    }
}

export default new UserController();