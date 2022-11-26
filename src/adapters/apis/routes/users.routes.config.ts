import { CommonRoutesConfig } from "./common.routes.config";
import UserController from "../controllers/user.controller";
import LoginAuthMiddleware from "../middlewares/auth.middleware";
import UserMiddleware from "../middlewares/user.middleware"
import express from "express";

export class UserRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UserRoutes');
    }

    configureRoutes(): express.Application {
                    
        this.app.route(`/login`)
            .post(UserController.login); // logar um usuário

        this.app.route('/admin/listUsers')
            .get(UserController.listUsers) // Lista todos os usuários cadastrados
    
        this.app.route(`/users/:idUser`)
            .all(
                LoginAuthMiddleware.checkAuth, // verifica se o usuário está logado e retorna o idUser
                UserMiddleware.validateUserExists // verifica se o idUser existe
                ) 
            .get(UserController.getUserById) // perfil pessoal do usuário
            .put(
                UserMiddleware.validateRequiredNameBodyFields, // Verifica se o campo Nome foi preenchido
                UserMiddleware.validateRequiredEmailBodyFields, // Verifica se o campo Email foi preenchido
                UserMiddleware.validateRequiredBirthDateBodyFields, // Verifica se o campo Data de Nascimento foi preenchido
                UserMiddleware.validateHeightNumber, // Verifica se o campo altura é um número
                UserMiddleware.validateWeightNumber, // Verifica se o campo Peso é um número
                UserMiddleware.validateUserRepeated, // Verifica se o email enviado já existe
                UserMiddleware.validateStatusTrue, // Verifica se o usuário concordou com os termos de uso
                UserController.updateUserChart // atualizar um usuário específico
                
                ) 
            .delete(UserController.removeUser); // deletar um usuário específico

        this.app.route(`/users`)
            .post(
                UserMiddleware.validateRequiredNameBodyFields, // Verifica se o campo Nome foi preenchido
                UserMiddleware.validateRequiredEmailBodyFields, // Verifica se o campo Email foi preenchido
                UserMiddleware.validateRequiredPasswordBodyFields, // Verifica se o campo Senha foi preenchido
                UserMiddleware.validateUserRepeated, // valida se o email utilizado já existe
                UserController.createUserRequeriment //cadastrar novo usuário
                ); 

        return this.app;
    }
}