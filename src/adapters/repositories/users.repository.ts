import { IDatabaseModel } from "../../infrastructure/persistence/database.model.interface";
import { UsersEntity } from "../../domain/entities/users/users.entity";
import { MySqlDatabase } from "../../infrastructure/persistence/mysql/mysql.database";
import { IUsersRepository } from "../../domain/repositories/users.repository.interface";
import * as Sequelize from 'sequelize'
import userModel from '../../infrastructure/persistence/mysql/models/user.models.mysql.DB';
import modelsToEntities from '../../infrastructure/persistence/mysql/helpers/users.modelstoEntities.mysql.DB';
import entitiesToModels from '../../infrastructure/persistence/mysql/helpers/users.entitiestoModel.mysql.DB';


export class UsersRepository implements IUsersRepository {
    constructor(
        private _database: IDatabaseModel, 
        private _modelUser: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
        ){
        }

    async readById(resourceId: number): Promise<UsersEntity | undefined> {
        try{
            const userGeneral = await this._database.read(this._modelUser, resourceId, {
            });
            
            return modelsToEntities(userGeneral);
        } catch(err){
            throw new Error((err as Error).message);
        }
    }

    async readByEmail(email: string): Promise<UsersEntity | undefined> {
        try{
            const user = await this._database.readByWhere(this._modelUser, {
                email: email
            });
            
            return modelsToEntities(user);
        } catch(err){
            throw new Error((err as Error).message);
        }
    }

    async readByWhere(email: string): Promise<UsersEntity | undefined> {
        try{
            const user = await this._database.readByWhere(this._modelUser, {
                email: email
            });
            return modelsToEntities(user);
        } catch(err){
            throw new Error((err as Error).message);
        }
    }

    async create(resource: UsersEntity): Promise<UsersEntity> {
        const { userGeneral }  = entitiesToModels(resource);
        
        const userModel = await this._database.create(this._modelUser, userGeneral);

        return resource;
    }

    async deleteById(resourceId: number): Promise<void> {
        await this._database.delete(this._modelUser, { idUser: resourceId });
    }

    async list(): Promise<UsersEntity[]> {
        const userGeneral = await this._database.list(this._modelUser);
        const clients = userGeneral.map(modelsToEntities);
        const user0 = {idUser: clients[0].idUser, name: clients[0].name, email: clients[0].email};
        const user1 = {idUser: clients[1].idUser, name: clients[1].name, email: clients[1].email};
        const user2 = {idUser: clients[2].idUser, name: clients[2].name, email: clients[2].email};
        const resposta = [user0, user1, user2]
        
        return resposta;
    }

    async updateById(resource: UsersEntity): Promise<UsersEntity | undefined> {

    
        let userModel = await this._database.read(this._modelUser, Number(resource.idUser));

        const { userGeneral } = entitiesToModels(resource);
        
        await this._database.update(userModel, userGeneral);

        return resource;
    }
}

export default new UsersRepository(
    MySqlDatabase.getInstance(),
    userModel
    );