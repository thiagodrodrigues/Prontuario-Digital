import { IUserEntity } from "./user.entity"

export interface IChartEntity extends IUserEntity {
    birthDate?: Date,
    healthPlan?: string,
    allergy?: string,
    bloodType?: string,
    weight?: number,
    height?: number,
    address?: string,
    telephone?: string,
    emergency?: string,
    medicines?: string,
    photo?: string,
    comments?: string
}