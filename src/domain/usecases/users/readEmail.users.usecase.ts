import { UsersEntity } from "../../entities/users/users.entity";
import { IUsersRepository } from "../../repositories/users.repository.interface";
import { IUseCase } from "../usecase.interface";
import UsersRepository from "../../../adapters/repositories/users.repository";

class ReadEmailUseCase implements IUseCase {

    constructor(private _repository: IUsersRepository) {

    }

    async execute(data: { email: string }): Promise<UsersEntity | undefined> {
        return await this._repository.readByEmail(data.email);
    }
}

export default new ReadEmailUseCase(
    UsersRepository
);