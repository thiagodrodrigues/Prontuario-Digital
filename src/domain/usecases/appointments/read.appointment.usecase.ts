import { AppointmentEntity } from "../../entities/appointments/appointments.entity";
import { IAppointmentsRepository } from "../../repositories/appointments.repository.interface";
import AppointmentRepository from "../../../adapters/repositories/appointments.repository";
import { IUseCase } from "../usecase.interface";

class ReadAppointmentUseCase implements IUseCase {
    constructor(private _repository: IAppointmentsRepository) {
    }
    async execute(data: { idExams: number }): Promise<AppointmentEntity | undefined> {
        console.log(data)
        return await this._repository.readById(data.idExams);
    }
}

export default new ReadAppointmentUseCase(
    AppointmentRepository
);