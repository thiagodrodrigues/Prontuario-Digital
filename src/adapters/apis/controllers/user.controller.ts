import express from 'express';
import createUserUsecase from '../../../domain/usecases/users/create.users.usecase';
import readUserUsecase from '../../../domain/usecases/users/read.users.usecase';
import updateUserUsecase from '../../../domain/usecases/users/update.users.usecase';
import deleteUserUsecase from '../../../domain/usecases/users/delete.users.usecase';
import debug from 'debug';
import loginAuthUsecase from '../../../domain/usecases/users/login.users.usecase';
import constantsConfig from '../../../infrastructure/config/constants.config';

const log: debug.IDebugger = debug('app:users-controller');

class UserController {
    async getUserById(req: express.Request, res: express.Response) {
        const user = await readUserUsecase.execute({
            idUser: Number(req.params.idUser)
        });
        res.status(200).send(user);
    }

    async createUser(req: express.Request, res: express.Response) {
        const user = await createUserUsecase.execute(req.body);
        log(user);
        res.status(201).send(user);
    }

    async updateUser(req: express.Request, res: express.Response) {
        const userModel = await updateUserUsecase.execute({
            name: req.body.name,
	        email: req.body.email,
	        password: req.body.password,
            birthDate: req.body.birthDate,
            idUser: Number(req.params.idUser),
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
            idUser: userModel!.idUser,
            name: userModel!.name,
	        email: userModel!.email,
            birthDate: userModel!.birthDate,
            healthPlan: userModel!.healthPlan,
            allergy: userModel!.allergy,
            bloodType: userModel!.bloodType,
            weight: userModel!.weight,
            height: userModel!.height,
            address: userModel!.address,
            telephone: userModel!.telephone,
            emergency: userModel!.emergency,
            medicines: userModel!.medicines,
            photo: userModel!.photo,
            comments: userModel!.comments
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
            res.status(200).send(user);
        } else {
            res.status(401).send({
                error: constantsConfig.USERS.MESSAGES.ERROR.USER_UNAUTHENTICATEDDD
            });
        }
        
    }
}

export default new UserController();