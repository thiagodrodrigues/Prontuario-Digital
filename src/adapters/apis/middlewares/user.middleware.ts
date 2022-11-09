import express from 'express';
import ReadEmailUseCase from '../../../domain/usecases/users/readEmail.users.usecase';
import debug from 'debug';
import constantsConfig from '../../../infrastructure/config/constants.config';

const log: debug.IDebugger = debug('app:user-middleware');

class UserMiddleware {
    
    async validateClientRepeated(req: express.Request, res: express.Response, next: express.NextFunction) {
        let dataWhere: string = req.body.email;
        const user = await ReadEmailUseCase.execute({
            email: dataWhere
        });
        if (!user) {
            next();
        } else {
            res.status(409).send({error: constantsConfig.USERS.MESSAGES.ERROR.USER_ALREADY_EXISTS.replace('{USER_ID}', String(dataWhere))});
        }
    }

}

export default new UserMiddleware();