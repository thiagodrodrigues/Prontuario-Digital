import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('users', {
            idUser: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                field: 'idUser',
                autoIncrement: true
            },
            name: Sequelize.DataTypes.STRING,
            email: Sequelize.DataTypes.STRING,
            password: Sequelize.DataTypes.STRING,
            birthDate: Sequelize.DataTypes.DATE, 
            healthPlan:Sequelize.DataTypes.STRING,
            allergy: Sequelize.DataTypes.STRING,
            bloodType: Sequelize.DataTypes.STRING,
            weight: Sequelize.DataTypes.INTEGER,
            height: Sequelize.DataTypes.INTEGER,
            address: Sequelize.DataTypes.STRING,
            telephone: Sequelize.DataTypes.STRING,
            emergency: Sequelize.DataTypes.STRING,
            medicines: Sequelize.DataTypes.STRING,
            photo: Sequelize.DataTypes.STRING,
            comments: Sequelize.DataTypes.STRING,
            createdAt: Sequelize.DataTypes.DATE,
            updatedAt: Sequelize.DataTypes.DATE,
            
        });
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('users');
    }
}