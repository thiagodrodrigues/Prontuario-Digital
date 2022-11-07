import { IPeopleRepository } from "../../repositories/people.repository.interface";
import PeopleRepository from "../../../adapters/repositories/people.repository";
import { IUseCase } from "../usecase.interface";

class DeletePeopleUseCase implements IUseCase {
    constructor(private _repository: IPeopleRepository) {
    }
    async execute(data: { idUser: number }): Promise<void> {
        return await this._repository.deleteById(data.idUser);
    }
}

export default new DeletePeopleUseCase(
    PeopleRepository
);