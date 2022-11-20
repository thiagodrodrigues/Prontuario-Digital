import { IDatabaseModel } from "../../infrastructure/persistence/database.model.interface";
import { ExamEntity } from "../../domain/entities/exams/exams.entity";
import { MySqlDatabase } from "../../infrastructure/persistence/mysql/mysql.database";
import { IExamsRepository } from "../../domain/repositories/exams.repository.interface"
import * as Sequelize from 'sequelize'
import examsModel from '../../infrastructure/persistence/mysql/models/exams.models.mysql.DB';
import modelsToEntities from '../../infrastructure/persistence/mysql/helpers/exams.modelstoEntities.mysql.DB'
import entitiesToModels from '../../infrastructure/persistence/mysql/helpers/exams.entitiestoModel.mysql.DB'

export class ExamsRepository implements IExamsRepository {
  constructor(
      private _database: IDatabaseModel, 
      private _modelExam: Sequelize.ModelCtor<Sequelize.Model<any, any>>
      ){       
      }

  async readById(resourceId: number): Promise<ExamEntity | undefined> {
      try{
          const examGeneral = await this._database.read(this._modelExam, resourceId, {});
          
          return modelsToEntities(examGeneral);
      } catch(err){
          throw new Error((err as Error).message);
      }
  }

  
  async listById(idUser: number): Promise<ExamEntity[]> {
    try{

    const examGeneral = await this._database.listById(this._modelExam, {
        idUser: idUser
    });
        const clients = examGeneral.map(modelsToEntities);
        return clients;
    } catch(err){
        throw new Error((err as Error).message);
    }
    }

  async readByEmail(email: string): Promise<ExamEntity | undefined> {
      try{
          const examGeneral = await this._database.readByWhere(this._modelExam, {
              email: email
          });
          
          return modelsToEntities(examGeneral);
      } catch(err){
          throw new Error((err as Error).message);
      }
  }

  async readByWhere(email: string, password: string): Promise<ExamEntity | undefined> {
      try{
          const examGeneral = await this._database.readByWhere(this._modelExam, {
              email: email,
              password: password
          });
          
          return modelsToEntities(examGeneral);
      } catch(err){
          throw new Error((err as Error).message);
      }
  }

  async create(resource: ExamEntity): Promise<ExamEntity> {
      const { examGeneral }  = entitiesToModels(resource);
      await this._database.create(this._modelExam, examGeneral);
      return resource;
  }

  async deleteById(resourceId: number): Promise<void> {
        await this._database.delete(this._modelExam, { idExams: resourceId });
  }

  async updateById(resource: ExamEntity): Promise<ExamEntity | undefined> {
      console.log(resource);
      if(!resource.idExams) throw 'idExams não forneceido'
      let examsModel = await this._database.read(this._modelExam, resource.idExams);
      console.log(`Repositorio, Update 1`, examsModel);
      const { examGeneral } = entitiesToModels(resource);
      console.log(`Repositorio, Update 2`, examGeneral);
      await this._database.update(examsModel, examGeneral);
      return resource;
  }
}

export default new ExamsRepository(
  MySqlDatabase.getInstance(),
  examsModel
  );