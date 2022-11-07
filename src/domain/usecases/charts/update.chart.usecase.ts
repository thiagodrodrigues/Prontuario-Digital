import { ChartEntity } from "../../entities/charts/chart.entity";
import { IChartRepository } from "../../repositories/charts.repository.interface";
import ChartRepository from "../../../adapters/repositories/charts.repository";
import { IUseCase } from "../usecase.interface";

class UpdateChartUseCase implements IUseCase {
    constructor(private _repository: IChartRepository) {
    }
    async execute(data: ChartEntity): Promise<ChartEntity | undefined> {
        return await this._repository.updateById(data);
    }
}

export default new UpdateChartUseCase(
    ChartRepository
);