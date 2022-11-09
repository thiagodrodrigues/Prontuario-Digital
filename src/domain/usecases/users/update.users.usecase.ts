import { UsersEntity } from "../../entities/users/users.entity";
import { IUsersRepository } from "../../repositories/users.repository.interface";
import UsersRepository from "../../../adapters/repositories/users.repository";
import { IUseCase } from "../usecase.interface";

class UpdateUsersUseCase implements IUseCase {
    constructor(private _repository: IUsersRepository) {
    }
    async execute(data: UsersEntity): Promise<UsersEntity | undefined> {
        return await this._repository.updateById(data);
    }
}

export default new UpdateUsersUseCase(
    UsersRepository
);