import { IDatabaseModel } from "../../infrastructure/persistence/database.model.interface";
import { AppointmentEntity } from "../../domain/entities/appointments/appointments.entity";
import { MySqlDatabase } from "../../infrastructure/persistence/mysql/mysql.Database";
import { IAppointmentsRepository } from "../../domain/repositories/appointments.repository.interface"
import * as Sequelize from 'sequelize'
import examsModel from '../../infrastructure/persistence/mysql/models/exams.models.mysql.DB';
import modelsToEntities from '../../infrastructure/persistence/mysql/helpers/exams.modelstoEntities.mysql.DB'
import entitiesToModels from '../../infrastructure/persistence/mysql/helpers/exams.entitiestoModel.mysql.DB'


export class AppointmentRepository implements IAppointmentsRepository {
  constructor(
      private _database: IDatabaseModel, 
      private _modelUser: Sequelize.ModelCtor<Sequelize.Model<any, any>>
      ){       
      }

  async readById(resourceId: number): Promise<AppointmentEntity | undefined> {
      try{
          const userGeneral = await this._database.read(this._modelUser, resourceId, {});
          
          return modelsToEntities(userGeneral);
      } catch(err){
          throw new Error((err as Error).message);
      }
  }

  async readByEmail(email: string): Promise<AppointmentEntity | undefined> {
      try{
          const userGeneral = await this._database.readByWhere(this._modelUser, {
              email: email
          });
          
          return modelsToEntities(userGeneral);
      } catch(err){
          throw new Error((err as Error).message);
      }
  }

  async readByWhere(email: string, password: string): Promise<AppointmentEntity | undefined> {
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

  async create(resource: AppointmentEntity): Promise<AppointmentEntity> {
      const { userGeneral }  = entitiesToModels(resource);
      await this._database.create(this._modelUser, userGeneral);
      return resource;
  }

  async deleteById(resourceId: number): Promise<void> {
      await this._database.delete(this._modelUser, { idUser: resourceId });
  }

  async list(): Promise<AppointmentEntity[]> {
      const userGeneral = await this._database.list(this._modelUser, {});
      const clients = userGeneral.map(modelsToEntities);
      return clients;
  }

  async updateById(resource: AppointmentEntity): Promise<AppointmentEntity | undefined> {
      console.log(resource)
      let examsModel = await this._database.read(this._modelUser, resource.idUser);
      console.log(`User Model: ${examsModel}`);
      const { userGeneral } = entitiesToModels(resource);
      console.log(userGeneral);
      await this._database.update(examsModel, userGeneral);
      return resource;
  }
}

export default new AppointmentRepository(
  MySqlDatabase.getInstance(),
  examsModel
  );