import { IDatabaseModel } from "../../infrastructure/persistence/database.model.interface";
import { AppointmentEntity } from "../../domain/entities/appointments/appointments.entity";
import { MySqlDatabase } from "../../infrastructure/persistence/mysql/mysql.database";
import { IAppointmentsRepository } from "../../domain/repositories/appointments.repository.interface"
import * as Sequelize from 'sequelize'
import appointmentModel from '../../infrastructure/persistence/mysql/models/appointment.models.mysql.DB';
import modelsToEntities from '../../infrastructure/persistence/mysql/helpers/appointment.modeltoEntity.mysql'
import entitiesToModels from '../../infrastructure/persistence/mysql/helpers/appointments.entitiestoModel.mysql'


export class AppointmentRepository implements IAppointmentsRepository {
  constructor(
      private _database: IDatabaseModel, 
      private _modelAppointment: Sequelize.ModelCtor<Sequelize.Model<any, any>>
      ){       
      }

  async readById(resourceId: number): Promise<AppointmentEntity | undefined> {
      try{
          const appointmentGeneral = await this._database.read(this._modelAppointment, resourceId, {});
          
          return modelsToEntities(appointmentGeneral);
      } catch(err){
          throw new Error((err as Error).message);
      }
  }

  async readByEmail(email: string): Promise<AppointmentEntity | undefined> {
      try{
          const appointmentGeneral = await this._database.readByWhere(this._modelAppointment, {
              email: email
          });
          
          return modelsToEntities(appointmentGeneral);
      } catch(err){
          throw new Error((err as Error).message);
      }
  }

  async readByWhere(email: string, password: string): Promise<AppointmentEntity | undefined> {
      try{
          const appointmentGeneral = await this._database.readByWhere(this._modelAppointment, {
              email: email,
              password: password
          });
          
          return modelsToEntities(appointmentGeneral);
      } catch(err){
          throw new Error((err as Error).message);
      }
  }

  async create(resource: AppointmentEntity): Promise<AppointmentEntity> {
      const { appointmentGeneral }  = entitiesToModels(resource);
      await this._database.create(this._modelAppointment, appointmentGeneral);
      return resource;
  }

  async deleteById(resourceId: number): Promise<void> {
      await this._database.delete(this._modelAppointment, { idAppointment: resourceId });
  }

  async list(idUser: number): Promise<AppointmentEntity[]> {
    try{

    const examGeneral = await this._database.listById(this._modelAppointment, {
        idUser: idUser
        });
        const clients = examGeneral.map(modelsToEntities);
        return clients;
    } catch(err){
        throw new Error((err as Error).message);
    }
    }

  async updateById(resource: AppointmentEntity): Promise<AppointmentEntity | undefined> {
      if(!resource.idAppointment) throw 'idAppointment não forneceido'
      let examsModel = await this._database.read(this._modelAppointment, resource.idAppointment);
      const { appointmentGeneral } = entitiesToModels(resource);
      await this._database.update(examsModel, appointmentGeneral);
      return resource;
  }
}

export default new AppointmentRepository(
  MySqlDatabase.getInstance(),
  appointmentModel
  );