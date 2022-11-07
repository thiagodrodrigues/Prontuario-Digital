import { PeopleEntity } from "../../entities/people/people.entity";
import { IPeopleRepository } from "../../repositories/people.repository.interface";
import PeopleRepository from "../../../adapters/repositories/people.repository";
import { IUseCase } from "../usecase.interface";

class UpdateUserUseCase implements IUseCase {
    constructor(private _repository: IPeopleRepository) {
    }
    async execute(data: PeopleEntity): Promise<PeopleEntity | undefined> {
        return await this._repository.updateById(data);
    }
}

export default new UpdateUserUseCase(
    PeopleRepository
);