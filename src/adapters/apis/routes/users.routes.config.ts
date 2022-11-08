import { CommonRoutesConfig } from "./common.routes.config";
import UserController from "../controllers/user.controller";
import LoginAuthUseCase from "../middlewares/auth.middleware";
import UserMiddleware from "../middlewares/user.middleware"
import express from "express";

export class UserRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UserRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/users`)
            .all(UserMiddleware.validateClientRepeated) // valida se o email utilizado já existe
            .post(UserController.createUser); //cadastrar novo usuário

        this.app.route(`/users/:idUser`)
            .all(LoginAuthUseCase.checkAuth) // verifica se o usuário está logado e retorna o idUser
            .get(UserController.getUserById) // perfil pessoal do usuário
            .put(
                UserMiddleware.validateClientRepeated, // Verifica se o email enviado já existe
                UserController.updateUser // atualizar um usuário específico
                ) 
            .delete(UserController.removeUser); // deletar um usuário específico

        this.app.route(`/users/login`)
            .post(UserController.login); // logar um usuário

        return this.app;
    }
}