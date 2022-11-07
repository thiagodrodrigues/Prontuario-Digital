import { ChartEntity } from "../entities/charts/chart.entity";

export interface IChartRepository {
    readById(resourceId: number): Promise<ChartEntity | undefined>,
    create(resource: ChartEntity): Promise<ChartEntity>,
    deleteById(resourceId: number): Promise<void>,
    list(): Promise<ChartEntity[]>,
    updateById(resource: ChartEntity): Promise<ChartEntity | undefined>
}