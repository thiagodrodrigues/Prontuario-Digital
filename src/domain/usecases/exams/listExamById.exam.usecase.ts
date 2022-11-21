import { ExamEntity } from "../../entities/exams/exams.entity";
import { IExamEntity } from "../../entities/exams/exam.entity";
import { IExamsRepository } from "../../repositories/exams.repository.interface";
import ExamRepository from "../../../adapters/repositories/exams.repository";
import { IUseCase } from "../usecase.interface";

class ListExamById implements IUseCase {
    constructor(private _repository: IExamsRepository) {
    }
    async execute(data: { idUser: number }): Promise<ExamEntity[] | undefined> {
        return await this._repository.listById(data.idUser);
    }
}

export default new ListExamById(
    ExamRepository
);