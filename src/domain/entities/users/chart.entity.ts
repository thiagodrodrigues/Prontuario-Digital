import { StringDataType } from "sequelize"
import { IUserEntity } from "./user.entity"

export interface IChartEntity extends IUserEntity {
    birthDate?: Date, // > Data de aniversário
    telephone?: string, // > telefone
    maritalStatus?: string, //* Estado civil
    sex?: string, //* Sexo
    weight?: number, // > peso
    height?: number, // > altura
    zipCode?: string, //* CEP
    address?: string, // > rua/avenida
    number?: number, //* número
    neighborhood?: string, //* bairro
    complement?: string, //* complemento
    state?: string, //* estado
    city?: string, //* cidade
    smoke?: string, //* fuma
    drugs?: string, //* drogas
    exercises?: string, //* exercícios
    recreation?: string, //* recreação
    familialDisease?: string, //* Histórico familiar
    treatment?: string, //* tratamentos médicos
    allergy?: string, // > alergias
    pregnant?: string, // grávida
    medicines?: string, // medicamentos
    disease?: string[], //* histórico de doenças
    bloodType?: string, // > tipo sanguíneo
    vaccines?: string, //* Vacinas
    status?: boolean //* aceita termos
}