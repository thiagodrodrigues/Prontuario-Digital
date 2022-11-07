export interface IUserEntity {
    idUser: number,
    name: string,
    email: string,
    password: string,
    type: string,
    createdAt?: Date,
    updatedAt?: Date
}