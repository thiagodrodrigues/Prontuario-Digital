import { IDatabaseModel } from "../../infrastructure/persistence/database.model.interface";
import { ExamEntity } from "../../domain/entities/exams/exams.entity";
import { MySqlDatabase } from "../../infrastructure/persistence/mysql/mysql.Database";
import { IExamsRepository } from "../../domain/repositories/exams.repository.interface"
import * as Sequelize from 'sequelize'
import examsModel from '../../infrastructure/persistence/mysql/models/exams.models.mysql.DB';
import modelsToEntities from '../../infrastructure/persistence/mysql/helpers/exams.modelstoEntities.mysql.DB'
import entitiesToModels from '../../infrastructure/persistence/mysql/helpers/exams.entitiestoModel.mysql.DB'