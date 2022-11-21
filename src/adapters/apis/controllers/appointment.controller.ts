import express from 'express';
import listAppointmentUsecase from '../../../domain/usecases/appointments/list.appointment.usecase';
import readAppointmentUsecase from '../../../domain/usecases/appointments/read.appointment.usecase';
import deleteAppointmentUsecase from '../../../domain/usecases/appointments/delete.appointment.usecase';
import createAppointmentUsecase from '../../../domain/usecases/appointments/create.appointment.usecase';
import updateAppointmentUsecase from '../../../domain/usecases/appointments/update.appointment.usecase';
import debug from 'debug';
import constantsConfig from '../../../infrastructure/config/constants.config';
import jwt from 'jsonwebtoken';

const log: debug.IDebugger = debug('app:appointment-controller');

class AppointmentController {
    
    async listAppointment(req: express.Request, res: express.Response){
        const appointment = await listAppointmentUsecase.execute({
            idUser: Number(req.params.idUser)
        });
        res.status(200).send(appointment);
    }

    async getAppointmentById(req: express.Request, res: express.Response) {
        const appointment = await readAppointmentUsecase.execute({
            idAppointment: Number(req.params.idAppointment)
        });
        res.status(200).send(appointment);
    }

    async createAppointment(req: express.Request, res: express.Response) {
        const token = req.header(`Authorization`)?.replace(`Bearer `, ``);  
        if(!token){
            res.status(401).send({
                error: constantsConfig.APPOINTMENTS.MESSAGES.ERROR.REQUIRE_LOGIN
            });
        } else {
            const decoded = jwt.verify(token, String(process.env.SECRET_KEY));
            if(typeof decoded == `string`){
                res.status(401).send({
                    error: constantsConfig.APPOINTMENTS.MESSAGES.ERROR.REQUIRE_LOGIN
                });
            } else {
        const appointment = await createAppointmentUsecase.execute({
            idUser: decoded.idUser,
            idAppointment: req.body.idAppointment,
            medicalSpecialties: req.body.medicalSpecialties,
            doctor: req.body.doctor,
            hospital: req.body.hospital,
            date: req.body.date,
            diagnosis: req.body.diagnosis,
            comments: req.body.comments
        });
        log(appointment);
        res.status(201).send(appointment);
    }}  
    }

    async updateAppointment(req: express.Request, res: express.Response){
        const token = req.header(`Authorization`)?.replace(`Bearer `, ``);  
        if(!token){
            res.status(401).send({
                error: constantsConfig.APPOINTMENTS.MESSAGES.ERROR.REQUIRE_LOGIN
            });
        } else {
            const decoded = jwt.verify(token, String(process.env.SECRET_KEY));
            if(typeof decoded == `string`){
                res.status(401).send({
                    error: constantsConfig.APPOINTMENTS.MESSAGES.ERROR.REQUIRE_LOGIN
                });
            } else {
        const appointment = await readAppointmentUsecase.execute({
            idAppointment: Number(req.params.idAppointment)
        });
        
        const appointmentModel = await updateAppointmentUsecase.execute({
            idUser: decoded.idUser,
            idAppointment: Number(req.params.idAppointment),
            medicalSpecialties: req.body.medicalSpecialties,
            doctor: req.body.doctor,
            hospital: req.body.hospital,
            date: req.body.date,
            diagnosis: req.body.diagnosis,
            comments: req.body.comments
        });
        log(appointmentModel);
        res.status(200).send(appointmentModel);
    }}}

    async removeAppointment(req: express.Request, res: express.Response) {
        const appointment = await deleteAppointmentUsecase.execute({
            idAppointment: Number(req.params.idAppointment)
        });
        res.status(204).send();
    }


}

export default new AppointmentController();