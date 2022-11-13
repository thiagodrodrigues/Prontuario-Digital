import { IDatabaseModel } from "../../infrastructure/persistence/database.model.interface";
import { ExamEntity } from "../../domain/entities/exams/exams.entity";
import { MySqlDatabase } from "../../infrastructure/persistence/mysql/mysql.Database";
import { IExamsRepository } from "../../domain/repositories/exams.repository.interface"
import * as Sequelize from 'sequelize'
import examsModel from '../../infrastructure/persistence/mysql/models/exams.models.mysql.DB';
import modelsToEntities from '../../infrastructure/persistence/mysql/helpers/exams.modelstoEntities.mysql.DB'
import entitiesToModels from '../../infrastructure/persistence/mysql/helpers/exams.entitiestoModel.mysql.DB'

export class ExamsRepository implements IExamsRepository {
  constructor(
      private _database: IDatabaseModel, 
      private _modelUser: Sequelize.ModelCtor<Sequelize.Model<any, any>>
      ){       
      }

  async readById(resourceId: number): Promise<ExamEntity | undefined> {
      try{
          const userGeneral = await this._database.read(this._modelUser, resourceId, {});
          
          return modelsToEntities(userGeneral);
      } catch(err){
          throw new Error((err as Error).message);
      }
  }

  async readByEmail(email: string): Promise<ExamEntity | undefined> {
      try{
          const userGeneral = await this._database.readByWhere(this._modelUser, {
              email: email
          });
          
          return modelsToEntities(userGeneral);
      } catch(err){
          throw new Error((err as Error).message);
      }
  }

  async readByWhere(email: string, password: string): Promise<ExamEntity | undefined> {
      try{
          const userGeneral = await this._database.readByWhere(this._modelUser, {
              email: email,
              password: password
          });
          
          return modelsToEntities(userGeneral);
      } catch(err){
          throw new Error((err as Error).message);
      }
  }

  async create(resource: ExamEntity): Promise<ExamEntity> {
      const { userGeneral }  = entitiesToModels(resource);
      await this._database.create(this._modelUser, userGeneral);
      return resource;
  }

  async deleteById(resourceId: number): Promise<void> {
      await this._database.delete(this._modelUser, { idUser: resourceId });
  }

  async list(): Promise<ExamEntity[]> {
      const userGeneral = await this._database.list(this._modelUser, {});
      const clients = userGeneral.map(modelsToEntities);
      return clients;
  }

  async updateById(resource: ExamEntity): Promise<ExamEntity | undefined> {
      console.log(resource)
      let examsModel = await this._database.read(this._modelUser, resource.idUser);
      console.log(`User Model: ${examsModel}`);
      const { userGeneral } = entitiesToModels(resource);
      console.log(userGeneral);
      await this._database.update(examsModel, userGeneral);
      return resource;
  }
}

export default new ExamsRepository(
  MySqlDatabase.getInstance(),
  examsModel
  );