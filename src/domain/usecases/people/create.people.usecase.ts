import { PeopleEntity } from "../../entities/people/people.entity";
import { IPeopleRepository } from "../../repositories/people.repository.interface";
import PeopleRepository from "../../../adapters/repositories/people.repository";
import { IUseCase } from "../usecase.interface";

export class CreatePeopleUseCase implements IUseCase {
    constructor(private _repository: IPeopleRepository) {
    }
    async execute(data: PeopleEntity): Promise<PeopleEntity | undefined> {
        return await this._repository.create(data);
    }
}

export default new CreatePeopleUseCase(
    PeopleRepository
);