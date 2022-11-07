import { IChartRepository } from "../../repositories/charts.repository.interface";
import ChartRepository from "../../../adapters/repositories/charts.repository";
import { IUseCase } from "../usecase.interface";

class DeleteChartUseCase implements IUseCase {
    constructor(private _repository: IChartRepository) {
    }
    async execute(data: { idUser: number }): Promise<void> {
        return await this._repository.deleteById(data.idUser);
    }
}

export default new DeleteChartUseCase(
    ChartRepository
);