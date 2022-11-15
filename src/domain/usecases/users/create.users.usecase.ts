import { UsersEntity } from "../../entities/users/users.entity";
import { IUsersRepository } from "../../repositories/users.repository.interface";
import UsersRepository from "../../../adapters/repositories/users.repository";
import { IUseCase } from "../usecase.interface";

class CreateUsersUseCase implements IUseCase {
    constructor(private _repository: IUsersRepository) {
    }
    async execute(data: UsersEntity): Promise<UsersEntity | undefined> {
        return await this._repository.create(data);
    }
}

export default new CreateUsersUseCase(
    UsersRepository
);