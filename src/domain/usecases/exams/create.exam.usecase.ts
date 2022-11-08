import { ExamEntity } from "../../entities/exams/exams.entity";
import { IExamsRepository } from "../../repositories/exams.repository.interface";
import ExamRepository from "../../../adapters/repositories/exams.repository";
import { IUseCase } from "../usecase.interface";

export class CreateExamUseCase implements IUseCase {
    constructor(private _repository: IExamsRepository) {
    }
    async execute(data: ExamEntity): Promise<ExamEntity | undefined> {
        return await this._repository.create(data);
    }
}

export default new CreateExamUseCase(
    ExamRepository
);