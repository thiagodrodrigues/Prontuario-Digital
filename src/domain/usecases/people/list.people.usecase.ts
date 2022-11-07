import { PeopleEntity } from "../../entities/people/people.entity";
import { IPeopleRepository } from "../../repositories/people.repository.interface";
import PeopleRepository from "../../../adapters/repositories/people.repository";
import { IUseCase } from "../usecase.interface";

class ListPeopleUseCase implements IUseCase {
    constructor(private _repository: IPeopleRepository) {
    }
    async execute(): Promise<PeopleEntity[] | undefined> {
        return await this._repository.list();
    }
}

export default new ListPeopleUseCase(
    PeopleRepository
);