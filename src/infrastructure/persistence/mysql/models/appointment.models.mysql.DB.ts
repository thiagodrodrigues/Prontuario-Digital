import * as Sequelize from "sequelize";
import { MySqlDatabase } from "../mysql.database";

export default MySqlDatabase.getInstance().createModel('appointments',{
    idAppointment: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'idAppointment'
    },
    idUser: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
                    tableName: 'users'
                 },

          key: 'idUser'
        }
    },
    medicalSpecialties: Sequelize.DataTypes.STRING,
    doctor: Sequelize.DataTypes.STRING,
    hospital: Sequelize.DataTypes.STRING,
    date: Sequelize.DataTypes.DATE,
    diagnosis: Sequelize.DataTypes.STRING,
    comments: Sequelize.DataTypes.STRING,
    createdAt: Sequelize.DataTypes.DATE,
    updatedAt: Sequelize.DataTypes.DATE,
})


   
   
    
