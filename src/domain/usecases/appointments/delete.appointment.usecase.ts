import { IAppointmentsRepository } from "../../repositories/appointments.repository.interface";
import AppointmentRepository from "../../../adapters/repositories/appointments.repository";
import { IUseCase } from "../usecase.interface";

class DeleteAppointmentUseCase implements IUseCase {
    constructor(private _repository: IAppointmentsRepository) {
    }
    async execute(data: { idAppointment: number }): Promise<void> {
        return await this._repository.deleteById(data.idAppointment);
    }
}

export default new DeleteAppointmentUseCase(
    AppointmentRepository
);