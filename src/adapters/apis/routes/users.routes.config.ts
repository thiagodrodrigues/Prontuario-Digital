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
        this.app.route(`/users/requeriment`)
            .post(
                UserMiddleware.validateRequiredNameBodyFields, // Verifica se o campo Nome foi preenchido
                UserMiddleware.validateRequiredEmailBodyFields, // Verifica se o campo Email foi preenchido
                UserMiddleware.validateRequiredPasswordBodyFields, // Verifica se o campo Senha foi preenchido
                UserMiddleware.validateUserRepeated, // valida se o email utilizado já existe
                UserController.createUserRequeriment //cadastrar novo usuário
                ); 
            
        this.app.route(`/users/charts/:idUser`)
            .put(
                UserMiddleware.validateRequiredBirthDateBodyFields, // Verifica se o campo Data de Nascimento foi preenchido
                UserMiddleware.validateHeightNumber, // Verifica se o campo altura é um número
                UserMiddleware.validateWeightNumber, // Verifica se o campo Peso é um número
                UserController.updateUserChart //cadastrar novo usuário
                ); 
                    
        this.app.route(`/login`)
            .post(UserController.login); // logar um usuário
    
        this.app.route(`/users/:idUser`)
            .all(
                LoginAuthUseCase.checkAuth, // verifica se o usuário está logado e retorna o idUser
                UserMiddleware.validateUserExists // verifica se o idUser existe
                ) 
            .get(UserController.getUserById) // perfil pessoal do usuário
            .put(
                UserMiddleware.validateRequiredNameBodyFields, // Verifica se o campo Nome foi preenchido
                UserMiddleware.validateRequiredEmailBodyFields, // Verifica se o campo Email foi preenchido
                UserMiddleware.validateRequiredPasswordBodyFields, // Verifica se o campo Senha foi preenchido
//                 UserMiddleware.validateRequiredBirthDateBodyFields, // Verifica se o campo Data de Nascimento foi preenchido
                UserMiddleware.validateUserRepeated, // Verifica se o email enviado já existe
                UserController.updateUser // atualizar um usuário específico
                
                ) 
            .delete(UserController.removeUser); // deletar um usuário específico

        return this.app;
    }
}