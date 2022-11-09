import * as Sequelize from "sequelize";
import { MySqlDatabase } from "../mysql.database";

export default MySqlDatabase.getInstance().createModel('user',{
    idUser: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'idUser'
    },
    name: Sequelize.DataTypes.STRING,
    email: Sequelize.DataTypes.STRING,
    password: Sequelize.DataTypes.STRING,
    birthDate: Sequelize.DataTypes.DATE, 
    healthPlan:Sequelize.DataTypes.STRING,
    allergy: Sequelize.DataTypes.STRING,
    bloodType: Sequelize.DataTypes.STRING,
    weight: Sequelize.DataTypes.NUMBER,
    height: Sequelize.DataTypes.NUMBER,
    address: Sequelize.DataTypes.STRING,
    telephone: Sequelize.DataTypes.NUMBER,
    emergency: Sequelize.DataTypes.NUMBER,
    medicines: Sequelize.DataTypes.NUMBER,
    photo: Sequelize.DataTypes.STRING,
    comments: Sequelize.DataTypes.STRING,
    createdAt: Sequelize.DataTypes.DATE,
    updatedAt: Sequelize.DataTypes.DATE,
  
})