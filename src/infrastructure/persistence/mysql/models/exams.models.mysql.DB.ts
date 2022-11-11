import * as Sequelize from "sequelize";
import { MySqlDatabase } from "../mysql.Database";

export default MySqlDatabase.getInstance().createModel('exams',{
    idExams: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'idExams'
    },
    idUser: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {         // Exams belongsTo User 1:N
          model: {
                    tableName: 'user'
                 },

          key: 'idUser'
        }
    },
    exam: Sequelize.DataTypes.STRING,
    date: Sequelize.DataTypes.DATE, 
    status:Sequelize.DataTypes.STRING,
    clinic: Sequelize.DataTypes.STRING,
    doctor: Sequelize.DataTypes.STRING,
    comments: Sequelize.DataTypes.NUMBER,
    createdAt: Sequelize.DataTypes.DATE,
    updatedAt: Sequelize.DataTypes.DATE,
  
})


   
   
    
