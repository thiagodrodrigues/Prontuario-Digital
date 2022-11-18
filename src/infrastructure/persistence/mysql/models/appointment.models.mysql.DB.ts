import * as Sequelize from "sequelize";
import { MySqlDatabase } from "../mysql.Database";

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
    date: Sequelize.DataTypes.DATE, 
    doctor:Sequelize.DataTypes.STRING,
    hospital: Sequelize.DataTypes.STRING,
    crm: Sequelize.DataTypes.STRING,
    symptoms: Sequelize.DataTypes.STRING,
    medicines: Sequelize.DataTypes.STRING,
    comments: Sequelize.DataTypes.STRING,
    createdAt: Sequelize.DataTypes.DATE,
    updatedAt: Sequelize.DataTypes.DATE,
  
})


   
   
    
