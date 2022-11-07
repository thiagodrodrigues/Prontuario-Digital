import { ChartEntity } from "../../entities/charts/chart.entity";
import { IChartRepository } from "../../repositories/charts.repository.interface";
import ChartRepository from "../../../adapters/repositories/charts.repository";
import { IUseCase } from "../usecase.interface";

class ListChartUseCase implements IUseCase {
    constructor(private _repository: IChartRepository) {
    }
    async execute(): Promise<ChartEntity[] | undefined> {
        return await this._repository.list();
    }
}

export default new ListChartUseCase(
    ChartRepository
);