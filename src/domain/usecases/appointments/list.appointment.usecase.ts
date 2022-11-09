import { AppointmentEntity } from "../../entities/appointments/appointments.entity";
import { IAppointmentsRepository } from "../../repositories/appointments.repository.interface";
import AppointmentRepository from "../../../adapters/repositories/appointments.repository";
import { IUseCase } from "../usecase.interface";

class ListExamUseCase implements IUseCase {
    constructor(private _repository: IAppointmentsRepository) {
    }
    async execute(): Promise<AppointmentEntity[] | undefined> {
        return await this._repository.list();
    }
}

export default new ListExamUseCase(
    AppointmentRepository
);