import express from 'express';
import debug from 'debug';
import constantsConfig from '../../../infrastructure/config/constants.config';

const log: debug.IDebugger = debug('app:user-middleware');

class UserMiddleware {
    
    async validateRequiredExamBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if(req.body.exam) {
                next();
        } else {
            res.status(400).send({error: constantsConfig.USERS.MESSAGES.ERROR.VOID_NAME});
        }
    }

    async validateRequiredDateBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if(req.body.date) {
                next();
        } else {
            res.status(400).send({error: constantsConfig.USERS.MESSAGES.ERROR.VOID_NAME});
        }
    }

    async validateRequiredStatusBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if(req.body.status) {
                next();
        } else {
            res.status(400).send({error: constantsConfig.USERS.MESSAGES.ERROR.VOID_NAME});
        }
    }

    async validateRequiredClinicBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if(req.body.clinic) {
                next();
        } else {
            res.status(400).send({error: constantsConfig.USERS.MESSAGES.ERROR.VOID_NAME});
        }
    }

}

export default new UserMiddleware();