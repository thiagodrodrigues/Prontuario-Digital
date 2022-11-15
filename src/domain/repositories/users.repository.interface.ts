import { UsersEntity } from "../entities/users/users.entity";

export interface IUsersRepository {
    readById(resourceId: number): Promise<UsersEntity | undefined>,
    readByEmail(resourceId: string): Promise<UsersEntity | undefined>,
    create(resource: UsersEntity): Promise<UsersEntity>,
    deleteById(resourceId: number): Promise<void>,
    list(): Promise<UsersEntity[]>,
    updateById(resource: UsersEntity): Promise<UsersEntity | undefined>,
    readByWhere(user: string): Promise<UsersEntity | undefined>
}