import { CommonRoutesConfig } from "./common.routes.config";
import appointmentController from "../controllers/appointment.controller";
import LoginAuthMiddleware from "../middlewares/auth.middleware";
import AppointmentMiddleware from "../middlewares/appointment.middleware"
import express from "express";

export class AppointmentRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'AppointmentRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/appointment/:idUser`)
                .all(LoginAuthMiddleware.checkAuth) // verifica se o usuário está logado e retorna o idUser
                .get(appointmentController.listAppointment) // lista todas as consultas do usuário logado
                .post(
                    AppointmentMiddleware.validateRequiredDateBodyFields, // Verifica se o campo Data foi preenchido
                    AppointmentMiddleware.validateRequiredDoctorBodyFields, // Verifica se o campo Médico foi preenchido
                    AppointmentMiddleware.validateRequiredHospitalBodyFields, // Verifica se o campo Hospital foi preenchido
                    appointmentController.createAppointment); //cadastrar nova consulta
                    

        this.app.route(`/appointment/:idUser/:idAppointment`)
            .all(LoginAuthMiddleware.checkAuth) // verifica se o usuário está logado e retorna o idUser
            .get(appointmentController.getAppointmentById) // visualizar uma consulta específica
            .put(
                AppointmentMiddleware.validateRequiredDateBodyFields, // Verifica se o campo Data foi preenchido
                AppointmentMiddleware.validateRequiredDoctorBodyFields, // Verifica se o campo Médico foi preenchido
                AppointmentMiddleware.validateRequiredHospitalBodyFields, // Verifica se o campo Hospital foi preenchido
                appointmentController.updateAppointment // atualizar uma consulta específica
                ) 
            .delete(appointmentController.removeAppointment); // deletar uma consulta específica

        return this.app;
    }
}