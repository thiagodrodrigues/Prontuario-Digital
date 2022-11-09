import { CommonRoutesConfig } from "./common.routes.config";
import UserController from "../controllers/user.controller";
import LoginAuthUseCase from "../middlewares/auth.middleware";
import UserMiddleware from "../middlewares/user.middleware"
import express from "express";
import userMiddleware from "../middlewares/user.middleware";

export class UserRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UserRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/users`)
            .all(UserMiddleware.validateUserRepeated) // valida se o email utilizado já existe
            .post(
                UserMiddleware.validateRequiredNameBodyFields, // Verifica se o campo Nome foi preenchido
                UserMiddleware.validateRequiredEmailBodyFields, // Verifica se o campo Email foi preenchido
                UserMiddleware.validateRequiredPasswordBodyFields, // Verifica se o campo Senha foi preenchido
                UserMiddleware.validateRequiredBirthDateBodyFields, // Verifica se o campo Data de Nascimento foi preenchido
                UserController.createUser //cadastrar novo usuário
                ); 

        this.app.route(`/users/:idUser`)
            .all(
                LoginAuthUseCase.checkAuth, // verifica se o usuário está logado e retorna o idUser
                UserMiddleware.validateUserExists // verifica se o idUser existe
                ) 
            .get(UserController.getUserById) // perfil pessoal do usuário
            .put(
                UserMiddleware.validateUserRepeated, // Verifica se o email enviado já existe
                UserMiddleware.validateRequiredNameBodyFields, // Verifica se o campo Nome foi preenchido
                UserMiddleware.validateRequiredEmailBodyFields, // Verifica se o campo Email foi preenchido
                UserMiddleware.validateRequiredPasswordBodyFields, // Verifica se o campo Senha foi preenchido
                UserMiddleware.validateRequiredBirthDateBodyFields, // Verifica se o campo Data de Nascimento foi preenchido
                UserController.updateUser // atualizar um usuário específico
                ) 
            .delete(UserController.removeUser); // deletar um usuário específico

        this.app.route(`/users/login`)
            .post(UserController.login); // logar um usuário

        return this.app;
    }
}