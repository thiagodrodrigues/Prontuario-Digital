import { IChartEntity } from "../../entities/users/chart.entity";
import { IUsersRepository } from "../../repositories/users.repository.interface";
import UsersRepository from "../../../adapters/repositories/users.repository";
import { IUseCase } from "../usecase.interface";

class UpdateUsersChartUseCase implements IUseCase {
    constructor(private _repository: IUsersRepository) {
    }
    async execute(data: IChartEntity): Promise<IChartEntity | undefined> {
        return await this._repository.updateById(data);
    }
}

export default new UpdateUsersChartUseCase(
    UsersRepository
);