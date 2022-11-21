import { IDatabase } from "./databese.interface";

export interface IDatabaseModel extends  IDatabase {
    createModel(name: string, properties: any): any,
    read(type: any, dataId: number, includes?: object): any,
    list(type: any, includes?: object): any,
    listById(type: any, data: any):any,
    readByWhere(type: any, data: any):any,
    selectQuery(sql:string,replacements:any):any
}