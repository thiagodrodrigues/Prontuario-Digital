import { AppointmentEntity } from "../entities/appointments/appointments.entity";

export interface IAppointmentsRepository {
    readById(resourceId: number): Promise<AppointmentEntity | undefined>,
    create(resource: AppointmentEntity): Promise<AppointmentEntity>,
    deleteById(resourceId: number): Promise<void>,
    list(resourceId: number): Promise<AppointmentEntity[]>,
    updateById(resource: AppointmentEntity): Promise<AppointmentEntity | undefined>
}