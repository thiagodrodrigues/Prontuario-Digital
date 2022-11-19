import { ExamEntity } from "../entities/exams/exams.entity";

export interface IExamsRepository {
    readById(resourceId: number): Promise<ExamEntity | undefined>,
    create(resource: ExamEntity): Promise<ExamEntity>,
    deleteById(resourceId: number): Promise<void>,
    listById(resourceId: number): Promise<ExamEntity[]>,
    updateById(resource: ExamEntity): Promise<ExamEntity | undefined>
}