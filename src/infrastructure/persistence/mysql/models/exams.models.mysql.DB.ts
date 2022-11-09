import * as Sequelize from "sequelize";
import { MySqlDatabase } from "../mysql.Database";

export default MySqlDatabase.getInstance().createModel('user',{
    idExams: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'idExams'
    },
    idUser: Sequelize.DataTypes.NUMBER,
    exam: Sequelize.DataTypes.STRING,
    date: Sequelize.DataTypes.DATE, 
    status:Sequelize.DataTypes.STRING,
    clinic: Sequelize.DataTypes.STRING,
    doctor: Sequelize.DataTypes.STRING,
    comments: Sequelize.DataTypes.NUMBER,
    createdAt: Sequelize.DataTypes.DATE,
    updatedAt: Sequelize.DataTypes.DATE,
  
})


   
   
    
