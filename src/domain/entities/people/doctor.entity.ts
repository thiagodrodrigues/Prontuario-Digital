import { IUserEntity } from "./user.entity";

export interface IDoctorEntity extends IUserEntity {
    crm: number,
    hospital?: string
}