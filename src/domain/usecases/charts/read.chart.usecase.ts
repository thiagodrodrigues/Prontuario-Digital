import { ChartEntity } from "../../entities/charts/chart.entity";
import { IChartRepository } from "../../repositories/charts.repository.interface";
import ChartRepository from "../../../adapters/repositories/charts.repository";
import { IUseCase } from "../usecase.interface";

class ReadChartUseCase implements IUseCase {
    constructor(private _repository: IChartRepository) {
    }
    async execute(data: { idUser: number }): Promise<ChartEntity | undefined> {
        console.log(data)
        return await this._repository.readById(data.idUser);
    }
}

export default new ReadChartUseCase(
    ChartRepository
);