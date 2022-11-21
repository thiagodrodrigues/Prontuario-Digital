import { CommonRoutesConfig } from "./common.routes.config";
import ExamController from "../controllers/exam.controller";
import LoginAuthMiddleware from "../middlewares/auth.middleware";
import ExamMiddleware from "../middlewares/exam.middleware"
import express from "express";

export class ExamRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'ExamRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/exam/:idUser`)
                .all(LoginAuthMiddleware.checkAuth) // verifica se o usuário está logado e retorna o idUser
                .get(ExamController.listExamById) // lista todas as consultas do usuário logado
                .post(
                    ExamMiddleware.validateRequiredExamBodyFields, // valida se o campo Exame foi preenchido
                    ExamMiddleware.validateRequiredDateBodyFields, // Verifica se o campo Data foi preenchido
                    ExamMiddleware.validateRequiredClinicBodyFields, // Verifica se o campo Clínica foi preenchido
                    ExamController.createExam //cadastrar nova consulta
                    ); 
                    

        this.app.route(`/exam/:idUser/:idExams`)
            .all(LoginAuthMiddleware.checkAuth) // verifica se o usuário está logado e retorna o idUser
            .get(ExamController.getExamById) // visualizar uma consulta específica
            .put(
                ExamMiddleware.validateRequiredExamBodyFields, // valida se o campo Exame foi preenchido
                ExamMiddleware.validateRequiredDateBodyFields, // Verifica se o campo Data foi preenchido
                ExamMiddleware.validateRequiredClinicBodyFields, // Verifica se o campo Clínica foi preenchido
                ExamController.updateExam // atualizar uma consulta específica
                ) 
            .delete(ExamController.removeExam); // deletar uma consulta específica

        return this.app;
    }
}