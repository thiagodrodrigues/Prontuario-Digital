import { IUsersRepository } from "../../repositories/users.repository.interface";
import UsersRepository from "../../../adapters/repositories/users.repository";
import { IUseCase } from "../usecase.interface";

class DeleteUsersUseCase implements IUseCase {
    constructor(private _repository: IUsersRepository) {
    }
    async execute(data: { idUser: number }): Promise<void> {
        return await this._repository.deleteById(data.idUser);
    }
}

export default new DeleteUsersUseCase(
    UsersRepository
);