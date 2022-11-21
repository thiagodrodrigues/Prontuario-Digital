import express from 'express';
import debug from 'debug';
import constantsConfig from '../../../infrastructure/config/constants.config';

const log: debug.IDebugger = debug('app:appointment-middleware');

class AppointmentMiddleware {

    async validateMedicalSpecialties(req: express.Request, res: express.Response, next: express.NextFunction){
        if(req.body.medicalSpecialties) {
            next();
    } else {
        res.status(400).send({error: constantsConfig.APPOINTMENTS.MESSAGES.ERROR.VOID_MEDICAL_SPECIALTIES});
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