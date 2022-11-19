import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('exams', {
            idExams: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                field: 'idExams',
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
            exam: Sequelize.DataTypes.STRING,
            date: Sequelize.DataTypes.DATE, 
            diagnosis: Sequelize.DataTypes.STRING,
            clinic: Sequelize.DataTypes.STRING,
            doctor: Sequelize.DataTypes.STRING,
            comments: Sequelize.DataTypes.STRING,
            createdAt: Sequelize.DataTypes.DATE,
            updatedAt: Sequelize.DataTypes.DATE,
        });
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('exams');
    }
}