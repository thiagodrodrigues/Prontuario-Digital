import express from 'express';
import debug from 'debug';
import constantsConfig from '../../../infrastructure/config/constants.config';

const log: debug.IDebugger = debug('app:appointment-middleware');

class AppointmentMiddleware {

    async validateCrmNumber(req: express.Request, res: express.Response, next: express.NextFunction){
        const crm = await req.body.crm
        if(typeof crm == "number"){
            next();
        } else {
            res.status(400).send({error: constantsConfig.APPOINTMENTS.MESSAGES.ERROR.CRM_NOT_NUMBER})
        }
    }
    
    async validateRequiredDateBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if(req.body.date) {
                next();
        } else {
            res.status(400).send({error: constantsConfig.APPOINTMENTS.MESSAGES.ERROR.VOID_DATE});
        }
    }

    async validateRequiredDoctorBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if(req.body.doctor) {
                next();
        } else {
            res.status(400).send({error: constantsConfig.APPOINTMENTS.MESSAGES.ERROR.VOID_DOCTOR});
        }
    }

    async validateRequiredHospitalBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if(req.body.hospital) {
                next();
        } else {
            res.status(400).send({error: constantsConfig.APPOINTMENTS.MESSAGES.ERROR.VOID_HOSPITAL});
        }
    }

}

export default new AppointmentMiddleware();