import { IPeopleRepository } from "../../repositories/people.repository.interface";
import { IUseCase } from "../usecase.interface";
import PeopleRepository from "../../../adapters/repositories/people.repository";
import jwt from 'jsonwebtoken';

export class LoginAuthUseCase implements IUseCase {
    constructor(private _repository: IPeopleRepository){

    }

    async execute(data: { email: string, password: string }) {
        const users = await this._repository.readByWhere(data.email, data.password);

        if(users){

            const token = jwt.sign(users, String(process.env.SECRET_KEY), {
                expiresIn: '2 days'
            });

            return {
                user: users,
                token: token
            };
        }

        return;
    }
}

export default new LoginAuthUseCase(
    PeopleRepository
);