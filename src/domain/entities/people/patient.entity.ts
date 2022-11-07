import { IUserEntity } from "./user.entity";

export interface IPatientEntity extends IUserEntity {
    cpf: number,
    birthDate: Date,
    healthPlan?: string,
    allergy?: string,
    bloodType?: string,
    weight?: string,
    photo?: string,
    address?: string,
    telephone?: number,
    emergency?: string,
    medicines?: string,
    comments?: string
}