import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('appointments', {
            idAppointment: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                field: 'idAppointment',
                autoIncrement: true
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
            crm: {type:Sequelize.DataTypes.INTEGER, allowNull: true},
            symptoms: {type:Sequelize.DataTypes.STRING, allowNull: true},
            medicines: {type:Sequelize.DataTypes.STRING, allowNull: true},
            comments: {type:Sequelize.DataTypes.STRING, allowNull: true},
            createdAt: Sequelize.DataTypes.DATE,
            updatedAt: Sequelize.DataTypes.DATE,
            
        });
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('appointments');
    }
}