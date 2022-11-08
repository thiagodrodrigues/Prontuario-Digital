import { IExamsRepository } from "../../repositories/exams.repository.interface";
import ExamRepository from "../../../adapters/repositories/exams.repository";
import { IUseCase } from "../usecase.interface";

class DeleteExamUseCase implements IUseCase {
    constructor(private _repository: IExamsRepository) {
    }
    async execute(data: { idExams: number }): Promise<void> {
        return await this._repository.deleteById(data.idExams);
    }
}

export default new DeleteExamUseCase(
    ExamRepository
);