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
            idUser: Number(req.params.idUser)
        });
        log(userModel);
        res.status(200).send(userModel);
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
                error: constantsConfig.USERS.MESSAGES.ERROR.USER_UNAUTHENTICATED
            });
        }
        
    }
}

export default new UserController();