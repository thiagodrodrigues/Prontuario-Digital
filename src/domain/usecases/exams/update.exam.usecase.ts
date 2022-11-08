import { ExamEntity } from "../../entities/exams/exams.entity";
import { IExamsRepository } from "../../repositories/exams.repository.interface";
import ExamRepository from "../../../adapters/repositories/exams.repository";
import { IUseCase } from "../usecase.interface";

class UpdateExamUseCase implements IUseCase {
    constructor(private _repository: IExamsRepository) {
    }
    async execute(data: ExamEntity): Promise<ExamEntity | undefined> {
        return await this._repository.updateById(data);
    }
}

export default new UpdateExamUseCase(
    ExamRepository
);