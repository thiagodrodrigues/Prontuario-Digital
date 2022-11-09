import { AppointmentEntity } from "../../entities/appointments/appointments.entity";
import { IAppointmentsRepository } from "../../repositories/appointments.repository.interface";
import AppointmentRepository from "../../../adapters/repositories/appointments.repository";
import { IUseCase } from "../usecase.interface";

class UpdateExamUseCase implements IUseCase {
    constructor(private _repository: IAppointmentsRepository) {
    }
    async execute(data: AppointmentEntity): Promise<AppointmentEntity | undefined> {
        return await this._repository.updateById(data);
    }
}

export default new UpdateExamUseCase(
    AppointmentRepository
);