import { AppointmentEntity } from "../../entities/appointments/appointments.entity";
import { IAppointmentsRepository } from "../../repositories/appointments.repository.interface";
import AppointmentRepository from "../../../adapters/repositories/appointments.repository";
import { IUseCase } from "../usecase.interface";

class ReadAppointmentUseCase implements IUseCase {
    constructor(private _repository: IAppointmentsRepository) {
    }
    async execute(data: { idAppointment: number }): Promise<AppointmentEntity | undefined> {
        return await this._repository.readById(data.idAppointment);
    }
}

export default new ReadAppointmentUseCase(
    AppointmentRepository
);