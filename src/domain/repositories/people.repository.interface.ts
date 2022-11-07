import { PeopleEntity } from "../entities/people/people.entity";

export interface IPeopleRepository {
    readById(resourceId: number): Promise<PeopleEntity | undefined>,
    create(resource: PeopleEntity): Promise<PeopleEntity>,
    deleteById(resourceId: number): Promise<void>,
    list(): Promise<PeopleEntity[]>,
    updateById(resource: PeopleEntity): Promise<PeopleEntity | undefined>,
    readByWhere(user: string, pass: string): Promise<PeopleEntity | undefined>
}