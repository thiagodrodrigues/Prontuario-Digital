import express from 'express';
import debug from 'debug';
import constantsConfig from '../../../infrastructure/config/constants.config';

const log: debug.IDebugger = debug('app:exam-middleware');

class UserMiddleware {
    
    async validateRequiredExamBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if(req.body.exam) {
                next();
        } else {
            res.status(400).send({error: constantsConfig.EXAMS.MESSAGES.ERROR.VOID_EXAM});
        }
    }

    async validateRequiredDateBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if(req.body.date) {
                next();
        } else {
            res.status(400).send({error: constantsConfig.EXAMS.MESSAGES.ERROR.VOID_DATE});
        }
    }


    async validateRequiredClinicBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if(req.body.clinic) {
                next();
        } else {
            res.status(400).send({error: constantsConfig.EXAMS.MESSAGES.ERROR.VOID_CLINIC});
        }
    }

}

export default new UserMiddleware();