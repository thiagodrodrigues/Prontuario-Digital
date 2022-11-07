import { PeopleEntity } from "../../entities/people/people.entity";
import { IPeopleRepository } from "../../repositories/people.repository.interface";
import PeopleRepository from "../../../adapters/repositories/people.repository";
import { IUseCase } from "../usecase.interface";

class ReadPeopleseCase implements IUseCase {
    constructor(private _repository: IPeopleRepository) {
    }
    async execute(data: { idUser: number }): Promise<PeopleEntity | undefined> {
        console.log(data)
        return await this._repository.readById(data.idUser);
    }
}

export default new ReadPeopleseCase(
    PeopleRepository
);